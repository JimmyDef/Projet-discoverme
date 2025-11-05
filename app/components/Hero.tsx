'use client';

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Neon glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px] animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-[128px] animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-[128px] animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="mb-12 space-y-6">
          {/* Terminal-style tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm rounded">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-mono text-cyan-400">
              $ whoami → Full Stack Developer
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
              Jimmy Defains
            </span>
          </h1>

          <div className="flex flex-wrap justify-center gap-3 text-xl md:text-2xl font-semibold">
            <span className="text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">React</span>
            <span className="text-gray-500">//</span>
            <span className="text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.8)]">Next.js</span>
            <span className="text-gray-500">//</span>
            <span className="text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]">TypeScript</span>
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Architecte d'applications SaaS complexes. Spécialisé dans les systèmes multi-tenant,
          paiements, infrastructure cloud et performance extrême.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded font-bold text-black overflow-hidden transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              &gt; Voir_projets()
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-green-400 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
          </a>
          <a
            href="mailto:jimmydef@outlook.fr"
            className="px-8 py-4 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 rounded font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] backdrop-blur-sm"
          >
            contact@mail
          </a>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all"
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
            className="p-3 rounded border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-green-400 hover:border-green-500/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all"
            aria-label="LinkedIn"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:jimmydef@outlook.fr"
            className="p-3 rounded border border-gray-800 bg-gray-900/50 backdrop-blur-sm text-gray-400 hover:text-pink-400 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] transition-all"
            aria-label="Email"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
