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
            that won <span className="text-fg">🏆 1st place 🎉</span> at the grand
            expo
          </li>

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

          <li className="li-row text-muted">
            <span className="li-arrow">↳</span> 🚗{" "}
            built{" "}
            <Link href="https://github.com/chaffybird56/morpho-plate" target="_blank" className="u-anim-static font-semibold">
              Morpho-Plate
            </Link>{" "}
            — detects license plates in video footage and flags watch-list hits live
          </li>

          {/*}
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
            — helps teams keep machines healthy: watches key signals, spots odd
            behavior, and gives a heads-up on likely failures
          </li>*/}

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
            — a clear way to see your home’s power in real time, follow daily
            patterns, and get nudges when something’s using more than it should
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