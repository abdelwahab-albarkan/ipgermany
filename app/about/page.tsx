import React from 'react';
import Link from 'next/link';
import StatsBar from '@/components/sections/StatsBar';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Über GermanyStreamTV.com: Ihr Premium IPTV Anbieter',
  description: 'Erfahren Sie mehr über GermanyStreamTV.com. Gegründet von Netzwerk-Ingenieuren für erstklassiges, stabiles IPTV in Deutschland mit 99,9% Uptime, 26 Edge-Servern und echtem 24/7-Support.',
  alternates: { canonical: '/about' },
  keywords: [
    'germanystreamtv',
    'über germanystreamtv',
    'IPTV Anbieter',
    'IPTV Anbieter seriös',
    'IPTV Deutschland',
  ],
};

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          Über <span className="text-primary-500">GermanyStreamTV.com</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
          Die Vision hinter dem stabilsten Premium-IPTV-Netzwerk im deutschsprachigen Raum. Gegründet von IT- und Netzwerktechnikern für Fernsehen ohne Kompromisse.
        </p>
      </div>

      {/* Core values content split */}
      <section className="py-16 max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="font-spartan text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            Unsere Mission: Entertainment neu definiert
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-6">
            Die Idee zu GermanyStreamTV.com entstand aus Frustration über minderwertige IPTV-Anbieter. Bildausfälle bei wichtigen Bundesliga-Spielen, pixelige HD-Kanäle und ein träger Kundenservice waren früher die Regel. Als erfahrene IT-Spezialisten haben wir beschlossen, einen neuen Standard zu setzen. Wir haben ein eigenes, lastverteiltes CDN-Netzwerk mit 26 dedizierten Serverknoten in Europa aufgebaut.
          </p>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Dank moderner H.265-Videokompressions-Technologie bieten wir glasklares Streaming in echtem 4K/UHD ohne Verzögerungen. Bei uns kaufen Sie IPTV absolut risikofrei – ohne Abo-Zwang und mit einem persönlichen deutschen Support, der Ihnen in Echtzeit per WhatsApp zur Seite steht. Erfahren Sie mehr über unsere <Link href="/pricing" className="text-primary-500 hover:underline font-semibold">Tarife</Link> oder lesen Sie unsere <Link href="/faq" className="text-primary-500 hover:underline font-semibold">Hilfethemen</Link>.
          </p>
        </div>

        <div className="p-8 rounded-xl border border-border-subtle bg-surface-card flex flex-col gap-6">
          <div>
            <h4 className="text-base font-bold text-white mb-2">99,9% Uptime & Redundanz</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Unsere Netzwerktechniker überwachen das CDN rund um die Uhr. Sollte eine Quelle ausfallen, schaltet das System in Millisekunden auf eine Backup-Quelle um.
            </p>
          </div>
          <div className="border-t border-border-subtle/50 pt-6">
            <h4 className="text-base font-bold text-white mb-2">Deutscher Premium-Support</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Wir lassen Sie nicht alleine. Unser deutscher Support hilft Ihnen per WhatsApp oder E-Mail live und kompetent bei der Installation auf jedem beliebigen Endgerät.
            </p>
          </div>
        </div>
      </section>

      <StatsBar />
      <CTASection />
    </div>
  );
}
