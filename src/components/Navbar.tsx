'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CloudLogo } from '@/components/CloudLogo';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-nb-black/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-nb-black/65">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="flex h-[60px] lg:h-[68px] items-center justify-between">
          <Link
            href="/"
            className="flex items-center rounded-2xl p-1.5 -m-1.5 hover:bg-white/[0.04] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            aria-label="Lubbock Cloud home"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/[0.06] text-nb-lime shadow-[0_0_32px_rgba(255,255,255,0.06)] ring-1 ring-white/[0.1]">
              <CloudLogo className="h-[22px] w-[22px]" />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/dashboard"
              className="px-4 py-2 text-[14px] font-medium text-tech-gray-400 hover:text-lub-ink transition-colors rounded-full hover:bg-white/[0.04]"
            >
              Dashboard
            </Link>
            <Link href="/login" className="btn-primary !py-2.5 !px-6 text-sm">
              Connect wallet
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden p-2.5 text-tech-gray-400 hover:text-lub-ink rounded-full hover:bg-white/[0.06]"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/[0.06] bg-nb-black/95 backdrop-blur-xl">
          <div className="container-px py-5 space-y-3">
            <Link href="/dashboard" className="block btn-secondary text-sm text-center" onClick={() => setOpen(false)}>
              Dashboard
            </Link>
            <Link href="/login" className="block btn-primary text-sm text-center" onClick={() => setOpen(false)}>
              Connect wallet
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
