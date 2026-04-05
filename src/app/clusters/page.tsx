import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CLUSTER_PACKAGES } from '@/lib/mock-data';
import { formatNumber } from '@/lib/utils';

const TIER_COLORS: Record<string, string> = {
  inference: 'from-lub-blue/20 to-lub-blue/5',
  training: 'from-lub-amber/20 to-lub-amber/5',
  'heavy-training': 'from-lub-purple/20 to-lub-purple/5',
  hybrid: 'from-lub-green/20 to-lub-green/5',
};

const TIER_BADGES: Record<string, string> = {
  inference: 'bg-lub-blue/10 text-lub-blue border-lub-blue/20',
  training: 'bg-lub-amber/10 text-lub-amber border-lub-amber/20',
  'heavy-training': 'bg-lub-purple/10 text-lub-purple border-lub-purple/20',
  hybrid: 'bg-lub-green/10 text-lub-green border-lub-green/20',
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

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CLUSTER_PACKAGES.map((cluster) => (
            <div
              key={cluster.id}
              className="glow-card overflow-hidden"
            >
              <div className={`bg-gradient-to-br ${TIER_COLORS[cluster.tier]} p-6 border-b border-white/[0.06]`}>
                <div className="flex items-start justify-between">
                  <div>
                    <span className={`inline-flex items-center text-[10px] uppercase tracking-wider font-medium px-2.5 py-0.5 rounded-full border ${TIER_BADGES[cluster.tier]}`}>
                      {cluster.tier.replace('-', ' ')}
                    </span>
                    <h2 className="text-xl font-semibold mt-3">{cluster.name}</h2>
                    <p className="text-sm text-tech-gray-400 mt-1.5 leading-relaxed">{cluster.description}</p>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-semibold font-mono">${formatNumber(cluster.pricePerMonth)}</span>
                    <span className="text-tech-gray-400 text-sm">/month</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="text-center p-3 bg-tech-gray-800/40 rounded-lg">
                    <p className="text-lg font-mono font-medium">{cluster.gpuCount}x</p>
                    <p className="text-xs text-tech-gray-500">{cluster.gpuModel}</p>
                  </div>
                  <div className="text-center p-3 bg-tech-gray-800/40 rounded-lg">
                    <p className="text-lg font-mono font-medium">{cluster.vcpus}</p>
                    <p className="text-xs text-tech-gray-500">vCPUs</p>
                  </div>
                  <div className="text-center p-3 bg-tech-gray-800/40 rounded-lg">
                    <p className="text-lg font-mono font-medium">{cluster.ramGb >= 1024 ? `${cluster.ramGb / 1024} TB` : `${cluster.ramGb} GB`}</p>
                    <p className="text-xs text-tech-gray-500">RAM</p>
                  </div>
                  <div className="text-center p-3 bg-tech-gray-800/40 rounded-lg">
                    <p className="text-lg font-mono font-medium">{cluster.networkGbps} Gbps</p>
                    <p className="text-xs text-tech-gray-500">Network</p>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {cluster.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-tech-gray-300">
                      <svg className="w-4 h-4 mt-0.5 text-lub-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full btn-primary">
                  Request Access
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom section */}
        <div className="mt-16 glow-card p-8 text-center">
          <h2 className="text-xl font-semibold">Need a Custom Configuration?</h2>
          <p className="text-tech-gray-400 text-sm mt-2 max-w-lg mx-auto">
            We build clusters to spec. Tell us your workload requirements — GPU type, count,
            networking, storage — and we will architect a solution.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <button className="btn-primary">Contact Engineering</button>
            <button className="btn-secondary">View SLA Options</button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
