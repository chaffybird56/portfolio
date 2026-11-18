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
            Contributing to a once-in-a-generation project extending the life of
            North America&apos;s largest nuclear power generating station.
          </span>
        </li>
        <li className="li-row li-row-detail">
          <span className="li-arrow">↳</span>
          <span className="li-detail">
            Working across Instrumentation &amp; Control (
            <span className="li-detail-accent">I&amp;C</span>), including Reactor
            Cooling PLC Systems and Moderator Heat Transport.
          </span>
        </li>
        <li className="li-row li-row-detail">
          <span className="li-arrow">↳</span>
          <span className="li-detail">
            Supporting CANDU reactor refurbishment through Bruce Power&apos;s
            Major Component Replacement (
            <span className="li-detail-accent">MCR</span>).
          </span>
        </li>
      </ul>
    </section>
  );
}
