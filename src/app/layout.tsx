import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { TopBar } from '@/components/TopBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport: Viewport = {
  themeColor: '#0c0c0e',
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
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-tech-gray-950 text-lub-ink antialiased selection:bg-lub-accent/30 selection:text-lub-ink">
        <TopBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
