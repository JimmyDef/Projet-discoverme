export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-purple-300 via-pink-300 to-blue-300 p-12">
      <div className="max-w-4xl mx-auto bg-white/25 backdrop-blur-2xl border border-white/40 rounded-3xl p-12 shadow-2xl text-center">
        <h2 className="text-4xl font-black mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Get In Touch</h2>
        <div className="space-y-4 text-gray-800 font-bold mb-8">
          <p>📧 jimmydef@outlook.fr</p>
          <p>📍 Paris, Île-de-France</p>
          <p>⚡ Response {'<'} 24h</p>
        </div>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-bold text-gray-800 hover:bg-white/60 transition-all">GitHub</a>
          <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-bold text-gray-800 hover:bg-white/60 transition-all">LinkedIn</a>
        </div>
        <p className="mt-8 text-sm text-gray-700">&copy; {new Date().getFullYear()} Jimmy Defains • Next.js 16 & React 19</p>
      </div>
    </footer>
  );
}
