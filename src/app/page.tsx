import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { WestTexasContext } from '@/components/WestTexasContext';
import { ThreePillars } from '@/components/ThreePillars';
import { BatteriesSection } from '@/components/BatteriesSection';
import { SystemLayers } from '@/components/SystemLayers';
import { PublicCompanyEcosystem } from '@/components/PublicCompanyEcosystem';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WestTexasContext />
      <ThreePillars />
      <BatteriesSection />
      <SystemLayers />
      <PublicCompanyEcosystem />
      <Footer />
    </main>
  );
}


