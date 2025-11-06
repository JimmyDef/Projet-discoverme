export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 border-t border-white/20 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-blue-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-4">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              LET'S CONNECT
            </span>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="backdrop-blur-lg bg-white/5 border border-white/20 p-8 rounded-xl hover:scale-105 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mb-4" />
            <p className="text-sm mb-4 font-black text-purple-400">CONTACT</p>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 jimmydef@outlook.fr</p>
              <p>📍 Paris, Île-de-France</p>
              <p>⚡ Réponse {'<'} 24h</p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/20 p-8 rounded-xl hover:scale-105 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mb-4" />
            <p className="text-sm mb-4 font-black text-cyan-400">NAVIGATION</p>
            <div className="space-y-2 text-sm">
              <a href="#hero" className="block hover:text-cyan-400 transition-colors text-gray-300">→ Home</a>
              <a href="#about" className="block hover:text-cyan-400 transition-colors text-gray-300">→ About</a>
              <a href="#projects" className="block hover:text-cyan-400 transition-colors text-gray-300">→ Projects</a>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/20 p-8 rounded-xl hover:scale-105 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 mb-4" />
            <p className="text-sm mb-4 font-black text-green-400">SOCIAL</p>
            <div className="space-y-3">
              <a
                href="https://github.com/JimmyDef"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-center font-bold text-sm hover:scale-105 transition-transform rounded"
              >
                GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-defranceschi"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-center font-bold text-sm hover:scale-105 transition-transform rounded"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-8">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jimmy Defains • Full Stack Developer • Next.js 16 • React 19 • Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
