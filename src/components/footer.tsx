import React from "react";
import Link from "next/link";
import Image from "next/image";

const FOOTER_SECTIONS = [
  {
    title: "Services",
    links: [
      { name: "Web Design", href: "/services" },
      { name: "Web Development", href: "/services" },
      { name: "Graphic Design", href: "/services" },
      { name: "See all →", href: "/services" },
    ],
  },
  {
    title: "Pages",
    links: [
      { name: "About", href: "/about" },
      { name: "My Work", href: "/work" },
      { name: "Contact", href: "/contact" },
      { name: "Vinyl Collection", href: "https://collection.tydewest.com" },
    ],
  },
  {
    title: "Socials",
    links: [
      { name: "Facebook", href: "https://facebook.com/lachyschumacherdesign" },
      { name: "Instagram", href: "https://instagram.com/lachyschumacherdesign" },
      { name: "GitHub", href: "https://github.com/Tydewest" },
      { name: "Dribbble", href: "https://dribbble.com/lachyschumacherdesign" },
    ],
  },
];

export default function Footer() {
  return (
    <footer
      className="w-full px-6 lg:px-8 mx-auto max-w-7xl"
      style={{ marginTop: "6rem", paddingBottom: "5rem" }}
    >
      {/* Top divider */}
      <div className="w-full" style={{ height: "1px", background: "var(--border)" }} />

      <div className="mx-auto max-w-2xl lg:max-w-none grid gap-y-12 gap-x-8 lg:grid-cols-2 pt-12">
        {/* Brand block */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Link href="/about">
              <Image
                src="/avatar.jpg"
                alt="Lachy Schumacher"
                width={32}
                height={32}
                className="rounded-full object-cover"
                priority
              />
            </Link>
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight"
              style={{ color: "var(--foreground)" }}
            >
              Lachy Schumacher<span style={{ color: "var(--accent)" }}>.</span>
            </Link>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
            I acknowledge the traditional owners and custodians of country
            throughout Australia and their continuing connection to land, waters
            and community. I pay my respects to the people, the cultures and the
            elders past &amp; present.
          </p>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {FOOTER_SECTIONS.map(({ title, links }) => (
            <div key={title}>
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-4"
                style={{ color: "var(--foreground)" }}
              >
                {title}
              </div>
              <ul className="text-sm space-y-3">
                {links.map(({ name, href }) => (
                  <li key={name}>
                    <Link
                      href={href}
                      className="transition-colors duration-200"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "var(--foreground-muted)")}
                      {...(href.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="flex flex-wrap items-end justify-between gap-x-6 gap-y-3 text-xs mt-16 pt-6"
        style={{ borderTop: "1px solid var(--border)", color: "var(--foreground-subtle)" }}
      >
        <div>© 2020–2026 Lachy Schumacher Design. All rights reserved.</div>
        <div>
          Designed by{" "}
          <Link
            href="https://tydewest.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            Lachy Schumacher
          </Link>
          . Powered by{" "}
          <Link
            href="https://dynaserve.io"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200"
            style={{ color: "var(--accent)" }}
          >
            Dynaserve
          </Link>
          .
        </div>
      </div>
    </footer>
  );
}