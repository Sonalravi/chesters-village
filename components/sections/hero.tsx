"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

// 9×9 = 81 tiles. Chester at [4][4] (index 40), Shadow at [4][3] (index 39).
// Tiles visible per phase: 5×5 inner → 7×7 → 9×9
const GRID = 9;
const CHESTER_IDX = 4 * GRID + 4; // 40
const SHADOW_IDX = 4 * GRID + 3;  // 39

// Which ring each tile belongs to (0 = innermost 5×5, 1 = 7×7 ring, 2 = 9×9 ring)
function tileRing(row: number, col: number): 0 | 1 | 2 {
  const dr = Math.abs(row - 4);
  const dc = Math.abs(col - 4);
  const dist = Math.max(dr, dc);
  if (dist <= 2) return 0;
  if (dist <= 3) return 1;
  return 2;
}

const pupImages = [
  "/images/pups/maui.jpg",
  "/images/pups/nico.jpg",
  "/images/pups/sam.jpg",
  "/images/pups/snowflake.jpg",
  "/images/pups/toffee.jpg",
  "/images/pups/toto.JPG",
  "/images/pups/whiskey.JPG",
  "/images/pups/yuki.JPG",
];

// Pre-assign an image to each non-Chester/Shadow tile
const tileImages: string[] = Array.from({ length: GRID * GRID }, (_, i) => {
  if (i === CHESTER_IDX || i === SHADOW_IDX) return "";
  const pupIdx = (i < SHADOW_IDX ? i : i - 2) % pupImages.length;
  return pupImages[pupIdx];
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });
  const [phase, setPhase] = useState(0); // 0=5×5, 1=7×7, 2=9×9

  useEffect(() => {
    if (!inView) return;
    const t1 = setTimeout(() => setPhase(1), 1000);
    const t2 = setTimeout(() => setPhase(2), 2200);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [inView]);

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] overflow-hidden bg-ink">

      {/* ── Tile grid ──────────────────────────────────────────────── */}
      <div
        className="absolute inset-0 grid"
        style={{
          gridTemplateColumns: `repeat(${GRID}, 1fr)`,
          gridTemplateRows: `repeat(${GRID}, 1fr)`,
          gap: "3px",
        }}
      >
        {Array.from({ length: GRID * GRID }, (_, i) => {
          const row = Math.floor(i / GRID);
          const col = i % GRID;
          const ring = tileRing(row, col);
          const isChester = i === CHESTER_IDX;
          const isShadow = i === SHADOW_IDX;
          const isSpecial = isChester || isShadow;
          const visible = isSpecial || ring <= phase;

          return (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: visible ? (isSpecial ? 0.55 : 0.35) : 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: ring * 0.05 + (visible ? Math.random() * 0.3 : 0) }}
            >
              {isChester && (
                <Image src="/images/chester/story/chester-as-a-baby.jpg" alt="Chester" fill className="object-cover" sizes="12vw" />
              )}
              {isShadow && (
                <Image src="/images/chester/shadow/with-shadow-3.JPEG" alt="Shadow" fill className="object-cover" sizes="12vw" />
              )}
              {!isSpecial && tileImages[i] && (
                <Image src={tileImages[i]} alt="" fill className="object-cover" sizes="12vw" aria-hidden="true" />
              )}
              {!isSpecial && !tileImages[i] && (
                <div className="h-full w-full bg-ink/40" />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* ── Overlay gradient ───────────────────────────────────────── */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/60" />

      {/* ── Text overlay ───────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="mb-4 font-fraunces text-4xl leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Welcome to Chester&rsquo;s Village
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
          className="font-inter text-base text-cream/70 sm:text-lg md:text-xl"
        >
          Where every dog is raised by a village
        </motion.p>
      </div>

    </section>
  );
}
