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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white/20 backdrop-blur-2xl border-b border-white/30' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">JD</a>
          <div className="flex gap-4">
            {['About', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full text-sm font-bold text-gray-800 hover:bg-white/50 transition-all">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
