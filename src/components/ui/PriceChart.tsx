'use client';

import { useMemo, useState } from 'react';
import { cn } from '@/lib/utils';
import type { PricePoint } from '@/lib/types';

interface PriceChartProps {
  data: PricePoint[];
  height?: number;
  className?: string;
}

const TIME_RANGES = ['1D', '7D', '30D', '90D'] as const;

export function PriceChart({ data, height = 240, className }: PriceChartProps) {
  const [range, setRange] = useState<typeof TIME_RANGES[number]>('30D');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const filteredData = useMemo(() => {
    const days = range === '1D' ? 1 : range === '7D' ? 7 : range === '30D' ? 30 : 90;
    return data.slice(-days);
  }, [data, range]);

  const { path, areaPath, minPrice, maxPrice } = useMemo(() => {
    if (filteredData.length < 2) return { path: '', areaPath: '', minPrice: 0, maxPrice: 0 };
    const prices = filteredData.map((d) => d.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    const r = max - min || 1;
    const w = 100;
    const h = 100;

    const points = filteredData.map((d, i) => {
      const x = (i / (filteredData.length - 1)) * w;
      const y = h - ((d.price - min) / r) * (h - 10) - 5;
      return { x, y };
    });

    const p = `M${points.map((pt) => `${pt.x},${pt.y}`).join(' L')}`;
    const a = `${p} L${w},${h} L0,${h} Z`;

    return { path: p, areaPath: a, minPrice: min, maxPrice: max };
  }, [filteredData]);

  const positive = filteredData.length >= 2 && filteredData[filteredData.length - 1].price >= filteredData[0].price;
  const color = positive ? '#d4d4d4' : '#6b6b6b';

  const hoveredData = hoveredIndex !== null ? filteredData[hoveredIndex] : null;

  return (
    <div className={cn('glow-card p-5', className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          {hoveredData ? (
            <>
              <p className="stat-value">${hoveredData.price.toFixed(2)}</p>
              <p className="text-xs text-tech-gray-400 mt-0.5">
                {new Date(hoveredData.timestamp).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
              </p>
            </>
          ) : (
            <>
              <p className="stat-value">${filteredData[filteredData.length - 1]?.price.toFixed(2) ?? '—'}</p>
              <p className={cn('text-xs font-mono mt-0.5', positive ? 'change-positive' : 'change-negative')}>
                {positive ? '+' : ''}{((filteredData[filteredData.length - 1]?.price - filteredData[0]?.price) / (filteredData[0]?.price || 1) * 100).toFixed(2)}%
              </p>
            </>
          )}
        </div>
        <div className="flex gap-1">
          {TIME_RANGES.map((r) => (
            <button
              key={r}
              onClick={() => setRange(r)}
              className={cn(
                'px-2.5 py-1 text-xs rounded-md font-medium transition-colors',
                range === r ? 'bg-white/10 text-white' : 'text-tech-gray-500 hover:text-tech-gray-300'
              )}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="relative" style={{ height }}>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="w-full h-full"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.15" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>

          {[0, 0.25, 0.5, 0.75, 1].map((frac) => (
            <line
              key={frac}
              x1="0"
              y1={5 + (100 - 10) * frac}
              x2="100"
              y2={5 + (100 - 10) * frac}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="0.3"
            />
          ))}

          <path d={areaPath} fill="url(#chartGrad)" />
          <path d={path} fill="none" stroke={color} strokeWidth="0.8" />

          {filteredData.map((_, i) => (
            <rect
              key={i}
              x={(i / (filteredData.length - 1)) * 100 - 0.5}
              y="0"
              width={100 / filteredData.length}
              height="100"
              fill="transparent"
              onMouseEnter={() => setHoveredIndex(i)}
            />
          ))}
        </svg>

        <div className="absolute left-0 top-0 text-[10px] text-tech-gray-500 font-mono">
          ${maxPrice.toFixed(2)}
        </div>
        <div className="absolute left-0 bottom-0 text-[10px] text-tech-gray-500 font-mono">
          ${minPrice.toFixed(2)}
        </div>
      </div>
    </div>
  );
}
