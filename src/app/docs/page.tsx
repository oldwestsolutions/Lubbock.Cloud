import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CloudLogo } from '@/components/CloudLogo';
import Link from 'next/link';

const DOC_SECTIONS = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Platform Overview', description: 'Understand the tokenized compute model and how Lubbock Cloud works.', href: '#' },
      { title: 'Create an Account', description: 'Set up your wallet connection and fund your first token balance.', href: '#' },
      { title: 'Your First GPU Session', description: 'Redeem tokens and launch an interactive GPU session in under 5 minutes.', href: '#' },
    ],
  },
  {
    title: 'Compute Tokens',
    items: [
      { title: 'Token Mechanics', description: 'How tokens map to GPU-hours, memory tiers, and priority levels.', href: '#' },
      { title: 'Buying & Selling', description: 'Trade tokens on the marketplace with market or limit orders.', href: '#' },
      { title: 'Redemption', description: 'Convert tokens into live sessions, API credits, or batch jobs.', href: '#' },
      { title: 'Vaults & Staking', description: 'Lock tokens to earn yield, discounts, and priority access.', href: '#' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Authentication', description: 'API key management, scopes, and rate limits.', href: '#' },
      { title: 'Compute API', description: 'Launch jobs, check status, and manage GPU sessions programmatically.', href: '#' },
      { title: 'Token API', description: 'Query balances, submit orders, and manage vault positions.', href: '#' },
      { title: 'Webhooks', description: 'Real-time event notifications for job completion, order fills, and vault maturity.', href: '#' },
    ],
  },
  {
    title: 'ROCm Services',
    items: [
      { title: 'LLM Inference', description: 'Deploy open-weight models with vLLM on MI300X hardware.', href: '#' },
      { title: 'Embeddings API', description: 'High-throughput text and image embeddings at scale.', href: '#' },
      { title: 'Fine-Tuning', description: 'LoRA, QLoRA, and full-parameter training pipelines.', href: '#' },
      { title: 'Vector Database', description: 'GPU-accelerated FAISS vector search at billion-scale.', href: '#' },
    ],
  },
  {
    title: 'Enterprise',
    items: [
      { title: 'Cluster Configuration', description: 'Dedicated GPU clusters with InfiniBand networking.', href: '#' },
      { title: 'SLA & Support', description: 'Enterprise SLA options, 24/7 support, and dedicated account management.', href: '#' },
      { title: 'Compliance', description: 'SOC 2, data residency, and security documentation.', href: '#' },
    ],
  },
];

export const metadata = {
  title: 'Documentation — Lubbock Cloud',
  description: 'Developer documentation for the Lubbock Cloud tokenized GPU compute platform.',
};

export default function DocsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-container">
        <div className="max-w-3xl">
          <h1 className="section-heading">Documentation</h1>
          <p className="section-subheading">
            Everything you need to buy, trade, and deploy tokenized GPU compute.
            From first token to production cluster.
          </p>
        </div>

        {/* Quick links */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          <Link href="#" className="glow-card p-5 hover:border-white/10 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-lub-accent-muted flex items-center justify-center mb-3 ring-1 ring-lub-accent/15">
              <CloudLogo className="w-5 h-5 text-lub-accent" />
            </div>
            <h3 className="font-medium text-lub-ink group-hover:text-lub-accent transition-colors">Quick Start</h3>
            <p className="text-sm text-tech-gray-400 mt-1">Go from zero to GPU session in 5 minutes.</p>
          </Link>
          <Link href="#" className="glow-card p-5 hover:border-white/10 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-lub-red-muted flex items-center justify-center mb-3 ring-1 ring-lub-red/15">
              <svg className="w-5 h-5 text-lub-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-medium text-lub-ink group-hover:text-lub-red transition-colors">API Reference</h3>
            <p className="text-sm text-tech-gray-400 mt-1">Full endpoint documentation with examples.</p>
          </Link>
          <Link href="#" className="glow-card p-5 hover:border-white/10 transition-all group">
            <div className="w-10 h-10 rounded-xl bg-lub-green-muted flex items-center justify-center mb-3 ring-1 ring-lub-green/15">
              <svg className="w-5 h-5 text-lub-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-medium text-lub-ink group-hover:text-lub-green transition-colors">SDKs & Libraries</h3>
            <p className="text-sm text-tech-gray-400 mt-1">Python, Node.js, and Go client libraries.</p>
          </Link>
        </div>

        {/* Doc sections */}
        <div className="mt-16 space-y-12">
          {DOC_SECTIONS.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold mb-6">{section.title}</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.items.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex gap-4 p-4 rounded-lg hover:bg-white/[0.03] transition-colors group border border-transparent hover:border-white/[0.06]"
                  >
                    <div className="w-1 rounded-full bg-tech-gray-800 group-hover:bg-lub-accent transition-colors flex-shrink-0" />
                    <div>
                      <h3 className="text-sm font-medium text-lub-ink group-hover:text-lub-accent transition-colors">{item.title}</h3>
                      <p className="text-xs text-tech-gray-500 mt-1">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Code example */}
        <div className="mt-16 glow-card p-6">
          <h2 className="text-lg font-medium mb-4">Example: Launch an Inference Job</h2>
          <div className="bg-tech-gray-800/80 rounded-lg p-5 font-mono text-sm overflow-x-auto">
            <pre className="text-tech-gray-300">
{`import { LubbockClient } from '@lubbock/sdk';

const client = new LubbockClient({
  apiKey: process.env.LUBBOCK_API_KEY,
});

// Redeem 4 LUB-MI300X tokens for an inference session
const job = await client.compute.create({
  gpu: 'MI300X',
  durationHours: 4,
  jobType: 'inference',
  config: {
    model: 'meta-llama/Llama-3-70B',
    quantization: 'fp16',
    maxBatchSize: 32,
  },
});

console.log(job.id);       // "job-abc123"
console.log(job.endpoint); // "https://compute.lubbock.cloud/job-abc123"
console.log(job.status);   // "provisioning"`}
            </pre>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
