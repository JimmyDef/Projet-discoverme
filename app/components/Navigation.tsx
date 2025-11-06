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
    <nav className={`fixed top-0 left-0 right-0 z-50 font-mono transition-colors ${scrolled ? 'bg-[#0f380f] border-b-4 border-[#8bac0f]' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center text-[#9bbc0f]">
          <a href="#hero" className="text-2xl font-black">▸ JD ◂</a>
          <div className="flex gap-4">
            {['ABOUT', 'PROJECTS', 'CONTACT'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="px-4 py-2 border-2 border-[#8bac0f] font-black hover:bg-[#306230] transition-colors text-sm">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
