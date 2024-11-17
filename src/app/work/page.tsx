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
                            Work.
                        </div>
                        <div className="mt-6 text-xl sm:text-2xl font-light">
                        Our work is a testament to our commitment to innovation and excellence. We approach each project with a fresh perspective, blending creativity, strategy, and technology to deliver solutions that make a real impact. Explore our portfolio to see how we turn ideas into high-impact digital experiences that drive results and help brands connect with their audiences in meaningful ways.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
