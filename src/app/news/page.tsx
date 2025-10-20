import Link from 'next/link';

export const metadata = {
  title: 'News • Lubbock Cloud',
};

export default function NewsPage() {
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

      {/* Professional Newsletter Header */}
      <header className="border-b-2 border-tech-red mb-8 pb-6">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-tech-red tracking-tight leading-none mb-2">LUBBOCK CLOUD</h1>
          <div className="text-xl text-tech-gray-200 font-medium mb-4">INFRASTRUCTURE NEWSLETTER</div>
          <div className="flex justify-center items-center gap-4 text-sm text-tech-gray-400">
            <span>Issue #{Math.floor(Math.random() * 50) + 1}</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
      </header>

      {/* Featured Article */}
      <section className="mb-12">
        <div className="bg-tech-gray-800/40 border-l-4 border-tech-red pl-6 py-6 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="bg-tech-red text-white px-3 py-1 text-xs font-bold uppercase tracking-wide">FEATURED</span>
            <span className="text-tech-gray-400 text-sm font-medium">INFRASTRUCTURE UPDATE</span>
          </div>
          <h2 className="text-4xl font-bold leading-tight mb-3 text-white">Supermicro Servers Now Available</h2>
          <p className="text-lg text-tech-gray-200 font-medium mb-4">Dedicated hardware with enterprise-grade performance at competitive pricing</p>
          <div className="flex items-center gap-2 text-sm text-tech-gray-400">
            <span>Published: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            <span>•</span>
            <span>Last updated: {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <p className="text-tech-gray-300 leading-relaxed mb-4">
              Lubbock Cloud today announced the availability of dedicated servers powered by Supermicro hardware, 
              marking a significant expansion of our infrastructure offerings. The new servers provide customers 
              with enterprise-grade performance and reliability at competitive pricing.
            </p>
            <p className="text-tech-gray-300 leading-relaxed mb-6">
              &ldquo;We&apos;re excited to bring Supermicro&apos;s proven hardware to our customers,&rdquo; said the engineering team. 
              &ldquo;These servers represent our commitment to providing the best possible infrastructure for modern applications.&rdquo;
            </p>
            <Link href="/dedicated-servers" className="inline-flex items-center gap-2 bg-tech-red text-white px-4 py-2 rounded-md hover:opacity-95 transition-opacity">
              Read Full Article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="bg-tech-gray-800/60 p-6 border border-white/10 rounded-lg">
            <h3 className="font-bold text-tech-red mb-4 text-lg uppercase tracking-wide">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/dedicated-servers" className="block p-3 bg-tech-gray-700/50 rounded-lg hover:bg-tech-gray-700/70 transition-colors">
                <div className="text-white font-medium text-sm">Enterprise Server Hardware</div>
                <div className="text-tech-gray-400 text-xs">AMD EPYC processors, ECC memory, NVMe storage</div>
              </Link>
              <Link href="/developer-services" className="block p-3 bg-tech-gray-700/50 rounded-lg hover:bg-tech-gray-700/70 transition-colors">
                <div className="text-white font-medium text-sm">Developer Services Launch</div>
                <div className="text-tech-gray-400 text-xs">Managed APIs, serverless functions, CI/CD</div>
              </Link>
              <Link href="/acceleration" className="block p-3 bg-tech-gray-700/50 rounded-lg hover:bg-tech-gray-700/70 transition-colors">
                <div className="text-white font-medium text-sm">Acceleration Program</div>
                <div className="text-tech-gray-400 text-xs">Edge computing, GPU nodes, low-latency routing</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-8 text-white">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">NEW</span>
              <span className="text-tech-gray-400 text-xs">Developer Services</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Developer Services Launch</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              New managed APIs, serverless functions, and CI/CD pipelines now available. 
              Reduce development time with our comprehensive developer tooling platform.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/developer-services" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>
          
          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">BETA</span>
              <span className="text-tech-gray-400 text-xs">Infrastructure</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Acceleration Program</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Edge computing and GPU acceleration nodes now in beta. 
              Low-latency routing partnerships with major ISPs announced.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/acceleration" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>

          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">UPDATE</span>
              <span className="text-tech-gray-400 text-xs">Security</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Enhanced Security Features</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              New security enhancements including advanced DDoS protection, 
              automated threat detection, and improved encryption protocols.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/support" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>

          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">TECH</span>
              <span className="text-tech-gray-400 text-xs">Blockchain</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Blockchain Integration</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Introducing decentralized cloud brokerage services. 
              Rent out unused compute resources and storage through blockchain technology.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/blockchain" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>

          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">ANNOUNCEMENT</span>
              <span className="text-tech-gray-400 text-xs">Company</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">24/7 Support Expansion</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Expanding our support team to provide round-the-clock assistance. 
              New response time guarantees and dedicated account managers.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/support" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>

          <article className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5 hover:border-tech-red/30 transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-tech-red/20 text-tech-red px-2 py-1 text-xs font-bold uppercase">PERFORMANCE</span>
              <span className="text-tech-gray-400 text-xs">Infrastructure</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Network Performance Boost</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Significant improvements to network latency and throughput. 
              New edge locations and optimized routing for better performance.
            </p>
            <div className="flex items-center justify-between">
              <div className="text-xs text-tech-gray-400">
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
              </div>
              <Link href="/networking" className="text-tech-red hover:text-tech-red/80 text-sm font-medium">
                Read More →
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Categories & Archive */}
      <section className="border-t-2 border-tech-red pt-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-tech-red">Categories</h3>
            <div className="space-y-2">
              <Link href="/developer-services" className="block text-tech-gray-300 hover:text-white transition-colors">Developer Services</Link>
              <Link href="/acceleration" className="block text-tech-gray-300 hover:text-white transition-colors">Infrastructure</Link>
              <Link href="/blockchain" className="block text-tech-gray-300 hover:text-white transition-colors">Blockchain</Link>
              <Link href="/support" className="block text-tech-gray-300 hover:text-white transition-colors">Security</Link>
              <Link href="/company" className="block text-tech-gray-300 hover:text-white transition-colors">Company News</Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-tech-red">Recent Updates</h3>
            <div className="space-y-3">
              <div className="text-sm">
                <div className="text-white font-medium">Supermicro Servers Launch</div>
                <div className="text-tech-gray-400">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              </div>
              <div className="text-sm">
                <div className="text-white font-medium">Developer Services Beta</div>
                <div className="text-tech-gray-400">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              </div>
              <div className="text-sm">
                <div className="text-white font-medium">Security Enhancements</div>
                <div className="text-tech-gray-400">{new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-tech-red">Newsletter Info</h3>
            <div className="bg-tech-gray-800/30 p-4 rounded-lg border border-white/5">
              <p className="text-tech-gray-300 text-sm mb-3">
                This newsletter provides regular updates on our infrastructure services, 
                new features, and company announcements.
              </p>
              <div className="text-xs text-tech-gray-400 space-y-1">
                <div>• Regular content updates</div>
                <div>• Infrastructure news</div>
                <div>• Service announcements</div>
                <div>• Technical specifications</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


