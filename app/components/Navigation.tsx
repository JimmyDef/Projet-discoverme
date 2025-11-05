'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-cyan-500/20 shadow-[0_0_20px_rgba(34,211,238,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]"
          >
            &lt;JD/&gt;
          </button>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-400 hover:text-cyan-400 transition-colors font-medium hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
            >
              about()
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-400 hover:text-green-400 transition-colors font-medium hover:drop-shadow-[0_0_10px_rgba(74,222,128,0.5)]"
            >
              projects[]
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-4 py-2 border border-pink-500/50 bg-pink-500/10 text-pink-400 rounded font-medium hover:bg-pink-500/20 hover:border-pink-400 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.3)]"
            >
              contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
