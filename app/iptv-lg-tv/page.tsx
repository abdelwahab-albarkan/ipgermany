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
  title: 'IPTV auf LG Smart TV installieren 2026 (webOS) | GermanyStreamTV.com',
  description:
    'IPTV auf LG Smart TV (webOS) einrichten ✓ Schritt-für-Schritt-Anleitung mit Smart IPTV, IBO Player & IPTV Smarters Pro ✓ Direkt am TV, ohne PC ✓ 50.000+ Sender in echtem 4K. Jetzt starten!',
  alternates: { canonical: '/iptv-lg-tv' },
  keywords: [
    'IPTV LG TV',
    'IPTV auf LG Smart TV installieren',
    'LG TV IPTV App',
    'IPTV webOS',
    'beste IPTV App für LG TV',
    'Smart IPTV LG',
  ],
  openGraph: {
    title: 'IPTV auf LG Smart TV installieren 2026 (webOS) | GermanyStreamTV.com',
    description:
      'LG Smart TV IPTV einrichten mit Smart IPTV, IBO Player & IPTV Smarters Pro – direkt am webOS-Fernseher. 50.000+ Sender in echtem 4K.',
    url: 'https://ipgermany.de/iptv-lg-tv',
  },
};

export default function IptvLgTvPage() {
  return (
    <>
      <JsonLd data={[productSchema(), faqSchema()]} />
      <Breadcrumbs
        items={[
          { name: 'Startseite', path: '/' },
          { name: 'Kompatible Geräte', path: '/devices' },
          { name: 'IPTV auf LG TV', path: '/iptv-lg-tv' },
        ]}
      />

      <DeviceGuide
        tagline="LG Smart TV · webOS"
        image={{ src: '/images/LG TV (webOS).png', alt: 'LG Smart TV (webOS) für IPTV' }}
        h1={
          <>
            IPTV auf <span className="text-gradient">LG Smart TV</span> installieren
          </>
        }
        intro={
          <>
            <p>
              Ihr <strong className="text-gray-200">LG Smart TV</strong> mit webOS bietet eine schnelle, flüssige
              Oberfläche – ideal für IPTV in bester Qualität. Diese Anleitung zeigt, wie Sie IPTV direkt auf Ihrem
              LG-Fernseher einrichten, ganz ohne zusätzliche Set-Top-Box.
            </p>
            <p>
              Alles, was Sie brauchen, sind Ihre <strong className="text-gray-200">GermanyStreamTV.com-Zugangsdaten</strong>
              (M3U-Wiedergabeliste oder Xtream Codes API), die Sie sofort nach dem Kauf per E-Mail bekommen.
            </p>
          </>
        }
        steps={[
          'Öffnen Sie den LG Content Store auf Ihrem webOS-Fernseher.',
          'Suchen Sie nach „Smart IPTV“, „IBO Player“ oder „IPTV Smarters Pro“ und installieren Sie die App.',
          'Starten Sie die App – notieren Sie sich die angezeigte MAC-Adresse Ihres LG TVs.',
          'Laden Sie am Computer oder Smartphone im Web-Portal der App Ihren GermanyStreamTV.com M3U-Link hoch.',
          'Alternativ melden Sie sich in IPTV Smarters Pro direkt mit Portal-URL, Benutzername und Passwort an.',
          'Fertig: Die Senderliste erscheint automatisch auf dem LG TV – jetzt in echtem 4K streamen.',
        ]}
        apps={[
          { name: 'Smart IPTV (SIPTV)', note: 'Bewährte App für LG webOS. Einmalige Aktivierung und komfortable Verwaltung über das Web-Portal.' },
          { name: 'IBO Player', note: 'Schnelle, aufgeräumte Oberfläche mit stabilem 4K-Playback – perfekt für LG-Fernseher.' },
          { name: 'IPTV Smarters Pro', note: 'Xtream-Codes-Login direkt am TV, mit integriertem EPG und VOD-Bereich.' },
        ]}
        benefits={[
          'Kompatibel mit LG webOS (2018 und neuer)',
          'Echtes 4K Ultra HD mit HDR10+',
          'EPG-Programmführer & Catch-Up TV',
          'Einrichtung direkt am TV – ohne PC',
          'Ohne Vertrag – monatlich kündbar',
          '24/7 deutschsprachiger Support',
        ]}
        related={[
          { href: '/iptv-samsung-tv', title: 'IPTV auf Samsung TV', desc: 'Anleitung für Samsung Smart TVs mit Tizen.' },
          { href: '/iptv-fire-stick', title: 'IPTV auf Fire Stick', desc: 'Die schnelle Alternative per Amazon Fire TV.' },
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
