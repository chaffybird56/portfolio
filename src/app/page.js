"use client";

import Headshot from "@/app/assets/headshot.png";
import SignaturePNG from "@/app/assets/signature.png";
import Link from "./components/Link";
import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";
import { GalleryHorizontalEnd } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto px-6">
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="relative flex-1 flex items-center">
          <Image
            src={SignaturePNG}
            alt="Ahmad Ali signature"
            priority
            className="w-full h-auto max-w-xs"
          />
        </div>
        <div className="w-48 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
          <Image
            src={Headshot}
            alt="Ahmad Ali Headshot"
            fill
            className="object-cover object-center rounded-full transform scale-80"
          />
        </div>
      </div>
      <ul className="grid gap-1 text-base">
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            ee @ <span className="font-medium">McMaster University</span>
          </span>
        </li>
        <li className="group flex items-start gap-4 pl-4 relative hover:translate-x-1 transition-transform duration-200">
          <div className="absolute left-0 top-[10px] w-[6px] h-[6px] bg-stone-800 dark:bg-stone-200 rotate-45 transform transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" />
          <span className="text-stone-600 dark:text-stone-400">
            i like signals/control, robotics & electronics, machine learning & optics
          </span>
        </li>
      </ul>

      {/* --- Experience Section --- */}
      <section id="experience" className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold">Experience</h2>

        <article className="space-y-1">
          <header className="flex justify-between items-baseline">
            <h3 className="font-medium">Signals &amp; Automation Engineer</h3>
            <span className="text-sm text-gray-400">May 2023 – Aug 2024</span>
          </header>
          <p className="text-sm text-gray-500">Alectra Inc. &bull; Internship</p>
          <ul className="list-disc list-inside text-sm leading-snug text-gray-500">
            <li>Developed image processing-driven OCR tools for single line diagrams to optimize SCADA commissioning.</li>
            <li>Automated project tracking with Alteryx and version control.</li>
            <li>Managed 20+ MW DER projects across Ontario, ensuring adherence to interconnection standards and grid compliance.</li>
          </ul>
        </article>

        <article className="space-y-1">
          <header className="flex justify-between items-baseline">
            <h3 className="font-medium">Control Systems Analysis Engineer</h3>
            <span className="text-sm text-gray-400">May 2022 – Aug 2022</span>
          </header>
          <p className="text-sm text-gray-500">Canadian Nuclear Laboratories &bull; Internship</p>
          <ul className="list-disc list-inside text-sm leading-snug text-gray-500">
            <li>Verified control schematics and single-line diagrams to support robust signals and controls architectures.</li>
            <li>Contributed to data-driven feasibility studies for reactor decommissioning, emphasizing operational reliability.</li>
            <li>Analyzed feeder/panel specifications and maintained change control logs to ensure system integrity.</li>
          </ul>
        </article>

        <article className="space-y-1">
          <header className="flex justify-between items-baseline">
            <h3 className="font-medium">Digital Systems Integration Engineer</h3>
            <span className="text-sm text-gray-400">May 2021 – Aug 2021</span>
          </header>
          <p className="text-sm text-gray-500">Department of National Defence &bull; Co-op</p>
          <ul className="list-disc list-inside text-sm leading-snug text-gray-500">
            <li>Developed custom scripts to automate facility record collection and streamline instrumentation data integration.</li>
            <li>Integrated facility data (HVAC, boilers, air handlers) using version control and programming-enhanced digital modeling.</li>
            <li>Updated base site plans in AutoCAD to accurately reflect building modifications impacting integrated systems.</li>
          </ul>
        </article>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="mt-12 space-y-8">
        <h2 className="text-2xl font-semibold">Projects</h2>
        {/* Add your project entries here */}
      </section>

      <NextLink
        href="/projects"
        className="text-center mt-4 py-4 px-6 rounded-lg border-2 border-stone-400 dark:border-stone-600 hover:bg-stone-800 hover:text-white dark:hover:bg-stone-700 bg-stone-50 dark:bg-stone-800 text-stone-600 dark:text-stone-400 transform transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-md"
      >
        see what i&apos;ve built{" "}
        <GalleryHorizontalEnd className="size-5 inline align-top ml-1 transition-transform group-hover:rotate-3" />
      </NextLink>

      <div className="flex items-center justify-center gap-2 text-stone-600 dark:text-stone-400 mt-4">
        <span>or, </span>
        <span>→</span>
        <Link href="/resume.pdf" className="font-medium">
          view my resume
        </Link>
      </div>
    </div>
  );
}
