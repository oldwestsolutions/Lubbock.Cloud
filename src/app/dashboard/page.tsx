export const metadata = {
  title: 'Dashboard • Lubbock Cloud',
};

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card-surface rounded-lg p-5">
      <h3 className="font-medium">{title}</h3>
      <div className="mt-3 text-sm text-tech-gray-300">{children}</div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <main className="mx-auto max-w-7xl container-px py-10">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-tech-gray-300 text-sm">Manage dedicated servers, storage, networking, and managed services.</p>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card title="Server Fleet">
          <ul className="space-y-2">
            <li>srv-epyc-01 — Online — Lubbock DC</li>
            <li>srv-epyc-02 — Online — Lubbock DC</li>
            <li>srv-gpu-01 — Maintenance — Lubbock DC</li>
          </ul>
        </Card>
        <Card title="Deploy">
          <div className="flex gap-3 text-xs">
            <button className="rounded-md bg-tech-red px-3 py-2 font-medium text-white">New server</button>
            <button className="rounded-md border border-white/10 px-3 py-2">Provision GPU</button>
            <button className="rounded-md border border-white/10 px-3 py-2">Create VPC</button>
          </div>
        </Card>
        <Card title="Usage">
          <p>CPU: 42% • Memory: 61% • Network: 2.1 Gbps</p>
        </Card>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card title="Managed Services">
          <ul className="space-y-2">
            <li>Postgres — Healthy — 256 connections</li>
            <li>Redis — Healthy — 12 GB memory</li>
            <li>Observability — Ingest 5.2k events/min</li>
          </ul>
        </Card>
        <Card title="Incidents & Alerts">
          <ul className="space-y-2">
            <li>No active incidents</li>
            <li>2 warnings: slow queries on Postgres</li>
          </ul>
        </Card>
      </section>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card title="Automation">
          <ul className="space-y-2">
            <li>Nightly backups — Success (02:00)</li>
            <li>Patching window — Scheduled (Sunday 01:00)</li>
            <li>Scale policy — Enabled (CPU > 75%)</li>
          </ul>
        </Card>
        <Card title="Networking">
          <ul className="space-y-2">
            <li>VPC main — 10.0.0.0/16</li>
            <li>Load balancer — active — 3 targets</li>
            <li>Firewall — 12 rules</li>
          </ul>
        </Card>
        <Card title="Tickets">
          <ul className="space-y-2">
            <li>#1243 — Request additional /29 — Open</li>
            <li>#1241 — Investigate 5xx on API — Resolved</li>
          </ul>
        </Card>
      </section>
    </main>
  );
}


