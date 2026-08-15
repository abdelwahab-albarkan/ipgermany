import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/mongodb';

interface PostCardProps {
  post: BlogPost;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-card overflow-hidden transition-all duration-300 hover:border-gray-800">
      <div>
        {/* Cover Image Frame */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 30vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content Details */}
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
    </article>
  );
}
