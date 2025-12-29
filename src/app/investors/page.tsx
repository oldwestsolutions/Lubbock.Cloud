import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { TrendingUp, DollarSign, BarChart3, FileText, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Investors • Lubbock Cloud',
  description: 'Investment information, financial metrics, and strategic positioning for Lubbock.cloud.',
};

export default function InvestorsPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl container-px py-12 sm:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Investors</h1>
          <p className="text-tech-gray-300 text-lg max-w-3xl">
            Lubbock.cloud transforms West Texas energy constraints into sustainable competitive advantages and superior returns.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="card-surface rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-tech-red" />
              </div>
              <h2 className="text-2xl font-semibold">Energy Arbitrage</h2>
            </div>
            <p className="text-tech-gray-300 text-sm mb-4">
              Primary revenue engine. Transform power price volatility into consistent revenue through intelligent load management and battery storage.
            </p>
            <ul className="space-y-2 text-tech-gray-300 text-sm">
              <li>• Negative pricing capture</li>
              <li>• Peak/off-peak spread</li>
              <li>• Grid services revenue</li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-tech-blue" />
              </div>
              <h2 className="text-2xl font-semibold">Unit Economics</h2>
            </div>
            <p className="text-tech-gray-300 text-sm mb-4">
              Superior unit economics enabled by West Texas constraints: cheap land, excess renewable generation, and power price volatility.
            </p>
            <ul className="space-y-2 text-tech-gray-300 text-sm">
              <li>• Low capital intensity</li>
              <li>• Multiple revenue streams</li>
              <li>• Scalable infrastructure</li>
            </ul>
          </div>

          <div className="card-surface rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-gray-700/50 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-tech-gray-400" />
              </div>
              <h2 className="text-2xl font-semibold">Competitive Moat</h2>
            </div>
            <p className="text-tech-gray-300 text-sm mb-4">
              Defensible competitive advantages through resource optimization and integrated energy systems that competitors cannot easily replicate.
            </p>
            <ul className="space-y-2 text-tech-gray-300 text-sm">
              <li>• Geographic advantage</li>
              <li>• Operational complexity</li>
              <li>• First-mover positioning</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8 mb-12">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Investment Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Market Opportunity</h3>
                <ul className="space-y-3 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>ERCOT market volatility creates consistent arbitrage opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Growing renewable generation increases negative pricing events</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Demand for interruptible compute (AI batch, mining) is growing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Traditional cloud providers cannot compete on cost for interruptible workloads</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Business Model</h3>
                <ul className="space-y-3 text-tech-gray-300 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Three revenue streams: energy arbitrage, compute, and grid services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Low fixed costs through cheap land and power-aware infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Scalable model with multiple expansion sites identified</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-tech-red mt-1">•</span>
                    <span>Defensible moat through resource optimization integration</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-6">Strategic Positioning</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-3">Geographic Advantage</h3>
                <p className="text-tech-gray-300 text-sm">
                  West Texas offers unique constraints (excess renewables, volatility, cheap land) that create opportunities competitors cannot access.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-3">Technology Stack</h3>
                <p className="text-tech-gray-300 text-sm">
                  Integrated systems combining batteries, compute, storage, and algorithms create operational complexity that is hard to replicate.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-3">Market Timing</h3>
                <p className="text-tech-gray-300 text-sm">
                  Early positioning in optimal locations creates lasting competitive advantages as the market matures.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
          <h2 className="text-2xl font-semibold mb-4">Investor Resources</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-tech-red" />
                <h3 className="text-lg font-semibold">Financial Information</h3>
              </div>
              <p className="text-tech-gray-300 text-sm mb-4">
                Detailed financial metrics, unit economics, and growth projections available upon request.
              </p>
              <Link
                href="mailto:investors@lubbock.cloud"
                className="inline-flex items-center gap-2 text-tech-red hover:text-tech-red/80 text-sm font-medium"
              >
                Request Information
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-tech-blue" />
                <h3 className="text-lg font-semibold">Contact</h3>
              </div>
              <p className="text-tech-gray-300 text-sm mb-4">
                For investor inquiries, partnership opportunities, or strategic discussions.
              </p>
              <Link
                href="mailto:investors@lubbock.cloud"
                className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-blue/80 text-sm font-medium"
              >
                investors@lubbock.cloud
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

