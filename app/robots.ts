import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

const BASE_URL = SITE_CONFIG.domain;

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Keep offline page, APIs, and Next.js internals out of the index
        disallow: ['/offline', '/api/', '/_next/'],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
