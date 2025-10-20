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
    badge: 'Dedicated Servers • Supermicro powered',
    title: 'Dedicated root servers for peak performance.',
    body: 'Dedicated servers built on Supermicro platforms — consistent performance, excellent connectivity, and full control. Starting at $39/mo.',
    primary: { label: 'The Difference', href: '#difference', variant: 'red' },
    secondary: { label: 'Dedicated Servers', href: '/dedicated-servers', variant: 'outline' },
  },
  {
    badge: 'Developer Services',
    title: 'Ship faster with managed developer tooling.',
    body: 'Managed APIs, serverless functions, CI/CD pipelines, and app accelerators to reduce toil and speed delivery.',
    primary: { label: 'Explore Dev Services', href: '/developer-services', variant: 'blue' },
    secondary: { label: 'Docs', href: '/developer-services', variant: 'gray' },
  },
  {
    badge: 'Acceleration',
    title: 'Edge, GPUs, and low-latency routing.',
    body: 'Local CDN caching, AI/ML acceleration nodes, and ISP partnerships for the fastest path to your users.',
    primary: { label: 'See Acceleration', href: '/acceleration', variant: 'red' },
    secondary: { label: 'GPU Nodes', href: '/acceleration', variant: 'outline' },
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
        <div className="flex justify-center">
          <div className="transition-all duration-1000 ease-in-out will-change-transform will-change-opacity flex flex-col gap-5 max-w-3xl text-center" key={index}>
          <span className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-tech-gray-800/60 px-3 py-1 text-xs text-tech-gray-200">
            {slide.badge}
          </span>
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
        </div>
      </div>
    </section>
  );
}


