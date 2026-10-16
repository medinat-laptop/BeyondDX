import React from "react";

const LINKS = [
  { label: "About", href: "#about-aicapb" },
  { label: "Program", href: "#program-highlights" },
  { label: "Speakers", href: "#speakers" },
  { label: "Showcase", href: "#exhibits" },
  { label: "Venue", href: "#venue" },
];

export default function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#1a1a64]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        
        {/* Left Side: Horizontal Flex Container for Logos */}
        <a href="#top" className="shrink-0" aria-label="AICAPB home">
          <div className="flex flex-row items-center gap-3">
            <img
              src="/dap-logo-white.png"
              alt="Development Academy of the Philippines"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <img
              src="/brand-aicapb.png"
              alt="AICAPB"
              className="h-10 w-auto object-contain sm:h-12"
            />
            <img
              src="/CSF.png"
              alt="Center for Strategic Futures"
              className="h-10 w-auto object-contain sm:h-12"
            />
          </div>
        </a>

        {/* Navigation Links: Pink Gradient Text Only */}
        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="bg-gradient-to-r from-pink-400 via-rose-400 to-fuchsia-400 bg-clip-text text-sm font-bold text-transparent transition-all duration-300 hover:brightness-125 hover:scale-105"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Register CTA Button */}
        <a
          href="#register"
          className="rounded-full bg-white px-5 py-2 text-sm font-bold text-[#1a1a64] shadow-md transition hover:bg-white/90"
        >
          Register Now
        </a>

      </div>
    </header>
  );
}