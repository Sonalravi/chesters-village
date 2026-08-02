"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

interface CarouselItem {
  src: string;
  alt: string;
  caption: string;
  tint: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const CARD_WIDTH = 260;
const GAP = 16;
const STEP = CARD_WIDTH + GAP;
const PAUSE_MS = 3000;
const TRANSITION_S = 0.6;

export default function Carousel({ items }: CarouselProps) {
  const controls = useAnimationControls();
  const indexRef = useRef(0);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const advance = () => {
    indexRef.current = (indexRef.current + 1) % items.length;
    controls.start({
      x: -indexRef.current * STEP,
      transition: { duration: TRANSITION_S, ease: "easeInOut" },
    });
  };

  useEffect(() => {
    const tick = () => {
      advance();
      timerRef.current = setTimeout(tick, PAUSE_MS + TRANSITION_S * 1000);
    };
    timerRef.current = setTimeout(tick, PAUSE_MS);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="overflow-hidden">
      <motion.div
        animate={controls}
        className="flex"
        style={{ gap: GAP }}
      >
        {/* Duplicate for seamless loop feel */}
        {[...items, ...items].map((item, i) => (
          <div
            key={`${item.caption}-${i}`}
            className="shrink-0"
            style={{ width: CARD_WIDTH }}
          >
            <div className={`h-52 w-full overflow-hidden rounded-2xl ${item.tint} shadow-warm`}>
              {/* Replace with <Image src={item.src} alt={item.alt} fill … /> once photos arrive */}
              <div className="flex h-full w-full items-end p-3">
                <span className="font-inter text-xs italic text-muted-ink/40">
                  {item.alt}
                </span>
              </div>
            </div>
            <p className="mt-2 font-inter text-xs text-muted-ink px-0.5">{item.caption}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
