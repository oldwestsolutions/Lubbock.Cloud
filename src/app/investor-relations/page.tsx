import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import { Building2, Newspaper, TrendingUp, FileText, Mail, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Investor Relations • Lubbock Cloud',
  description: 'Company information, news, and investor resources for Lubbock.cloud.',
};

export default function InvestorRelationsPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-auto max-w-7xl container-px py-12 sm:py-20">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-4">Investor Relations</h1>
          <p className="text-tech-gray-300 text-lg max-w-3xl">
            Company information, news, and resources for investors and stakeholders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Company Section */}
          <Link href="/company" className="card-surface rounded-xl p-8 hover:border-tech-red/30 border border-transparent transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-red/20 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-tech-red" />
              </div>
              <h2 className="text-2xl font-semibold">Company</h2>
            </div>
            <p className="text-tech-gray-300 mb-4">
              Learn about Lubbock.cloud&apos;s mission, history, team, and company culture. Discover our story and what drives us forward.
            </p>
            <div className="flex items-center gap-2 text-tech-red text-sm font-medium">
              Visit Company Page
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>

          {/* News Section */}
          <Link href="/news" className="card-surface rounded-xl p-8 hover:border-tech-blue/30 border border-transparent transition-all hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-tech-blue/20 flex items-center justify-center">
                <Newspaper className="w-6 h-6 text-tech-blue" />
              </div>
              <h2 className="text-2xl font-semibold">News</h2>
            </div>
            <p className="text-tech-gray-300 mb-4">
              Stay updated with the latest announcements, product launches, and company updates from Lubbock.cloud.
            </p>
            <div className="flex items-center gap-2 text-tech-blue text-sm font-medium">
              Read Latest News
              <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        </div>

        {/* Investor Resources */}
        <div className="card-surface rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6">Investor Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <TrendingUp className="w-6 h-6 text-tech-red" />
                <h3 className="text-lg font-semibold">Financial Information</h3>
              </div>
              <p className="text-tech-gray-300 text-sm mb-4">
                Detailed financial metrics, unit economics, and growth projections available upon request.
              </p>
              <Link
                href="/investors"
                className="inline-flex items-center gap-2 text-tech-red hover:text-tech-red/80 text-sm font-medium"
              >
                View Investor Page
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-tech-blue" />
                <h3 className="text-lg font-semibold">Reports & Documents</h3>
              </div>
              <p className="text-tech-gray-300 text-sm mb-4">
                Access company reports, strategic documents, and investor presentations.
              </p>
              <Link
                href="mailto:investors@lubbock.cloud"
                className="inline-flex items-center gap-2 text-tech-blue hover:text-tech-blue/80 text-sm font-medium"
              >
                Request Documents
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-tech-gray-800/50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-tech-gray-400" />
                <h3 className="text-lg font-semibold">Contact</h3>
              </div>
              <p className="text-tech-gray-300 text-sm mb-4">
                For investor inquiries, partnership opportunities, or strategic discussions.
              </p>
              <Link
                href="mailto:investors@lubbock.cloud"
                className="inline-flex items-center gap-2 text-tech-gray-400 hover:text-white text-sm font-medium"
              >
                investors@lubbock.cloud
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="card-surface rounded-xl p-8 bg-gradient-to-br from-tech-red/10 to-tech-blue/10 border-2 border-tech-red/20">
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/investors" className="flex items-center gap-3 p-4 bg-tech-gray-800/50 rounded-lg hover:bg-tech-gray-800/70 transition-colors">
              <TrendingUp className="w-5 h-5 text-tech-red" />
              <div>
                <div className="font-medium text-white">Investors</div>
                <div className="text-sm text-tech-gray-300">Investment highlights and strategic positioning</div>
              </div>
            </Link>
            <Link href="/solutions" className="flex items-center gap-3 p-4 bg-tech-gray-800/50 rounded-lg hover:bg-tech-gray-800/70 transition-colors">
              <Building2 className="w-5 h-5 text-tech-blue" />
              <div>
                <div className="font-medium text-white">Solutions</div>
                <div className="text-sm text-tech-gray-300">Our three-pillar business model</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

