'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPUTE_TOKENS, USER_VAULTS } from '@/lib/mock-data';
import { cn, formatUsd, formatNumber } from '@/lib/utils';
import { ProgressBar } from '@/components/ui/ProgressBar';

const LOCK_TIERS = [
  { months: 3, apy: 8.5, discount: 5, label: '3 Months', priority: 'Standard queue priority' },
  { months: 6, apy: 14.2, discount: 12, label: '6 Months', priority: 'Priority queue access' },
  { months: 12, apy: 22.0, discount: 20, label: '12 Months', priority: 'Reserved hardware allocation' },
];

export default function VaultsPage() {
  const [selectedTicker, setSelectedTicker] = useState(COMPUTE_TOKENS[0].ticker);
  const [selectedTier, setSelectedTier] = useState(6);
  const [amount, setAmount] = useState('');
  const [showConfirm, setShowConfirm] = useState(false);

  const token = COMPUTE_TOKENS.find((t) => t.ticker === selectedTicker)!;
  const tier = LOCK_TIERS.find((t) => t.months === selectedTier)!;
  const numAmount = parseFloat(amount) || 0;
  const projectedEarnings = numAmount * token.priceUsd * (tier.apy / 100) * (tier.months / 12);
  const totalLockedValue = USER_VAULTS.reduce((sum, v) => {
    const t = COMPUTE_TOKENS.find((ct) => ct.ticker === v.tokenTicker);
    return sum + (v.amountLocked * (t?.priceUsd ?? 0));
  }, 0);
  const totalEarned = USER_VAULTS.reduce((sum, v) => {
    const t = COMPUTE_TOKENS.find((ct) => ct.ticker === v.tokenTicker);
    return sum + (v.earned * (t?.priceUsd ?? 0));
  }, 0);

  return (
    <main>
      <Navbar />
      <div className="page-container">
        <h1 className="section-heading">Compute Vaults</h1>
        <p className="section-subheading">
          Lock your compute tokens to earn yield, discounted rates, and priority access.
          The longer you lock, the more you earn.
        </p>

        {/* Overview stats */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="glow-card p-4">
            <p className="stat-label">Total Locked</p>
            <p className="stat-value text-lg mt-1">{formatUsd(totalLockedValue)}</p>
          </div>
          <div className="glow-card p-4">
            <p className="stat-label">Total Earned</p>
            <p className="stat-value text-lg mt-1 text-lub-green">{formatUsd(totalEarned)}</p>
          </div>
          <div className="glow-card p-4">
            <p className="stat-label">Active Vaults</p>
            <p className="stat-value text-lg mt-1">{USER_VAULTS.filter((v) => v.status === 'active').length}</p>
          </div>
          <div className="glow-card p-4">
            <p className="stat-label">Avg APY</p>
            <p className="stat-value text-lg mt-1 text-lub-amber">{(USER_VAULTS.reduce((s, v) => s + v.apy, 0) / USER_VAULTS.length).toFixed(1)}%</p>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Lock configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lock tier selection */}
            <div>
              <h2 className="text-lg font-medium mb-4">Lock Duration</h2>
              <div className="grid gap-4 sm:grid-cols-3">
                {LOCK_TIERS.map((lt) => (
                  <button
                    key={lt.months}
                    onClick={() => setSelectedTier(lt.months)}
                    className={cn(
                      'glow-card p-5 text-left transition-all',
                      selectedTier === lt.months
                        ? 'border-lub-amber/40 shadow-glow-amber'
                        : 'hover:border-white/10'
                    )}
                  >
                    <p className="text-2xl font-semibold font-mono">{lt.label}</p>
                    <div className="mt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-tech-gray-400">APY</span>
                        <span className="font-mono text-lub-amber font-medium">{lt.apy}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-tech-gray-400">Rate Discount</span>
                        <span className="font-mono text-lub-green">{lt.discount}%</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-tech-gray-400">Queue</span>
                        <span className="text-tech-gray-300 text-xs">{lt.priority}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Token & amount selection */}
            <div>
              <h2 className="text-lg font-medium mb-4">Token & Amount</h2>
              <div className="glow-card p-5 space-y-4">
                <div>
                  <label className="text-xs text-tech-gray-400 mb-1.5 block">Token</label>
                  <select
                    value={selectedTicker}
                    onChange={(e) => setSelectedTicker(e.target.value)}
                    className="input-field font-mono"
                  >
                    {COMPUTE_TOKENS.map((t) => (
                      <option key={t.ticker} value={t.ticker} className="bg-tech-gray-900">
                        {t.ticker} — {formatUsd(t.priceUsd)}/token
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-tech-gray-400 mb-1.5 block">Amount to Lock</label>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="input-field font-mono"
                    placeholder="Enter amount"
                  />
                </div>
              </div>
            </div>

            {/* Existing vaults */}
            <div>
              <h2 className="text-lg font-medium mb-4">Your Active Vaults</h2>
              <div className="space-y-3">
                {USER_VAULTS.map((vault) => {
                  const vToken = COMPUTE_TOKENS.find((ct) => ct.ticker === vault.tokenTicker);
                  const elapsed = (Date.now() - new Date(vault.startDate).getTime()) / (1000 * 60 * 60 * 24);
                  const totalDays = vault.lockDuration * 30;
                  const pct = Math.min((elapsed / totalDays) * 100, 100);

                  return (
                    <div key={vault.id} className="glow-card p-5">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-medium">{vault.tokenTicker}</span>
                            <span className={cn(
                              'text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full',
                              vault.status === 'active' ? 'bg-lub-green/10 text-lub-green border border-lub-green/20' : 'bg-tech-gray-800 text-tech-gray-400'
                            )}>
                              {vault.status}
                            </span>
                          </div>
                          <p className="text-xs text-tech-gray-500 mt-1">{vault.lockDuration}-month lock · {vault.apy}% APY</p>
                        </div>
                        <div className="text-right">
                          <p className="font-mono font-medium">{formatNumber(vault.amountLocked)} tokens</p>
                          <p className="text-xs text-lub-green font-mono mt-0.5">+{vault.earned.toFixed(1)} earned</p>
                        </div>
                      </div>
                      <ProgressBar value={pct} color="bg-lub-amber" />
                      <div className="flex justify-between text-xs text-tech-gray-500 mt-2">
                        <span>Locked: {vault.startDate}</span>
                        <span>Matures: {vault.maturityDate}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right: Summary panel */}
          <div className="lg:col-span-1">
            <div className="glow-card p-6 sticky top-24">
              <h3 className="font-medium mb-6">Vault Summary</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Token</span>
                  <span className="font-mono font-medium">{selectedTicker}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Lock Duration</span>
                  <span className="font-mono">{selectedTier} months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">APY</span>
                  <span className="font-mono text-lub-amber">{tier.apy}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Amount</span>
                  <span className="font-mono">{numAmount || '—'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Lock Value</span>
                  <span className="font-mono">{formatUsd(numAmount * token.priceUsd)}</span>
                </div>

                <div className="border-t border-white/[0.06] pt-3">
                  <div className="flex justify-between">
                    <span className="text-tech-gray-400">Projected Earnings</span>
                    <span className="font-mono text-lub-green font-medium">{formatUsd(projectedEarnings)}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-tech-gray-400">Rate Discount</span>
                    <span className="font-mono text-lub-green">{tier.discount}% off</span>
                  </div>
                </div>
              </div>

              {showConfirm ? (
                <div className="mt-6 p-4 rounded-lg bg-lub-amber/10 border border-lub-amber/20">
                  <p className="text-sm font-medium text-lub-amber">Vault Created</p>
                  <p className="text-xs text-tech-gray-400 mt-1">
                    {numAmount} {selectedTicker} locked for {selectedTier} months at {tier.apy}% APY.
                  </p>
                </div>
              ) : (
                <button
                  className="w-full mt-6 btn-amber"
                  onClick={() => numAmount > 0 && setShowConfirm(true)}
                  disabled={numAmount <= 0}
                >
                  Lock Tokens
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
