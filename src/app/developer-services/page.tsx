export const metadata = {
  title: 'Developer Services • Lubbock Cloud',
};

export default function DeveloperServicesPage() {
  return (
    <main className="mx-auto max-w-5xl container-px py-16">
      <h1 className="text-3xl font-semibold">Developer Services</h1>
      <p className="mt-3 text-tech-gray-300 max-w-3xl">
        Make your platform attractive for startups, coders, and local developers with services that reduce toil and speed up delivery.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Managed APIs</h2>
          <p className="mt-2 text-sm text-tech-gray-300">A platform to build and deploy APIs easily.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">Serverless Functions (FaaS)</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Run code without managing servers.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">CI/CD Pipelines</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Continuous integration/deployment as a managed service.</p>
        </div>
        <div className="card-surface rounded-lg p-6">
          <h2 className="text-lg font-medium">App Accelerator Frameworks</h2>
          <p className="mt-2 text-sm text-tech-gray-300">Toolkits or templates that help developers launch projects faster.</p>
        </div>
      </div>
    </main>
  );
}


