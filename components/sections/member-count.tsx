// Member count — hardcoded in content/site.ts, bumped manually by Sona.
// Sparkle placement #2 of 3: next to the member count number.
// Ink background creates a visual break after three cream sections.

import { site } from "@/content/site";
import Sparkle from "@/components/ui/sparkle";

export default function MemberCount() {
  return (
    <section className="bg-ink py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6 text-center">

        {/* Number + sparkle */}
        <div className="mb-3 flex items-center justify-center gap-4">
          <Sparkle className="h-7 w-7 shrink-0 text-honey" />
          <span className="font-fraunces text-8xl leading-none text-cream sm:text-9xl">
            {site.memberCount}
          </span>
        </div>

        {/* Label */}
        <p className="mb-8 font-inter text-sm tracking-[0.2em] uppercase text-cream/60">
          {site.memberNoun} and growing
        </p>

        {/* Supporting copy */}
        <p className="mx-auto max-w-sm font-inter text-base leading-relaxed text-cream/50">
          Every week, more pet parents in San Francisco find their people. Chester
          would have loved every single one of them.
        </p>

      </div>
    </section>
  );
}
