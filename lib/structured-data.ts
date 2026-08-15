import { SITE_CONFIG, PRICING_PLANS, FAQ_ITEMS, REVIEWS } from '@/lib/constants';
import type { BlogPost } from '@/lib/mongodb';

const BASE_URL = SITE_CONFIG.domain;

/** Organization schema — establishes the brand entity for Google's Knowledge Graph. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: SITE_CONFIG.name,
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo.png`,
      width: 1536,
      height: 1024,
    },
    image: `${BASE_URL}/images/logo.png`,
    email: SITE_CONFIG.supportEmail,
    description:
      'GermanyStreamTV.com ist ein Premium-IPTV-Anbieter mit über 50.000 Live-TV-Sendern, 1.800+ Sportkanälen und 180.000+ Filmen & Serien in echtem 4K – ohne Vertrag.',
    areaServed: {
      '@type': 'Country',
      name: 'Germany',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE_CONFIG.supportEmail,
      telephone: SITE_CONFIG.whatsappNumber,
      availableLanguage: ['German', 'English'],
      areaServed: 'DE',
    },
    sameAs: [
      SITE_CONFIG.socialLinks.twitter,
      SITE_CONFIG.socialLinks.facebook,
      SITE_CONFIG.socialLinks.instagram,
    ],
  };
}

/** WebSite schema — links the site entity to its publishing Organization. */
export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: SITE_CONFIG.name,
    url: BASE_URL,
    inLanguage: 'de-DE',
    publisher: { '@id': `${BASE_URL}/#organization` },
  };
}

/** Aggregate rating computed from on-site reviews (used by Product schema). */
function aggregateRating() {
  const count = REVIEWS.length;
  const avg = REVIEWS.reduce((sum, r) => sum + r.rating, 0) / Math.max(count, 1);
  return {
    '@type': 'AggregateRating',
    ratingValue: avg.toFixed(1),
    reviewCount: count,
    bestRating: '5',
    worstRating: '1',
  };
}

/** Product schema with tiered Offers — drives price-rich results for the subscription. */
export function productSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${SITE_CONFIG.name} Premium IPTV-Abonnement`,
    description:
      'Premium IPTV-Abonnement mit über 50.000 Live-TV-Sendern, 1.800+ Sportkanälen und 180.000+ Filmen & Serien in echtem 4K mit HDR10+ ohne Ruckeln.',
    brand: {
      '@type': 'Brand',
      name: SITE_CONFIG.name,
    },
    image: `${BASE_URL}/images/logo.png`,
    aggregateRating: aggregateRating(),
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EUR',
      lowPrice: Math.min(...PRICING_PLANS.map((p) => p.price)).toFixed(2),
      highPrice: Math.max(...PRICING_PLANS.map((p) => p.price)).toFixed(2),
      offerCount: PRICING_PLANS.length,
      availability: 'https://schema.org/InStock',
      offers: PRICING_PLANS.map((plan) => ({
        '@type': 'Offer',
        name: `${SITE_CONFIG.name} SOLO – ${plan.name}`,
        price: plan.price.toFixed(2),
        priceCurrency: 'EUR',
        availability: 'https://schema.org/InStock',
        url: `${BASE_URL}/pricing`,
      })),
    },
  };
}

/** FAQPage schema — eligible for the expandable FAQ rich result. */
export function faqSchema(items: { question: string; answer: string }[] = FAQ_ITEMS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/** BreadcrumbList schema — renders the breadcrumb trail under the search result. */
export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${BASE_URL}${crumb.path}`,
    })),
  };
}

/** Article schema for a blog post — powers article rich results & Discover eligibility. */
export function articleSchema(post: BlogPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.seoTitle || post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.authorName,
      jobTitle: post.authorRole,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${post.slug}`,
    },
  };
}
