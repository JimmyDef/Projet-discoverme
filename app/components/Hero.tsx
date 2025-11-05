'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%^&*()_+-=[]{}|;:,.<>?/~`';
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
        const text = characters[Math.floor(Math.random() * characters.length)];
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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 space-y-6">
          <div className="inline-block px-6 py-3 bg-green-500/10 border-2 border-green-500 rounded mb-6 backdrop-blur-sm">
            <span className="text-green-400 font-mono font-bold animate-pulse">
              &gt; SYSTEM ONLINE
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 text-green-400 font-mono drop-shadow-[0_0_30px_rgba(0,255,0,0.7)] glitch">
            JIMMY_DEFAINS
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-3xl font-bold font-mono">
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]">REACT</span>
            <span className="text-green-300">//</span>
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]">NEXT.JS</span>
            <span className="text-green-300">//</span>
            <span className="text-green-400 drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]">TYPESCRIPT</span>
          </div>
        </div>

        <div className="mb-12 p-6 bg-black/80 border-2 border-green-500 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-green-300 font-mono leading-relaxed">
            {'>'} FULL_STACK_DEVELOPER<br />
            {'>'} PARIS_ILE_DE_FRANCE<br />
            {'>'} OPENCLASSROOMS_RNCP_LVL6<br />
            {'>'} STATUS: AVAILABLE_IMMEDIATELY<br />
            {'>'} MODE: REMOTE_HYBRID
          </p>
        </div>

        <div className="mb-12 p-6 bg-green-500/5 border border-green-500/30 rounded-lg backdrop-blur-sm max-w-3xl mx-auto">
          <p className="text-sm font-mono text-green-400 mb-2">
            {'>'} FEATURED_PROJECT: QRPLANS_SAAS
          </p>
          <p className="text-xs text-green-300/80 font-mono">
            Multi-tenant • 3_DB_Prisma • Stripe/PayPal • AWS_S3 • BullMQ • Redis • Next.js_16 • React_19
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="mailto:jimmydef@outlook.fr"
            className="px-8 py-4 bg-green-500 text-black rounded font-bold font-mono text-lg shadow-[0_0_30px_rgba(0,255,0,0.5)] hover:scale-110 transition-all duration-300 hover:shadow-[0_0_50px_rgba(0,255,0,0.8)]"
          >
            {'>'} CONTACT_ME
          </a>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border-2 border-green-500 text-green-400 rounded font-bold font-mono text-lg hover:bg-green-500/10 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)]"
          >
            {'>'} GITHUB
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-green-500/50 rounded text-green-400 hover:bg-green-500/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
            aria-label="GitHub"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-defranceschi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 border border-green-500/50 rounded text-green-400 hover:bg-green-500/10 transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        <div className="mt-12 text-green-500/50 font-mono text-xs">
          <p className="animate-pulse">▌MATRIX_INITIALIZED</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .glitch:hover {
          animation: glitch 0.3s infinite;
        }
      `}</style>
    </section>
  );
}
