'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const portfolios = [
    {
      id: 'terminal',
      title: '🖥️ Terminal CLI',
      description: 'Portfolio interactif style terminal Unix/Linux avec commandes',
      path: '/terminal',
      color: 'from-green-500 to-emerald-600',
      tags: ['Interactive', 'CLI', 'Unique'],
      isNew: true,
    },
    {
      id: 'bento',
      title: '📱 Bento Grid',
      description: 'Layout moderne inspiré d\'Apple/Notion avec cartes variées',
      path: '/bento',
      color: 'from-blue-500 to-purple-600',
      tags: ['Trending 2025', 'Modern', 'Clean'],
      isNew: true,
    },
    {
      id: 'storytelling',
      title: '📜 Storytelling',
      description: 'Expérience narrative cinématique avec animations GSAP',
      path: '/storytelling',
      color: 'from-purple-500 to-pink-600',
      tags: ['Animated', 'GSAP', 'Immersive'],
      isNew: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Portfolio Collection
          </h1>
          <div className="flex gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">
              ✨ 3 Nouveaux Styles Ajoutés
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Choisissez Votre
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Style de Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Collection complète de portfolios modernes pour développeurs React & TypeScript
          </p>
        </div>
      </section>

      {/* Portfolio Grid - NEW ONES */}
      <section className="container mx-auto px-6 pb-12">
        <div className="mb-8">
          <h3 className="text-3xl font-bold text-white mb-2">🆕 Nouveaux Portfolios (2025 Trends)</h3>
          <p className="text-gray-400">Les dernières tendances en design de portfolio</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {portfolios.map((portfolio) => (
            <Link
              key={portfolio.id}
              href={portfolio.path}
              className="group"
              onMouseEnter={() => setHoveredCard(portfolio.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all duration-300 overflow-hidden">
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${portfolio.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* New Badge */}
                  {portfolio.isNew && (
                    <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full">
                      <span className="text-white text-xs font-bold">NEW</span>
                    </div>
                  )}

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {portfolio.title}
                  </h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {portfolio.description}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 flex-wrap mb-4">
                    {portfolio.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800/80 text-gray-300 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="flex items-center text-cyan-400 font-semibold">
                    <span className="mr-2">Voir le portfolio</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${
                        hoveredCard === portfolio.id ? 'translate-x-2' : ''
                      }`}
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-6">🚀 Accès Rapide</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                🖥️
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Terminal CLI</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Tapez des commandes comme dans un vrai terminal
                </p>
                <Link href="/terminal" className="text-cyan-400 text-sm font-semibold hover:underline">
                  Ouvrir →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                📱
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Bento Grid</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Design moderne style Apple/Notion
                </p>
                <Link href="/bento" className="text-cyan-400 text-sm font-semibold hover:underline">
                  Ouvrir →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 text-2xl">
                📜
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Storytelling</h4>
                <p className="text-sm text-gray-400 mb-2">
                  Expérience narrative avec animations
                </p>
                <Link href="/storytelling" className="text-cyan-400 text-sm font-semibold hover:underline">
                  Ouvrir →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="container mx-auto px-6 pb-20">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">⚡ Technologies Utilisées</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'React 19',
              'TypeScript',
              'Next.js 16',
              'Tailwind CSS 4',
              'GSAP 3',
              'ScrollTrigger',
              'Three.js',
            ].map((tech) => (
              <div
                key={tech}
                className="px-6 py-3 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full text-gray-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Portfolio Collection. Crafted with React & TypeScript.
          </p>
          <p className="text-gray-600 text-xs mt-2">
            Tous les portfolios sont open source et personnalisables
          </p>
        </div>
      </footer>
    </div>
  );
}
