import React from "react";
import Link from "next/link";
import SendWebEnquiry from "@/app/contact/action"

export default async function Page() {

    const respone = await fetch ('https://api.npoint.io/a51ff6c4a9eab1feb348', { cache: 'no-store' });

    if (!respone.ok) {
        throw new Error('Failed to fetch Location Data');
    }
    const LocationData = await respone.json();

    return (
        <main className="w-full flex-auto">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center py-24 px-6 sm:py-32 lg:py-40">
                <div className="absolute inset-0"></div> {/* Overlay */}
                <div className="relative max-w-7xl mx-auto text-left">
                    <div className="max-w-2xl">
                        <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                            Contact.
                        </div>
                        <div className="mt-6 text-xl sm:text-2xl font-light ">
                        Whether you have a question, need support, or want to discuss a potential project, our team is here to help. Reach out to us today, and let&apos;s explore how we can bring your ideas to life with exceptional digital design. We&apos;re just a message or a call away, ready to assist you with your next big thing.
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact and Location Section */}
            <div className="mx-auto max-w-7xl px-6 mt-18 sm:mt-28 lg:mt-38">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Left Column: Location Information */}
                    <div className="flex flex-col justify-start text-leftspace-y-6">
                        <div className="font-display text-2xl font-semibold">
                            Our Offices
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4 text-lg text-neutral-300">
                        {LocationData.Locations.map((Location: { Identifier: string; Name: string; City: string; Email: string; Phone: string; }, index: React.Key | null | undefined) => (

                            <div className="space-y-0" key={index}>
                                <div className="text-lg font-bold ">{Location.Name}</div>
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
                            Message Us
                        </div>
                        <form action={SendWebEnquiry} className="space-y-6">
                            {/* Name */}
                            <div className="group relative z-0">
                                <input id="name" name="name" type="text" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-4 focus:ring-neutral-100/10 rounded-xl" placeholder=" "/>
                                <label htmlFor="name" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Name</label>
                            </div>
                            {/* Email */}
                            <div className="group relative z-0">
                                <input id="email" name="email" type="email" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-4 focus:ring-neutral-100/10 rounded-xl" placeholder=" "/>
                                <label htmlFor="email" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Email</label>
                            </div>
                            {/* Phone Number */}
                            <div className="group relative z-0">
                                <input id="phone" name="phone" type="tel" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-4 focus:ring-neutral-100/10 rounded-xl" placeholder=" "/>
                                <label htmlFor="phone" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Phone</label>
                            </div>
                            {/* Subject */}
                            <div className="group relative z-0">
                                <input id="subject" name="subject" type="text" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-4 focus:ring-neutral-100/10 rounded-xl" placeholder=" "/>
                                <label htmlFor="subject" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Subject</label>
                            </div>
                            {/* Message */}
                            <div className="group relative z-0">
                                <input id="message" name="message" type="tetextl" required={true} className="peer block w-full px-6 py-4 text-base text-neutral-100 bg-transparent border border-neutral-700 focus:border-neutral-100 focus:ring-4 focus:ring-neutral-100/10 rounded-xl" placeholder=" "/>
                                <label htmlFor="message" className="absolute left-6 top-1/2 -mt-3 origin-left text-base text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-neutral-100 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:text-neutral-100">Message</label>
                            </div>
                            {/* Submit Button */}
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
