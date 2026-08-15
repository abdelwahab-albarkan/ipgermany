'use client';

import React, { useEffect, useState } from 'react';

interface HeadingItem {
  id: string;
  text: string;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [headings, setHeadings] = useState<HeadingItem[]>([]);

  useEffect(() => {
    const lines = content.split('\n');
    const extracted = lines
      .filter((line) => line.trim().startsWith('## '))
      .map((line) => {
        const text = line.replace('## ', '').trim();
        const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
        return { id, text };
      });
    setHeadings(extracted);
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <div className="p-6 rounded-xl border border-border-subtle bg-surface-card/30 self-start w-full">
      <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Inhaltsverzeichnis</h4>
      <nav className="flex flex-col gap-3">
        {headings.map((h) => (
          <a
            key={h.id}
            href={`#${h.id}`}
            className="text-xs sm:text-sm text-gray-400 hover:text-primary-500 transition-colors leading-normal"
          >
            {h.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
