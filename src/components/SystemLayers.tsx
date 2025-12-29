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
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Algorithm & Workflow Layer</h2>
          <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
            This layer stores algorithms, not just code. It tracks energy strategies, load-shedding logic, and trading heuristics, enabling reproducibility and auditability. This is where energy arbitrage logic lives, mining schedules live, battery dispatch logic lives, and risk controls live.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Laboratory Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">gitlab-laboratory.terminal</span>
            </div>
            
            {/* Laboratory Visualization */}
            <div className="mb-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6 border border-tech-gray-700">
                {/* Laboratory Setup */}
                <div className="space-y-4">
                  {/* Lab Bench */}
                  <div className="h-24 bg-gradient-to-b from-tech-gray-700 to-tech-gray-800 rounded-lg border border-tech-gray-600 relative">
                    {/* Test Tubes / Code Modules */}
                    <div className="absolute top-2 left-4 flex gap-2">
                      <div className="w-3 h-12 bg-gradient-to-t from-tech-blue/60 to-tech-blue/30 rounded-t border border-tech-blue/40"></div>
                      <div className="w-3 h-10 bg-gradient-to-t from-tech-blue/60 to-tech-blue/30 rounded-t border border-tech-blue/40"></div>
                      <div className="w-3 h-14 bg-gradient-to-t from-tech-blue/60 to-tech-blue/30 rounded-t border border-tech-blue/40"></div>
                    </div>
                    {/* GitLab Logo / Central System */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-tech-blue/20 rounded-lg border-2 border-tech-blue/40 flex items-center justify-center">
                      <GitBranch className="w-6 h-6 text-tech-blue" />
                    </div>
                    {/* Code Files / Documents */}
                    <div className="absolute top-2 right-4 flex flex-col gap-1">
                      <div className="w-8 h-2 bg-tech-gray-600 rounded"></div>
                      <div className="w-10 h-2 bg-tech-gray-600 rounded"></div>
                      <div className="w-6 h-2 bg-tech-gray-600 rounded"></div>
                    </div>
                    {/* Connection Lines */}
                    <div className="absolute top-8 left-12 w-16 h-0.5 bg-tech-blue/30"></div>
                    <div className="absolute top-8 right-12 w-16 h-0.5 bg-tech-blue/30"></div>
                  </div>
                  
                  {/* Lab Equipment / Monitoring */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-tech-gray-700/50 rounded p-2 border border-tech-gray-600">
                      <div className="text-xs text-tech-gray-400 mb-1">Version</div>
                      <div className="text-xs text-green-400 font-mono">v2.4.1</div>
                    </div>
                    <div className="bg-tech-gray-700/50 rounded p-2 border border-tech-gray-600">
                      <div className="text-xs text-tech-gray-400 mb-1">Status</div>
                      <div className="text-xs text-green-400 font-mono">Active</div>
                    </div>
                    <div className="bg-tech-gray-700/50 rounded p-2 border border-tech-gray-600">
                      <div className="text-xs text-tech-gray-400 mb-1">Tests</div>
                      <div className="text-xs text-green-400 font-mono">98%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* GitLab Stats */}
            <div className="font-mono text-sm space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-tech-gray-400">Repositories:</span>
                <span className="text-green-400">24</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-tech-gray-400">Pipelines:</span>
                <span className="text-green-400">Active</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-tech-gray-400">Deployments:</span>
                <span className="text-green-400">12</span>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-tech-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Algorithm & Workflow Layer</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">GitLab as System of Record</span>
              </div>
            </div>

            <div className="card-surface rounded-xl p-6">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <GitBranch className="w-6 h-6 text-tech-blue" />
                Why GitLab-Style Systems Matter
              </h4>
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-white mb-3">What This Layer Does</h5>
                <p className="text-tech-gray-300 text-sm mb-3 font-medium">GitLab as System of Record</p>
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
              <p className="text-tech-gray-300 mb-4">
                The Algorithm & Workflow Layer serves as the central nervous system for energy arbitrage operations. This is where energy arbitrage logic lives, mining schedules live, battery dispatch logic lives, and risk controls live. GitLab functions as the system of record, providing version control, continuous integration, and deployment pipelines for physical infrastructure configurations. This enables deterministic, reproducible, and auditable control over energy routing decisions, storage timing protocols, water pumping schedules, and miner on/off logic.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2 text-sm">Versioned Infrastructure Logic</h5>
                  <p className="text-tech-gray-300 text-xs">Track changes to physical system configurations with full audit trails and rollback capabilities</p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2 text-sm">CI/CD for Physical Systems</h5>
                  <p className="text-tech-gray-300 text-xs">Deploy energy strategies like software with automated testing and validation pipelines</p>
                </div>
                <div className="bg-tech-gray-800/50 rounded-lg p-4">
                  <h5 className="font-semibold text-white mb-2 text-sm">Separation of Logic from Execution</h5>
                  <p className="text-tech-gray-300 text-xs">Control infrastructure like code with declarative configuration management</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layer 3: Flexible Compute */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Flexible Compute Layer</h2>
          <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
            Bitcoin miners function as synthetic demand, monetizing excess power instantly and acting as a buyer of last resort. They provide price discovery for energy and enable our entire arbitrage strategy through instant load response, stateless operations, and globally priced output.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Mining Machine Illustration */}
          <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-tech-gray-400 text-sm">bitcoin-miner.terminal</span>
            </div>
            
            {/* Mining Machine Visualization */}
            <div className="mb-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6 border border-tech-gray-700">
                {/* Mining Machine Structure */}
                <div className="flex flex-col items-center mb-4">
                  {/* Main Machine Body */}
                  <div className="relative w-32 h-24 bg-gradient-to-b from-tech-gray-700 to-tech-gray-800 rounded-lg border-2 border-tech-red/40 mb-2">
                    {/* Machine Front Panel */}
                    <div className="absolute inset-2 bg-tech-gray-800/50 rounded border border-tech-gray-600">
                      {/* Status LEDs */}
                      <div className="absolute top-2 left-2 flex gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      </div>
                      {/* CPU Grid */}
                      <div className="absolute top-6 left-1/2 transform -translate-x-1/2 grid grid-cols-3 gap-1">
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                        <Cpu className="w-3 h-3 text-tech-red" />
                      </div>
                      {/* Power Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-tech-red/30 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-tech-red rounded-full"></div>
                      </div>
                    </div>
                    {/* Heat Sink Fins */}
                    <div className="absolute -right-1 top-2 bottom-2 w-2 flex flex-col gap-0.5">
                      <div className="flex-1 bg-tech-gray-600 rounded"></div>
                      <div className="flex-1 bg-tech-gray-600 rounded"></div>
                      <div className="flex-1 bg-tech-gray-600 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Base Platform */}
                  <div className="w-36 h-4 bg-gradient-to-b from-tech-gray-600 to-tech-gray-700 rounded border border-tech-gray-500">
                    <div className="flex items-center justify-center h-full gap-1">
                      <div className="w-1 h-1 bg-tech-red/50 rounded"></div>
                      <div className="w-1 h-1 bg-tech-red/50 rounded"></div>
                      <div className="w-1 h-1 bg-tech-red/50 rounded"></div>
                    </div>
                  </div>
                  
                  {/* Connection Ports */}
                  <div className="flex gap-4 mt-2">
                    <div className="w-6 h-3 bg-tech-gray-600 rounded border border-tech-gray-500"></div>
                    <div className="w-6 h-3 bg-tech-gray-600 rounded border border-tech-gray-500"></div>
                  </div>
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

          </div>
        </div>

        {/* Layer Interaction Diagram */}
        <div className="card-surface rounded-xl p-8 sm:p-12 bg-gradient-to-br from-tech-gray-800/50 to-tech-gray-900/50">
          <h3 className="text-2xl font-semibold mb-8 text-center">How These Layers Reinforce Each Other</h3>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8">
            {/* Algorithms */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-tech-blue/20 rounded-xl p-6 border-2 border-tech-blue/40 shadow-lg min-w-[180px] text-center">
                <GitBranch className="w-8 h-8 text-tech-blue mx-auto mb-2" />
                <p className="text-white font-semibold">Algorithms</p>
                <p className="text-tech-gray-300 text-xs mt-1">(GitLab)</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="w-8 h-8 text-tech-blue lg:block hidden" />
              <div className="w-8 h-8 border-b-2 border-tech-blue lg:hidden"></div>
            </div>
            
            {/* Batteries & Power Markets */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-tech-gray-700/50 rounded-xl p-6 border-2 border-tech-gray-600 shadow-lg min-w-[180px] text-center">
                <Battery className="w-8 h-8 text-tech-blue mx-auto mb-2" />
                <p className="text-white font-semibold">Batteries</p>
              </div>
              <div className="flex items-center gap-2 text-tech-gray-400">
                <span className="text-xs">←→</span>
                <span className="text-xs">Power Markets</span>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="w-8 h-8 text-tech-red lg:block hidden" />
              <div className="w-8 h-8 border-b-2 border-tech-red lg:hidden"></div>
            </div>
            
            {/* Storage */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-tech-red/20 rounded-xl p-6 border-2 border-tech-red/40 shadow-lg min-w-[180px] text-center">
                <Database className="w-8 h-8 text-tech-red mx-auto mb-2" />
                <p className="text-white font-semibold">Storage</p>
                <p className="text-tech-gray-300 text-xs mt-1">(Pure-style)</p>
              </div>
            </div>
            
            {/* Arrow */}
            <div className="flex items-center">
              <ArrowRight className="w-8 h-8 text-tech-red lg:block hidden" />
              <div className="w-8 h-8 border-b-2 border-tech-red lg:hidden"></div>
            </div>
            
            {/* Compute */}
            <div className="flex flex-col items-center gap-3">
              <div className="bg-tech-gray-700/50 rounded-xl p-6 border-2 border-tech-gray-600 shadow-lg min-w-[180px] text-center">
                <Cpu className="w-8 h-8 text-tech-red mx-auto mb-2" />
                <p className="text-white font-semibold">Compute</p>
                <p className="text-tech-gray-300 text-xs mt-1">(Miners / AI jobs)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="card-surface rounded-xl p-8 sm:p-12 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-semibold mb-4">Ready to Transform Energy Constraints into Competitive Advantages?</h3>
            <p className="text-tech-gray-300 text-lg mb-8">
              Discover how Lubbock.cloud&apos;s integrated system architecture turns West Texas energy volatility into sustainable revenue streams and strategic moats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-tech-red px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-opacity"
              >
                Explore Solutions
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-medium text-white hover:border-white/50 hover:bg-white/20 transition-colors"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

