import Link from "next/link";
import { communityStories } from "@/content/community";
import FadeIn from "@/components/ui/fade-in";

export default function HomeCommunityPreview() {
  return (
    <section className="bg-honey-wash py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                The village in action
              </p>
              <h2 className="font-fraunces text-4xl text-ink sm:text-5xl">
                How we show up for each other
              </h2>
            </div>
            <Link
              href="/village#community"
              className="shrink-0 font-inter text-sm text-teal underline-offset-4 hover:underline"
            >
              See more moments →
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {communityStories.map((story, i) => (
            <FadeIn key={story.id} delay={i * 0.08}>
              {story.placeholder ? (
                <div className="flex min-h-[220px] flex-col justify-center rounded-2xl border-2 border-dashed border-olive/40 p-8 text-center">
                  <p className="font-caveat text-lg text-muted-ink/50">Story goes here</p>
                </div>
              ) : (
                <div className="rounded-2xl bg-cream p-8 shadow-warm">
                  <h3 className="mb-3 font-fraunces text-xl text-ink">{story.title}</h3>
                  <p className="font-inter text-sm leading-relaxed text-muted-ink">{story.body}</p>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
