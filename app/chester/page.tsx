"use client";

// /chester — Character portrait scrapbook. 6 sections.
// Design language: Blob, Squiggle, ScrapbookTile, paw-photo Leaflet map.

import Image from "next/image";
import { motion } from "framer-motion";
import { chesterPlaces } from "@/content/chester-places";
import ChesterMark from "@/components/ui/chester-mark";
import PawScrollIndicator from "@/components/ui/paw-scroll-indicator";
import ChesterMapLoader from "@/components/ui/chester-map-loader";
import FadeIn from "@/components/ui/fade-in";
import Blob from "@/components/design/Blob";
import Squiggle from "@/components/design/Squiggle";
import ScrapbookTile from "@/components/design/ScrapbookTile";

const SECTION_IDS = [
  "hero",
  "who-he-was",
  "sniffaris",
  "the-village-he-built",
  "when-the-village-came-back",
  "closing",
];

// Sparkle glyph
function Sparkle({ className = "" }: { className?: string }) {
  return (
    <span className={`font-inter text-honey select-none ${className}`} aria-hidden="true">
      ✦
    </span>
  );
}

export default function ChesterPage() {
  return (
    <main className="flex-1 bg-cream overflow-x-hidden">
      <PawScrollIndicator sectionIds={SECTION_IDS} />

      {/* ── 1. HERO ──────────────────────────────────────────────── */}
      <section id="hero" className="relative overflow-hidden">
        {/* Background blob */}
        <div
          className="pointer-events-none absolute -top-24 -right-32 opacity-60"
          aria-hidden="true"
        >
          <Blob variant={1} color="#E8B04A" size={520} rotation={20} opacity={0.12} />
        </div>

        {/* Header block */}
        <div className="relative mx-auto max-w-[640px] px-6 pt-20 pb-12 text-center">
          <ChesterMark className="mx-auto mb-10 h-16 w-16 text-ink/10" />

          <motion.h1
            className="mb-3 font-fraunces font-black text-ink"
            style={{ fontSize: "clamp(3.5rem, 10vw, 7rem)", lineHeight: 1 }}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            Chester
          </motion.h1>

          <motion.p
            className="mb-8 font-inter text-sm tracking-[0.18em] text-muted-ink/70 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            2015 — 2026
          </motion.p>

          <motion.p
            className="font-fraunces text-xl italic leading-relaxed text-ink/60 sm:text-2xl"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
          >
            <Sparkle className="mr-2 text-base" />
            The dog who talked to strangers.
            <Sparkle className="ml-2 text-base" />
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65, duration: 0.5 }}
          >
            <Squiggle variant={1} color="#A8B368" width={180} />
          </motion.div>
        </div>

        {/* Hero photo — scale in */}
        <motion.div
          className="relative w-full overflow-hidden bg-honey/10"
          style={{ aspectRatio: "16/7" }}
          initial={{ scale: 0.97, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/images/chester/story/chester-as-a-baby.jpg"
            alt="Chester as a puppy"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
      </section>

      {/* ── 2. WHO HE WAS ─────────────────────────────────────────── */}
      <section id="who-he-was" className="relative py-24 overflow-hidden">
        {/* Background blob */}
        <div
          className="pointer-events-none absolute -left-40 top-16 opacity-70"
          aria-hidden="true"
        >
          <Blob variant={3} color="#7AAFA8" size={400} rotation={-15} opacity={0.10} />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-14 text-center">
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
                01
              </p>
              <h2 className="font-fraunces font-black text-ink"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}>
                Who he was
              </h2>
              <div className="mt-5 flex justify-center">
                <Squiggle variant={3} color="#E8B04A" width={120} />
              </div>
            </div>
          </FadeIn>

          {/* 6-tile asymmetric grid */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <ScrapbookTile
              photo="/images/chester/story/chester-as-a-baby.jpg"
              alt="Chester as a puppy"
              caption="He arrived small, uncertain, and fully convinced that every person he met was there specifically for him."
              rotation={-3}
              blobVariant={1}
              blobColor="#E8B04A"
              delay={0}
              aspectRatio="aspect-[3/4]"
            />
            <ScrapbookTile
              caption="He never met a stranger. Not once. Not even the people who tried."
              rotation={2}
              blobVariant={2}
              blobColor="#7AAFA8"
              delay={0.1}
              aspectRatio="aspect-[4/3]"
              className="sm:mt-10"
            />
            <ScrapbookTile
              photo="/images/chester/story/relocation-from-blr-to-sf.jpg"
              alt="Chester's move from Bangalore to San Francisco"
              caption="He crossed an ocean and landed in San Francisco without missing a beat."
              rotation={3}
              blobVariant={4}
              blobColor="#C9AFD3"
              delay={0.2}
              aspectRatio="aspect-square"
            />
            <ScrapbookTile
              caption="His speed was genuinely embarrassing. The beach brought it out every time."
              rotation={-2}
              blobVariant={5}
              blobColor="#A8B368"
              delay={0.1}
              aspectRatio="aspect-[4/3]"
              className="sm:mt-6"
            />
            <ScrapbookTile
              photo="/images/chester/shadow/with-shadow-1.jpg"
              alt="Chester with Shadow"
              caption="He got a brother. Shadow. He was horrified and then obsessed, in that order."
              rotation={2}
              blobVariant={3}
              blobColor="#C9AFD3"
              delay={0.2}
              aspectRatio="aspect-[3/4]"
            />
            <ScrapbookTile
              caption="He read a room the way some people read a book. Quietly, carefully, and without missing anything."
              rotation={-3}
              blobVariant={1}
              blobColor="#E8B04A"
              delay={0.3}
              aspectRatio="aspect-square"
              className="sm:mt-10"
            />
          </div>
        </div>
      </section>

      {/* ── 3. SNIFFARIS ──────────────────────────────────────────── */}
      <section id="sniffaris" className="relative py-24 bg-olive/5 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-32 -bottom-20 opacity-60"
          aria-hidden="true"
        >
          <Blob variant={2} color="#A8B368" size={480} rotation={30} opacity={0.08} />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-5 text-center">
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
                02
              </p>
              <h2
                className="font-fraunces font-black text-ink"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", lineHeight: 1.1 }}
              >
                Sniffaris
              </h2>
              <p className="mt-4 font-fraunces text-lg italic text-ink/55">
                Every great dog has a map. This was his.
              </p>
              <div className="mt-5 flex justify-center">
                <Squiggle variant={2} color="#7AAFA8" width={140} />
              </div>
            </div>
          </FadeIn>

          {/* Floating tiles above the map */}
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-3">
            <ScrapbookTile
              photo="/images/chester/places/ocean-beach.jpg"
              alt="Ocean Beach, San Francisco"
              caption="Ocean Beach. His favorite sprint. Full speed, straight into the surf."
              rotation={-2}
              blobVariant={1}
              blobColor="#7AAFA8"
              delay={0}
              aspectRatio="aspect-[4/3]"
            />
            <ScrapbookTile
              photo="/images/chester/places/tilden-regional-park.jpg"
              alt="Tilden Regional Park"
              caption="Tilden. The hills gave him purpose."
              rotation={3}
              blobVariant={4}
              blobColor="#E8B04A"
              delay={0.1}
              aspectRatio="aspect-[4/3]"
              className="sm:mt-8"
            />
            <ScrapbookTile
              photo="/images/chester/places/mt-tam.JPEG"
              alt="Mt. Tamalpais"
              caption="Mt. Tam. The view from the top was wasted on him. He was busy sniffing."
              rotation={-3}
              blobVariant={2}
              blobColor="#C9AFD3"
              delay={0.2}
              aspectRatio="aspect-[4/3]"
            />
          </div>

          {/* Map */}
          <FadeIn>
            <div className="-mx-6 sm:mx-0">
              <ChesterMapLoader places={chesterPlaces} />
            </div>
            <p className="mt-3 text-center font-inter text-xs text-muted-ink/55">
              Sniff around the map — every paw print holds a memory.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 4. THE VILLAGE HE BUILT ───────────────────────────────── */}
      <section id="the-village-he-built" className="relative py-24 overflow-hidden">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 opacity-70"
          aria-hidden="true"
        >
          <Blob variant={5} color="#C9AFD3" size={380} rotation={10} opacity={0.10} />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
              03
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Prose */}
            <FadeIn>
              <div>
                <h2
                  className="mb-8 font-fraunces font-black text-ink"
                  style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1.1 }}
                >
                  The village<br />he built
                </h2>
                <Squiggle variant={1} color="#A8B368" width={100} className="mb-8" animate={false} />
                <div className="space-y-5 font-fraunces text-lg leading-[1.85] text-ink/75">
                  <p>
                    Chester was the reason Sona started talking to people at the park. He was the reason
                    strangers became regulars, regulars became friends, and friends became a community
                    that had each other on hard days.
                  </p>
                  <p>
                    He didn't start Chester's Village intentionally. He just made it impossible not to.
                    Every walk was an introduction. Every dog park was a reunion. Every beach run was a
                    reason to stay a little longer.
                  </p>
                  <p>
                    He left San Francisco with a wake. A hundred people who knew his name, his speed,
                    his habit of sitting just a little too close when you were eating.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Photo + blob */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-8 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Blob variant={3} color="#C9AFD3" size={380} rotation={-20} opacity={0.18} />
                </div>
                <ScrapbookTile
                  photo="/images/chester/story/relocation-from-blr-to-sf.jpg"
                  alt="Chester moving to San Francisco"
                  caption="From Bangalore to San Francisco. He landed ready."
                  rotation={2}
                  blobVariant={3}
                  blobColor="#C9AFD3"
                  delay={0}
                  aspectRatio="aspect-[3/4]"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 5. WHEN THE VILLAGE CAME BACK ─────────────────────────── */}
      <section id="when-the-village-came-back" className="relative py-24 bg-honey/5 overflow-hidden">
        <div
          className="pointer-events-none absolute -right-16 top-0 opacity-60"
          aria-hidden="true"
        >
          <Blob variant={4} color="#E8B04A" size={360} rotation={-10} opacity={0.10} />
        </div>

        <div className="mx-auto max-w-5xl px-6">
          <FadeIn>
            <div className="mb-14">
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
                04
              </p>
              <h2
                className="font-fraunces font-black text-ink"
                style={{ fontSize: "clamp(2.2rem, 4vw, 3rem)", lineHeight: 1.1 }}
              >
                When the village<br />came back
              </h2>
              <div className="mt-5">
                <Squiggle variant={2} color="#E8B04A" width={110} animate={false} />
              </div>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            {/* 3-photo grid */}
            <FadeIn>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-warm">
                  <Image
                    src="/images/chester/shadow/with-shadow-2.jpg"
                    alt="Chester with Shadow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 90vw, 480px"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                  <Image
                    src="/images/chester/shadow/with-shadow-1.jpg"
                    alt="Chester with Shadow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 240px"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                  <Image
                    src="/images/chester/shadow/with-shadow-3.JPEG"
                    alt="Chester and Shadow"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 45vw, 240px"
                  />
                </div>
              </div>
            </FadeIn>

            {/* Prose */}
            <FadeIn delay={0.2}>
              <div className="space-y-5 font-fraunces text-lg leading-[1.85] text-ink/75">
                <p>
                  When Chester got sick, the village showed up. Not with grand gestures. With
                  presence. With check-ins. With "how are you doing today" from people who really
                  wanted to know.
                </p>
                <p>
                  He was there long enough to meet Shadow, his little brother. Long enough to
                  watch the community he started become something that could outlast him.
                </p>
                <p>
                  Chester's Village is still here. Because the people he brought together
                  refused to let it be anything else.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 6. CLOSING ────────────────────────────────────────────── */}
      <section id="closing" className="relative py-28 overflow-hidden">
        {/* Honey blob behind photo */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          aria-hidden="true"
        >
          <Blob variant={1} color="#E8B04A" size={500} rotation={15} opacity={0.14} />
        </div>

        <div className="relative mx-auto max-w-[440px] px-6 text-center">
          <FadeIn>
            {/* Closing photo */}
            <div
              className="mx-auto mb-10 overflow-hidden rounded-2xl shadow-warm"
              style={{ transform: "rotate(-1deg)" }}
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/chester/shadow/with-shadow-3.JPEG"
                  alt="Chester and Shadow"
                  fill
                  className="object-cover"
                  sizes="440px"
                />
              </div>
            </div>

            <Squiggle variant={3} color="#E8B04A" width={120} className="mx-auto mb-8" />

            <p className="font-fraunces text-2xl italic leading-relaxed text-ink/65 sm:text-3xl">
              He didn't just leave a mark.<br />He left a village.
            </p>

            <p className="mt-6 font-inter text-sm tracking-[0.15em] text-muted-ink/50">
              <Sparkle /> Chester, 2015–2026 <Sparkle />
            </p>
          </FadeIn>

          <div className="mt-16 flex justify-center">
            <ChesterMark className="h-10 w-10 text-ink/10" />
          </div>
        </div>
      </section>
    </main>
  );
}
