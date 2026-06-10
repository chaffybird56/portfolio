"use client";
import Link from "next/link";
import { highlightCategories } from "@/app/data/highlights";

export default function BuildingHighlights() {
  return (
    <div className="mt-4">
      <div className="section-line italic">what i&apos;ve been building:</div>
      <div className="building-grid mt-3">
        {highlightCategories.map((cat) => (
          <div key={cat.id} className="building-col">
            <div className="building-cat">
              <span aria-hidden="true">{cat.emoji}</span>
              {cat.label}
            </div>
            <ul className="building-list">
              {cat.items.map((item) => (
                <li key={item.href} className="building-item">
                  <Link href={item.href} target="_blank" className="u-anim-static font-semibold">
                    {item.title}
                  </Link>
                  <span className="building-note">{item.note}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
