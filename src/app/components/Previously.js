"use client";
import Image from "next/image";
import Link from "next/link";

const items = [
  {
    role: "",
    name: "Alectra",
    logo: "/logos/alectra.png",
    url: "https://alectrautilities.com/",
  },
  {
    role: "",
    name: "Canadian Nuclear Laboratories",
    logo: "/logos/cnl.png",
    url: "https://www.cnl.ca/",
  },
  {
    role: "  ",
    name: "Department of National Defence",
    logo: "/logos/canada.png",
    url: "https://www.canada.ca/en/department-national-defence.html",
  },
];

export default function Previously() {
  return (
    <div className="mt-6">
      <div className="text-stone-400">previously, Engineering Internships @:</div>
      <ul className="mt-2 grid gap-1 text-base">
        {items.map((it) => (
          <li key={it.name} className="group relative flex items-start gap-3 pl-4 hover:translate-x-1 transition">
            <span className="bullet" />
            <span className="text-stone-400">
              ↳ {it.role}{" "}
              <span className="inline-flex items-center gap-1">
                <Image src={it.logo} alt={`${it.name} logo`} width={25} height={28} className="object-contain relative top-[1px]" />
                <Link href={it.url} target="_blank" className="font-medium text-stone-200 underline underline-offset-4">
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
