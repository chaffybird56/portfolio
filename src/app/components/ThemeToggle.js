// --- components/ThemeToggle.js ---
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const t = saved === "light" ? "light" : "dark";
    setTheme(t);
    document.documentElement.classList.toggle("light", t === "light");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    localStorage.setItem("theme", next);
  };

  return (
    <button onClick={toggle} aria-label="toggle theme" className="toggle">
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
