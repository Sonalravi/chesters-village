"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import PawPrint from "@/components/ui/paw-print";

interface PawScrollIndicatorProps {
  sectionIds: string[];
}

function AnimatedPaw({ active, onClick }: { active: boolean; onClick: () => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20px" });

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.35, ease: "easeOut", type: "spring", bounce: 0.4 }}
      className={`transition-colors duration-300 ease-out ${
        active ? "text-honey scale-125" : "text-muted-ink/30 hover:text-muted-ink/60"
      }`}
    >
      <PawPrint className="h-4 w-4" />
    </motion.button>
  );
}

export default function PawScrollIndicator({ sectionIds }: PawScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIndex(i); },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
      {sectionIds.map((id, i) => (
        <AnimatedPaw
          key={id}
          active={activeIndex === i}
          onClick={() => scrollTo(id)}
        />
      ))}
    </div>
  );
}
