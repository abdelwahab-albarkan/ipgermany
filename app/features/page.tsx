import React from 'react';
import Link from 'next/link';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import CompareSection from '@/components/sections/CompareSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Premium IPTV Funktionen: 4K, EPG & Anti-Buffering | GermanyStreamTV.com',
  description: 'Warum GermanyStreamTV.com das beste IPTV in Deutschland ist ✓ Echtes 4K Ultra HD mit HDR10+ ✓ EPG-Programmführer & Catch-Up TV ✓ Anti-Buffering-Technologie ✓ IPTV mit Aufnahmefunktion & Mehrfachnutzung.',
  keywords: [
    'Premium IPTV',
    '4K IPTV Deutschland',
    'IPTV HD',
    'IPTV mit EPG',
    'IPTV mit Aufnahmefunktion',
    'IPTV ohne Buffering',
    'IPTV Mehrfachnutzung',
  ],
  alternates: { canonical: '/features' },
  openGraph: {
    title: 'Premium IPTV Funktionen: 4K, EPG & Anti-Buffering | GermanyStreamTV.com',
    description: 'Echtes 4K Ultra HD mit HDR10+, EPG-Programmführer, Catch-Up TV, Anti-Buffering-Technologie und Mehrfachnutzung – alle Premium-Funktionen von GermanyStreamTV.com.',
    url: 'https://ipgermany.de/features',
  },
};

export default function FeaturesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          Premium <span className="text-gradient">IPTV-Funktionen</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Erleben Sie zukunftsweisendes Streaming mit modernstem H.265-Codec, Anti-Freeze v2 Edge-Servern und vollem Zugriff auf das interaktive EPG-Programmführer- und Aufnahme-Archiv. Alle diese Leistungen sind vollständig in all unseren{' '}
          <Link href="/pricing" className="text-primary-500 hover:underline font-semibold">
            Tarifen & Preisen
          </Link>{' '}
          inbegriffen. In unserem{' '}
          <Link href="/install" className="text-primary-500 hover:underline font-semibold">
            Installations-Bereich
          </Link>{' '}
          erfahren Sie, wie einfach die Einrichtung auf Ihrem Streaming-Gerät ist.
        </p>
      </div>

      <FeaturesGrid showHeader={false} />
      <CompareSection />
      <CTASection />
    </div>
  );
}
