// /village — The Village page
// Section 1: Join us on WhatsApp (honey-tint bg)
// Section 2: How we gather — four meetup cards (teal-tint bg)
// Section 3: Meet our pups — pup grid (cream bg), names in Caveat

import { site } from "@/content/site";
import { pups } from "@/content/pups";
import FadeIn from "@/components/ui/fade-in";
import PawPrint from "@/components/ui/paw-print";

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

const meetups = [
  {
    name: "Sniff it out",
    description: "Morning walks, new trails, better noses than ours.",
    tint: "bg-olive/15",
  },
  {
    name: "Beach n Brunch",
    description: "Sand, salt, and dogs who've earned their eggs benny.",
    tint: "bg-teal/15",
  },
  {
    name: "Frosty Paws",
    description: "Cold treats for warm pups. A winter village tradition.",
    tint: "bg-lavender/20",
  },
  {
    name: "Happy hour with the hoomans",
    description: "The dogs nap. The humans finally talk.",
    tint: "bg-honey/15",
  },
] as const;

export default function VillagePage() {
  return (
    <main className="flex-1">

      {/* ── Section 1: Join us on WhatsApp ───────────────────────── */}
      <section className="bg-[#F5EBD3] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center">
          <FadeIn>
            <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
              Chester's Village
            </p>
            <h1 className="mb-6 font-fraunces text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
              Join us on WhatsApp
            </h1>
            <p className="mx-auto mb-10 max-w-md font-inter text-base leading-relaxed text-muted-ink">
              Our community lives in a WhatsApp group where pet parents share walks, vet recommendations, and
              the kind of support that only comes from people who really get it.
            </p>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-ink px-10 py-4 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:bg-ink/80 shadow-warm"
            >
              Join the village
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── Section 2: How we gather ──────────────────────────────── */}
      <section className="bg-[#F0EDE4] py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                How we gather
              </p>
              <h2 className="font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
                Four ways the village shows up
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {meetups.map((meetup, i) => (
              <FadeIn key={meetup.name} delay={i * 0.08}>
                <div className="group">
                  <div className="overflow-hidden rounded-2xl">
                    <div
                      className={`aspect-[4/3] w-full ${meetup.tint} transition-transform duration-300 ease-out group-hover:scale-[1.02]`}
                    >
                      <div className="flex h-full w-full items-end p-5">
                        <span className="font-fraunces text-xs italic text-muted-ink/50">
                          Photo coming soon
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="mb-1 font-fraunces text-xl text-ink">{meetup.name}</p>
                    <p className="font-inter text-sm leading-relaxed text-muted-ink">
                      {meetup.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Meet our pups ──────────────────────────────── */}
      <section className="bg-cream py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeIn>
            <div className="mb-14">
              <div className="mb-4 flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-muted-ink" />
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                  Meet the villagers
                </p>
              </div>
              <h2 className="font-fraunces text-4xl text-ink sm:text-5xl">
                The pups
              </h2>
            </div>
          </FadeIn>

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {pups.map((pup, i) => (
              <FadeIn key={pup.name} delay={i * 0.05}>
                <li className="group">
                  <div className="relative overflow-hidden rounded-2xl">
                    <div
                      className={`aspect-square w-full ${placeholderTints[i % placeholderTints.length]} transition-transform duration-300 ease-out md:group-hover:scale-[1.02]`}
                    >
                      {/* Replace with <Image src={pup.image} ... /> once photos arrive */}
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-ink/70 px-3 py-2 opacity-0 transition-opacity duration-300 ease-out md:group-hover:opacity-100">
                      <p className="font-inter text-xs text-cream/80">{pup.caption}</p>
                    </div>
                  </div>
                  <p className="mt-2.5 px-0.5 font-caveat text-lg text-ink">{pup.name}</p>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
