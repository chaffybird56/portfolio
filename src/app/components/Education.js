"use client";
import Image from "next/image";
import Link from "next/link";

export default function Education() {
  return (
    <section className="timeline-block">
      <div className="section-line">education:</div>
      <ul className="timeline-list">
        <li className="li-row">
          <span className="li-arrow">↳</span>
          <span className="inline-logo">
            <span className="text-muted text-sm font-medium">EE</span>
            <Image
              src="/logos/mcmaster.png"
              alt="McMaster logo"
              width={24}
              height={24}
              className="logo-24 object-contain"
            />
            <Link
              href="https://www.mcmaster.ca/"
              target="_blank"
              className="u-anim-static font-medium"
            >
              McMaster University
            </Link>
          </span>
        </li>
      </ul>
    </section>
  );
}
