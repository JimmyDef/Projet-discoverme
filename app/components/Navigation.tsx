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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-black tracking-tighter">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              JD
            </span>
          </a>
          <div className="flex gap-2">
            {['ABOUT', 'PROJECTS', 'CONTACT'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`px-6 py-2 font-black text-sm transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all bg-gradient-to-r ${
                  i === 0 ? 'from-purple-600 to-pink-600' :
                  i === 1 ? 'from-cyan-600 to-blue-600' :
                  'from-green-600 to-emerald-600'
                } hover:scale-105`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
