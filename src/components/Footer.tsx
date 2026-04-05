import Link from 'next/link';

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

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-nb-black">
      <div className="mx-auto max-w-[1280px] container-px py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-tech-gray-500">{section.title}</h3>
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

        <div className="mt-14 pt-10 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-nb-lime text-neutral-950">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-display text-sm font-semibold tracking-tight">
              lubbock<span className="text-nb-lime">.cloud</span>
            </span>
          </div>
          <p className="text-xs text-tech-gray-600 text-center sm:text-right max-w-sm leading-relaxed">
            Tokenized GPU infrastructure. Lubbock, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
