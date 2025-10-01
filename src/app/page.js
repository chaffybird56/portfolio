// --- page.js (replace file) ---
"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";
import SignaturePng from "@/app/assets/signature.png"; // TODO: ensure an asset exists or replace with text

export default function Home() {
  return (
    <div>
      {/* Intro block */}
      <div className="space-y-3">
        <h1>ahmad ali</h1>
        <p>ee @ <Link href="https://www.mcmaster.ca/" target="_blank">McMaster University</Link>.</p>
        <p>i like signals/control, robotics & electronics, machine learning & optics.</p>
        <p>
          if you have time, <Link href="/writing">read my lore</Link>.
        </p>
      </div>

      {/* Education + What I've been building (placeholder text you’ll edit later) */}
      <div className="mt-6 space-y-2">
        <div className="text-stone-400">
          education: <span className="inline-flex items-center gap-1">
            <Image src="/logos/mcmaster.png" alt="McMaster logo" width={16} height={16} />
            <Link href="https://www.mcmaster.ca/" target="_blank" className="font-medium text-stone-200">
              Electrical Engineering @ McMaster University
            </Link>
          </span>
        </div>

        <div className="text-stone-400">
          what i’ve been building:
          <ul className="list-disc ml-6 mt-1 text-stone-300">
            <li>↳ <em>placeholder</em> — add short highlights here (ship, numbers, results).</li>
            <li>↳ <em>placeholder</em> — another one; mirrors Martin’s cadence.</li>
          </ul>
        </div>
      </div>

      {/* Previously */}
      <Previously />

      {/* Signature moved just above projects, bottom-right */}
      <div className="mt-6 flex justify-end">
        {/* Use your existing signature image or remove this block to use text */}
        <Image src={SignaturePng} alt="signature" width={120} height={40} className="opacity-90" />
      </div>

      {/* Projects grid on home */}
      <ProjectsGrid />
    </div>
  );
}
