// /chester — Long-form memoir. 6 sections.
// Blobs: hero only + closing text block. Squiggles: §3→§4 and §5→§6.

import Image from "next/image";
import { chesterPlaces } from "@/content/chester-places";
import PawScrollIndicator from "@/components/ui/paw-scroll-indicator";
import ChesterMapLoader from "@/components/ui/chester-map-loader";
import FadeIn from "@/components/ui/fade-in";
import Blob from "@/components/design/Blob";
import Squiggle from "@/components/design/Squiggle";

const SECTION_IDS = [
  "hero",
  "from-bangalore",
  "sniffaris",
  "and-then-it-all-changed",
  "the-village-came-back",
  "he-built-this",
];

function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-2xl border-2 border-dashed border-olive/40 bg-cream ${className}`}
    >
      <p className="font-caveat text-sm text-muted-ink/50">{label}</p>
    </div>
  );
}

export default function ChesterPage() {
  return (
    <main className="flex-1 bg-cream">
      <PawScrollIndicator sectionIds={SECTION_IDS} />

      {/* ── 1. HERO ──────────────────────────────────────────────────── */}
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

            <p className="mt-5 font-fraunces text-xl text-muted-ink">
              2015 — 2026
            </p>

            <p className="mt-10 font-fraunces text-lg italic leading-relaxed text-ink/65 sm:text-xl">
              Chester's Village is a community, but it started as a dog. His name
              was Chester, and everywhere he went, he built a village around him.
              Strangers became friends because he stopped to say hello. Neighbors
              became family because he made them notice each other. This page is
              for him.
            </p>
          </FadeIn>

          {/* Hero photo with honey blob behind */}
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

      {/* ── 2. FROM BANGALORE TO SAN FRANCISCO ───────────────────────── */}
      <section id="from-bangalore" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              From Bangalore to San Francisco
            </h2>
          </FadeIn>

          <div className="space-y-6 font-fraunces text-lg leading-relaxed text-ink/75">
            {/* Paragraph 1 + baby Chester right-aligned */}
            <FadeIn>
              <div className="overflow-hidden">
                <div className="float-right mb-3 ml-6 w-[220px] sm:w-[260px]">
                  <div className="overflow-hidden rounded-2xl shadow-warm">
                    <Image
                      src="/images/chester/story/baby-01.jpg"
                      alt="Chester as a puppy"
                      width={260}
                      height={347}
                      className="w-full object-cover"
                      sizes="260px"
                    />
                  </div>
                </div>
                <p>
                  [Placeholder — Sona will write this section.] Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
                  labore et dolore magna aliqua. Chester came into Sona's life as a
                  puppy in Bangalore, small and certain of himself from the very first
                  day. He had opinions about everything: which side of the street was
                  worth sniffing, which strangers deserved a greeting, which parks were
                  worth returning to. He grew up in a city that moved fast, and he
                  moved faster.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <p>
                [Placeholder.] Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. In those
                early Bangalore years, he learned what mattered to him: people,
                movement, and the particular joy of an open gate. He made friends
                everywhere he went, which is to say, he made friends constantly.
                Every walk was an introduction. Every park was a reunion. His social
                calendar was fuller than most humans'.
              </p>
            </FadeIn>

            {/* Paragraph 3 + airport photo left-aligned */}
            <FadeIn>
              <div className="overflow-hidden">
                <div className="float-left mb-3 mr-6 w-[220px] sm:w-[260px]">
                  <div className="overflow-hidden rounded-2xl shadow-warm">
                    <Image
                      src="/images/chester/story/airport.jpg"
                      alt="Chester at the airport"
                      width={260}
                      height={347}
                      className="w-full object-cover"
                      sizes="260px"
                    />
                  </div>
                </div>
                <p>
                  [Placeholder.] Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. When the move
                  to San Francisco came, the question was never whether Chester
                  would adapt. The question was whether San Francisco was ready for
                  Chester. He crossed an ocean and a continent and landed on the
                  other side without missing a beat, without losing himself. The city
                  was new. He was not.
                </p>
              </div>
            </FadeIn>

            <FadeIn>
              <p>
                [Placeholder.] Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                San Francisco suited him the way cities suit dogs who were born
                for them — every neighborhood a new trail, every beach a new
                sprint. Ocean Beach became his favorite ritual. The smell of
                salt and the particular sound of waves, and then the full
                commitment of running straight into the surf without any
                hesitation whatsoever.
              </p>
            </FadeIn>

            {/* Paragraph 5 + sf-together placeholder right-aligned */}
            <FadeIn>
              <div className="overflow-hidden">
                <div className="float-right mb-3 ml-6 w-[220px] sm:w-[260px]">
                  <PhotoPlaceholder label="sf-together" className="aspect-[3/4]" />
                </div>
                <p>
                  [Placeholder.] Nemo enim ipsam voluptatem quia voluptas sit
                  aspernatur aut odit aut fugit, sed quia consequuntur magni
                  dolores eos qui ratione voluptatem sequi nesciunt. He built a
                  life in San Francisco the way he had built one in Bangalore:
                  slowly, person by person, park by park. The community that
                  would eventually become Chester's Village was already forming
                  around him before anyone thought to name it. He was just
                  doing what he always did. He was saying hello.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 3. SNIFFARIS ─────────────────────────────────────────────── */}
      <section id="sniffaris" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-4 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              His sniffaris.
            </h2>
            <p className="mb-10 font-fraunces text-lg italic leading-relaxed text-muted-ink">
              Chester didn't visit places. He collected them. Every trail, every
              beach, every strange corner of a strange new city — he made it his.
            </p>
          </FadeIn>
        </div>

        {/* Full-width map */}
        <FadeIn>
          <div className="px-4 sm:px-6">
            <ChesterMapLoader places={chesterPlaces} />
          </div>
          <p className="mt-3 text-center font-inter text-xs text-muted-ink/55">
            Every pin is a place he loved. Hover to visit.
          </p>
        </FadeIn>
      </section>

      {/* Squiggle separator — emotional pivot */}
      <div className="flex justify-center py-10">
        <Squiggle variant={2} color="#A8B368" width={120} />
      </div>

      {/* ── 4. AND THEN IT ALL CHANGED ───────────────────────────────── */}
      <section id="and-then-it-all-changed" className="py-24">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              And then it all changed.
            </h2>

            <p className="font-fraunces text-lg leading-relaxed text-ink/75">
              [Placeholder — Sona will write this section.] Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit
              esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit
              anim id est laborum. Sed ut perspiciatis unde omnis iste natus error
              sit voluptatem accusantium doloremque laudantium totam rem aperiam.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
              fugit sed quia consequuntur magni dolores.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── 5. THE VILLAGE CAME BACK ─────────────────────────────────── */}
      <section id="the-village-came-back" className="py-20">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              The village came back.
            </h2>

            <div className="space-y-5 font-fraunces text-lg leading-relaxed text-ink/75">
              <p>
                [Placeholder — Sona will write this section.] Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <p>
                [Placeholder.] Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae
                dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit.
              </p>
              <p>
                [Placeholder.] At vero eos et accusamus et iusto odio dignissimos
                ducimus qui blanditiis praesentium voluptatum deleniti atque
                corrupti quos dolores et quas molestias excepturi sint occaecati
                cupiditate non provident, similique sunt in culpa qui officia
                deserunt mollitia animi id est laborum et dolorum fuga.
              </p>
            </div>
          </FadeIn>

          {/* Photo grid — community photos. 2 col mobile, 3 col desktop */}
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

      {/* Squiggle separator */}
      <div className="flex justify-center py-10">
        <Squiggle variant={3} color="#A8B368" width={120} />
      </div>

      {/* ── 6. HE BUILT THIS ─────────────────────────────────────────── */}
      <section id="he-built-this" className="py-24">
        <div className="mx-auto max-w-[640px] px-6">
          <FadeIn>
            <h2 className="mb-10 font-fraunces text-3xl font-bold text-ink sm:text-4xl">
              He built this.
            </h2>

            <p className="font-fraunces text-lg leading-relaxed text-ink/75">
              [Placeholder — Sona will write this section.] Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
          </FadeIn>

          {/* Blob with italic closing line centered inside */}
          <FadeIn delay={0.1}>
            <div
              className="relative mt-14 flex items-center justify-center"
              style={{ minHeight: "280px" }}
            >
              <div
                className="pointer-events-none absolute inset-0 flex items-center justify-center"
                aria-hidden="true"
              >
                <Blob variant={4} color="#E8B04A" size={420} rotation={-15} opacity={0.22} />
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
