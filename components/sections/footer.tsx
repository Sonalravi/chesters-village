import Link from "next/link";
import { site } from "@/content/site";
import ChesterMark from "@/components/ui/chester-mark";

const nav = [
  { label: "Home", href: "/" },
  { label: "Chester", href: "/chester" },
  { label: "The pups", href: "/pups" },
];

const social = [
  { label: "Instagram", href: site.instagram },
  { label: "LinkedIn", href: site.linkedin },
  { label: "Email", href: `mailto:${site.email}` },
];

export default function Footer() {
  return (
    <footer className="bg-ink">
      {/* Main footer content */}
      <div className="mx-auto max-w-[1200px] px-6 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">

          {/* Left: identity */}
          <div>
            <p className="mb-2 font-fraunces text-2xl text-cream">
              Chester&rsquo;s Village
            </p>
            <p className="font-inter text-sm leading-relaxed text-cream/50">
              {site.tagline}
            </p>
          </div>

          {/* Right: nav + social */}
          <div className="flex gap-16 md:justify-end">
            <div>
              <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-cream/30">
                Pages
              </p>
              <ul className="space-y-3">
                {nav.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="font-inter text-sm text-cream/60 transition-colors duration-300 ease-out hover:text-cream"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 font-inter text-xs tracking-[0.2em] uppercase text-cream/30">
                Find us
              </p>
              <ul className="space-y-3">
                {social.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="font-inter text-sm text-cream/60 transition-colors duration-300 ease-out hover:text-cream"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar: Chester signature + copyright */}
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-6">
          <ChesterMark className="h-8 w-8 text-cream/20" />
          <p className="font-inter text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Chester&rsquo;s Village. Made with love for Chester.
          </p>
        </div>
      </div>
    </footer>
  );
}
