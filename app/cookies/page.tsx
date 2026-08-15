import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie-Information | GermanyStreamTV.com',
  description: 'Informationen zum Einsatz von Cookies und ähnlichen Technologien auf dieser Website.',
  alternates: { canonical: '/cookies' },
  robots: { index: false, follow: true },
};

export default function CookiesPage() {
  return (
    <div className="py-12 md:py-20 max-w-3xl mx-auto px-6">
      <h1 className="font-spartan text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-8">
        Cookie-<span className="text-primary-500">Information</span>
      </h1>

      <div className="prose prose-invert flex flex-col gap-6 text-sm sm:text-base text-gray-400 leading-relaxed">
        <h2 className="text-xl font-bold text-white mt-6">Diese Website verwendet keine Cookies</h2>
        <p>
          Nach dem aktuellen Stand der Technik setzt diese Website <strong>keine Cookies</strong> und
          verwendet <strong>keine</strong> ähnlichen Technologien zur Speicherung von Informationen auf
          Ihrem Endgerät (z. B. <code>localStorage</code> oder <code>sessionStorage</code>) zu Analyse-,
          Tracking- oder Marketingzwecken.
        </p>
        <p>
          Es sind insbesondere <strong>keine</strong> der folgenden Dienste eingebunden:
        </p>
        <ul className="list-disc pl-5 flex flex-col gap-2">
          <li>Google Analytics, Google Tag Manager oder andere Web-Analyse-Dienste,</li>
          <li>Meta/Facebook Pixel oder sonstige Werbe- und Retargeting-Skripte,</li>
          <li>eingebettete YouTube-, Karten- oder Chat-Widgets, die Cookies setzen,</li>
          <li>externe Schriftarten-Server (die Schriften werden lokal ausgeliefert).</li>
        </ul>

        <h2 className="text-xl font-bold text-white mt-6">Einwilligungsbanner</h2>
        <p>
          Da keine einwilligungspflichtigen Cookies oder Tracking-Technologien zum Einsatz kommen, ist
          kein Cookie-Einwilligungsbanner erforderlich. Sollten künftig einwilligungspflichtige Dienste
          eingebunden werden, wird zuvor eine entsprechende Einwilligungslösung bereitgestellt und diese
          Seite aktualisiert.
        </p>

        <h2 className="text-xl font-bold text-white mt-6">Externe Inhalte</h2>
        <p>
          Auf einzelnen Seiten werden Vorschaubilder von externen Bild-Servern (z. B. TMDB, Unsplash)
          geladen. Hierbei wird technisch bedingt Ihre IP-Adresse an den jeweiligen Anbieter übermittelt;
          es werden dabei jedoch keine Cookies auf dieser Website gesetzt. Einzelheiten hierzu finden Sie
          in unserer{' '}
          <a href="/datenschutz" className="text-primary-500 hover:underline">Datenschutzerklärung</a>.
        </p>
      </div>
    </div>
  );
}
