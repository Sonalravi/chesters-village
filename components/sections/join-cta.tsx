import { site } from "@/content/site";
import Sparkle from "@/components/ui/sparkle";
import FadeIn from "@/components/ui/fade-in";

export default function JoinCTA() {
  return (
    <section className="bg-lavender-wash py-24 md:py-36">
      <div className="mx-auto max-w-[1200px] px-6 text-center">
        <FadeIn>
          <div className="mb-6 flex items-center justify-center gap-3">
            <Sparkle className="h-5 w-5 shrink-0 text-honey" />
            <p className="font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
              Join the village
            </p>
            <Sparkle className="h-5 w-5 shrink-0 text-honey" />
          </div>
          <h2 className="mb-4 font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
            Your pup&rsquo;s people are already here
          </h2>
          <p className="mx-auto mb-10 max-w-md font-inter text-base leading-relaxed text-muted-ink">
            {site.memberCount}+ dog parents across San Francisco who show up. For the 2am ER text.
            For the walk when you&rsquo;re wiped. For the neighborhood that finally knows your dog&rsquo;s name.
          </p>
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-teal px-10 py-4 font-inter text-sm font-medium text-cream shadow-warm transition-all duration-300 ease-out hover:brightness-105"
          >
            Join on WhatsApp
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
