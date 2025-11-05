export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 border-t border-white/10 text-white py-16 px-6 relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Contact Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Get In Touch
            </h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Open for new opportunities and collaborations. Let's create something amazing together!
            </p>
            <div className="space-y-3">
              <a
                href="mailto:jimmydef@outlook.fr"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">📧</span>
                <span>jimmydef@outlook.fr</span>
              </a>
              <p className="flex items-center gap-3 text-slate-300">
                <span className="text-2xl">📍</span>
                <span>Paris, Île-de-France</span>
              </p>
              <p className="flex items-center gap-3 text-slate-300">
                <span className="text-2xl">⚡</span>
                <span>Response time: {'<'} 24h</span>
              </p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="flex flex-col gap-3">
              {[
                { href: '#hero', label: 'Home' },
                { href: '#about', label: 'About' },
                { href: '#projects', label: 'Projects' },
                { href: '#contact', label: 'Contact' },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-white hover:translate-x-2 transition-all flex items-center gap-2"
                >
                  <span className="text-purple-400">→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social Networks Section */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Connect
            </h3>
            <p className="text-slate-300 mb-6">Follow me on social media</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/JimmyDef"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 hover:scale-110 transition-all"
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
                className="p-4 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 hover:scale-110 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              &copy; {new Date().getFullYear()} Jimmy Defains. All rights reserved.
            </p>
            <p>
              Built with <span className="text-pink-400">♥</span> using Next.js 16, React 19 & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
