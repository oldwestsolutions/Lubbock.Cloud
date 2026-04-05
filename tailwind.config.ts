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
        /* Comp USA–style retail tech: black floor, gunmetal panels, brushed silver CTAs */
        nb: {
          black: '#000000',
          surface: '#0a0a0a',
          raised: '#141414',
          line: 'rgba(255,255,255,0.07)',
          /* Token name retained for fewer class renames — reads as chrome/silver */
          lime: '#c6c6c6',
          'lime-hover': '#dcdcdc',
          'lime-muted': 'rgba(198, 198, 198, 0.14)',
          cyan: '#9ca3af',
          'cyan-muted': 'rgba(156, 163, 175, 0.12)',
          'cyan-text': '#aeb4bf',
        },
        tech: {
          red: '#525252',
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
          blue: '#52525b',
        },
        lub: {
          accent: '#b0b0b0',
          'accent-muted': 'rgba(176, 176, 176, 0.12)',
          cta: '#2a2a2a',
          'cta-hover': '#383838',
          green: '#d4d4d4',
          'green-muted': 'rgba(212, 212, 212, 0.1)',
          red: '#6b6b6b',
          'red-muted': 'rgba(107, 107, 107, 0.14)',
          'red-deep': '#1f1f1f',
          neutral: '#9ca3af',
          ink: '#ececec',
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
        soft: '0 32px 64px -16px rgba(0, 0, 0, 0.72)',
        glow: '0 0 48px rgba(255, 255, 255, 0.04)',
        'glow-red': '0 0 32px rgba(0, 0, 0, 0.35)',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.022) 1px, transparent 1px)',
        'grid-dense':
          'linear-gradient(rgba(255,255,255,0.014) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.014) 1px, transparent 1px)',
        'hero-fade':
          'radial-gradient(ellipse 90% 60% at 50% -15%, rgba(255, 255, 255, 0.06), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 0%, rgba(255, 255, 255, 0.03), transparent)',
      },
      backgroundSize: {
        grid: '40px 40px',
        'grid-dense': '28px 28px',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 12px rgba(255, 255, 255, 0.03)' },
          '100%': { boxShadow: '0 0 36px rgba(255, 255, 255, 0.07)' },
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
