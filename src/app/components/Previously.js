"use client";
import Image from "next/image";
import Link from "next/link";

/* Bigger logos + names underlined at rest (animated on hover) */
const items = [
  { name: "Alectra", logo: "/logos/alectra.png", url: "https://alectrautilities.com/company-overview" },
  { name: "Canadian Nuclear Laboratories", logo: "/logos/cnl.png", url: "https://www.cnl.ca/" },
  { name: "Department of National Defence", logo: "/logos/canada.png", url: "https://www.canada.ca/en/department-national-defence.html" },
];

export default function Previously() {
  return (
    <div className="mt-6">
      <div className="section-line">previously, Engineering Internships @:</div>
      <ul className="mt-2 grid gap-2">
        {items.map((it) => (
          <li key={it.name} className="li-row">
            <span className="li-arrow">↳</span>
            <span className="inline-logo">
              <Image src={it.logo} alt={`${it.name} logo`} width={24} height={24} className="logo-24 object-contain" />
              <Link href={it.url} target="_blank" className="u-anim-static font-medium">{it.name}</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
