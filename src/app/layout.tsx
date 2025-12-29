import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import { TopBar } from '@/components/TopBar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Lubbock Cloud',
  description: 'Dedicated servers, engineered for performance and reliability with excellent connectivity. Straightforward pricing and a developer-first experience.',
  metadataBase: new URL('https://lubbock.cloud'),
  themeColor: '#C8102E',
  openGraph: {
    title: 'Lubbock Cloud',
    description: 'Dedicated servers, engineered for performance and reliability with excellent connectivity. Straightforward pricing and a developer-first experience.',
    url: 'https://lubbock.cloud',
    siteName: 'Lubbock Cloud',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lubbock Cloud',
    description: 'Dedicated servers, engineered for performance and reliability with excellent connectivity. Straightforward pricing and a developer-first experience.',
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
      <body className="min-h-screen bg-tech-gray-900 text-white antialiased selection:bg-tech-red selection:text-white">
        <TopBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
