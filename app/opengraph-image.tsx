import { ImageResponse } from 'next/og';

// Branded default social-share card, generated at the edge (no image asset needed).
export const runtime = 'edge';
export const alt = 'GermanyStreamTV.com — Premium IPTV-Abonnement in Deutschland';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          background: 'radial-gradient(circle at 30% 20%, #0c2a1c 0%, #070707 55%)',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 40,
            fontWeight: 800,
            color: '#10D96F',
            letterSpacing: '-2px',
          }}
        >
          ● GermanyStreamTV.com
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 76,
            fontWeight: 900,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: '-3px',
            maxWidth: 900,
          }}
        >
          Premium IPTV-Abonnement in 4K
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 34,
            color: '#a9b3ad',
            maxWidth: 880,
          }}
        >
          50.000+ Live-Sender · 180.000+ VODs · Ohne Ruckeln
        </div>
        <div
          style={{
            marginTop: 48,
            display: 'flex',
            fontSize: 30,
            fontWeight: 700,
            color: '#070707',
            background: '#10D96F',
            padding: '16px 40px',
            borderRadius: 9999,
            alignSelf: 'flex-start',
          }}
        >
          germanystreamtv.com
        </div>
      </div>
    ),
    { ...size },
  );
}
