'use client';

import Link from 'next/link';
import { useState } from 'react';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/[0.06] bg-nb-black/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-nb-black/65">
      <div className="mx-auto max-w-[1280px] container-px">
        <div className="flex h-[60px] lg:h-[68px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-nb-lime text-neutral-950 shadow-[0_0_28px_rgba(255,255,255,0.12)]">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <span className="font-display text-lg font-semibold tracking-tight text-lub-ink">
              lubbock<span className="text-nb-lime">.cloud</span>
            </span>
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
