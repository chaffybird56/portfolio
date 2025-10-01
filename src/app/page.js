"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";

const building = [
  // Make these real links you want (GitHub, blog posts, etc.)
  { text: "built a CNC PCB soldering robot", href: "https://github.com/chaffybird56/PCBSolderRobot" },
  { text: "shipped a home energy monitor with dashboards", href: "https://github.com/chaffybird56/Home-EnergyMonitor" },
];

export default function Home() {
  return (
    <div>
      {/* education line with diamond bullet and bigger logo; bold only university name */}
      <div className="edu-line">
        <span className="inline-flex items-center gap-1 text-stone-400">
          <Image src="/logos/mcmaster.png" alt="McMaster logo" width={18} height={18} className="logo-18" />
          EE <Link href="https://www.mcmaster.ca/" target="_blank" className="font-semibold text-stone-200 underline underline-offset-4">McMaster University</Link>
        </span>
      </div>

      {/* what I've been building (interactive) */}
      <div className="mt-4 text-stone-400">
        what i’ve been building:
        <ul className="mt-1 grid gap-1">
          {building.map((b) => (
            <li key={b.href} className="group relative pl-4">
              <span className="bullet" />
              <Link href={b.href} target="_blank" className="underline text-stone-200">{b.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* previously */}
      <Previously />

      {/* headshot + signature row */}
      <div className="mt-6 flex justify-end items-center gap-4">
        <Image src="/headshot.jpg" alt="Ahmad Ali headshot" width={120} height={120} className="rounded-full object-cover" />
        <Image src="/signature.png" alt="signature" width={200} height={60} className="opacity-90" />
      </div>

      {/* projects */}
      <ProjectsGrid />
    </div>
  );
}
