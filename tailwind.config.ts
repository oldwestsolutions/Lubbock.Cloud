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
          red: '#C8102E',
          gray: {
            50: '#F2F2F2',
            100: '#E6E6E6',
            200: '#D1D1D1',
            300: '#B3B3B3',
            400: '#999999',
            500: '#737373',
            600: '#595959',
            700: '#3F3F3F',
            800: '#2B2B2B',
            900: '#1F1F1F',
            950: '#141418',
          },
          blue: '#0078D4',
        },
        lub: {
          blue: '#00b4ff',
          'blue-dim': '#0078D4',
          amber: '#f59e0b',
          'amber-dim': '#b45309',
          green: '#10b981',
          red: '#ef4444',
          cyan: '#06b6d4',
          purple: '#8b5cf6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)',
        glow: '0 0 20px rgba(0, 180, 255, 0.15)',
        'glow-amber': '0 0 20px rgba(245, 158, 11, 0.15)',
      },
      backgroundImage: {
        grid: 'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
        'grid-dense': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '24px 24px',
        'grid-dense': '20px 20px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 180, 255, 0.1)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 180, 255, 0.2)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
