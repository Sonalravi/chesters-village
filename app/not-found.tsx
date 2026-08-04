import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      {/* Big paw icon */}
      <svg
        viewBox="0 0 100 110"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8 h-24 w-24 text-honey"
        aria-hidden="true"
      >
        <ellipse cx="22" cy="22" rx="10" ry="13" fill="currentColor" opacity="0.5" />
        <ellipse cx="50" cy="14" rx="10" ry="13" fill="currentColor" opacity="0.5" />
        <ellipse cx="78" cy="22" rx="10" ry="13" fill="currentColor" opacity="0.5" />
        <ellipse cx="50" cy="72" rx="30" ry="28" fill="currentColor" />
      </svg>

      <p className="mb-2 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
        404 — page not found
      </p>
      <h1 className="mb-4 font-fraunces text-4xl text-ink sm:text-5xl">
        Chester sniffed every corner.
      </h1>
      <p className="mb-10 max-w-sm font-inter text-base leading-relaxed text-muted-ink">
        Whatever you were looking for, it wandered off. Maybe it&rsquo;s at the park.
      </p>
      <Link
        href="/"
        className="rounded-full bg-teal px-8 py-3 font-inter text-sm font-medium text-cream transition-[filter] hover:brightness-110"
      >
        Back to the village
      </Link>
    </main>
  );
}
