import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Server, Code, Zap, Database, Network, Shield, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Services • Lubbock Cloud',
  description: 'Cloud services, developer tools, and infrastructure solutions powered by energy arbitrage.',
};

export default function ServicesPage() {
  const services = [
    {
      icon: Server,
      title: 'Dedicated Servers',
      description: 'High-performance dedicated servers powered by Supermicro hardware. Full root access, excellent connectivity, and predictable pricing.',
      link: '/dedicated-servers',
      color: 'tech-red',
    },
    {
      icon: Code,
      title: 'Developer Services',
      description: 'Managed APIs, serverless functions, CI/CD pipelines, and app accelerators to reduce toil and speed delivery.',
      link: '/developer-services',
      color: 'tech-blue',
    },
    {
      icon: Zap,
      title: 'Acceleration',
      description: 'Edge computing, GPU acceleration nodes, and low-latency routing for the fastest path to your users.',
      link: '/acceleration',
      color: 'tech-red',
    },
    {
      icon: Database,
      title: 'Storage',
      description: 'Power-efficient storage solutions for cold data, backups, and archive workloads. Optimized for negative power pricing windows.',
      link: '/storage',
      color: 'tech-blue',
    },
    {
      icon: Network,
      title: 'Networking',
      description: 'High-bandwidth networking with redundant connections and optimized routing for low-latency access.',
      link: '/networking',
      color: 'tech-gray-400',
    },
    {
      icon: Shield,
      title: 'Security & Support',
      description: 'Enterprise-grade security features, DDoS protection, and 24/7 support to keep your infrastructure running.',
      link: '/support',
      color: 'tech-gray-400',
    },
  ];

  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl container-px py-12 sm:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Services</h1>
          <p className="text-tech-gray-300 text-lg max-w-3xl">
            Cloud services and infrastructure solutions powered by energy arbitrage. Interruptible compute that adapts to power markets in real-time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.link}
                className="card-surface rounded-xl p-6 hover:border-tech-red/30 border border-transparent transition-all hover:scale-[1.02]"
              >
                <div className="mb-4">
                  <Icon className={`w-8 h-8 text-${service.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-tech-gray-300 text-sm mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-tech-red text-sm font-medium">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
          <h2 className="text-2xl font-semibold mb-4">Why Lubbock.cloud Services Are Different</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Power-Aware Infrastructure</h3>
              <p className="text-tech-gray-300 text-sm">
                Our services adapt to power pricing in real-time. When power is cheap, we scale up. When expensive, we scale down or discharge batteries. This creates cost structures impossible for traditional cloud providers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-3">Interruptible Compute</h3>
              <p className="text-tech-gray-300 text-sm">
                Unlike traditional cloud providers, we don&apos;t guarantee uptime. This allows us to offer significantly lower prices for workloads that can tolerate interruptions: mining, AI batch jobs, research workloads, and cold storage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

