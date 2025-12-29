import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Press • Lubbock Cloud',
  description: 'Press releases, media kit, and press resources for Lubbock.cloud.',
};

export default function PressPage() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <main className="bg-white text-black">
      <Navbar />
      <div className="mx-auto max-w-5xl container-px py-8">
        {/* Newspaper Header */}
        <header className="border-b-4 border-black mb-8 pb-4">
          <div className="text-center">
            <h1 className="text-6xl font-black tracking-tight mb-2" style={{ fontFamily: 'serif' }}>
              THE LUBBOCK CHRONICLE
            </h1>
            <div className="flex justify-between items-center text-sm border-t-2 border-b-2 border-black py-2 mt-2">
              <span>VOL. CXXIV, No. 47</span>
              <span className="font-bold">{currentDate.toUpperCase()}</span>
              <span>$1.50</span>
            </div>
            <div className="text-xs mt-2 text-gray-600">
              SERVING WEST TEXAS SINCE 2024
            </div>
          </div>
        </header>

        {/* Main Headline */}
        <article className="mb-8 border-b-4 border-black pb-6">
          <div className="mb-4">
            <span className="bg-black text-white px-3 py-1 text-xs font-bold uppercase tracking-wider">BREAKING NEWS</span>
          </div>
          <h2 className="text-5xl font-bold leading-tight mb-4" style={{ fontFamily: 'serif' }}>
            Lubbock.cloud Transforms Energy Constraints Into Competitive Advantages
          </h2>
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <span className="font-semibold">By Lubbock Chronicle Staff</span>
            <span>•</span>
            <span>{currentDate}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed mb-4 font-serif">
                <span className="text-4xl float-left mr-2 leading-none font-bold">L</span>
                ubbock.cloud, a West Texas-based energy arbitrage platform, announced today its innovative approach to transforming power price volatility into sustainable revenue streams. The company leverages excess renewable generation, battery storage, and flexible compute infrastructure to create competitive advantages in the ERCOT market.
              </p>
              <p className="text-base leading-relaxed mb-4 font-serif">
                &ldquo;We&apos;re not just building a data center,&rdquo; said a company spokesperson. &ldquo;We&apos;re creating an energy market participant that turns what others see as constraints—negative pricing, grid volatility, water scarcity—into our core business model.&rdquo;
              </p>
              <p className="text-base leading-relaxed mb-4 font-serif">
                The platform combines three interconnected layers: energy storage using sodium-ion batteries, algorithm-driven workflow management through GitLab, and flexible compute powered by Bitcoin miners. This integrated system enables real-time adaptation to power market conditions.
              </p>
              <p className="text-base leading-relaxed font-serif">
                Lubbock.cloud operates on the principle that interruptible compute workloads can monetize power during negative pricing events while batteries provide grid services and protect infrastructure during high-cost periods. This creates multiple revenue streams: energy arbitrage, compute services, and grid participation.
              </p>
            </div>
            <div className="bg-gray-100 p-4 border-2 border-black">
              <h3 className="font-bold text-lg mb-3 uppercase tracking-wide">Key Facts</h3>
              <ul className="space-y-2 text-sm">
                <li className="border-b border-gray-400 pb-2">
                  <strong>Location:</strong> West Texas
                </li>
                <li className="border-b border-gray-400 pb-2">
                  <strong>Market:</strong> ERCOT
                </li>
                <li className="border-b border-gray-400 pb-2">
                  <strong>Technology:</strong> Sodium-ion batteries, GitLab workflows, Bitcoin miners
                </li>
                <li className="border-b border-gray-400 pb-2">
                  <strong>Revenue Model:</strong> Energy arbitrage, compute services, grid services
                </li>
                <li>
                  <strong>Competitive Moat:</strong> Resource optimization integration
                </li>
              </ul>
            </div>
          </div>
        </article>

        {/* Additional Articles */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <article className="border-2 border-black p-4">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
              Energy Arbitrage at Scale
            </h3>
            <p className="text-sm text-gray-600 mb-2">By Energy Desk</p>
            <p className="text-sm leading-relaxed font-serif">
              The company&apos;s primary revenue engine transforms power price volatility into consistent revenue through intelligent load management. By capturing negative pricing events and arbitraging peak/off-peak spreads, Lubbock.cloud creates value from market inefficiencies that traditional infrastructure cannot access.
            </p>
          </article>

          <article className="border-2 border-black p-4">
            <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'serif' }}>
              West Texas Advantage
            </h3>
            <p className="text-sm text-gray-600 mb-2">By Business Desk</p>
            <p className="text-sm leading-relaxed font-serif">
              Strategic positioning in West Texas provides unique advantages: excess renewable generation, cheap land, and power price volatility. These constraints aren&apos;t problems—they&apos;re the raw materials for an energy arbitrage platform that competitors cannot easily replicate.
            </p>
          </article>
        </div>

        {/* Press Contact */}
        <div className="border-4 border-black p-6 bg-gray-50">
          <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide">Press Inquiries</h3>
          <div className="space-y-2 text-sm">
            <p><strong>Media Contact:</strong> press@lubbock.cloud</p>
            <p><strong>Phone:</strong> Available upon request</p>
            <p><strong>Media Kit:</strong> <Link href="mailto:press@lubbock.cloud" className="text-blue-600 underline">Request Media Kit</Link></p>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-8 pt-6 border-t-2 border-black">
          <Link href="/" className="text-blue-600 hover:underline text-sm">
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </main>
  );
}

