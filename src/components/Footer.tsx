import Link from 'next/link';
import { CloudLogo } from '@/components/CloudLogo';

const FOOTER_DESCRIPTION =
  'Tokenized GPU compute from West Texas — trade capacity like a commodity, redeem on real AMD and NVIDIA hardware, and run inference and training with the ergonomics of a modern AI cloud.';

const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { label: 'Tokenomics', href: '/tokens' },
      { label: 'Marketplace', href: '/marketplace' },
      { label: 'Redeem Compute', href: '/redeem' },
      { label: 'Vaults', href: '/vaults' },
      { label: 'Clusters', href: '/clusters' },
    ],
  },
  {
    title: 'Infrastructure',
    links: [
      { label: 'Dedicated Servers', href: '/dedicated-servers' },
      { label: 'Storage', href: '/storage' },
      { label: 'Networking', href: '/networking' },
      { label: 'Acceleration', href: '/acceleration' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs' },
      { label: 'Developer Services', href: '/developer-services' },
      { label: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/company' },
      { label: 'Investors', href: '/investors' },
      { label: 'Press', href: '/press' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
];

function BrandMark({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-nb-lime shadow-[0_0_32px_rgba(255,255,255,0.06)] ring-1 ring-white/[0.1]">
        <CloudLogo className="h-7 w-7" />
      </div>
      <span className="font-display text-lg font-semibold tracking-tight text-lub-ink">
        Lubbock<span className="text-nb-lime"> Cloud</span>
      </span>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-nb-black">
      <div className="mx-auto max-w-[1280px] container-px py-16 sm:py-20">
        <div className="grid gap-14 lg:gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4 xl:col-span-3">
            <Link href="/" className="inline-block rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20" aria-label="Lubbock Cloud home">
              <BrandMark />
            </Link>
            <p className="mt-6 text-[14px] leading-relaxed text-tech-gray-500 max-w-sm">{FOOTER_DESCRIPTION}</p>
          </div>

          <div className="lg:col-span-8 xl:col-span-9">
            <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 md:grid-cols-4 sm:gap-x-8 lg:gap-x-10">
              {FOOTER_SECTIONS.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-gray-500">
                    {section.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {section.links.map((link) => (
                      <li key={link.href + link.label}>
                        <Link
                          href={link.href}
                          className="text-[14px] text-tech-gray-400 hover:text-lub-ink transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-tech-gray-600 text-center sm:text-left">
            © {new Date().getFullYear()} Old West Solutions. All rights reserved.
          </p>
          <p className="text-xs text-tech-gray-600">Lubbock, Texas</p>
        </div>
      </div>
    </footer>
  );
}
