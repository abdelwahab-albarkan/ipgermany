import type { Metadata } from 'next';
import { Cairo, Tajawal } from 'next/font/google';
import './globals.css';
import LayoutWrapper from '@/components/common/LayoutWrapper';
import JsonLd from '@/components/common/JsonLd';
import { organizationSchema, websiteSchema } from '@/lib/structured-data';

// German-only site: load the Latin subset only. Dropping the unused Arabic
// glyph range keeps the identical typeface while cutting font payload (perf/LCP).
const cairo = Cairo({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const tajawal = Tajawal({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
});

const SITE_NAME = 'GermanyStreamTV.com';
const DEFAULT_TITLE = 'GermanyStreamTV.com | Premium IPTV-Abonnement in Deutschland';
const DEFAULT_DESCRIPTION =
  'Streamen Sie über 50.000 Live-TV-Sender, 1.800+ Sportkanäle und 180.000+ Filme & Serien in echtem 4K mit HDR10+ ohne Ruckeln. Einfache Einrichtung auf Firestick, Smart-TVs, Apple TV und mehr.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ipgermany.de'),
  // Each page provides its own full title (already brand-suffixed); no template
  // to avoid a doubled "| GermanyStreamTV.com".
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    'IPTV',
    'IPTV Abonnement',
    'IPTV Deutschland',
    'IPTV kaufen',
    'Premium IPTV',
    'Live TV Streaming',
    '4K IPTV',
    'Firestick IPTV',
    'Smart TV IPTV',
    'Sport streamen',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://ipgermany.de',
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: '@GermanyStreamTV',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
};

export const viewport = {
  themeColor: '#10D96F',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" dir="ltr" className={`${cairo.variable} ${tajawal.variable}`}>
      <body className="bg-background text-gray-100 font-sans antialiased overflow-x-hidden">
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <LayoutWrapper>
          {children}
        </LayoutWrapper>
      </body>
    </html>
  );
}
