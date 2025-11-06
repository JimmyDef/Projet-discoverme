'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setBlink(b => !b), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen p-4 bg-[#0f380f] text-[#9bbc0f] font-mono" style={{ imageRendering: 'pixelated' }}>
      <div className="max-w-5xl mx-auto">
        {/* Pixel art border */}
        <div className="border-8 border-[#306230] bg-[#0f380f] p-8" style={{ boxShadow: 'inset 0 0 0 4px #8bac0f' }}>
          {/* Status bar like Game Boy */}
          <div className="mb-8 p-4 bg-[#8bac0f] text-[#0f380f] border-4 border-[#9bbc0f]">
            <div className="flex justify-between text-sm">
              <span>■■■ PLAYER 1 ■■■</span>
              <span>HP: ████████░░ 80%</span>
              <span>LVL: 99</span>
            </div>
          </div>

          {/* Main content */}
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-[#306230] border-4 border-[#8bac0f] text-sm">
              ▸ PRESS START ◂
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-4" style={{ textShadow: '4px 4px 0 #306230' }}>
              JIMMY DEFAINS
            </h1>

            <div className="inline-block px-6 py-3 bg-[#8bac0f] text-[#0f380f] border-4 border-[#9bbc0f] text-xl font-black">
              {blink && '▸'} FULL STACK DEVELOPER {blink && '◂'}
            </div>

            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto my-8">
              {[
                { label: 'REACT', value: '▮▮▮▮▮▮▮▮▮░' },
                { label: 'TYPESCRIPT', value: '▮▮▮▮▮▮▮▮▯░' },
                { label: 'NEXT.JS', value: '▮▮▮▮▮▮▮▮▮░' },
                { label: 'NODE.JS', value: '▮▮▮▮▮▮▮░░░' },
              ].map(skill => (
                <div key={skill.label} className="border-4 border-[#306230] p-3 bg-[#0f380f]">
                  <p className="text-sm mb-1">{skill.label}</p>
                  <p className="text-xs text-[#8bac0f]">{skill.value}</p>
                </div>
              ))}
            </div>

            {/* Info box with game-like style */}
            <div className="border-8 border-[#306230] p-6 bg-[#0f380f] max-w-3xl mx-auto text-left">
              <div className="space-y-2 text-sm">
                <p>▸ LOCATION: PARIS, ILE-DE-FRANCE</p>
                <p>▸ STATUS: AVAILABLE FOR QUEST</p>
                <p>▸ CLASS: OPENCLASSROOMS RNCP LVL 6</p>
                <p>▸ MODE: REMOTE • HYBRID</p>
              </div>
            </div>

            {/* Featured project box */}
            <div className="border-8 border-[#8bac0f] p-6 bg-[#306230] max-w-3xl mx-auto">
              <p className="text-sm mb-2 text-[#9bbc0f]">★ LEGENDARY ITEM ★</p>
              <p className="text-2xl font-black mb-2">QRPLANS SAAS</p>
              <p className="text-xs">
                Multi-tenant • 3 Databases • Stripe/PayPal<br />
                AWS S3 • BullMQ • Redis • Next.js 16
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <a href="mailto:jimmydef@outlook.fr" className="px-8 py-4 bg-[#8bac0f] text-[#0f380f] border-4 border-[#9bbc0f] font-black hover:bg-[#9bbc0f] transition-colors" style={{ textShadow: 'none' }}>
                ► SEND MESSAGE
              </a>
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-4 border-[#8bac0f] font-black hover:bg-[#306230] transition-colors">
                ► VIEW GITHUB
              </a>
            </div>

            {/* Links like game menu */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="p-3 border-4 border-[#8bac0f] hover:bg-[#306230] transition-colors" aria-label="GitHub">
                <span className="text-2xl">■</span>
              </a>
              <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="p-3 border-4 border-[#8bac0f] hover:bg-[#306230] transition-colors" aria-label="LinkedIn">
                <span className="text-2xl">■</span>
              </a>
            </div>

            <p className="text-xs mt-8 animate-pulse">▼ INSERT COIN TO CONTINUE ▼</p>
          </div>
        </div>
      </div>
    </section>
  );
}
