"use client";
import { useEffect, useRef } from "react";

/* Animated signature. Replace the 'd' with your real path later. */
export default function Signature({ width=230, height=72, stroke="rgb(197,120,86)" }) {
  const mainRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const run = (el, dur=2200) => {
      if (!el) return;
      const L = el.getTotalLength();
      el.style.strokeDasharray = String(L);
      el.style.strokeDashoffset = String(L);
      el.getBoundingClientRect();
      el.style.transition = `stroke-dashoffset ${dur}ms ease`;
      el.style.strokeDashoffset = "0";
    };
    run(mainRef.current, 2200);
    run(lineRef.current, 900);
  }, []);

  return (
    <svg width={width} height={height} viewBox="0 0 230 72" fill="none" aria-label="signature">
      <path
        ref={mainRef}
        d="M10 52 C 28 18, 48 64, 70 44 S 114 22, 132 40 S 172 32, 186 52 208 36, 220 52"
        stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"
      />
      <path ref={lineRef} d="M20 60 L 220 60" stroke={stroke} strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
