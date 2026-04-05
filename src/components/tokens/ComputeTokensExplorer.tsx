'use client';

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
          <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-mono font-bold bg-tech-gray-800/80 text-tech-gray-200 border border-white/[0.08]">
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
  const totalMarketCap = COMPUTE_TOKENS.reduce((sum, t) => sum + t.marketCap, 0);
  const totalVolume = COMPUTE_TOKENS.reduce((sum, t) => sum + t.volume24h, 0);

  return (
    <div className="mb-16 sm:mb-20">
      <div className="mb-10">
        <h2 className="section-heading">Compute Tokens</h2>
        <p className="section-subheading">
          Each token represents one GPU-hour of compute on AMD Instinct hardware. Backed 1:1 by accelerator capacity.
        </p>
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
        {COMPUTE_TOKENS.map((token) => (
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
              Token price reflects the HBM tier of the accelerator. Higher-memory Instinct parts like MI355X (288 GB)
              command a premium over entry tiers such as MI210 (64 GB).
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
