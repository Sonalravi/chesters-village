"use client";

import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import Image from "next/image";
import type { ChesterPlace } from "@/content/chester-places";
import PawPrint from "@/components/ui/paw-print";

interface ChesterMapProps {
  places: ChesterPlace[];
}

// Fit bounds with some padding so all pins are visible
function getBounds(places: ChesterPlace[]): L.LatLngBoundsExpression {
  const lats = places.map((p) => p.coords[0]);
  const lngs = places.map((p) => p.coords[1]);
  return [
    [Math.min(...lats) - 0.1, Math.min(...lngs) - 0.1],
    [Math.max(...lats) + 0.1, Math.max(...lngs) + 0.1],
  ];
}

export default function ChesterMap({ places }: ChesterMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePlace, setActivePlace] = useState<ChesterPlace | null>(null);
  const [cardPos, setCardPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      scrollWheelZoom: false,
      zoomControl: false,
    });

    mapRef.current = map;

    // CartoDB Voyager — warm, minimal tile style
    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
      {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 19,
      }
    ).addTo(map);

    map.fitBounds(getBounds(places), { padding: [40, 40] });

    // Custom cream/paw pin
    const createPinIcon = () =>
      L.divIcon({
        className: "",
        html: `<div style="
          width:36px;height:36px;border-radius:50%;
          background:#FBF7EF;
          box-shadow:0 4px 16px rgba(43,32,25,0.18);
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;
          border:2px solid #E8B04A;
        ">
          <svg viewBox="0 0 24 24" fill="#2B2019" width="16" height="16">
            <ellipse cx="5" cy="8" rx="2.2" ry="3"/>
            <ellipse cx="11" cy="5.5" rx="2.2" ry="3"/>
            <ellipse cx="17" cy="7" rx="2.2" ry="3"/>
            <ellipse cx="8" cy="14" rx="2.2" ry="3" transform="rotate(-10 8 14)"/>
            <ellipse cx="15" cy="13" rx="2.2" ry="3" transform="rotate(10 15 13)"/>
            <ellipse cx="11.5" cy="18" rx="4.5" ry="4" />
          </svg>
        </div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 18],
      });

    places.forEach((place) => {
      const marker = L.marker(place.coords, { icon: createPinIcon() }).addTo(map);
      marker.on("click", (e) => {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const point = map.latLngToContainerPoint(e.latlng);
        setCardPos({ x: point.x, y: point.y });
        setActivePlace(place);
      });
    });

    map.on("click", () => setActivePlace(null));

    return () => {
      map.remove();
      mapRef.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative w-full">
      {/* Map container */}
      <div
        ref={containerRef}
        className="w-full rounded-2xl overflow-hidden shadow-warm"
        style={{ height: "clamp(360px, 45vw, 500px)" }}
      />

      {/* Hover card */}
      {activePlace && (
        <div
          className="absolute z-[1000] w-56 rounded-2xl bg-cream shadow-warm overflow-hidden pointer-events-none"
          style={{
            left: Math.min(cardPos.x + 12, (containerRef.current?.offsetWidth ?? 400) - 240),
            top: Math.max(cardPos.y - 160, 8),
          }}
        >
          <div className="relative aspect-[4/3] w-full bg-honey/15">
            <Image
              src={activePlace.photo}
              alt={activePlace.name}
              fill
              className="object-cover"
              sizes="224px"
            />
          </div>
          <div className="p-3">
            <div className="flex items-center gap-1.5 mb-1">
              <PawPrint className="h-3 w-3 text-honey shrink-0" />
              <p className="font-fraunces text-sm text-ink">{activePlace.name}</p>
            </div>
            <p className="font-inter text-xs text-muted-ink leading-snug">{activePlace.region}</p>
            {activePlace.caption && (
              <p className="mt-1.5 font-inter text-xs italic text-muted-ink/70 leading-snug">
                {activePlace.caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
