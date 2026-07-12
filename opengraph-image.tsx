import { ImageResponse } from 'next/og';
import { profile } from '@/lib/data';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0E12',
          color: '#E8ECEF',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ fontSize: 28, color: '#4DD9C7', letterSpacing: 4, marginBottom: 24 }}>
          PORTFOLIO
        </div>
        <div style={{ fontSize: 84, fontWeight: 700, display: 'flex', gap: 16 }}>
          <span>{profile.name}</span>
        </div>
        <div style={{ fontSize: 28, color: '#8B98A5', marginTop: 20 }}>{profile.tagline}</div>
      </div>
    ),
    { ...size }
  );
}
