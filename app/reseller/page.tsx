import React from 'react';
import { Layers, Users, TrendingUp, Landmark } from 'lucide-react';
import CTASection from '@/components/sections/CTASection';

export const metadata = {
  title: 'IPTV Reseller werden | GermanyStreamTV.com Reseller-Panel',
  description: 'Starten Sie Ihr eigenes IPTV-Geschäft mit GermanyStreamTV.com. Zugriff auf unser Premium-Reseller-Dashboard, verwalten Sie Kundenguthaben und erstellen Sie M3U-Links.',
  alternates: { canonical: '/reseller' },
};

export default function ResellerPage() {
  const features = [
    { icon: Layers, title: "Premium Admin-Dashboard", desc: "Erstellen Sie einfach individuelle Wiedergabelisten-Links, legen Sie Zugänge an, aktivieren Sie Testzugänge und verwalten Sie Verlängerungen in Echtzeit." },
    { icon: Users, title: "Sub-Reseller verwalten", desc: "Vergrößern Sie Ihr Netzwerk, indem Sie unter Ihren eigenen Panels Sub-Reseller anlegen und individuelle Preise festlegen." },
    { icon: TrendingUp, title: "Hohe Gewinnspanne", desc: "Reseller-Guthaben kauft Abonnements zu Großhandelspreisen – mit reichlich Spielraum für starke Einzelhandelsmargen." },
    { icon: Landmark, title: "Keine versteckten Kosten", desc: "Keine Panel-Aktivierungsgebühren oder Einrichtungskosten. Ihr Panel-Guthaben behält seinen Wert unbegrenzt." }
  ];

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-1.5 text-xs font-semibold text-primary-500 mb-6">
          PARTNERPROGRAMM
        </div>
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          IPTV <span className="text-primary-500">Reseller-Panel</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Starten Sie noch heute Ihr eigenes Streaming-Geschäft. Verwalten Sie Guthaben, erstellen Sie Abonnements und verteilen Sie Zugangslinks über unser sicheres Dashboard.
        </p>
      </div>

      {/* Features Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((item, index) => {
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

      {/* Reseller Credit pricing cards */}
      <section className="py-24 max-w-7xl mx-auto px-6 bg-surface/30 border-y border-border-subtle">
        <h2 className="font-spartan text-2xl sm:text-4xl font-black text-white uppercase tracking-tight text-center mb-16">
          Reseller <span className="text-primary-500">Guthaben-Pakete</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-border-subtle bg-surface-card/50 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Starter-Reseller</h3>
              <div className="text-3xl font-black text-white mb-6">250 € <span className="text-xs text-gray-500">einmalig</span></div>
              <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-8 list-disc pl-5">
                <li>Inklusive 50 Panel-Guthaben</li>
                <li>Zugriff auf alle Live-TV- und VOD-Inhalte</li>
                <li>Keine Aktivierungsgebühren</li>
                <li>Kostenlose Panel-Einrichtungshilfe</li>
              </ul>
            </div>
            <a href="mailto:support@ipgermany.de?subject=Reseller%20Starter" className="flex h-11 items-center justify-center rounded-md border border-border-subtle bg-surface hover:bg-surface-hover text-sm font-semibold text-white transition-colors">
              Panel kaufen
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-primary-500 bg-surface-card flex flex-col justify-between relative shadow-xl shadow-primary-500/5">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary-500 px-4 py-1 text-xs font-bold text-black uppercase tracking-wider">
              Bestseller
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Pro-Reseller</h3>
              <div className="text-3xl font-black text-white mb-6">500 € <span className="text-xs text-gray-500">einmalig</span></div>
              <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-8 list-disc pl-5">
                <li>Inklusive 120 Panel-Guthaben</li>
                <li>Zugriff auf alle Live-TV- und VOD-Inhalte</li>
                <li>Eigene Sub-Reseller anlegen</li>
                <li>Priorisierter WhatsApp-Support</li>
              </ul>
            </div>
            <a href="mailto:support@ipgermany.de?subject=Reseller%20Pro" className="flex h-11 items-center justify-center rounded-md bg-primary-500 hover:bg-primary-600 text-sm font-bold text-black transition-all">
              Panel kaufen
            </a>
          </div>

          <div className="p-8 rounded-2xl border border-border-subtle bg-surface-card/50 flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Enterprise-Reseller</h3>
              <div className="text-3xl font-black text-white mb-6">1.000 € <span className="text-xs text-gray-500">einmalig</span></div>
              <ul className="flex flex-col gap-3 text-sm text-gray-400 mb-8 list-disc pl-5">
                <li>Inklusive 300 Panel-Guthaben</li>
                <li>Zugriff auf alle Live-TV- und VOD-Inhalte</li>
                <li>Eigene Sub-Reseller anlegen</li>
                <li>Whitelabel-DNS-Branding-Support</li>
              </ul>
            </div>
            <a href="mailto:support@ipgermany.de?subject=Reseller%20Enterprise" className="flex h-11 items-center justify-center rounded-md border border-border-subtle bg-surface hover:bg-surface-hover text-sm font-semibold text-white transition-colors">
              Panel kaufen
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
