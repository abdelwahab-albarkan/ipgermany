import React from 'react';

/**
 * Injects a JSON-LD structured-data script into the page <head>/<body>.
 * Next.js hoists and renders this safely; search engines read it for rich results.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // Content is server-generated from trusted constants — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
