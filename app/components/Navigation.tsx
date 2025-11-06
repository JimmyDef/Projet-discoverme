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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors ${scrolled ? 'bg-black text-white' : 'bg-white text-black'} border-b-8 border-current`}>
      <div className="max-w-7xl mx-auto p-4">
        <div className="flex justify-between items-center">
          <a href="#hero" className="text-4xl font-black uppercase hover:underline">JD</a>
          <div className="flex gap-4">
            {['ABOUT', 'PROJECTS', 'CONTACT'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-2xl font-black uppercase hover:underline border-4 border-current px-4 py-2">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
