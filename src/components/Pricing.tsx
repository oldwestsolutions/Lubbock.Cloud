type Offering = {
  title: string;
  description: string;
  startingAt: string;
  href?: string;
};

const offerings: Offering[] = [
  {
    title: 'Dedicated Server',
    description: 'Dedicated root servers to meet any need. Top performance with an excellent connection.',
    startingAt: 'Starting at $39',
  },
  {
    title: 'Cloud',
    description: 'A little money gets you lots of cloud. Flexible cloud servers with high-end hardware.',
    startingAt: 'Starting at $4',
  },
  {
    title: 'Managed Servers',
    description: 'Stress-free server connection. We’ll take care of the technical stuff.',
    startingAt: 'Starting at $36',
  },
  {
    title: 'Web hosting',
    description: 'The quick and cheap way to your own homepage. For beginners and businesses.',
    startingAt: 'Starting at $2',
  },
  {
    title: 'Storage Share',
    description: 'Easily store and share files. Access your data anytime and anywhere.',
    startingAt: 'Starting at $5',
  },
  {
    title: 'Storage Boxes',
    description: 'Access your storage from PC, smartphone, and tablet, everywhere and anytime.',
    startingAt: 'Starting at $4',
  },
  {
    title: 'Colocation',
    description: 'State-of-the-art infrastructure for your project with flexible rack options.',
    startingAt: 'Starting at $110',
  },
  {
    title: 'Custom Solutions',
    description: 'Because your business isn’t one size fits all. Tailored setup and hardware.',
    startingAt: 'Talk to sales',
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-7xl container-px py-16 sm:py-24">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {offerings.map((o) => (
          <div key={o.title} className="card-surface rounded-lg p-6 flex flex-col">
            <h3 className="text-lg font-semibold">{o.title}</h3>
            <p className="mt-2 text-sm text-tech-gray-300 flex-1">{o.description}</p>
            <div className="mt-4 text-tech-gray-200 text-sm">{o.startingAt}</div>
            <div className="mt-5">
              <a href={o.href || '#'} className="inline-flex items-center rounded-md bg-tech-red px-3 py-2 text-sm font-medium text-white hover:opacity-95">Learn more</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


