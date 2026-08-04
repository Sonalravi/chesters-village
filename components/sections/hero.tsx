"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { site } from "@/content/site";

// ── Circle data ────────────────────────────────────────────────────────────────
const PUP_PHOTOS = [
  "/images/pups/maui.jpg",
  "/images/pups/nico.jpg",
  "/images/pups/sam.jpg",
  "/images/pups/snowflake.jpg",
  "/images/pups/toffee.jpg",
  "/images/pups/toto.JPG",
  "/images/pups/whiskey.JPG",
  "/images/pups/yuki.JPG",
];

const ACCENT_COLORS = ["#E8B04A", "#7AAFA8", "#C9AFD3", "#A8B368"];

const COLS = 13;
const ROWS = 10;
// TOTAL is driven by site.memberCount (single source of truth). Keep COLS * ROWS >= memberCount.
const TOTAL = site.memberCount; // currently 130 = 13 × 10

// Pre-generate all 130 circles with deterministic jitter so SSR matches client
const CIRCLES = Array.from({ length: TOTAL }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  const baseCx = ((col + 0.5) / COLS) * 100;
  const baseCy = ((row + 0.5) / ROWS) * 100;
  // Deterministic jitter: keeps things stable across renders
  const jx = ((i * 7 + 3) % 17 - 8) * 0.38;
  const jy = ((i * 11 + 5) % 19 - 9) * 0.42;
  const cx = Math.max(2, Math.min(98, baseCx + jx));
  const cy = Math.max(2, Math.min(98, baseCy + jy));
  const size = 44 + (i % 7) * 4; // 44 → 68px
  const isColor = i % 13 === 0; // every 13th is a solid accent
  return {
    id: i,
    cx,
    cy,
    size,
    isColor,
    photo: isColor ? undefined : PUP_PHOTOS[i % PUP_PHOTOS.length],
    color: isColor ? ACCENT_COLORS[Math.floor(i / 13) % ACCENT_COLORS.length] : undefined,
  };
});

const STAGGER_S = 0.016; // per-circle spring delay in seconds
const STAGGER_MS = 16; // same in ms (for the counter interval)

const TITLE = "Welcome to Chester's Village";

// ── Hero ───────────────────────────────────────────────────────────────────────
export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [count, setCount] = useState(0);
  const [counterDone, setCounterDone] = useState(false);
  const [titleLetters, setTitleLetters] = useState(0);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let countInterval: ReturnType<typeof setInterval>;
    let titleTimeout: ReturnType<typeof setTimeout>;
    let letterInterval: ReturnType<typeof setInterval>;
    let ctaTimeout: ReturnType<typeof setTimeout>;

    // Count up as circles pop in
    let c = 0;
    countInterval = setInterval(() => {
      c++;
      setCount(c);
      if (c >= TOTAL) {
        clearInterval(countInterval);
        setCounterDone(true);
      }
    }, STAGGER_MS);

    // After circles done + transition buffer, reveal title letter by letter
    titleTimeout = setTimeout(() => {
      let l = 0;
      letterInterval = setInterval(() => {
        l++;
        setTitleLetters(l);
        if (l >= TITLE.length) {
          clearInterval(letterInterval);
          ctaTimeout = setTimeout(() => setShowCta(true), 350);
        }
      }, 38);
    }, TOTAL * STAGGER_MS + 700);

    return () => {
      clearInterval(countInterval);
      clearTimeout(titleTimeout);
      clearInterval(letterInterval!);
      clearTimeout(ctaTimeout!);
    };
  }, [mounted]);

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden bg-ink select-none">

      {/* ── Scattered circles ─────────────────────────────────────────────────── */}
      {mounted && CIRCLES.map((c) => (
        <motion.div
          key={c.id}
          className="absolute overflow-hidden rounded-full"
          style={{
            left: `${c.cx}%`,
            top: `${c.cy}%`,
            width: c.size,
            height: c.size,
            marginLeft: -c.size / 2,
            marginTop: -c.size / 2,
            backgroundColor: c.isColor ? c.color : undefined,
            opacity: c.isColor ? 0.72 : 0.48,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: c.id * STAGGER_S,
            type: "spring",
            stiffness: 420,
            damping: 22,
            mass: 0.5,
          }}
        >
          {c.photo && (
            <Image
              src={c.photo}
              alt=""
              fill
              className="object-cover"
              sizes={`${c.size}px`}
              aria-hidden="true"
            />
          )}
        </motion.div>
      ))}

      {/* ── Dark overlay ──────────────────────────────────────────────────────── */}
      <div className="pointer-events-none absolute inset-0 bg-ink/52" />

      {/* ── Center content ────────────────────────────────────────────────────── */}
      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Counter — fades out when done */}
        <AnimatePresence>
          {!counterDone && (
            <motion.span
              key="counter"
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: "easeIn" } }}
              className="absolute font-fraunces text-[clamp(5rem,14vw,9rem)] font-bold leading-none text-cream/85 tabular-nums"
            >
              {count}
            </motion.span>
          )}
        </AnimatePresence>

        {/* Title + CTA — fades in when counter done */}
        <AnimatePresence>
          {counterDone && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="space-y-6"
            >
              <h1 className="font-fraunces text-4xl leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
                {TITLE.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i < titleLetters ? 1 : 0 }}
                    transition={{ duration: 0.06 }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </h1>

              <AnimatePresence>
                {showCta && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-5"
                  >
                    {/* (b) Where every dog is raised by a village. And every dog parent too. */}
                    {/* (c) Because no one should do dog parenthood alone. */}
                    <p className="font-inter text-base text-cream/60 sm:text-lg">
                      The village that raised Chester. Now yours.
                    </p>
                    <motion.a
                      href={site.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(232,176,74,0)",
                          "0 0 0 14px rgba(232,176,74,0.22)",
                          "0 0 0 0px rgba(232,176,74,0)",
                        ],
                      }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: 1 }}
                      className="rounded-full bg-honey px-8 py-3 font-inter text-sm font-semibold text-ink transition-[filter] hover:brightness-110"
                    >
                      Join on WhatsApp
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
