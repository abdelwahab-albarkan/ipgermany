import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Impressum | GermanyStreamTV.com',
  description: 'Anbieterkennzeichnung gemäß § 5 DDG (Digitale-Dienste-Gesetz).',
  alternates: { canonical: '/impressum' },
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

export default function ImpressumPage() {
  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-6">
      <h1 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
        Impres<span className="text-primary-500">sum</span>
      </h1>

      <div className="prose prose-invert flex flex-col gap-6 text-sm sm:text-base text-gray-400 leading-relaxed">
        <p className="font-semibold text-white">
          Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
        </p>

        <h2 className="text-xl font-bold text-white mt-6">Diensteanbieter</h2>
        <p>Diese Website ({SITE_CONFIG.domain}, Marke „{SITE_CONFIG.name}“) wird betrieben von:</p>
        <Placeholder>
          <p>
            Vollständiger rechtlicher Name des Betreibers (Unternehmen bzw. natürliche Person),
            Rechtsform sowie ladungsfähige Anschrift (Straße, Hausnummer, Postleitzahl, Ort, Land).
          </p>
          <p className="mt-2">
            Diese Angaben sind gesetzlich zwingend erforderlich und liegen der Redaktion nicht vor.
            Es wird ausdrücklich <strong>keine</strong> Angabe zu Sitz oder Anschrift erfunden.
          </p>
        </Placeholder>

        <h2 className="text-xl font-bold text-white mt-6">Kontakt</h2>
        <p>
          E-Mail:{' '}
          <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-primary-500 hover:underline">
            {SITE_CONFIG.supportEmail}
          </a>
          <br />
          WhatsApp-Support: über die auf der Website verlinkte WhatsApp-Schaltfläche
        </p>

        <h2 className="text-xl font-bold text-white mt-6">Vertretungsberechtigte / Verantwortliche Person</h2>
        <Placeholder>
          <p>
            Name der vertretungsberechtigten Person(en) sowie – falls journalistisch-redaktionelle
            Inhalte angeboten werden – der oder die inhaltlich Verantwortliche gemäß § 18 Abs. 2 MStV
            mit Anschrift.
          </p>
        </Placeholder>

        <h2 className="text-xl font-bold text-white mt-6">Registereintrag & Umsatzsteuer</h2>
        <Placeholder>
          <p>
            Sofern vorhanden: Registergericht und Registernummer (z. B. Handelsregister/HRB) sowie
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG. Nur eintragen, wenn tatsächlich
            zutreffend – andernfalls diesen Abschnitt entfernen.
          </p>
        </Placeholder>

        <h2 className="text-xl font-bold text-white mt-6">Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach
          den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter
          jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
          oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
          Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
          Betreiber der Seiten verantwortlich.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">Online-Streitbeilegung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
          <a
            href="https://ec.europa.eu/consumers/odr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:underline"
          >
            https://ec.europa.eu/consumers/odr
          </a>
          . Ob und inwieweit eine Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle erfolgt, ist vom Betreiber festzulegen (siehe Platzhalter oben).
        </p>
      </div>
    </div>
  );
}
