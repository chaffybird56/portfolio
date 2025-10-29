"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import Signature from "./components/Signature";
import { useState, useEffect } from "react";

export default function Home() {
  const [sigKey, setSigKey] = useState(0);
  const [showRedo, setShowRedo] = useState(false);

  // Reveal the redo button after the signature finishes drawing
  useEffect(() => {
    setShowRedo(false);
    const t = setTimeout(() => setShowRedo(true), 3900 + 250); // drawDurationMs + small pad
    return () => clearTimeout(t);
  }, [sigKey]);

  return (
    <div className="text-fg">
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

    <li className="li-row text-muted">
      <span className="li-arrow">↳</span> 🚗{" "}
      <Link
        href="https://github.com/chaffybird56/morpho-plate"
        target="_blank"
        className="u-anim-static font-semibold"
      >
        Morpho-Plate
      </Link>{" "}
      — detects license plates in video footage and flags watch-list hits live
    </li>

    <li className="li-row text-muted">
      <span className="li-arrow">↳</span> 🧠{" "}
      <Link
        href="https://github.com/chaffybird56/ApolloDQN"
        target="_blank"
        className="u-anim-static font-semibold"
      >
        Neural Autopilot: learns to land
      </Link>{" "}
      — a from-scratch RL agent that teaches itself precision landings (PyTorch)
    </li>

    <li className="li-row text-muted">
    <span className="li-arrow">↳</span> ⚡{" "}
    <Link href="https://github.com/chaffybird56/Wattboard" target="_blank" className="u-anim-static font-semibold">
      Wattboard
    </Link>{" "}
    — turns home power into a live scoreboard so you spot waste early and save before the bill spikes
  </li>

    <li className="li-row text-muted">
      <span className="li-arrow">↳</span> 🤖{" "}
      <Link
        href="https://github.com/chaffybird56/MissionControl-AMR"
        target="_blank"
        className="u-anim-static font-semibold"
      >
        MissionControl-AMR
      </Link>{" "}
      — map, plan, and monitor a fleet in a browser-based “show-floor” demo
    </li>

    <li className="li-row text-muted">
  <span className="li-arrow">↳</span> 📡{" "}
  <Link href="https://github.com/chaffybird56/CAN-RTOS-Sim" target="_blank" className="u-anim-static font-semibold">
    CAN-RTOS Sim
  </Link>{" "}
  — exercises timing and messaging on a crowded CAN network, proving reliability under load before hardware
</li>


  <li className="li-row text-muted">
    <span className="li-arrow">↳</span> 📈{" "}
    <Link href="https://github.com/chaffybird56/cpp-telemetry-fuser" target="_blank" className="u-anim-static font-semibold">
      C++ Telemetry Fuser
    </Link>{" "}
    — unifies sensors and logs into one clean timeline, with quick health signals so issues surface fast
  </li>


  </ul>
</div>

      {/* previously */}
      <Previously />

      {/* Signature (tight top spacing), right-aligned; redo appears under first "A" after draw */}
      <div className="-mt-8 md:-mt-24">
      <div className="-mt-8 md:-mt-24 relative pointer-events-none flex justify-end pr-3">
          {/* Signature svg (color drives from currentColor) */}
          <div className="text-stone-10000 dark:text-stone-1000 translate-x-4 md:translate-x-6">
            <Signature
              key={sigKey}
              width={290}
              height={205}
              strokeWidth={4.8}
              drawDurationMs={4900}
            />
          </div>

          {/* Redo button — position under first A; fades in after draw */}
          <button
              aria-label="replay signature"
              onClick={() => setSigKey(k => k + 1)}
              title="re-animate"
              className={[
                // position (tweak these to nudge it)
                "absolute bottom-[13px] left-[36%] md:left-[50%]",
                // look & transitions
                "text-muted hover:text-fg transition-colors",
                "transition-opacity duration-500",
                // reveal after draw
                showRedo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              ].join(" ")}
            >
              ↻
            </button>
        </div>

        {/* full-width rule */}
        <div className="mt-0 h-px w-full bg-stone-300/60 dark:bg-stone-600/50" />
      </div>

      {/* Single projects heading (same style as site-name) */}
      <h2 className="site-name underline underline-offset-[6px] decoration-stone-400 dark:decoration-stone-600 mt-4 mb-3">
        projects
      </h2>

      {/* Grid (no internal heading) */}
      <ProjectsGrid />
    </div>
  );
}