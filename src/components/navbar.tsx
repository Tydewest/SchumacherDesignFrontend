"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: scrolled ? "0.75rem 1.5rem" : "1.25rem 1.5rem",
        background: "rgba(15,15,17,0.75)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/avatar.jpg"
            alt="Lachy Schumacher"
            width={32}
            height={32}
            className="rounded-full object-cover"
            priority
          />
          <span
            className="text-lg font-semibold tracking-tight"
            style={{ color: "var(--foreground)" }}
          >
            Lachy Schumacher
            <span style={{ color: "var(--accent)" }}>.</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="relative text-sm tracking-widest uppercase transition-colors duration-300 group"
                style={{ color: "var(--foreground-muted)", fontSize: "0.7rem" }}
              >
                {label}
                {/* animated underline */}
                <span
                  className="absolute bottom-[-4px] left-0 h-px transition-all duration-300 group-hover:w-full"
                  style={{
                    width: "0px",
                    background: "var(--accent)",
                  }}
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--foreground)" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div
          className="md:hidden mt-3 rounded-xl overflow-hidden"
          style={{ background: "var(--surface-raised)", border: "1px solid var(--border)" }}
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block px-5 py-3 text-sm tracking-wide transition-colors duration-200"
                  style={{ color: "var(--foreground-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--foreground)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}