import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';

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
          <div className="mx-auto max-w-7xl container-px h-7 flex items-center gap-4">
            <nav className="flex items-center gap-4">
              <a href="/solutions" className="hover:text-white transition-colors">Solutions</a>
              <a href="/services" className="hover:text-white transition-colors">Services</a>
              <a href="/investors" className="hover:text-white transition-colors">Investors</a>
            </nav>
            <span className="ml-auto">New: Dedicated servers powered by Supermicro</span>
          </div>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}


