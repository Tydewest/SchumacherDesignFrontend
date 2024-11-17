'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { href: "/", label: "Home." },
        { href: "/about", label: "About." },
        { href: "/work", label: "Work." },
        { href: "/services", label: "Services." },
        { href: "/process", label: "Process." },
        { href: "/contact", label: "Contact." },
    ];

    return (
        <header>
            <div className="flex justify-between items-center px-4 max-w-full flex-wrap">
                <Link href="/" className="flex space-x-2">
                    <Image 
                        src="https://www.docker.com/wp-content/uploads/2024/01/icon-new.svg" 
                        alt="logo" 
                        width={1000} 
                        height={1000} 
                        className="w-16 h-16 cursor-auto" 
                    />
                </Link>
                <button className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M18 6L6 18" />
                            <path d="M6 6l12 12" />
                        </svg>
                    ) : (
                        // SVG for the "open" state
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M3 6h18" />
                            <path d="M3 12h18" />
                            <path d="M3 18h18" />
                        </svg>
                    )}
                </button>
                <nav className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
                    <ul className="text-base lg:flex lg:justify-between">
                        {navLinks.map((link) => (
                            <li key={link.label} className="lg:px-3 py-2 hover:text-blue-500 font-semibold">
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}