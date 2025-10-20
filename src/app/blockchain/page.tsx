export const metadata = {
  title: 'Blockchain • Lubbock Cloud',
};

export default function BlockchainPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Blockchain</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Decentralized cloud brokerage</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Let people rent out unused storage or compute (Filecoin, Akash, etc.).</p>
        </div>
      </div>
    </main>
  );
}


