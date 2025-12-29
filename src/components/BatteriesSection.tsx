"use client";

export function BatteriesSection() {
  return (
    <section id="batteries" className="mx-auto max-w-7xl container-px py-20 sm:py-32 bg-tech-gray-800/30">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">How Batteries Fit</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Batteries are the brain stem of the system — they&apos;re not optional
        </p>
      </div>

      <div className="card-surface rounded-xl p-8 sm:p-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Batteries Are The Brain Stem</h3>
            <p className="text-tech-gray-300 text-lg mb-6">
              Batteries enable the entire system to function intelligently. They&apos;re not just storage — they&apos;re the control mechanism that makes energy arbitrage possible.
            </p>
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
                <div>
                  <p className="text-tech-gray-400 text-sm mb-2">Without batteries:</p>
                  <p className="text-white font-medium">You&apos;re a miner</p>
                </div>
                <div className="border-t border-tech-gray-700 pt-4">
                  <p className="text-tech-gray-400 text-sm mb-2">With batteries:</p>
                  <p className="text-white font-medium">You&apos;re an energy market participant</p>
                </div>
              </div>
              <p className="text-tech-gray-300 text-sm mt-4 italic">
                That distinction matters legally, financially, and strategically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

