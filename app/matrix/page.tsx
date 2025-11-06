'use client';

import { useEffect, useRef } from 'react';

export default function MatrixPortfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    const interval = setInterval(draw, 33);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 text-green-400 font-mono glitch" style={{textShadow: '0 0 10px #0F0'}}>
          MATRIX
        </h1>
        <p className="text-xl md:text-2xl text-green-300 mb-8 font-mono">
          &gt; Développeur Web React/TypeScript
        </p>

        <div className="bg-black/80 border-2 border-green-400 p-8 rounded-lg backdrop-blur-sm max-w-2xl">
          <div className="text-left text-green-400 font-mono space-y-2">
            <p>&gt; Initializing system...</p>
            <p>&gt; Loading profile.exe</p>
            <p className="text-green-300 mt-4">
              Name: Développeur Full Stack<br />
              Skills: [React, TypeScript, Next.js]<br />
              Status: Available for hire<br />
              Matrix Level: Over 9000
            </p>
          </div>

          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <button className="px-6 py-2 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition-colors">
              ENTER THE MATRIX
            </button>
            <button className="px-6 py-2 border-2 border-green-400 text-green-400 font-bold rounded hover:bg-green-400 hover:text-black transition-colors">
              VIEW PROJECTS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
