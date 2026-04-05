import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { StackDiagram } from '@/components/home';

export default function TokensPage() {
  return (
    <main>
      <Navbar />
      <div className="border-b border-white/[0.06] bg-nb-black">
        <div className="mx-auto max-w-[1280px] container-px py-12 sm:py-16">
          <p className="nb-eyebrow mb-3">Tokenomics</p>
          <h1 className="section-heading max-w-3xl">Architecture &amp; stack</h1>
          <p className="section-subheading mt-5">
            How tokenized capacity maps from accelerators through orchestration to inference — and how the platform
            wraps it.
          </p>
        </div>
      </div>
      <StackDiagram />
      <Footer />
    </main>
  );
}
