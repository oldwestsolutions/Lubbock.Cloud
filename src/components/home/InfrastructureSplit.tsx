import Image from 'next/image';
import Link from 'next/link';

export function InfrastructureSplit() {
  return (
    <section className="nb-section bg-nb-surface/40">
      <div className="mx-auto max-w-[1280px] container-px py-16 sm:py-24">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 lg:items-center">
          <div className="max-w-xl">
            <p className="nb-eyebrow mb-4">Infrastructure</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold tracking-tight text-lub-ink leading-[1.12]">
              We build AI-optimized, power-aware data centers
            </h2>
            <p className="mt-6 text-tech-gray-500 text-base sm:text-lg leading-relaxed">
              Lubbock Cloud couples West Texas grid dynamics with dense GPU footprints: liquid cooling paths,
              high-uptime networking, and interruptible workloads when markets demand it.
            </p>
            <p className="mt-4 text-tech-gray-500 text-base leading-relaxed">
              Tokens map to real racks — not synthetic credits. When you redeem, you land on hardware we operate,
              instrument, and support end to end.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/clusters" className="btn-primary !text-sm">
                View cluster tiers
              </Link>
              <Link href="/company" className="btn-secondary !text-sm">
                Why Lubbock
              </Link>
            </div>
          </div>

          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[420px] rounded-3xl border border-white/[0.07] overflow-hidden shadow-[0_40px_100px_-30px_rgba(0,0,0,0.65)]">
            <Image
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
              alt="Modern data center and network infrastructure"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-nb-black/50 via-transparent to-nb-lime/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
