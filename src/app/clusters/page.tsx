import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CLUSTER_PACKAGES } from '@/lib/mock-data';
import { formatNumber } from '@/lib/utils';

const TIER_COLORS: Record<string, string> = {
  inference: 'from-lub-accent/15 to-tech-gray-900',
  training: 'from-lub-red/12 to-tech-gray-900',
  'heavy-training': 'from-tech-gray-700/30 to-tech-gray-900',
  hybrid: 'from-lub-green-muted to-tech-gray-900',
};

const TIER_BADGES: Record<string, string> = {
  inference: 'bg-lub-accent-muted text-lub-accent border-lub-accent/25',
  training: 'bg-lub-red-muted text-lub-red border-lub-red/25',
  'heavy-training': 'bg-white/[0.06] text-tech-gray-300 border-white/[0.1]',
  hybrid: 'bg-lub-green-muted text-lub-green border-lub-green/25',
};

export const metadata = {
  title: 'Enterprise Clusters — Lubbock Cloud',
  description: 'Dedicated GPU clusters for inference, training, and hybrid workloads. AMD and NVIDIA hardware with InfiniBand networking.',
};

export default function ClustersPage() {
  return (
    <main>
      <Navbar />
      <div className="page-container">
        <div className="max-w-3xl">
          <h1 className="section-heading">Enterprise Cluster Leasing</h1>
          <p className="section-subheading">
            Dedicated GPU clusters built for production workloads. Pre-configured hardware,
            high-speed networking, and white-glove support. Deploy in days, not months.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {CLUSTER_PACKAGES.map((cluster) => (
            <div key={cluster.id} className="glow-card overflow-hidden">
              <div className={`bg-gradient-to-br ${TIER_COLORS[cluster.tier]} p-8 border-b border-white/[0.06]`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span
                      className={`inline-flex items-center text-[10px] uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-full border ${TIER_BADGES[cluster.tier]}`}
                    >
                      {cluster.tier.replace('-', ' ')}
                    </span>
                    <h2 className="text-xl font-semibold mt-4 text-lub-ink">{cluster.name}</h2>
                    <p className="text-sm text-tech-gray-500 mt-2 leading-relaxed">{cluster.description}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold font-mono text-lub-ink">${formatNumber(cluster.pricePerMonth)}</span>
                    <span className="text-tech-gray-500 text-sm">/month</span>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-2 gap-3 mb-8">
                  <div className="text-center p-4 bg-tech-gray-900/80 rounded-xl border border-white/[0.05]">
                    <p className="text-lg font-mono font-medium text-lub-ink">{cluster.gpuCount}x</p>
                    <p className="text-xs text-tech-gray-500 mt-0.5">{cluster.gpuModel}</p>
                  </div>
                  <div className="text-center p-4 bg-tech-gray-900/80 rounded-xl border border-white/[0.05]">
                    <p className="text-lg font-mono font-medium text-lub-ink">{cluster.vcpus}</p>
                    <p className="text-xs text-tech-gray-500 mt-0.5">vCPUs</p>
                  </div>
                  <div className="text-center p-4 bg-tech-gray-900/80 rounded-xl border border-white/[0.05]">
                    <p className="text-lg font-mono font-medium text-lub-ink">
                      {cluster.ramGb >= 1024 ? `${cluster.ramGb / 1024} TB` : `${cluster.ramGb} GB`}
                    </p>
                    <p className="text-xs text-tech-gray-500 mt-0.5">RAM</p>
                  </div>
                  <div className="text-center p-4 bg-tech-gray-900/80 rounded-xl border border-white/[0.05]">
                    <p className="text-lg font-mono font-medium text-lub-ink">{cluster.networkGbps} Gbps</p>
                    <p className="text-xs text-tech-gray-500 mt-0.5">Network</p>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {cluster.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-tech-gray-400">
                      <svg
                        className="w-4 h-4 mt-0.5 text-lub-accent flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button type="button" className="w-full btn-primary">
                  Request Access
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 glow-card p-10 text-center">
          <h2 className="text-xl font-semibold text-lub-ink">Need a Custom Configuration?</h2>
          <p className="text-tech-gray-500 text-sm mt-3 max-w-lg mx-auto leading-relaxed">
            We build clusters to spec. Tell us your workload requirements — GPU type, count, networking, storage — and we
            will architect a solution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button type="button" className="btn-primary">
              Contact Engineering
            </button>
            <button type="button" className="btn-secondary">
              View SLA Options
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
