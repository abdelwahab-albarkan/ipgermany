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
  title: 'IPTV auf Fire Stick installieren 2026: Anleitung | GermanyStreamTV.com',
  description:
    'IPTV auf Fire TV Stick installieren ✓ Schritt-für-Schritt-Anleitung auf Deutsch mit Downloader, TiviMate & IPTV Smarters Pro ✓ In unter 5 Minuten in echtem 4K streamen. Jetzt einrichten!',
  alternates: { canonical: '/iptv-fire-stick' },
  keywords: [
    'IPTV Fire Stick',
    'IPTV auf Fire Stick installieren',
    'beste IPTV App für Fire Stick',
    'Fire TV Stick IPTV einrichten',
    'IPTV Fire TV',
    'IPTV Smarters Pro Fire Stick',
  ],
  openGraph: {
    title: 'IPTV auf Fire Stick installieren 2026: Anleitung | GermanyStreamTV.com',
    description:
      'Fire TV Stick IPTV einrichten in unter 5 Minuten – mit Downloader, TiviMate & IPTV Smarters Pro. Streamen Sie 50.000+ Sender in echtem 4K.',
    url: 'https://germanystreamtv.com/iptv-fire-stick',
  },
};

export default function IptvFireStickPage() {
  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <Breadcrumbs
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kompatible Geräte', path: '/devices' },
          { name: 'IPTV auf Fire Stick', path: '/iptv-fire-stick' },
        ]}
      />

      <DeviceGuide
        tagline="Amazon Fire TV Stick · In 5 Minuten startklar"
        h1={
          <>
            IPTV auf <span className="text-gradient">Fire Stick</span> installieren
          </>
        }
        image={{ src: '/images/firestick.png', alt: 'Amazon Fire TV Stick für IPTV' }}
        intro={
          <>
            <p>
              Der <strong className="text-gray-200">Amazon Fire TV Stick</strong> ist das beliebteste Gerät für IPTV in
              Deutschland – günstig, klein und blitzschnell eingerichtet. Mit dieser Anleitung installieren Sie IPTV auf
              Ihrem Fire Stick in unter 5 Minuten und streamen über 50.000 Live-Sender in echtem 4K mit HDR10+.
            </p>
            <p>
              Sie brauchen lediglich Ihre <strong className="text-gray-200">GermanyStreamTV.com-Zugangsdaten</strong> (Xtream Codes
              API oder M3U-Wiedergabeliste), die Sie nach dem Kauf sofort per E-Mail erhalten.
            </p>
          </>
        }
        steps={[
          'Öffnen Sie auf dem Fire TV Stick „Einstellungen“ → „Mein Fire TV“ → „Entwickleroptionen“ und aktivieren Sie „Apps aus unbekannten Quellen“.',
          'Suchen Sie im Amazon Appstore nach der App „Downloader“ und installieren Sie sie.',
          'Öffnen Sie Downloader und geben Sie den App-Code für TiviMate oder IPTV Smarters Pro ein, um die APK herunterzuladen.',
          'Installieren Sie die App, öffnen Sie sie und wählen Sie „Mit Xtream Codes API anmelden“.',
          'Geben Sie Portal-URL, Benutzername und Passwort aus Ihrer GermanyStreamTV.com-Aktivierungs-E-Mail ein – die Senderliste lädt automatisch.',
          'Fertig: Streamen Sie 50.000+ Sender, Sport und 180.000+ Filme & Serien in echtem 4K.',
        ]}
        apps={[
          { name: 'TiviMate', note: 'Beste Benutzeroberfläche, automatisches EPG-Layout und sehr reaktionsschnell – der Favorit auf dem Fire Stick.' },
          { name: 'IPTV Smarters Pro', note: 'Kostenlos, unterstützt Xtream Codes API & M3U und läuft stabil auf jedem Fire TV Modell.' },
          { name: 'XCIPTV', note: 'Leistungsstarker Player mit Multi-Screen-Ansicht und flexiblen Einstellungen für Power-User.' },
        ]}
        benefits={[
          'Läuft auf Fire TV Stick, Stick 4K, 4K Max & Fire TV Cube',
          'Echtes 4K Ultra HD mit HDR10+',
          'EPG-Programmführer & Catch-Up TV',
          'Freischaltung in 60 Sekunden',
          'Ohne Vertrag – monatlich kündbar',
          '24/7 deutschsprachiger Support',
        ]}
        related={[
          { href: '/iptv-samsung-tv', title: 'IPTV auf Samsung TV', desc: 'Anleitung für Samsung Smart TVs mit Tizen.' },
          { href: '/iptv-lg-tv', title: 'IPTV auf LG TV', desc: 'Einrichtung auf LG Smart TVs mit webOS.' },
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
