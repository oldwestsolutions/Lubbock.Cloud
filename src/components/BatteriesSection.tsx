"use client";
import { Battery, Zap, TrendingUp, Shield, Activity, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function BatteriesSection() {
  return (
    <section id="batteries" className="mx-auto max-w-7xl container-px py-20 sm:py-32 bg-tech-gray-800/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Energy Storage Layer</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Batteries are the brain stem of the system — they&apos;re not optional
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Illustration */}
        <div className="card-surface rounded-xl p-8 bg-tech-gray-900 border border-tech-gray-700">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-tech-gray-400 text-sm">sodium-ion-battery.terminal</span>
          </div>
          
          {/* Battery Visualization */}
          <div className="mb-6">
            <div className="bg-tech-gray-800/50 rounded-lg p-6 border border-tech-gray-700">
              <div className="flex items-center justify-center mb-4">
                <div className="relative">
                  {/* Battery Container */}
                  <div className="w-32 h-48 bg-tech-gray-700 rounded-lg border-4 border-tech-gray-600 relative overflow-hidden">
                    {/* Battery Cells - Sodium Ion */}
                    <div className="absolute inset-2 flex flex-col gap-2">
                      <div className="flex-1 bg-gradient-to-b from-tech-blue/40 to-tech-blue/20 rounded border border-tech-blue/30">
                        <div className="h-full bg-gradient-to-t from-tech-blue/60 to-transparent flex items-center justify-center">
                          <span className="text-xs text-tech-blue font-mono">Na+</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-to-b from-tech-blue/40 to-tech-blue/20 rounded border border-tech-blue/30">
                        <div className="h-full bg-gradient-to-t from-tech-blue/60 to-transparent flex items-center justify-center">
                          <span className="text-xs text-tech-blue font-mono">Na+</span>
                        </div>
                      </div>
                      <div className="flex-1 bg-gradient-to-b from-tech-blue/40 to-tech-blue/20 rounded border border-tech-blue/30">
                        <div className="h-full bg-gradient-to-t from-tech-blue/60 to-transparent flex items-center justify-center">
                          <span className="text-xs text-tech-blue font-mono">Na+</span>
                        </div>
                      </div>
                    </div>
                    {/* Charge Level Indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-2 bg-green-500/50"></div>
                  </div>
                  {/* Battery Terminal */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-tech-gray-600 rounded-t"></div>
                </div>
              </div>
              
              {/* Battery Stats */}
              <div className="font-mono text-sm space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray-400">Capacity:</span>
                  <span className="text-green-400">2.4 MWh</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray-400">Type:</span>
                  <span className="text-tech-blue">Sodium-Ion</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray-400">Efficiency:</span>
                  <span className="text-green-400">94%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-tech-gray-400">State:</span>
                  <span className="text-green-400">Charging</span>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Flow Diagram */}
          <div className="space-y-4">
            <div className="font-mono text-sm">
              <div className="text-tech-gray-400 mb-2">Energy Flow:</div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-yellow-400" />
                  <span className="text-white">Grid (-$0.05/kWh)</span>
                  <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                  <Battery className="w-4 h-4 text-tech-blue" />
                  <span className="text-green-400">Battery Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Battery className="w-4 h-4 text-tech-blue" />
                  <span className="text-green-400">Battery Discharge</span>
                  <ArrowRight className="w-4 h-4 text-tech-gray-400" />
                  <Activity className="w-4 h-4 text-tech-red" />
                  <span className="text-white">Grid ($0.15/kWh)</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Arbitrage: $0.20/kWh spread</span>
                </div>
              </div>
            </div>
          </div>

          {/* Service Buttons */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
              <Zap className="w-6 h-6 text-tech-blue mx-auto mb-2" />
              <span className="text-white text-xs">Charge</span>
            </div>
            <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
              <Activity className="w-6 h-6 text-tech-red mx-auto mb-2" />
              <span className="text-white text-xs">Discharge</span>
            </div>
            <div className="bg-tech-gray-800/50 rounded-lg p-4 border border-tech-gray-700 text-center">
              <Shield className="w-6 h-6 text-green-400 mx-auto mb-2" />
              <span className="text-white text-xs">Grid Services</span>
            </div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <Battery className="w-6 h-6 text-tech-blue" />
              </div>
              <div>
                <h3 className="text-3xl font-semibold">Batteries Are The Brain Stem</h3>
                <span className="px-4 py-1.5 rounded-full bg-tech-blue/20 text-tech-blue text-sm font-medium">Balance-Sheet Multipliers</span>
              </div>
            </div>
            <p className="text-tech-gray-300 text-lg mb-6">
              Batteries enable the entire system to function intelligently. They&apos;re not just storage — they&apos;re the control mechanism that makes energy arbitrage possible.
            </p>
          </div>

          <div className="card-surface rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
              <Battery className="w-6 h-6 text-tech-blue" />
              Sodium-Ion Battery Technology
            </h4>
            <p className="text-tech-gray-300 mb-4">
              Lubbock.cloud uses sodium-ion batteries for their superior performance in energy arbitrage applications. Unlike lithium-ion, sodium-ion batteries offer:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-blue mt-1">•</span>
                <span><strong>Lower cost:</strong> Sodium is abundant and cheaper than lithium</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-blue mt-1">•</span>
                <span><strong>Better temperature performance:</strong> Operates efficiently in West Texas heat</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-blue mt-1">•</span>
                <span><strong>Faster charge/discharge:</strong> Ideal for rapid arbitrage cycles</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-blue mt-1">•</span>
                <span><strong>Long cycle life:</strong> Withstands thousands of charge cycles</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Core Functions</h4>
              <ul className="space-y-3 text-tech-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Absorb negative prices</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Smooth volatility</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Arbitrage peak pricing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Provide grid services (frequency regulation)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-tech-red mt-1">•</span>
                  <span>Protect hardware from outages</span>
                </li>
              </ul>
            </div>

            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <h4 className="text-xl font-semibold text-white mb-4">Strategic Distinction</h4>
              <div className="space-y-4">
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-tech-gray-400 text-sm mb-2 font-medium">Without batteries:</p>
                  <p className="text-white font-semibold">You&apos;re a miner</p>
                </div>
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <p className="text-tech-gray-400 text-sm mb-2 font-medium">With batteries:</p>
                  <p className="text-white font-semibold">You&apos;re an energy market participant</p>
                </div>
              </div>
              <p className="text-tech-gray-300 text-sm mt-4 italic">
                That distinction matters legally, financially, and strategically.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20 rounded-xl p-6">
            <h4 className="text-xl font-semibold text-white mb-3">How Batteries Enable Cloud Operations</h4>
            <p className="text-tech-gray-300 mb-4">
              Batteries create a buffer between power markets and compute infrastructure. When power prices spike, batteries discharge to keep compute running. When prices drop negative, batteries charge while compute scales up. This creates a power-aware cloud that adapts to market conditions in real-time.
            </p>
            <Link
              href="#system-layers"
              className="inline-flex items-center gap-2 rounded-md bg-tech-red px-6 py-3 text-sm font-medium text-white hover:opacity-95 transition-opacity"
            >
              Learn About System Layers
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
