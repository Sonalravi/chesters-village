import Link from "next/link";
import FadeIn from "@/components/ui/fade-in";

const events = [
  { name: "Sniff it out", description: "Morning walks, new trails, better noses than ours.", tint: "bg-olive/15" },
  { name: "Beach n Brunch", description: "Sand, salt, and dogs who've earned their eggs benny.", tint: "bg-teal/15" },
  { name: "Frosty Paws", description: "Cold treats for warm pups. A winter village tradition.", tint: "bg-lavender/20" },
] as const;

export default function HomeEventsPreview() {
  return (
    <section className="bg-[#F0EDE4] py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                How we gather
              </p>
              <h2 className="font-fraunces text-4xl text-ink sm:text-5xl">
                Events so far
              </h2>
            </div>
            <Link
              href="/village#events"
              className="shrink-0 font-inter text-sm text-teal underline-offset-4 hover:underline"
            >
              See all events →
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-3">
          {events.map((event, i) => (
            <FadeIn key={event.name} delay={i * 0.08}>
              <div className="group">
                <div className={`aspect-[4/3] overflow-hidden rounded-2xl ${event.tint} shadow-warm transition-transform duration-300 ease-out group-hover:scale-[1.01]`}>
                  <div className="flex h-full items-end p-5">
                    <span className="font-fraunces text-xs italic text-muted-ink/50">Photo coming soon</span>
                  </div>
                </div>
                <p className="mt-4 font-fraunces text-xl text-ink">{event.name}</p>
                <p className="mt-1 font-inter text-sm leading-relaxed text-muted-ink">{event.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
