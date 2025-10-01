"use client";
import Signature from "./components/Signature";
import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";

const building = [
  { text: "built a CNC PCB soldering robot", href: "https://github.com/chaffybird56/PCBSolderRobot" },
  { text: "shipped a home energy monitor with dashboards", href: "https://github.com/chaffybird56/Home-EnergyMonitor" },
];

export default function Home() {
  return (
    <div>
      {/* education line: ◆ + logo + EE + bold university */}
      <div className="edu-line">
        <span className="inline-flex items-center gap-1">
          <Image src="/logos/mcmaster.png" alt="McMaster logo" width={18} height={18} className="logo-18" />
          EE <Link href="https://www.mcmaster.ca/" target="_blank" className="font-semibold text-stone-200 underline underline-offset-4">McMaster University</Link>
        </span>
      </div>

      {/* what i’ve been building: italic + arrow items */}
      <div className="mt-4">
        <div className="italic text-stone-400">what i’ve been building:</div>
        <ul className="mt-1 grid gap-1">
          {building.map(b => (
            <li key={b.href} className="li-row group">
            <span className="bullet" />
            <span className="li-arrow">↳</span>{" "}
            <Link href={b.href} target="_blank" className="underline text-stone-200">{b.text}</Link>
          </li>          
          ))}
        </ul>
      </div>

      {/* previously */}
      <Previously />

      {/* headshot + signature row (keep roughly same height) */}
      <div className="mt-6 flex justify-end items-center gap-2">
  <Signature width={210} height={70} />
</div>

      <ProjectsGrid />
    </div>
  );
}
