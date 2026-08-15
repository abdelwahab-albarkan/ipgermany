import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/mongodb';
import { SITE_CONFIG } from '@/lib/constants';

const BASE_URL = SITE_CONFIG.domain;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Core marketing / conversion pages
  const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1.0, changeFrequency: 'daily' },
    { path: '/iptv-kaufen', priority: 0.95, changeFrequency: 'weekly' },
    { path: '/bestes-iptv', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/pricing', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/features', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/devices', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/iptv-fire-stick', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/iptv-samsung-tv', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/iptv-lg-tv', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/iptv-android-tv', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/iptv-apple-tv', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/iptv-legal-deutschland', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/iptv-sicherheit', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/iptv-vpn', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/iptv-sport', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/bundesliga-live-stream', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/champions-league-live-stream', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/iptv-apps', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/tivimate-iptv', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/iptv-smarters-pro', priority: 0.75, changeFrequency: 'monthly' },
    { path: '/was-ist-iptv', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/iptv-vergleich', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/iptv-erfahrungen', priority: 0.8, changeFrequency: 'weekly' },
    { path: '/install', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/blog', priority: 0.8, changeFrequency: 'daily' },
    { path: '/blog/ipad-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iphone-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/macos-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/windows-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/dazn-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/sky-iptv-roadmap-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-ohne-buffering', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/m3u-vs-xtream-codes', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-fire-tv-stick-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-samsung-smart-tv-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-lg-smart-tv-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-apple-tv-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-android-tv-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/beste-iptv-apps-2026', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/blog/iptv-smarters-pro-test-2026', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/blog/tivimate-test-2026', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/blog/iptvx-test-2026', priority: 0.85, changeFrequency: 'monthly' },
    { path: '/blog/iptv-vpn-deutschland-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-legal-deutschland-2026', priority: 0.85, changeFrequency: 'weekly' },
    { path: '/blog/iptv-kaufen-leitfaden-2026', priority: 0.9, changeFrequency: 'weekly' },
    { path: '/about', priority: 0.5, changeFrequency: 'yearly' },
    { path: '/contact', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/reseller', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/affiliate', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/restream', priority: 0.5, changeFrequency: 'monthly' },
    // Legal German-slug pages (/impressum, /datenschutz, /agb, /widerruf,
    // /refund, /cookies) are intentionally noindex and therefore omitted here.
    { path: '/legal/acceptable-use', priority: 0.3, changeFrequency: 'monthly' },
    { path: '/legal/dmca', priority: 0.3, changeFrequency: 'monthly' },
  ];

  const marketingEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  // Dynamic blog articles (MongoDB, with static fallback)
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getBlogPosts();
    blogEntries = posts.map((post) => ({
      url: `${BASE_URL}/blog/${post.slug}`,
      lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }));
  } catch {
    blogEntries = [];
  }

  return [...marketingEntries, ...blogEntries];
}
