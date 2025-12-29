"use client";

export function PublicCompanyEcosystem() {
  const categories = [
    {
      title: "Power Generation, Grid, and Market Access",
      description: "These companies let you touch the grid intelligently, which is mandatory.",
      items: [
        {
          subcategory: "Grid & Market Operators",
          companies: ["Hitachi Energy", "Siemens Energy", "GE Vernova"],
          why: ["Grid interconnection", "Power electronics", "Substations", "Curtailment management", "Grid compliance"]
        },
        {
          subcategory: "Energy Trading & Market Infrastructure",
          companies: ["Intercontinental Exchange (ICE)", "CME Group", "Nasdaq Energy"],
          why: ["Power futures", "Hedging instruments", "Price discovery", "Risk management"]
        }
      ]
    },
    {
      title: "Battery & Power Electronics Suppliers",
      description: "Batteries are useless without control systems.",
      items: [
        {
          subcategory: "Battery Manufacturers & Integrators",
          companies: ["Tesla Energy", "Fluence Energy", "LG Energy Solution", "Panasonic Energy", "BYD", "Samsung SDI"],
          why: ["Grid-scale batteries", "Degradation modeling", "Safety certification", "Warranty-backed systems"]
        },
        {
          subcategory: "Power Electronics & Inverters",
          companies: ["Enphase Energy", "SolarEdge", "Schneider Electric", "ABB"],
          why: ["DC ↔ AC conversion", "Load control", "Grid services", "Rapid switching for arbitrage"]
        }
      ]
    },
    {
      title: "Compute & Hardware Infrastructure",
      description: "This is where your 'cloud' actually lives.",
      items: [
        {
          subcategory: "Compute & Server Hardware",
          companies: ["Super Micro Computer", "Dell Technologies", "HPE"],
          why: ["High-density servers", "Custom rack design", "Thermal optimization", "Power-aware compute"]
        },
        {
          subcategory: "Semiconductor & Equipment",
          companies: ["Applied Materials", "ASML", "Lam Research", "KLA"],
          why: ["Driving efficiency curves", "Improving yields", "Lowering cost per compute", "Enabling next-gen chips"],
          note: "These don't directly sell to you at first. Their contribution is indirect: they define your long-term cost structure."
        }
      ]
    },
    {
      title: "Bitcoin Mining & Flexible Load Providers",
      description: "You don't want to build miners — you want interchangeable demand.",
      items: [
        {
          subcategory: "Mining Hardware",
          companies: ["Bitmain", "MicroBT (WhatsMiner)"],
          why: []
        },
        {
          subcategory: "Public Mining Operators (partners, not suppliers)",
          companies: ["Marathon Digital", "Riot Platforms", "CleanSpark", "Cipher Mining"],
          why: ["Proven load flexibility", "Interruptible demand experience", "Joint ventures / colocations", "Revenue sharing models"]
        }
      ]
    },
    {
      title: "Storage, Data, and Control Planes",
      description: "This is where Pure Storage and GitLab fit, but there's more.",
      items: [
        {
          subcategory: "Storage & Data Platforms",
          companies: ["Pure Storage", "NetApp", "Seagate", "Western Digital"],
          why: ["Power-efficient storage", "Cold data workloads", "Write-heavy burst tolerance"]
        },
        {
          subcategory: "DevOps & Control Systems",
          companies: ["GitLab", "HashiCorp", "Red Hat (IBM)"],
          why: ["Infrastructure as code", "Versioned energy strategies", "Rollbacks", "Auditability"]
        }
      ]
    },
    {
      title: "Water, Cooling, and Environmental Systems",
      description: "This is often overlooked — and becomes a moat.",
      items: [
        {
          subcategory: "Water & Cooling",
          companies: ["Xylem", "Pentair", "Ecolab", "Veolia"],
          why: ["Closed-loop cooling", "Water recycling", "Pump optimization", "Regulatory compliance"],
          note: "In West Texas, water efficiency = survival."
        }
      ]
    },
    {
      title: "Financial, Insurance, and Risk Transfer",
      description: "You will not scale without this layer.",
      items: [
        {
          subcategory: "Insurance & Risk",
          companies: ["Aon", "Marsh McLennan", "Chubb", "Zurich"],
          why: ["Infrastructure insurance", "Weather risk", "Grid outage coverage", "Equipment failure coverage"]
        }
      ]
    }
  ];

  return (
    <section id="ecosystem" className="mx-auto max-w-7xl container-px py-20 sm:py-32">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-semibold mb-4">Public-Company Ecosystem</h2>
        <p className="text-tech-gray-300 text-lg max-w-3xl mx-auto">
          Think in layers. Each layer has multiple viable vendors so you&apos;re never captive to one.
        </p>
      </div>

      <div className="space-y-12">
        {categories.map((category, categoryIdx) => (
          <div key={categoryIdx} className="card-surface rounded-xl p-8 sm:p-12">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
              <p className="text-tech-gray-300">{category.description}</p>
            </div>

            <div className="space-y-8">
              {category.items.map((item, itemIdx) => (
                <div key={itemIdx} className="bg-tech-gray-800/50 rounded-lg p-6">
                  <h4 className="text-xl font-semibold text-white mb-4">{item.subcategory}</h4>
                  
                  <div className="mb-4">
                    <p className="text-sm text-tech-gray-400 mb-2">Companies:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.companies.map((company, companyIdx) => (
                        <span
                          key={companyIdx}
                          className="px-3 py-1.5 rounded-md bg-tech-gray-700/50 text-tech-gray-200 text-sm border border-tech-gray-600"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>

                  {item.why.length > 0 && (
                    <div>
                      <p className="text-sm text-tech-gray-400 mb-2">Why they matter:</p>
                      <ul className="space-y-1">
                        {item.why.map((reason, reasonIdx) => (
                          <li key={reasonIdx} className="text-tech-gray-300 text-sm flex items-start gap-2">
                            <span className="text-tech-red mt-1">•</span>
                            <span>{reason}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.note && (
                    <div className="mt-4 pt-4 border-t border-tech-gray-700">
                      <p className="text-tech-gray-300 text-sm italic">{item.note}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

