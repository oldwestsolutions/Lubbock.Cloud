"use client";
import Link from 'next/link';
import { Logo } from './Logo';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const isScrollingDown = currentY > lastScrollY;
      const beyondThreshold = currentY > 16;
      setIsHidden(isScrollingDown && beyondThreshold);
      setLastScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`sticky top-0 z-50 w-full border-b border-white/5 bg-tech-gray-900/70 backdrop-blur supports-[backdrop-filter]:bg-tech-gray-900/60 transition-transform duration-300 ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}>
      <div className="mx-auto max-w-7xl container-px h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Logo className="h-7 w-7" />
          <span className="font-semibold tracking-tight">Lubbock Cloud</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm text-tech-gray-300" />
        <div className="flex items-center gap-3">
          <Link href="#" className="rounded-md bg-tech-red px-3 py-2 text-sm font-medium text-white hover:opacity-95">Log in</Link>
        </div>
      </div>
    </header>
  );
}


