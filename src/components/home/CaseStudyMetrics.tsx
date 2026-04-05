const METRICS = [
  {
    title: 'Sub-100ms',
    subtitle: 'target TTFT on tuned vLLM routes for 70B-class models on MI300X.',
  },
  {
    title: '1 token',
    subtitle: '= 1 GPU-hour on the printed accelerator — no hidden conversion tables.',
  },
  {
    title: 'Full stack',
    subtitle: 'API, Terraform-style provisioning hooks, and live job telemetry in one place.',
  },
];

export function CaseStudyMetrics() {
  return (
    <section className="relative nb-section">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-400/[0.06] to-transparent pointer-events-none" aria-hidden />
      <div className="relative mx-auto max-w-[1280px] container-px py-16 sm:py-24">
        <p className="nb-eyebrow mb-3">Case study</p>
        <h2 className="section-heading">Tested with GenAI workloads</h2>
        <p className="section-subheading">
          Teams run inference, fine-tuning, and batch pipelines on the same tokenized footprint — with metrics
          that match what you see in the marketplace.
        </p>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12 items-start">
          <div className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-display text-lg font-semibold text-lub-ink">Lubbock Cloud</span>
              <span className="text-tech-gray-600">×</span>
              <span className="nb-tag">ROCm inference</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-semibold text-lub-ink leading-tight">
              LLM inference where tokens meet telemetry
            </h3>
            <p className="mt-5 text-tech-gray-500 leading-relaxed">
              <strong className="text-lub-ink font-medium">Goal:</strong> Give builders a single surface to buy capacity,
              deploy models, and trace cost per token in real time.
            </p>
            <p className="mt-3 text-tech-gray-500 leading-relaxed">
              <strong className="text-lub-ink font-medium">Approach:</strong> ROCm-native images, managed endpoints,
              and a job fabric that reports queue depth back to the dashboard you already use for balances.
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {['Inference', 'ROCm', 'Tokens', 'Observability'].map((t) => (
                <li key={t}>
                  <span className="nb-tag">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {METRICS.map((m) => (
              <div
                key={m.title}
                className="rounded-3xl border border-white/[0.08] bg-nb-raised/95 px-6 py-7 sm:px-8 sm:py-8 shadow-[0_16px_48px_-20px_rgba(0,0,0,0.5)]"
              >
                <p className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-lub-ink">
                  {m.title}
                </p>
                <p className="mt-3 text-sm sm:text-base text-tech-gray-500 leading-relaxed max-w-xl">
                  {m.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
