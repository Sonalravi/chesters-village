// /village — The Village page
// Section 1 (id="pups"):      Meet our pups — alphabetized grid
// Section 2 (id="events"):    Events so far — four meetup cards
// Section 3 (id="community"): How the village shows up — story cards
// Slim WhatsApp banner at bottom

import Image from "next/image";
import { site } from "@/content/site";
import { pups } from "@/content/pups";
import { communityStories } from "@/content/community";
import FadeIn from "@/components/ui/fade-in";
import PawPrint from "@/components/ui/paw-print";

const placeholderTints = [
  "bg-honey/15", "bg-teal/15", "bg-lavender/20", "bg-olive/15",
  "bg-honey/20", "bg-teal/10", "bg-lavender/15", "bg-olive/20",
] as const;

const meetups = [
  { name: "Sniff it out", description: "Morning walks, new trails, better noses than ours.", tint: "bg-olive/15" },
  { name: "Beach n Brunch", description: "Sand, salt, and dogs who've earned their eggs benny.", tint: "bg-teal/15" },
  { name: "Frosty Paws", description: "Cold treats for warm pups. A winter village tradition.", tint: "bg-lavender/20" },
  { name: "Happy hour with the hoomans", description: "The dogs nap. The humans finally talk.", tint: "bg-honey/15" },
] as const;

export default function VillagePage() {
  return (
    <main className="flex-1">

      {/* ── Section 1: Meet our pups ─────────────────────────────── */}
      <section id="pups" className="bg-cream py-24 md:py-32 scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeIn>
            <div className="mb-14">
              <div className="mb-4 flex items-center gap-2">
                <PawPrint className="h-4 w-4 text-muted-ink" />
                <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                  Meet the villagers
                </p>
              </div>
              <h1 className="font-fraunces text-4xl text-ink sm:text-5xl">The pups</h1>
            </div>
          </FadeIn>

          <ul className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
            {pups.map((pup, i) => (
              <FadeIn key={pup.name} delay={i * 0.05}>
                <li className="group">
                  <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                    <Image
                      src={pup.image}
                      alt={pup.name}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className={`object-cover transition-transform duration-300 ease-out md:group-hover:scale-[1.02] ${placeholderTints[i % placeholderTints.length]}`}
                    />
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

      {/* ── Section 2: Events so far ──────────────────────────────── */}
      <section id="events" className="bg-[#F0EDE4] py-24 md:py-32 scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                How we gather
              </p>
              <h2 className="font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
                Events so far
              </h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {meetups.map((meetup, i) => (
              <FadeIn key={meetup.name} delay={i * 0.08}>
                <div className="group">
                  <div className={`aspect-[4/3] overflow-hidden rounded-2xl ${meetup.tint} shadow-warm transition-transform duration-300 ease-out group-hover:scale-[1.01]`}>
                    <div className="flex h-full w-full items-end p-5">
                      <span className="font-fraunces text-xs italic text-muted-ink/50">Photo coming soon</span>
                    </div>
                  </div>
                  <div className="mt-4 px-1">
                    <p className="mb-1 font-fraunces text-xl text-ink">{meetup.name}</p>
                    <p className="font-inter text-sm leading-relaxed text-muted-ink">{meetup.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Community stories ─────────────────────────── */}
      <section id="community" className="bg-[#F5EBD3] py-24 md:py-32 scroll-mt-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <FadeIn>
            <div className="mb-14 max-w-xl">
              <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                The village in action
              </p>
              <h2 className="font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
                How we show up for each other
              </h2>
            </div>
          </FadeIn>

          <div className="grid gap-6 sm:grid-cols-3">
            {communityStories.map((story, i) => (
              <FadeIn key={story.id} delay={i * 0.08}>
                {story.placeholder ? (
                  <div className="flex min-h-[220px] flex-col justify-center rounded-2xl border-2 border-dashed border-olive/40 p-8 text-center">
                    <p className="font-caveat text-lg text-muted-ink/50">Story goes here</p>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-cream p-8 shadow-warm">
                    <h3 className="mb-3 font-fraunces text-xl text-ink">{story.title}</h3>
                    <p className="font-inter text-sm leading-relaxed text-muted-ink">{story.body}</p>
                  </div>
                )}
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Slim WhatsApp banner ──────────────────────────────────── */}
      <div className="bg-ink py-6">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6">
          <p className="font-fraunces text-lg text-cream">
            Ready to join the village?
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-6 py-2.5 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:brightness-110"
          >
            Join on WhatsApp
          </a>
        </div>
      </div>

    </main>
  );
}
