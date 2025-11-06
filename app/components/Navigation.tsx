'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-black/80 backdrop-blur-xl border-b border-white/20'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-3xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              JD
            </span>
          </a>
          <div className="flex gap-3">
            {[
              { name: 'ABOUT', gradient: 'from-purple-600 to-pink-600' },
              { name: 'PROJECTS', gradient: 'from-cyan-600 to-blue-600' },
              { name: 'CONTACT', gradient: 'from-green-600 to-emerald-600' }
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.name.toLowerCase()}`}
                className={`px-6 py-2 font-bold text-sm bg-gradient-to-r ${item.gradient} backdrop-blur-lg border border-white/30 rounded-lg hover:scale-105 transition-all`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
