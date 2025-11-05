'use client';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-b from-purple-900 to-black border-t-4 border-cyan-500 py-16 px-6 relative overflow-hidden">
      <div className="scanlines" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-5xl font-black text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 tracking-wider" style={{ fontFamily: 'Impact, fantasy' }}>
          CONTACT.COM
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-1">
            <div className="bg-purple-950 p-6">
              <h3 className="text-xl font-black text-yellow-400 mb-4">GET IN TOUCH</h3>
              <div className="space-y-3 text-cyan-300 font-mono text-sm">
                <a href="mailto:jimmydef@outlook.fr" className="block hover:text-pink-400">📧 jimmydef@outlook.fr</a>
                <p>📍 Paris, Île-de-France</p>
                <p>⚡ Response: {'<'} 24h</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-1">
            <div className="bg-purple-950 p-6">
              <h3 className="text-xl font-black text-yellow-400 mb-4">QUICK LINKS</h3>
              <div className="space-y-2 text-cyan-300 font-mono text-sm">
                {['#hero', '#about', '#projects', '#contact'].map(link => (
                  <a key={link} href={link} className="block hover:text-pink-400">{'>'} {link.replace('#', '').toUpperCase()}</a>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-1">
            <div className="bg-purple-950 p-6">
              <h3 className="text-xl font-black text-yellow-400 mb-4">CONNECT</h3>
              <div className="flex gap-4">
                <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="p-3 bg-cyan-500 hover:bg-pink-500 transition-colors">
                  <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="p-3 bg-pink-500 hover:bg-cyan-500 transition-colors">
                  <svg className="w-6 h-6 text-purple-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center border-t-4 border-cyan-500 pt-8">
          <p className="text-pink-400 font-mono text-sm">&copy; {new Date().getFullYear()} JIMMY DEFAINS • BUILT WITH NEXT.JS 16 & REACT 19</p>
        </div>
      </div>

      <style jsx>{`
        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 2px);
          pointer-events: none;
        }
      `}</style>
    </footer>
  );
}
