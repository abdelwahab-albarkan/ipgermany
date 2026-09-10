import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="GermanyStreamTV – Startseite"
      className="flex items-center shrink-0"
    >
      {/*
        The brand PNG is 1536×1024, but the actual wordmark fills the full
        width and only the middle ~35% of the height — the rest is baked-in
        black/green padding. Constraining by height therefore made the logo
        look tiny. A fixed-size box + object-cover trims only that dead
        vertical padding (never the artwork), so the logo reads large at
        ~200px wide inside a normal-height navbar, with no distortion and the
        artwork's own aspect ratio preserved.

        Source: /images/logo-optimized.png — the SAME logo downscaled from the
        1.1 MB original to a 27 KB navbar-sized copy. Served `unoptimized`
        because it is already right-sized (avoids a second re-encode).
      */}
      <span className="relative block h-10 w-[136px] lg:h-[58px] lg:w-[200px]">
        <Image
          src="/images/logo-optimized.png"
          alt="GermanyStreamTV Logo"
          fill
          priority
          unoptimized
          sizes="(max-width: 1023px) 136px, 200px"
          className="object-cover object-center"
        />
      </span>
    </Link>
  );
}
