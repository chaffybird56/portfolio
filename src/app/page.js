"use client";

import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import Signature from "./components/Signature";
import HeroIntro from "./components/HeroIntro";
import Currently from "./components/Currently";
import Education from "./components/Education";
import BuildingHighlights from "./components/BuildingHighlights";
import { useState, useEffect } from "react";

export default function Home() {
  const [sigKey, setSigKey] = useState(0);
  const [showRedo, setShowRedo] = useState(false);

  useEffect(() => {
    setShowRedo(false);
    const t = setTimeout(() => setShowRedo(true), 3900 + 250);
    return () => clearTimeout(t);
  }, [sigKey]);

  return (
    <div className="text-fg">
      <div className="intro-grid">
        <HeroIntro />
        <div className="intro-timeline">
          <Currently />
          <Education />
          <Previously />
        </div>
      </div>

      <div className="signature-block">
        <div className="relative pointer-events-none flex justify-end pr-3">
          <div className="text-stone-10000 dark:text-stone-1000 translate-x-4 md:translate-x-6">
            <Signature
              key={sigKey}
              width={290}
              height={205}
              strokeWidth={4.8}
              drawDurationMs={4900}
            />
          </div>

          <button
            aria-label="replay signature"
            onClick={() => setSigKey((k) => k + 1)}
            title="re-animate"
            className={[
              "absolute bottom-[13px] left-[36%] md:left-[50%]",
              "text-muted hover:text-fg transition-colors",
              "transition-opacity duration-500",
              showRedo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            ↻
          </button>
        </div>

        <div className="sig-rule mt-2" />
      </div>

      <BuildingHighlights />

      <h2 className="site-name underline underline-offset-[6px] decoration-stone-400 dark:decoration-stone-600 mt-8 mb-3">
        all projects
      </h2>

      <ProjectsGrid />
    </div>
  );
}
