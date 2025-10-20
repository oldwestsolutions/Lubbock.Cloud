export const metadata = {
  title: 'Our Team • Lubbock Cloud',
};

export default function OurTeamPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Our Team</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">We’re a lean team of engineers and operators focused on reliability, performance, and straightforward support.</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Leadership</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Seasoned operators with backgrounds in infrastructure and developer tooling.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">SRE & Ops</h2>
          <p className="mt-2 text-sm text-tech-gray-300">24/7 coverage and rigorous change management.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Support</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Fast, pragmatic assistance from folks who run the platform.</p>
        </div>
      </div>
    </main>
  );
}


