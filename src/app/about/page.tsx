import React from "react";

export default async function Page() {

    return (
        <main className="w-full flex-auto">
            {/* Hero Section */}
            <div className="relative bg-cover bg-center py-24 px-6 sm:py-32 lg:py-40">
                <div className="absolute inset-0"></div> {/* Overlay */}
                <div className="relative max-w-7xl mx-auto text-left">
                    <div className="max-w-2xl">
                        <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                            About.
                        </div>
                        <div className="mt-6 text-xl sm:text-2xl font-light">
                            At Schumacher Design, we believe that the heart of great digital experiences lies in the connection between creativity and technology. Our team of passionate designers, developers, and strategists work collaboratively to deliver solutions that not only meet your business needs but also create impactful experiences that inspire and engage your audience. We&apos;re committed to making your brand stand out in the ever-evolving digital landscape.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
