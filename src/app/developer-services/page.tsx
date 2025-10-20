import Link from 'next/link';

export const metadata = {
  title: 'Developer Services • Lubbock Cloud',
};

export default function DeveloperServicesPage() {
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
          <h1 className="text-5xl font-bold text-tech-red mb-4">Developer Services</h1>
          <p className="text-xl text-tech-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
            Managed APIs, serverless functions, CI/CD pipelines, and app accelerators to reduce toil and speed delivery
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="mb-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Managed APIs</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Build and deploy APIs easily with our managed platform. 
              Automatic scaling, monitoring, and documentation included.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Serverless Functions</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Run code without managing servers. Event-driven functions 
              that scale automatically and only charge for execution time.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">CI/CD Pipelines</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Continuous integration and deployment as a managed service. 
              Automated testing, building, and deployment workflows.
            </p>
          </div>
          
          <div className="card-surface rounded-lg p-6 text-center">
            <div className="w-16 h-16 bg-tech-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-tech-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">App Accelerator Frameworks</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed">
              Toolkits and templates that help developers launch projects faster. 
              Pre-built components and best practices included.
            </p>
          </div>
        </div>
      </section>

      {/* Managed APIs Details */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Managed APIs</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-6">
              Build, deploy, and manage APIs with our fully managed platform. 
              Focus on your business logic while we handle infrastructure, scaling, and monitoring.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Automatic scaling and load balancing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Built-in authentication and authorization</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Automatic API documentation generation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Rate limiting and DDoS protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Real-time monitoring and analytics</span>
              </div>
            </div>
          </div>
          <div className="bg-tech-gray-800/60 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-tech-red">API Pricing</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-tech-gray-300">API Requests (per 1M)</span>
                <span className="text-white font-medium">$0.50</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Data Transfer (per GB)</span>
                <span className="text-white font-medium">$0.10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Storage (per GB/month)</span>
                <span className="text-white font-medium">$0.05</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
              Create API
            </button>
          </div>
        </div>
      </section>

      {/* Serverless Functions */}
      <section className="mb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="bg-tech-gray-800/60 p-8 rounded-lg border border-white/10">
            <h3 className="text-2xl font-bold mb-4 text-tech-red">Serverless Functions</h3>
            <p className="text-tech-gray-300 mb-6">
              Deploy functions that run on-demand without managing servers. 
              Pay only for execution time with automatic scaling and zero cold starts.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Function Executions (per 1M)</span>
                <span className="text-white font-medium">$0.20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Compute Time (per GB-second)</span>
                <span className="text-white font-medium">$0.000016</span>
              </div>
              <div className="flex justify-between">
                <span className="text-tech-gray-300">Memory (per GB/month)</span>
                <span className="text-white font-medium">$0.000002</span>
              </div>
            </div>
            <button className="w-full mt-6 bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
              Deploy Function
            </button>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">Event-Driven Computing</h2>
            <p className="text-tech-gray-300 leading-relaxed mb-6">
              Build event-driven applications with serverless functions. 
              Trigger functions from HTTP requests, database changes, file uploads, and more.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Multiple runtime support (Node.js, Python, Go)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Event triggers (HTTP, database, storage)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Zero cold starts with warm instances</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-tech-red rounded-full"></div>
                <span className="text-tech-gray-300">Built-in logging and monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD Pipelines */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-white">CI/CD Pipelines</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-white">Automated Workflows</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Set up continuous integration and deployment pipelines with our managed service. 
              Automated testing, building, and deployment to multiple environments.
            </p>
            <ul className="text-tech-gray-300 text-sm space-y-2">
              <li>• Automated testing and code quality checks</li>
              <li>• Multi-environment deployments</li>
              <li>• Rollback capabilities</li>
              <li>• Integration with popular Git providers</li>
            </ul>
          </div>
          <div className="bg-tech-gray-800/30 p-6 rounded-lg border border-white/5">
            <h3 className="text-xl font-bold mb-4 text-white">App Accelerator Frameworks</h3>
            <p className="text-tech-gray-300 text-sm leading-relaxed mb-4">
              Jumpstart your development with pre-built templates and frameworks. 
              Common patterns, best practices, and boilerplate code included.
            </p>
            <ul className="text-tech-gray-300 text-sm space-y-2">
              <li>• React, Vue, Angular starter templates</li>
              <li>• Backend API frameworks</li>
              <li>• Database schemas and migrations</li>
              <li>• Authentication and authorization patterns</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-tech-gray-800/40 border-l-4 border-tech-red pl-8 py-8 rounded-r-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">Accelerate Your Development</h2>
        <p className="text-lg text-tech-gray-200 leading-relaxed mb-6">
          Reduce development time and focus on building great applications with our comprehensive 
          developer services platform. Managed infrastructure, automated workflows, and expert support.
        </p>
        <div className="flex gap-4">
          <button className="bg-tech-red text-white px-6 py-3 rounded-md hover:opacity-95 transition-opacity font-medium">
            Get Started
          </button>
          <Link href="/support" className="border border-white/20 text-white px-6 py-3 rounded-md hover:bg-white/5 transition-colors font-medium">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}