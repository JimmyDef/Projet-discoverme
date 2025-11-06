'use client';

import { useState } from 'react';

export default function ThreeDPerspectivePortfolio() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-6" style={{perspective: '1000px'}}>
      <div className="max-w-6xl mx-auto">
        {/* 3D Title */}
        <div className="text-center mb-20" style={{transformStyle: 'preserve-3d'}}>
          <h1
            className="text-7xl md:text-9xl font-black text-white mb-6"
            style={{
              transform: 'rotateX(20deg)',
              textShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 60px rgba(139,92,246,0.5)',
            }}
          >
            3D SPACE
          </h1>
          <p className="text-2xl text-purple-200" style={{transform: 'translateZ(50px)'}}>
            Développeur Full Stack • Dimension Parallèle
          </p>
        </div>

        {/* 3D Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20" style={{transformStyle: 'preserve-3d'}}>
          {[
            {
              title: 'React Master',
              icon: '⚛️',
              color: 'from-cyan-500 to-blue-600',
              description: 'Expert en composants React',
            },
            {
              title: 'TypeScript Pro',
              icon: '📘',
              color: 'from-blue-500 to-purple-600',
              description: 'Type-safe development',
            },
            {
              title: 'Next.js Wizard',
              icon: '▲',
              color: 'from-purple-500 to-pink-600',
              description: 'SSR & SSG specialist',
            },
            {
              title: 'UI/UX Designer',
              icon: '🎨',
              color: 'from-pink-500 to-red-600',
              description: 'Beautiful interfaces',
            },
            {
              title: '3D Developer',
              icon: '🎮',
              color: 'from-red-500 to-orange-600',
              description: 'Three.js & WebGL',
            },
            {
              title: 'API Architect',
              icon: '🔌',
              color: 'from-orange-500 to-yellow-600',
              description: 'RESTful & GraphQL',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{
                transformStyle: 'preserve-3d',
                transform: activeCard === index ? 'rotateY(10deg) rotateX(10deg) translateZ(50px)' : 'rotateY(0deg) rotateX(0deg)',
                transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
              }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div
                className={`bg-gradient-to-br ${card.color} p-8 rounded-2xl border-2 border-white/20 shadow-2xl`}
                style={{
                  transform: 'translateZ(0px)',
                  boxShadow: activeCard === index
                    ? '0 50px 100px rgba(0,0,0,0.5), 0 0 80px rgba(139,92,246,0.4)'
                    : '0 20px 40px rgba(0,0,0,0.3)',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div
                  className="text-6xl mb-4"
                  style={{
                    transform: activeCard === index ? 'translateZ(80px) scale(1.2)' : 'translateZ(30px)',
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                  }}
                >
                  {card.icon}
                </div>
                <h3
                  className="text-3xl font-bold text-white mb-2"
                  style={{
                    transform: activeCard === index ? 'translateZ(60px)' : 'translateZ(20px)',
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                  }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-white/80"
                  style={{
                    transform: activeCard === index ? 'translateZ(40px)' : 'translateZ(10px)',
                    transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.320, 1)',
                  }}
                >
                  {card.description}
                </p>
              </div>

              {/* 3D Shadow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.color} rounded-2xl blur-xl opacity-50`}
                style={{
                  transform: 'translateZ(-50px) scale(0.9)',
                  transition: 'all 0.3s ease',
                }}
              />
            </div>
          ))}
        </div>

        {/* 3D Projects Showcase */}
        <div className="relative" style={{transformStyle: 'preserve-3d'}}>
          <h2
            className="text-5xl font-bold text-white text-center mb-12"
            style={{transform: 'translateZ(50px)', textShadow: '0 10px 30px rgba(0,0,0,0.5)'}}
          >
            Projets en Profondeur
          </h2>

          <div className="relative h-96">
            {[
              { title: 'E-Commerce Platform', z: 100, color: 'bg-purple-600' },
              { title: 'Design System', z: 50, color: 'bg-pink-600' },
              { title: 'Dashboard Analytics', z: 0, color: 'bg-blue-600' },
            ].map((project, index) => (
              <div
                key={index}
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 p-8 ${project.color} rounded-2xl border-2 border-white/30 shadow-2xl hover:scale-110 transition-transform duration-500 cursor-pointer`}
                style={{
                  transform: `translateX(-50%) translateY(-50%) translateZ(${project.z}px) rotateY(${index * 5}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-white/80">Projet #{index + 1}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-32" style={{transformStyle: 'preserve-3d'}}>
          <button
            className="px-12 py-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-2xl font-bold rounded-full hover:scale-110 transition-transform duration-300"
            style={{
              transform: 'translateZ(80px)',
              boxShadow: '0 30px 60px rgba(139,92,246,0.5)',
            }}
          >
            Entrer dans la 3D
          </button>
        </div>
      </div>
    </div>
  );
}
