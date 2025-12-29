"use client";
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';

type Slide = {
  badge: string;
  title: string;
  body: string;
  primary: { label: string; href: string; variant: 'red' | 'blue' | 'gray' };
  secondary: { label: string; href: string; variant: 'outline' | 'gray' };
};

const slides: Slide[] = [
  {
    badge: 'Energy Arbitrage • Primary Engine',
    title: 'Turn power volatility into competitive advantage.',
    body: 'Energy arbitrage is the backbone. We transform cheap or negative-priced electricity, grid imbalance events, and off-peak pricing into revenue through intelligent load management.',
    primary: { label: 'Explore Three Pillars', href: '#three-pillars', variant: 'red' },
    secondary: { label: 'Learn More', href: '#west-texas', variant: 'outline' },
  },
  {
    badge: 'Compute Arbitrage • Secondary Engine',
    title: 'Cloud without uptime guarantees.',
    body: 'When power is cheap, we run miners and HPC jobs. When expensive, we shut down compute and discharge batteries. This is cloud that adapts to energy markets in real-time.',
    primary: { label: 'System Layers', href: '#system-layers', variant: 'blue' },
    secondary: { label: 'How It Works', href: '#three-pillars', variant: 'gray' },
  },
  {
    badge: 'Natural Resource Optimization • Long-Term Moat',
    title: 'Resource optimizer, not just a miner.',
    body: 'We optimize water, power, and land resources to create sustainable competitive advantages. This is where Lubbock.cloud becomes hard to copy.',
    primary: { label: 'See Ecosystem', href: '#ecosystem', variant: 'red' },
    secondary: { label: 'Three Pillars', href: '#three-pillars', variant: 'outline' },
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const durationMs = 6000; // 6s per slide

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, durationMs);
  };

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  useEffect(() => {
    start();
    return stop;
  }, []);

  const slide = useMemo(() => slides[index], [index]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl container-px py-14 sm:py-20" onMouseEnter={stop} onMouseLeave={start}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Existing Content */}
          <div className="transition-all duration-1000 ease-in-out will-change-transform will-change-opacity flex flex-col gap-5" key={index}>
            <div className="inline-block">
              <span className="text-xs font-medium text-tech-gray-400 uppercase tracking-wider">
                {slide.badge}
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
              {slide.title}
            </h1>
            <p className="text-tech-gray-300 text-lg">
              {slide.body}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={slide.primary.href}
                className={
                  slide.primary.variant === 'red'
                    ? 'rounded-md bg-tech-red px-4 py-2 text-sm font-medium text-white hover:opacity-95'
                    : slide.primary.variant === 'blue'
                    ? 'rounded-md bg-tech-blue px-4 py-2 text-sm font-medium text-white hover:opacity-95'
                    : 'rounded-md bg-tech-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-tech-gray-600'
                }
              >
                {slide.primary.label}
              </Link>
              <Link
                href={slide.secondary.href}
                className={
                  slide.secondary.variant === 'outline'
                    ? 'rounded-md border border-white/10 px-4 py-2 text-sm hover:border-white/20'
                    : 'rounded-md bg-tech-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-tech-gray-600'
                }
              >
                {slide.secondary.label}
              </Link>
            </div>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                    className={`h-1.5 w-6 rounded-full transition-all duration-700 ${i === index ? 'bg-white w-10' : 'bg-white/30 w-6'}`}
                    onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Visual/Placeholder */}
          <div className="hidden lg:block">
            <div className="card-surface rounded-xl p-8 h-full min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-tech-red/20 to-tech-blue/20 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="text-tech-gray-400 text-sm">Energy Arbitrage Platform</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


