// Meetup visuals — 4 established meetup names, each with a photo card.
// Photos: replace placeholder divs with <Image> once Sona provides assets.
// Hover: 2% scale on photo only, 300ms ease-out, no filters/darkening.

const meetups = [
  {
    name: "Sniff it out",
    description: "Morning walks, new trails, better noses than ours.",
    placeholder: "bg-olive/15",
  },
  {
    name: "Beach n Brunch",
    description: "Sand, salt, and dogs who've earned their eggs benny.",
    placeholder: "bg-teal/15",
  },
  {
    name: "Frosty Paws",
    description: "Cold treats for warm pups. A winter village tradition.",
    placeholder: "bg-lavender/20",
  },
  {
    name: "Happy hour with the hoomans",
    description: "The dogs nap. The humans finally talk.",
    placeholder: "bg-honey/15",
  },
] as const;

export default function Meetups() {
  return (
    <section className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">

        {/* Section header */}
        <div className="mb-14 max-w-xl">
          <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
            How the village shows up
          </p>
          <h2 className="font-fraunces text-4xl leading-snug text-ink sm:text-5xl">
            Where the village gathers
          </h2>
        </div>

        {/* Meetup grid — 1 col mobile, 2 col sm+ */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {meetups.map((meetup) => (
            <div key={meetup.name} className="group">

              {/* Photo area */}
              <div className="overflow-hidden rounded-2xl">
                <div
                  className={`aspect-[4/3] w-full ${meetup.placeholder} transition-transform duration-300 ease-out group-hover:scale-[1.02]`}
                >
                  {/* Replace with <Image> once photos are available */}
                  <div className="flex h-full w-full items-end p-5">
                    <span className="font-fraunces text-xs italic text-muted-ink/50">
                      Photo coming soon
                    </span>
                  </div>
                </div>
              </div>

              {/* Meetup name + description */}
              <div className="mt-4 px-1">
                <p className="mb-1 font-fraunces text-xl text-ink">
                  {meetup.name}
                </p>
                <p className="font-inter text-sm leading-relaxed text-muted-ink">
                  {meetup.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
