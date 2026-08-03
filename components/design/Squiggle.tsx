"use client";

// Hand-drawn SVG squiggle line accents for /chester scrapbook design language.
// 3 variants. Framer Motion draw-in animation (pathLength 0→1) on scroll enter.
// Do not use on other pages.

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface SquiggleProps {
  variant?: 1 | 2 | 3;
  color?: string;
  width?: number;
  className?: string;
  animate?: boolean;
}

// Each path is drawn in a 200×60 viewBox
const squiggles: Record<1 | 2 | 3, { path: string; vw: number; vh: number }> = {
  1: {
    path: "M4,30 C20,10 40,50 60,30 C80,10 100,50 120,30 C140,10 160,50 180,30 C190,20 196,26 196,30",
    vw: 200, vh: 60,
  },
  2: {
    path: "M4,20 C30,4 30,56 60,40 C90,24 90,56 120,40 C150,24 150,56 180,40 C192,34 196,30 196,30",
    vw: 200, vh: 60,
  },
  3: {
    path: "M4,30 Q40,4 80,30 Q120,56 160,30 Q180,18 196,22",
    vw: 200, vh: 60,
  },
};

export default function Squiggle({
  variant = 1,
  color = "#A8B368",
  width = 160,
  className = "",
  animate: shouldAnimate = true,
}: SquiggleProps) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const { path, vw, vh } = squiggles[variant];
  const height = Math.round((vh / vw) * width);

  return (
    <svg
      ref={ref}
      viewBox={`0 0 ${vw} ${vh}`}
      width={width}
      height={height}
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <motion.path
        d={path}
        stroke={color}
        strokeWidth={2.5}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          !shouldAnimate || inView
            ? { pathLength: 1, opacity: 0.6 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
    </svg>
  );
}
