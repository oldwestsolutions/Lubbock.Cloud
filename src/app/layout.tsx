import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const viewport: Viewport = {
  themeColor: '#000000',
};

export const metadata: Metadata = {
  title: 'Lubbock Cloud — Tokenized GPU Compute',
  description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by AMD Instinct accelerators.',
  metadataBase: new URL('https://lubbock.cloud'),
  openGraph: {
    title: 'Lubbock Cloud — Tokenized GPU Compute',
    description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by AMD Instinct accelerators.',
    url: 'https://lubbock.cloud',
    siteName: 'Lubbock Cloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubbock Cloud — Tokenized GPU Compute',
    description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by AMD Instinct accelerators.',
  },
  icons: {
    icon: '/icon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-nb-black text-lub-ink antialiased selection:bg-white/20 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
