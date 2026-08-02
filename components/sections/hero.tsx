"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { site } from "@/content/site";

// Mosaic tile config — Chester and Shadow are larger (span 2 rows/cols)
// Remaining tiles are standard square placeholders
const tiles = [
  { id: "chester", label: "Chester", tint: "bg-honey/20", large: true },
  { id: "shadow", label: "Shadow", tint: "bg-teal/15", large: true },
  { id: "tile-3", label: "", tint: "bg-lavender/20", large: false },
  { id: "tile-4", label: "", tint: "bg-olive/15", large: false },
  { id: "tile-5", label: "", tint: "bg-honey/10", large: false },
  { id: "tile-6", label: "", tint: "bg-teal/10", large: false },
  { id: "tile-7", label: "", tint: "bg-lavender/15", large: false },
  { id: "tile-8", label: "", tint: "bg-olive/20", large: false },
  { id: "tile-9", label: "", tint: "bg-honey/15", large: false },
  { id: "tile-10", label: "", tint: "bg-teal/20", large: false },
];

const COUNT_FROM = 70;
const COUNT_TO = 130;
const COUNT_DURATION = 2.5;

// Tile reveals at these counter values
const tileRevealAt = [70, 80, 88, 95, 100, 105, 110, 115, 120, 125];

export default function Hero() {
  const [count, setCount] = useState(COUNT_FROM);
  const [visibleTiles, setVisibleTiles] = useState(2); // Chester + Shadow always visible
  const countRef = useRef(COUNT_FROM);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(COUNT_FROM, COUNT_TO, {
      duration: COUNT_DURATION,
      ease: "easeOut",
      onUpdate: (val) => {
        const rounded = Math.round(val);
        countRef.current = rounded;
        setCount(rounded);
        // Reveal tiles as count climbs
        const revealed = tileRevealAt.filter((threshold) => rounded >= threshold).length;
        setVisibleTiles(Math.max(2, revealed));
      },
    });

    return () => controls.stop();
  }, [inView]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-cream py-16 md:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

          {/* Left: overlay text + CTA */}
          <div className="order-2 lg:order-1">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-6 font-fraunces text-4xl leading-tight text-ink sm:text-5xl md:text-6xl"
            >
              Every dog deserves to be raised by a village.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.15 }}
              className="mb-8 flex items-baseline gap-3"
            >
              <span className="font-fraunces text-6xl text-teal">{count}</span>
              <span className="font-inter text-sm text-muted-ink">villagers and growing</span>
            </motion.div>

            <motion.a
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-teal px-8 py-3.5 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:brightness-105 hover:shadow-warm"
            >
              Join now
            </motion.a>
          </div>

          {/* Right: mosaic photo grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-4 grid-rows-4 gap-2 h-[420px] md:h-[500px]">
              {/* Chester — large tile: col 1-2, row 1-3 */}
              <motion.div
                className={`col-span-2 row-span-3 overflow-hidden rounded-2xl ${tiles[0].tint} relative`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 0.85, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="font-caveat text-lg text-ink/50">Chester</span>
                </div>
              </motion.div>

              {/* Shadow — large tile: col 3-4, row 1-2 */}
              <motion.div
                className={`col-span-2 row-span-2 overflow-hidden rounded-2xl ${tiles[1].tint} relative`}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={inView ? { opacity: 0.85, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              >
                <div className="absolute inset-0 flex items-end p-4">
                  <span className="font-caveat text-lg text-ink/50">Shadow</span>
                </div>
              </motion.div>

              {/* Small tiles: col 3, row 3 */}
              {tiles.slice(2, 10).map((tile, i) => (
                <motion.div
                  key={tile.id}
                  className={`overflow-hidden rounded-2xl ${tile.tint}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    visibleTiles > i + 2
                      ? { opacity: 0.75, scale: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.4, ease: "easeOut", delay: i * 0.04 }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
