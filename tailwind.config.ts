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
          red: '#C8102E', // Texas Tech red
          gray: {
            50: '#F2F2F2', // Microsoft light gray
            100: '#E6E6E6',
            200: '#D1D1D1',
            300: '#B3B3B3',
            400: '#999999',
            500: '#737373', // Microsoft neutral gray
            600: '#595959',
            700: '#3F3F3F',
            800: '#2B2B2B',
            900: '#1F1F1F', // Microsoft dark gray
          },
          blue: '#0078D4', // subtle Microsoft accent
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(0,0,0,0.25)',
      },
      backgroundImage: {
        'grid': 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '24px 24px',
      },
    },
  },
  plugins: [],
};

export default config;


