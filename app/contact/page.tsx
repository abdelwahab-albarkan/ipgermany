import React from 'react';
import { Mail, MessageSquare, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import ContactForm from '@/components/common/ContactForm';

export const metadata = {
  title: 'IPTV Support & Kontakt: 24/7 Hilfe auf Deutsch | GermanyStreamTV.com',
  description: 'Haben Sie Fragen zu unseren IPTV-Tarifen oder benötigen Sie Hilfe bei der Einrichtung auf Ihrem Smart TV oder Fire Stick? Unser deutscher Kundenservice ist 24/7 per WhatsApp und E-Mail für Sie erreichbar.',
  alternates: { canonical: '/contact' },
  keywords: ['IPTV Support', 'IPTV Kontakt', 'IPTV Hilfe', 'IPTV Anbieter Kontakt', 'IPTV WhatsApp Support'],
};

export default function ContactPage() {
  const whatsappUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber.replace('+', '')}?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20den%20GermanyStreamTV.com%20IPTV-Abonnements.`;

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-6">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="font-spartan text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-6">
          Kundenservice & <span className="text-primary-500">Support</span>
        </h1>
        <p className="text-gray-400 text-base md:text-lg leading-relaxed">
          Fragen vor dem Kauf oder Unterstützung bei der App-Konfiguration? Unser deutsches Support-Team hilft Ihnen rund um die Uhr und in Rekordzeit bei all Ihren Anliegen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact info grid */}
        <div className="flex flex-col gap-6">
          {/* E-Mail Support Card */}
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-card/40 flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">E-Mail Kundenservice</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Senden Sie uns eine Anfrage bequem per E-Mail. Unser Support prüft Ihr Anliegen sofort und antwortet Ihnen garantiert in unter 2 Stunden.
              </p>
              <a
                href={`mailto:${SITE_CONFIG.supportEmail}`}
                className="text-sm font-bold text-primary-500 hover:underline"
              >
                {SITE_CONFIG.supportEmail}
              </a>
            </div>
          </div>

          {/* WhatsApp Support Card */}
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-card/40 flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
              <MessageSquare className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">WhatsApp Live-Support</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                Erhalten Sie blitzschnelle Antworten, Live-Hilfe bei der Einrichtung oder fordern Sie Ihren kostenlosen 24h-Testzugang an.
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-primary-500 hover:underline"
              >
                Jetzt Chat auf WhatsApp starten
              </a>
            </div>
          </div>

          {/* Quality & Trust Card */}
          <div className="p-6 rounded-xl border border-border-subtle bg-surface-card/40 flex gap-4 items-start">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary-500/10 text-primary-500">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white mb-2">Qualitätsversprechen & Support-Garantie</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                Unser kompetentes Team berät Sie auf Deutsch. Wir garantieren Ihnen absolute Vertraulichkeit, sichere Datenübertragung und eine problemlose Erstattung.
              </p>
              
              <div className="grid grid-cols-2 gap-4 border-t border-border-subtle/50 pt-4">
                <div>
                  <div className="text-xl font-black text-primary-500 font-spartan">99,8%</div>
                  <div className="text-xs text-gray-500 font-semibold">Kundenzufriedenheit</div>
                </div>
                <div>
                  <div className="text-xl font-black text-primary-500 font-spartan">&lt; 15 Min.</div>
                  <div className="text-xs text-gray-500 font-semibold">Ø WhatsApp Antwortzeit</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mini Trust Badges */}
          <div className="flex gap-8 px-6 mt-2">
            <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
              <Clock className="h-4 w-4 text-primary-500" />
              Aktiv 24/7/365
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 font-semibold">
              <CheckCircle className="h-4 w-4 text-primary-500" />
              30 Tage Geld-zurück
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 rounded-xl border border-border-subtle bg-surface-card/60">
          <h3 className="text-lg font-bold text-white mb-6">Nachricht senden</h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
