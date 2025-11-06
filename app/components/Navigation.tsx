'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show/hide based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setScrolled(currentScrollY > 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-3xl font-black tracking-tighter group">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent group-hover:from-cyan-500 group-hover:via-purple-500 group-hover:to-pink-500 transition-all">
              JD
            </span>
          </a>

          <div className="hidden md:flex items-center gap-1">
            <a
              href="#hero"
              className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors"
            >
              3D GALLERY
            </a>
            <a
              href="#projects"
              className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors"
            >
              PROJECTS
            </a>
            <a
              href="#about"
              className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-bold text-gray-300 hover:text-white transition-colors"
            >
              CONTACT
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://github.com/JimmyDef"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-bold text-sm bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 backdrop-blur-lg border border-white/30 rounded-lg transition-all hover:scale-105"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-defranceschi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 font-bold text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 backdrop-blur-lg border border-white/30 rounded-lg transition-all hover:scale-105"
            >
              LINKEDIN
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden flex justify-center gap-3 mt-4 pt-4 border-t border-white/10">
          <a href="#hero" className="text-xs font-bold text-gray-400 hover:text-white transition-colors">
            GALLERY
          </a>
          <span className="text-gray-600">•</span>
          <a href="#projects" className="text-xs font-bold text-gray-400 hover:text-white transition-colors">
            PROJECTS
          </a>
          <span className="text-gray-600">•</span>
          <a href="#about" className="text-xs font-bold text-gray-400 hover:text-white transition-colors">
            ABOUT
          </a>
          <span className="text-gray-600">•</span>
          <a href="#contact" className="text-xs font-bold text-gray-400 hover:text-white transition-colors">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
