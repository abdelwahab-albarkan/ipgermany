'use client';

import React, { useState } from 'react';
import { Share2, Twitter, Facebook, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  return (
    <div className="flex flex-col gap-4 p-6 rounded-xl border border-border-subtle bg-surface-card/40">
      <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
        <Share2 className="h-4 w-4 text-primary-500" />
        Artikel teilen
      </div>
      <div className="flex gap-2">
        <a
          href={`https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle bg-surface text-gray-400 hover:text-white transition-colors"
          aria-label="Auf Twitter teilen"
        >
          <Twitter className="h-4 w-4" />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle bg-surface text-gray-400 hover:text-white transition-colors"
          aria-label="Auf Facebook teilen"
        >
          <Facebook className="h-4 w-4" />
        </a>
        <button
          onClick={copyToClipboard}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-border-subtle bg-surface text-gray-400 hover:text-white transition-colors"
          aria-label="Beitragslink kopieren"
        >
          {copied ? <Check className="h-4 w-4 text-primary-500" /> : <LinkIcon className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
