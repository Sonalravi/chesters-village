"use client";

// Desktop-only cursor paw trail. Renders up to 8 paws that fade out.
// Mounts only when pointer is a fine pointer (not touch).

import { useEffect, useRef } from "react";

const PAW_SVG = `<svg viewBox="0 0 100 110" xmlns="http://www.w3.org/2000/svg" width="24" height="24" aria-hidden="true">
  <ellipse cx="22" cy="22" rx="10" ry="13" fill="currentColor"/>
  <ellipse cx="50" cy="14" rx="10" ry="13" fill="currentColor"/>
  <ellipse cx="78" cy="22" rx="10" ry="13" fill="currentColor"/>
  <ellipse cx="50" cy="72" rx="30" ry="28" fill="currentColor"/>
</svg>`;

const MAX_PAWS = 8;
const FADE_MS = 900;
const MIN_DIST = 40; // px between paw drops

type Paw = {
  el: HTMLDivElement;
  born: number;
};

export default function CursorTrail() {
  const pawsRef = useRef<Paw[]>([]);
  const lastPosRef = useRef<{ x: number; y: number } | null>(null);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    // Only activate on desktop (fine pointer = mouse)
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const container = document.createElement("div");
    container.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:9999;overflow:hidden;";
    document.body.appendChild(container);

    function dropPaw(x: number, y: number) {
      const el = document.createElement("div");
      el.innerHTML = PAW_SVG;
      const angle = Math.random() * 30 - 15; // ±15° tilt
      el.style.cssText = `position:absolute;left:${x}px;top:${y}px;transform:translate(-50%,-50%) rotate(${angle}deg);color:#E8B04A;opacity:0.75;transition:opacity ${FADE_MS}ms ease-out;`;
      container.appendChild(el);
      // Force reflow, then start fade
      void el.offsetWidth;
      el.style.opacity = "0";
      pawsRef.current.push({ el, born: Date.now() });
      // Prune old paws
      if (pawsRef.current.length > MAX_PAWS) {
        const old = pawsRef.current.shift();
        old?.el.remove();
      }
    }

    function onMove(e: MouseEvent) {
      const { clientX: x, clientY: y } = e;
      const last = lastPosRef.current;
      if (!last) { lastPosRef.current = { x, y }; return; }
      const dx = x - last.x;
      const dy = y - last.y;
      if (Math.sqrt(dx * dx + dy * dy) < MIN_DIST) return;
      lastPosRef.current = { x, y };
      dropPaw(x, y);
    }

    window.addEventListener("mousemove", onMove);

    // Cleanup dead paws
    function cleanupLoop() {
      const now = Date.now();
      pawsRef.current = pawsRef.current.filter((p) => {
        if (now - p.born > FADE_MS + 200) {
          p.el.remove();
          return false;
        }
        return true;
      });
      rafRef.current = requestAnimationFrame(cleanupLoop);
    }
    rafRef.current = requestAnimationFrame(cleanupLoop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      container.remove();
    };
  }, []);

  return null;
}
