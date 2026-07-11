"use client";

import { BrandMark } from "@/components/ui/BrandMark";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Expertise" },
  { href: "#audit", label: "Website Audit" },
  { href: "#process", label: "Process" },
];

export function Nav() {
  return (
    <nav className="glass-header border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <BrandMark className="text-xl md:text-2xl" />
        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide text-text-secondary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-accent transition-all duration-300"
        >
          Start a Project
        </a>
      </div>
    </nav>
  );
}
