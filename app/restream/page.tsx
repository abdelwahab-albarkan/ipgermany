import React from 'react';
import { Activity, ShieldAlert, Cpu, Heart } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'Dedizierte Raw-IPTV-Restream-Lines | GermanyStreamTV.com',
  description: 'Kaufen Sie rohe IPTV-Streams für Ihren eigenen Server. Stabile H.264/H.265-Restream-Lines mit dedizierten lokalen Caching-Nodes.',
  alternates: { canonical: '/restream' },
};

export default function RestreamPage() {
  const highlights = [
    { icon: Activity, title: "Stabile H.264/H.265-Streams", desc: "Zugriff auf hochperformante, komprimierte Video-Codecs, abgestimmt auf moderne Server-Bandbreiten." },
    { icon: ShieldAlert, title: "Lastverteilte Architektur", desc: "Unsere Streaming-Feeds verteilen Verbindungen automatisch und vermeiden Freeze-Probleme bei Sportereignissen." },
    { icon: Cpu, title: "Robuste Port-Auslieferung", desc: "Dedizierte Hochbandbreiten-Port-Netzwerke ermöglichen die Auslieferung großer Stream-Datenmengen." },
    { icon: Heart, title: "24/7-Überwachung", desc: "Unsere Techniker überwachen die Lines kontinuierlich und wechseln bei Ausfall die Quellverbindungen." }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-500 mb-6">
          RAW FEEDS
        </div>
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          IPTV <span className="text-primary-500">Restream-Feeds</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Sie brauchen Premium-Feeds für Ihre eigenen Server oder Panels? Wir liefern rohe H.264/H.265-Sender mit hoher Uptime-Leistung.
        </p>
      </div>

      {/* Grid Highlights */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="p-8 rounded-xl border border-border-subtle bg-surface-card/40 flex flex-col gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-bold text-white mt-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          );
        })}
      </section>

      {/* Contact box */}
      <section className="py-24 max-w-4xl mx-auto px-6 text-center">
        <div className="p-8 md:p-12 rounded-xl border border-border-subtle bg-surface-card/60">
          <h2 className="font-spartan text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-6">
            Individuelle Restream-Pakete
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8">
            Aufgrund der Bandbreiten-Anforderungen passen wir die Preise für Raw-Feeds individuell an die benötigte Senderanzahl und die gleichzeitig aktiven Nutzer-Ports an.
          </p>
          <a
            href="mailto:support@ipgermany.de?subject=IPTV%20Restream%20Anfrage"
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary-500 px-8 text-base font-bold text-black hover:bg-primary-600 transition-all"
          >
            Restream-Angebot anfragen
          </a>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
