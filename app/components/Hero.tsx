'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600"
    >
      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-400/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="absolute top-40 right-20 w-16 h-16 bg-white/20 rotate-45 rounded-lg"></div>
      <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full"></div>

      <div className="relative max-w-4xl mx-auto text-center z-10 text-white">
        <div className="mb-8 space-y-6">
          <div className="inline-block px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full border-2 border-white/50 mb-6">
            <span className="text-lg font-bold">
              ✨ Développeur Full Stack ✨
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-2xl">
            Jimmy Defains
          </h1>

          <div className="flex flex-wrap justify-center gap-4 text-2xl md:text-3xl font-bold">
            <span className="px-4 py-2 bg-yellow-400 text-purple-900 rounded-lg transform -rotate-2 shadow-xl">
              React
            </span>
            <span className="px-4 py-2 bg-white text-pink-600 rounded-lg transform rotate-1 shadow-xl">
              Next.js
            </span>
            <span className="px-4 py-2 bg-pink-400 text-white rounded-lg transform -rotate-1 shadow-xl">
              TypeScript
            </span>
          </div>
        </div>

        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium drop-shadow-lg">
          🚀 Créateur d'applications web qui font la différence !
          <br />
          De Paris avec passion 💜
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="px-8 py-4 bg-white text-purple-600 rounded-full font-bold text-lg shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-white/50"
          >
            🎨 Voir mes projets
          </a>
          <a
            href="mailto:jimmydef@outlook.fr"
            className="px-8 py-4 bg-yellow-400 text-purple-900 rounded-full font-bold text-lg shadow-2xl hover:scale-110 transition-all duration-300"
          >
            📧 Contact
          </a>
        </div>

        <div className="flex justify-center gap-6">
          {[
            { href: "https://github.com/JimmyDef", label: "GitHub", icon: "🐙" },
            { href: "https://www.linkedin.com/in/jimmy-defranceschi", label: "LinkedIn", icon: "💼" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all hover:scale-110 text-3xl"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
