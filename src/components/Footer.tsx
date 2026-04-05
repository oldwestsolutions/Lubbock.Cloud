import Link from 'next/link';

const FOOTER_SECTIONS = [
  {
    title: 'Platform',
    links: [
      { label: 'Tokens', href: '/tokens' },
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
    <footer className="border-t border-white/[0.06] bg-[#09090b]">
      <div className="mx-auto max-w-7xl container-px py-20">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-tech-gray-400">{section.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-tech-gray-500 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-lub-cta to-lub-cta-hover flex items-center justify-center ring-1 ring-white/[0.06]">
              <svg viewBox="0 0 24 24" className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="text-sm font-medium">
              lubbock<span className="text-lub-accent">.cloud</span>
            </span>
          </div>
          <p className="text-xs text-tech-gray-600">
            GPU infrastructure, made liquid. Lubbock, Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
