// /about — Mission, Vision, and the founding story
// 01 Mission (lavender-tint) + 02 Vision (teal-tint), intro + founding closing

import type { Metadata } from "next";
import FadeIn from "@/components/ui/fade-in";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "About us — Chester's Village",
  description: "The mission and vision behind Chester's Village, and how it all began.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-cream">

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[800px] px-6 py-20 md:py-28">
        <FadeIn>
          <p className="mb-5 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
            About Chester's Village
          </p>
          <h1 className="mb-8 font-fraunces text-4xl leading-tight text-ink sm:text-5xl md:text-6xl">
            A village built one walk at a time
          </h1>
          <p className="max-w-[600px] font-inter text-base leading-relaxed text-muted-ink">
            Chester's Village started not as an idea but as a fact on the ground. A dog named Chester
            spent ten years turning San Francisco sidewalks into gathering places, introducing strangers
            to each other, and reminding pet parents that they didn't have to figure it all out alone.
            By the time we named what he had built, it already existed. We're just keeping it going.
          </p>
        </FadeIn>
      </section>

      {/* ── 01 Mission + 02 Vision ────────────────────────────────── */}
      <section className="grid md:grid-cols-2">

        {/* Mission — lavender-tint */}
        <div className="bg-[#F3EDEF] px-8 py-16 md:px-16 md:py-24">
          <FadeIn>
            <p className="mb-6 font-fraunces text-7xl leading-none text-lavender/50 select-none">
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

        {/* Vision — teal-tint */}
        <div className="bg-[#F0EDE4] px-8 py-16 md:px-16 md:py-24">
          <FadeIn delay={0.1}>
            <p className="mb-6 font-fraunces text-7xl leading-none text-teal/40 select-none">
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

      {/* ── Founding note ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-[640px] px-6 py-20 md:py-28">
        <FadeIn>
          <p className="mb-5 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
            How it began
          </p>
          <h2 className="mb-6 font-fraunces text-2xl text-ink sm:text-3xl">
            Founded in San Francisco, 2023
          </h2>
          <p className="mb-6 font-inter text-base leading-relaxed text-muted-ink">
            Chester's Village was founded by Sonal Ravi after a decade of watching her dog Chester
            do what no app had managed to: get pet parents off their phones and talking to each other.
            The community started as a WhatsApp group. It grew from there, the way good things do,
            quietly and by word of mouth.
          </p>
          <p className="font-inter text-base leading-relaxed text-muted-ink">
            Today the village has {site.memberCount}+ members across San Francisco, gathering for
            morning walks, beach days, and the occasional happy hour. Chester passed away in January
            2026. The village he made is still showing up.
          </p>
        </FadeIn>
      </section>

    </main>
  );
}
