"use client";
import Image from "next/image";

export default function HeroIntro() {
  return (
    <div className="hero-row">
      <div className="headshot-wrap">
        <Image
          src="/headshot.jpg"
          alt="ahmad ali"
          width={100}
          height={100}
          className="headshot-img"
          priority
        />
      </div>
    </div>
  );
}
