"use client";
import { Database, GitBranch, Battery, Cpu } from 'lucide-react';

export function SystemLayers() {
  return (
    <section id="system-layers" className="mx-auto max-w-7xl container-px py-20 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">System Architecture</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Four interconnected layers that transform energy constraints into competitive advantages
        </p>
      </div>

      <div className="space-y-16">
        {/* Layer 1: Storage */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
              <Database className="w-6 h-6 text-tech-red" />
            </div>
            <h3 className="text-3xl font-semibold">Storage Layer</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Pure Storage Archetype</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What This Layer Does</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Absorbs intermittent workloads</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Handles massive write-heavy and cold storage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Enables interruptible compute</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Anchors data gravity near power</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Why Storage Matters</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-tech-gray-300 text-sm">
                    Storage is power-efficient relative to compute, can run during cheap power windows, allows delayed processing (batch jobs), and monetizes power without latency constraints.
                  </p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-tech-gray-300 text-sm">
                    Pure Storage represents high-density, low-latency, software-defined control of hardware. You&apos;re using their class of technology as an enabler.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-red">
              <h5 className="font-semibold text-white mb-2">Success Metrics</h5>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• Cost per TB per kWh</li>
                <li>• Storage uptime tolerance</li>
                <li>• Write efficiency during negative power pricing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 2: Algorithms */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
              <GitBranch className="w-6 h-6 text-tech-blue" />
            </div>
            <h3 className="text-3xl font-semibold">Algorithm & Workflow Layer</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">GitLab as System of Record</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What This Layer Does</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Stores algorithms, not just code</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Tracks energy strategies, load-shedding logic, trading heuristics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-blue mt-1">•</span>
                  <span>Enables reproducibility and auditability</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Why GitLab-Style Systems Matter</h4>
              <p className="text-tech-gray-300 mb-4">
                This is where energy arbitrage logic lives, mining schedules live, battery dispatch logic lives, and risk controls live.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Versioned Infrastructure Logic</h5>
                  <p className="text-tech-gray-300 text-sm">Track changes to physical system configurations</p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">CI/CD for Physical Systems</h5>
                  <p className="text-tech-gray-300 text-sm">Deploy energy strategies like software</p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2">Separation of Logic from Execution</h5>
                  <p className="text-tech-gray-300 text-sm">Control infrastructure like code</p>
                </div>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-blue">
              <h5 className="font-semibold text-white mb-2">Key Insight</h5>
              <p className="text-tech-gray-300 text-sm mb-3">
                Your &quot;algorithms&quot; are not just financial. They are:
              </p>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• Power routing decisions</li>
                <li>• Storage timing decisions</li>
                <li>• Water pumping schedules</li>
                <li>• Miner on/off logic</li>
              </ul>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-blue">
              <h5 className="font-semibold text-white mb-2">Success Metrics</h5>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• Time from strategy update → live deployment</li>
                <li>• Rollback safety</li>
                <li>• Audit trail integrity</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 3: Energy Storage */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-tech-gray-700/50 flex items-center justify-center">
              <Battery className="w-6 h-6 text-tech-gray-400" />
            </div>
            <h3 className="text-3xl font-semibold">Energy Storage Layer</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-gray-700/50 text-tech-gray-300 text-sm font-medium">Balance-Sheet Multipliers</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What This Layer Does</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-gray-400 mt-1">•</span>
                  <span>Converts volatility into margin</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-gray-400 mt-1">•</span>
                  <span>Protects hardware</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-gray-400 mt-1">•</span>
                  <span>Enables market participation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-gray-400 mt-1">•</span>
                  <span>Arbitrages time</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Why Batteries Are a Success Driver</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-tech-gray-400 text-sm mb-2 font-medium">Without batteries:</p>
                  <p className="text-white">You chase cheap power</p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-tech-gray-400 text-sm mb-2 font-medium">With batteries:</p>
                  <p className="text-white">You shape markets</p>
                </div>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <p className="text-white font-medium mb-3">Batteries let you:</p>
                <ul className="space-y-2 text-tech-gray-300 text-sm">
                  <li>• Buy power when it&apos;s free</li>
                  <li>• Sell when it&apos;s scarce</li>
                  <li>• Run miners only when profitable</li>
                  <li>• Provide ancillary grid services</li>
                </ul>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-gray-500">
              <h5 className="font-semibold text-white mb-2">Success Metrics</h5>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• $/MWh cycled</li>
                <li>• Degradation-adjusted ROI</li>
                <li>• Dispatch accuracy vs forecast</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer 4: Flexible Compute */}
        <div className="card-surface rounded-xl p-8 sm:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
              <Cpu className="w-6 h-6 text-tech-red" />
            </div>
            <h3 className="text-3xl font-semibold">Flexible Compute Layer</h3>
            <span className="ml-auto px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Bitcoin Miners as Synthetic Demand</span>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-white mb-3">What This Layer Does</h4>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Monetizes excess power instantly</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Acts as a buyer of last resort</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Provides price discovery for energy</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-3">Why Bitcoin Miners Matter</h4>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">They are:</p>
                  <ul className="space-y-1 text-tech-gray-300 text-sm">
                    <li>• Stateless</li>
                    <li>• Interruptible</li>
                    <li>• Globally priced</li>
                    <li>• Physically mobile</li>
                  </ul>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <p className="text-white font-medium mb-2">Strategic Role:</p>
                  <p className="text-tech-gray-300 text-sm">
                    Miners are not speculative assets here — they are energy conversion machines. You&apos;re using miners the way oil traders use storage tanks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-red">
              <h5 className="font-semibold text-white mb-2">Success Metrics</h5>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• Hashrate per kWh</li>
                <li>• On/off latency</li>
                <li>• Profitability vs spot power price</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Layer Interaction Diagram */}
        <div className="card-surface rounded-xl p-8 sm:p-12 bg-gradient-to-br from-tech-gray-800/50 to-tech-gray-900/50">
          <h3 className="text-2xl font-semibold mb-6 text-center">How These Layers Reinforce Each Other</h3>
          <div className="flex flex-col items-center gap-4">
            <div className="bg-tech-blue/20 rounded-lg p-4 border border-tech-blue/30">
              <p className="text-white font-medium">Algorithms (GitLab)</p>
            </div>
            <div className="text-tech-gray-400">↓</div>
            <div className="bg-tech-gray-700/50 rounded-lg p-4 border border-tech-gray-600 flex items-center gap-4">
              <span className="text-white font-medium">Batteries</span>
              <span className="text-tech-gray-400">←→</span>
              <span className="text-white font-medium">Power Markets</span>
            </div>
            <div className="text-tech-gray-400">↓</div>
            <div className="bg-tech-red/20 rounded-lg p-4 border border-tech-red/30">
              <p className="text-white font-medium">Storage (Pure-style)</p>
            </div>
            <div className="text-tech-gray-400">↓</div>
            <div className="bg-tech-gray-700/50 rounded-lg p-4 border border-tech-gray-600">
              <p className="text-white font-medium">Compute (Miners / AI jobs)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

