"use client";
import Image from "next/image";
import Link from "next/link";

export default function HeroIntro() {
  return (
    <div className="hero-row">
      <div className="headshot-wrap">
        <Image
          src="/headshot.jpg"
          alt="Ahmad Ali Choudhry"
          width={88}
          height={88}
          className="headshot-img"
          priority
        />
      </div>
      <div className="hero-copy">
        <h1 className="hero-name">Ahmad Ali Choudhry</h1>
        <p className="hero-tagline text-muted">
          Electrical engineering · hardware validation · embedded &amp; RF · control &amp; test automation
        </p>
        <p className="hero-links text-sm text-muted">
          <Link
            href="https://www.linkedin.com/in/ahmad-choudhry-0/"
            target="_blank"
            className="u-anim-static"
          >
            LinkedIn
          </Link>
          <span className="hero-sep">·</span>
          <Link href="https://github.com/chaffybird56" target="_blank" className="u-anim-static">
            GitHub
          </Link>
          <span className="hero-sep">·</span>
          <span>Reliability Status (Level I) clearance — DND &amp; CNL</span>
        </p>
      </div>
    </div>
  );
}
