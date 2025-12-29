"use client";

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
        <div className="card-surface rounded-xl p-6">
          <div className="text-3xl mb-4">💨</div>
          <h3 className="text-xl font-semibold mb-2">Excess Wind & Solar</h3>
          <p className="text-tech-gray-300 text-sm">
            At certain hours, renewable generation exceeds demand, creating opportunities for negative pricing and curtailment capture.
          </p>
        </div>

        <div className="card-surface rounded-xl p-6">
          <div className="text-3xl mb-4">📊</div>
          <h3 className="text-xl font-semibold mb-2">Power Price Volatility</h3>
          <p className="text-tech-gray-300 text-sm">
            ERCOT's real-time market creates extreme price swings — from negative prices to thousands of dollars per MWh during scarcity events.
          </p>
        </div>

        <div className="card-surface rounded-xl p-6">
          <div className="text-3xl mb-4">💧</div>
          <h3 className="text-xl font-semibold mb-2">Water Constraints</h3>
          <p className="text-tech-gray-300 text-sm">
            Limited water resources require intelligent management. Water optimization becomes a competitive moat, not just a cost center.
          </p>
        </div>

        <div className="card-surface rounded-xl p-6">
          <div className="text-3xl mb-4">🏞️</div>
          <h3 className="text-xl font-semibold mb-2">Cheap Land</h3>
          <p className="text-tech-gray-300 text-sm">
            Abundant, affordable land enables large-scale infrastructure deployment and co-location of generation, storage, and compute.
          </p>
        </div>

        <div className="card-surface rounded-xl p-6">
          <div className="text-3xl mb-4">🔌</div>
          <h3 className="text-xl font-semibold mb-2">Grid Congestion</h3>
          <p className="text-tech-gray-300 text-sm">
            Transmission constraints create localized pricing opportunities. Strategic siting near congestion points enables arbitrage.
          </p>
        </div>

        <div className="card-surface rounded-xl p-6 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
          <div className="text-3xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold mb-2">The Opportunity</h3>
          <p className="text-tech-gray-300 text-sm">
            These constraints aren't problems — they're the raw materials for an energy arbitrage platform that turns volatility into competitive advantage.
          </p>
        </div>
      </div>
    </section>
  );
}

