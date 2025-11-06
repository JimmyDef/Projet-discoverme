export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-20 border-t border-white/10 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-blue-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-500 to-emerald-500 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              LET'S BUILD SOMETHING AMAZING
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            I'm currently available for freelance work or full-time positions
          </p>
          <div className="h-1 w-40 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mb-12" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jimmydef@outlook.fr"
              className="px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-lg rounded-lg hover:scale-105 transition-transform"
            >
              📧 EMAIL ME
            </a>
            <a
              href="https://www.linkedin.com/in/jimmy-defranceschi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/10 border border-white/20 font-bold text-lg rounded-lg hover:bg-white/20 transition-all"
            >
              💼 LINKEDIN
            </a>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-white/30 transition-all">
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-4" />
            <p className="text-sm mb-4 font-black text-purple-400">CONTACT</p>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <span>📧</span>
                <a href="mailto:jimmydef@outlook.fr" className="hover:text-purple-400 transition-colors">
                  jimmydef@outlook.fr
                </a>
              </div>
              <p className="flex items-center justify-center gap-2">
                <span>📍</span>
                Paris, Île-de-France
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>⚡</span>
                Response {'<'} 24h
              </p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-white/30 transition-all">
            <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4" />
            <p className="text-sm mb-4 font-black text-cyan-400">AVAILABILITY</p>
            <div className="space-y-3 text-sm text-gray-300">
              <p className="flex items-center justify-center gap-2">
                <span>💼</span>
                <strong className="text-green-400">Available</strong>
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🗓️</span>
                Immediate Start
              </p>
              <p className="flex items-center justify-center gap-2">
                <span>🌐</span>
                Remote • Hybrid
              </p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/10 p-8 rounded-xl text-center hover:border-white/30 transition-all">
            <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto mb-4" />
            <p className="text-sm mb-4 font-black text-green-400">SOCIAL</p>
            <div className="space-y-3">
              <a
                href="https://github.com/JimmyDef"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-center font-bold text-sm rounded transition-all hover:scale-105"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-defranceschi"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-center font-bold text-sm rounded transition-all hover:scale-105"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-4">BUILT WITH</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Next.js 16', 'React 19', 'TypeScript', 'Three.js', 'Tailwind CSS', 'WebGL'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-400"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="text-center border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Jimmy Defains • Full Stack Developer
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Designed & Developed with passion in Paris 🇫🇷
          </p>
        </div>
      </div>
    </footer>
  );
}
