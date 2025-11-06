'use client';

import { useState } from 'react';

export default function BentoPortfolio() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-black dark:to-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-black/70 border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </h1>
          <div className="flex gap-6">
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Work
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-300 dark:to-white bg-clip-text text-transparent">
              Crafting Digital
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            Développeur React & TypeScript spécialisé dans la création
            d'interfaces modernes et performantes.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[240px]">

          {/* Large Card - Main Project */}
          <div
            className="md:col-span-2 lg:row-span-2 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 p-8 relative overflow-hidden group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('main')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  Featured Project
                </span>
                <h3 className="text-3xl font-bold text-white mt-2 mb-3">
                  E-Commerce Platform
                </h3>
                <p className="text-white/80 text-sm leading-relaxed">
                  Plateforme de vente en ligne moderne avec paiement sécurisé,
                  gestion de panier et dashboard admin.
                </p>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  Node.js
                </span>
              </div>
            </div>
            <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent transition-opacity duration-300 ${hoveredCard === 'main' ? 'opacity-100' : 'opacity-0'}`} />
          </div>

          {/* About Card */}
          <div
            className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('about')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-4 flex items-center justify-center text-2xl">
              👋
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              À propos
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Développeur passionné basé à Paris
            </p>
          </div>

          {/* Skills Card */}
          <div
            className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('skills')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-3">
                  Skills
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[90%] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden">
                      <div className="h-full w-[80%] bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-xs text-white/70 mt-4">
                React · TypeScript · Next.js
              </p>
            </div>
          </div>

          {/* Experience Card */}
          <div
            className="md:col-span-2 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('experience')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
              Expérience
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Développeur Frontend
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Freelance · 2023 - Présent
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    Développeur Junior
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    StartUp Tech · 2022 - 2023
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Card */}
          <div
            className="rounded-3xl bg-gradient-to-br from-pink-500 to-rose-600 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('stats')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <h3 className="text-4xl font-bold text-white mb-2">
              15+
            </h3>
            <p className="text-white/80 text-sm">
              Projets complétés avec succès
            </p>
          </div>

          {/* Contact Card */}
          <div
            className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('contact')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 mb-4 flex items-center justify-center text-2xl">
              📧
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Contact
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Discutons de votre projet
            </p>
          </div>

          {/* Project 2 */}
          <div
            className="md:col-span-2 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('project2')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                  Project
                </span>
                <h3 className="text-2xl font-bold text-white mt-2 mb-2">
                  Design System Library
                </h3>
                <p className="text-white/80 text-sm">
                  Bibliothèque de composants React réutilisables avec Storybook
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  React
                </span>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white font-medium">
                  Storybook
                </span>
              </div>
            </div>
          </div>

          {/* GitHub Card */}
          <div
            className="rounded-3xl bg-gray-900 dark:bg-gray-800 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('github')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-4xl mb-2">
                🐙
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  GitHub
                </h3>
                <p className="text-gray-400 text-sm">
                  500+ contributions
                </p>
              </div>
            </div>
          </div>

          {/* Location Card */}
          <div
            className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('location')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="text-4xl mb-2">
              📍
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
              Paris
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              France
            </p>
          </div>

          {/* LinkedIn Card */}
          <div
            className="rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('linkedin')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="text-4xl mb-2">
                💼
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  LinkedIn
                </h3>
                <p className="text-blue-200 text-sm">
                  Connect with me
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div
            className="md:col-span-2 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 group cursor-pointer transition-all hover:shadow-2xl hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('education')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex-shrink-0 flex items-center justify-center text-2xl">
                🎓
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Formation
                </h3>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Développeur d'Application Web
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  OpenClassrooms · RNCP Niveau 6
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  2022 - 2023
                </p>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div
            className="rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 group cursor-pointer transition-transform hover:scale-[1.02] duration-300"
            onMouseEnter={() => setHoveredCard('availability')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="h-full flex flex-col justify-between">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
              <div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Disponible
                </h3>
                <p className="text-white/80 text-sm">
                  Pour freelance & CDI
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Portfolio. Crafted with React & TypeScript.
          </p>
        </div>
      </footer>
    </div>
  );
}
