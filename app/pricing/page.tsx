import React from 'react';
import type { Metadata } from 'next';
import PricingSection from '@/components/sections/PricingSection';
import CompareSection from '@/components/sections/CompareSection';
import FAQSection from '@/components/sections/FAQSection';
import JsonLd from '@/components/common/JsonLd';
import { productSchema, faqSchema, breadcrumbSchema } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'IPTV kaufen: Preise & Abo ohne Vertrag 2026 | GermanyStreamTV.com',
  description: 'IPTV Abo kaufen ab 5,92 €/Monat ✓ Premium IPTV in echtem 4K mit 50.000+ Sendern & 180.000 VODs ✓ Ohne Vertrag, monatlich kündbar ✓ Sofortige Freischaltung. Jetzt IPTV günstig kaufen!',
  alternates: { canonical: '/pricing' },
  keywords: [
    'IPTV kaufen',
    'IPTV Abo kaufen',
    'IPTV Preise',
    'IPTV Preisvergleich',
    'Günstiges IPTV',
    'IPTV ohne Vertrag',
    'IPTV monatlich kündbar',
    'Premium IPTV kaufen',
  ],
};

export default function PricingPage() {
  return (
    <div className="py-12 md:py-20">
      <JsonLd
        data={[
          productSchema(),
          faqSchema(),
          breadcrumbSchema([
            { name: 'Startseite', path: '/' },
            { name: 'Tarife & Preise', path: '/pricing' },
          ]),
        ]}
      />
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          IPTV Abo kaufen – <span className="text-gradient">Tarife & Preise</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Wählen Sie Ihren flexiblen Premium-Tarif für unbegrenztes Entertainment. Kein Abonnement-Zwang, keine automatische Verlängerung. Sie erhalten Ihre Xtream-API-Zugangsdaten und M3U-Playlists sofort nach dem Kauf vollautomatisch per E-Mail.
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-gray-300">
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-500 animate-pulse" />
            24h kostenloser Testzugang
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            30 Tage Geld-zurück-Garantie
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-surface px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-primary-500" />
            Keine automatische Verlängerung
          </div>
        </div>
      </div>

      <PricingSection showHeader={false} />
      <CompareSection />
      <FAQSection />
    </div>
  );
}
