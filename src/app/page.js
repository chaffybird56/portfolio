"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import { useState } from "react";

export default function Home() {
  const [sigKey, setSigKey] = useState(0);

  return (
    <div>
      {/* Education */}
      <div className="section-line">
        <span className="inline-logo">
          <span className="text-muted">EE</span>
          <Image
            src="/logos/mcmaster.png"
            alt="McMaster logo"
            width={18}
            height={18}
            className="logo-18 object-contain"
          />
          <Link
            href="https://www.mcmaster.ca/"
            target="_blank"
            className="u-anim-static font-semibold"
          >
            McMaster University
          </Link>
        </span>
      </div>

      {/* what i’ve been building */}
      <div className="mt-4">
        <div className="section-line italic">what i’ve been building:</div>
        <ul className="mt-2 grid gap-2">
          {/* 1) Capstone (unchanged: trophy + celebrate around "1st place") */}
          <li className="li-row text-muted">
            <span className="li-arrow">↳</span>
            <Link
              href="https://github.com/chaffybird56/PCBSolderRobot"
              target="_blank"
              className="u-anim-static font-semibold"
            >
              capstone project
            </Link>{" "}
            that won <span className="text-fg">🏆 1st place 🎉</span> at the grand expo
          </li>

          {/* 2) Apollo — emoji right after arrow */}
          <li className="li-row text-muted">
            <span className="li-arrow">↳</span> 🚀{" "}
            taught a from-scratch{" "}
            <Link
              href="https://github.com/chaffybird56/ApolloDQN"
              target="_blank"
              className="u-anim-static font-semibold"
            >
              DQN landing agent
            </Link>{" "}
            to fly and land a spaceship in PyTorch
          </li>

          {/* 3) Foresight — emoji right after arrow */}
          <li className="li-row text-muted">
            <span className="li-arrow">↳</span> 🔎{" "}
            created{" "}
            <Link
              href="https://github.com/chaffybird56/Foresight"
              target="_blank"
              className="u-anim-static font-semibold"
            >
              Foresight
            </Link>{" "}
            — helps teams keep machines healthy: watches key signals, spots odd behavior, and gives a heads-up on likely failures
          </li>

          {/* 4) Energy Monitor — emoji right after arrow */}
          <li className="li-row text-muted">
            <span className="li-arrow">↳</span> ⚡{" "}
            developed an{" "}
            <Link
              href="https://github.com/chaffybird56/Home-EnergyMonitor"
              target="_blank"
              className="u-anim-static font-semibold"
            >
              Energy Monitor
            </Link>{" "}
            — a clear way to see your home’s power in real time, follow daily patterns, and get nudges when something’s using more than it should
          </li>
        </ul>
      </div>

      {/* previously */}
      <Previously />

      {/* Signature block is intentionally commented out for now
      <div className="mt-8">
        <div className="flex items-center gap-3">
          <button
            aria-label="replay signature"
            onClick={() => setSigKey((k) => k + 1)}
            className="text-muted hover:text-fg"
            title="re-animate"
          >
            ↻
          </button>
          <Signature key={sigKey} width={230} height={72} stroke="rgb(197,120,86)" />
        </div>
        <div className="mt-3 sig-rule" />
      </div>
      */}

      {/* projects */}
      <ProjectsGrid />
    </div>
  );
}
