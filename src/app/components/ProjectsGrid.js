"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

function Thumb({ src, alt }) {
  if (src?.endsWith(".mp4"))
    return <video className="card-thumb" src={src} autoPlay muted loop playsInline />;
  return <Image src={src} alt={alt} width={1200} height={675} className="card-thumb" />;
}

// Copper = rgb(197,120,86)
function Octocat() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      className="opacity-90 text-[rgb(197,120,86)]"   // <-- copper via currentColor
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.57v-2.2c-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.74.08-.73.08-.73 1.22.09 1.86 1.25 1.86 1.25 1.08 1.86 2.82 1.32 3.5 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.47-1.34-5.47-5.97 0-1.32.47-2.4 1.24-3.25-.12-.3-.54-1.52.12-3.16 0 0 1.01-.32 3.3 1.24a11.5 11.5 0 016 0c2.28-1.56 3.29-1.24 3.29-1.24.67 1.64.25 2.86.12 3.16.77.85 1.23 1.93 1.23 3.25 0 4.64-2.81 5.67-5.49 5.97.43.37.81 1.1.81 2.23v3.3c0 .31.22.69.83.57A12 12 0 0012 .5z"/>
    </svg>
  );
}

export default function ProjectsGrid() {
  return (
    <section className="mt-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Link key={p.slug} href={p.href} target="_blank" className="card group">
            {/* copper repo icon at bottom-right */}
            <div className="absolute right-3 bottom-3 rounded-full bg-black/20 px-2 py-1 border border-stone-700/60">
              <Octocat />
            </div>

            <Thumb src={p.thumb} alt={p.title} />
            <div className="card-body">
              <div className="card-title">{p.title}</div>
              <div className="card-sub mt-1">{p.blurb}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map((t) => <span key={t} className="badge">{t}</span>)}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}