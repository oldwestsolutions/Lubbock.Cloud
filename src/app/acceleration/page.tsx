import Link from 'next/link';

export const metadata = {
  title: 'Acceleration • Lubbock Cloud',
};

export default function AccelerationPage() {
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
          <h1 className="text-5xl font-bold text-tech-red mb-4">Acceleration Services</h1>
          <p className="text-xl text-tech-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
            Edge computing, GPU acceleration, and low-latency routing for high-performance applications
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Edge Computing</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Deploy applications closer to your users with our global edge network. 
              Reduce latency and improve performance with distributed computing.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">AI/ML Acceleration</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              GPU-powered nodes for machine learning and AI workloads. 
              Train models faster with dedicated GPU resources and optimized frameworks.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Low-Latency Routing</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Optimized network paths for gaming, trading, and real-time applications. 
              Partner with ISPs for the fastest possible connections.
            </p>
          </div>
        </div>
      </section>

      {/* Edge Computing Details */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Global Edge Network</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-6">
              Our edge computing platform brings your applications closer to users worldwide. 
              Deploy containers and serverless functions at edge locations for reduced latency 
              and improved user experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">50+ edge locations worldwide</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Sub-10ms latency to major cities</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Auto-scaling edge functions</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Global load balancing</span>
              </div>
            </div>
          </div>
          <div className="bg-tech-gray-800/60 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-tech-red">Edge Computing Pricing</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Edge Functions (per 1M requests)</span>
                <span className="text-white font-medium">$0.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Edge Storage (per GB/month)</span>
                <span className="text-white font-medium">$0.10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Data Transfer (per GB)</span>
                <span className="text-white font-medium">$0.05</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
              Deploy Edge Function
            </button>
          </div>
        </div>
      </section>

      {/* GPU Acceleration */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-tech-gray-800/60 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-tech-red">GPU Acceleration Nodes</h3>
            <p className="text-tech-gray-300 mb-6">
              Dedicated GPU resources for machine learning, AI training, and high-performance computing. 
              Choose from NVIDIA A100, V100, or RTX 4090 GPUs.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-tech-gray-300">NVIDIA A100 (80GB)</span>
                <span className="text-white font-medium">$2.50/hour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">NVIDIA V100 (32GB)</span>
                <span className="text-white font-medium">$1.50/hour</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">RTX 4090 (24GB)</span>
                <span className="text-white font-medium">$0.80/hour</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
              Launch GPU Node
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">AI/ML Acceleration</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-6">
              Accelerate your machine learning workflows with dedicated GPU resources. 
              Pre-configured with popular ML frameworks and optimized for training and inference.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">TensorFlow, PyTorch, JAX pre-installed</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">CUDA and cuDNN optimized</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Jupyter notebooks included</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Persistent storage for datasets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Low-Latency Routing */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Low-Latency Routing</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-white">Gaming & Real-time</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Optimized network paths for gaming servers, real-time applications, and low-latency requirements. 
              Partner with major ISPs for direct peering.
            </p>
            <ul className="text-tech-gray-300 text-sm space-y-2">
              <li>• Sub-5ms latency to major gaming regions</li>
              <li>• Direct ISP peering agreements</li>
              <li>• DDoS protection included</li>
              <li>• 99.99% uptime SLA</li>
            </ul>
          </div>
          <div className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-white">Financial Trading</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Ultra-low latency connections for high-frequency trading and financial applications. 
              Co-location services available at major exchanges.
            </p>
            <ul className="text-tech-gray-300 text-sm space-y-2">
              <li>• Sub-1ms latency to exchanges</li>
              <li>• Co-location at major data centers</li>
              <li>• Dedicated network paths</li>
              <li>• 24/7 network monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tech-gray-800/40 border-l-4 border-tech-red pl-8 py-8 rounded-r-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">Accelerate Your Applications</h2>
        <p className="text-lg text-tech-gray-200 leading-relaxed mb-6">
          Deploy edge computing, GPU acceleration, or low-latency routing to optimize your applications 
          for maximum performance and user experience.
        </p>
        <div className="flex gap-4">
          <button className="bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
            Get Started
          </button>
          <Link href="/support" className="border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/5 transition-colors font-medium">
            Contact Sales
          </Link>
        </div>
      </section>
    </main>
  );
}