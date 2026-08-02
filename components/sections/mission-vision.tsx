import FadeIn from "@/components/ui/fade-in";
import { site } from "@/content/site";

export default function MissionVision() {
  return (
    <section className="grid md:grid-cols-2">

      {/* Mission — lavender tint */}
      <div className="bg-[#F3EDEF] px-8 py-16 md:px-16 md:py-24">
        <FadeIn>
          <p className="mb-6 font-fraunces text-7xl text-lavender/60 leading-none select-none">
            01
          </p>
          <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
            Our mission
          </p>
          <h2 className="mb-6 font-fraunces text-3xl leading-snug text-ink sm:text-4xl">
            A support system for every stage
          </h2>
          <p className="font-inter text-base leading-relaxed text-muted-ink">
            {site.mission}
          </p>
        </FadeIn>
      </div>

      {/* Vision — teal tint */}
      <div className="bg-[#F0EDE4] px-8 py-16 md:px-16 md:py-24">
        <FadeIn delay={0.1}>
          <p className="mb-6 font-fraunces text-7xl text-teal/40 leading-none select-none">
            02
          </p>
          <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
            Our vision
          </p>
          <h2 className="mb-6 font-fraunces text-3xl leading-snug text-ink sm:text-4xl">
            Beyond the front door
          </h2>
          <p className="font-inter text-base leading-relaxed text-muted-ink">
            {site.vision}
          </p>
        </FadeIn>
      </div>

    </section>
  );
}
