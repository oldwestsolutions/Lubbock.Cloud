'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MiniChart } from '@/components/ui/MiniChart';
import { GpuAvailability } from '@/components/ui/GpuAvailability';
import { COMPUTE_TOKENS, GPU_SPECS } from '@/lib/mock-data';
import { formatUsd, formatCompact, cn, generatePriceHistory } from '@/lib/utils';
import type { ComputeToken } from '@/lib/types';

function TokenRow({ token, gpu }: { token: ComputeToken; gpu: (typeof GPU_SPECS)[0] | undefined }) {
  const priceHistory = generatePriceHistory(token.priceUsd, 30);
  const chartData = priceHistory.map((p) => p.price);

  return (
    <Link
      href="/marketplace#trade"
      className="grid grid-cols-12 gap-4 items-center py-4 px-4 border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors group"
    >
      <div className="col-span-3 sm:col-span-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              'w-10 h-10 rounded-lg flex items-center justify-center text-xs font-mono font-bold',
              token.vendor === 'AMD'
                ? 'bg-red-500/10 text-red-400 border border-red-500/20'
                : 'bg-green-500/10 text-green-400 border border-green-500/20'
            )}
          >
            {token.gpuModel.slice(0, 4)}
          </div>
          <div>
            <p className="font-medium text-sm">{token.ticker}</p>
            <p className="text-xs text-tech-gray-500">
              {token.vendor} {token.gpuModel}
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 text-right">
        <p className="font-mono font-medium">{formatUsd(token.priceUsd)}</p>
      </div>

      <div className="col-span-1 text-right">
        <p className={cn('text-sm font-mono', token.change24h >= 0 ? 'change-positive' : 'change-negative')}>
          {token.change24h >= 0 ? '+' : ''}
          {token.change24h.toFixed(2)}%
        </p>
      </div>

      <div className="col-span-2 hidden sm:flex justify-center">
        <MiniChart data={chartData} positive={token.change24h >= 0} />
      </div>

      <div className="col-span-2 text-right hidden sm:block">
        <p className="text-sm font-mono text-tech-gray-300">{formatCompact(token.volume24h)}</p>
        <p className="text-xs text-tech-gray-500">{formatCompact(token.marketCap)} MCap</p>
      </div>

      <div className="col-span-2 hidden lg:block">{gpu && <GpuAvailability gpu={gpu} />}</div>
    </Link>
  );
}

export function ComputeTokensExplorer() {
  const [filter, setFilter] = useState<'all' | 'AMD' | 'NVIDIA'>('all');

  const filtered = filter === 'all' ? COMPUTE_TOKENS : COMPUTE_TOKENS.filter((t) => t.vendor === filter);

  const totalMarketCap = COMPUTE_TOKENS.reduce((sum, t) => sum + t.marketCap, 0);
  const totalVolume = COMPUTE_TOKENS.reduce((sum, t) => sum + t.volume24h, 0);

  return (
    <div className="mb-16 sm:mb-20">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="section-heading">Compute Tokens</h2>
          <p className="section-subheading">
            Each token represents one GPU-hour of compute on real hardware. Backed 1:1 by accelerator capacity.
          </p>
        </div>
        <div className="flex gap-2">
          {(['all', 'AMD', 'NVIDIA'] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                'px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                filter === f
                  ? 'bg-white/10 text-white'
                  : 'text-tech-gray-500 hover:text-tech-gray-300 hover:bg-white/5'
              )}
            >
              {f === 'all' ? 'All Tokens' : f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="glow-card p-4">
          <p className="stat-label">Total Market Cap</p>
          <p className="stat-value text-lg mt-1">{formatCompact(totalMarketCap)}</p>
        </div>
        <div className="glow-card p-4">
          <p className="stat-label">24h Volume</p>
          <p className="stat-value text-lg mt-1">{formatCompact(totalVolume)}</p>
        </div>
        <div className="glow-card p-4">
          <p className="stat-label">Active Tokens</p>
          <p className="stat-value text-lg mt-1">{COMPUTE_TOKENS.length}</p>
        </div>
        <div className="glow-card p-4">
          <p className="stat-label">GPU Classes</p>
          <p className="stat-value text-lg mt-1">{GPU_SPECS.length}</p>
        </div>
      </div>

      <div className="glow-card overflow-hidden">
        <div className="grid grid-cols-12 gap-4 items-center py-3 px-4 border-b border-white/[0.06]">
          <div className="col-span-3 table-header">Token</div>
          <div className="col-span-2 table-header text-right">Price</div>
          <div className="col-span-1 table-header text-right">24h</div>
          <div className="col-span-2 table-header text-center hidden sm:block">Chart</div>
          <div className="col-span-2 table-header text-right hidden sm:block">Volume / MCap</div>
          <div className="col-span-2 table-header hidden lg:block">GPU Status</div>
        </div>
        {filtered.map((token) => (
          <TokenRow
            key={token.id}
            token={token}
            gpu={GPU_SPECS.find((g) => g.model === token.gpuModel)}
          />
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-xl font-semibold mb-6">Token Mechanics</h3>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="glow-card p-6">
            <h4 className="font-medium">Time-Based</h4>
            <p className="text-sm text-tech-gray-400 mt-2">
              Each token represents exactly 1 GPU-hour of compute on its backing hardware. Redeem tokens to launch
              sessions, run batch jobs, or consume API credits.
            </p>
          </div>
          <div className="glow-card p-6">
            <h4 className="font-medium">Memory-Tiered</h4>
            <p className="text-sm text-tech-gray-400 mt-2">
              Token price reflects the HBM tier of the GPU. Higher-memory accelerators like MI355X (288 GB) command a
              premium over H100 (80 GB).
            </p>
          </div>
          <div className="glow-card p-6">
            <h4 className="font-medium">Priority Levels</h4>
            <p className="text-sm text-tech-gray-400 mt-2">
              Standard tokens enter the shared queue. Priority tokens get dedicated scheduling. Reserved tokens guarantee
              hardware allocation within minutes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
