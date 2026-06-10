"use client";
import Image from "next/image";

export default function HeroIntro() {
  return (
    <div className="hero-row">
      <div className="headshot-wrap">
        <Image
          src="/headshot.jpg"
          alt="ahmad ali"
          width={88}
          height={88}
          className="headshot-img"
          priority
        />
      </div>
      <div className="hero-copy">
        <p className="hero-tagline text-muted">
          embedded &amp; hardware validation · power · control &amp; test automation
        </p>
      </div>
    </div>
  );
}
