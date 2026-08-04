"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import type { ChesterPlace } from "@/content/chester-places";

interface ChesterMapProps {
  places: ChesterPlace[];
}

// Build a paw-print divIcon with the place photo embedded in the central pad
function buildPawIcon(photoSrc: string, active = false): L.DivIcon {
  const size = active ? 52 : 40;
  const border = active ? "#E8B04A" : "#A8B368";
  const shadow = active
    ? "0 4px 20px rgba(43,32,25,0.25)"
    : "0 2px 10px rgba(43,32,25,0.15)";

  return L.divIcon({
    className: "",
    html: `
      <div style="width:${size}px;height:${size}px;position:relative;filter:drop-shadow(${shadow});transition:all 0.25s ease;">
        <svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" style="position:absolute;inset:0;">
          <!-- toe beans -->
          <ellipse cx="22" cy="22" rx="10" ry="13" fill="#FBF7EF" stroke="${border}" stroke-width="3"/>
          <ellipse cx="50" cy="14" rx="10" ry="13" fill="#FBF7EF" stroke="${border}" stroke-width="3"/>
          <ellipse cx="78" cy="22" rx="10" ry="13" fill="#FBF7EF" stroke="${border}" stroke-width="3"/>
          <!-- main pad -->
          <clipPath id="pad-clip-${size}">
            <ellipse cx="50" cy="72" rx="30" ry="28"/>
          </clipPath>
          <ellipse cx="50" cy="72" rx="30" ry="28" fill="#FBF7EF" stroke="${border}" stroke-width="3"/>
          <image href="${photoSrc}" x="20" y="44" width="60" height="56" clip-path="url(#pad-clip-${size})" preserveAspectRatio="xMidYMid slice"/>
        </svg>
      </div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

export default function ChesterMap({ places }: ChesterMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<L.Marker[]>([]);

  // Derive featured index from data; fall back to 0
  const featuredIdx = places.findIndex((p) => p.featured);
  const defaultIdx = featuredIdx >= 0 ? featuredIdx : 0;

  const [activeIdx, setActiveIdx] = useState<number | null>(defaultIdx);
  const [cardPos, setCardPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: true,
      dragging: true,
      zoomControl: false,
    });
    mapRef.current = map;

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    // Warm the tile layer slightly
    map.whenReady(() => {
      const tilePanes = containerRef.current?.querySelectorAll<HTMLElement>(
        ".leaflet-tile-pane"
      );
      tilePanes?.forEach((el) => {
        el.style.filter = "sepia(0.1) saturate(1.1)";
      });
    });

    map.setView([37.7749, -122.4194], 13);

    places.forEach((place, i) => {
      const marker = L.marker(place.coords, {
        icon: buildPawIcon(place.photo, i === defaultIdx),
      }).addTo(map);

      marker.on("click", (e) => {
        const point = map.latLngToContainerPoint(e.latlng);
        setCardPos({ x: point.x, y: point.y });
        setActiveIdx(i);
        markersRef.current.forEach((m, j) => {
          m.setIcon(buildPawIcon(places[j].photo, j === i));
        });
      });

      markersRef.current.push(marker);
    });

    // Pre-open featured pin
    map.whenReady(() => {
      setTimeout(() => {
        const featured = places[defaultIdx];
        if (featured) {
          const point = map.latLngToContainerPoint(
            L.latLng(featured.coords[0], featured.coords[1])
          );
          setCardPos({ x: point.x, y: point.y });
        }
      }, 300);
    });

    map.on("click", (e) => {
      const target = e.originalEvent.target as HTMLElement;
      if (!target.closest("[data-leaflet-marker]")) {
        setActiveIdx(null);
        setCardPos(null);
        markersRef.current.forEach((m, j) => {
          m.setIcon(buildPawIcon(places[j].photo, false));
        });
      }
    });

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activePlace = activeIdx !== null ? places[activeIdx] : null;
  const containerWidth = containerRef.current?.offsetWidth ?? 600;

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className="w-full overflow-hidden rounded-2xl shadow-warm"
        style={{ height: "clamp(380px, 48vw, 520px)" }}
      />

      {/* Floating card */}
      {activePlace && cardPos && (
        <div
          className="pointer-events-none absolute z-[1000] w-60 overflow-hidden rounded-2xl bg-cream shadow-warm"
          style={{
            border: "2px solid #E8B04A",
            left: Math.min(cardPos.x + 16, containerWidth - 256),
            top: Math.max(cardPos.y - 180, 8),
          }}
        >
          <div className="relative aspect-[4/3] w-full bg-honey/15">
            <Image
              src={activePlace.photo}
              alt={activePlace.name}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div className="p-3">
            <p className="font-fraunces text-sm font-bold text-ink">
              {activePlace.name}
            </p>
            <p className="font-inter text-xs text-muted-ink">{activePlace.region}</p>
            {activePlace.caption && (
              <p className="mt-1.5 font-fraunces text-xs italic leading-snug text-ink/65">
                {activePlace.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
