"use client";
import Image from "next/image";
import Link from "next/link";

export default function Currently() {
  return (
    <div className="mt-5">
      <div className="section-line">
        currently, a Systems Engineer @{" "}
        <span className="inline-logo">
          <Image
            src="/logos/thales.svg"
            alt="Thales logo"
            width={24}
            height={24}
            className="logo-24 object-contain"
          />
          <Link
            href="https://www.thalesgroup.com/en/countries/europe/canada"
            target="_blank"
            className="u-anim-static font-semibold"
          >
            Thales Canada
          </Link>
        </span>
      </div>
      <ul className="mt-2 grid gap-2">
        <li className="li-row">
          <span className="li-arrow">↳</span>
          <span className="text-sm leading-snug">
            engineering change &amp; integration on Royal Canadian Navy combat
            systems —{" "}
            <span className="font-medium">AJISS</span>{" "}
            <span className="text-muted">(AOPS &amp; JSS in-service support)</span>
          </span>
        </li>
      </ul>
    </div>
  );
}
