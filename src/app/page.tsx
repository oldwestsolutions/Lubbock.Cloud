import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FeatureGrid, InfrastructureSplit, CaseStudyMetrics } from '@/components/home';
import { COMPUTE_TOKENS, GPU_SPECS, ROCM_SERVICES } from '@/lib/mock-data';

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-50" />
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="relative mx-auto max-w-[1280px] container-px pt-20 pb-20 sm:pt-28 sm:pb-28 lg:pt-32 lg:pb-32">
        <div className="max-w-[720px]">
          <p className="nb-eyebrow mb-6">Tokenized GPU cloud</p>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 mb-8 backdrop-blur-sm">
            <span className="nb-tag !rounded-full !py-0.5">Live fleet</span>
            <span className="text-[13px] text-tech-gray-400">934 GPUs · 6 accelerator classes</span>
          </div>

          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.03em] leading-[1.05] text-lub-ink">
            The cloud for AI
            <br />
            infrastructure,{' '}
            <span className="text-nb-lime">made liquid</span>.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-tech-gray-500 max-w-xl leading-[1.55]">
            Buy and trade compute tokens backed by real AMD and NVIDIA hardware. Redeem for GPU sessions,
            API credits, or batch jobs — with the clarity of a modern AI platform.
          </p>

          <div className="mt-11 flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link href="/tokens" className="btn-primary justify-center sm:justify-center">
              Tokenomics
            </Link>
            <Link href="/marketplace" className="btn-secondary justify-center">
              Open marketplace
            </Link>
          </div>

          <div className="mt-20 flex flex-col gap-y-8 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-10 lg:gap-x-14">
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-tech-gray-200">
              Nvidia
            </p>
            <p className="font-display text-xl sm:text-2xl font-semibold tracking-tight text-tech-gray-200">
              AMD
            </p>
            <p className="font-display text-lg sm:text-xl md:text-2xl font-semibold tracking-tight text-tech-gray-200 whitespace-nowrap">
              Super Micro Computers
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenTickerSection() {
  return (
    <section className="nb-section bg-nb-surface/80">
      <div className="mx-auto max-w-[1280px] container-px py-20 sm:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <p className="nb-eyebrow mb-3">Marketplace</p>
            <h2 className="section-heading">Live token prices</h2>
            <p className="section-subheading mt-0">
              Each token maps to one GPU-hour on dedicated hardware.
            </p>
          </div>
          <Link href="/marketplace" className="hidden sm:inline-flex btn-secondary !py-2.5 !px-6 text-sm shrink-0">
            View all
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPUTE_TOKENS.map((token) => (
            <Link
              key={token.id}
              href="/marketplace"
              className="glow-card p-5 hover:border-white/10 transition-all group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="ticker-text font-medium text-lub-ink">{token.ticker}</span>
                    <span className={token.vendor === 'AMD' ? 'badge-amd' : 'badge-nvidia'}>
                      {token.vendor}
                    </span>
                  </div>
                  <p className="text-xs text-tech-gray-500 mt-1">{token.hbmTier}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-lg font-medium">${token.priceUsd.toFixed(2)}</p>
                  <p className={`text-xs font-mono ${token.change24h >= 0 ? 'change-positive' : 'change-negative'}`}>
                    {token.change24h >= 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between text-xs text-tech-gray-500">
                <span>Vol: ${(token.volume24h / 1_000_000).toFixed(1)}M</span>
                <span>MCap: ${(token.marketCap / 1_000_000).toFixed(0)}M</span>
                <span>{token.gpuHoursPerToken} GPU-hr/token</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Acquire Tokens',
      description:
        'Purchase compute tokens backed by specific GPU hardware. Each token represents one GPU-hour of compute on that accelerator.',
      cta: 'Buy Tokens',
      href: '/marketplace',
    },
    {
      number: '02',
      title: 'Redeem or Trade',
      description:
        'Redeem tokens for live GPU sessions, API credits, or batch jobs. Or trade unused tokens on the open marketplace at market price.',
      cta: 'Start Trading',
      href: '/marketplace',
    },
    {
      number: '03',
      title: 'Lock in Vaults',
      description:
        'Lock tokens for 3, 6, or 12 months to earn yield, discounted compute rates, and priority queue access.',
      cta: 'Explore Vaults',
      href: '/vaults',
    },
    {
      number: '04',
      title: 'Deploy at Scale',
      description:
        'Lease enterprise clusters with dedicated hardware, InfiniBand networking, and white-glove support for production workloads.',
      cta: 'View Clusters',
      href: '/clusters',
    },
  ];

  return (
    <section className="relative nb-section">
      <div className="absolute inset-0 bg-grid-dense bg-grid-dense opacity-20" />
      <div className="relative mx-auto max-w-[1280px] container-px py-20 sm:py-24">
        <p className="nb-eyebrow text-center mb-3">How it works</p>
        <h2 className="section-heading text-center">From tokens to production GPUs</h2>
        <p className="section-subheading text-center mx-auto">
          Four steps — the same clarity you expect from a modern AI cloud.
        </p>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="glow-card p-7 sm:p-8 group">
              <span className="font-display text-4xl font-semibold text-tech-gray-800 group-hover:text-nb-lime/30 transition-colors">
                {step.number}
              </span>
              <h3 className="font-display text-lg font-semibold mt-5 text-lub-ink">{step.title}</h3>
              <p className="text-sm text-tech-gray-500 mt-3 leading-relaxed">{step.description}</p>
              <Link
                href={step.href}
                className="inline-block mt-5 text-sm font-medium text-nb-lime hover:text-nb-lime-hover transition-colors"
              >
                {step.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GpuFleetSection() {
  return (
    <section className="nb-section">
      <div className="mx-auto max-w-[1280px] container-px py-20 sm:py-24">
        <p className="nb-eyebrow mb-3">Fleet</p>
        <h2 className="section-heading">Accelerator availability</h2>
        <p className="section-subheading">
          Live view of capacity across our Lubbock, Texas region.
        </p>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-white/[0.07] bg-nb-black/30 p-4 sm:p-6">
          <table className="w-full min-w-[700px]">
            <thead>
              <tr className="border-b border-white/[0.06]">
                <th className="table-header text-left pb-3">Accelerator</th>
                <th className="table-header text-left pb-3">Architecture</th>
                <th className="table-header text-left pb-3">HBM</th>
                <th className="table-header text-left pb-3">FP16 TFLOPS</th>
                <th className="table-header text-left pb-3">TDP</th>
                <th className="table-header text-left pb-3">Availability</th>
              </tr>
            </thead>
            <tbody>
              {GPU_SPECS.map((gpu) => {
                const pct = (gpu.available / gpu.total) * 100;
                return (
                  <tr key={gpu.model} className="border-b border-white/[0.04] hover:bg-white/[0.02]">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <span className={gpu.vendor === 'AMD' ? 'badge-amd' : 'badge-nvidia'}>{gpu.vendor}</span>
                        <span className="font-medium">{gpu.model}</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-tech-gray-400">{gpu.architecture}</td>
                    <td className="py-4 text-sm font-mono text-tech-gray-300">{gpu.hbmSize}</td>
                    <td className="py-4 text-sm font-mono text-tech-gray-300">{gpu.fp16Tflops}</td>
                    <td className="py-4 text-sm font-mono text-tech-gray-300">{gpu.tdp}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-3 min-w-[140px]">
                        <div className="flex-1 h-1.5 bg-tech-gray-800 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${pct > 60 ? 'bg-tech-gray-300' : pct > 30 ? 'bg-tech-gray-600' : 'bg-tech-gray-800'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-tech-gray-400 w-16">
                          {gpu.available}/{gpu.total}
                        </span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function RocmSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-tech-gray-900/80 to-transparent" />
      <div className="relative mx-auto max-w-[1280px] container-px py-20 sm:py-24">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <span className="badge-amd">AMD</span>
          <span className="nb-tag">ROCm-native</span>
        </div>
        <h2 className="section-heading">Managed ROCm services</h2>
        <p className="section-subheading">
          Purpose-built AI services running natively on AMD Instinct hardware. No ROCm complexity — just APIs.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROCM_SERVICES.map((service) => (
            <div key={service.id} className="glow-card p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{service.name}</h3>
                {!service.available && (
                  <span className="text-[10px] uppercase tracking-wider text-tech-gray-400 bg-white/[0.06] border border-white/[0.1] rounded-full px-2 py-0.5">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-tech-gray-400 mt-2 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-tech-gray-500">{service.gpuModel}</span>
                <span className="font-mono text-nb-lime">${service.pricePerHour.toFixed(2)}/hr</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="nb-section bg-nb-surface/50">
      <div className="mx-auto max-w-[1280px] container-px py-24 sm:py-32 text-center">
        <p className="nb-eyebrow mb-4">Get started</p>
        <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold tracking-tight text-lub-ink leading-[1.1]">
          Own, trade, and deploy
          <br />
          <span className="text-nb-lime">GPU infrastructure</span>
        </h2>
        <p className="mt-6 text-tech-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
          Stop renting by the hour. Build on tokenized compute with a product experience modeled for AI teams.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <Link href="/tokens" className="btn-primary">
            Get started
          </Link>
          <Link href="/docs" className="btn-secondary">
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <InfrastructureSplit />
      <CaseStudyMetrics />
      <FeatureGrid />
      <TokenTickerSection />
      <GpuFleetSection />
      <RocmSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
