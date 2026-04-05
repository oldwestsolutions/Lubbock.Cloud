'use client';

import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPUTE_TOKENS, GPU_SPECS, USER_BALANCES } from '@/lib/mock-data';
import { cn, formatUsd } from '@/lib/utils';
import type { GpuModel } from '@/lib/types';

const DURATIONS = [
  { label: '1 hour', hours: 1 },
  { label: '4 hours', hours: 4 },
  { label: '8 hours', hours: 8 },
  { label: '24 hours', hours: 24 },
  { label: '48 hours', hours: 48 },
  { label: '1 week', hours: 168 },
];

const JOB_TYPES = [
  { id: 'session', label: 'Live GPU Session', description: 'Interactive Jupyter/SSH session with full GPU access', icon: '>' },
  { id: 'api', label: 'API Compute Credits', description: 'Consume credits through REST API endpoints', icon: '{}' },
  { id: 'batch', label: 'Batch Job', description: 'Submit a training or inference job to the queue', icon: '[]' },
];

export default function RedeemPage() {
  const [selectedGpu, setSelectedGpu] = useState<GpuModel>('MI300X');
  const [selectedDuration, setSelectedDuration] = useState(1);
  const [selectedJobType, setSelectedJobType] = useState('session');
  const [launched, setLaunched] = useState(false);

  const token = COMPUTE_TOKENS.find((t) => t.gpuModel === selectedGpu)!;
  const gpu = GPU_SPECS.find((g) => g.model === selectedGpu)!;
  const balance = USER_BALANCES.find((b) => b.ticker === token.ticker);
  const tokensNeeded = selectedDuration;
  const costUsd = tokensNeeded * token.priceUsd;
  const hasBalance = (balance?.available ?? 0) >= tokensNeeded;

  return (
    <main>
      <Navbar />
      <div className="page-container">
        <h1 className="section-heading">Redeem Tokens</h1>
        <p className="section-subheading">
          Convert your compute tokens into live GPU sessions, API credits, or batch jobs.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {/* Left: Configuration */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: GPU Selection */}
            <div>
              <h2 className="text-sm font-medium text-tech-gray-300 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-lub-blue/20 text-lub-blue text-xs flex items-center justify-center font-medium">1</span>
                Select GPU Type
              </h2>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {GPU_SPECS.map((g) => {
                  const t = COMPUTE_TOKENS.find((ct) => ct.gpuModel === g.model)!;
                  return (
                    <button
                      key={g.model}
                      onClick={() => setSelectedGpu(g.model)}
                      className={cn(
                        'glow-card p-4 text-left transition-all',
                        selectedGpu === g.model
                          ? 'border-lub-blue/40 shadow-glow'
                          : 'hover:border-white/10'
                      )}
                    >
                      <div className="flex items-center justify-between">
                        <span className={g.vendor === 'AMD' ? 'badge-amd' : 'badge-nvidia'}>{g.vendor}</span>
                        <span className="text-xs font-mono text-tech-gray-500">{formatUsd(t.priceUsd)}/hr</span>
                      </div>
                      <p className="font-medium mt-2">{g.model}</p>
                      <p className="text-xs text-tech-gray-500 mt-1">{g.hbmSize} · {g.fp16Tflops} TFLOPS</p>
                      <div className="mt-3 flex items-center gap-2">
                        <div className={cn('w-2 h-2 rounded-full', g.available > g.total * 0.3 ? 'bg-lub-green' : 'bg-lub-amber')} />
                        <span className="text-xs text-tech-gray-400">{g.available} available</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Duration */}
            <div>
              <h2 className="text-sm font-medium text-tech-gray-300 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-lub-blue/20 text-lub-blue text-xs flex items-center justify-center font-medium">2</span>
                Select Duration
              </h2>
              <div className="grid gap-3 grid-cols-3 sm:grid-cols-6">
                {DURATIONS.map((d) => (
                  <button
                    key={d.hours}
                    onClick={() => setSelectedDuration(d.hours)}
                    className={cn(
                      'glow-card p-3 text-center transition-all',
                      selectedDuration === d.hours
                        ? 'border-lub-blue/40 shadow-glow'
                        : 'hover:border-white/10'
                    )}
                  >
                    <p className="font-mono text-lg font-medium">{d.hours}</p>
                    <p className="text-xs text-tech-gray-500 mt-0.5">{d.hours === 1 ? 'hour' : 'hours'}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Job Type */}
            <div>
              <h2 className="text-sm font-medium text-tech-gray-300 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-lub-blue/20 text-lub-blue text-xs flex items-center justify-center font-medium">3</span>
                Select Job Type
              </h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {JOB_TYPES.map((job) => (
                  <button
                    key={job.id}
                    onClick={() => setSelectedJobType(job.id)}
                    className={cn(
                      'glow-card p-5 text-left transition-all',
                      selectedJobType === job.id
                        ? 'border-lub-blue/40 shadow-glow'
                        : 'hover:border-white/10'
                    )}
                  >
                    <div className="w-8 h-8 rounded-lg bg-tech-gray-800 flex items-center justify-center text-xs font-mono text-lub-blue mb-3">
                      {job.icon}
                    </div>
                    <p className="font-medium text-sm">{job.label}</p>
                    <p className="text-xs text-tech-gray-500 mt-1">{job.description}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Summary */}
          <div className="lg:col-span-1">
            <div className="glow-card p-6 sticky top-24">
              <h3 className="font-medium mb-6">Redemption Summary</h3>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">GPU</span>
                  <span className="font-medium">{gpu.vendor} {gpu.model}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Memory</span>
                  <span className="font-mono text-tech-gray-300">{gpu.hbmSize}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Duration</span>
                  <span className="font-mono text-tech-gray-300">{selectedDuration}h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-tech-gray-400">Job Type</span>
                  <span className="text-tech-gray-300">{JOB_TYPES.find((j) => j.id === selectedJobType)?.label}</span>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex justify-between">
                    <span className="text-tech-gray-400">Tokens Required</span>
                    <span className="font-mono font-medium">{tokensNeeded} {token.ticker}</span>
                  </div>
                  <div className="flex justify-between mt-2">
                    <span className="text-tech-gray-400">USD Value</span>
                    <span className="font-mono font-medium">{formatUsd(costUsd)}</span>
                  </div>
                </div>

                <div className="border-t border-white/[0.06] pt-4">
                  <div className="flex justify-between">
                    <span className="text-tech-gray-400">Your Balance</span>
                    <span className={cn('font-mono', hasBalance ? 'text-lub-green' : 'text-lub-red')}>
                      {balance?.available ?? 0} {token.ticker}
                    </span>
                  </div>
                </div>
              </div>

              {launched ? (
                <div className="mt-6 p-4 rounded-lg bg-lub-green/10 border border-lub-green/20">
                  <p className="text-sm font-medium text-lub-green">Job Launched</p>
                  <p className="text-xs text-tech-gray-400 mt-1">
                    Your {selectedJobType === 'session' ? 'GPU session' : selectedJobType === 'api' ? 'API credits' : 'batch job'} is being provisioned. Check your dashboard for status.
                  </p>
                </div>
              ) : (
                <button
                  className={cn('w-full mt-6', hasBalance ? 'btn-primary' : 'btn-secondary opacity-50 cursor-not-allowed')}
                  onClick={() => hasBalance && setLaunched(true)}
                  disabled={!hasBalance}
                >
                  {hasBalance ? 'Launch Job' : 'Insufficient Balance'}
                </button>
              )}

              {!hasBalance && (
                <p className="text-xs text-tech-gray-500 mt-3 text-center">
                  You need {tokensNeeded - (balance?.available ?? 0)} more tokens.{' '}
                  <a href="/marketplace" className="text-lub-blue hover:underline">Buy tokens</a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
