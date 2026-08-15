import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/mongodb';
import { Reveal, Stagger, HoverCard } from '@/components/ui/motion';

interface LatestBlogPostsProps {
  posts: BlogPost[];
}

export default function LatestBlogPosts({ posts }: LatestBlogPostsProps) {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <Reveal className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
        <div>
          <h2 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-6">
            Neues aus dem <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl">
            Bleiben Sie auf dem Laufenden mit Einrichtungsanleitungen, App-Vergleichen und Neuigkeiten aus der Sportwelt.
          </p>
        </div>
        <Link
          href="/blog"
          className="inline-flex h-11 items-center justify-center rounded-md border border-border-subtle bg-surface px-6 text-sm font-semibold text-white hover:bg-surface-hover transition-colors shrink-0"
        >
          Alle Artikel ansehen
        </Link>
      </Reveal>

      <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.slice(0, 3).map((post, index) => (
          <HoverCard
            key={post.slug || index}
            className="group relative flex h-full flex-col justify-between rounded-xl border border-border-subtle bg-surface-card overflow-hidden shadow-card transition-colors duration-300 hover:border-primary-500/40"
          >
            <div>
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content block */}
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-semibold uppercase tracking-wider">
                  <span className="text-primary-500">{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.readingTime}</span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug group-hover:text-primary-500 transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <div className="px-6 pb-6 pt-4 border-t border-border-subtle/50 text-xs text-gray-500 flex items-center justify-between">
              <span>Von {post.authorName}</span>
              <span>{post.publishedAt}</span>
            </div>
          </HoverCard>
        ))}
      </Stagger>
    </section>
  );
}
