'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-purple-900 via-pink-600 to-yellow-400">
      {/* Animated grid perspective background */}
      <div className="absolute inset-0 perspective-grid">
        <div className="grid-lines" />
      </div>

      {/* Retro sun */}
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sun-container">
        <div className="retro-sun" />
      </div>

      {/* Scanlines overlay */}
      <div className="scanlines" />

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="mb-8 space-y-6">
          {/* Status badge */}
          <div className="inline-block px-6 py-2 bg-cyan-500 border-4 border-pink-500 transform skew-x-[-5deg] shadow-[0_0_30px_rgba(236,72,153,0.8)] animate-pulse">
            <span className="text-purple-900 font-black text-lg tracking-wider">
              ● AVAILABLE NOW ●
            </span>
          </div>

          {/* Glitch name */}
          <div className="relative">
            <h1
              className={`text-7xl md:text-9xl font-black mb-6 retro-text ${glitchActive ? 'glitch-active' : ''}`}
              style={{
                fontFamily: 'Impact, fantasy',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
              }}
            >
              <span className="text-cyan-400 drop-shadow-[0_0_30px_rgba(34,211,238,1)]">Jimmy</span>
              <br />
              <span className="text-pink-500 drop-shadow-[0_0_30px_rgba(236,72,153,1)]">Defains</span>
            </h1>
            {glitchActive && (
              <>
                <h1
                  className="absolute inset-0 text-7xl md:text-9xl font-black opacity-70"
                  style={{
                    fontFamily: 'Impact, fantasy',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    left: '-5px',
                    color: '#ff00ff',
                    mixBlendMode: 'screen',
                  }}
                >
                  Jimmy
                  <br />
                  Defains
                </h1>
                <h1
                  className="absolute inset-0 text-7xl md:text-9xl font-black opacity-70"
                  style={{
                    fontFamily: 'Impact, fantasy',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    left: '5px',
                    color: '#00ffff',
                    mixBlendMode: 'screen',
                  }}
                >
                  Jimmy
                  <br />
                  Defains
                </h1>
              </>
            )}
          </div>

          {/* Subtitle with VHS effect */}
          <div className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1">
            <div className="bg-purple-900 px-8 py-4">
              <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 tracking-widest">
                FULL STACK DEVELOPER
              </h2>
            </div>
          </div>

          {/* Tech stack with neon boxes */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {['REACT', 'NEXT.JS', 'TYPESCRIPT', 'NODE.JS'].map((tech, index) => (
              <div
                key={tech}
                className="relative group"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 blur-xl opacity-75 group-hover:opacity-100 transition-opacity" />
                <div className="relative px-6 py-3 bg-purple-900 border-2 border-cyan-400 transform skew-x-[-5deg] font-black text-cyan-400 tracking-wider hover:scale-110 transition-transform">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info box with retro computer style */}
        <div className="mt-12 mx-auto max-w-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-1">
          <div className="bg-purple-950 p-8">
            <div className="grid grid-cols-2 gap-6 text-left font-mono">
              <div>
                <p className="text-pink-400 text-sm mb-1">{'>'} LOCATION_</p>
                <p className="text-cyan-300 font-bold">Paris, Île-de-France</p>
              </div>
              <div>
                <p className="text-pink-400 text-sm mb-1">{'>'} STATUS_</p>
                <p className="text-cyan-300 font-bold">Available Immediately</p>
              </div>
              <div>
                <p className="text-pink-400 text-sm mb-1">{'>'} EDUCATION_</p>
                <p className="text-cyan-300 font-bold">OpenClassrooms RNCP-6</p>
              </div>
              <div>
                <p className="text-pink-400 text-sm mb-1">{'>'} MODE_</p>
                <p className="text-cyan-300 font-bold">Remote • Hybrid</p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured project */}
        <div className="mt-8 mx-auto max-w-3xl bg-gradient-to-r from-cyan-500 to-pink-500 p-1 transform hover:scale-105 transition-all">
          <div className="bg-purple-950 p-6">
            <p className="text-yellow-400 font-black text-sm mb-2 tracking-widest">⚡ FEATURED PROJECT ⚡</p>
            <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-400 mb-2">
              QRPLANS SAAS PLATFORM
            </p>
            <p className="text-xs text-pink-300 font-mono">
              Multi-tenant • 3 Databases • Stripe/PayPal • AWS S3 • BullMQ • Redis • Next.js 16
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <a
            href="mailto:jimmydef@outlook.fr"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative px-10 py-5 bg-cyan-500 border-4 border-pink-500 font-black text-2xl text-purple-900 transform skew-x-[-5deg] hover:skew-x-[5deg] transition-transform">
              CONTACT ME
            </div>
          </a>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative px-10 py-5 bg-purple-900 border-4 border-cyan-400 font-black text-2xl text-cyan-400 transform skew-x-[-5deg] hover:skew-x-[5deg] transition-transform">
              GITHUB
            </div>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-cyan-500 border-4 border-pink-500 hover:bg-pink-500 hover:border-cyan-500 transition-all transform hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-8 h-8 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-defranceschi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-pink-500 border-4 border-cyan-500 hover:bg-cyan-500 hover:border-pink-500 transition-all transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-8 h-8 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>

        {/* Retro tagline */}
        <div className="mt-12">
          <p className="text-yellow-400 font-black text-sm tracking-[0.3em] animate-pulse">
            ▲ LOADING PORTFOLIO... ▲
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .perspective-grid {
          transform: perspective(500px) rotateX(60deg);
          transform-origin: center bottom;
        }

        .grid-lines {
          width: 200%;
          height: 200%;
          background-image:
            linear-gradient(0deg, transparent 24%, rgba(236, 72, 153, .3) 25%, rgba(236, 72, 153, .3) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, .3) 75%, rgba(236, 72, 153, .3) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(236, 72, 153, .3) 25%, rgba(236, 72, 153, .3) 26%, transparent 27%, transparent 74%, rgba(236, 72, 153, .3) 75%, rgba(236, 72, 153, .3) 76%, transparent 77%, transparent);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% { transform: translateY(0); }
          100% { transform: translateY(50px); }
        }

        .retro-sun {
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: linear-gradient(to bottom, #ff00ff, #ff0080, #ffff00);
          box-shadow:
            0 0 60px rgba(255, 0, 255, 0.8),
            0 0 120px rgba(255, 0, 128, 0.6),
            0 0 180px rgba(255, 255, 0, 0.4);
          position: relative;
        }

        .retro-sun::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(138, 43, 226, 0.5);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
        }

        .retro-sun::after {
          content: '';
          position: absolute;
          top: 60%;
          left: 0;
          right: 0;
          height: 2px;
          background: rgba(138, 43, 226, 0.5);
          box-shadow: 0 0 20px rgba(138, 43, 226, 0.8);
        }

        .scanlines {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            rgba(0, 0, 0, 0.15),
            rgba(0, 0, 0, 0.15) 1px,
            transparent 1px,
            transparent 2px
          );
          pointer-events: none;
          animation: scanline 8s linear infinite;
        }

        @keyframes scanline {
          0% { transform: translateY(0); }
          100% { transform: translateY(10px); }
        }

        .glitch-active {
          animation: glitch 0.2s infinite;
        }

        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
      `}</style>
    </section>
  );
}
