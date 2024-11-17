import React from "react";
import Link from "next/link";
import Image from "next/image";

export default async function Page() {
  const response = await fetch('https://api.npoint.io/08218aba4cde57fddd58');

  if (!response.ok) {
    throw new Error('Failed to fetch Location Data');
  }

  const RecentProjectData = await response.json();

  return (
    <div>
      {/* Hero Section */}
      <div className="flex items-center justify-start min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start justify-start max-w-7xl mx-auto w-full space-y-8 lg:space-y-0">
          <div className="text-left flex-1 max-w-xl lg:max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-neutral-50 leading-tight">
              High Impact Digital & Design Services Based In Sydney, Melbourne & Brisbane.
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-neutral-300">
              Our team is driven by a commitment to delivering high-impact digital solutions that captivate audiences and drive measurable success. Through a blend of creativity, precision, and an unwavering pursuit of excellence, we transform your ideas into dynamic digital experiences that leave a lasting impact.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="flex bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="my-auto text-neutral-50 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="block font-display text-3xl font-medium tracking-tight sm:text-5xl text-neutral-100">
            Services
          </div>

          {/* Subtext */}
          <div className="mt-4 mb-8 text-xl text-neutral-300">
            We specialize in creating high-impact digital experiences that elevate your brand in an ever-evolving digital landscape. Our approach blends creativity, strategy, and technical precision to bring your vision to life with dynamic solutions that drive engagement and deliver measurable success.
          </div>

          {/* Services Grid */}
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {/* Web Design */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13" />
                  <path d="m8 6 2-2" />
                  <path d="m18 16 2-2" />
                  <path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17" />
                  <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
                  <path d="m15 5 4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Web Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We create visually appealing, user-friendly websites that balance aesthetics and functionality. Our designs ensure seamless navigation, responsiveness, and alignment with your brand.
              </p>
            </div>

            {/* Web Development */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4" />
                  <path d="m6 8-4 4 4 4" />
                  <path d="m14.5 4-5 16" />
                </svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Web Development</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We develop robust, scalable websites that are built to perform. From backend to frontend, we ensure smooth and secure user experiences with solutions that grow with your business.
              </p>
            </div>

            {/* Graphic Design */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
                  <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
                  <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
                  <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold dark:text-white">Graphic Design</h3>
              <p className="text-gray-500 dark:text-gray-400">
                We design graphics that capture your brand&apos;s essence. Whether it&apos;s marketing materials, digital assets, or branding, our designs engage audiences and communicate your message effectively.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="flex bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="my-auto text-neutral-50 max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="block font-display text-3xl font-medium tracking-tight sm:text-5xl text-neutral-100">
            Recent Projects
          </div>

          {/* Subtext */}
          <div className="mt-4 mb-8 text-xl text-neutral-300">
            Explore our most recent projects, where creativity meets strategic innovation. See how we&apos;ve helped clients achieve their vision and engage their audiences meaningfully.
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {RecentProjectData.Projects.map((project: {
              Identifier: string;
              Year: string;
              Industry: string;
              Link: string;
              Logo: string;
              Title: string;
              Body: string;
            }, index: React.Key | null | undefined) => (
              <div className="flex" key={index}>
                <article className="relative flex w-full flex-col rounded-3xl p-6 ring-2 ring-neutral-100 bg-neutral-900 sm:p-8">
                  <div>
                    <Link href={project.Link}>
                      <span className="absolute inset-0 rounded-3xl"></span>
                      <Image
                        src={project.Logo}
                        width={36}
                        height={36}
                        className="h-16 w-auto"
                        alt="Client Logo"
                      />
                    </Link>
                  </div>
                  <div className="mt-6 flex gap-x-2 text-sm text-neutral-100">
                    <span className="font-semibold">{project.Year}</span>
                    <span className="text-neutral-500" aria-hidden="true">/</span>
                    <span className="font-regular">{project.Industry}</span>
                  </div>
                  <div className="mt-4 font-display text-2xl font-semibold text-neutral-100">
                    {project.Title}
                  </div>
                  <div className="mt-2 text-base text-neutral-500">
                    {project.Body}
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
