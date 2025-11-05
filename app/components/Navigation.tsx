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
          ? 'bg-black/90 backdrop-blur-md border-b border-green-500/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center font-mono">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold text-green-400 hover:text-green-300 transition-colors drop-shadow-[0_0_10px_rgba(0,255,0,0.5)]"
          >
            {'>'} MATRIX_PORTFOLIO
          </button>
          <div className="flex gap-6">
            <button
              onClick={() => scrollToSection('about')}
              className="text-green-400 hover:text-green-300 transition-colors font-medium border border-green-500/30 px-3 py-1 hover:bg-green-500/10"
            >
              {'>'} ABOUT
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-green-400 hover:text-green-300 transition-colors font-medium border border-green-500/30 px-3 py-1 hover:bg-green-500/10"
            >
              {'>'} PROJECTS
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-green-400 hover:text-green-300 transition-colors font-medium border border-green-500/30 px-3 py-1 hover:bg-green-500/10"
            >
              {'>'} CONTACT
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
