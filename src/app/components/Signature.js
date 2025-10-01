"use client";
import { useEffect, useRef } from "react";

export default function Signature({ width = 210, height = 70, stroke = "rgba(231,229,228,0.9)" }) {
  const pathRef = useRef(null);

  useEffect(() => {
    const p = pathRef.current;
    if (!p) return;
    const len = p.getTotalLength();
    p.style.strokeDasharray = String(len);
    p.style.strokeDashoffset = String(len);
    // trigger animation
    requestAnimationFrame(() => {
      p.style.transition = "stroke-dashoffset 2.2s ease";
      p.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <svg width={width} height={height} viewBox="0 0 210 70" fill="none" aria-label="signature">
      {/* TODO: Replace the path below with your own SVG path for your signature.
         Quick recipe:
         - Trace your signature in Figma/Illustrator (Pen), export as SVG.
         - Copy the main stroke path's 'd' here; keep stroke-linecap/linejoin round. */}
      <path
        ref={pathRef}
        d="M8 48 C 38 28, 62 56, 84 40 S 128 20, 150 38 S 190 30, 202 46"
        stroke={stroke}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* underline */}
      <path
        d="M20 58 L190 58"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
