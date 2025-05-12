import React from "react";
import Image from "next/image";
import {
  Leaf,
  Shield,
  Users,
  CheckCircle,
  Rocket,
  Star,
  Circle,
  Eye,
  Trophy,
} from "lucide-react";

export default function Page() {
  return (
    <main className="bg-neutral-900 text-white">
      {/* About Me Section */}
      <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 gap-8">
        {/* Text Content */}
        <div className="flex-1 max-w-2xl mt-8 lg:mt-0 lg:text-left">
          <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl mb-6">
            About Me.
          </div>
          <div className="text-xl sm:text-2xl font-light text-neutral-300">
            Hi, I’m Lachy — the designer, developer, and creative force behind
            Lachy Schumacher Design. What started as a side project to channel
            my love for clean, impactful design has grown into a boutique studio
            where I collaborate with individuals, businesses, and brands to help
            them stand out online through smart, modern design and tailored
            digital experiences. I believe great design doesn’t just look good —
            it tells a story, solves a problem, and leaves a lasting impression.
            That’s why I work closely with every client, getting to know your
            brand inside and out to create something that truly feels like you —
            just elevated. Based between Sydney and Brisbane, I work with
            clients across Australia and beyond. Whether it’s a fresh new
            website, a full rebrand, or refining your digital presence, I bring
            both creative thinking and technical expertise to every project.
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

      {/* Core Principles Section */}
      <div className="bg-neutral-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-neutral-50">
          {/* Section Title */}
          <div className="block font-display text-2xl font-medium tracking-tight sm:text-4xl text-neutral-100">
            Core Principles.
          </div>

          {/* Subtext */}
          <div className="mt-2 mb-8 text-lg sm:text-xl font-light text-neutral-300">
            Explore our comprehensive suite of services designed to empower your
            brand in the digital landscape. Whether you’re looking for
            eye-catching web design, robust web development, or a complete brand
            overhaul, we provide innovative solutions that enhance user
            experience, drive traffic, and elevate your online presence. With
            expertise in SEO, UI/UX design, and graphic design, we ensure your
            brand stands out and thrives in a competitive digital world.
          </div>

          {/* Principles Grid */}
          <div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {/* Sustainability */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Leaf strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Sustainability
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We prioritize eco-conscious design, ensuring our work minimizes
                environmental impact while contributing positively to the world.
              </p>
            </div>

            {/* Ethical */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Shield strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Ethical</div>
              <p className="text-gray-500 dark:text-gray-400">
                Our designs are guided by integrity, fairness, and social
                responsibility, always reflecting transparency and respect for
                all stakeholders.
              </p>
            </div>

            {/* Collaborative */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Users strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Collaborative
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We believe in working closely with our clients, fostering
                partnerships that ensure your vision is brought to life with our
                expertise and insight.
              </p>
            </div>

            {/* Authentic */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <CheckCircle strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Authentic
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We create designs that are true to your brand’s essence,
                capturing your unique identity and telling your story in a
                genuine way.
              </p>
            </div>

            {/* Innovative */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Rocket strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Innovative
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                Constantly exploring new ideas and technologies, we deliver
                creative, forward-thinking solutions that push boundaries and
                set trends.
              </p>
            </div>

            {/* Impactful */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Star strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">Impactful</div>
              <p className="text-gray-500 dark:text-gray-400">
                Our designs are crafted not only for aesthetics but to make a
                real difference — enhancing user experience and driving
                meaningful results for your business.
              </p>
            </div>

            {/* Simplistic */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Circle strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Simplistic
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We embrace the power of simplicity, delivering clear, functional
                designs that cut through the clutter and communicate with
                impact.
              </p>
            </div>

            {/* Transparent */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Eye strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Transparent
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We maintain open communication throughout the design process,
                ensuring you are fully informed and involved at every step.
              </p>
            </div>

            {/* Excellence */}
            <div>
              <div className="flex justify-start items-center w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <Trophy strokeWidth={1.5} />
              </div>
              <div className="text-xl font-bold dark:text-white">
                Excellence
              </div>
              <p className="text-gray-500 dark:text-gray-400">
                We are committed to the highest standards in design, always
                striving for excellence in every project we undertake.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}