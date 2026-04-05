import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tech: {
          red: '#7c2d2d',
          gray: {
            50: '#fafafa',
            100: '#f4f4f5',
            200: '#e4e4e7',
            300: '#d4d4d8',
            400: '#a1a1aa',
            500: '#71717a',
            600: '#52525b',
            700: '#3f3f46',
            800: '#27272a',
            900: '#18181b',
            950: '#0c0c0e',
          },
          blue: '#3f4f48',
        },
        lub: {
          accent: '#5eb896',
          'accent-muted': 'rgba(94, 184, 150, 0.12)',
          cta: '#1a4538',
          'cta-hover': '#234f42',
          green: '#6bc49a',
          'green-muted': 'rgba(107, 196, 154, 0.14)',
          red: '#b85c5c',
          'red-muted': 'rgba(184, 92, 92, 0.14)',
          'red-deep': '#722a2a',
          neutral: '#9ca3af',
          ink: '#fafafa',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      boxShadow: {
        soft: '0 24px 48px -12px rgba(0, 0, 0, 0.45)',
        glow: '0 0 32px rgba(94, 184, 150, 0.08)',
        'glow-red': '0 0 32px rgba(184, 92, 92, 0.06)',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.035) 1px, transparent 1px)',
        'grid-dense':
          'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        'hero-fade': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(94, 184, 150, 0.08), transparent)',
      },
      backgroundSize: {
        grid: '32px 32px',
        'grid-dense': '24px 24px',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 8px rgba(94, 184, 150, 0.06)' },
          '100%': { boxShadow: '0 0 24px rgba(94, 184, 150, 0.12)' },
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [],
};

export default config;
