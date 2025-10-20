const features = [
  {
    title: 'Top performance hardware',
    desc: 'High-end CPUs, fast NVMe storage, and ECC memory for sustained throughput.',
  },
  {
    title: 'Excellent connectivity',
    desc: 'Redundant networking with generous bandwidth for stable, low-latency access.',
  },
  {
    title: 'Full root access',
    desc: 'Complete control over your environment with flexible OS choices.',
  },
  {
    title: 'Predictable costs',
    desc: 'Straightforward monthly pricing — starting at $39.',
  },
  {
    title: 'Easy scaling',
    desc: 'Upgrade resources or add servers without disrupting your workloads.',
  },
  {
    title: 'Data center grade',
    desc: 'Modern facilities, power redundancy, and strict physical security.',
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl container-px py-16 sm:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="card-surface rounded-lg p-6">
            <h3 className="text-lg font-medium">{f.title}</h3>
            <p className="mt-2 text-sm text-tech-gray-300">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


