"use client";
import AlectraLogo from "@/app/assets/alectra-logo.png";
import CNLLogo from "@/app/assets/cnl-logo.png";
import DNDLogo from "@/app/assets/dnd-logo.png";

import Headshot from "@/app/assets/headshot.png";
import SignaturePNG from "@/app/assets/signature.png";
import Link from "./components/Link";
import NextLink from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

export default function About() {
  const experiences = [
    {
      title: "Signals & Automation Engineer",
      company: "Alectra Inc.",
      type: "Internship",
      dates: "May 2023 – Aug 2024",
      logo: AlectraLogo,
      details: [
        "Developed image processing-driven OCR tools for single line diagrams to optimize SCADA commissioning.",
        "Automated project tracking with Alteryx and version control.",
        "Managed 20+ MW DER projects across Ontario, ensuring adherence to interconnection standards and grid compliance."
      ]
    },
    {
      title: "Control Systems Analysis Engineer",
      company: "Canadian Nuclear Laboratories",
      type: "Internship",
      dates: "May 2022 – Aug 2022",
      logo: CNLLogo,
      details: [
        "Verified control schematics and single-line diagrams to support robust signals and controls architectures.",
        "Contributed to data-driven feasibility studies for reactor decommissioning, emphasizing operational reliability.",
        "Analyzed feeder/panel specifications and maintained change control logs to ensure system integrity."
      ]
    },
    {
      title: "Digital Systems Integration Engineer",
      company: "Department of National Defence",
      type: "Co-op",
      dates: "May 2021 – Aug 2021",
      logo: DNDLogo,
      details: [
        "Developed custom scripts to automate facility record collection and streamline instrumentation data integration.",
        "Integrated facility data (HVAC, boilers, air handlers) using version control and programming-enhanced digital modeling.",
        "Updated base site plans in AutoCAD to accurately reflect building modifications impacting integrated systems."
      ]
    }
  ];

  const categories = [
    "All",
    "AI/ML",
    "Computer Vision/Image Processing",
    "Front-end/Back-end",
    "Electronics",
    "Embedded Systems",
    "DSP",
    "Control Systems/Robotics",
    "RF & Microwave",
    "Photonics & Optoelectronics"
  ];

  // Placeholder: add your project objects here with keys: id, title, category, skills (array), github (url), thumbnail (imported image)
  const projects = [
    // Example:
    // { id: 1, title: "YOLO PCB QA/QC", category: "Computer Vision/Image Processing", skills: ["Python","YOLO","OpenCV"], github: "https://github.com/...", thumbnail: YourThumbnailImage },
  ];

  const [filter, setFilter] = useState("All");
  const [openExp, setOpenExp] = useState(experiences.map(() => false));

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

      <section id="experience" className="mt-12">
        <h2 className="text-3xl font-semibold mb-8">Experience</h2>
        {experiences.map((exp, idx) => (
          <div key={exp.title} className="mb-10">
            <button
              onClick={() => {
                const copy = [...openExp];
                copy[idx] = !copy[idx];
                setOpenExp(copy);
              }}
              className="flex w-full items-center justify-between"
            >
              <div className="flex items-center gap-4">
                {openExp[idx] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                <Image src={exp.logo} alt={`${exp.company} logo`} width={48} height={48} />
                <div>
                  <h3 className="text-xl font-medium">{exp.title}</h3>
                  <p className="text-sm text-gray-500">{exp.company} &bull; {exp.type}</p>
                </div>
              </div>
              <span className="text-sm text-gray-400">{exp.dates}</span>
            </button>
            {openExp[idx] && (
              <ul className="mt-2 text-sm text-gray-500 list-disc list-inside">
                {exp.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section id="projects" className="mt-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm ${
                filter === cat
                  ? "bg-stone-800 text-white"
                  : "bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(p => filter === "All" || p.category === filter)
            .map(p => (
              <div key={p.id} className="border rounded-lg overflow-hidden shadow-sm">
                <Image
                  src={p.thumbnail}
                  alt={p.title}
                  width={400}
                  height={225}
                  className="object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium mb-2">{p.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {p.skills.map(skill => (
                      <span key={skill} className="text-xs bg-stone-200 dark:bg-stone-700 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm underline"
                    >
                      View source
                    </a>
                  )}
                </div>
              </div>
            ))}
        </div>
      </section>

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
