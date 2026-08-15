import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import JsonLd from '@/components/common/JsonLd';
import { productSchema, faqSchema } from '@/lib/structured-data';
import DeviceGuide from '@/components/sections/DeviceGuide';
import PricingSection from '@/components/sections/PricingSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'IPTV auf Apple TV installieren 2026 (tvOS) | GermanyStreamTV.com',
  description:
    'IPTV auf Apple TV einrichten ✓ Anleitung mit IPTV Smarters, GSE Smart IPTV & iPlayTV aus dem App Store ✓ Kein Jailbreak nötig ✓ 50.000+ Sender in echtem 4K. Jetzt in Minuten loslegen!',
  alternates: { canonical: '/iptv-apple-tv' },
  keywords: [
    'IPTV Apple TV',
    'IPTV auf Apple TV installieren',
    'beste IPTV App für Apple TV',
    'IPTV Apple TV 4K',
    'GSE Smart IPTV Apple TV',
    'IPTV Smarters Apple TV',
  ],
  openGraph: {
    title: 'IPTV auf Apple TV installieren 2026 (tvOS) | GermanyStreamTV.com',
    description:
      'Apple TV IPTV einrichten mit IPTV Smarters, GSE Smart IPTV & iPlayTV – direkt aus dem App Store, ohne Jailbreak. 50.000+ Sender in 4K.',
    url: 'https://ipgermany.de/iptv-apple-tv',
  },
};

export default function IptvAppleTvPage() {
  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <Breadcrumbs
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kompatible Geräte', path: '/devices' },
          { name: 'IPTV auf Apple TV', path: '/iptv-apple-tv' },
        ]}
      />

      <DeviceGuide
        tagline="Apple TV HD & Apple TV 4K · tvOS"
        image={{ src: '/images/appletv.png', alt: 'Apple TV 4K für IPTV-Streaming' }}
        h1={
          <>
            IPTV auf <span className="text-gradient">Apple TV</span> installieren
          </>
        }
        intro={
          <>
            <p>
              Das <strong className="text-gray-200">Apple TV 4K</strong> liefert dank tvOS ein besonders flüssiges und
              hochwertiges Streaming-Erlebnis. IPTV lässt sich ganz ohne Jailbreak einrichten – Sie laden einfach einen
              kompatiblen Player aus dem App Store und melden sich mit Ihren Zugangsdaten an.
            </p>
            <p>
              Sie benötigen nur Ihre <strong className="text-gray-200">GermanyStreamTV.com-Zugangsdaten</strong> (Xtream Codes API
              oder M3U), die Sie sofort nach dem Kauf per E-Mail erhalten.
            </p>
          </>
        }
        steps={[
          'Öffnen Sie den App Store auf Ihrem Apple TV.',
          'Suchen Sie nach „IPTV Smarters“, „GSE Smart IPTV“ oder „iPlayTV“ und laden Sie die App.',
          'Öffnen Sie die App und wählen Sie „Mit Xtream Codes API anmelden“ (oder M3U-Playlist hinzufügen).',
          'Geben Sie Portal-URL, Benutzername und Passwort aus Ihrer GermanyStreamTV.com-E-Mail ein.',
          'Die Senderliste und der EPG-Programmführer werden automatisch geladen.',
          'Fertig: Genießen Sie 50.000+ Sender und 180.000+ VODs in echtem 4K mit HDR10+.',
        ]}
        apps={[
          { name: 'IPTV Smarters', note: 'Beliebter Player für tvOS mit Xtream-Codes-Login, integriertem EPG und übersichtlichem VOD-Bereich.' },
          { name: 'GSE Smart IPTV', note: 'Umfangreicher Player mit Unterstützung für M3U, Xtream Codes und EPG – ideal für große Senderlisten.' },
          { name: 'iPlayTV', note: 'Schlanker, schneller Player speziell für Apple TV mit sauberer Oberfläche und stabiler Wiedergabe.' },
        ]}
        benefits={[
          'Für Apple TV HD & Apple TV 4K (tvOS 13+)',
          'Kein Jailbreak erforderlich',
          'Echtes 4K Ultra HD mit HDR10+',
          'EPG-Programmführer & Catch-Up TV',
          'Ohne Vertrag – monatlich kündbar',
          '24/7 deutschsprachiger Support',
        ]}
        related={[
          { href: '/iptv-fire-stick', title: 'IPTV auf Fire Stick', desc: 'Anleitung für Amazon Fire TV Stick.' },
          { href: '/iptv-android-tv', title: 'IPTV auf Android TV', desc: 'Einrichtung auf Android TV & Google TV.' },
          { href: '/devices', title: 'Alle Geräte', desc: 'Übersicht aller unterstützten Geräte & Apps.' },
          { href: '/iptv-kaufen', title: 'IPTV kaufen', desc: 'Premium-IPTV-Abo ohne Vertrag – ab 5,92 €/Monat.' },
          { href: '/bestes-iptv', title: 'Bestes IPTV', desc: 'Vergleich & Kriterien für den besten Anbieter.' },
          { href: '/faq', title: 'Häufige Fragen', desc: 'Ist IPTV legal? Welche App ist die beste? Antworten.' },
        ]}
      />

      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
