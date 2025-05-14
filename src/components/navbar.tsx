"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Home, CircleUser, Briefcase, PencilRuler, Mail } from "lucide-react";

const navigationLinks = [
  { link: "/", label: "Home.", icon: <Home size={20} /> },
  { link: "/about", label: "About.", icon: <CircleUser size={20} /> },
  { link: "/work", label: "Work.", icon: <Briefcase size={20} /> },
  { link: "/services", label: "Services.", icon: <PencilRuler size={20} /> },
  { link: "/contact", label: "Contact.", icon: <Mail size={20} /> },
  // { link: "/blog", label: "Blog.", icon: <Newspaper size={20} />}
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="p-4 bg-neutral-900 flex justify-between items-center relative">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-3">
        <div aria-label="About">
          <Image
            src="/avatar.jpg"
            alt="Lachy Schumacher avatar"
            width={32}
            height={32}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="text-xl font-bold" aria-label="Home">
          Lachy Schumacher Design.
        </div>
      </Link>

      {/* Menu button */}
      <div className="relative">
        <button
          onClick={toggleMenu}
          className="p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute bg-neutral-900 right-0 top-full mt-2 w-48 shadow-2xl rounded-lg p-2 z-50">
            <ul className="space-y-2">
              {navigationLinks.map((links) => (
                <li key={links.link}>
                  <Link
                    href={links.link}
                    className='p-2 flex items-center space-x-2 rounded-lg text-white hover:bg-neutral-800'
                    onClick={() => setIsOpen(false)}
                  >
                    {links.icon}
                    <span>{links.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}