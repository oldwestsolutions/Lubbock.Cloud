'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV_LINKS = [
  { label: 'Tokens', href: '/tokens' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Redeem', href: '/redeem' },
  { label: 'Vaults', href: '/vaults' },
  { label: 'Clusters', href: '/clusters' },
  { label: 'Docs', href: '/docs' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-tech-gray-950/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl container-px">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-10">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-lub-blue to-lub-blue/60 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                lubbock<span className="text-lub-blue">.cloud</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 text-sm text-tech-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/dashboard" className="btn-secondary text-xs py-2 px-4">
              Dashboard
            </Link>
            <Link href="/login" className="btn-primary text-xs py-2 px-4">
              Connect Wallet
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-tech-gray-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-tech-gray-950/95 backdrop-blur-xl">
          <div className="container-px py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-sm text-tech-gray-400 hover:text-white rounded-md hover:bg-white/5"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-white/[0.06] mt-3 space-y-2">
              <Link href="/dashboard" className="block btn-secondary text-xs text-center" onClick={() => setOpen(false)}>
                Dashboard
              </Link>
              <Link href="/login" className="block btn-primary text-xs text-center" onClick={() => setOpen(false)}>
                Connect Wallet
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
