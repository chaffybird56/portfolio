"use client";
import Image from "next/image";
import Link from "next/link";

export default function Currently() {
  return (
    <section className="timeline-block">
      <div className="section-line">currently, an Electrical Engineer @:</div>
      <ul className="timeline-list">
        <li className="li-row">
          <span className="li-arrow">↳</span>
          <Link
            href="https://www.brucepower.com/"
            target="_blank"
            className="inline-logo"
          >
            <Image
              src="/logos/bruce-power.png"
              alt="Bruce Power"
              width={120}
              height={24}
              className="logo-wordmark logo-bruce object-contain"
            />
          </Link>
        </li>
        <li className="li-row li-row-detail">
          <span className="li-arrow">↳</span>
          <span className="li-detail">
            rebuilding CANDU reactors in{" "}
            <span className="li-detail-accent">MCR</span> — Major Component
            Replacement of Canada Deuterium Uranium plants: swap the nuclear
            core so Canada&apos;s largest station can keep Ontario&apos;s lights
            on for decades
          </span>
        </li>
      </ul>
    </section>
  );
}
