export const metadata = {
  title: 'Docs • Lubbock Cloud',
};

export default function DocsPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Documentation</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">Guides, references, and examples to help you build on Lubbock Cloud.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <a className="card-surface rounded-lg p-6 block hover:border-white/10" href="#">
          <h2 className="text-lg font-medium">Getting Started</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Provision your first server and deploy an app.</p>
        </a>
        <a className="card-surface rounded-lg p-6 block hover:border-white/10" href="#">
          <h2 className="text-lg font-medium">API Reference</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Integrate programmatically with our platform.</p>
        </a>
      </div>
    </main>
  );
}


