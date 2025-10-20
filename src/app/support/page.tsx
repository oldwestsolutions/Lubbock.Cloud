export const metadata = {
  title: 'Support • Lubbock Cloud',
};

export default function SupportPage() {
  return (
    <main className="mx-auto max-w-3xl container-px py-16">
      <h1 className="text-2xl font-semibold">Support</h1>
      <p className="mt-3 text-tech-gray-300">We’re here to help. Choose a support option below.</p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <a href="#" className="card-surface rounded-lg p-5 block hover:border-white/10">
          <h2 className="font-medium">Open a ticket</h2>
          <p className="mt-1 text-sm text-tech-gray-300">Get help from our support engineers.</p>
        </a>
        <a href="#" className="card-surface rounded-lg p-5 block hover:border-white/10">
          <h2 className="font-medium">Status</h2>
          <p className="mt-1 text-sm text-tech-gray-300">Check current system status and incidents.</p>
        </a>
        <a href="#" className="card-surface rounded-lg p-5 block hover:border-white/10">
          <h2 className="font-medium">Docs</h2>
          <p className="mt-1 text-sm text-tech-gray-300">Read product documentation and guides.</p>
        </a>
        <a href="#" className="card-surface rounded-lg p-5 block hover:border-white/10">
          <h2 className="font-medium">Sales</h2>
          <p className="mt-1 text-sm text-tech-gray-300">Talk to sales for custom solutions.</p>
        </a>
      </div>
    </main>
  );
}


