import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#07090C',
          900: '#0A0E12',
          800: '#0F1419',
          700: '#151B22',
          600: '#1C242C',
        },
        trace: {
          DEFAULT: '#4DD9C7',
          bright: '#7CF0E0',
          dim: '#2A6B63',
        },
        solder: {
          DEFAULT: '#F2A65A',
          bright: '#FFC182',
        },
        ink: {
          DEFAULT: '#E8ECEF',
          muted: '#8B98A5',
          faint: '#5B6672',
        },
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-plex-sans)', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      backgroundImage: {
        'circuit-glow':
          'radial-gradient(60% 50% at 50% 0%, rgba(77,217,199,0.14) 0%, rgba(10,14,18,0) 70%)',
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
      },
      keyframes: {
        blink: { '0%,49%': { opacity: '1' }, '50%,100%': { opacity: '0' } },
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        traceDraw: {
          from: { strokeDashoffset: '1000' },
          to: { strokeDashoffset: '0' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        floaty: 'floaty 6s ease-in-out infinite',
        traceDraw: 'traceDraw 2.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
