export const metadata = {
  title: 'Dedicated Servers • Lubbock Cloud',
  description: 'Dedicated root servers on Supermicro platforms with excellent connectivity.',
};

export default function DedicatedServersPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Dedicated Servers</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">
        Dedicated root servers to meet any need. Built on Supermicro platforms for top performance and reliability, with excellent connectivity and predictable pricing.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Performance</h2>
          <ul className="mt-3 space-y-2 text-sm text-tech-gray-300">
            <li>Modern CPUs with ECC memory</li>
            <li>NVMe storage options</li>
            <li>Single-tenant isolation</li>
          </ul>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Connectivity</h2>
          <ul className="mt-3 space-y-2 text-sm text-tech-gray-300">
            <li>Redundant networking</li>
            <li>Generous bandwidth allocations</li>
            <li>Low-latency peering</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <a href="#" className="inline-flex items-center rounded-md bg-tech-red px-4 py-2 text-sm font-medium text-white hover:opacity-95">Contact sales</a>
      </div>
    </main>
  );
}


