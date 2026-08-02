// /chester — Chester's tribute page
// Content column max 640px. Full-bleed photos punctuate prose.
// No parallax. No scroll-triggered animations. Reads like a book.
// Fraunces for both display and body text throughout.

import { chesterContent } from "@/content/chester";
import ChesterMark from "@/components/ui/chester-mark";

const { dates, lede, story, bucketList, gallery } = chesterContent;

export default function ChesterPage() {
  return (
    <main className="flex-1 bg-cream">

      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="mx-auto max-w-[640px] px-6 pb-16 pt-20 text-center">
        {/* Chester mark — watermark at top of this page only */}
        <ChesterMark className="mx-auto mb-10 h-20 w-20 text-ink/15" />

        <h1 className="mb-3 font-fraunces text-5xl text-ink sm:text-6xl">
          Chester
        </h1>
        <p className="mb-10 font-inter text-sm tracking-[0.15em] text-muted-ink">
          {dates}
        </p>
        <p className="font-fraunces text-xl italic leading-relaxed text-ink/70 sm:text-2xl">
          {lede}
        </p>
      </header>

      {/* ── Full-bleed photo #1 ───────────────────────────────────── */}
      <div className="w-full bg-honey/12 aspect-[16/7]">
        {/* Replace with <Image fill> once hero Chester photo is available */}
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-fraunces text-sm italic text-honey/40">
            Chester — photo coming soon
          </p>
        </div>
      </div>

      {/* ── Story ────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[640px] px-6 py-16">
        {story.map((section, i) => (
          <div key={i} className={i > 0 ? "mt-12" : ""}>
            {section.heading && (
              <h2 className="mb-4 font-fraunces text-2xl text-ink">
                {section.heading}
              </h2>
            )}
            <p className="font-fraunces text-lg leading-[1.8] text-ink/80">
              {section.body}
            </p>
          </div>
        ))}
      </section>

      {/* ── Full-bleed photo #2 ───────────────────────────────────── */}
      <div className="w-full bg-teal/10 aspect-[16/7]">
        <div className="flex h-full w-full items-center justify-center">
          <p className="font-fraunces text-sm italic text-teal/30">
            Chester — photo coming soon
          </p>
        </div>
      </div>

      {/* ── Bucket list ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-[640px] px-6 py-16">
        <h2 className="mb-12 font-fraunces text-2xl text-ink">
          Things he got to do
        </h2>

        <ol className="space-y-10">
          {bucketList.map(({ year, moment }) => (
            <li key={year} className="grid grid-cols-[4rem_1fr] gap-4 items-baseline">
              <span className="font-inter text-xs tracking-[0.1em] text-muted-ink pt-1">
                {year}
              </span>
              <p className="font-fraunces text-lg leading-[1.8] text-ink/80">
                {moment}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Photo gallery ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-[640px] px-6 pb-24">
        <h2 className="mb-10 font-fraunces text-2xl text-ink">
          A few of his moments
        </h2>

        <div className="grid grid-cols-2 gap-4">
          {gallery.map(({ alt, caption, aspect, tint }) => (
            <figure key={caption}>
              <div className={`w-full overflow-hidden rounded-xl ${aspect} ${tint}`}>
                {/* Replace with <Image src={src} alt={alt} fill … /> once photos arrive */}
                <div className="flex h-full w-full items-end p-3">
                  <span className="font-inter text-xs italic text-muted-ink/40">
                    {alt}
                  </span>
                </div>
              </div>
              <figcaption className="mt-2 font-inter text-xs text-muted-ink px-0.5">
                {caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

    </main>
  );
}
