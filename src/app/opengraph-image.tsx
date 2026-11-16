import { ImageResponse } from 'next/og';
import { SITE_TAGLINE } from '@/lib/siteConfig';

/* Link preview image (1200x630) used when the site is shared on X, Discord,
 * Reddit and elsewhere. Built from the site logo, so no design file is needed.
 */

export const alt = `Talent Collective: ${SITE_TAGLINE}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const petals = [
  { cx: 0, cy: -20 },
  { cx: 17, cy: -10 },
  { cx: 17, cy: 10 },
  { cx: 0, cy: 20 },
  { cx: -17, cy: 10 },
  { cx: -17, cy: -10 },
];

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          background: '#f9f2e5',
          padding: '80px',
          gap: '64px',
          borderBottom: '24px solid #e05fa7',
        }}
      >
        <svg width="300" height="300" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="48" fill="#e05fa7" />
          <g transform="translate(50, 50) scale(0.42)">
            {petals.map((p) => (
              <circle
                key={`${p.cx}-${p.cy}`}
                cx={p.cx}
                cy={p.cy}
                r="16"
                fill="#f9f2e5"
                stroke="#1a1a1a"
                strokeWidth="2"
              />
            ))}
            <circle cx="0" cy="0" r="14" fill="#1a1a1a" />
          </g>
        </svg>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{ fontSize: 84, fontWeight: 800, color: '#1a1a1a', lineHeight: 1 }}>
            Talent Collective
          </div>
          <div style={{ fontSize: 40, color: '#3a3a3a', marginTop: 28, lineHeight: 1.25 }}>
            {SITE_TAGLINE}
          </div>
          <div style={{ fontSize: 28, color: '#c0398a', marginTop: 36, fontWeight: 700 }}>
            talent-collective.org
          </div>
        </div>
      </div>
    ),
    size,
  );
}
