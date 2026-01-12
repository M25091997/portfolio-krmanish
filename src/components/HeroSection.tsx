import Link from "next/link";
import Image from "next/image";
import ProfileImage from "./ProfileImage";
import SkillsGrid from "./SkillsGrid";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-violet-50 to-purple-300 dark:from-slate-900 dark:to-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hello, I’m <br />
              <span className="text-violet-500">Manish Kumar</span>
            </h1>

            <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I’m a{" "}
              <span className="font-semibold text-gray-900 dark:text-gray-200">
                Full Stack Web Developer
              </span>{" "}
              with over{" "}
              <span className="font-semibold">4 years of experience</span>{" "}
              building scalable, secure, and high-performance web applications.
            </p>

            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-xl leading-relaxed">
              I specialize in Laravel, React, Next.js, Node.js, and MySQL, with
              strong expertise in backend systems, REST APIs, cloud
              integrations, and modern user interfaces.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3
                 rounded-lg bg-violet-500 text-white font-medium
                 hover:bg-violet-600 transition shadow-lg"
              >
                Say Hello!
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-6 py-3
                 rounded-lg border border-gray-300 dark:border-gray-700
                 text-gray-900 dark:text-gray-200
                 hover:bg-gray-100 dark:hover:bg-slate-800 transition"
              >
                View Projects
              </Link>
            </div>

            <div className="mx-auto lg:mx-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10">
                {/* Experience */}
                <div
                  className="bg-[#F6EBFE] dark:bg-slate-900 text-center rounded-xl shadow-lg hover:-translate-y-1
                     hover:shadow-xl transition-all duration-300"
                >
                  <div className="px-6 py-6">
                    <p className="text-xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-100">
                      4+
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      Years Experience
                    </p>
                  </div>
                </div>

                {/* Projects */}
                <div
                  className="bg-[#F6EBFE] dark:bg-slate-900 text-center rounded-xl shadow-lg hover:-translate-y-1
                     hover:shadow-xl transition-all duration-300"
                >
                  <div className="px-6 py-6">
                    <p className="text-xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-100">
                      20+
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      Projects Completed
                    </p>
                  </div>
                </div>

                {/* Clients (optional third card) */}
                <div
                  className="bg-[#F6EBFE] dark:bg-slate-900 text-center rounded-xl shadow-lg hidden sm:block hover:-translate-y-1
                     hover:shadow-xl transition-all duration-300"
                >
                  <div className="px-6 py-6">
                    <p className="text-xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-100">
                      10+
                    </p>
                    <p className="mt-1 text-sm sm:text-base text-gray-500 dark:text-gray-400">
                      Happy Clients
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Links */}
            <div className="mt-8 flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Follow me:
              </span>

              <a
                href="https://www.linkedin.com/in/krmanish1812"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group p-3 rounded-full bg-white dark:bg-slate-900
               transition-all duration-300
               hover:shadow-[0_0_15px_rgba(37,99,235,0.6)]"
              >
                <FaLinkedinIn
                  className="text-xl text-blue-600
                 group-hover:scale-125 transition-transform"
                />
              </a>

              <a
                href="https://github.com/M25091997"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group p-3 rounded-full bg-white dark:bg-slate-900
               transition-all duration-300
               hover:shadow-[0_0_15px_rgba(0,0,0,0.5)]"
              >
                <FaGithub
                  className="text-xl text-gray-800 dark:text-gray-100
                 group-hover:scale-125 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Image placeholder */}
          <ProfileImage />
        </div>
      </section>

      <section className="bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 py-24">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-violet-500">Skills</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Technologies and tools I use to build scalable, modern, and
              high-performance web applications.
            </p>
          </div>

          {/* Skills Grid */}
          <SkillsGrid />
        </div>
      </section>

      <section
        id="jobs"
        className="bg-gray-50 dark:bg-slate-900 scroll-mt-20 md:scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Work <span className="text-violet-500">Experience</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              My professional journey so far
            </p>
          </div>

          <div className="relative border-l border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
            {/* Item */}
            <div className="ml-6 mb-10">
              <span className="absolute -left-3 w-6 h-6 bg-violet-500 rounded-full"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Full Stack Developer
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Tripledots Software Services • 2023 – Present
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Building scalable Laravel, React.js, Node.js & Next.js
                applications, REST APIs, dashboards, and secure backend systems.
              </p>
            </div>

            {/* Item */}
            <div className="ml-6 mb-10">
              <span className="absolute -left-3 w-6 h-6 bg-violet-500 rounded-full"></span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Web Developer
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Cybertize Technologies Pvt Ltd • 2022 – 2023
              </p>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Developed APIs, payment integrations, admin panels, and database
                architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-6 py-24 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Work Together
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-violet-100">
            I’m open to full-time roles, freelance projects, and exciting
            collaborations. Let’s build something great.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-violet-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Contact Me
            </a>

            <a
              href="/Manish-Kumar-Resume.pdf"
              className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white dark:bg-slate-950 scroll-mt-20 md:scroll-mt-24"
      >
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured <span className="text-violet-500">Projects</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Some of the work I’m proud of
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Project Card */}
            <div className="bg-[#F6EBFE] dark:bg-slate-900 rounded-xl shadow-lg p-6 hover:-translate-y-1 transition">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Multi Vendor E-Commerce
              </h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed">
                Built a{" "}
                <strong>scalable multi-vendor e-commerce platform</strong>{" "}
                featuring
                <strong> vendor onboarding</strong>,{" "}
                <strong>product & order management</strong>,
                <strong> secure payment systems</strong>,{" "}
                <strong>promotions & wallets</strong>,
                <strong> delivery workflows</strong>,{" "}
                <strong>support ticketing</strong>, and{" "}
                <strong>Excel import/export</strong>.
              </p>

              <div className="mt-4 flex gap-3">
                <span className="text-sm bg-violet-100 text-violet-600 px-3 py-1 rounded">
                  Laravel
                </span>
                <span className="text-sm bg-violet-100 text-violet-600 px-3 py-1 rounded">
                  Mysql
                </span>
              </div>
              <div className="mt-6">
                <a
                  href="https://picturefactory.careerfind.in/seller/public/login"
                  target="_blank"
                  className="text-violet-600 font-semibold hover:underline"
                >
                  View Project →
                </a>
              </div>
            </div>

            {/* Duplicate cards as needed */}
          </div>
        </div>
      </section>
    </>
  );
}
