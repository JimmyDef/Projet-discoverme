export default function Footer() {
  return (
    <footer id="contact" className="relative py-20 px-6 bg-black border-t border-cyan-500/20">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-pink-500/30 bg-pink-500/5 backdrop-blur-sm rounded mb-4">
            <span className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-mono text-pink-400">contact.connect()</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's <span className="text-cyan-400">Build</span> Together
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Disponible immédiatement pour des projets ambitieux.
            <br />
            <span className="text-green-400">Remote • Hybride • Paris/IDF</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
            <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-xs font-mono text-gray-500 mb-1">EMAIL</p>
            <a
              href="mailto:jimmydef@outlook.fr"
              className="text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              jimmydef@outlook.fr
            </a>
          </div>

          <div className="p-6 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]">
            <div className="w-12 h-12 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <p className="text-xs font-mono text-gray-500 mb-1">LOCATION</p>
            <p className="text-green-400 font-mono">Paris / Île-de-France</p>
          </div>

          <div className="p-6 border border-pink-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center hover:border-pink-500/50 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
            <div className="w-12 h-12 bg-pink-500/10 border border-pink-500/30 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-xs font-mono text-gray-500 mb-1">STATUS</p>
            <p className="text-pink-400 font-mono">Available Now</p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-12">
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
        </div>

        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-600 font-mono text-sm">
            <span className="text-gray-500">// </span>
            Built with <span className="text-cyan-400">Next.js</span> &{' '}
            <span className="text-green-400">TypeScript</span>
          </p>
          <p className="text-gray-700 font-mono text-xs mt-2">
            &copy; {new Date().getFullYear()} Jimmy Defains
          </p>
        </div>
      </div>
    </footer>
  );
}
