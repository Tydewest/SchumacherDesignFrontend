'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const [recentProjects, setRecentProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://api.npoint.io/08218aba4cde57fddd58');
        if (!response.ok) {
          throw new Error('Failed to fetch Location Data');
        }
        const data = await response.json();
        setRecentProjects(data.Projects);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <main className="text-white">
      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-8">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl mt-8 lg:mt-0 lg:text-left">
          <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            My Work.
          </h1>
          <div className="text-xl sm:text-2xl font-light text-neutral-300">
              This is a curated portfolio of my work — a selection of bespoke digital experiences, each one crafted from the ground up with care, creativity, and technical precision. These aren&apos;t off-the-shelf websites. They are refined, high-performance platforms designed to elevate brands through seamless design and purposeful code. My process is guided by a commitment to sustainability, ethical practice, and open collaboration. I believe in authenticity over trends, innovation with intention, and impact through simplicity. Every project is an exercise in transparency and excellence — a handcrafted solution tailored to the distinct identity, goals, and audience of each client. No shortcuts. No compromises. Just digital craftsmanship designed to endure.
          </div>
        </div>

        {/* Image Content */}
        <div className="flex-1 max-w-xs sm:max-w-sm lg:max-w-md w-full px-2 sm:px-0">
          <Image
            src="/avatar.png"
            alt="Portrait of Lachy"
            width={400}
            height={600}
            className="rounded-2xl object-cover"
            priority
          />
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="flex bg-neutral-900 py-16">
        <div className="my-auto text-neutral-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block font-display text-2xl font-medium tracking-tight sm:text-4xl text-neutral-100">
            Work in Focus.
          </div>

          <div className="mt-2 mb-8 text-lg sm:text-xl font-light text-neutral-300">
            Below is a curated selection of my latest work — where collaboration, strategy, and design converge to create truly unique digital experiences. Each project reflects my unwavering commitment to sustainability, ethical practices, and innovation, all while staying true to the principles of authenticity, simplicity, and transparency. These tailored solutions are crafted with excellence, ensuring that every brand story is told with purpose, every interaction is designed for engagement, and every outcome delivers impactful, lasting results that resonate with both clients and audiences.
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>Error: {error}</div>
            ) : (
              recentProjects.map((Project: {Link: string, Logo: string, Title: string, Year: string, Industry: string, Description: string }, index: React.Key | null | undefined) => (
                <div className="flex" key={index}>
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-2 ring-neutral-100 bg-neutral-900 sm:p-8">
                    <div>
                      <Link href={Project.Link}>
                        <span className="absolute inset-0 rounded-3xl"></span>
                        <Image
                          src={Project.Logo}
                          width={36}
                          height={36}
                          className="h-16 w-auto"
                          alt="Client Logo"
                        />
                      </Link>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="mt-4 font-display text-2xl font-semibold text-neutral-100">
                        {Project.Title}
                      </div>
                      <div className="flex gap-x-2 text-sm text-neutral-100">
                        <span className="font-semibold">{Project.Year}</span>
                        <span className="text-neutral-500" aria-hidden="true">/</span>
                        <span className="font-regular">{Project.Industry}</span>
                      </div>
                      <div className="text-base text-neutral-500">
                        {Project.Description}
                      </div>
                    </div>
                  </article>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}