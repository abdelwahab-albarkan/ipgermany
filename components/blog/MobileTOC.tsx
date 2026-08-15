'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeadingItem {
  id: string;
  text: string;
}

interface MobileTOCProps {
  content: string;
}

export default function MobileTOC({ content }: MobileTOCProps) {
  const [isOpen, setIsOpen] = useState(false);
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
    <div className="lg:hidden fixed bottom-6 left-6 z-40">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-500 text-black shadow-lg shadow-primary-500/25"
        aria-label="Inhaltsverzeichnis umschalten"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {isOpen && (
        <div className="fixed inset-x-6 bottom-20 z-40 rounded-xl border border-border-subtle bg-surface-card p-6 shadow-2xl animate-fade-in max-h-[300px] overflow-y-auto">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 border-b border-border-subtle pb-2">
            Jump to Section
          </h4>
          <nav className="flex flex-col gap-3">
            {headings.map((h) => (
              <a
                key={h.id}
                href={`#${h.id}`}
                onClick={() => setIsOpen(false)}
                className="text-sm text-gray-400 hover:text-primary-500 transition-colors"
              >
                {h.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
