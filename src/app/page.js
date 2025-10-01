"use client";
import AlectraLogo from "@/app/assets/alectra-logo.png";
import CNLLogo from "@/app/assets/cnl-logo.png";
import DNDLogo from "@/app/assets/dnd-logo.png";

import Headshot from "@/app/assets/headshot.png";
import SignaturePNG from "@/app/assets/signature.png";
import Link from "./components/Link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import VibeDrawImage from "@/app/assets/projects/vibedraw.gif";
import SlideItInImage from "@/app/assets/projects/slideitin.png";
import MakeItJakesImage from "@/app/assets/projects/makeitjakes.gif";
import TwirlImage from "@/app/assets/projects/twirl.png";
import LayoffEvadersImage from "@/app/assets/projects/layoffevaders.png";
import EcoRewardsImage from "@/app/assets/projects/ecorewards.png";
import LiteNetImage from "@/app/assets/projects/litenet.gif";
import KaleidoscopeImage from "@/app/assets/projects/kaleidoscope.png";
import SensaiImage from "@/app/assets/projects/sensai.png";
import UptoneImage from "@/app/assets/projects/uptone.png";
import CredibilityImage from "@/app/assets/projects/credibility.png";
import BYRYouthImage from "@/app/assets/projects/byryouth.png";
import SACHSAppWebsiteImage from "@/app/assets/projects/sachs-app-website.png";
import SACHSWebsiteImage from "@/app/assets/projects/sachs-website.png";
import TicTacToeImage from "@/app/assets/projects/tictactoe.png";
import EnigmaImage from "@/app/assets/projects/enigma.png";
import COVID19TrackerImage from "@/app/assets/projects/covid19-tracker.png";

