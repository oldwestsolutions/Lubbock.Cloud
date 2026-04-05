'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StatCard } from '@/components/ui/StatCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { TokenBadge } from '@/components/ui/TokenBadge';
import {
  USER_BALANCES,
  ACTIVE_JOBS,
  USER_VAULTS,
  RECENT_TRANSACTIONS,
  COMPUTE_TOKENS,
} from '@/lib/mock-data';
import { cn, formatUsd, formatNumber, timeAgo } from '@/lib/utils';
import Link from 'next/link';

const TX_ICONS: Record<string, string> = {
  buy: 'B',
  sell: 'S',
  redeem: 'R',
  lock: 'L',
  unlock: 'U',
  earn: 'E',
};

const TX_COLORS: Record<string, string> = {
  buy: 'bg-lub-accent-muted text-lub-accent',
  sell: 'bg-lub-red-muted text-lub-red',
  redeem: 'bg-white/[0.06] text-tech-gray-300',
  lock: 'bg-lub-red-muted text-lub-red',
  unlock: 'bg-lub-green-muted text-lub-green',
  earn: 'bg-lub-green-muted text-lub-green',
};

const STATUS_COLORS: Record<string, string> = {
  running: 'bg-lub-green/10 text-lub-green border-lub-green/20',
  queued: 'bg-tech-gray-800 text-tech-gray-400 border-white/[0.08]',
  completed: 'bg-tech-gray-800 text-tech-gray-400 border-tech-gray-700',
  failed: 'bg-lub-red/10 text-lub-red border-lub-red/20',
};

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'jobs' | 'tokens' | 'api'>('overview');

  const totalBalance = USER_BALANCES.reduce((sum, b) => sum + b.valueUsd, 0);
  const totalLocked = USER_BALANCES.reduce((sum, b) => sum + b.locked, 0);
  const activeJobCount = ACTIVE_JOBS.filter((j) => j.status === 'running').length;
  const vaultEarnings = USER_VAULTS.reduce((sum, v) => {
    const t = COMPUTE_TOKENS.find((ct) => ct.ticker === v.tokenTicker);
    return sum + v.earned * (t?.priceUsd ?? 0);
  }, 0);

  return (
    <main>
      <Navbar />
      <div className="page-container">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold">Control Panel</h1>
            <p className="text-sm text-tech-gray-400 mt-1">Manage your compute tokens, active sessions, and vault positions.</p>
          </div>
          <div className="flex gap-2">
            <Link href="/redeem" className="btn-primary text-xs">Redeem Tokens</Link>
            <Link href="/marketplace" className="btn-secondary text-xs">Trade</Link>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-1 mb-8 border-b border-white/[0.06] pb-px">
          {(['overview', 'jobs', 'tokens', 'api'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'px-4 py-2.5 text-sm font-medium transition-colors border-b-2 -mb-px',
                activeTab === tab
                  ? 'border-lub-accent text-lub-ink'
                  : 'border-transparent text-tech-gray-500 hover:text-tech-gray-300'
              )}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {activeTab === 'overview' && (
          <>
            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <StatCard label="Portfolio Value" value={formatUsd(totalBalance)} change="+4.2% (24h)" positive />
              <StatCard label="Active Sessions" value={String(activeJobCount)} />
              <StatCard label="Vault Earnings" value={formatUsd(vaultEarnings)} change="+$6.82 today" positive />
              <StatCard label="Tokens Locked" value={formatNumber(totalLocked)} />
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {/* Token balances */}
              <div className="lg:col-span-2 glow-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium">Token Balances</h3>
                  <Link href="/tokens" className="text-xs text-lub-accent hover:text-lub-accent/80 transition-colors">View All</Link>
                </div>
                <div className="space-y-1">
                  <div className="grid grid-cols-12 gap-2 py-2 text-xs">
                    <div className="col-span-3 table-header">Token</div>
                    <div className="col-span-2 table-header text-right">Balance</div>
                    <div className="col-span-2 table-header text-right">Available</div>
                    <div className="col-span-2 table-header text-right">Locked</div>
                    <div className="col-span-3 table-header text-right">Value</div>
                  </div>
                  {USER_BALANCES.map((bal) => {
                    const t = COMPUTE_TOKENS.find((ct) => ct.ticker === bal.ticker);
                    return (
                      <div key={bal.tokenId} className="grid grid-cols-12 gap-2 py-2.5 border-t border-white/[0.04] items-center text-sm">
                        <div className="col-span-3">
                          <TokenBadge ticker={bal.ticker} vendor={t?.vendor ?? 'AMD'} size="sm" />
                        </div>
                        <div className="col-span-2 text-right font-mono text-tech-gray-300">{formatNumber(bal.amount)}</div>
                        <div className="col-span-2 text-right font-mono text-tech-gray-300">{formatNumber(bal.available)}</div>
                        <div className="col-span-2 text-right font-mono text-tech-gray-500">{formatNumber(bal.locked)}</div>
                        <div className="col-span-3 text-right font-mono font-medium">{formatUsd(bal.valueUsd)}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recent transactions */}
              <div className="glow-card p-5">
                <h3 className="text-sm font-medium mb-4">Recent Activity</h3>
                <div className="space-y-2">
                  {RECENT_TRANSACTIONS.slice(0, 6).map((tx) => (
                    <div key={tx.id} className="flex items-center gap-3 py-2 border-b border-white/[0.04] last:border-0">
                      <div className={cn('w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold', TX_COLORS[tx.type])}>
                        {TX_ICONS[tx.type]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs font-medium capitalize">{tx.type}</p>
                        <p className="text-[10px] text-tech-gray-500">{tx.ticker} · {tx.amount} tokens</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs font-mono">{formatUsd(tx.valueUsd)}</p>
                        <p className="text-[10px] text-tech-gray-500">{timeAgo(tx.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active jobs */}
            <div className="mt-6 glow-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Compute Sessions</h3>
                <button onClick={() => setActiveTab('jobs')} className="text-xs text-lub-accent hover:text-lub-accent/80 transition-colors">
                  View All
                </button>
              </div>
              <div className="space-y-3">
                {ACTIVE_JOBS.filter((j) => j.status === 'running' || j.status === 'queued').map((job) => (
                  <div key={job.id} className="flex items-center gap-4 py-3 border-b border-white/[0.04] last:border-0">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium truncate">{job.name}</p>
                        <span className={cn('text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border', STATUS_COLORS[job.status])}>
                          {job.status}
                        </span>
                      </div>
                      <p className="text-xs text-tech-gray-500 mt-0.5">{job.gpuModel} · {job.gpuHours}h · {job.tokensUsed} tokens used</p>
                    </div>
                    {job.status === 'running' && (
                      <div className="w-32">
                        <ProgressBar value={job.progress} color="bg-lub-accent" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Vault positions */}
            <div className="mt-6 glow-card p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium">Vault Positions</h3>
                <Link href="/vaults" className="text-xs text-lub-accent hover:text-lub-accent/80 transition-colors">Manage Vaults</Link>
              </div>
              <div className="grid gap-3 sm:grid-cols-3">
                {USER_VAULTS.map((vault) => {
                  const elapsed = (Date.now() - new Date(vault.startDate).getTime()) / (1000 * 60 * 60 * 24);
                  const totalDays = vault.lockDuration * 30;
                  const pct = Math.min((elapsed / totalDays) * 100, 100);

                  return (
                    <div key={vault.id} className="p-4 bg-tech-gray-800/40 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-sm font-medium">{vault.tokenTicker}</span>
                        <span className="text-xs text-lub-accent font-mono">{vault.apy}% APY</span>
                      </div>
                      <p className="text-lg font-mono font-medium">{formatNumber(vault.amountLocked)}</p>
                      <p className="text-xs text-lub-green font-mono">+{vault.earned.toFixed(1)} earned</p>
                      <div className="mt-3">
                        <ProgressBar value={pct} color="bg-lub-accent" />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        )}

        {activeTab === 'jobs' && (
          <div className="glow-card overflow-hidden">
            <div className="grid grid-cols-12 gap-4 items-center py-3 px-5 border-b border-white/[0.06]">
              <div className="col-span-3 table-header">Job Name</div>
              <div className="col-span-2 table-header">GPU</div>
              <div className="col-span-1 table-header">Status</div>
              <div className="col-span-2 table-header text-right">Tokens</div>
              <div className="col-span-2 table-header text-right">Duration</div>
              <div className="col-span-2 table-header">Progress</div>
            </div>
            {ACTIVE_JOBS.map((job) => (
              <div key={job.id} className="grid grid-cols-12 gap-4 items-center py-4 px-5 border-b border-white/[0.04] hover:bg-white/[0.02]">
                <div className="col-span-3 text-sm font-medium truncate">{job.name}</div>
                <div className="col-span-2 text-sm text-tech-gray-400">{job.gpuModel}</div>
                <div className="col-span-1">
                  <span className={cn('text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border', STATUS_COLORS[job.status])}>
                    {job.status}
                  </span>
                </div>
                <div className="col-span-2 text-right font-mono text-sm text-tech-gray-300">{job.tokensUsed}</div>
                <div className="col-span-2 text-right font-mono text-sm text-tech-gray-300">{job.gpuHours}h</div>
                <div className="col-span-2">
                  <ProgressBar value={job.progress} color={job.status === 'completed' ? 'bg-lub-green' : 'bg-lub-accent'} />
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'tokens' && (
          <div className="space-y-6">
            <div className="glow-card overflow-hidden">
              <div className="grid grid-cols-12 gap-4 items-center py-3 px-5 border-b border-white/[0.06]">
                <div className="col-span-3 table-header">Token</div>
                <div className="col-span-2 table-header text-right">Balance</div>
                <div className="col-span-2 table-header text-right">Available</div>
                <div className="col-span-2 table-header text-right">Locked</div>
                <div className="col-span-3 table-header text-right">Value (USD)</div>
              </div>
              {USER_BALANCES.map((bal) => {
                const t = COMPUTE_TOKENS.find((ct) => ct.ticker === bal.ticker);
                return (
                  <div key={bal.tokenId} className="grid grid-cols-12 gap-4 items-center py-4 px-5 border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <div className="col-span-3">
                      <TokenBadge ticker={bal.ticker} vendor={t?.vendor ?? 'AMD'} />
                    </div>
                    <div className="col-span-2 text-right font-mono text-sm">{formatNumber(bal.amount)}</div>
                    <div className="col-span-2 text-right font-mono text-sm text-lub-green">{formatNumber(bal.available)}</div>
                    <div className="col-span-2 text-right font-mono text-sm text-tech-gray-500">{formatNumber(bal.locked)}</div>
                    <div className="col-span-3 text-right font-mono text-sm font-medium">{formatUsd(bal.valueUsd)}</div>
                  </div>
                );
              })}
            </div>

            <div className="glow-card p-5">
              <h3 className="text-sm font-medium mb-4">Transaction History</h3>
              <div className="space-y-1">
                {RECENT_TRANSACTIONS.map((tx) => (
                  <div key={tx.id} className="flex items-center gap-3 py-2.5 border-b border-white/[0.04] last:border-0">
                    <div className={cn('w-7 h-7 rounded-md flex items-center justify-center text-[10px] font-bold', TX_COLORS[tx.type])}>
                      {TX_ICONS[tx.type]}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium capitalize">{tx.type}</span>
                        <span className="font-mono text-xs text-tech-gray-400">{tx.ticker}</span>
                        <span className={cn(
                          'text-[10px] px-1.5 py-0.5 rounded',
                          tx.status === 'confirmed' ? 'bg-lub-green-muted text-lub-green' : 'bg-lub-red-muted text-lub-red'
                        )}>
                          {tx.status}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-mono">{tx.amount} tokens</p>
                      <p className="text-xs text-tech-gray-500">{formatUsd(tx.valueUsd)}</p>
                    </div>
                    <div className="text-xs text-tech-gray-500 w-16 text-right">{timeAgo(tx.timestamp)}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'api' && (
          <div className="space-y-6">
            <div className="glow-card p-6">
              <h3 className="font-medium mb-2">API Keys</h3>
              <p className="text-sm text-tech-gray-400 mb-6">Use your API key to authenticate requests to the Lubbock Cloud compute API.</p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-tech-gray-800/60 rounded-lg">
                  <div className="flex-1">
                    <p className="text-xs text-tech-gray-400">Production</p>
                    <p className="font-mono text-sm mt-0.5">lc_prod_•••••••••••••••••••k7x</p>
                  </div>
                  <button className="text-xs text-lub-accent hover:text-lub-accent/80">Copy</button>
                  <button className="text-xs text-lub-red hover:text-lub-red/80">Revoke</button>
                </div>
                <div className="flex items-center gap-3 p-3 bg-tech-gray-800/60 rounded-lg">
                  <div className="flex-1">
                    <p className="text-xs text-tech-gray-400">Development</p>
                    <p className="font-mono text-sm mt-0.5">lc_dev_•••••••••••••••••••m2p</p>
                  </div>
                  <button className="text-xs text-lub-accent hover:text-lub-accent/80">Copy</button>
                  <button className="text-xs text-lub-red hover:text-lub-red/80">Revoke</button>
                </div>
              </div>
              <button className="btn-secondary text-xs mt-4">Generate New Key</button>
            </div>

            <div className="glow-card p-6">
              <h3 className="font-medium mb-2">API Usage</h3>
              <p className="text-sm text-tech-gray-400 mb-6">Current billing period usage for your API keys.</p>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="p-4 bg-tech-gray-800/40 rounded-lg">
                  <p className="stat-label">Requests (30d)</p>
                  <p className="text-xl font-mono font-medium mt-1">142,847</p>
                </div>
                <div className="p-4 bg-tech-gray-800/40 rounded-lg">
                  <p className="stat-label">Compute Hours</p>
                  <p className="text-xl font-mono font-medium mt-1">84.2h</p>
                </div>
                <div className="p-4 bg-tech-gray-800/40 rounded-lg">
                  <p className="stat-label">Tokens Consumed</p>
                  <p className="text-xl font-mono font-medium mt-1">84</p>
                </div>
              </div>
            </div>

            <div className="glow-card p-6">
              <h3 className="font-medium mb-4">Quick Start</h3>
              <div className="bg-tech-gray-800/80 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                <pre className="text-tech-gray-300">
{`curl -X POST https://api.lubbock.cloud/v1/compute \\
  -H "Authorization: Bearer lc_prod_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "gpu": "MI300X",
    "duration_hours": 4,
    "job_type": "inference",
    "model": "meta-llama/Llama-3-70B"
  }'`}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
