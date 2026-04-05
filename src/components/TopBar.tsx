'use client';

import { useEffect, useState } from 'react';
import { COMPUTE_TOKENS } from '@/lib/mock-data';
import { cn } from '@/lib/utils';

export function TopBar() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const doubled = [...COMPUTE_TOKENS, ...COMPUTE_TOKENS];

  return (
    <div className="h-8 bg-tech-gray-950 border-b border-white/[0.04] overflow-hidden">
      <div className="h-full flex items-center">
        <div
          className="flex items-center gap-8 whitespace-nowrap"
          style={{ transform: `translateX(-${offset % (COMPUTE_TOKENS.length * 200)}px)` }}
        >
          {doubled.map((token, i) => (
            <div key={`${token.ticker}-${i}`} className="flex items-center gap-2 text-xs">
              <span className="font-mono text-tech-gray-300">{token.ticker}</span>
              <span className="font-mono text-white">${token.priceUsd.toFixed(2)}</span>
              <span
                className={cn(
                  'font-mono',
                  token.change24h >= 0 ? 'text-lub-green' : 'text-lub-red'
                )}
              >
                {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