export default function Home() {
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
      type: "Internship",
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

  const projects = [
    {
      id: 1,
      title: "Vibe Draw",
      href: "https://tryvibedraw.com",
      thumbnail: VibeDrawImage,
      technologies: ["Python","FastAPI","React","Next.js","Three.js","TypeScript","Google Cloud Platform"],
      github: "https://github.com/martin226/vibe-draw",
      demo: "https://tryvibedraw.com"
    },
    {
      id: 2,
      title: "Slide it In",
      href: "https://justslideitin.com",
      thumbnail: SlideItInImage,
      technologies: ["Go","Next.js","Google Cloud Platform"],
      github: "https://github.com/martin226/slideitin",
      demo: "https://justslideitin.com"
    },
    {
      id: 3,
      title: "Make It Jake's",
      href: "https://jakesresu.me",
      thumbnail: MakeItJakesImage,
      technologies: ["Ruby on Rails","Remix.js","Redis","Google Cloud Platform"],
      github: "https://github.com/martin226/makeitjakes",
      demo: "https://jakesresu.me"
    },
    {
      id: 4,
      title: "Twirl",
      href: "https://dorahacks.io/buidl/21695",
      thumbnail: TwirlImage,
      technologies: ["Python","FastAPI","React","Next.js","Three.js","OpenSCAD","Azure"],
      github: "https://github.com/martin226/twirl",
      demo: "https://www.youtube.com/watch?v=8JtZbi48wHM"
    },
    {
      id: 5,
      title: "Layoff Evaders",
      href: "https://devpost.com/software/layoff-evaders",
      thumbnail: LayoffEvadersImage,
      technologies: ["Unity","C#","Streamlit","Firebase"],
      github: "https://github.com/martin226/layoffevaders",
      demo: "https://www.youtube.com/watch?v=VG-6LGvBcf4"
    },
    {
      id: 6,
      title: "EcoRewards",
      href: "https://devpost.com/software/ecorewards-t0qw26",
      thumbnail: EcoRewardsImage,
      technologies: ["JavaScript","React","Express.js","PostgreSQL","Tailwind CSS","GPT-4o","NFC"],
      github: "https://github.com/jeffrey-zang/ecorewards"
    },
    {
      id: 7,
      title: "LiteNet",
      href: "https://github.com/martin226/litenet",
      thumbnail: LiteNetImage,
      technologies: ["C++"],
      github: "https://github.com/martin226/litenet"
    },
    {
      id: 8,
      title: "Kaleidoscope",
      href: "https://partner.projectboard.world/ysc/project/emotion-and-irony-detection-for-individuals-with-autism-spectrum-disorder-using-deep-neural-networks-dwvwyv",
      thumbnail: KaleidoscopeImage,
      technologies: ["Python","PyTorch","HuggingFace","WebExtensions","Flask"],
      github: "https://github.com/martin226/kaleidoscope",
      demo: "https://partner.projectboard.world/ysc/project/emotion-and-irony-detection-for-individuals-with-autism-spectrum-disorder-using-deep-neural-networks-dwvwyv"
    },
    {
      id: 9,
      title: "Sensai",
      href: "https://github.com/martin226/sensai",
      thumbnail: SensaiImage,
      technologies: ["Python","JavaScript","Vue.js","Nuxt","Flask","OpenCV","MediaPipe","SocketIO","JWT"],
      github: "https://github.com/martin226/sensai",
      demo: "https://devpost.com/software/sensai-nvh940"
    },
    {
      id: 10,
      title: "Uptone",
      href: "https://github.com/martin226/uptone",
      thumbnail: UptoneImage,
      technologies: ["Python","JavaScript","TensorFlow","Keras","Flask","WebExtensions"],
      github: "https://github.com/martin226/uptone",
      demo: "https://devpost.com/software/uptone"
    },
    {
      id: 11,
      title: "Credibility",
      href: "https://github.com/martin226/credibility",
      thumbnail: CredibilityImage,
      technologies: ["Python","JavaScript","React","Next.js","TailwindCSS","Flask","Selenium","GPT-4o"],
      github: "https://github.com/martin226/credibility",
      demo: "https://devpost.com/software/credibility"
    },
    {
      id: 12,
      title: "BYR Youth",
      href: "https://byryouth.ca",
      thumbnail: BYRYouthImage,
      technologies: ["JavaScript","Vue.js","Nuxt","WindiCSS","Imgur API"],
      demo: "https://byryouth.ca"
    },
    {
      id: 13,
      title: "St. Augustine CHS Mobile App Website",
      href: "https://app.staugustinechs.ca",
      thumbnail: SACHSAppWebsiteImage,
      technologies: ["JavaScript","Vue.js","Nuxt","TailwindCSS","Firebase"],
      github: "https://github.com/stau-app-dev/app-website",
      demo: "https://app.staugustinechs.ca"
    },
    {
      id: 14,
      title: "St. Augustine CHS School Website",
      href: "https://staugustinechs.ca",
      thumbnail: SACHSWebsiteImage,
      technologies: ["PHP","JavaScript","HTML","CSS","Bootstrap","MySQL"],
      github: "https://github.com/stau-app-dev/main-website",
      demo: "https://staugustinechs.ca"
    },
    {
      id: 15,
      title: "Tic-Tac-Toe AI Solver",
      href: "https://martin226.github.io/tic-tac-toe-ai/",
      thumbnail: TicTacToeImage,
      technologies: ["JavaScript","HTML","CSS"],
      github: "https://github.com/martin226/tic-tac-toe-ai/",
      demo: "https://martin226.github.io/tic-tac-toe-ai/"
    },
    {
      id: 16,
      title: "Enigma",
      href: "https://martin226.github.io/enigma/",
      thumbnail: EnigmaImage,
      technologies: ["JavaScript","Vue.js","TailwindCSS"],
      github: "https://github.com/martin226/enigma/",
      demo: "https://martin226.github.io/enigma/"
    },
    {
      id: 17,
      title: "COVID-19 Tracker",
      href: "https://martin226.github.io/covid19-tracker/",
      thumbnail: COVID19TrackerImage,
      technologies: ["JavaScript","Vue.js","TailwindCSS"],
      github: "https://github.com/martin226/covid19-tracker/",
      demo: "https://martin226.github.io/covid19-tracker/"
    }
  ];
  
  const [searchTerm, setSearchTerm] = useState("");

  const [filter, setFilter] = useState("All");
  const [openExp, setOpenExp] = useState(experiences.map(() => false));

  return (
<div className="flex flex-col max-w-screen-2xl mx-auto px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between mt-4">
        <div className="relative flex-1 flex items-center">
          <Image
            src={SignaturePNG}
            alt="Ahmad Ali signature"
            priority
            className="w-full h-auto max-w-xs"
          />
        </div>
        <div className="w-40 h-48 relative rounded-full border-2 border-stone-200 dark:border-stone-700 shadow-lg overflow-hidden bg-stone-50 dark:bg-stone-800">
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
      <p className="mt-4 text-base">
        If you have time,&nbsp;
        <Link href="/about-me" className="underline">
          read my lore
        </Link>.
      </p>

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
              className="flex w-full items-center justify-between transition-colors duration-300 ease-in-out hover:text-stone-200"
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
            <div
              className={`grid overflow-hidden transition-[grid-template-rows] duration-500 ease-in-out ${
                openExp[idx] ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <ul className="mt-2 text-sm text-gray-400 list-disc list-inside overflow-hidden">
                {exp.details.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    {p.technologies.map(skill => (
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

