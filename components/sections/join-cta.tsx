// Join CTA — final conversion moment on the homepage.
// Sparkle placement #3 of 3: next to the join CTA button.
// Returns to cream after the ink member count section.

import { site } from "@/content/site";
import Sparkle from "@/components/ui/sparkle";

export default function JoinCTA() {
  return (
    <section className="bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 text-center">

        <h2 className="mb-6 font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
          Your pup&rsquo;s people<br className="hidden sm:block" /> are already here.
        </h2>

        <p className="mx-auto mb-12 max-w-sm font-inter text-base leading-relaxed text-muted-ink">
          Join the WhatsApp village. It&rsquo;s free, it&rsquo;s friendly, and Chester would
          have approved.
        </p>

        {/* Sparkle #3 + button */}
        <div className="flex items-center justify-center gap-3">
          <Sparkle className="h-5 w-5 shrink-0 text-honey" />
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal px-8 py-3.5 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:brightness-105 hover:shadow-md"
          >
            Join the village
          </a>
        </div>

      </div>
    </section>
  );
}
