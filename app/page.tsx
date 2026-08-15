import React from 'react';
import type { Metadata } from 'next';
import JsonLd from '@/components/common/JsonLd';
import { productSchema, faqSchema } from '@/lib/structured-data';
import HeroSection from '@/components/sections/HeroSection';
import StatsBar from '@/components/sections/StatsBar';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import VODSection from '@/components/sections/VODSection';
import SportsSection from '@/components/sections/SportsSection';
import PricingSection from '@/components/sections/PricingSection';
import ReviewsSection from '@/components/sections/ReviewsSection';
import DevicesSection from '@/components/sections/DevicesSection';
import HowItWorks from '@/components/sections/HowItWorks';
import CompareSection from '@/components/sections/CompareSection';
import FAQSection from '@/components/sections/FAQSection';
import LatestBlogPosts from '@/components/sections/LatestBlogPosts';
import CTASection from '@/components/sections/CTASection';
import { getPopularMovies, getPopularSeries } from '@/lib/tmdb';
import { getBlogPosts } from '@/lib/mongodb';

export const metadata: Metadata = {
  title: 'IPTV Deutschland 2026: Premium IPTV-Abo kaufen | GermanyStreamTV.com',
  description:
    'IPTV kaufen leicht gemacht ✓ Über 50.000 Live-TV-Sender, Sport & 180.000+ Filme/Serien in echtem 4K mit HDR10+ ✓ IPTV Abo ohne Vertrag ab 5,92 €/Monat ✓ Freischaltung in 60 Sekunden.',
  alternates: { canonical: '/' },
  keywords: [
    'IPTV Deutschland',
    'IPTV kaufen',
    'IPTV Abo',
    'Bestes IPTV',
    'Premium IPTV',
    'IPTV ohne Vertrag',
    '4K IPTV Deutschland',
    'IPTV Anbieter',
  ],
  openGraph: {
    title: 'IPTV Deutschland 2026: Premium IPTV-Abo kaufen | GermanyStreamTV.com',
    description:
      'Über 50.000 Live-TV-Sender, Sport & 180.000+ Filme & Serien in echtem 4K mit HDR10+. IPTV Abo ohne Vertrag – kompatibel mit Firestick, Samsung, LG & Apple TV.',
    url: 'https://ipgermany.de',
  },
};

// Enable ISR caching at 3600s (1h)
export const revalidate = 3600;

export default async function HomePage() {
  // Fetch external TMDB and local MongoDB database payloads server-side
  const [movies, series, blogPosts] = await Promise.all([
    getPopularMovies(),
    getPopularSeries(),
    getBlogPosts()
  ]);

  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <HeroSection movies={movies} />
      <StatsBar />
      <FeaturesGrid />
      <VODSection movies={movies} series={series} />
      <SportsSection />
      <PricingSection />
      <ReviewsSection />
      <DevicesSection />
      <HowItWorks />
      <CompareSection />
      <FAQSection />
      <LatestBlogPosts posts={blogPosts} />
      <CTASection />
    </>
  );
}
