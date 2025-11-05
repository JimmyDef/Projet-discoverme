'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950"
      style={{ perspective: '1000px' }}
    >
      {/* 3D Floating geometric shapes in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl backdrop-blur-sm border border-blue-400/30"
          style={{
            transform: `translateZ(${scrollY * 0.1}px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateX(${mousePosition.x * 20}px) translateY(${mousePosition.y * 20}px)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className="absolute bottom-32 right-32 w-48 h-48 bg-gradient-to-tl from-purple-500/20 to-pink-500/20 rounded-3xl backdrop-blur-sm border border-purple-400/30"
          style={{
            transform: `translateZ(${scrollY * 0.15}px) rotateX(${-mousePosition.y * 15}deg) rotateY(${-mousePosition.x * 15}deg) translateX(${-mousePosition.x * 30}px) translateY(${-mousePosition.y * 30}px)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d',
          }}
        />
        <div
          className="absolute top-1/2 right-20 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl backdrop-blur-sm border border-cyan-400/30"
          style={{
            transform: `translateZ(${scrollY * 0.12}px) rotateX(${mousePosition.y * 12}deg) rotateY(${mousePosition.x * 12}deg) translateX(${mousePosition.x * 25}px) translateY(${mousePosition.y * 25}px)`,
            transition: 'transform 0.3s ease-out',
            transformStyle: 'preserve-3d',
          }}
        />
      </div>

      {/* Main content with 3D transform */}
      <div
        className="relative z-10 max-w-6xl mx-auto px-6"
        style={{
          transform: `translateZ(${scrollY * -0.2}px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.3s ease-out',
        }}
      >
        {/* Floating 3D card */}
        <div className="mb-12 perspective-container">
          <div
            className="floating-card bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-12 shadow-2xl"
            style={{
              transform: `translateZ(50px) rotateX(${-mousePosition.y * 5}deg) rotateY(${-mousePosition.x * 5}deg)`,
              transformStyle: 'preserve-3d',
              transition: 'transform 0.3s ease-out',
            }}
          >
            <div className="text-center space-y-8">
              {/* Status badge */}
              <div
                className="inline-block"
                style={{
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <span className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold rounded-full text-sm shadow-lg shadow-emerald-500/50 animate-pulse">
                  ● AVAILABLE FOR HIRE
                </span>
              </div>

              {/* Name with 3D depth */}
              <h1
                className="text-7xl md:text-9xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
                style={{
                  transform: 'translateZ(60px)',
                  transformStyle: 'preserve-3d',
                  textShadow: '0 0 80px rgba(139, 92, 246, 0.5)',
                }}
              >
                Jimmy Defains
              </h1>

              {/* Tech stack pills with depth */}
              <div
                className="flex flex-wrap justify-center gap-4"
                style={{
                  transform: 'translateZ(40px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                {['React', 'Next.js', 'TypeScript', 'Node.js'].map((tech, index) => (
                  <span
                    key={tech}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full text-blue-200 font-semibold text-lg shadow-lg hover:scale-110 transition-transform"
                    style={{
                      transform: `translateZ(${20 + index * 5}px)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Info card */}
              <div
                className="mt-8 p-8 bg-gradient-to-br from-slate-900/50 to-slate-800/50 backdrop-blur-lg rounded-2xl border border-white/10"
                style={{
                  transform: 'translateZ(25px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="space-y-3 text-lg text-slate-300">
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-2xl">💼</span>
                    <span className="font-semibold text-white">Full Stack Developer</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-2xl">📍</span>
                    <span>Paris, Île-de-France</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-2xl">🎓</span>
                    <span>OpenClassrooms RNCP Niveau 6</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <span className="text-2xl">💻</span>
                    <span>Remote • Hybrid</span>
                  </p>
                </div>
              </div>

              {/* Featured project */}
              <div
                className="mt-8 p-6 bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-lg rounded-2xl border border-purple-400/30"
                style={{
                  transform: 'translateZ(30px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <p className="text-sm text-purple-300 mb-2 font-semibold">⭐ FEATURED PROJECT</p>
                <p className="text-lg font-bold text-purple-200 mb-2">QRPlans SaaS Platform</p>
                <p className="text-xs text-purple-300/80">
                  Multi-tenant • 3 Databases • Stripe/PayPal • AWS S3 • BullMQ • Redis
                </p>
              </div>

              {/* CTA buttons with 3D effect */}
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center mt-8"
                style={{
                  transform: 'translateZ(35px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <a
                  href="mailto:jimmydef@outlook.fr"
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-purple-500/50 hover:scale-105 hover:shadow-purple-500/70 transition-all duration-300"
                >
                  Contact Me
                </a>
                <a
                  href="https://github.com/JimmyDef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                >
                  View GitHub
                </a>
              </div>

              {/* Social links */}
              <div
                className="flex justify-center gap-4 mt-8"
                style={{
                  transform: 'translateZ(20px)',
                  transformStyle: 'preserve-3d',
                }}
              >
                <a
                  href="https://github.com/JimmyDef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all"
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
                  className="p-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/20 hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateZ(50px); }
          50% { transform: translateY(-20px) translateZ(50px); }
        }
        .floating-card {
          animation: float 6s ease-in-out infinite;
        }
        .perspective-container {
          perspective: 2000px;
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
}
