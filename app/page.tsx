'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const portfolios = [
    // NEW 2025 TRENDS
    {
      id: 'terminal',
      title: '🖥️ Terminal CLI',
      description: 'Portfolio interactif style terminal Unix/Linux avec commandes',
      path: '/terminal',
      color: 'from-green-500 to-emerald-600',
      tags: ['Interactive', 'CLI', 'Unique'],
      category: 'interactive',
      isNew: true,
    },
    {
      id: 'bento',
      title: '📱 Bento Grid',
      description: 'Layout moderne inspiré d\'Apple/Notion avec cartes variées',
      path: '/bento',
      color: 'from-blue-500 to-purple-600',
      tags: ['Trending 2025', 'Modern', 'Clean'],
      category: 'modern',
      isNew: true,
    },
    {
      id: 'storytelling',
      title: '📜 Storytelling',
      description: 'Expérience narrative cinématique avec animations GSAP',
      path: '/storytelling',
      color: 'from-purple-500 to-pink-600',
      tags: ['Animated', 'GSAP', 'Immersive'],
      category: 'animated',
      isNew: true,
    },
    // CREATIVE & EXPERIMENTAL
    {
      id: 'matrix',
      title: '🟢 Matrix Code Rain',
      description: 'Portfolio cyberpunk avec animation Matrix en Canvas',
      path: '/matrix',
      color: 'from-green-600 to-emerald-700',
      tags: ['Canvas', 'Cyberpunk', 'Animated'],
      category: 'creative',
      isNew: false,
    },
    {
      id: 'vaporwave',
      title: '🌴 Vaporwave 80s',
      description: 'Aesthetic rétro années 80 avec vibes vaporwave',
      path: '/vaporwave',
      color: 'from-pink-500 via-purple-500 to-cyan-500',
      tags: ['Retro', 'Aesthetic', '80s'],
      category: 'creative',
      isNew: false,
    },
    {
      id: 'pixel-art',
      title: '🎮 Pixel Art 8-bit',
      description: 'Portfolio rétro gaming style jeu vidéo 8-bit',
      path: '/pixel-art',
      color: 'from-yellow-500 to-red-600',
      tags: ['Gaming', '8-bit', 'Retro'],
      category: 'creative',
      isNew: false,
    },
    {
      id: 'abstract',
      title: '🎨 Abstract Experimental',
      description: 'Design avant-garde avec formes abstraites et interactions',
      path: '/abstract',
      color: 'from-purple-600 via-pink-600 to-cyan-600',
      tags: ['Experimental', 'Abstract', 'Artistic'],
      category: 'creative',
      isNew: false,
    },
    // MODERN & ELEGANT
    {
      id: 'glassmorphism',
      title: '💎 Glassmorphism',
      description: 'Design iOS-inspired avec effets glass et blur',
      path: '/glassmorphism',
      color: 'from-blue-400 to-purple-500',
      tags: ['iOS', 'Modern', 'Glass'],
      category: 'modern',
      isNew: false,
    },
    {
      id: '3d-perspective',
      title: '🎲 3D Perspective',
      description: 'Portfolio avec transformations CSS 3D et profondeur',
      path: '/3d-perspective',
      color: 'from-indigo-500 to-purple-600',
      tags: ['3D', 'CSS', 'Depth'],
      category: 'animated',
      isNew: false,
    },
    // BOLD & UNIQUE
    {
      id: 'brutalist',
      title: '⚡ Brutalist Raw',
      description: 'Design brut et sans compromis, maximaliste et direct',
      path: '/brutalist',
      color: 'from-yellow-500 to-red-600',
      tags: ['Bold', 'Raw', 'Honest'],
      category: 'bold',
      isNew: false,
    },
    {
      id: 'newspaper',
      title: '📰 Newspaper',
      description: 'Portfolio style journal/magazine avec typographie éditoriale',
      path: '/newspaper',
      color: 'from-gray-700 to-gray-900',
      tags: ['Editorial', 'Typography', 'Classic'],
      category: 'bold',
      isNew: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'Tous', icon: '🎯' },
    { id: 'interactive', label: 'Interactif', icon: '🖱️' },
    { id: 'modern', label: 'Moderne', icon: '✨' },
    { id: 'animated', label: 'Animé', icon: '🎬' },
    { id: 'creative', label: 'Créatif', icon: '🎨' },
    { id: 'bold', label: 'Audacieux', icon: '⚡' },
  ];

  const filteredPortfolios = filter === 'all'
    ? portfolios
    : portfolios.filter(p => p.category === filter);

  const newCount = portfolios.filter(p => p.isNew).length;
  const totalCount = portfolios.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <header className="container mx-auto px-6 py-8 sticky top-0 z-50 backdrop-blur-xl bg-black/50 border-b border-gray-800">
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
          <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">
              ✨ {newCount} Nouveaux + {totalCount - newCount} Classiques = {totalCount} Portfolios
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Explorez {totalCount} Styles
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              De Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Collection complète de portfolios modernes pour développeurs React & TypeScript
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 ${
                  filter === cat.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white scale-105'
                    : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 hover:text-white'
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="container mx-auto px-6 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {filteredPortfolios.map((portfolio) => (
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
                    <div className="inline-block mb-3 px-3 py-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full animate-pulse">
                      <span className="text-white text-xs font-bold">NEW 2025</span>
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

      {/* Stats Section */}
      <section className="container mx-auto px-6 pb-20">
        <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">📊 Collection Stats</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {totalCount}
              </div>
              <p className="text-gray-400">Portfolios Total</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                {newCount}
              </div>
              <p className="text-gray-400">Nouveaux 2025</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
                {categories.length - 1}
              </div>
              <p className="text-gray-400">Catégories</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-black bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-gray-400">Open Source</p>
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
              'Canvas API',
              'CSS 3D',
              'Animations',
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
            {totalCount} portfolios • Tous open source et personnalisables
          </p>
        </div>
      </footer>
    </div>
  );
}
