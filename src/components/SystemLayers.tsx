"use client";
import { Database, GitBranch, Battery, Cpu, Zap, Activity, TrendingUp, ArrowRight } from 'lucide-react';

export function SystemLayers() {
  return (
    <section id="system-layers" className="mx-auto max-w-7xl container-px py-20 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">System Architecture</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Three interconnected layers that transform energy constraints into competitive advantages
        </p>
      </div>

      <div className="space-y-16">
        {/* Layer 1: Storage */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pure Storage Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">pure-storage.terminal</span>
            </div>
            
            {/* Pure Storage Array Visualization */}
            <div className="mb-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6 border border-tech-gray-700">
                {/* Storage Array */}
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-tech-red/30 to-tech-red/10 rounded border border-tech-red/30 flex items-center justify-center"
                    >
                      <Database className="w-4 h-4 text-tech-red" />
                    </div>
                  ))}
                </div>
                
                {/* Storage Stats */}
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Capacity:</span>
                    <span className="text-green-400">12.4 TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Type:</span>
                    <span className="text-tech-red">Pure Storage Array</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Latency:</span>
                    <span className="text-green-400">&lt;1ms</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Power:</span>
                    <span className="text-green-400">0.02 kWh/TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">State:</span>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Data Flow Diagram */}
            <div className="space-y-4">
              <div className="font-mono text-sm">
                <div className="text-tech-gray-400 mb-2">Data Flow:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-white">Cheap Power Window</span>
                    <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                    <Database className="w-4 h-4 text-tech-red" />
                    <span className="text-green-400">Write Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-tech-red" />
                    <span className="text-green-400">Cold Storage</span>
                    <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                    <Activity className="w-4 h-4 text-tech-blue" />
                    <span className="text-white">Batch Processing</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Efficiency: 94% power-to-storage</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Buttons */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Database className="w-6 h-6 text-tech-red mx-auto mb-2" />
                <span className="text-white text-xs">Write</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Activity className="w-6 h-6 text-tech-blue mx-auto mb-2" />
                <span className="text-white text-xs">Read</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <span className="text-white text-xs">Archive</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <Database className="w-6 h-6 text-tech-red" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Storage Layer</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Pure Storage Archetype</span>
              </div>
            </div>

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

            <div className="card-surface rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Database className="w-6 h-6 text-tech-red" />
                Pure Storage Technology
              </h4>
              <p className="text-tech-gray-300 mb-4">
                Pure Storage represents high-density, low-latency, software-defined control of hardware. This class of technology enables:
              </p>
              <ul className="space-y-2 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Power-efficient operations:</strong> Storage is power-efficient relative to compute, can run during cheap power windows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Delayed processing:</strong> Allows batch jobs to process when power is cheapest</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>No latency constraints:</strong> Monetizes power without requiring real-time response</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Software-defined:</strong> Full control over hardware through software APIs</span>
                </li>
              </ul>
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

        {/* Layer 3: Flexible Compute */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Bitcoin Miner Oil Rig Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">bitcoin-miner.terminal</span>
            </div>
            
            {/* Oil Rig Style Miner Visualization */}
            <div className="mb-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6 border border-tech-gray-700">
                {/* Oil Rig Structure */}
                <div className="flex flex-col items-center mb-4">
                  {/* Rig Tower */}
                  <div className="relative mb-2">
                    {/* Main Tower */}
                    <div className="w-16 h-32 bg-gradient-to-b from-tech-red/40 via-tech-red/30 to-tech-red/20 border-2 border-tech-red/50 rounded-t-lg relative">
                      {/* Tower Sections */}
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-tech-red/60"></div>
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-tech-red/60"></div>
                      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-tech-red/60"></div>
                      {/* Top Platform */}
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-20 h-3 bg-tech-red/50 rounded"></div>
                    </div>
                    {/* Rig Base */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-b from-tech-gray-600 to-tech-gray-700 rounded-lg border border-tech-gray-500">
                      <div className="flex items-center justify-center h-full gap-1">
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Support Structures */}
                  <div className="flex gap-8 mt-2">
                    <div className="w-1 h-12 bg-tech-red/30"></div>
                    <div className="w-1 h-12 bg-tech-red/30"></div>
                  </div>
                  
                  {/* Ground Platform */}
                  <div className="w-32 h-4 bg-tech-gray-700/50 rounded border border-tech-gray-600 mt-2"></div>
                </div>
                
                {/* Miner Stats */}
                <div className="font-mono text-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Hashrate:</span>
                    <span className="text-green-400">120 TH/s</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Power:</span>
                    <span className="text-green-400">3.2 kW</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Efficiency:</span>
                    <span className="text-green-400">37.5 J/TH</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">State:</span>
                    <span className="text-green-400">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-tech-gray-400">Power Price:</span>
                    <span className="text-green-400">-$0.05/kWh</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Flow Diagram */}
            <div className="space-y-4">
              <div className="font-mono text-sm">
                <div className="text-tech-gray-400 mb-2">Energy Strategy:</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    <span className="text-white">Negative Pricing</span>
                    <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                    <Cpu className="w-4 h-4 text-tech-red" />
                    <span className="text-green-400">Miner Activation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-red-400" />
                    <span className="text-white">High Pricing</span>
                    <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                    <Activity className="w-4 h-4 text-tech-gray-400" />
                    <span className="text-white">Miner Shutdown</span>
                  </div>
                  <div className="flex items-center gap-2 mt-4">
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Profitability: $0.12/kWh margin</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Buttons */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Cpu className="w-6 h-6 text-tech-red mx-auto mb-2" />
                <span className="text-white text-xs">Mine</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Activity className="w-6 h-6 text-tech-gray-400 mx-auto mb-2" />
                <span className="text-white text-xs">Idle</span>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
                <Zap className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <span className="text-white text-xs">Arbitrage</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <Cpu className="w-6 h-6 text-tech-red" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Flexible Compute Layer</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-red/20 text-tech-red text-sm font-medium">Bitcoin Miners as Synthetic Demand</span>
              </div>
            </div>

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

            <div className="card-surface rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-tech-red" />
                How Bitcoin Miners Support Our Energy Strategy
              </h4>
              <p className="text-tech-gray-300 mb-4">
                Bitcoin miners are not speculative assets in our system — they are sophisticated energy conversion machines that enable our entire arbitrage strategy. Here&apos;s how they function as the flexible compute layer:
              </p>
              <ul className="space-y-3 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Instant Load Response:</strong> Miners can turn on or off in seconds, allowing us to capture negative pricing events and avoid high-cost periods. This instant response capability is impossible with traditional compute infrastructure.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Stateless Operations:</strong> Unlike traditional cloud workloads that require state preservation, miners have no state. This means zero cost to interrupt operations, enabling true power-price-driven compute.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Globally Priced Output:</strong> Bitcoin has a global, liquid market. This means our energy conversion (power → BTC) has immediate price discovery and liquidity, unlike custom compute workloads.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span><strong>Physical Mobility:</strong> Miners can be relocated to optimal power pricing locations, creating operational flexibility that fixed infrastructure cannot match.</span>
                </li>
              </ul>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-white mb-3">Strategic Role in Energy Arbitrage</h4>
              <p className="text-tech-gray-300 text-sm mb-4">
                We use miners the way oil traders use storage tanks — as a mechanism to capture value from price volatility. When power prices go negative, miners consume excess generation. When prices spike, miners shut down and batteries discharge. This creates a dynamic system that:
              </p>
              <ul className="space-y-2 text-tech-gray-300 text-sm">
                <li>• Converts volatility into consistent revenue streams</li>
                <li>• Provides grid services by absorbing excess generation</li>
                <li>• Creates price discovery for interruptible compute</li>
                <li>• Enables participation in demand response programs</li>
              </ul>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6 border-l-4 border-tech-red">
              <h5 className="font-semibold text-white mb-2">Success Metrics</h5>
              <ul className="space-y-1 text-tech-gray-300 text-sm">
                <li>• Hashrate per kWh (efficiency)</li>
                <li>• On/off latency (response time)</li>
                <li>• Profitability vs spot power price (arbitrage margin)</li>
                <li>• Uptime during negative pricing windows</li>
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

