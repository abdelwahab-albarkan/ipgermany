import React from 'react';
import BlogListContainer from '@/components/blog/BlogListContainer';
import { getBlogPosts } from '@/lib/mongodb';

// Enable 1h ISR cache
export const revalidate = 3600;

export const metadata = {
  title: 'IPTV Ratgeber & Blog: Tests, Anleitungen & Tipps | GermanyStreamTV.com',
  description: 'Der IPTV-Ratgeber für Deutschland ✓ IPTV-Tests & Erfahrungen, Einrichtungs-Anleitungen, Sport-Streaming (Bundesliga, Champions League) und App-Vergleiche für Fire Stick, Samsung & LG.',
  alternates: { canonical: '/blog' },
  keywords: [
    'IPTV Ratgeber',
    'IPTV Test',
    'IPTV Erfahrungen',
    'IPTV Anleitung',
    'Bundesliga IPTV',
    'beste IPTV Apps',
  ],
};

export default async function BlogIndexPage() {
  const posts = await getBlogPosts();

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-6">
      <div className="max-w-3xl mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          GermanyStreamTV.com <span className="text-primary-500">Blog</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Anleitungen, Testberichte und Einrichtungshandbücher, sorgfältig zusammengestellt von unseren Streaming-Technikern.
        </p>
      </div>

      <BlogListContainer posts={posts} />
    </div>
  );
}
