"use client";

import { useEffect, useState } from "react";
import PawPrint from "@/components/ui/paw-print";

interface PawScrollIndicatorProps {
  sectionIds: string[];
}

export default function PawScrollIndicator({ sectionIds }: PawScrollIndicatorProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIndex(i);
        },
        { threshold: 0.3, rootMargin: "-10% 0px -60% 0px" }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, [sectionIds]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed left-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex">
      {sectionIds.map((id, i) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          aria-label={`Scroll to section ${i + 1}`}
          className={`transition-all duration-300 ease-out ${
            activeIndex === i
              ? "text-honey scale-125"
              : "text-muted-ink/30 hover:text-muted-ink/60"
          }`}
        >
          <PawPrint className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}
