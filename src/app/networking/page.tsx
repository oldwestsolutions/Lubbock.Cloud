export const metadata = {
  title: 'Networking • Lubbock Cloud',
};

export default function NetworkingPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Networking</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">
        Reliable, high-throughput networking with flexible controls.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">VPC & ACLs</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Segment traffic and define granular policies.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Load Balancing</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Distribute traffic with health checks and TLS.</p>
        </div>
      </div>
    </main>
  );
}


