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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'bg-white border-b-4 border-black shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-2xl font-serif font-bold" style={{ fontFamily: 'Times New Roman, serif' }}>THE DEVELOPER TIMES</a>
          <div className="flex gap-6 font-serif text-sm">
            {['About', 'Projects', 'Contact'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="hover:underline font-bold uppercase tracking-wider">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
