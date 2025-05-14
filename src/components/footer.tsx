import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { name: 'Web Design', href: '/services' },
      { name: 'Web Development', href: '/services' },
      { name: 'Graphic Design', href: '/services' },
      { name: 'See all →', href: '/services' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'About', href: '/About' },
      { name: 'My Work', href: '/work' },
      { name: 'Contact', href: '/contact' },
      { name: 'Vinyl Collection', href: 'https://collection.tydewest.com' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { name: 'Facebook', href: 'https://facebook.com/lachyschumacherdesign' },
      { name: 'Instagram', href: 'https://instagram.com/lachyschumacherdesign' },
      { name: 'Twitter', href: 'https://github.com/lachyschumacherdesign' },
      { name: 'Dribbble', href: 'https://dribbble.com/lachyschumacherdesign' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-24 sm:mt-32 lg:mt-40 px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl lg:max-w-none grid gap-y-16 gap-x-8 lg:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <Link href="/about">
              <Image
                src="/avatar.jpg"
                alt="Logo"
                width={32}
                height={32}
                className="rounded-full object-cover"
                priority
              />
            </Link>
            <Link href="/" className="text-xl font-bold">
              Lachy Schumacher Design.
            </Link>
          </div>
          <p className="text-sm">
            We acknowledge the traditional owners and custodians of country throughout Australia and acknowledge their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the elders past & present.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerLinks.map(({ title, links }) => (
            <div key={title}>
              <div className="font-display text-sm font-semibold tracking-wider">{title}</div>
              <ul className="mt-4 text-sm space-y-4">
                {links.map(({ name, href }) => (
                  <li key={href}>
                    <Link className="transition hover:text-emerald-500" href={href}>
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t mt-24 pt-12 mb-20 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 text-sm text-neutral-300">
  <div>Copyright © 2020 – 2025 Lachy Schumacher Design. All rights reserved.</div>
  <div>
    Designed by{' '}
    <Link className="text-emerald-500 hover:underline" href="https://tydewest.com" target="_blank" rel="noopener noreferrer">
      Lachy Schumacher Design
    </Link>
    . Powered by{' '}
    <Link className="text-emerald-500 hover:underline" href="https://dynaserve.io" target="_blank" rel="noopener noreferrer">
      Dynaserve
    </Link>
    .
  </div>
</div>
    </footer>
  );
}