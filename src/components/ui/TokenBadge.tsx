import { cn } from '@/lib/utils';
import type { GpuVendor } from '@/lib/types';

interface TokenBadgeProps {
  ticker: string;
  vendor: GpuVendor;
  size?: 'sm' | 'md' | 'lg';
}

export function TokenBadge({ ticker, vendor, size = 'md' }: TokenBadgeProps) {
  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-1',
    lg: 'text-sm px-3 py-1.5',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md font-mono font-medium tracking-wider',
        sizeClasses[size],
        vendor === 'AMD'
          ? 'bg-red-500/10 text-red-400 border border-red-500/20'
          : 'bg-green-500/10 text-green-400 border border-green-500/20'
      )}
    >
      {ticker}
    </span>
  );
}
