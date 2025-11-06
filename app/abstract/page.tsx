'use client';

import { useState } from 'react';

export default function AbstractPortfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
    });
  };

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 opacity-30 blur-3xl"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s ease-out',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 opacity-20 blur-3xl"
          style={{
            left: `${100 - mousePos.x}%`,
            top: `${100 - mousePos.y}%`,
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.5s ease-out',
          }}
        />

        {/* Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-cyan-500 rotate-45 opacity-20" />
        <div className="absolute bottom-40 right-40 w-48 h-48 rounded-full border-4 border-pink-500 opacity-20" />
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-yellow-500 to-red-500 opacity-20 blur-xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6">
        <div className="max-w-5xl w-full">
          {/* Abstract Title */}
          <div className="mb-20 text-center">
            <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none">
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">A</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-cyan-400">B</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-purple-400">S</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-pink-400">T</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300">R</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-yellow-400">A</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-green-400">C</span>
              <span className="inline-block transform hover:scale-110 transition-transform duration-300 text-red-400">T</span>
            </h1>
            <p className="text-2xl text-gray-400 font-light">
              Experimental Developer • Beyond Conventional
            </p>
          </div>

          {/* Floating Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="group">
              <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-8 transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                <div className="text-6xl mb-4 transform group-hover:rotate-12 transition-transform">🎨</div>
                <h3 className="text-3xl font-bold mb-3">Design Forward</h3>
                <p className="text-gray-300">
                  Pushing boundaries with experimental interfaces and avant-garde aesthetics.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-gradient-to-br from-cyan-900/50 to-blue-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-8 transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
                <div className="text-6xl mb-4 transform group-hover:rotate-12 transition-transform">⚡</div>
                <h3 className="text-3xl font-bold mb-3">Tech Savvy</h3>
                <p className="text-gray-300">
                  React, TypeScript, and cutting-edge frameworks for modern web experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Experimental Stack
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: 'React', color: 'from-cyan-500 to-blue-500' },
                { name: 'TypeScript', color: 'from-blue-500 to-purple-500' },
                { name: 'Next.js', color: 'from-purple-500 to-pink-500' },
                { name: 'Three.js', color: 'from-pink-500 to-red-500' },
                { name: 'GSAP', color: 'from-red-500 to-orange-500' },
                { name: 'WebGL', color: 'from-orange-500 to-yellow-500' },
                { name: 'Canvas', color: 'from-yellow-500 to-green-500' },
              ].map((skill) => (
                <div
                  key={skill.name}
                  className={`px-6 py-3 bg-gradient-to-r ${skill.color} rounded-full font-bold text-white transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer`}
                >
                  {skill.name}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full text-2xl font-bold overflow-hidden transform hover:scale-105 transition-transform duration-300">
              <span className="relative z-10">Enter the Abstract</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Animated Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <line x1="0" y1="0" x2="100%" y2="100%" stroke="url(#gradient1)" strokeWidth="2">
          <animate attributeName="x2" values="0%;100%;0%" dur="20s" repeatCount="indefinite" />
        </line>
        <line x1="100%" y1="0" x2="0" y2="100%" stroke="url(#gradient2)" strokeWidth="2">
          <animate attributeName="x1" values="100%;0%;100%" dur="15s" repeatCount="indefinite" />
        </line>
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
