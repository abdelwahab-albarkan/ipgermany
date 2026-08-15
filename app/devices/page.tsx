import React from 'react';
import Link from 'next/link';
import DevicesSection from '@/components/sections/DevicesSection';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'IPTV auf Fire Stick, Samsung, LG & Android TV | GermanyStreamTV.com',
  description: 'IPTV auf jedem Gerät nutzen ✓ Fire TV Stick, Samsung Smart TV (Tizen), LG (webOS), Android TV, Google TV, Apple TV, MAG-Box & Smartphone ✓ Kompatibel mit TiviMate & IPTV Smarters Pro.',
  alternates: { canonical: '/devices' },
  keywords: [
    'IPTV Fire Stick',
    'IPTV Samsung TV',
    'IPTV LG TV',
    'IPTV Android TV',
    'IPTV Apple TV',
    'IPTV Google TV',
    'IPTV MAG Box',
    'IPTV App',
  ],
};

export default function DevicesPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          Kompatible <span className="text-primary-500">Geräte</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Wir unterstützen 99 % aller Streaming-Player und TV-Hardware-Konfigurationen. Finden Sie unten Ihr Gerät und sehen Sie die passende Einrichtungsanleitung.
        </p>
      </div>

      <DevicesSection showHeader={false} />

      {/* Device-specific setup guides (cluster links) */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <h2 className="font-spartan text-2xl sm:text-4xl font-black text-white uppercase tracking-tight text-center mb-4">
          Geräte-<span className="text-primary-500">Einrichtungsanleitungen</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm sm:text-base leading-relaxed text-center">
          Wählen Sie Ihr Gerät für eine ausführliche Schritt-für-Schritt-Anleitung auf Deutsch:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { href: '/iptv-fire-stick', title: 'IPTV auf Fire Stick', desc: 'Amazon Fire TV Stick in unter 5 Minuten einrichten – mit Downloader & TiviMate.' },
            { href: '/iptv-samsung-tv', title: 'IPTV auf Samsung TV', desc: 'Samsung Smart TV (Tizen) mit Smart IPTV & IBO Player – direkt am Fernseher.' },
            { href: '/iptv-lg-tv', title: 'IPTV auf LG TV', desc: 'LG Smart TV (webOS) einrichten – ohne PC, mit IPTV Smarters Pro.' },
            { href: '/iptv-android-tv', title: 'IPTV auf Android TV', desc: 'Android TV & Google TV mit TiviMate – direkt aus dem Play Store.' },
            { href: '/iptv-apple-tv', title: 'IPTV auf Apple TV', desc: 'Apple TV 4K (tvOS) mit IPTV Smarters – ganz ohne Jailbreak.' },
          ].map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group rounded-xl border border-border-subtle bg-surface-card/50 p-6 text-left shadow-card transition-all hover:-translate-y-1 hover:border-primary-500/40"
            >
              <div className="text-base font-bold text-white group-hover:text-primary-500 transition-colors mb-2">{g.title}</div>
              <p className="text-sm text-gray-400 leading-relaxed">{g.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Guide Links Grid */}
      <section className="pb-24 max-w-7xl mx-auto px-6 text-center">
        <h2 className="font-spartan text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-8">
          Bereit zur Installation?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed">
          Wir haben Schritt-für-Schritt-Anleitungen, mit denen Sie Apps wie TiviMate, Smart IPTV und IPTV Smarters Pro in wenigen Minuten einrichten.
        </p>
        <Link
          href="/install"
          className="inline-flex h-12 items-center justify-center rounded-md bg-primary-500 px-8 text-base font-bold text-black hover:bg-primary-600 transition-all"
        >
          Installationsanleitungen ansehen
        </Link>
      </section>

      <CTASection />
    </div>
  );
}
