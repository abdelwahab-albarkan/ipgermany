import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Rückerstattungsrichtlinie | GermanyStreamTV.com',
  description: 'Informationen zu Erstattungen und zur freiwilligen Zufriedenheitsgarantie.',
  alternates: { canonical: '/refund' },
  robots: { index: false, follow: true },
};

function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-red-500/30 bg-red-500/5 p-5 text-sm text-gray-300 leading-relaxed">
      <p className="font-bold text-red-400 mb-2">⚠ Platzhalter – vor Veröffentlichung durch verifizierte Angaben ersetzen</p>
      {children}
    </div>
  );
}

export default function RefundPage() {
  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-6">
      <h1 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
        Rückerstattungs<span className="text-primary-500">richtlinie</span>
      </h1>

      <div className="prose prose-invert flex flex-col gap-6 text-sm sm:text-base text-gray-400 leading-relaxed">
        <h2 className="text-xl font-bold text-white mt-6">1. Gesetzliches Widerrufsrecht</h2>
        <p>
          Unabhängig von den nachfolgenden freiwilligen Regelungen gilt das gesetzliche Widerrufsrecht
          für Verbraucher. Die Einzelheiten – insbesondere zum vorzeitigen Erlöschen bei digitalen
          Inhalten – finden Sie in unserer{' '}
          <a href="/widerruf" className="text-primary-500 hover:underline">Widerrufsbelehrung</a>.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">2. Freiwillige Zufriedenheitsgarantie</h2>
        <Placeholder>
          <p>
            Falls eine Geld-zurück-Garantie beworben wird (z. B. „30 Tage“), müssen Frist, Bedingungen
            und Ausschlüsse mit der tatsächlichen Geschäftspraxis übereinstimmen und von der
            Geschäftsleitung bestätigt werden. Beworbene Garantien müssen tatsächlich eingehalten werden.
          </p>
        </Placeholder>
        <p>
          Sofern angeboten, kann eine freiwillige Zufriedenheitsgarantie greifen, wenn innerhalb der
          angegebenen Frist nach dem Kauf ein technisches Problem auftritt (z. B. anhaltende
          Verbindungsabbrüche oder Geräte-Inkompatibilität), das unser Support nicht beheben kann.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">3. Ausnahmen</h2>
        <p>Eine freiwillige Erstattung kann insbesondere ausgeschlossen sein, wenn:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>die Anfrage nach Ablauf der beworbenen Frist erfolgt,</li>
          <li>das Problem nachweislich durch eine unzureichende Internetverbindung des Nutzers verursacht wird,</li>
          <li>der Zugang wegen Verstoßes gegen die Nutzungsbedingungen gesperrt wurde.</li>
        </ul>
        <p className="text-xs text-gray-500">
          Hinweis: Freiwillige Ausschlüsse dürfen die zwingenden gesetzlichen Rechte der Verbraucher
          (Gewährleistung, Widerruf) nicht einschränken.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">4. Ablauf</h2>
        <p>
          Um eine Erstattung zu beantragen, kontaktieren Sie uns bitte per E-Mail unter{' '}
          <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-primary-500 hover:underline">
            {SITE_CONFIG.supportEmail}
          </a>{' '}
          oder über WhatsApp. Bitte nennen Sie die beim Kauf verwendete E-Mail-Adresse bzw. Ihre
          Bestellnummer sowie den Grund der Reklamation. Die Erstattung erfolgt auf demselben
          Zahlungsweg, den Sie beim Kauf verwendet haben.
        </p>
      </div>
    </div>
  );
}
