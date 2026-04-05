const LAYERS = [
  {
    title: 'Hardware',
    items: ['AMD MI300X / MI325X', 'NVIDIA H100 / H200 / B200', 'InfiniBand fabric', 'NVMe + object tiers'],
  },
  {
    title: 'Token layer',
    items: ['LUB-* compute tokens', 'Marketplace & spreads', 'Vault staking', 'On-chain style ledger'],
  },
  {
    title: 'Orchestration',
    items: ['Job queue & priorities', 'Kubernetes pools', 'ROCm / CUDA images', 'VPC & networking'],
  },
  {
    title: 'Inference & APIs',
    items: ['vLLM endpoints', 'Embeddings API', 'Batch & training jobs', 'Live WebSocket status'],
  },
];

const RAIL = ['Terraform & API', 'Audit logs', 'Observability', 'Token ledger'];

export function StackDiagram() {
  return (
    <section className="nb-section bg-nb-surface/60">
      <div className="mx-auto max-w-[1280px] container-px py-16 sm:py-24">
        <p className="nb-eyebrow mb-3">Architecture</p>
        <h2 className="section-heading max-w-3xl">
          One stack — from bare metal to inference
        </h2>
        <p className="section-subheading">
          Tokenized capacity sits on real accelerators. The same mental model as a hyperscale AI cloud,
          with ownership and liquidity built in.
        </p>

        <div className="mt-14 lg:mt-16 rounded-3xl border border-white/[0.07] bg-nb-black/40 p-4 sm:p-6 lg:p-8 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.55)]">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 lg:items-stretch">
            {/* Diagram grid + rail */}
            <div className="flex-1 min-w-0 space-y-4 sm:space-y-5">
              {LAYERS.map((layer) => (
                <div key={layer.title} className="flex flex-col sm:flex-row sm:items-stretch gap-3 sm:gap-4">
                  <div className="sm:w-36 lg:w-40 shrink-0 flex items-center sm:items-start sm:pt-3">
                    <span className="font-display text-sm font-semibold text-lub-ink tracking-tight">
                      {layer.title}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-2.5 flex-1">
                    {layer.items.map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/[0.08] bg-nb-raised/80 px-4 py-3 text-[13px] sm:text-sm text-tech-gray-300 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.4)]"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Vertical rail — retail stack callouts */}
            <div className="lg:w-[148px] shrink-0 lg:ml-6 lg:border-l border-white/[0.08] lg:pl-6">
              <p className="nb-eyebrow mb-4 lg:mt-1 text-nb-lime/90">Platform</p>
              <ul className="space-y-3">
                {RAIL.map((line) => (
                  <li
                    key={line}
                    className="flex items-start gap-2.5 text-[13px] sm:text-sm text-tech-gray-400 leading-snug"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-nb-lime shadow-[0_0_10px_rgba(255,255,255,0.35)]"
                      aria-hidden
                    />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
