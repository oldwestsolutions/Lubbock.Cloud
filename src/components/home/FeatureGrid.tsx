import Image from 'next/image';
import Link from 'next/link';

const STACK_PILLS = ['PyTorch', 'vLLM', 'ROCm', 'Kubernetes', 'Slurm', 'Ray'];

const MANAGED = [
  'PostgreSQL & Redis',
  'Metrics & tracing',
  'Secrets & API keys',
  'Backup & snapshots',
];

export function FeatureGrid() {
  return (
    <section className="relative overflow-hidden nb-section">
      <div className="absolute inset-0 bg-grid opacity-[0.35]" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] container-px py-16 sm:py-24">
        <h2 className="section-heading max-w-4xl">
          We provide every essential resource for your AI journey
        </h2>
        <p className="section-subheading">
          Hardware-backed tokens, a trading surface, and managed services — composed the way modern AI teams expect.
        </p>

        <div className="mt-14 grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {/* Tall left — accelerators (spans 2 rows on lg) */}
          <div className="sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:col-start-1 lg:row-start-1 min-h-[280px] lg:min-h-[420px] rounded-3xl border border-white/[0.07] overflow-hidden shadow-soft relative group">
            <Image
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
              alt="Data center server infrastructure"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 33vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nb-black via-nb-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <p className="font-display text-xl sm:text-2xl font-semibold text-lub-ink leading-tight">
                Latest AMD Instinct accelerators
              </p>
              <p className="mt-2 text-sm text-tech-gray-400 max-w-xs">
                MI210 through MI355X — matched 1:1 to liquid compute tokens.
              </p>
            </div>
          </div>

          {/* Top row right: console + pills */}
          <div className="rounded-3xl border border-white/[0.07] bg-nb-raised/90 p-6 shadow-soft flex flex-col lg:min-h-[200px] lg:col-start-2 lg:row-start-1">
            <p className="nb-eyebrow text-tech-gray-500 mb-3">Console</p>
            <p className="font-display text-lg font-semibold text-lub-ink">Cloud-native experience</p>
            <div className="mt-4 flex-1 rounded-2xl border border-white/[0.06] bg-nb-black/60 p-3 font-mono text-[11px] text-tech-gray-500 leading-relaxed min-h-[100px]">
              <span className="text-nb-lime">$</span> lubbock tokens list --region=lub-1
              <br />
              <span className="text-tech-gray-600">LUB-MI300X</span> 2.84 USD · 934 GPUs live
              <br />
              <span className="text-tech-gray-600">job submit</span> --gpu MI325X --hours 8
            </div>
          </div>

          <div className="rounded-3xl border border-white/[0.07] bg-nb-raised/90 p-6 sm:p-7 shadow-soft lg:min-h-[200px] lg:col-start-3 lg:row-start-1">
            <p className="font-display text-lg font-semibold text-lub-ink">Ready-to-run stack</p>
            <p className="text-sm text-tech-gray-500 mt-2 mb-4">
              Ship training and inference without assembling drivers by hand.
            </p>
            <div className="flex flex-wrap gap-2">
              {STACK_PILLS.map((p) => (
                <span key={p} className="nb-tag !rounded-full">
                  {p}
                </span>
              ))}
            </div>
          </div>

          {/* Second row right: managed + expert */}
          <div className="rounded-3xl border border-white/[0.07] bg-nb-raised/90 p-6 sm:p-7 shadow-soft lg:col-start-2 lg:row-start-2">
            <p className="font-display text-lg font-semibold text-lub-ink">Fully managed services</p>
            <p className="text-sm text-tech-gray-500 mt-2 mb-4">Data and control planes you do not babysit.</p>
            <ul className="space-y-2.5">
              {MANAGED.map((m) => (
                <li key={m} className="flex items-center gap-3 text-sm text-tech-gray-400">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-nb-lime/15">
                    <svg className="h-3.5 w-3.5 text-nb-lime" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {m}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/[0.07] overflow-hidden shadow-soft relative min-h-[220px] sm:min-h-[240px] lg:col-start-3 lg:row-start-2">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=80"
              alt="Engineers collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nb-black via-nb-black/85 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-7">
              <p className="font-display text-lg font-semibold text-lub-ink">Architects &amp; expert support</p>
              <p className="text-sm text-tech-gray-400 mt-2 max-w-[240px]">
                Multi-node training, InfiniBand, and ROCm — covered by engineers who run the metal.
              </p>
            </div>
          </div>

          {/* Full-width bottom CTA */}
          <Link
            href="/clusters"
            className="sm:col-span-2 lg:col-span-3 lg:col-start-1 lg:row-start-3 rounded-3xl border border-white/[0.07] bg-gradient-to-br from-nb-lime/10 via-nb-raised to-nb-black p-6 sm:p-8 shadow-soft flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 hover:border-nb-lime/25 transition-colors group"
          >
            <div>
              <p className="nb-tag mb-3 w-fit">Enterprise</p>
              <p className="font-display text-xl sm:text-2xl font-semibold text-lub-ink group-hover:text-nb-lime transition-colors">
                Dedicated clusters for inference &amp; training
              </p>
              <p className="text-sm text-tech-gray-500 mt-2 max-w-xl">
                Pre-built topologies with reserved capacity, InfiniBand, and white-glove onboarding.
              </p>
            </div>
            <span className="text-sm font-semibold text-nb-lime shrink-0">Request access →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
