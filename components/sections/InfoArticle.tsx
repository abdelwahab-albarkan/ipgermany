import React from 'react';
import Link from 'next/link';
import { Reveal } from '@/components/ui/motion';

export interface InfoSection {
  heading: string;
  body: React.ReactNode;
}

export interface InfoRelated {
  href: string;
  title: string;
  desc: string;
}

export interface InfoArticleProps {
  tagline: string;
  h1: React.ReactNode;
  intro: React.ReactNode;
  sections: InfoSection[];
  related: InfoRelated[];
}

/**
 * Reusable long-form informational article layout (legal, safety, VPN, guides…).
 * Semantic <article> with clear heading hierarchy for readability & SEO.
 */
export default function InfoArticle({ tagline, h1, intro, sections, related }: InfoArticleProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 pt-10 pb-16 md:pt-14">
      <Reveal>
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-500">
          {tagline}
        </p>
        <h1 className="font-spartan text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[0.95] mb-6">
          {h1}
        </h1>
        <div className="text-gray-300 text-base md:text-lg leading-relaxed space-y-4">{intro}</div>
      </Reveal>

      {sections.map((section) => (
        <Reveal key={section.heading} className="mt-12">
          <h2 className="font-spartan text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-5">
            {section.heading}
          </h2>
          <div className="text-gray-400 text-base leading-relaxed space-y-4 [&_strong]:text-gray-200 [&_a]:text-primary-500 [&_a:hover]:underline">
            {section.body}
          </div>
        </Reveal>
      ))}

      {/* Internal links */}
      <Reveal className="mt-16">
        <h2 className="font-spartan text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-6">
          Weiterlesen
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          {related.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-xl border border-border-subtle bg-surface-card/50 p-5 shadow-card transition-all hover:-translate-y-1 hover:border-primary-500/40"
            >
              <div className="text-base font-bold text-white group-hover:text-primary-500 transition-colors mb-1.5">
                {link.title}
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">{link.desc}</p>
            </Link>
          ))}
        </div>
      </Reveal>
    </article>
  );
}
