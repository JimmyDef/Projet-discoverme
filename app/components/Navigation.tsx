'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-purple-900/90 border-b-4 border-cyan-500' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('hero')} className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 hover:scale-110 transition-transform">
            JD.EXE
          </button>
          <div className="flex gap-3">
            {['about', 'projects', 'contact'].map(section => (
              <button key={section} onClick={() => scrollToSection(section)} className="px-4 py-2 bg-cyan-500 text-purple-900 font-black hover:bg-pink-500 transition-colors uppercase text-sm">
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
