"use client";
import Image from "next/image";
import Link from "next/link";

export default function Currently() {
  return (
    <section className="timeline-block">
      <div className="section-line">currently, a Systems Engineer @:</div>
      <ul className="timeline-list">
        <li className="li-row">
          <span className="li-arrow">↳</span>
          <span className="inline-logo">
            <Image
              src="/logos/thales.png"
              alt="Thales logo"
              width={88}
              height={24}
              className="logo-wordmark logo-thales object-contain"
            />
            <Link
              href="https://www.thalesgroup.com/en/countries/europe/canada"
              target="_blank"
              className="u-anim-static font-medium"
            >
              Canada
            </Link>
          </span>
        </li>
        <li className="li-row li-row-detail">
          <span className="li-arrow">↳</span>
          <span className="li-detail">
            EC &amp; C4ISR integration on Royal Canadian Navy ships —{" "}
            <span className="li-detail-accent">C</span>ommand,{" "}
            <span className="li-detail-accent">C</span>ontrol,{" "}
            <span className="li-detail-accent">C</span>ommunications,{" "}
            <span className="li-detail-accent">C</span>omputers,{" "}
            <span className="li-detail-accent">I</span>ntelligence,{" "}
            <span className="li-detail-accent">S</span>urveillance &amp;{" "}
            <span className="li-detail-accent">R</span>econnaissance
          </span>
        </li>
      </ul>
    </section>
  );
}
