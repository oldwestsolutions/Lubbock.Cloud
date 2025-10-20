import Link from 'next/link';

export const metadata = {
  title: 'Company • Lubbock Cloud',
};

export default function CompanyPage() {
  return (
    <main className="mx-auto max-w-6xl container-px py-8">
      {/* Back button */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-2 text-tech-gray-300 hover:text-white transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>

      {/* Hero Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-black text-tech-red mb-4">LUBBOCK CLOUD</h1>
          <p className="text-2xl text-tech-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
            Enterprise-grade cloud infrastructure built for modern businesses
          </p>
        </div>
      </section>

      {/* The Story of Lubbock */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-white">The Story of Lubbock Cloud</h2>
            <div className="space-y-4 text-tech-gray-300 leading-relaxed">
              <p>
                Lubbock Cloud was founded in 2024 with a vision to bring enterprise-grade infrastructure to businesses everywhere. 
                We set out to build a cloud platform that combines security, performance, and reliability at competitive pricing.
              </p>
              <p>
                Our company is built on the principles of robust infrastructure and security-first development. 
                Our true strength lies in our team — experienced engineers and technologists who understand the critical 
                importance of reliable cloud infrastructure for modern businesses.
              </p>
              <p>
                Lubbock Cloud has fostered a culture of innovation, cybersecurity excellence, and customer-first service. 
                We are committed to providing the highest levels of security and technological strength, ensuring our 
                customers can focus on growing their businesses while we handle their infrastructure needs.
              </p>
            </div>
          </div>
          <div className="bg-tech-gray-800/60 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-tech-red">Lubbock Cloud by the Numbers</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">2024</div>
                <div className="text-sm text-tech-gray-300">Founded</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-tech-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-tech-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">$39</div>
                <div className="text-sm text-tech-gray-300">Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How Servers Accelerate Growth */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">How Infrastructure Accelerates Growth</h2>
          <p className="text-xl text-tech-gray-300 max-w-3xl mx-auto">
            From secure foundations to the cloud — how our reliable infrastructure transforms businesses and accelerates growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Speed & Performance</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Our high-performance servers connect businesses to global markets with unprecedented speed and reliability, 
              built on secure foundations and enterprise-grade hardware.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Global Reach</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              From local businesses to international markets, our secure infrastructure enables companies to reach customers 
              anywhere in the world with low-latency connections and global edge locations.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Reliability</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Our robust infrastructure ensures businesses can operate 24/7 without interruption, building trust and growth 
              through security, strength, and 99.9% uptime guarantees.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16">
        <div className="bg-tech-gray-800/40 border-l-8 border-tech-red pl-8 py-8 rounded-r-lg">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Mission</h2>
          <p className="text-lg text-tech-gray-200 leading-relaxed mb-6">
            To bring enterprise-grade cloud infrastructure to businesses everywhere. We believe that powerful, secure technology 
            should be available to businesses of all sizes, from startups to Fortune 500 companies, with the same level of 
            reliability and performance.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-tech-red">Built for Growth</h3>
              <p className="text-tech-gray-300 text-sm leading-relaxed">
                Our infrastructure scales with your business, from startup to enterprise, providing the same level of 
                performance and security regardless of your company size.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-tech-red">Community First</h3>
              <p className="text-tech-gray-300 text-sm leading-relaxed">
                We believe in supporting the businesses we serve, providing reliable infrastructure that enables 
                companies of all sizes to compete globally with enterprise-grade technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Journey</h2>
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="w-4 h-4 bg-tech-red rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">2024 - The Beginning</h3>
              <p className="text-tech-gray-300 leading-relaxed">
                Lubbock Cloud was founded with a vision to bring enterprise-grade infrastructure to businesses everywhere. 
                We set out to build a cloud platform that combines security, performance, and reliability at competitive pricing.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-4 h-4 bg-tech-red rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Today - Supermicro Partnership</h3>
              <p className="text-tech-gray-300 leading-relaxed">
                We&apos;ve partnered with Supermicro to deliver dedicated servers with enterprise-grade performance. 
                Our infrastructure now powers businesses across the globe, from startups to Fortune 500 companies.
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="w-4 h-4 bg-tech-gray-500 rounded-full mt-2 flex-shrink-0"></div>
            <div>
              <h3 className="text-xl font-semibold mb-2 text-white">Future - Global Expansion</h3>
              <p className="text-tech-gray-300 leading-relaxed">
                We&apos;re expanding our reach, bringing the reliability and performance of Lubbock Cloud to new markets 
                and new opportunities, always maintaining our commitment to security, performance, and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Values</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-tech-red font-bold text-xl">H</span>
            </div>
            <h3 className="font-semibold mb-2 text-white">Honesty</h3>
            <p className="text-tech-gray-300 text-sm">Transparent pricing, clear communication</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-tech-red font-bold text-xl">R</span>
            </div>
            <h3 className="font-semibold mb-2 text-white">Reliability</h3>
            <p className="text-tech-gray-300 text-sm">99.9% uptime, 24/7 support</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-tech-red font-bold text-xl">I</span>
            </div>
            <h3 className="font-semibold mb-2 text-white">Innovation</h3>
            <p className="text-tech-gray-300 text-sm">Cutting-edge technology, forward thinking</p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-tech-red font-bold text-xl">S</span>
            </div>
            <h3 className="font-semibold mb-2 text-white">Service</h3>
            <p className="text-tech-gray-300 text-sm">Customer-first approach, expert support</p>
          </div>
        </div>
      </section>
    </main>
  );
}


