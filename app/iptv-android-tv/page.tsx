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
  title: 'IPTV auf Android TV & Google TV installieren 2026 | GermanyStreamTV.com',
  description:
    'IPTV auf Android TV & Google TV einrichten ✓ Anleitung mit TiviMate, IPTV Smarters Pro & OTT Navigator ✓ Direkt aus dem Google Play Store ✓ 50.000+ Sender in echtem 4K. Jetzt starten!',
  alternates: { canonical: '/iptv-android-tv' },
  keywords: [
    'IPTV Android TV',
    'IPTV auf Android TV installieren',
    'beste IPTV App für Android TV',
    'IPTV Google TV',
    'TiviMate Android TV',
    'Android TV Box IPTV',
  ],
  openGraph: {
    title: 'IPTV auf Android TV & Google TV installieren 2026 | GermanyStreamTV.com',
    description:
      'Android TV & Google TV IPTV einrichten mit TiviMate & IPTV Smarters Pro – direkt aus dem Play Store. 50.000+ Sender in echtem 4K.',
    url: 'https://germanystreamtv.com/iptv-android-tv',
  },
};

export default function IptvAndroidTvPage() {
  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <Breadcrumbs
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kompatible Geräte', path: '/devices' },
          { name: 'IPTV auf Android TV', path: '/iptv-android-tv' },
        ]}
      />

      <DeviceGuide
        tagline="Android TV · Google TV · Android-Boxen"
        h1={
          <>
            IPTV auf <span className="text-gradient">Android TV</span> installieren
          </>
        }
        image={{ src: '/images/Android TV.png', alt: 'Android TV & Google TV Box für IPTV' }}
        intro={
          <>
            <p>
              <strong className="text-gray-200">Android TV</strong> und <strong className="text-gray-200">Google TV</strong>{' '}
              bieten den größten App-Komfort für IPTV: Sie installieren Ihren Lieblings-Player einfach direkt aus dem
              Google Play Store – ganz ohne Umwege. Diese Anleitung funktioniert für Android-TV-Boxen, Google TV,
              Chromecast mit Google TV, Sony, Philips, TCL und NVIDIA Shield.
            </p>
            <p>
              Alles, was Sie brauchen, sind Ihre <strong className="text-gray-200">GermanyStreamTV.com-Zugangsdaten</strong>{' '}
              (Xtream Codes API), die Sie sofort nach dem Kauf per E-Mail erhalten.
            </p>
          </>
        }
        steps={[
          'Öffnen Sie den Google Play Store auf Ihrem Android-TV oder Google TV.',
          'Suchen Sie nach „TiviMate“, „IPTV Smarters Pro“ oder „OTT Navigator“ und installieren Sie die App.',
          'Starten Sie die App und wählen Sie „Xtream Codes API“ (bzw. „Playlist hinzufügen“).',
          'Geben Sie Portal-URL, Benutzername und Passwort aus Ihrer GermanyStreamTV.com-Aktivierungs-E-Mail ein.',
          'Die Senderliste und der EPG-Programmführer laden automatisch.',
          'Fertig: Streamen Sie 50.000+ Sender und 180.000+ VODs in echtem 4K mit HDR10+.',
        ]}
        apps={[
          { name: 'TiviMate', note: 'Der Premium-Standard auf Android TV: bestes EPG-Layout, Aufnahmefunktion und blitzschnelle Navigation.' },
          { name: 'IPTV Smarters Pro', note: 'Kostenlos, unterstützt Xtream Codes API & M3U und läuft auf jeder Android-TV-Box zuverlässig.' },
          { name: 'OTT Navigator', note: 'Extrem anpassbar mit Multi-Playlist-Support – ideal für Power-User und große Senderlisten.' },
        ]}
        benefits={[
          'Für Android TV, Google TV, Chromecast, Sony, TCL, Philips & NVIDIA Shield',
          'Echtes 4K Ultra HD mit HDR10+',
          'EPG-Programmführer & Catch-Up TV',
          'Direkt-Installation aus dem Play Store',
          'Ohne Vertrag – monatlich kündbar',
          '24/7 deutschsprachiger Support',
        ]}
        related={[
          { href: '/iptv-fire-stick', title: 'IPTV auf Fire Stick', desc: 'Anleitung für Amazon Fire TV Stick.' },
          { href: '/iptv-apple-tv', title: 'IPTV auf Apple TV', desc: 'Einrichtung auf Apple TV mit tvOS.' },
          { href: '/devices', title: 'Alle Geräte', desc: 'Übersicht aller unterstützten Geräte & Apps.' },
          { href: '/iptv-kaufen', title: 'IPTV kaufen', desc: 'Premium-IPTV-Abo ohne Vertrag – ab 5,92 €/Monat.' },
          { href: '/bestes-iptv', title: 'Bestes IPTV', desc: 'Vergleich & Kriterien für den besten Anbieter.' },
          { href: '/faq', title: 'Häufige Fragen', desc: 'Ist IPTV legal? Warum ruckelt IPTV? Antworten.' },
        ]}
      />

      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
