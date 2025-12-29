"use client";
import Link from 'next/link';
import { Wind, TrendingUp, Droplet, Mountain, Plug, Zap } from 'lucide-react';

export function WestTexasContext() {
  return (
    <section id="west-texas" className="mx-auto max-w-7xl container-px py-20 sm:py-32 bg-tech-gray-800/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">West Texas Context</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          The unique energy landscape that makes Lubbock.cloud possible
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/excess-wind-solar" className="card-surface rounded-xl p-6 hover:border-tech-red/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <Wind className="w-8 h-8 text-tech-red" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Excess Wind & Solar</h3>
          <p className="text-tech-gray-300 text-sm">
            At certain hours, renewable generation exceeds demand, creating opportunities for negative pricing and curtailment capture.
          </p>
        </Link>

        <Link href="/power-price-volatility" className="card-surface rounded-xl p-6 hover:border-tech-blue/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <TrendingUp className="w-8 h-8 text-tech-blue" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Power Price Volatility</h3>
          <p className="text-tech-gray-300 text-sm">
            ERCOT&apos;s real-time market creates extreme price swings — from negative prices to thousands of dollars per MWh during scarcity events.
          </p>
        </Link>

        <Link href="/water-constraints" className="card-surface rounded-xl p-6 hover:border-tech-blue/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <Droplet className="w-8 h-8 text-tech-blue" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Water Constraints</h3>
          <p className="text-tech-gray-300 text-sm">
            Limited water resources require intelligent management. Water optimization becomes a competitive moat, not just a cost center.
          </p>
        </Link>

        <Link href="/cheap-land" className="card-surface rounded-xl p-6 hover:border-tech-gray-400/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <Mountain className="w-8 h-8 text-tech-gray-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Cheap Land</h3>
          <p className="text-tech-gray-300 text-sm">
            Abundant, affordable land enables large-scale infrastructure deployment and co-location of generation, storage, and compute.
          </p>
        </Link>

        <Link href="/grid-congestion" className="card-surface rounded-xl p-6 hover:border-tech-gray-400/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <Plug className="w-8 h-8 text-tech-gray-400" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Grid Congestion</h3>
          <p className="text-tech-gray-300 text-sm">
            Transmission constraints create localized pricing opportunities. Strategic siting near congestion points enables arbitrage.
          </p>
        </Link>

        <Link href="/the-opportunity" className="card-surface rounded-xl p-6 hover:border-tech-red/30 border border-transparent transition-all hover:scale-[1.02] cursor-pointer">
          <div className="mb-4">
            <Zap className="w-8 h-8 text-tech-red" />
          </div>
          <h3 className="text-xl font-semibold mb-2">The Opportunity</h3>
          <p className="text-tech-gray-300 text-sm">
            These constraints aren&apos;t problems — they&apos;re the raw materials for an energy arbitrage platform that turns volatility into competitive advantage.
          </p>
        </Link>
      </div>
    </section>
  );
}

