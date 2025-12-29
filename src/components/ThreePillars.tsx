"use client";

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
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-bold text-tech-red">1️⃣</div>
            <h3 className="text-3xl font-semibold">Energy Arbitrage</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Primary Engine</span>
          </div>
          <p className="text-tech-gray-300 text-lg mb-8">
            This is the backbone. Energy arbitrage turns power price volatility into revenue through intelligent load management and storage.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Inputs</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Cheap or negative-priced electricity (wind/solar curtailment)</span>
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

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Tools</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Bitcoin miners (interruptible, mobile, instant load)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Batteries (store cheap power, discharge when expensive)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Smart load shedding (turn off instantly)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Outputs</h4>
              <ul className="space-y-2 text-tech-gray-300">
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
                  <span>Peak/off-peak spread capture</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-red">
            <p className="text-white font-medium">
              <strong>Key Insight:</strong> Bitcoin miners are not "the business" — they are a flexible load that turns wasted power into money.
            </p>
          </div>
        </div>

        {/* Pillar 2: Compute Arbitrage */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-bold text-tech-blue">2️⃣</div>
            <h3 className="text-3xl font-semibold">Compute Arbitrage</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">Secondary Engine</span>
          </div>
          <p className="text-tech-gray-300 text-lg mb-8">
            This is where your cloud name actually earns its keep. Interruptible compute that adapts to power pricing in real-time.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">When Power is Cheap</h4>
              <ul className="space-y-2 text-tech-gray-300">
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
              <h4 className="text-xl font-semibold text-white">When Power is Expensive</h4>
              <ul className="space-y-2 text-tech-gray-300">
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

          <div className="space-y-4 mb-8">
            <h4 className="text-xl font-semibold text-white">Compute Options</h4>
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
          </div>

          <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-blue">
            <p className="text-white font-medium">
              <strong>Cloud Without Uptime Guarantees:</strong> Mining, AI batch, and research workloads don't care about interruptions. This enables cost structures impossible for traditional cloud providers.
            </p>
          </div>
        </div>

        {/* Pillar 3: Natural Resource Optimization */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-4xl font-bold text-tech-gray-400">3️⃣</div>
            <h3 className="text-3xl font-semibold">Natural Resource Optimization</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-gray-700/50 text-tech-gray-300 text-sm font-medium">Long-Term Moat</span>
          </div>
          <p className="text-tech-gray-300 text-lg mb-8">
            This is where Lubbock.cloud becomes hard to copy. Optimizing water, power, and land resources creates sustainable competitive advantages.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">💧</span>
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
                      <li>• When to recycle or resell usage rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
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
          </div>

          <div className="mt-8 bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-gray-500">
            <p className="text-white font-medium">
              <strong>Strategic Shift:</strong> This turns Lubbock.cloud into a resource optimizer, not just a miner. The integration of water, power, and land optimization creates a defensible moat that competitors cannot easily replicate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

