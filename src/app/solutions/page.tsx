import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Hash, Zap, Droplet, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Solutions • Lubbock Cloud',
  description: 'Energy arbitrage, compute arbitrage, and natural resource optimization solutions for West Texas.',
};

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl container-px py-12 sm:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Solutions</h1>
          <p className="text-tech-gray-300 text-lg max-w-3xl">
            Three interconnected engines that transform West Texas energy constraints into competitive advantages
          </p>
        </div>

        <div className="space-y-16">
          {/* Energy Arbitrage Solution */}
          <div className="card-surface rounded-xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <Hash className="w-6 h-6 text-tech-red" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Energy Arbitrage</h2>
                <span className="px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Primary Engine</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg mb-8">
              Transform power price volatility into revenue through intelligent load management and storage. This is the backbone of Lubbock.cloud.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Inputs</h3>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>• Cheap or negative-priced electricity</li>
                  <li>• Grid imbalance events</li>
                  <li>• Off-peak pricing</li>
                </ul>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Tools</h3>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>• Bitcoin miners</li>
                  <li>• Battery storage</li>
                  <li>• Smart load shedding</li>
                </ul>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">Outputs</h3>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>• BTC mining revenue</li>
                  <li>• Grid services payments</li>
                  <li>• Peak/off-peak spread</li>
                </ul>
              </div>
            </div>

            <Link
              href="/#three-pillars"
              className="inline-flex items-center gap-2 rounded-md bg-tech-red px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-opacity"
            >
              Learn More About Energy Arbitrage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Compute Arbitrage Solution */}
          <div className="card-surface rounded-xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-tech-blue" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Compute Arbitrage</h2>
                <span className="px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">Secondary Engine</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg mb-8">
              Interruptible compute that adapts to power pricing in real-time. This is where your cloud name actually earns its keep.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">When Power is Cheap</h3>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>→ Run miners / HPC jobs</li>
                  <li>→ Process AI inference / batch jobs</li>
                  <li>→ Handle storage-heavy workloads</li>
                </ul>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-3">When Power is Expensive</h3>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>→ Shut down compute</li>
                  <li>→ Discharge batteries</li>
                  <li>→ Sell power back to grid</li>
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">BTC Mining</h4>
                <p className="text-sm text-tech-gray-300">Interruptible, globally priced compute</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">AI Inference / Batch Jobs</h4>
                <p className="text-sm text-tech-gray-300">Non-latency-sensitive workloads</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Storage-Heavy Workloads</h4>
                <p className="text-sm text-tech-gray-300">Pure Storage-style operations</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Backups / Cold Data / Archive</h4>
                <p className="text-sm text-tech-gray-300">Power-efficient storage operations</p>
              </div>
            </div>

            <Link
              href="/#three-pillars"
              className="inline-flex items-center gap-2 rounded-md bg-tech-blue px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-opacity"
            >
              Learn More About Compute Arbitrage
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Natural Resource Optimization Solution */}
          <div className="card-surface rounded-xl p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-tech-gray-700/50 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-tech-gray-400" />
              </div>
              <div>
                <h2 className="text-3xl font-semibold">Natural Resource Optimization</h2>
                <span className="px-4 py-1.5 rounded-full bg-tech-gray-700/50 text-tech-gray-300 text-sm font-medium">Long-Term Moat</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg mb-8">
              Optimizing water, power, and land resources creates sustainable competitive advantages. This is where Lubbock.cloud becomes hard to copy.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-tech-blue" />
                  Water Optimization
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white mb-2 text-sm">Track:</h4>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Pumping costs</li>
                      <li>• Power-water coupling</li>
                      <li>• Seasonal scarcity</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2 text-sm">Optimize:</h4>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• When to pump</li>
                      <li>• When to store</li>
                      <li>• When to recycle or resell</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-tech-red" />
                  Power Optimization
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-white mb-2 text-sm">Co-locate:</h4>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Generation</li>
                      <li>• Storage</li>
                      <li>• Load</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2 text-sm">Monetize:</h4>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Demand response</li>
                      <li>• Curtailment avoidance</li>
                      <li>• Ancillary services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/#three-pillars"
              className="inline-flex items-center gap-2 rounded-md bg-tech-gray-700 px-6 py-3 text-sm font-medium text-white hover:bg-tech-gray-600 transition-colors"
            >
              Learn More About Resource Optimization
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

