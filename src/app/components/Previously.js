"use client";
import Image from "next/image";
import Link from "next/link";

/* No diamonds per item; only the section header line uses a diamond. */
const items = [
  { name: "Alectra", logo: "/logos/alectra.png", url: "https://alectrautilities.com/" },
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
              <Image src={it.logo} alt={`${it.name} logo`} width={18} height={18} className="logo-18 object-contain" />
              <Link href={it.url} target="_blank" className="underline font-medium">{it.name}</Link>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
