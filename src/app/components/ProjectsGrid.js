"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/app/data/projects";

function Thumb({ src, alt }) {
  if (src?.endsWith(".mp4")) {
    return <video className="card-thumb" src={src} autoPlay muted loop playsInline />;
  }
  return <Image src={src} alt={alt} width={1200} height={675} className="card-thumb" />;
}

export default function ProjectsGrid() {
  return (
    <section className="mt-10">
      <h2 className="mb-4">projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Link key={p.slug} href={p.href} target="_blank" className="card">
            <Thumb src={p.thumb} alt={p.title} />
            <div className="card-body">
              <div className="card-title">{p.title}</div>
              <div className="card-sub mt-1">{p.blurb}</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags?.map((t) => (
                  <span key={t} className="badge">{t}</span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
