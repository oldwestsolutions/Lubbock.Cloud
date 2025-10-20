import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';

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
        <div className="w-full bg-tech-gray-800 text-[11px] text-tech-gray-200">
          <div className="mx-auto max-w-7xl container-px h-7 flex items-center justify-between">
            <span>New: Dedicated servers powered by Supermicro</span>
            <a href="/support" className="rounded-sm bg-tech-gray-700 px-2 py-0.5 text-tech-gray-100 font-medium hover:bg-tech-gray-600">Support</a>
          </div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


