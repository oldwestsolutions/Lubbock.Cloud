'use client';

import { cn } from '@/lib/utils';

interface OrderLevel {
  price: number;
  amount: number;
  total: number;
}

interface OrderBookProps {
  bids: OrderLevel[];
  asks: OrderLevel[];
  className?: string;
}

export function OrderBook({ bids, asks, className }: OrderBookProps) {
  const maxBidTotal = Math.max(...bids.map((b) => b.total));
  const maxAskTotal = Math.max(...asks.map((a) => a.total));

  return (
    <div className={cn('glow-card p-5', className)}>
      <h3 className="text-sm font-medium mb-4">Order Book</h3>

      <div className="grid grid-cols-3 gap-2 mb-2">
        <span className="table-header">Price</span>
        <span className="table-header text-right">Amount</span>
        <span className="table-header text-right">Total</span>
      </div>

      <div className="space-y-px mb-3">
        {asks.slice().reverse().map((ask, i) => (
          <div key={`ask-${i}`} className="relative grid grid-cols-3 gap-2 py-0.5 text-xs font-mono">
            <div
              className="absolute inset-0 bg-lub-red/5"
              style={{ width: `${(ask.total / maxAskTotal) * 100}%`, right: 0, left: 'auto' }}
            />
            <span className="relative text-lub-red">${ask.price.toFixed(2)}</span>
            <span className="relative text-right text-tech-gray-300">{ask.amount.toLocaleString()}</span>
            <span className="relative text-right text-tech-gray-500">${ask.total.toLocaleString()}</span>
          </div>
        ))}
      </div>

      <div className="border-y border-white/5 py-2 mb-3">
        <span className="text-sm font-mono font-medium text-lub-accent">$2.84</span>
        <span className="text-xs text-tech-gray-500 ml-2">Spread: $0.02 (0.70%)</span>
      </div>

      <div className="space-y-px">
        {bids.map((bid, i) => (
          <div key={`bid-${i}`} className="relative grid grid-cols-3 gap-2 py-0.5 text-xs font-mono">
            <div
              className="absolute inset-0 bg-lub-green/5"
              style={{ width: `${(bid.total / maxBidTotal) * 100}%`, right: 0, left: 'auto' }}
            />
            <span className="relative text-lub-green">${bid.price.toFixed(2)}</span>
            <span className="relative text-right text-tech-gray-300">{bid.amount.toLocaleString()}</span>
            <span className="relative text-right text-tech-gray-500">${bid.total.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
