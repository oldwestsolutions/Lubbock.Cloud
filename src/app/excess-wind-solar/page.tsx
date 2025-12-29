import Link from 'next/link';
import { Wind } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: 'Excess Wind & Solar • Lubbock Cloud',
  description: 'Understanding how excess renewable generation creates opportunities for negative pricing and curtailment capture in West Texas.',
};

export default function ExcessWindSolarPage() {
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
              <Wind className="w-8 h-8 text-tech-red" />
            </div>
            <div>
              <h1 className="text-4xl sm:text-5xl font-semibold mb-2">Excess Wind & Solar</h1>
              <p className="text-tech-gray-400">Renewable Generation Opportunities</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              At certain hours, renewable generation in West Texas exceeds demand, creating a unique market dynamic. Wind and solar installations produce power that cannot always be absorbed by the grid, leading to curtailment events where renewable energy is wasted.
            </p>
            <p className="text-tech-gray-300 leading-relaxed">
              During these periods, electricity prices can drop to zero or even become negative, meaning generators pay to offload power. This creates both a challenge for renewable operators and an opportunity for flexible load operators.
            </p>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">The Opportunity</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Negative Pricing Windows</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  When renewable generation exceeds demand, ERCOT prices can go negative. Lubbock.cloud captures this excess power through interruptible compute loads and battery storage, turning what would be wasted energy into revenue-generating operations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Curtailment Capture</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Instead of wind and solar farms being forced to curtail production, Lubbock.cloud provides a flexible load that can absorb excess generation. This creates value for both renewable operators and our compute infrastructure.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Predictable Patterns</h3>
                <p className="text-tech-gray-300 leading-relaxed">
                  Renewable generation follows predictable daily and seasonal patterns. Wind generation typically peaks at night, while solar peaks during midday. These patterns enable sophisticated scheduling of compute workloads and battery charging cycles.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8">
            <h2 className="text-2xl font-semibold mb-4">How Lubbock.cloud Leverages This</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Bitcoin Mining</h3>
                <p className="text-tech-gray-300 text-sm">
                  Interruptible mining operations ramp up during negative pricing windows, converting excess renewable energy into BTC revenue.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Battery Storage</h3>
                <p className="text-tech-gray-300 text-sm">
                  Grid-scale batteries charge during negative pricing periods and discharge during high-demand, high-price periods.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Compute Workloads</h3>
                <p className="text-tech-gray-300 text-sm">
                  AI batch jobs, HPC workloads, and storage operations scheduled during excess generation windows.
                </p>
              </div>
              <div className="bg-tech-gray-800/50 rounded-lg p-6">
                <h3 className="font-semibold text-white mb-2">Grid Services</h3>
                <p className="text-tech-gray-300 text-sm">
                  Providing demand response and frequency regulation services to help balance renewable intermittency.
                </p>
              </div>
            </div>
          </div>

          <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
            <h2 className="text-2xl font-semibold mb-4">Strategic Advantage</h2>
            <p className="text-tech-gray-300 leading-relaxed">
              Excess wind and solar generation isn&apos;t a problem to solve—it&apos;s a resource to monetize. By positioning flexible compute and storage infrastructure in West Texas, Lubbock.cloud turns renewable energy abundance into competitive advantage. This creates a sustainable business model that aligns with the energy transition while generating superior returns.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

