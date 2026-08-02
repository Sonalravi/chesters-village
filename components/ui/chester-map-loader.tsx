"use client";

import dynamic from "next/dynamic";
import type { ChesterPlace } from "@/content/chester-places";

const ChesterMap = dynamic(() => import("@/components/ui/chester-map"), {
  ssr: false,
  loading: () => (
    <div className="w-full rounded-2xl bg-cream border border-ink/8 flex items-center justify-center shadow-warm" style={{ height: "clamp(360px, 45vw, 500px)" }}>
      <p className="font-inter text-sm text-muted-ink/50">Loading map…</p>
    </div>
  ),
});

export default function ChesterMapLoader({ places }: { places: ChesterPlace[] }) {
  return <ChesterMap places={places} />;
}
