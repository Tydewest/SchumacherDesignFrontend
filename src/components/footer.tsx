import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="mx-auto max-w-7xl px-6 lg:px-8 mt-24 w-full sm:mt-32 lg:mt-40">
            <div className="mx-auto max-w-2xl lg:max-w-none">
                <div>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
                        {/* Branding Section (Company Name + Additional Text) */}
                        <div className="flex flex-col justify-start space-y-4">
                            <div className="flex items-center space-x-4">
                                <Link href="/" className="flex space-x-2">
                                    <Image
                                        src="https://www.docker.com/wp-content/uploads/2024/01/icon-new.svg"
                                        alt="logo"
                                        width={1000}
                                        height={1000}
                                        className="w-16 h-16 cursor-pointer"
                                    />
                                </Link>
                                {/* <span className="font-bold text-neutral-300 text-lg">Lorem Ipsum</span> */}
                            </div>
                            <div className="text-sm">We acknowledge the traditional owners and custodians of country throughout Australia and acknowledge their continuing connection to land, waters and community. We pay our respects to the people, the cultures and the elders past & present.</div>
                        </div>

                        {/* Footer Links Section */}
                        <div>
                            <ul className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                                {/* Work Section */}
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">Product</div>
                                    <ul className="mt-4 text-sm">
                                        <li className="mt-4"><Link className="transition" href="/work/family-fund">A1</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work/unseal">B2</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work/phobia">C3</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work">See all <span aria-hidden="true">→</span></Link></li>
                                    </ul>
                                </li>

                                {/* Work Section */}
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">Company</div>
                                    <ul className="mt-4 text-sm">
                                        <li className="mt-4"><Link className="transition" href="/work/family-fund">A</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work/unseal">B</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work/phobia">C</Link></li>
                                        <li className="mt-4"><Link className="transition" href="/work">See all <span aria-hidden="true">→</span></Link></li>
                                    </ul>
                                </li>

                                {/* Connect Section */}
                                <li>
                                    <div className="font-display text-sm font-semibold tracking-wider">Legal</div>
                                    <ul className="mt-4 text-sm">
                                        <li className="mt-4"><Link className="transition" href="https://facebook.com">Facebook</Link></li>
                                        <li className="mt-4"><Link className="transition" href="https://instagram.com">Instagram</Link></li>
                                        <li className="mt-4"><Link className="transition" href="https://github.com">LinkedIn</Link></li>
                                        <li className="mt-4"><Link className="transition" href="https://dribbble.com">Dribbble</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Bottom Section */}
                    <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t pt-12">
                        {/* Copyright Section */}
                        <div className="text-sm text-neutral-500">Copyright &copy; 2020 &#45; 2024 Schumcher Design. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
