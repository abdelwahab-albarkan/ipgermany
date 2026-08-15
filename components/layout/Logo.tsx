import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" aria-label="GermanyStreamTV – Startseite" className="flex items-center">
      <Image
        src="/images/logo.png"
        alt="GermanyStreamTV Logo"
        width={1536}
        height={1024}
        sizes="(max-width: 640px) 120px, 160px"
        priority
        className="h-11 sm:h-12 w-auto object-contain"
      />
    </Link>
  );
}
