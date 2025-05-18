import React from "react";
import Link from "next/link";
import { headers } from 'next/headers'
import Image from "next/image";
import SendWebEnquiry from "@/app/contact/action"

export default async function Page() {

    const respone = await fetch('https://api.npoint.io/a51ff6c4a9eab1feb348', { cache: 'no-store' });

    if (!respone.ok) {
        throw new Error('Failed to fetch Location Data');
    }
    const LocationData = await respone.json();

    const headersList = await headers()
    const userAgent = headersList.get('user-agent')

    return (
        <main className="bg-neutral-900 text-white">
            <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-8">

                {/* Text Content */}
                <div className="flex-1 max-w-2xl mt-8 lg:mt-0 lg:text-left">
                    <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl mb-6">
                        Contact Me.
                    </div>
                    <div className="text-xl sm:text-2xl font-light text-neutral-300">
                        Let’s create something exceptional. I partner with ambitious brands to craft bespoke digital experiences that blend strategic thinking with refined design. Whether you’re looking to elevate your online presence, reimagine your brand, or launch something new — I’m here to help you do it with intention, clarity, and impact. Reach out and let’s make something great together.
                    </div>
                </div>

                {/* Image Content */}
                <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md w-full px-2 sm:px-0">
                    <Image
                        src="/avatar.png"
                        alt="Portrait of Lachy"
                        title="Lachy Schumacher"
                        width={400}
                        height={600}
                        className="rounded-2xl object-cover"
                        priority
                    />
                </div>
            </div>
            {/* Contact and Location Section */}
            <div className="mx-auto max-w-7xl px-6 mt-10 sm:mt-20 lg:mt-30">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Location Information */}
                    <div className="flex flex-col justify-start text-leftspace-y-6">
                        <div className="font-display text-2xl font-semibold">
                            My Locations:
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 text-lg text-neutral-300">
                            {LocationData.Locations.map((Location: { Identifier: string; Location: string; City: string; Email: string; Phone: string; }, index: React.Key | null | undefined) => (

                                <div className="space-y-0" key={index}>
                                    <div className="text-lg font-bold ">{Location.Location}</div>
                                    <div className="font-sm ">{Location.City}</div>
                                    <div><Link className="" href={`mailto:${Location.Email}`}>{Location.Email}</Link></div>
                                    <div><Link className="" href={`tel:${Location.Phone}`}>{Location.Phone}</Link></div>
                                </div>

                            ))}
                        </div>
                    </div>
                    {/* Right Column: Contact Form */}
                    <div className="flex flex-col justify-start text-leftspace-y-6">
                        <div className="font-display text-2xl font-semibold mb-4">
                            Message Me
                        </div>
                        <form action={SendWebEnquiry} className="space-y-6">
                            {/* Name */}
                            <div className="group relative z-0">
                                <input id="name" name="name" type="text" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-2 focus:ring-neutral-100/10 focus:outline-none rounded-xl" placeholder=" " />
                                <label htmlFor="name" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Name</label>
                            </div>
                            {/* Email */}
                            <div className="group relative z-0">
                                <input id="email" name="email" type="email" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-2 focus:ring-neutral-100/10 focus:outline-none rounded-xl" placeholder=" " />
                                <label htmlFor="email" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Email</label>
                            </div>
                            {/* Phone Number */}
                            <div className="group relative z-0">
                                <input id="phone" name="phone" type="tel" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-2 focus:ring-neutral-100/10 focus:outline-none rounded-xl" placeholder=" " />
                                <label htmlFor="phone" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Phone</label>
                            </div>
                            {/* Subject */}
                            <div className="group relative z-0">
                                <input id="subject" name="subject" type="text" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-2 focus:ring-neutral-100/10 focus:outline-none rounded-xl" placeholder=" " />
                                <label htmlFor="subject" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Subject</label>
                            </div>
                            {/* Message */}
                            <div className="group relative z-0">
                                <input id="message" name="message" type="tetextl" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-2 focus:ring-neutral-100/10 focus:outline-none rounded-xl" placeholder=" " />
                                <label htmlFor="message" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-400 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Message</label>
                            </div>
                            {/* Submit Button */}
                            <div>'${userAgent}'</div>

                            <div>
                                <button type="submit" className="w-full py-3 px-6 text-lg font-semibold text-neutral-900 bg-neutral-100 rounded-lg transition-all hover:bg-neutral-200 focus:outline-none focus:ring-4 focus:ring-neutral-300 disabled:bg-neutral-600 disabled:cursor-not-allowed">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
