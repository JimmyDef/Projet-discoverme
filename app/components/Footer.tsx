export default function Footer() {
  return (
    <footer id="contact" className="bg-black border-t-2 border-green-500/30 text-green-400 py-16 px-6 font-mono relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Contact Section */}
          <div className="border border-green-500/30 p-4 bg-green-500/5">
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-500/30 pb-2">
              {'>'} CONTACT_CHANNEL
            </h3>
            <p className="text-green-300/80 mb-4 text-sm leading-relaxed">
              <span className="text-green-500">{'> '}</span>
              Open for collaboration and new opportunities.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-green-500">└─</span>
                <a
                  href="mailto:jimmydef@outlook.fr"
                  className="text-green-400 hover:text-green-300 hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.7)] transition-all"
                >
                  jimmydef@outlook.fr
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">└─</span>
                <span className="text-green-300/70">PARIS_ILE_DE_FRANCE</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-500">└─</span>
                <span className="text-green-300/70">STATUS: AVAILABLE_IMMEDIATELY</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="border border-green-500/30 p-4 bg-green-500/5">
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-500/30 pb-2">
              {'>'} QUICK_LINKS
            </h3>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="#hero"
                className="text-green-300/80 hover:text-green-400 hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <span className="text-green-500">{'>'}</span>
                HOME
              </a>
              <a
                href="#about"
                className="text-green-300/80 hover:text-green-400 hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <span className="text-green-500">{'>'}</span>
                ABOUT
              </a>
              <a
                href="#projects"
                className="text-green-300/80 hover:text-green-400 hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <span className="text-green-500">{'>'}</span>
                PROJECTS
              </a>
              <a
                href="#contact"
                className="text-green-300/80 hover:text-green-400 hover:translate-x-1 transition-all flex items-center gap-2"
              >
                <span className="text-green-500">{'>'}</span>
                CONTACT
              </a>
            </div>
          </div>

          {/* Social Networks Section */}
          <div className="border border-green-500/30 p-4 bg-green-500/5">
            <h3 className="text-xl font-bold mb-4 text-green-400 border-b border-green-500/30 pb-2">
              {'>'} SOCIAL_NETWORKS
            </h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/JimmyDef"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all"
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
                className="p-3 border border-green-500/50 text-green-400 hover:bg-green-500/10 hover:shadow-[0_0_20px_rgba(0,255,0,0.3)] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
            <div className="mt-4 text-xs text-green-300/60">
              <p>
                <span className="text-green-500">{'>'} </span>
                RESPONSE_TIME: {'<'} 24H
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t-2 border-green-500/30 pt-8 text-center">
          <div className="mb-4 text-xs text-green-300/60">
            <p className="mb-2">
              <span className="animate-pulse">▌</span> SYSTEM_STATUS: OPERATIONAL
            </p>
            <p>
              <span className="text-green-500">{'>'} </span>
              BUILT_WITH: Next.js 16 • React 19 • TypeScript • Tailwind CSS
            </p>
          </div>
          <div className="text-sm text-green-400 border border-green-500/30 inline-block px-6 py-2 bg-green-500/5">
            &copy; {new Date().getFullYear()} JIMMY_DEFAINS • ALL_RIGHTS_RESERVED
          </div>
        </div>
      </div>
    </footer>
  );
}
