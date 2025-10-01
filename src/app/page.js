"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import Signature from "./components/Signature";
import { useState } from "react";

export default function Home() {
  const [sigKey, setSigKey] = useState(0);

  return (
    <div className="text-fg">
      {/* Education — diamond bullet; EE + logo + bold University (spacing like Martin) */}
      <div className="section-line">
        <span className="inline-logo">
          <span className="text-muted">EE</span>
          <Image src="/logos/mcmaster.png" alt="McMaster logo" width={18} height={18} className="logo-18 object-contain" />
          <Link href="https://www.mcmaster.ca/" target="_blank" className="font-semibold">
            McMaster University
          </Link>
        </span>
      </div>

      {/* what i’ve been building — diamond on header, arrow inside; only links bold */}
      <div className="mt-4">
        <div className="section-line italic">what i’ve been building:</div>
        <ul className="mt-2 grid gap-2">
          <li className="li-row">
            <span className="li-arrow">↳</span>
            <span className="text-muted">built a </span>
            <Link href="https://github.com/chaffybird56/PCBSolderRobot" target="_blank" className="underline font-semibold">
              CNC PCB soldering robot
            </Link>
          </li>
          <li className="li-row">
            <span className="li-arrow">↳</span>
            <span className="text-muted">shipped a </span>
            <Link href="https://github.com/chaffybird56/Home-EnergyMonitor" target="_blank" className="underline font-semibold">
              home energy monitor with dashboards
            </Link>
          </li>
        </ul>
      </div>

      {/* Previously */}
      <Previously />

      {/* Signature block ABOVE projects — rule runs full content width under signature */}
      <div className="mt-8">
        <div className="flex items-center gap-3">
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
        <div className="mt-3 h-px bg-border w-full" />
      </div>

      {/* Projects */}
      <ProjectsGrid />
    </div>
  );
}
