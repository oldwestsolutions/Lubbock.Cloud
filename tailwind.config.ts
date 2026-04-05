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
        nb: {
          black: '#050505',
          surface: '#0c0c0c',
          raised: '#121212',
          line: 'rgba(255,255,255,0.08)',
          lime: '#e0ff4f',
          'lime-hover': '#ecff6a',
          'lime-muted': 'rgba(224, 255, 79, 0.12)',
          cyan: '#cdf0fd',
          'cyan-muted': 'rgba(205, 240, 253, 0.14)',
          'cyan-text': '#9ee5f7',
        },
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
            950: '#0a0a0a',
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
          ink: '#f5f5f5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-outfit)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        soft: '0 32px 64px -16px rgba(0, 0, 0, 0.65)',
        glow: '0 0 48px rgba(224, 255, 79, 0.07)',
        'glow-red': '0 0 32px rgba(184, 92, 92, 0.06)',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.028) 1px, transparent 1px)',
        'grid-dense':
          'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
        'hero-fade':
          'radial-gradient(ellipse 90% 60% at 50% -15%, rgba(224, 255, 79, 0.09), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(205, 240, 253, 0.04), transparent)',
      },
      backgroundSize: {
        grid: '40px 40px',
        'grid-dense': '28px 28px',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 12px rgba(224, 255, 79, 0.05)' },
          '100%': { boxShadow: '0 0 36px rgba(224, 255, 79, 0.1)' },
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
