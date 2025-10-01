// --- src/app/components/Previously.js (new) ---
"use client";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    role: "Engineering Internships @",
    name: "Alectra",
    logo: "/logos/alectra.png",       // TODO: put 24x24 logo in /public/logos
    url: "https://alectrautilities.com/",
  },
  {
    role: "Engineering Internships @",
    name: "Canadian Nuclear Laboratories",
    logo: "/logos/cnl.png",           // TODO
    url: "https://www.cnl.ca/",
  },
  {
    role: "Engineering Internships @",
    name: "Department of National Defence",
    logo: "/logos/canada.png",        // TODO
    url: "https://www.canada.ca/en/department-national-defence.html",
  },
];

export default function Previously() {
  return (
    <div className="mt-6">
      <div className="text-stone-400">previously:</div>
      <ul className="mt-2 grid gap-1 text-base">
        {items.map((it) => (
          <li key={it.name} className="group relative flex items-start gap-3 pl-4 hover:translate-x-1 transition">
            <span className="bullet" />
            <span className="text-stone-400">↳ {it.role}{" "}
              <span className="inline-flex items-baseline gap-1">
                <Image src={it.logo} alt={`${it.name} logo`} width={16} height={16} className="object-contain relative top-[2px]" />
                <Link href={it.url} target="_blank" className="font-medium text-stone-200 hover:underline underline-offset-4">
                  {it.name}
                </Link>
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
