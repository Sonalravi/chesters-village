// /pups — Village directory
// Grid of member dogs, pup name below each card in Caveat.
// Desktop (md+): hover reveals neighborhood/one-word vibe caption over photo.
// Mobile: static, no hover state.
// Paw print icon: decorative use next to heading; list marker if bullet lists added.

import { pups } from "@/content/pups";
import PawPrint from "@/components/ui/paw-print";

// Cycles through palette tints for photo placeholders.
// Remove once real photos are in /public/images/pups/.
const placeholderTints = [
  "bg-honey/15",
  "bg-teal/15",
  "bg-lavender/20",
  "bg-olive/15",
  "bg-honey/20",
  "bg-teal/10",
  "bg-lavender/15",
  "bg-olive/20",
] as const;

export default function PupsPage() {
  return (
    <main className="flex-1 bg-cream">
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-24">

        {/* Page header */}
        <div className="mb-14">
          <div className="mb-4 flex items-center gap-2">
            <PawPrint className="h-4 w-4 text-muted-ink" />
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
              Meet the villagers
            </p>
          </div>
          <h1 className="font-fraunces text-4xl text-ink sm:text-5xl">
            The pups
          </h1>
        </div>

        {/* Pup grid */}
        <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
          {pups.map((pup, i) => (
            <li key={pup.name} className="group">

              {/* Photo area */}
              <div className="relative overflow-hidden rounded-xl">
                <div
                  className={`aspect-square w-full ${placeholderTints[i % placeholderTints.length]} transition-transform duration-300 ease-out md:group-hover:scale-[1.02]`}
                >
                  {/* Replace with <Image src={pup.image} ... /> once photos arrive */}
                </div>

                {/* Caption — desktop hover only */}
                <div className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 opacity-0 transition-opacity duration-300 ease-out md:group-hover:opacity-100">
                  <p className="font-inter text-xs text-cream/80">
                    {pup.caption}
                  </p>
                </div>
              </div>

              {/* Pup name — Caveat, only font use of Caveat on the site */}
              <p className="mt-2.5 px-0.5 font-caveat text-lg text-ink">
                {pup.name}
              </p>

            </li>
          ))}
        </ul>

      </div>
    </main>
  );
}
