"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const navLinks = [
  { label: "Home", href: "/" },
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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream transition-shadow duration-300 ${
        scrolled ? "border-b border-ink/8 shadow-warm" : ""
      }`}
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Left: nav links */}
        <ul className="flex items-center gap-7">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="font-inter text-sm text-ink/70 transition-colors duration-200 hover:text-ink"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: CTA + icons */}
        <div className="flex items-center gap-4">
          {/* Social icons */}
          <div className="flex items-center gap-3">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-ink transition-colors duration-200 hover:text-ink"
            >
              <InstagramIcon />
            </a>
            <a
              href={site.googleDrive}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Drive"
              className="text-muted-ink transition-colors duration-200 hover:text-ink"
            >
              <DriveIcon />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-ink transition-colors duration-200 hover:text-ink"
            >
              <LinkedInIcon />
            </a>
          </div>

          {/* Join now */}
          <a
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-teal px-5 py-2 font-inter text-sm font-medium text-cream transition-all duration-300 ease-out hover:brightness-105"
          >
            Join now
          </a>
        </div>
      </nav>
    </header>
  );
}
