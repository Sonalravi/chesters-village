import { site } from "@/content/site";
import Sparkle from "@/components/ui/sparkle";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream py-28 md:py-40">
      {/* Honey flourishes — background only, never interactive */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-honey/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-64 w-64 rounded-full bg-honey/10 blur-3xl" />

      <div className="relative mx-auto max-w-[1200px] px-6 text-center">
        {/* Eyebrow */}
        <p className="mb-6 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
          A community for dog parents in San Francisco
        </p>

        {/* Headline */}
        <h1 className="mb-4 font-fraunces text-5xl leading-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
          Chester&rsquo;s Village
        </h1>

        {/* Tagline with sparkle */}
        <div className="mb-10 flex items-center justify-center gap-3">
          <Sparkle className="h-5 w-5 shrink-0 text-honey" />
          <p className="font-fraunces text-xl italic text-ink/75 sm:text-2xl">
            {site.tagline}
          </p>
        </div>

        {/* Vision */}
        <p className="mx-auto mb-12 max-w-md font-inter text-base leading-relaxed text-muted-ink">
          {site.vision}
        </p>

        {/* Primary CTA */}
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-teal px-8 py-3.5 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:brightness-105 hover:shadow-md"
        >
          Join the village
        </a>
      </div>
    </section>
  );
}
