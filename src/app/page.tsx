import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { COMPUTE_TOKENS, GPU_SPECS, ROCM_SERVICES } from '@/lib/mock-data';

function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40" />
      <div className="absolute inset-0 bg-hero-fade" />

      <div className="relative mx-auto max-w-7xl container-px pt-28 pb-24 sm:pt-36 sm:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-lub-accent-muted border border-lub-accent/20 px-4 py-2 mb-10">
            <div className="w-1.5 h-1.5 rounded-full bg-lub-accent" />
            <span className="text-xs font-medium tracking-wide text-tech-gray-300">
              Live — 934 GPUs across 6 accelerator classes
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-semibold tracking-tight leading-[1.06] text-lub-ink">
            Compute is no longer
            <br />
            rented. It&apos;s{' '}
            <span className="text-lub-accent">owned</span>,{' '}
            <span className="text-lub-red">traded</span>,
            <br />
            and <span className="text-tech-gray-200">deployed</span>.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-tech-gray-500 max-w-2xl leading-relaxed">
            Tokenized GPU infrastructure backed by real AMD and NVIDIA hardware.
            Buy compute tokens, redeem them for live GPU sessions, or trade them
            on an open marketplace. GPU infrastructure, made liquid.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/tokens" className="btn-primary text-base px-8 py-3">
              Explore Tokens
            </Link>
            <Link href="/marketplace" className="btn-secondary text-base px-8 py-3">
              Open Marketplace
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {[
              { label: 'Total GPU Capacity', value: '1,568' },
              { label: 'Tokens Circulating', value: '60M+' },
              { label: 'Market Cap', value: '$253M' },
              { label: '24h Volume', value: '$13.3M' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="stat-value text-xl sm:text-2xl">{stat.value}</p>
                <p className="stat-label mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TokenTickerSection() {
  return (
    <section className="nb-section bg-tech-gray-900/40">
      <div className="mx-auto max-w-7xl container-px py-20">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="section-heading">Live Token Prices</h2>
            <p className="section-subheading">
              Each token is backed 1:1 by a GPU-hour on real hardware.
            </p>
          </div>
          <Link href="/tokens" className="hidden sm:inline-flex btn-secondary text-xs">
            View All
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPUTE_TOKENS.map((token) => (
            <Link
              key={token.id}
              href="/tokens"
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
      description: 'Purchase compute tokens backed by specific GPU hardware. Each token represents one GPU-hour of compute on that accelerator.',
      cta: 'Buy Tokens',
      href: '/marketplace',
    },
    {
      number: '02',
      title: 'Redeem or Trade',
      description: 'Redeem tokens for live GPU sessions, API credits, or batch jobs. Or trade unused tokens on the open marketplace at market price.',
      cta: 'Start Trading',
      href: '/marketplace',
    },
    {
      number: '03',
      title: 'Lock in Vaults',
      description: 'Lock tokens for 3, 6, or 12 months to earn yield, discounted compute rates, and priority queue access.',
      cta: 'Explore Vaults',
      href: '/vaults',
    },
    {
      number: '04',
      title: 'Deploy at Scale',
      description: 'Lease enterprise clusters with dedicated hardware, InfiniBand networking, and white-glove support for production workloads.',
      cta: 'View Clusters',
      href: '/clusters',
    },
  ];

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-grid-dense bg-grid-dense opacity-20" />
      <div className="relative mx-auto max-w-7xl container-px py-20">
        <h2 className="section-heading text-center">How It Works</h2>
        <p className="section-subheading text-center mx-auto">
          From token acquisition to GPU deployment in four steps.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="glow-card p-6 group">
              <span className="text-4xl font-semibold text-tech-gray-800 group-hover:text-lub-accent/25 transition-colors">
                {step.number}
              </span>
              <h3 className="text-lg font-medium mt-4 text-lub-ink">{step.title}</h3>
              <p className="text-sm text-tech-gray-500 mt-2 leading-relaxed">{step.description}</p>
              <Link href={step.href} className="inline-block mt-4 text-sm text-lub-accent hover:text-lub-green transition-colors">
                {step.cta} &rarr;
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
      <div className="mx-auto max-w-7xl container-px py-20">
        <h2 className="section-heading">GPU Fleet Status</h2>
        <p className="section-subheading">
          Real-time availability across our accelerator fleet in Lubbock, Texas.
        </p>

        <div className="mt-12 overflow-x-auto">
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
                            className={`h-full rounded-full ${pct > 60 ? 'bg-lub-green' : pct > 30 ? 'bg-tech-gray-600' : 'bg-lub-red-deep'}`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono text-tech-gray-400 w-16">{gpu.available}/{gpu.total}</span>
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
      <div className="absolute inset-0 bg-gradient-to-b from-lub-red-muted to-transparent" />
      <div className="relative mx-auto max-w-7xl container-px py-20">
        <div className="flex items-center gap-3 mb-3">
          <span className="badge-amd">AMD</span>
          <span className="text-xs text-tech-gray-500 uppercase tracking-wider font-medium">ROCm-Native</span>
        </div>
        <h2 className="section-heading">ROCm-Native Compute Services</h2>
        <p className="section-subheading">
          Purpose-built AI services running natively on AMD Instinct hardware.
          No ROCm complexity — just APIs.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROCM_SERVICES.map((service) => (
            <div key={service.id} className="glow-card p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-medium">{service.name}</h3>
                {!service.available && (
                  <span className="text-[10px] uppercase tracking-wider text-lub-red bg-lub-red-muted border border-lub-red/25 rounded-full px-2 py-0.5">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-tech-gray-400 mt-2 leading-relaxed">{service.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs">
                <span className="font-mono text-tech-gray-500">{service.gpuModel}</span>
                <span className="font-mono text-lub-accent">${service.pricePerHour.toFixed(2)}/hr</span>
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
    <section className="nb-section">
      <div className="mx-auto max-w-7xl container-px py-28 text-center">
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight text-lub-ink">
          GPU infrastructure,
          <br />
          <span className="text-lub-accent">made liquid.</span>
        </h2>
        <p className="mt-6 text-tech-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          Stop renting compute by the hour. Own it, trade it, and deploy it
          on your terms.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/tokens" className="btn-primary text-base px-8 py-3">
            Get Started
          </Link>
          <Link href="/docs" className="btn-secondary text-base px-8 py-3">
            Read the Docs
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
      <TokenTickerSection />
      <HowItWorksSection />
      <GpuFleetSection />
      <RocmSection />
      <CtaSection />
      <Footer />
    </main>
  );
}
