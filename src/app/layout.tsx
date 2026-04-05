import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const viewport: Viewport = {
  themeColor: '#050505',
};

export const metadata: Metadata = {
  title: 'Lubbock Cloud — Tokenized GPU Compute',
  description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by real AMD and NVIDIA hardware.',
  metadataBase: new URL('https://lubbock.cloud'),
  openGraph: {
    title: 'Lubbock Cloud — Tokenized GPU Compute',
    description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by real AMD and NVIDIA hardware.',
    url: 'https://lubbock.cloud',
    siteName: 'Lubbock Cloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubbock Cloud — Tokenized GPU Compute',
    description: 'GPU infrastructure, made liquid. Buy, trade, and deploy tokenized compute backed by real AMD and NVIDIA hardware.',
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
      <body className="min-h-screen bg-nb-black text-lub-ink antialiased selection:bg-nb-lime/35 selection:text-neutral-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
