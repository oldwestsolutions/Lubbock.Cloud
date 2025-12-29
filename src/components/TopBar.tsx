"use client";
import { useState, useEffect } from 'react';

const newsItems = [
  "New: Dedicated servers powered by Supermicro",
  "Breaking: Energy arbitrage platform launches in West Texas",
  "Update: Sodium-ion battery integration complete",
  "Announcement: GitLab workflow system now live",
];

export function TopBar() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentNewsIndex((prev) => (prev + 1) % newsItems.length);
        setIsVisible(true);
      }, 500); // Fade out, change, fade in
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-tech-gray-800 text-[11px] text-tech-gray-200">
      <div className="mx-auto max-w-7xl container-px h-7 flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden">
          <span className="font-semibold text-tech-red flex-shrink-0">NEW:</span>
          <div className="relative h-4 overflow-hidden min-w-[200px]">
            <div 
              className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            >
              {newsItems[currentNewsIndex]}
            </div>
          </div>
        </div>
        <a href="/support" className="rounded-sm bg-tech-gray-700 px-2 py-0.5 text-tech-gray-100 font-medium hover:bg-tech-gray-600 transition-colors">Support</a>
      </div>
    </div>
  );
}

