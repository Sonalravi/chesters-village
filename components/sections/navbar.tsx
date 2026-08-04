"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "The Village", href: "/village" },
  { label: "Chester", href: "/chester" },
];

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function DriveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M7.71 3.5L1.15 15l3.43 5.94L10.14 9.44z" opacity=".8" />
      <path d="M22.85 15L16.29 3.5H7.71l6.57 11.5z" opacity=".6" />
      <path d="M4.58 20.94h14.84L22.85 15H1.15z" opacity=".9" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center gap-1 rounded-full border border-ink/8 bg-cream/80 px-3 py-2 backdrop-blur-md transition-all duration-300 ease-out ${
          scrolled ? "scale-[0.92] shadow-[0_4px_24px_-4px_rgba(232,176,74,0.25)]" : "shadow-[0_2px_16px_-4px_rgba(43,32,25,0.12)]"
        }`}
      >
        {/* Nav links */}
        {navLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="rounded-full px-3 py-1.5 font-inter text-sm text-ink/65 transition-colors duration-200 hover:bg-ink/5 hover:text-ink"
          >
            {label}
          </Link>
        ))}

        {/* Divider */}
        <span className="mx-1 h-4 w-px bg-ink/15" aria-hidden="true" />

        {/* Social icons */}
        <a
          href={site.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group rounded-full p-1.5 text-muted-ink transition-colors duration-200 hover:text-ink"
        >
          <span className="block transition-transform duration-300 group-hover:rotate-12">
            <InstagramIcon />
          </span>
        </a>
        <a
          href={site.googleDrive}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Google Drive"
          className="group rounded-full p-1.5 text-muted-ink transition-colors duration-200 hover:text-ink"
        >
          <span className="block transition-transform duration-300 group-hover:rotate-12">
            <DriveIcon />
          </span>
        </a>
        <a
          href={site.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group rounded-full p-1.5 text-muted-ink transition-colors duration-200 hover:text-ink"
        >
          <span className="block transition-transform duration-300 group-hover:rotate-12">
            <LinkedInIcon />
          </span>
        </a>

        {/* Divider */}
        <span className="mx-1 h-4 w-px bg-ink/15" aria-hidden="true" />

        {/* WhatsApp CTA */}
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-1.5 font-inter text-sm font-medium text-white transition-all duration-300 ease-out hover:brightness-110 active:scale-95"
        >
          <WhatsAppIcon />
          Join on WhatsApp
        </a>
      </nav>
    </header>
  );
}
