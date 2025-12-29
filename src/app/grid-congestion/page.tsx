import Link from 'next/link';
import { Plug } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Grid Congestion • Lubbock Cloud',
  description: 'How transmission constraints create localized pricing opportunities and arbitrage potential.',
};

export default function GridCongestionPage() {
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
            <div className="w-16 h-16 rounded-full bg-tech-gray-700/50 flex items-center justify-center">
              <Plug className="w-8 h-8 text-tech-gray-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Grid Congestion</h1>
              <p className="text-tech-gray-400">Transmission Constraints as Opportunity</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Understanding Grid Congestion</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Grid congestion occurs when transmission lines reach their capacity limits, preventing power from flowing from generation sources to demand centers. In West Texas, this is particularly common due to the rapid growth of renewable generation in areas with limited transmission infrastructure.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              When congestion occurs, prices can diverge significantly between different locations on the grid. Power may be cheap or even negative at the generation source (due to curtailment) while remaining expensive at load centers (due to transmission constraints).
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Localized Pricing Opportunities</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Locational Marginal Pricing (LMP)</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  ERCOT uses Locational Marginal Pricing, where electricity prices vary by location based on transmission constraints. Strategic siting near congestion points or generation sources enables capture of these price differentials.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Curtailment Zones</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Areas with high renewable generation and limited transmission often experience curtailment. By locating infrastructure in these zones, Lubbock.cloud can access power at negative or near-zero prices that would otherwise be wasted.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Load Centers</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Conversely, areas experiencing transmission constraints that limit power delivery can see elevated prices. Battery storage and flexible load can provide value by reducing demand during these periods or discharging stored energy.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Strategic Siting</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Grid congestion creates opportunities for strategic infrastructure siting:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Near Generation Sources</h3>
                <p className="text-tech-gray-300 text-sm">
                  Locating near wind and solar farms enables direct interconnection, bypassing transmission constraints and accessing power at source prices.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Congestion Points</h3>
                <p className="text-tech-gray-300 text-sm">
                  Strategic placement near transmission bottlenecks enables participation in congestion relief and captures price differentials.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Multiple Interconnections</h3>
                <p className="text-tech-gray-300 text-sm">
                  Sites with multiple transmission interconnections provide optionality to route power and optimize pricing across different paths.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Future Transmission</h3>
                <p className="text-tech-gray-300 text-sm">
                  Positioning near planned transmission upgrades creates early-mover advantages as new capacity comes online.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Arbitrage Strategies</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Grid congestion enables multiple arbitrage strategies:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Spatial Arbitrage:</strong> Buy power in low-price zones, store it, and sell in high-price zones</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Curtailment Capture:</strong> Absorb excess generation that would otherwise be curtailed due to transmission limits</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Congestion Relief:</strong> Provide load reduction or storage discharge during congestion events, earning premium payments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Transmission Rights:</strong> Acquire and monetize transmission capacity rights during congestion periods</span>
              </li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Grid Services</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Beyond arbitrage, grid congestion creates opportunities to provide valuable grid services:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Load Reduction</h3>
                <p className="text-tech-gray-300 text-sm">
                  Rapidly reducing load during congestion events helps relieve transmission constraints and earns demand response payments.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Storage Discharge</h3>
                <p className="text-tech-gray-300 text-sm">
                  Discharging batteries during congestion provides local power supply, reducing transmission needs and earning premium rates.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Voltage Support</h3>
                <p className="text-tech-gray-300 text-sm">
                  Providing reactive power and voltage support helps maintain grid stability during congestion events.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Frequency Regulation</h3>
                <p className="text-tech-gray-300 text-sm">
                  Rapid response to frequency deviations helps balance the grid during transmission stress events.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Competitive Advantage</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              Grid congestion is often viewed as a problem. For Lubbock.cloud, it&apos;s a feature of the market that creates opportunities. By strategically siting infrastructure and deploying flexible load and storage, we transform transmission constraints into revenue streams. This creates a business model that benefits from congestion rather than being constrained by it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

