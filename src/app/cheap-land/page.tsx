import Link from 'next/link';
import { Mountain } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Cheap Land • Lubbock Cloud',
  description: 'How abundant, affordable land enables large-scale infrastructure deployment in West Texas.',
};

export default function CheapLandPage() {
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
              <Mountain className="w-8 h-8 text-tech-gray-400" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Cheap Land</h1>
              <p className="text-tech-gray-400">Enabling Large-Scale Infrastructure</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The West Texas Advantage</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              West Texas offers abundant, affordable land that enables large-scale infrastructure deployment at a fraction of the cost of urban or coastal locations. This cost advantage is fundamental to the Lubbock.cloud business model.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              Unlike traditional data centers constrained by expensive real estate in metropolitan areas, we can deploy infrastructure at scale, creating economies of scale that compound over time.
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Strategic Benefits</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Low Acquisition Costs</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Land in West Texas costs significantly less than in major data center markets. This reduces upfront capital requirements and improves return on investment, enabling faster scaling and more aggressive expansion.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Horizontal Scaling</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Abundant land enables horizontal scaling—deploying infrastructure across large footprints rather than stacking vertically. This reduces construction complexity, improves cooling efficiency, and simplifies maintenance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Co-Location Opportunities</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Large land parcels enable co-location of generation (solar/wind), storage (batteries), and compute infrastructure. This reduces transmission losses, improves efficiency, and creates integrated energy systems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Future Expansion</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Acquiring adjacent land parcels provides optionality for future expansion without the constraints of urban real estate markets. This creates a land bank that appreciates in value as infrastructure develops.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Integrated Infrastructure</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Cheap land enables integrated infrastructure deployment:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Solar Arrays</h3>
                <p className="text-tech-gray-300 text-sm">
                  Large-scale solar installations can be deployed on-site, reducing transmission costs and creating direct power-to-compute integration.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Wind Farms</h3>
                <p className="text-tech-gray-300 text-sm">
                  Proximity to wind resources enables direct interconnection, capturing excess generation at source.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Battery Storage</h3>
                <p className="text-tech-gray-300 text-sm">
                  Grid-scale battery installations require significant footprint. Cheap land makes large-scale storage economically viable.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Compute Infrastructure</h3>
                <p className="text-tech-gray-300 text-sm">
                  Sprawling data center facilities with optimized layouts for air cooling and maintenance access.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">Economic Impact</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              The cost advantage of cheap land compounds across multiple dimensions:
            </p>
            <ul className="space-y-2 text-tech-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Lower Capital Intensity:</strong> Reduced land costs free capital for infrastructure and equipment</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Faster Payback:</strong> Lower fixed costs improve cash flow and reduce time to profitability</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Competitive Pricing:</strong> Lower costs enable competitive pricing while maintaining superior margins</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-tech-red mt-1">•</span>
                <span><strong>Scalability:</strong> Ability to scale horizontally without land cost constraints enables rapid growth</span>
              </li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Strategic Positioning</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              Cheap land in West Texas isn&apos;t just a cost advantage—it&apos;s an enabler of a fundamentally different business model. By combining low land costs with renewable energy abundance and flexible compute infrastructure, Lubbock.cloud creates a cost structure that competitors in expensive markets cannot match. This geographic advantage becomes a sustainable competitive moat.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

