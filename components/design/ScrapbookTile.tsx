"use client";

// Scrapbook-style photo tile: slightly rotated, organic blob behind, italic caption.
// /chester page only — do not use elsewhere.

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Blob from "@/components/design/Blob";

interface ScrapbookTileProps {
  photo?: string;               // path under /public — omit for placeholder
  alt?: string;
  caption: string;
  rotation?: number;            // degrees, can be negative
  blobVariant?: 1 | 2 | 3 | 4 | 5;
  blobColor?: string;
  delay?: number;
  aspectRatio?: string;         // Tailwind aspect class e.g. "aspect-square" or "aspect-[3/4]"
  className?: string;
}

export default function ScrapbookTile({
  photo,
  alt = "",
  caption,
  rotation = 2,
  blobVariant = 1,
  blobColor = "#E8B04A",
  delay = 0,
  aspectRatio = "aspect-[3/4]",
  className = "",
}: ScrapbookTileProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {/* Blob background — slightly offset, pointer-events-none */}
      <div
        className="pointer-events-none absolute -inset-6 flex items-center justify-center"
        aria-hidden="true"
      >
        <Blob
          variant={blobVariant}
          color={blobColor}
          size={260}
          rotation={rotation * 8}
          opacity={0.22}
        />
      </div>

      {/* Photo card */}
      <div
        className="relative"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <div
          className={`relative w-full overflow-hidden rounded-2xl shadow-warm ${aspectRatio} ${
            photo ? "" : "border-2 border-dashed border-olive/40 bg-cream"
          }`}
        >
          {photo ? (
            <Image
              src={photo}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, 280px"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <p className="font-caveat text-base text-muted-ink/50">Photo goes here</p>
            </div>
          )}
        </div>

        {/* Caption */}
        <p className="mt-3 px-1 font-fraunces text-sm italic leading-snug text-ink/70">
          {caption}
        </p>
      </div>
    </motion.div>
  );
}
