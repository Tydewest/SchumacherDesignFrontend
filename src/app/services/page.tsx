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
                            Services.
                        </div>
                        <div className="mt-6 text-xl sm:text-2xl font-light">
                            Our services are designed to help you navigate the digital landscape with confidence. From strategic design and development to seamless execution, we create solutions that drive engagement and deliver measurable impact. With a focus on innovation and excellence, we empower brands to connect with their audience, optimize performance, and achieve lasting success in an ever-evolving market.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
