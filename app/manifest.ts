import { MetadataRoute } from 'next';
import { SITE_CONFIG } from '@/lib/constants';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_CONFIG.name} | Premium IPTV-Abonnement`,
    short_name: SITE_CONFIG.name,
    description:
      'Premium IPTV-Abonnement: über 50.000 Live-TV-Sender, Sport und 180.000+ Filme & Serien in 4K ohne Ruckeln.',
    start_url: '/',
    display: 'standalone',
    background_color: '#070707',
    theme_color: '#10D96F',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
