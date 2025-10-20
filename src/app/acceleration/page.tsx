export const metadata = {
  title: 'Acceleration • Lubbock Cloud',
};

export default function AccelerationPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Acceleration</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Content Delivery / Edge Compute</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Local CDN caching to speed up regional websites and apps.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">AI/ML Acceleration Nodes</h2>
          <p className="mt-2 text-sm text-tech-gray-300">GPU rental or access for AI workloads (e.g., TensorFlow, PyTorch).</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Low-Latency Routing</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Partner with ISPs to offer low-latency pathways for gaming, trading, or streaming.</p>
        </div>
      </div>
    </main>
  );
}


