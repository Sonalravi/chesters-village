// /chester — Memorial page
// 10 sections (added "His footprint" with Leaflet map)
// Per-section image placeholders: cream bg, dashed olive border, "Photo goes here" in Caveat
// Real photos wired in where available

import Image from "next/image";
import { chesterContent } from "@/content/chester";
import { chesterPlaces } from "@/content/chester-places";
import ChesterMark from "@/components/ui/chester-mark";
import PawScrollIndicator from "@/components/ui/paw-scroll-indicator";
import ChesterMapLoader from "@/components/ui/chester-map-loader";
import Carousel from "@/components/ui/carousel";
import FadeIn from "@/components/ui/fade-in";

const { dates, lede, sections, gallery } = chesterContent;
const sectionIds = sections.map((s) => s.id);

// Real photos available per section (keyed by section id)
const sectionPhotos: Record<string, { src: string; alt: string }> = {
  "the-two-of-us": {
    src: "/images/chester/story/chester-as-a-baby.jpg",
    alt: "Chester as a puppy",
  },
  "the-move": {
    src: "/images/chester/story/relocation-from-blr-to-sf.jpg",
    alt: "Chester's move from Bangalore to San Francisco",
  },
  "a-brother-named-shadow": {
    src: "/images/chester/shadow/with-shadow-3.JPEG",
    alt: "Chester with Shadow",
  },
};

function PhotoPlaceholder({ sectionId }: { sectionId: string }) {
  const real = sectionPhotos[sectionId];

  if (real) {
    return (
      <div className="relative mt-8 aspect-[3/2] w-full overflow-hidden rounded-2xl shadow-warm">
        <Image src={real.src} alt={real.alt} fill className="object-cover" sizes="640px" />
      </div>
    );
  }

  return (
    <div className="mt-8 flex aspect-[3/2] w-full items-center justify-center rounded-2xl border-2 border-dashed border-olive/40 bg-cream">
      <p className="font-caveat text-lg text-muted-ink/50">Photo goes here</p>
    </div>
  );
}

export default function ChesterPage() {
  return (
    <main className="flex-1 bg-cream">

      {/* Paw scroll indicator — fixed left edge, xl screens only */}
      <PawScrollIndicator sectionIds={sectionIds} />

      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="mx-auto max-w-[640px] px-6 pb-16 pt-20 text-center">
        <ChesterMark className="mx-auto mb-10 h-20 w-20 text-ink/15" />
        <h1 className="mb-3 font-fraunces text-5xl text-ink sm:text-6xl lg:text-7xl">
          Chester
        </h1>
        <p className="mb-6 font-inter text-sm tracking-[0.15em] text-muted-ink">
          {dates}
        </p>
        <p className="font-fraunces text-xl italic leading-relaxed text-ink/60 sm:text-2xl">
          {lede}
        </p>
      </header>

      {/* ── Hero photo (baby Chester) ─────────────────────────────── */}
      <div className="relative w-full aspect-[16/7] overflow-hidden bg-honey/10">
        <Image
          src="/images/chester/story/chester-as-a-baby.jpg"
          alt="Chester as a puppy"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* ── Ten sections ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-[640px] px-6 py-16 space-y-20">
        {sections.map((section, i) => {
          const isSFLife = section.id === "life-in-san-francisco";
          const isFootprint = section.id === "his-footprint";

          return (
            <section key={section.id} id={section.id}>
              <FadeIn>
                <p className="mb-2 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mb-6 font-fraunces text-2xl text-ink sm:text-3xl">
                  {section.heading}
                </h2>
                <p className="font-fraunces text-lg leading-[1.85] text-ink/75">
                  {section.body}
                </p>

                {/* Map — His footprint section */}
                {isFootprint && (
                  <div className="mt-10 -mx-6 sm:mx-0">
                    <ChesterMapLoader places={chesterPlaces} />
                    <p className="mt-3 font-inter text-xs text-muted-ink/60 text-center">
                      Tap any pin to see where Chester went
                    </p>
                  </div>
                )}

                {/* Carousel — SF Life section */}
                {isSFLife && (
                  <div className="mt-10 -mx-6 sm:mx-0">
                    <Carousel items={gallery} />
                  </div>
                )}

                {/* Photo placeholder for all other sections */}
                {!isSFLife && !isFootprint && (
                  <PhotoPlaceholder sectionId={section.id} />
                )}
              </FadeIn>
            </section>
          );
        })}
      </div>

      {/* ── Full-bleed closing photo ──────────────────────────────── */}
      <div className="relative w-full aspect-[16/7] overflow-hidden bg-teal/8">
        <Image
          src="/images/chester/shadow/with-shadow-3.JPEG"
          alt="Chester and Shadow"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* ── Closing mark ─────────────────────────────────────────── */}
      <div className="py-16 flex justify-center">
        <ChesterMark className="h-10 w-10 text-ink/10" />
      </div>

    </main>
  );
}
