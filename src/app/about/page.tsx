import React from "react";
import Image from "next/image";

export default function Page() {
  return (
    <main className="bg-neutral-900 text-white">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-8">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl mt-8 lg:mt-0 lg:text-left">
          <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            About Me.
          </div>
          <div className="text-xl sm:text-2xl font-light text-neutral-300">
            At Schumacher Design, we believe that the heart of great digital experiences lies in the connection between creativity and technology. Our team of passionate designers, developers, and strategists work collaboratively to deliver solutions that not only meet your business needs but also create impactful experiences that inspire and engage your audience. We&apos;re committed to making your brand stand out in the ever-evolving digital landscape.
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md w-full px-2 sm:px-0">
          <Image
            src="/avatar.png"
            alt="Portrait of ethical investor"
            width={400}
            height={600}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
}