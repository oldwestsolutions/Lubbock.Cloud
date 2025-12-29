import Link from 'next/link';
import { Droplet } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Water Constraints • Lubbock Cloud',
  description: 'How water optimization becomes a competitive moat in West Texas energy infrastructure.',
};

export default function WaterConstraintsPage() {
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
              <Droplet className="w-8 h-8 text-tech-blue" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Water Constraints</h1>
              <p className="text-tech-gray-400">Resource Optimization as Competitive Moat</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The West Texas Water Challenge</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              West Texas faces significant water constraints. The region is semi-arid, with limited groundwater resources and increasing competition for water rights from agriculture, oil & gas operations, and growing municipalities.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              Traditional data centers require substantial water for cooling, making them expensive and environmentally challenging to operate in water-constrained regions. This constraint becomes a competitive advantage for operators who can minimize or eliminate water usage.
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Water Optimization Strategies</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Air-Cooled Infrastructure</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Lubbock.cloud uses air-cooled systems that eliminate water consumption for cooling. While this requires more energy, the abundance of cheap renewable power makes this trade-off economically favorable.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Closed-Loop Systems</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Where water is necessary, we use closed-loop cooling systems that recycle water continuously, minimizing consumption and reducing dependency on external water sources.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Seasonal Optimization</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Water availability varies seasonally. We optimize operations to reduce water-intensive activities during dry periods and maximize them when water is more abundant.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Water Rights Management</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Strategic acquisition and management of water rights creates additional value. During periods of excess allocation, water rights can be leased or sold, creating another revenue stream.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Power-Water Coupling</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Water and power are deeply interconnected in West Texas:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Pumping Costs</h3>
                <p className="text-tech-gray-300 text-sm">
                  Groundwater pumping requires significant electricity. By optimizing when to pump based on power prices, we reduce both water and power costs simultaneously.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Cooling Efficiency</h3>
                <p className="text-tech-gray-300 text-sm">
                  Air cooling uses more power but no water. During periods of negative power pricing, this trade-off becomes highly favorable.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Water Treatment</h3>
                <p className="text-tech-gray-300 text-sm">
                  Water treatment and recycling facilities require power. Scheduling these operations during low-price periods optimizes total resource costs.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Integrated Planning</h3>
                <p className="text-tech-gray-300 text-sm">
                  Coordinating water and power operations creates synergies that reduce total resource costs and increase operational flexibility.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Competitive Moat</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Water optimization isn&apos;t just a cost center—it&apos;s a competitive moat:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Barrier to Entry:</strong> Competitors without water optimization strategies face higher costs and regulatory challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Regulatory Advantage:</strong> Lower water consumption reduces permitting complexity and regulatory risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Scalability:</strong> Water constraints limit traditional data center growth; our model scales without water dependency</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Environmental Credibility:</strong> Minimal water usage strengthens ESG positioning and community relations</span>
              </li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Strategic Value</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              In West Texas, water constraints aren&apos;t a limitation—they&apos;re an opportunity. By optimizing water usage and integrating water management with power arbitrage, Lubbock.cloud creates a defensible competitive position. This turns what would be a cost center into a strategic advantage that competitors cannot easily replicate.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

