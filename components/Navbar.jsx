"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href) => {
    setIsMenuOpen(false);

    if (typeof window === "undefined") return;

    const targetId = href.replace("#", "");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.hash = href;
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#050816]/80 backdrop-blur-md border-b border-purple-500/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollToSection("#home")}
          className="text-left"
        >
          <h1 className="text-2xl font-bold">
            Shiva <span className="text-purple-500">Dev</span>
          </h1>
        </button>

        <ul className="hidden md:flex gap-8 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="hover:text-purple-400 transition-colors"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => scrollToSection("#contact")}
            className="hidden md:inline-flex border border-purple-500 px-5 py-2 rounded-full hover:bg-purple-500 transition-all duration-300"
          >
            Hire Me
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-full border border-purple-500/40 bg-[#0f172a] text-white"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden border-t border-purple-500/10 bg-[#050816]/95">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => scrollToSection(item.href)}
                className="rounded-xl border border-purple-500/20 bg-[#0f172a] px-4 py-3 text-left text-sm text-slate-200"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollToSection("#contact")}
              className="rounded-xl bg-purple-600 px-4 py-3 text-left text-sm font-semibold text-white"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}