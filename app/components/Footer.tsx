export default function Footer() {
  return (
    <footer id="contact" className="bg-white text-black border-t-8 border-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-8 mb-8">
          <div className="border-8 border-black p-8 bg-yellow-300">
            <p className="text-4xl font-black uppercase mb-4">CONTACT</p>
            <div className="space-y-2 text-xl font-bold">
              <p>📧 jimmydef@outlook.fr</p>
              <p>📍 PARIS, ÎLE-DE-FRANCE</p>
              <p>⚡ RESPONSE {'<'} 24H</p>
            </div>
          </div>

          <div className="border-8 border-black p-8">
            <p className="text-4xl font-black uppercase mb-4">LINKS</p>
            <div className="space-y-2 text-xl font-bold">
              <a href="#hero" className="block hover:underline">→ HOME</a>
              <a href="#about" className="block hover:underline">→ ABOUT</a>
              <a href="#projects" className="block hover:underline">→ PROJECTS</a>
            </div>
          </div>

          <div className="border-8 border-black p-8 bg-black text-white">
            <p className="text-4xl font-black uppercase mb-4">SOCIAL</p>
            <div className="space-y-2 text-xl font-bold">
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block hover:underline">→ GITHUB</a>
              <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="block hover:underline">→ LINKEDIN</a>
            </div>
          </div>
        </div>

        <div className="border-8 border-black p-6 bg-red-600 text-white text-center">
          <p className="text-2xl font-black uppercase">&copy; {new Date().getFullYear()} JIMMY DEFAINS • NEXT.JS 16 • REACT 19</p>
        </div>
      </div>
    </footer>
  );
}
