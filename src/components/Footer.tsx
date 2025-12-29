export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl container-px py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 text-sm">
          <div>
            <h4 className="font-semibold">Lubbock Cloud</h4>
            <p className="mt-3 text-tech-gray-300">Dedicated servers with modern performance and excellent connectivity.</p>
          </div>
          <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-3 space-y-2 text-tech-gray-300">
              <li><a href="/investor-relations" className="hover:text-white">Investor Relations</a></li>
              <li><a href="/partners" className="hover:text-white">Partners</a></li>
              <li><a href="/press" className="hover:text-white">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Services</h4>
            <ul className="mt-3 space-y-2 text-tech-gray-300">
              <li><a href="/services" className="hover:text-white">Services</a></li>
              <li><a href="/dedicated-servers" className="hover:text-white">Dedicated Servers</a></li>
              <li><a href="/developer-services" className="hover:text-white">Developer Services</a></li>
              <li><a href="/storage" className="hover:text-white">Storage</a></li>
              <li><a href="/networking" className="hover:text-white">Networking</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Solutions</h4>
            <ul className="mt-3 space-y-2 text-tech-gray-300">
              <li><a href="/solutions" className="hover:text-white">Solutions</a></li>
              <li><a href="/acceleration" className="hover:text-white">Acceleration</a></li>
              <li><a href="/blockchain" className="hover:text-white">Blockchain</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Support</h4>
            <ul className="mt-3 space-y-2 text-tech-gray-300">
              <li><a href="/docs" className="hover:text-white">Docs</a></li>
              <li><a href="/support" className="hover:text-white">Support</a></li>
              <li><a href="/our-team" className="hover:text-white">Our Team</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between text-xs text-tech-gray-400">
          <p>© {new Date().getFullYear()} Lubbock Cloud</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-white">Privacy</a>
            <a href="/terms" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}


