"use client";
import { Hash, Zap, Droplet, CheckCircle, ArrowRight } from 'lucide-react';

export function ThreePillars() {
  return (
    <section id="three-pillars" className="mx-auto max-w-7xl container-px py-20 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">The Three Pillars of Lubbock.cloud</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Three interconnected engines that transform West Texas energy constraints into competitive advantages
        </p>
      </div>

      <div className="space-y-24">
        {/* Pillar 1: Energy Arbitrage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">energy-arbitrage.terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-tech-gray-400">$</span>{' '}
                <span className="text-white">lubbock</span>{' '}
                <span className="text-green-400">deploy --energy-arbitrage</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Bitcoin miners: 12 active</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Battery storage: 2.4MWh allocated</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Load shedding: 8MW capacity</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Carbon footprint: 0kg CO2</span>
              </div>
              <div className="flex items-center gap-2 text-white mt-4">
                <span className="text-2xl">⚡</span>
                <span className="font-semibold">Energy arbitrage ready</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Hash className="w-6 h-6 text-tech-red mx-auto mb-2" />
                <span className="text-white text-sm">Mining</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Zap className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <span className="text-white text-sm">Batteries</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Droplet className="w-6 h-6 text-tech-gray-400 mx-auto mb-2" />
                <span className="text-white text-sm">Load</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <Hash className="w-6 h-6 text-tech-red" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Energy Arbitrage</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Primary Engine</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg">
              This is the backbone. Energy arbitrage turns power price volatility into revenue through intelligent load management and storage.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Inputs</h4>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Cheap or negative-priced electricity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Grid imbalance events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Off-peak pricing</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Tools</h4>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Bitcoin miners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Smart load shedding</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-white">Outputs</h4>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>BTC mining revenue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Grid services payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Peak/off-peak spread</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-red">
              <p className="text-white font-medium">
                <strong>Key Insight:</strong> Bitcoin miners are not &quot;the business&quot; — they are a flexible load that turns wasted power into money.
              </p>
            </div>
          </div>
        </div>

        {/* Pillar 2: Compute Arbitrage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <Zap className="w-6 h-6 text-tech-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Compute Arbitrage</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">Secondary Engine</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg">
              This is where your cloud name actually earns its keep. Interruptible compute that adapts to power pricing in real-time.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-green-400" />
                  When Power is Cheap
                </h4>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Run miners / HPC jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Process AI inference / batch jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Handle storage-heavy workloads</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-red-400" />
                  When Power is Expensive
                </h4>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Shut down compute</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Discharge batteries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-blue mt-1">→</span>
                    <span>Sell power back to grid</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">BTC Mining</h5>
                <p className="text-sm text-tech-gray-300">Interruptible, globally priced compute</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">AI Inference / Batch Jobs</h5>
                <p className="text-sm text-tech-gray-300">Non-latency-sensitive workloads</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Storage-Heavy Workloads</h5>
                <p className="text-sm text-tech-gray-300">Pure Storage-style operations</p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4">
                <h5 className="font-semibold text-white mb-2">Backups / Cold Data / Archive</h5>
                <p className="text-sm text-tech-gray-300">Power-efficient storage operations</p>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-blue">
              <p className="text-white font-medium">
                <strong>Cloud Without Uptime Guarantees:</strong> Mining, AI batch, and research workloads don&apos;t care about interruptions. This enables cost structures impossible for traditional cloud providers.
              </p>
            </div>
          </div>

          {/* Right Column - Terminal Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">compute-arbitrage.terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-tech-gray-400">$</span>{' '}
                <span className="text-white">lubbock</span>{' '}
                <span className="text-green-400">compute --adaptive</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>HPC jobs: 24 active</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>AI inference: 8.2TFLOPS</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Storage: 12.4TB allocated</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Power cost: $0.02/kWh</span>
              </div>
              <div className="flex items-center gap-2 text-white mt-4">
                <span className="text-2xl">☁️</span>
                <span className="font-semibold">Compute arbitrage active</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Hash className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <span className="text-white text-sm">Mining</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Zap className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <span className="text-white text-sm">AI/ML</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Droplet className="w-6 h-6 text-tech-gray-400 mx-auto mb-2" />
                <span className="text-white text-sm">Storage</span>
              </div>
            </div>
          </div>
        </div>

        {/* Pillar 3: Natural Resource Optimization */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Terminal Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">resource-optimization.terminal</span>
            </div>
            <div className="font-mono text-sm space-y-2">
              <div>
                <span className="text-tech-gray-400">$</span>{' '}
                <span className="text-white">lubbock</span>{' '}
                <span className="text-green-400">optimize --resources</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Water efficiency: 94%</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Power co-location: 3 sites</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Land optimization: 240 acres</span>
              </div>
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle className="w-4 h-4" />
                <span>Resource moat: active</span>
              </div>
              <div className="flex items-center gap-2 text-white mt-4">
                <span className="text-2xl">🏔️</span>
                <span className="font-semibold">Resource optimization ready</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Droplet className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <span className="text-white text-sm">Water</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Zap className="w-6 h-6 text-tech-red mx-auto mb-2" />
                <span className="text-white text-sm">Power</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Hash className="w-6 h-6 text-tech-gray-400 mx-auto mb-2" />
                <span className="text-white text-sm">Land</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-gray-700/50 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-tech-gray-400" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Natural Resource Optimization</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-gray-700/50 text-tech-gray-300 text-sm font-medium">Long-Term Moat</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg">
              This is where Lubbock.cloud becomes hard to copy. Optimizing water, power, and land resources creates sustainable competitive advantages.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Droplet className="w-5 h-5 text-tech-blue" />
                  Water Optimization
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white mb-2">Track:</h5>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Pumping costs</li>
                      <li>• Power-water coupling</li>
                      <li>• Seasonal scarcity</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Optimize:</h5>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• When to pump</li>
                      <li>• When to store</li>
                      <li>• When to recycle or resell</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                  <Zap className="w-5 h-5 text-tech-red" />
                  Power Optimization
                </h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium text-white mb-2">Co-locate:</h5>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Generation</li>
                      <li>• Storage</li>
                      <li>• Load</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium text-white mb-2">Monetize:</h5>
                    <ul className="space-y-1 text-tech-gray-300 text-sm">
                      <li>• Demand response</li>
                      <li>• Curtailment avoidance</li>
                      <li>• Ancillary services</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-gray-500">
              <p className="text-white font-medium">
                <strong>Strategic Shift:</strong> This turns Lubbock.cloud into a resource optimizer, not just a miner. The integration of water, power, and land optimization creates a defensible moat that competitors cannot easily replicate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
