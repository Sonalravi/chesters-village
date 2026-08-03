// /chester — Full memoir page. 7 sections.
// §1 hero unchanged. §2 book carousel. §3 amazing life (firsts / things / map).
// §4–6 prose arc. §7 closing. Squiggles between §4→§5 and §6→§7 only.
// Blobs only in §1 (hero, existing) and §7 (closing).

import Image from "next/image";
import { chesterPlaces } from "@/content/chester-places";
import PawScrollIndicator from "@/components/ui/paw-scroll-indicator";
import ChesterMapLoader from "@/components/ui/chester-map-loader";
import ChesterBookLoader from "@/components/ui/chester-book-loader";
import FadeIn from "@/components/ui/fade-in";
import Blob from "@/components/design/Blob";
import Squiggle from "@/components/design/Squiggle";

const SECTION_IDS = [
  "hero",
  "his-story",
  "his-amazing-life",
  "the-hardest-part",
  "the-people-who-showed-up",
  "how-this-became-a-village",
  "closing",
];

function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-olive/40 bg-cream ${className}`}>
      <p className="font-caveat text-sm text-muted-ink/50">{label}</p>
    </div>
  );
}

// ── "His firsts" scroll cards ──────────────────────────────────────────────────
const FIRSTS = [
  { caption: "First snow.", detail: "Tahoe, 2019." },
  { caption: "First beach.", detail: "Ocean Beach, 2018." },
  { caption: "First hike.", detail: "Marin Headlands, 2018." },
  { caption: "First surf watch.", detail: "Ocean Beach, 2019." },
  { caption: "First road trip.", detail: "Big Sur, 2020." },
  { caption: "First stuffed toy.", detail: "Bangalore, 2015." },
];

// ── "Things that made him Chester" grid items ──────────────────────────────────
const CHESTER_THINGS = [
  "The stuffed toy that never left his mouth.",
  "Belly rubs, always.",
  "A sniffari past every corner.",
  "Every stranger, a possible friend.",
  "Endless patience, especially for kids.",
  "Quiet joy, the way only goldens have.",
];

export default function ChesterPage() {
  return (
    <main className="flex-1 bg-cream">
      <PawScrollIndicator sectionIds={SECTION_IDS} />

      {/* ── 1. HERO ── unchanged ─────────────────────────────────────────── */}
      <section id="hero" className="py-24">
        <div className="mx-auto max-w-[640px] px-6 text-center">
          <FadeIn>
            <p className="mb-5 font-caveat text-base text-muted-ink/70">
              The dog who started it all.
            </p>
            <h1
              className="font-fraunces font-black text-ink"
              style={{ fontSize: "clamp(4rem, 12vw, 7.5rem)", lineHeight: 1 }}
            >
              Chester
            </h1>
            <p className="mt-5 font-fraunces text-xl text-muted-ink">2015 — 2026</p>
            <p className="mt-10 font-fraunces text-lg italic leading-relaxed text-ink/65 sm:text-xl">
              Chester's Village is a community, but it started as a dog. His name was Chester,
              and everywhere he went, he built a village around him. Strangers became friends
              because he stopped to say hello. Neighbors became family because he made them
              notice each other. This page is for him.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="relative mt-14">
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <Blob variant={1} color="#E8B04A" size={520} rotation={12} opacity={0.13} />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-warm">
                <Image
                  src="/images/chester/story/hero-adult.jpg"
                  alt="Chester"
                  width={640}
                  height={480}
                  className="w-full object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, 640px"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 2. HIS STORY — book carousel ─────────────────────────────────── */}
      <section id="his-story" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-3 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              His story.
            </h2>
            <p className="mb-10 font-fraunces text-lg italic leading-relaxed text-muted-ink">
              A life told in three chapters.
            </p>
          </FadeIn>
        </div>

        {/* Book — wider than the content column */}
        <FadeIn>
          <div className="mx-auto w-full max-w-[840px] px-4 sm:px-6">
            <ChesterBookLoader />
          </div>
        </FadeIn>
      </section>

      {/* ── 3. HIS AMAZING LIFE ──────────────────────────────────────────── */}
      <section id="his-amazing-life" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-3 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              His amazing life.
            </h2>
            <p className="mb-16 font-fraunces text-lg italic leading-relaxed text-muted-ink">
              He didn't fit a lifetime into a lifetime. He fit two.
            </p>
          </FadeIn>
        </div>

        {/* ── 3a. His firsts — horizontal scroll ──────────────────────────── */}
        <div className="mb-20">
          <div className="mx-auto max-w-[640px] px-6">
            <FadeIn>
              <p className="mb-6 font-fraunces text-lg italic text-ink/70">His firsts.</p>
            </FadeIn>
          </div>

          <div
            className="flex gap-5 overflow-x-auto px-6 pb-4"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {/* Left spacer so first card aligns with content column on wide screens */}
            <div className="hidden shrink-0 xl:block" style={{ width: "calc((100vw - 640px) / 2 - 24px)" }} />

            {FIRSTS.map((f, i) => (
              <div
                key={i}
                className="shrink-0 w-[220px]"
                style={{ scrollSnapAlign: "start" }}
              >
                <PhotoPlaceholder label="photo" className="aspect-[4/5] w-full" />
                <p className="mt-3 font-fraunces text-sm text-ink/80">{f.caption}</p>
                <p className="font-inter text-xs text-muted-ink/60">{f.detail}</p>
              </div>
            ))}

            <div className="shrink-0 w-4" aria-hidden="true" />
          </div>
        </div>

        {/* ── 3b. Things that made him Chester — asymmetric grid ──────────── */}
        <div className="mx-auto mb-20 max-w-[640px] px-6">
          <FadeIn>
            <p className="mb-8 font-fraunces text-lg italic text-ink/70">
              The things that made him Chester.
            </p>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-6">
              {/* Row 1: 2 items, each half-width */}
              <div className="col-span-1 sm:col-span-3">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[0]}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-3">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[1]}
                </p>
              </div>
              {/* Row 2: 3 items, each third-width */}
              <div className="col-span-1 sm:col-span-2">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[2]}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[3]}
                </p>
              </div>
              <div className="col-span-1 sm:col-span-2">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[4]}
                </p>
              </div>
              {/* Row 3: 1 item, centered (two-thirds width) */}
              <div className="col-span-2 sm:col-span-4 sm:col-start-2">
                <PhotoPlaceholder label="photo" className="aspect-square w-full max-w-[180px]" />
                <p className="mt-2 font-fraunces text-sm italic leading-snug text-ink/70">
                  {CHESTER_THINGS[5]}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* ── 3c. His bucket list — map ────────────────────────────────────── */}
        <div>
          <div className="mx-auto max-w-[640px] px-6">
            <FadeIn>
              <p className="mb-3 font-fraunces text-lg italic text-ink/70">His bucket list.</p>
              <p className="mb-8 font-inter text-sm text-muted-ink/60">
                Everywhere he sniffed. Every place he loved.
              </p>
            </FadeIn>
          </div>

          <FadeIn>
            <div className="px-4 sm:px-6">
              <ChesterMapLoader places={chesterPlaces} />
            </div>
            <p className="mt-3 text-center font-inter text-xs text-muted-ink/55">
              Every pin is a place he loved. Hover to visit.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Squiggle separator — emotional pivot */}
      <div className="flex justify-center py-10">
        <Squiggle variant={2} color="#A8B368" width={120} />
      </div>

      {/* ── 4. THE HARDEST PART ── prose only, no photo ──────────────────── */}
      <section id="the-hardest-part" className="py-28">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              The hardest part.
            </h2>
            <div className="space-y-5 font-fraunces text-lg leading-relaxed text-ink/75">
              <p>
                [Placeholder — Sona will write this section.] Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                [Placeholder.] Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut
                perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. THE PEOPLE WHO SHOWED UP ──────────────────────────────────── */}
      <section id="the-people-who-showed-up" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              The people who showed up.
            </h2>
            <div className="space-y-5 font-fraunces text-lg leading-relaxed text-ink/75">
              <p>
                [Placeholder — Sona will write this section.] Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                [Placeholder.] Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
                aspernatur aut odit aut fugit.
              </p>
            </div>
          </FadeIn>

          {/* Community photo grid */}
          <FadeIn delay={0.1}>
            <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                <Image
                  src="/images/chester/story/community-01.JPG"
                  alt="The village"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 200px"
                />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                <Image
                  src="/images/chester/story/community-02.jpg"
                  alt="The village"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, 200px"
                />
              </div>
              <PhotoPlaceholder label="community-03" className="aspect-square" />
              <PhotoPlaceholder label="community-04" className="aspect-square" />
              <PhotoPlaceholder label="community-05" className="aspect-square" />
              <PhotoPlaceholder label="community-06" className="aspect-square" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 6. HOW THIS BECAME A VILLAGE ─────────────────────────────────── */}
      <section id="how-this-became-a-village" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              How this became a village.
            </h2>
            <div className="space-y-5 font-fraunces text-lg leading-relaxed text-ink/75">
              <p>
                [Placeholder — Sona will write this section.] Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                [Placeholder.] Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis
                iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
                aperiam. Chester's Village is named for him because he is the reason it exists.
                He was the village before the village had a name.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Squiggle separator */}
      <div className="flex justify-center py-10">
        <Squiggle variant={3} color="#A8B368" width={120} />
      </div>

      {/* ── 7. CLOSING ───────────────────────────────────────────────────── */}
      <section id="closing" className="py-32">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <div
              className="relative flex items-center justify-center"
              style={{ minHeight: "300px" }}
            >
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <Blob variant={4} color="#E8B04A" size={440} rotation={-15} opacity={0.22} />
              </div>
              <p className="relative text-center font-fraunces text-2xl italic leading-relaxed text-ink/65 sm:text-3xl">
                Every dog deserves<br />what Chester had.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
