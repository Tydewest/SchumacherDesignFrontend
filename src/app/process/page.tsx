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
                            Process.
                        </div>
                        <div className="mt-6 text-xl sm:text-2xl font-light">
                        Our process is built on collaboration, transparency, and a relentless focus on delivering results. From concept to execution, we take a structured approach that blends creativity with strategy, ensuring every detail aligns with your goals. By working closely with our clients at every stage, we craft high-impact solutions that not only meet expectations but exceed them, driving lasting success.
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}