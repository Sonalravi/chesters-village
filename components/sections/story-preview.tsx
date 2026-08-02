import Link from "next/link";

export default function StoryPreview() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          {/* Text */}
          <div>
            <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
              The story behind the village
            </p>

            <h2 className="mb-6 font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
              Chester made us<br className="hidden sm:block" /> a village.
            </h2>

            <p className="mb-5 font-inter text-base leading-relaxed text-muted-ink">
              He was a dog who crossed continents with Sona, from India to the
              hills of San Francisco. Along the way, he had a gift for turning
              strangers into friends and sidewalks into gathering places.
            </p>

            <p className="mb-10 font-inter text-base leading-relaxed text-muted-ink">
              Chester&rsquo;s Village carries his name and his spirit: the belief
              that every dog deserves a family that extends beyond their front door,
              and every pet parent deserves a village to lean on.
            </p>

            <Link
              href="/chester"
              className="font-inter text-sm font-medium text-teal underline-offset-4 transition-all duration-300 ease-out hover:underline"
            >
              Read his story &rarr;
            </Link>
          </div>

          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl bg-honey/10">
              {/* Replace with <Image> once Sona provides Chester photos */}
              <div className="flex h-full w-full items-center justify-center">
                <p className="font-fraunces text-sm italic text-honey/60">
                  Chester — photo coming soon
                </p>
              </div>
            </div>

            {/* Lavender offset card — decorative depth */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-lavender/30" />
          </div>

        </div>
      </div>
    </section>
  );
}
