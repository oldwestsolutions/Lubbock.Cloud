import Link from 'next/link';
import { TrendingUp } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Power Price Volatility • Lubbock Cloud',
  description: 'Understanding ERCOT real-time market dynamics and how extreme price swings create arbitrage opportunities.',
};

export default function PowerPriceVolatilityPage() {
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
            <div className="w-16 h-16 rounded-full bg-tech-blue/20 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-tech-blue" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Power Price Volatility</h1>
              <p className="text-tech-gray-400">ERCOT Real-Time Market Dynamics</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The ERCOT Market</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              The Electric Reliability Council of Texas (ERCOT) operates one of the most volatile electricity markets in the world. Unlike regulated markets with fixed pricing, ERCOT uses real-time pricing that can swing from negative values to thousands of dollars per megawatt-hour (MWh) within hours.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              This volatility is driven by the unique characteristics of the Texas grid: high renewable penetration, limited interconnection with other grids, and extreme weather events that create sudden supply-demand imbalances.
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Price Extremes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Negative Prices</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  During periods of excess generation (particularly from wind at night), prices can drop below zero. Generators effectively pay to keep their facilities running, creating opportunities for flexible loads to consume power at negative cost.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Scarcity Events</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  During extreme weather or supply shortages, prices can spike to $9,000/MWh—the market cap. These events create opportunities for battery storage and demand response to provide grid services at premium rates.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Intraday Swings</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Prices can swing hundreds of dollars per MWh within a single day. The ability to shift load and discharge batteries during these swings creates significant arbitrage opportunities.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Arbitrage Strategies</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Time Arbitrage</h3>
                <p className="text-tech-gray-300 text-sm">
                  Buy power when cheap (negative or low prices), store it in batteries, and sell it back to the grid when prices spike.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Load Shifting</h3>
                <p className="text-tech-gray-300 text-sm">
                  Schedule interruptible compute workloads during low-price periods and shut down during high-price periods.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Ancillary Services</h3>
                <p className="text-tech-gray-300 text-sm">
                  Provide frequency regulation, demand response, and spinning reserve services during volatility events.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Curtailment Avoidance</h3>
                <p className="text-tech-gray-300 text-sm">
                  Absorb excess renewable generation to prevent curtailment, creating value for both generators and load operators.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Risk Management</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              While volatility creates opportunities, it also requires sophisticated risk management. Lubbock.cloud uses:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span>Real-time price monitoring and automated load dispatch</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span>Hedging strategies using ERCOT futures and financial instruments</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span>Diversified revenue streams (mining, storage, grid services) to reduce exposure to any single price event</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span>Battery storage as a financial instrument to smooth volatility</span>
              </li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Competitive Advantage</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              ERCOT&apos;s price volatility is often seen as a risk. For Lubbock.cloud, it&apos;s the core business model. By combining flexible compute, battery storage, and intelligent load management, we transform volatility into consistent revenue streams. This creates a defensible moat: traditional data centers can&apos;t operate profitably in this environment, but our interruptible, power-aware infrastructure thrives on it.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

