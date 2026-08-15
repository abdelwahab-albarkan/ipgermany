import React from 'react';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import MarkdownPreview from '@/components/blog/MarkdownPreview';
import ArticleFAQ from '@/components/blog/ArticleFAQ';
import ArticlePricingStrip from '@/components/blog/ArticlePricingStrip';
import AuthorCard from '@/components/blog/AuthorCard';
import ShareButtons from '@/components/blog/ShareButtons';
import CommentSection from '@/components/blog/CommentSection';
import TableOfContents from '@/components/blog/TableOfContents';
import MobileTOC from '@/components/blog/MobileTOC';
import { getBlogPosts, getPostBySlug } from '@/lib/mongodb';
import JsonLd from '@/components/common/JsonLd';
import { articleSchema, breadcrumbSchema, faqSchema } from '@/lib/structured-data';

// Awaitable params type matching Next.js 15+ App Router patterns
type PageParams = Promise<{ slug: string }>;

// Pre-render all known slugs at build time; unknown slugs fall back to SSR
export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

// Allow runtime rendering for any slug not in the static list
export const dynamicParams = true;

// ISR: revalidate every hour
export const revalidate = 3600;

export async function generateMetadata({ params }: { params: PageParams }): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    return {
      title: 'Article Not Found | GermanyStreamTV.com',
    };
  }

  return {
    title: `${post.seoTitle} | GermanyStreamTV.com Blog`,
    description: post.description,
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.seoTitle,
      description: post.description,
      type: 'article',
      publishedTime: post.publishedAt,
      images: [{ url: post.coverImage }],
    }
  };
}

export default async function BlogPostPage({ params }: { params: PageParams }) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);
  if (!post) {
    notFound();
  }

  const postUrl = `https://germanystreamtv.com/blog/${post.slug}`;

  const structuredData: Record<string, unknown>[] = [
    articleSchema(post),
    breadcrumbSchema([
      { name: 'Startseite', path: '/' },
      { name: 'Blog', path: '/blog' },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
  if (post.faqs && post.faqs.length > 0) {
    structuredData.push(faqSchema(post.faqs));
  }

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-6">
      <JsonLd data={structuredData} />
      {/* Header and Hero Image */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-6 font-semibold uppercase tracking-wider">
          <span className="text-primary-500">{post.category}</span>
          <span>&bull;</span>
          <span>{post.readingTime}</span>
        </div>
        <h1 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8 leading-tight">
          {post.title}
        </h1>
        
        {/* Author header */}
        <div className="flex items-center gap-4 mb-8">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-surface">
            <Image
              src={post.authorAvatar}
              alt={post.authorName}
              fill
              sizes="40px"
              className="object-cover"
            />
          </div>
          <div>
            <div className="text-sm font-bold text-white">{post.authorName}</div>
            <div className="text-xs text-gray-500">Veröffentlicht am {post.publishedAt}</div>
          </div>
        </div>

        {/* Cover image banner */}
        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-xl border border-border-subtle bg-black/20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Main split grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto">
        <article className="lg:col-span-8">
          <MarkdownPreview content={post.content} />
          
          <ArticlePricingStrip />
          
          {post.faqs && <ArticleFAQ faqs={post.faqs} />}
          
          <div className="my-12">
            <AuthorCard
              name={post.authorName}
              role={post.authorRole}
              avatar={post.authorAvatar}
            />
          </div>
          
          <CommentSection />
        </article>

        {/* Sticky Desktop TOC Sidebar */}
        <aside className="hidden lg:col-span-4 lg:flex lg:flex-col lg:gap-8 self-start lg:sticky lg:top-24">
          <TableOfContents content={post.content} />
          <ShareButtons title={post.title} url={postUrl} />
        </aside>
      </div>

      {/* Mobile Drawer TOC */}
      <MobileTOC content={post.content} />
    </div>
  );
}
