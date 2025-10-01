"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import Signature from "./components/Signature"; // new animated component below
import { useState } from "react";

export default function Home() {
  const [sigKey, setSigKey] = useState(0); // re-animate by bumping key

  return (
    <div className="text-fg">
      {/* Education: ◆ + EE + logo + bold University */}
      <div className="edu-line">
        <span className="inline-flex items-center gap-1">
          <span className="text-muted">EE</span>
          <Image src="/logos/mcmaster.png" alt="McMaster logo" width={18} height={18} className="logo-18" />
          <Link href="https://www.mcmaster.ca/" target="_blank" className="font-semibold underline underline-offset-4">
            McMaster University
          </Link>
        </span>
      </div>

      {/* what I've been building — italic header, partial-bold links only */}
      <div className="mt-4">
        <div className="italic text-muted">what i’ve been building:</div>
        <ul className="mt-1 grid gap-1">
          <li className="li-row group">
            <span className="bullet" /><span className="text-muted"> ↳ built a </span>
            <Link href="https://github.com/chaffybird56/PCBSolderRobot" target="_blank" className="underline font-semibold">
              CNC PCB soldering robot
            </Link>
          </li>
          <li className="li-row group">
            <span className="bullet" /><span className="text-muted"> ↳ shipped a </span>
            <Link href="https://github.com/chaffybird56/Home-EnergyMonitor" target="_blank" className="underline font-semibold">
              home energy monitor with dashboards
            </Link>
          </li>
        </ul>
      </div>

      {/* Previously (your current component is perfect) */}
      <Previously />

      {/* Signature section above projects — underline + reanimate button */}
      <div className="mt-6 flex items-center justify-between">
        <div className="h-[1px] grow bg-stone-600/30" />
        <div className="flex items-center gap-3 pl-4">
          <button
            aria-label="replay signature"
            onClick={() => setSigKey(k => k + 1)}
            className="text-muted hover:text-fg"
            title="re-animate"
          >
            ↻
          </button>
          <Signature key={sigKey} width={230} height={72} stroke="rgb(197,120,86)" />
        </div>
      </div>

      {/* Projects */}
      <ProjectsGrid />
    </div>
  );
}
