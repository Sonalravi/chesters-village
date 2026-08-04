import Image from "next/image";
import Link from "next/link";
import { pups } from "@/content/pups";
import FadeIn from "@/components/ui/fade-in";

// First 6 pups alphabetically (pups.ts is already sorted)
const previewPups = [...pups].sort((a, b) => a.name.localeCompare(b.name)).slice(0, 6);

export default function HomePupsPreview() {
  return (
    <section className="bg-teal-wash py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <FadeIn>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <p className="mb-3 font-inter text-xs tracking-[0.2em] uppercase text-muted-ink">
                The villagers
              </p>
              <h2 className="font-fraunces text-4xl text-ink sm:text-5xl">
                Meet our pups
              </h2>
            </div>
            <Link
              href="/village#pups"
              className="shrink-0 font-inter text-sm text-teal underline-offset-4 hover:underline"
            >
              Meet all our pups →
            </Link>
          </div>
        </FadeIn>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {previewPups.map((pup, i) => (
            <FadeIn key={pup.name} delay={i * 0.06}>
              <li className="group">
                <div className="relative aspect-square overflow-hidden rounded-2xl shadow-warm">
                  <Image
                    src={pup.image}
                    alt={pup.name}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </div>
                <p className="mt-2 px-0.5 font-caveat text-lg text-ink">{pup.name}</p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}
