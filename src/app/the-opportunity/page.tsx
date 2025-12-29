import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'The Opportunity • Lubbock Cloud',
  description: 'How West Texas constraints become the raw materials for an energy arbitrage platform.',
};

export default function TheOpportunityPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-4xl container-px py-12 sm:py-20">
        <Link href="/#west-texas" className="inline-flex items-center gap-2 text-tech-gray-300 hover:text-white transition-colors mb-8">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to West Texas Context
        </Link>

        <div className="mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-tech-red/20 flex items-center justify-center">
              <Zap className="w-8 h-8 text-tech-red" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">The Opportunity</h1>
              <p className="text-tech-gray-400">Constraints as Competitive Advantage</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Reframing Constraints</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              The traditional view sees West Texas constraints as problems: excess renewable generation, price volatility, water scarcity, grid congestion. But these aren&apos;t problems—they&apos;re the raw materials for an energy arbitrage platform that turns volatility into competitive advantage.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              Lubbock.cloud doesn&apos;t solve these constraints. We monetize them. By combining flexible compute, battery storage, and intelligent load management, we transform what others see as limitations into our core business model.
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The Integrated System</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Each constraint creates opportunities that compound when integrated:
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Excess Wind & Solar</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Creates negative pricing windows that enable low-cost or free power for compute and battery charging. This becomes the primary input for our energy arbitrage engine.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Power Price Volatility</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  ERCOT&apos;s extreme price swings create arbitrage opportunities. We buy when prices are negative, store in batteries, and sell when prices spike—turning volatility into consistent revenue.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Water Constraints</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Forces air-cooled infrastructure, which uses more power but no water. With abundant cheap renewable power, this trade-off becomes a competitive advantage that competitors in water-rich areas cannot replicate.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Cheap Land</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Enables large-scale infrastructure deployment and co-location of generation, storage, and compute. This creates economies of scale and integrated energy systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Grid Congestion</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Creates localized pricing opportunities and demand for grid services. Strategic siting enables capture of price differentials and premium payments for congestion relief.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The Three Pillars</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              These constraints enable our three-pillar business model:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Energy Arbitrage</h3>
                <p className="text-tech-gray-300 text-sm mb-3">
                  The primary engine. Transform power price volatility into revenue through intelligent load management and storage.
                </p>
                <ul className="text-tech-gray-400 text-xs space-y-1">
                  <li>• Negative pricing capture</li>
                  <li>• Peak/off-peak spread</li>
                  <li>• Grid services revenue</li>
                </ul>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Compute Arbitrage</h3>
                <p className="text-tech-gray-300 text-sm mb-3">
                  The secondary engine. Interruptible compute that adapts to power pricing in real-time.
                </p>
                <ul className="text-tech-gray-400 text-xs space-y-1">
                  <li>• BTC mining</li>
                  <li>• AI batch jobs</li>
                  <li>• Storage workloads</li>
                </ul>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Resource Optimization</h3>
                <p className="text-tech-gray-300 text-sm mb-3">
                  The long-term moat. Optimize water, power, and land to create sustainable competitive advantages.
                </p>
                <ul className="text-tech-gray-400 text-xs space-y-1">
                  <li>• Water optimization</li>
                  <li>• Power co-location</li>
                  <li>• Land appreciation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Competitive Moat</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              This business model creates a defensible competitive moat:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Geographic Advantage:</strong> Competitors cannot easily replicate the West Texas constraint profile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Integrated Systems:</strong> The combination of constraints creates synergies that are hard to copy</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Operational Complexity:</strong> Managing multiple revenue streams across energy, compute, and resources requires sophisticated systems</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Regulatory Knowledge:</strong> Deep understanding of ERCOT markets and West Texas regulations creates barriers to entry</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>First-Mover Advantage:</strong> Early positioning in optimal locations creates lasting competitive advantages</span>
              </li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">The Vision</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              West Texas constraints aren&apos;t problems to solve—they&apos;re opportunities to monetize. Lubbock.cloud transforms these constraints into a sustainable, defensible business model that aligns with the energy transition while generating superior returns. This is the opportunity: turning what others see as limitations into our core competitive advantage.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

