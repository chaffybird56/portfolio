"use client";
import Image from "next/image";
import Link from "next/link";

const items = [
  { name: "Alectra", logo: "/logos/alectra.png", url: "https://alectrautilities.com/company-overview" },
  { name: "Canadian Nuclear Laboratories", logo: "/logos/cnl.png", url: "https://www.cnl.ca/" },
  { name: "Department of National Defence", logo: "/logos/canada.png", url: "https://www.canada.ca/en/department-national-defence.html" },
];

export default function Previously() {
  return (
    <section className="timeline-block">
      <div className="section-line">previously, Engineering Internships @:</div>
      <ul className="timeline-list">
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
    </section>
  );
}
