"use client";

// SSR-safe wrapper for ChesterBook — react-pageflip uses DOM APIs.
// Same pattern as chester-map-loader.tsx.

import dynamic from "next/dynamic";

const ChesterBook = dynamic(() => import("./chester-book"), {
  ssr: false,
  loading: () => (
    <div
      className="flex w-full items-center justify-center rounded-2xl bg-cream"
      style={{ height: "500px" }}
    >
      <p className="font-caveat text-base text-muted-ink/40">Opening the book…</p>
    </div>
  ),
});

export default function ChesterBookLoader() {
  return <ChesterBook />;
}
