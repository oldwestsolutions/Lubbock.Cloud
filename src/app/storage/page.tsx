export const metadata = {
  title: 'Storage • Lubbock Cloud',
};

export default function StoragePage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Storage</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">
        Durable, fast storage options to fit your workloads. From NVMe volumes to archival tiers.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Block Storage</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Attachable NVMe volumes with snapshots.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Object Storage</h2>
          <p className="mt-2 text-sm text-tech-gray-300">S3-compatible storage for massive scale.</p>
        </div>
      </div>
    </main>
  );
}


