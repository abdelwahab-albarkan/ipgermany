import React from 'react';
import Image from 'next/image';

interface AuthorCardProps {
  name: string;
  role: string;
  avatar: string;
}

export default function AuthorCard({ name, role, avatar }: AuthorCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-xl border border-border-subtle bg-surface-card/60 items-center sm:items-start text-center sm:text-left">
      <div className="relative h-16 w-16 overflow-hidden rounded-full shrink-0 bg-surface">
        <Image
          src={avatar}
          alt={name}
          fill
          sizes="64px"
          className="object-cover"
        />
      </div>
      <div>
        <h4 className="text-base font-bold text-white mb-1">{name}</h4>
        <p className="text-xs text-primary-500 font-semibold mb-3">{role}</p>
        <p className="text-sm text-gray-400 leading-relaxed">
          Technischer Spezialist, der bei GermanyStreamTV.com über Streaming-Standards, Server-Lastverteilung und Geräte-Installationsanleitungen schreibt.
        </p>
      </div>
    </div>
  );
}
