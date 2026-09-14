'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// Public GA4 measurement ID (client-side identifier, not a secret).
const GA_ID = 'G-JJYFPHSXMQ';
const STORAGE_KEY = 'gsttv-consent'; // 'granted' | 'denied'

type Consent = 'unknown' | 'granted' | 'denied';

/**
 * GDPR consent-gated Google Analytics.
 * - No GA script, no cookies, and no network calls to Google occur before the
 *   visitor explicitly clicks "Akzeptieren".
 * - The decision is stored in localStorage; the banner does not reappear until
 *   the choice is withdrawn (footer "Cookie-Einstellungen" dispatches
 *   `open-cookie-consent`).
 */
export default function CookieConsent() {
  const [consent, setConsent] = useState<Consent>('unknown');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'granted' || stored === 'denied') setConsent(stored);
    } catch {
      /* localStorage unavailable — show the banner as if undecided */
    }
    const reopen = () => setConsent('unknown');
    window.addEventListener('open-cookie-consent', reopen);
    return () => window.removeEventListener('open-cookie-consent', reopen);
  }, []);

  const decide = (value: 'granted' | 'denied') => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore write failures */
    }
    setConsent(value);
  };

  return (
    <>
      {/* Google Analytics — mounted ONLY after explicit consent */}
      {consent === 'granted' && (
        <>
          <Script
            id="ga-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
          </Script>
        </>
      )}

      {/* Consent banner — shown only when no decision has been stored yet */}
      {mounted && consent === 'unknown' && (
        <div
          role="dialog"
          aria-label="Cookie-Einwilligung"
          aria-live="polite"
          className="fixed inset-x-0 bottom-0 z-[70] border-t border-border-subtle bg-[#0a0a0a]/95 backdrop-blur-md px-4 py-4 sm:px-6 animate-fade-in"
        >
          <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-3xl">
              Wir setzen Cookies nur mit Ihrer Einwilligung. Mit „Akzeptieren“ erlauben Sie uns,
              anonymisierte Nutzungsstatistiken mit Google Analytics zu erheben, um unsere Website zu
              verbessern. Ohne Einwilligung werden keine Analyse-Cookies gesetzt. Sie können Ihre Wahl
              jederzeit widerrufen. Mehr dazu in unserer{' '}
              <Link href="/cookies" className="text-primary-500 hover:underline">Cookie-Information</Link>{' '}
              und{' '}
              <Link href="/datenschutz" className="text-primary-500 hover:underline">Datenschutzerklärung</Link>.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide('denied')}
                className="inline-flex h-11 items-center justify-center rounded-md border border-border-subtle bg-surface px-5 text-sm font-semibold text-white hover:bg-surface-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                Ablehnen
              </button>
              <button
                type="button"
                onClick={() => decide('granted')}
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary-500 px-6 text-sm font-bold text-black hover:bg-primary-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
