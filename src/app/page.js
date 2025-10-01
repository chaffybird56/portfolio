"use client";

import Image from "next/image";
import Link from "next/link";
import Previously from "./components/Previously";
import ProjectsGrid from "./components/ProjectsGrid";

export default function Home() {
  return (
    <div>
      {/* Education + “what I’ve been building” */}
      <div className="space-y-3">
        <div className="text-stone-400">
          <span className="inline-flex items-center gap-1">
            <Image src="/logos/mcmaster.png" alt="McMaster logo" width={16} height={16} />
            <Link href="https://www.mcmaster.ca/" target="_blank" className="font-medium text-stone-200">
              ee McMaster University
            </Link>
          </span>
        </div>

        <div className="text-stone-400">
          what i’ve been building:
          <ul className="list-none ml-0 mt-1 text-stone-300">
            <li>↳ <em>placeholder</em> — add short highlights here (ship, numbers, results).</li>
            <li>↳ <em>placeholder</em> — another one; mirrors Martin’s cadence.</li>
          </ul>
        </div>
      </div>

      {/* Previously */}
      <Previously />

      {/* Signature (bigger) */}
      <div className="mt-6 flex justify-end">
        <Image src="/signature.png" alt="signature" width={200} height={60} className="opacity-90" />
      </div>

      {/* Projects grid on home */}
      <ProjectsGrid />
    </div>
  );
}
