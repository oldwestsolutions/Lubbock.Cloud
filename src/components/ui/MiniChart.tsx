'use client';

import { useMemo } from 'react';

interface MiniChartProps {
  data: number[];
  width?: number;
  height?: number;
  positive?: boolean;
}

export function MiniChart({ data, width = 120, height = 40, positive = true }: MiniChartProps) {
  const path = useMemo(() => {
    if (data.length < 2) return '';
    const min = Math.min(...data);
    const max = Math.max(...data);
    const range = max - min || 1;

    const points = data.map((val, i) => {
      const x = (i / (data.length - 1)) * width;
      const y = height - ((val - min) / range) * (height - 4) - 2;
      return `${x},${y}`;
    });

    return `M${points.join(' L')}`;
  }, [data, width, height]);

  const areaPath = useMemo(() => {
    if (data.length < 2) return '';
    return `${path} L${width},${height} L0,${height} Z`;
  }, [path, width, height, data.length]);

  const color = positive ? '#10b981' : '#ef4444';
  const gradientId = `grad-${positive ? 'pos' : 'neg'}-${Math.random().toString(36).slice(2, 6)}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} className="overflow-visible">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill={`url(#${gradientId})`} />
      <path d={path} fill="none" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
