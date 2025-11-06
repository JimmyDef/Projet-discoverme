export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white p-8 relative overflow-hidden border-t border-white/20">
      {/* Abstract shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-500 to-blue-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-12 gap-4 mb-12">
          <div className="col-span-2 h-2 bg-gradient-to-r from-pink-500 to-transparent transform rotate-2" />
          <div className="col-span-8 text-center">
            <h2 className="text-5xl font-black mb-2">LET'S CONNECT</h2>
          </div>
          <div className="col-span-2 h-2 bg-gradient-to-l from-cyan-500 to-transparent transform -rotate-2" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/20 p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-transparent mb-4" />
            <p className="text-sm mb-3 font-black">CONTACT</p>
            <div className="space-y-2 text-sm">
              <p>📧 jimmydef@outlook.fr</p>
              <p>📍 Paris, Île-de-France</p>
              <p>⚡ Réponse {'<'} 24h</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20 p-6 transform rotate-1 hover:rotate-0 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-transparent mb-4" />
            <p className="text-sm mb-3 font-black">NAVIGATION</p>
            <div className="space-y-2 text-sm">
              <a href="#hero" className="block hover:text-cyan-400 transition-colors">→ Home</a>
              <a href="#about" className="block hover:text-cyan-400 transition-colors">→ About</a>
              <a href="#projects" className="block hover:text-cyan-400 transition-colors">→ Projects</a>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-white/20 p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-transparent mb-4" />
            <p className="text-sm mb-3 font-black">SOCIAL</p>
            <div className="space-y-3">
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-center font-black text-sm hover:scale-105 transition-transform">
                GITHUB
              </a>
              <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-center font-black text-sm hover:scale-105 transition-transform">
                LINKEDIN
              </a>
            </div>
          </div>
        </div>

        <div className="text-center border-t border-white/20 pt-6">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Jimmy Defains • Full Stack Developer • Next.js 16 • React 19
          </p>
        </div>
      </div>
    </footer>
  );
}
