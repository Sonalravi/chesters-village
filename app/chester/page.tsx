// /chester — Memorial page
// Header: Chester / dates / "Ten years, one village."
// Left-edge paw scroll indicator (9 sections, xl+ screens)
// Content column max 640px, Fraunces body text
// SF Life section includes auto-scrolling carousel

import { chesterContent } from "@/content/chester";
import ChesterMark from "@/components/ui/chester-mark";
import PawScrollIndicator from "@/components/ui/paw-scroll-indicator";
import Carousel from "@/components/ui/carousel";
import FadeIn from "@/components/ui/fade-in";

const { dates, lede, sections, gallery } = chesterContent;

const sectionIds = sections.map((s) => s.id);

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

      {/* ── Full-bleed placeholder ───────────────────────────────── */}
      <div className="w-full bg-honey/10 aspect-[16/7]">
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-fraunces text-sm italic text-honey/40">
            Chester — photo coming soon
          </p>
        </div>
      </div>

      {/* ── Nine sections ────────────────────────────────────────── */}
      <div className="mx-auto max-w-[640px] px-6 py-16 space-y-20">
        {sections.map((section, i) => {
          const isSFLife = section.id === "life-in-san-francisco";

          return (
            <section key={section.id} id={section.id}>
              <FadeIn>
                {/* Section number */}
                <p className="mb-2 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink/50">
                  {String(i + 1).padStart(2, "0")}
                </p>

                <h2 className="mb-6 font-fraunces text-2xl text-ink sm:text-3xl">
                  {section.heading}
                </h2>

                <p className="font-fraunces text-lg leading-[1.85] text-ink/75">
                  {section.body}
                </p>

                {/* Carousel after SF Life section body */}
                {isSFLife && (
                  <div className="mt-10 -mx-6 sm:-mx-0">
                    <Carousel items={gallery} />
                  </div>
                )}
              </FadeIn>
            </section>
          );
        })}
      </div>

      {/* ── Full-bleed closing image placeholder ─────────────────── */}
      <div className="w-full bg-teal/8 aspect-[16/7]">
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-fraunces text-sm italic text-teal/30">
            Chester &amp; Shadow — photo coming soon
          </p>
        </div>
      </div>

      {/* ── Closing mark ─────────────────────────────────────────── */}
      <div className="py-16 flex justify-center">
        <ChesterMark className="h-10 w-10 text-ink/10" />
      </div>

    </main>
  );
}
