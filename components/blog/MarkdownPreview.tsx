import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import type { Components } from 'react-markdown';

interface MarkdownPreviewProps {
  content: string;
}

/* ─── Custom component map ────────────────────────────────────────────────── */
const components: Components = {
  /* Headings */
  h1: ({ children }) => (
    <h1 className="font-spartan text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mt-10 mb-5 border-b border-border-subtle pb-3">
      {children}
    </h1>
  ),
  h2: ({ children, id }) => (
    <h2
      id={id}
      className="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 border-b border-border-subtle pb-2 scroll-mt-24"
    >
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3
      id={id}
      className="text-lg sm:text-xl font-bold text-white mt-7 mb-3 scroll-mt-24"
    >
      {children}
    </h3>
  ),
  h4: ({ children, id }) => (
    <h4
      id={id}
      className="text-base font-semibold text-gray-200 mt-6 mb-2 scroll-mt-24"
    >
      {children}
    </h4>
  ),

  /* Paragraphs */
  p: ({ children }) => (
    <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-5">
      {children}
    </p>
  ),

  /* Links – internal vs external */
  a: ({ href, children }) => {
    if (href && href.startsWith('/')) {
      return (
        <Link href={href} className="text-primary-500 hover:text-primary-400 underline underline-offset-2 transition-colors">
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary-500 hover:text-primary-400 underline underline-offset-2 transition-colors"
      >
        {children}
      </a>
    );
  },

  /* Strong / Em */
  strong: ({ children }) => (
    <strong className="font-semibold text-gray-100">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="italic text-gray-300">{children}</em>
  ),

  /* Lists */
  ul: ({ children }) => (
    <ul className="text-sm sm:text-base text-gray-300 list-disc ml-6 mb-5 space-y-1.5 leading-relaxed">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="text-sm sm:text-base text-gray-300 list-decimal ml-6 mb-5 space-y-1.5 leading-relaxed">
      {children}
    </ol>
  ),
  li: ({ children }) => (
    <li className="leading-relaxed">{children}</li>
  ),

  /* Horizontal rule */
  hr: () => (
    <hr className="border-border-subtle my-8" />
  ),

  /* Blockquote */
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary-500 pl-5 py-1 my-6 bg-primary-500/5 rounded-r-lg italic text-gray-300 text-sm sm:text-base leading-relaxed">
      {children}
    </blockquote>
  ),

  /* Inline code */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  code: ({ className, children, ...props }: any) => {
    const match = /language-(\w+)/.exec(className || '');
    const isBlock = !!match;

    if (isBlock) {
      return (
        <div className="my-6 rounded-xl overflow-hidden border border-zinc-800 text-sm">
          {/* language badge */}
          <div className="flex items-center justify-between bg-zinc-900 px-4 py-2 border-b border-zinc-800">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
              {match[1]}
            </span>
          </div>
          <pre className="overflow-x-auto bg-[#0a0a0a] p-5 text-[0.8125rem] leading-[1.65]">
            <code className="font-mono text-gray-200" {...props}>
              {String(children).replace(/\n$/, '')}
            </code>
          </pre>
        </div>
      );
    }

    return (
      <code
        className="bg-zinc-800 text-primary-400 text-[0.8em] font-mono px-1.5 py-0.5 rounded"
        {...props}
      >
        {children}
      </code>
    );
  },

  /* Images */
  img: ({ src, alt }) => (
    /* eslint-disable-next-line @next/next/no-img-element */
    <img
      src={src}
      alt={alt || ''}
      loading="lazy"
      className="w-full rounded-xl border border-border-subtle my-6 object-cover"
    />
  ),

  /* ── GFM Tables ────────────────────────────────────────────────────────── */
  table: ({ children }) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full text-sm text-left border-collapse bg-zinc-950">
        {children}
      </table>
    </div>
  ),
  thead: ({ children }) => (
    <thead className="bg-emerald-500 text-black">
      {children}
    </thead>
  ),
  tbody: ({ children }) => (
    <tbody className="divide-y divide-zinc-800">
      {children}
    </tbody>
  ),
  tr: ({ children }) => (
    <tr className="hover:bg-zinc-900 transition-colors">
      {children}
    </tr>
  ),
  th: ({ children }) => (
    <th className="px-5 py-3 font-semibold text-black text-xs uppercase tracking-wider whitespace-nowrap">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-5 py-3 text-gray-300 leading-relaxed">
      {children}
    </td>
  ),
};

/* ─── Component ────────────────────────────────────────────────────────────── */
export default function MarkdownPreview({ content }: MarkdownPreviewProps) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[
          rehypeRaw,
          rehypeSlug,
          [rehypeAutolinkHeadings, { behavior: 'wrap' }],
        ]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
