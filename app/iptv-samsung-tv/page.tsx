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
  title: 'IPTV auf Samsung Smart TV installieren 2026 | GermanyStreamTV.com',
  description:
    'IPTV auf Samsung Smart TV (Tizen) einrichten ✓ Schritt-für-Schritt-Anleitung mit Smart IPTV, IBO Player & IPTV Smarters Pro ✓ Ohne PC, direkt am TV ✓ 50.000+ Sender in 4K. Jetzt loslegen!',
  alternates: { canonical: '/iptv-samsung-tv' },
  keywords: [
    'IPTV Samsung TV',
    'IPTV auf Samsung Smart TV installieren',
    'Samsung TV IPTV App',
    'IPTV Tizen',
    'beste IPTV App für Samsung TV',
    'Smart IPTV Samsung',
  ],
  openGraph: {
    title: 'IPTV auf Samsung Smart TV installieren 2026 | GermanyStreamTV.com',
    description:
      'Samsung Smart TV IPTV einrichten mit Smart IPTV, IBO Player & IPTV Smarters Pro – direkt am Fernseher, ohne PC. 50.000+ Sender in 4K.',
    url: 'https://ipgermany.de/iptv-samsung-tv',
  },
};

export default function IptvSamsungTvPage() {
  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <Breadcrumbs
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kompatible Geräte', path: '/devices' },
          { name: 'IPTV auf Samsung TV', path: '/iptv-samsung-tv' },
        ]}
      />

      <DeviceGuide
        tagline="Samsung Smart TV · Tizen OS"
        image={{ src: '/images/samsungsmarttv.png', alt: 'Samsung Smart TV (Tizen) für IPTV' }}
        h1={
          <>
            IPTV auf <span className="text-gradient">Samsung Smart TV</span> installieren
          </>
        }
        intro={
          <>
            <p>
              Ihr <strong className="text-gray-200">Samsung Smart TV</strong> mit Tizen-Betriebssystem ist perfekt für
              IPTV geeignet – der große Bildschirm liefert das beste Streaming-Erlebnis. Mit dieser Anleitung richten Sie
              IPTV direkt am Fernseher ein, ganz ohne zusätzliche Hardware.
            </p>
            <p>
              Sie benötigen nur Ihre <strong className="text-gray-200">GermanyStreamTV.com-Zugangsdaten</strong> (M3U-Wiedergabeliste
              oder Xtream Codes API), die Sie sofort nach dem Kauf per E-Mail erhalten.
            </p>
          </>
        }
        steps={[
          'Öffnen Sie den Samsung Smart Hub (App Store) auf Ihrem Fernseher.',
          'Suchen Sie nach „Smart IPTV“, „IBO Player“ oder „IPTV Smarters Pro“ und installieren Sie die App.',
          'Starten Sie die App – auf dem Bildschirm wird die MAC-Adresse Ihres Geräts angezeigt. Notieren Sie sie.',
          'Öffnen Sie am Computer oder Smartphone das Portal der App und laden Sie Ihren GermanyStreamTV.com M3U-Link (oder die Xtream-Daten) hoch.',
          'Alternativ geben Sie in IPTV Smarters Pro direkt Portal-URL, Benutzername und Passwort ein.',
          'Fertig: Ihre Senderliste erscheint automatisch auf dem Samsung TV – jetzt in 4K streamen.',
        ]}
        apps={[
          { name: 'Smart IPTV (SIPTV)', note: 'Der Klassiker für Samsung Tizen. Einmalige Aktivierung, sehr stabil und einfach über das Web-Portal zu befüllen.' },
          { name: 'IBO Player', note: 'Moderne Oberfläche, meistert hochbitratiges 4K-Streaming mühelos und ist schnell eingerichtet.' },
          { name: 'IPTV Smarters Pro', note: 'Unterstützt die Xtream Codes API direkt am TV – kein PC nötig, ideal für Einsteiger.' },
        ]}
        benefits={[
          'Kompatibel mit Samsung Tizen (2018 und neuer)',
          'Echtes 4K Ultra HD mit HDR10+',
          'EPG-Programmführer & Catch-Up TV',
          'Einrichtung direkt am TV – ohne PC',
          'Ohne Vertrag – monatlich kündbar',
          '24/7 deutschsprachiger Support',
        ]}
        related={[
          { href: '/iptv-lg-tv', title: 'IPTV auf LG TV', desc: 'Einrichtung auf LG Smart TVs mit webOS.' },
          { href: '/iptv-fire-stick', title: 'IPTV auf Fire Stick', desc: 'Die schnelle Alternative per Amazon Fire TV.' },
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
