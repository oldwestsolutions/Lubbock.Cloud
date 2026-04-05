'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ComputeTokensExplorer } from '@/components/tokens/ComputeTokensExplorer';
import { PriceChart } from '@/components/ui/PriceChart';
import { OrderBook } from '@/components/ui/OrderBook';
import { COMPUTE_TOKENS, ORDER_BOOK_BIDS, ORDER_BOOK_ASKS, RECENT_ORDERS } from '@/lib/mock-data';
import { cn, formatUsd, generatePriceHistory } from '@/lib/utils';
import type { ComputeToken } from '@/lib/types';

function TradePanel({ token }: { token: ComputeToken }) {
  const [side, setSide] = useState<'buy' | 'sell'>('buy');
  const [amount, setAmount] = useState('');
  const [orderType, setOrderType] = useState<'market' | 'limit'>('market');
  const [limitPrice, setLimitPrice] = useState(token.priceUsd.toFixed(2));

  const numAmount = parseFloat(amount) || 0;
  const price = orderType === 'limit' ? parseFloat(limitPrice) || 0 : token.priceUsd;
  const total = numAmount * price;

  return (
    <div className="glow-card p-5">
      <div className="flex gap-1 mb-5">
        <button
          onClick={() => setSide('buy')}
          className={cn(
            'flex-1 py-2 text-sm font-medium rounded-md transition-colors',
            side === 'buy' ? 'bg-lub-green/20 text-lub-green' : 'text-tech-gray-500 hover:text-tech-gray-300'
          )}
        >
          Buy
        </button>
        <button
          onClick={() => setSide('sell')}
          className={cn(
            'flex-1 py-2 text-sm font-medium rounded-md transition-colors',
            side === 'sell' ? 'bg-lub-red/20 text-lub-red' : 'text-tech-gray-500 hover:text-tech-gray-300'
          )}
        >
          Sell
        </button>
      </div>

      <div className="flex gap-1 mb-5">
        {(['market', 'limit'] as const).map((t) => (
          <button
            key={t}
            onClick={() => setOrderType(t)}
            className={cn(
              'px-3 py-1 text-xs rounded-md transition-colors',
              orderType === t ? 'bg-white/10 text-white' : 'text-tech-gray-500 hover:text-tech-gray-300'
            )}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {orderType === 'limit' && (
          <div>
            <label className="text-xs text-tech-gray-400 mb-1.5 block">Price (USD)</label>
            <input
              type="number"
              value={limitPrice}
              onChange={(e) => setLimitPrice(e.target.value)}
              className="input-field font-mono"
              step="0.01"
            />
          </div>
        )}

        <div>
          <label className="text-xs text-tech-gray-400 mb-1.5 block">Amount ({token.ticker})</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field font-mono"
            placeholder="0"
          />
          <div className="flex gap-2 mt-2">
            {[25, 50, 75, 100].map((pct) => (
              <button
                key={pct}
                onClick={() => setAmount(String(Math.floor(740 * pct / 100)))}
                className="flex-1 py-1 text-[10px] text-tech-gray-500 hover:text-tech-gray-300 bg-tech-gray-800/50 rounded transition-colors"
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-white/[0.06] pt-4 space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-tech-gray-400">Price</span>
            <span className="font-mono">{formatUsd(price)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-tech-gray-400">Total</span>
            <span className="font-mono font-medium">{formatUsd(total)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-tech-gray-400">Fee (0.1%)</span>
            <span className="font-mono">{formatUsd(total * 0.001)}</span>
          </div>
        </div>

        <button
          className={cn(
            'w-full py-2.5 text-sm font-medium rounded-lg transition-colors',
            side === 'buy'
              ? 'bg-lub-green text-white hover:bg-lub-green/90'
              : 'bg-lub-red text-white hover:bg-lub-red/90'
          )}
        >
          {side === 'buy' ? 'Buy' : 'Sell'} {token.ticker}
        </button>
      </div>
    </div>
  );
}

export default function MarketplacePage() {
  const [selectedToken, setSelectedToken] = useState(COMPUTE_TOKENS[0]);
  const priceHistory = generatePriceHistory(selectedToken.priceUsd, 90);

  return (
    <main>
      <Navbar />
      <div className="page-container">
        <ComputeTokensExplorer />

        <div id="trade" className="scroll-mt-28 pt-4 border-t border-white/[0.06]">
        {/* Token selector */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
          {COMPUTE_TOKENS.map((token) => (
            <button
              key={token.id}
              onClick={() => setSelectedToken(token)}
              className={cn(
                'flex items-center gap-2 px-3 py-2 rounded-lg text-sm whitespace-nowrap transition-all border',
                selectedToken.id === token.id
                  ? 'bg-white/[0.06] border-white/10 text-white'
                  : 'border-transparent text-tech-gray-500 hover:text-tech-gray-300 hover:bg-white/[0.03]'
              )}
            >
              <span className="font-mono font-medium">{token.ticker}</span>
              <span className="font-mono">{formatUsd(token.priceUsd)}</span>
              <span className={cn('text-xs font-mono', token.change24h >= 0 ? 'change-positive' : 'change-negative')}>
                {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
              </span>
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-semibold">{selectedToken.ticker}</h1>
              <span className="badge-amd">{selectedToken.vendor}</span>
            </div>
            <p className="text-sm text-tech-gray-500 mt-1">
              {selectedToken.gpuModel} · {selectedToken.hbmTier} · {selectedToken.gpuHoursPerToken} GPU-hr per token
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-mono font-semibold">{formatUsd(selectedToken.priceUsd)}</p>
            <p className={cn('text-sm font-mono', selectedToken.change24h >= 0 ? 'change-positive' : 'change-negative')}>
              {selectedToken.change24h >= 0 ? '+' : ''}{selectedToken.change24h.toFixed(2)}% (24h)
            </p>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Chart */}
          <div className="lg:col-span-8">
            <PriceChart data={priceHistory} height={320} />
          </div>

          {/* Trade panel */}
          <div className="lg:col-span-4">
            <TradePanel token={selectedToken} />
          </div>

          {/* Order book */}
          <div className="lg:col-span-4">
            <OrderBook bids={ORDER_BOOK_BIDS} asks={ORDER_BOOK_ASKS} />
          </div>

          {/* Market stats */}
          <div className="lg:col-span-4">
            <div className="glow-card p-5">
              <h3 className="text-sm font-medium mb-4">Market Stats</h3>
              <div className="space-y-3 text-sm">
                {[
                  { label: 'Market Cap', value: `$${(selectedToken.marketCap / 1_000_000).toFixed(1)}M` },
                  { label: '24h Volume', value: `$${(selectedToken.volume24h / 1_000_000).toFixed(1)}M` },
                  { label: 'Circulating Supply', value: `${(selectedToken.circulatingSupply / 1_000_000).toFixed(0)}M` },
                  { label: 'Total Supply', value: `${(selectedToken.totalSupply / 1_000_000).toFixed(0)}M` },
                  { label: 'GPU-Hours/Token', value: String(selectedToken.gpuHoursPerToken) },
                  { label: 'Priority Level', value: selectedToken.priorityLevel.charAt(0).toUpperCase() + selectedToken.priorityLevel.slice(1) },
                ].map((stat) => (
                  <div key={stat.label} className="flex justify-between">
                    <span className="text-tech-gray-400">{stat.label}</span>
                    <span className="font-mono text-tech-gray-200">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent orders */}
          <div className="lg:col-span-4">
            <div className="glow-card p-5">
              <h3 className="text-sm font-medium mb-4">Recent Orders</h3>
              <div className="space-y-2">
                {RECENT_ORDERS.map((order) => (
                  <div key={order.id} className="flex items-center justify-between text-xs py-1.5 border-b border-white/[0.04] last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={cn(
                        'px-1.5 py-0.5 rounded text-[10px] font-medium uppercase',
                        order.type === 'buy' ? 'bg-lub-green/10 text-lub-green' : 'bg-lub-red/10 text-lub-red'
                      )}>
                        {order.type}
                      </span>
                      <span className="font-mono text-tech-gray-300">{order.ticker}</span>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-tech-gray-300">{order.amount}</span>
                      <span className="text-tech-gray-500 ml-1">@ {formatUsd(order.pricePerToken)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
