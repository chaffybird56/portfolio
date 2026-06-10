"use client";
import Image from "next/image";
import Link from "next/link";

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
        <p className="hero-links text-sm text-muted">
          <Link
            href="https://www.linkedin.com/in/ahmad-choudhry-0/"
            target="_blank"
            className="u-anim-static"
          >
            linkedin
          </Link>
          <span className="hero-sep">·</span>
          <Link href="https://github.com/chaffybird56" target="_blank" className="u-anim-static">
            github
          </Link>
          <span className="hero-sep">·</span>
          <span>reliability status (level i) security clearance — dnd &amp; cnl</span>
        </p>
      </div>
    </div>
  );
}
