"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type Slide = {
  badge: string;
  title: string;
  body: string;
  primary: { label: string; href: string; variant: 'red' | 'blue' | 'gray' };
  secondary: { label: string; href: string; variant: 'outline' | 'gray' };
  backgroundImage: string;
};

const slides: Slide[] = [
  {
    badge: 'Natural Resource Optimization • Long-Term Moat',
    title: 'Resource optimizer, not just a miner.',
    body: 'We optimize water, power, and land resources to create sustainable competitive advantages. This is where Lubbock.cloud becomes hard to copy.',
    primary: { label: 'See Ecosystem', href: '#ecosystem', variant: 'red' },
    secondary: { label: 'Three Pillars', href: '#three-pillars', variant: 'outline' },
    backgroundImage: '/westtexastrain.jpg',
  },
  {
    badge: 'Compute Arbitrage • Secondary Engine',
    title: 'Cloud without uptime guarantees.',
    body: 'When power is cheap, we run miners and HPC jobs. When expensive, we shut down compute and discharge batteries. This is cloud that adapts to energy markets in real-time.',
    primary: { label: 'System Layers', href: '#system-layers', variant: 'blue' },
    secondary: { label: 'How It Works', href: '#three-pillars', variant: 'gray' },
    backgroundImage: '/clouds.png',
  },
  {
    badge: 'Natural Resource Optimization • Long-Term Moat',
    title: 'Resource optimizer, not just a miner.',
    body: 'We optimize water, power, and land resources to create sustainable competitive advantages. This is where Lubbock.cloud becomes hard to copy.',
    primary: { label: 'See Ecosystem', href: '#ecosystem', variant: 'red' },
    secondary: { label: 'Three Pillars', href: '#three-pillars', variant: 'outline' },
    backgroundImage: '/hero.svg',
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const durationMs = 6000; // 6s per slide

  const slide = useMemo(() => slides[index], [index]);

  const handleSlideChange = (newIndex: number) => {
    if (newIndex !== indexRef.current && !isTransitioning) {
      setIsTransitioning(true);
      setTimeout(() => {
        setIndex(newIndex);
        indexRef.current = newIndex;
        setIsTransitioning(false);
      }, 300);
    }
  };

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const start = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      const nextIndex = (indexRef.current + 1) % slides.length;
      handleSlideChange(nextIndex);
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

  return (
    <section className="relative overflow-hidden min-h-[600px] sm:min-h-[700px]">
      {/* Background Images with Fade */}
      <div className="absolute inset-0 z-0">
        {slides.map((slideItem, i) => (
          <div
            key={i}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              i === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={slideItem.backgroundImage}
                alt=""
                fill
                className="object-cover"
                priority={i === 0}
                quality={90}
                sizes="100vw"
              />
            </div>
            <div className="absolute inset-0 bg-tech-gray-900/70" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-7xl container-px py-14 sm:py-20 min-h-[600px] sm:min-h-[700px] flex items-center" onMouseEnter={stop} onMouseLeave={start}>
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ease-in-out flex flex-col gap-5 ${isTransitioning ? 'opacity-0 translate-x-[-20px]' : 'opacity-100 translate-x-0'}`}>
            <div className="inline-block">
              <span className="text-xs font-medium text-tech-gray-300 uppercase tracking-wider bg-tech-gray-900/50 px-3 py-1 rounded-md backdrop-blur-sm">
                {slide.badge}
              </span>
            </div>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-6xl text-white drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-tech-gray-200 text-lg drop-shadow-md">
              {slide.body}
            </p>
            <div className="flex items-center gap-3">
              <Link
                href={slide.primary.href}
                className={
                  slide.primary.variant === 'red'
                    ? 'rounded-md bg-tech-red px-4 py-2 text-sm font-medium text-white hover:opacity-95 shadow-lg'
                    : slide.primary.variant === 'blue'
                    ? 'rounded-md bg-tech-blue px-4 py-2 text-sm font-medium text-white hover:opacity-95 shadow-lg'
                    : 'rounded-md bg-tech-gray-700 px-4 py-2 text-sm font-medium text-white hover:bg-tech-gray-600 shadow-lg'
                }
              >
                {slide.primary.label}
              </Link>
              <Link
                href={slide.secondary.href}
                className={
                  slide.secondary.variant === 'outline'
                    ? 'rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-2 text-sm hover:border-white/50 hover:bg-white/20 shadow-lg'
                    : 'rounded-md bg-tech-gray-700/80 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white hover:bg-tech-gray-600/80 shadow-lg'
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
                  className={`h-1.5 rounded-full transition-all duration-700 ${
                    i === index ? 'bg-white w-10 shadow-lg' : 'bg-white/40 w-6 hover:bg-white/60'
                  }`}
                  onClick={() => handleSlideChange(i)}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Spacer for Layout */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  );
}


