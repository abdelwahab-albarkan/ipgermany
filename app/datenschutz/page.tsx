import React from 'react';
import type { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung | GermanyStreamTV.com',
  description: 'Informationen zur Verarbeitung personenbezogener Daten auf dieser Website gemäß DSGVO.',
  alternates: { canonical: '/datenschutz' },
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

export default function DatenschutzPage() {
  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-6">
      <h1 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
        Datenschutz<span className="text-primary-500">erklärung</span>
      </h1>

      <div className="prose prose-invert flex flex-col gap-6 text-sm sm:text-base text-gray-400 leading-relaxed">
        <p>
          Diese Datenschutzerklärung informiert über die Verarbeitung personenbezogener Daten beim
          Besuch dieser Website gemäß der Datenschutz-Grundverordnung (DSGVO). Sie beschreibt
          ausschließlich die tatsächlich auf dieser Website eingesetzten Technologien. Die
          Abwicklung von Bestellungen und Zahlungen findet auf einem separaten Bestellsystem statt
          (siehe Abschnitt 6).
        </p>

        <h2 className="text-xl font-bold text-white mt-6">1. Verantwortlicher</h2>
        <p>Verantwortlicher im Sinne der DSGVO ist der Betreiber dieser Website.</p>
        <Placeholder>
          <p>
            Name/Firma und ladungsfähige Anschrift des Verantwortlichen (identisch mit dem Impressum).
            Falls eine Bestellung zur Benennung eines Datenschutzbeauftragten besteht, sind dessen
            Kontaktdaten hier zu ergänzen – andernfalls ist keine Angabe erforderlich.
          </p>
        </Placeholder>
        <p>
          Kontakt in Datenschutzfragen:{' '}
          <a href={`mailto:${SITE_CONFIG.supportEmail}`} className="text-primary-500 hover:underline">
            {SITE_CONFIG.supportEmail}
          </a>
        </p>

        <h2 className="text-xl font-bold text-white mt-6">2. Server-Logdaten (Hosting)</h2>
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter automatisch Informationen in
          Server-Logfiles erfasst, die Ihr Browser übermittelt: IP-Adresse, Datum und Uhrzeit des
          Zugriffs, aufgerufene Seite, verwendeter Browsertyp und Betriebssystem. Diese Verarbeitung
          erfolgt zur Bereitstellung und technischen Sicherheit der Website auf Grundlage unseres
          berechtigten Interesses (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <Placeholder>
          <p>
            Name und Anschrift des Hosting-Anbieters sowie ggf. Bestehen eines
            Auftragsverarbeitungsvertrags (Art. 28 DSGVO) und die konkrete Speicherdauer der Logfiles
            sind vom Betreiber zu ergänzen. Es wird bewusst keine Speicherdauer erfunden.
          </p>
        </Placeholder>

        <h2 className="text-xl font-bold text-white mt-6">3. Keine Cookies, kein Tracking, keine Analyse</h2>
        <p>
          Diese Website setzt <strong>keine Cookies</strong> und nutzt <strong>keine</strong> Web-Analyse-,
          Tracking- oder Werbedienste (kein Google Analytics, kein Google Tag Manager, kein Meta Pixel,
          keine sonstigen Zähl- oder Profiling-Werkzeuge). Es findet keine Speicherung von Informationen
          in Ihrem Browser über <code>localStorage</code> oder <code>sessionStorage</code> zu Analysezwecken
          statt. Weitere Details finden Sie in unserer{' '}
          <a href="/cookies" className="text-primary-500 hover:underline">Cookie-Information</a>.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">4. Schriftarten (lokal gehostet)</h2>
        <p>
          Die verwendeten Schriftarten werden lokal von unserem eigenen Server ausgeliefert. Es besteht
          <strong> keine</strong> Verbindung zu Google Fonts oder anderen externen Schrift-Servern; es
          werden hierbei keine Daten an Dritte übertragen.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">5. Eingebundene Medien von Drittanbietern</h2>
        <p>
          Auf einzelnen Seiten (z. B. der Startseite) werden Vorschaubilder zu Filmen und Serien
          angezeigt, die technisch von externen Bild-Servern geladen werden. Dabei wird Ihre IP-Adresse
          an den jeweiligen Anbieter übertragen, was technisch erforderlich ist, damit die Bilder in
          Ihrem Browser dargestellt werden können (Art. 6 Abs. 1 lit. f DSGVO). Betroffene Anbieter sind:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>
            <strong>TMDB</strong> (The Movie Database, Betrieb in den USA) – Auslieferung von Film- und
            Serien-Postern über <code>image.tmdb.org</code>.
          </li>
          <li>
            <strong>Unsplash</strong> (Betrieb in den USA) – vereinzelt als Ersatz-Vorschaubilder über{' '}
            <code>images.unsplash.com</code>.
          </li>
        </ul>
        <p>
          Diese Anbieter können bei der Auslieferung Ihre IP-Adresse verarbeiten. Es findet eine
          Übermittlung in ein Drittland (USA) statt. Details zur Ausgestaltung geeigneter Garantien
          gemäß Art. 44 ff. DSGVO sind vom Betreiber zu prüfen.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">6. Bestellung & Zahlung (externes System)</h2>
        <p>
          Der Bestell- und Bezahlvorgang findet nicht auf dieser Website statt, sondern auf einem
          separaten Bestellsystem, zu dem die Schaltflächen „Jetzt abonnieren“ / „Kaufen“ verlinken.
          Die dort erhobenen Daten (z. B. E-Mail-Adresse, Zahlungsdaten) unterliegen der
          Datenschutzerklärung des jeweiligen Bestell- und Zahlungsdienstleisters.
        </p>
        <Placeholder>
          <p>
            Bezeichnung und Datenschutzhinweise des eingesetzten Bestell-/Checkout-Systems sowie der
            konkreten Zahlungsdienstleister (z. B. PayPal, Kreditkarten-Acquirer, Krypto-Gateway) sind
            vom Betreiber zu ergänzen.
          </p>
        </Placeholder>

        <h2 className="text-xl font-bold text-white mt-6">7. Kontaktaufnahme (E-Mail & WhatsApp)</h2>
        <p>
          Wenn Sie uns per E-Mail oder über WhatsApp kontaktieren, verarbeiten wir die von Ihnen
          mitgeteilten Angaben zur Bearbeitung Ihrer Anfrage (Art. 6 Abs. 1 lit. b bzw. lit. f DSGVO).
          Bei Nutzung von WhatsApp erfolgt die Verarbeitung zusätzlich durch die WhatsApp Ireland Ltd. /
          Meta gemäß deren Datenschutzbestimmungen. Das auf der Website vorhandene Kontaktformular
          übermittelt derzeit technisch keine Daten an uns; die Kontaktaufnahme erfolgt über die
          genannten Kanäle.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">8. Ihre Rechte</h2>
        <p>Sie haben nach der DSGVO das Recht auf:</p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Auskunft (Art. 15), Berichtigung (Art. 16) und Löschung (Art. 17),</li>
          <li>Einschränkung der Verarbeitung (Art. 18) und Datenübertragbarkeit (Art. 20),</li>
          <li>Widerspruch gegen die Verarbeitung auf Grundlage berechtigter Interessen (Art. 21),</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3).</li>
        </ul>
        <p>
          Ihnen steht zudem ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu (Art. 77 DSGVO).
          Zur Ausübung Ihrer Rechte genügt eine Nachricht an die oben genannte E-Mail-Adresse.
        </p>
      </div>
    </div>
  );
}
