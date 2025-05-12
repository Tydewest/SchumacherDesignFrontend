'use client'

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PencilRuler, CodeXml, Palette, ChartNoAxesCombined, MousePointerClick, SwatchBook } from "lucide-react";

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
          <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            Hey,  I&apos;m Lachy.
          </div>
          <div className="text-xl sm:text-2xl font-light text-neutral-300">
            I&apos;m a designer and developer based between Sydney & Brisbane, creating high-impact websites where form meets function. I build blazing-fast, beautifully responsive digital experiences from the ground up — no off-the-shelf templates, just handcrafted design and clean, purposeful code tailored to each client&apos;s unique vision. Whether you&apos;re launching a bold new brand or refining a digital product, I bring the creative eye of a designer and the technical precision of a developer to every project.
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

      {/* Services Section */}
      <div className="flex bg-neutral-900 py-16">
        <div className="my-auto text-neutral-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block font-display text-2xl font-medium tracking-tight sm:text-4xl text-neutral-100">
            Services.
          </div>

          <div className="mt-2 mb-8 text-lg sm:text-xl font-light text-neutral-300">
            Explore our comprehensive suite of services designed to empower your brand in the digital landscape. Whether you&apos;re looking for eye-catching web design, robust web development, or a complete brand overhaul, we provide innovative solutions that enhance user experience, drive traffic, and elevate your online presence. With expertise in SEO, UI/UX design, and graphic design, we ensure your brand stands out and thrives in a competitive digital world.
          </div>

          <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <PencilRuler strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Web Design.</div>
              <p className="text-gray-500 dark:text-gray-400">
                We craft visually appealing, user-centric websites that prioritize aesthetic design, seamless navigation, and functionality. Our designs are responsive, ensuring a consistent and engaging experience across all devices. Whether it&apos;s a simple landing page or a complex web application, we create designs that capture the essence of your brand.
              </p>
            </div>

            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <CodeXml strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Web Development.</div>
              <p className="text-gray-500 dark:text-gray-400">
                From front-end to back-end, we build scalable, secure, and high-performing websites that meet your business needs. Our development process involves the latest technologies to ensure fast load times, smooth functionality, and user-friendly interfaces. We ensure that your website grows with your business.
              </p>
            </div>

            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Palette strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Graphic Design.</div>
              <p className="text-gray-500 dark:text-gray-400">
                We specialize in creating stunning visual content that communicates your message effectively. From logos to brochures, banners, and digital marketing materials, our designs are tailored to capture attention and elevate your brand&apos;s visual identity, making a lasting impression on your audience.
              </p>
            </div>

            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <ChartNoAxesCombined strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Search Engine Optimisation (SEO).</div>
              <p className="text-gray-500 dark:text-gray-400">
                We optimize your website for search engines, ensuring it ranks higher on search result pages. Our SEO strategy involves comprehensive keyword research, on-page optimization, and high-quality backlink building. We aim to drive organic traffic and improve visibility, helping you attract more customers.
              </p>
            </div>

            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <MousePointerClick strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">UI/UX Design.</div>
              <p className="text-gray-500 dark:text-gray-400">
                We design intuitive user interfaces that enhance user experience and engagement. Our approach focuses on making digital experiences simple, accessible, and enjoyable. By understanding user behavior, we create responsive designs that work seamlessly on any device, offering both functionality and satisfaction.
              </p>
            </div>

            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <SwatchBook strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Brand Identity & Development.</div>
              <p className="text-gray-500 dark:text-gray-400">
                We help shape your brand&apos;s personality and story. From logo design to color palettes, typography & brand guidelines, we create a cohesive visual identity that resonates with your audience. We work with you to ensure that your brand stands out, communicates your values & builds a strong connection with customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="flex bg-neutral-900 py-16">
        <div className="my-auto text-neutral-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="block font-display text-2xl font-medium tracking-tight sm:text-4xl text-neutral-100">
            Recent Projects.
          </div>

          <div className="mt-2 mb-8 text-lg sm:text-xl font-light text-neutral-300">
            Here&apos;s a curated selection of my latest work — rooted in collaboration, guided by strategy, and driven by design. These recent projects reflect my passion for crafting tailored, high-impact digital experiences. See how I assist brands tell their story, elevate engagement, and drive real results.
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