export default function Footer() {
  return (
    <footer id="contact" className="bg-white p-8">
      <div className="max-w-7xl mx-auto border-4 border-black bg-white">
        <div className="border-b-4 border-black p-6 bg-black text-white text-center">
          <h2 className="text-4xl font-serif font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>CONTACT EDITORIAL</h2>
          <p className="font-serif italic text-sm">Get in touch with our featured developer</p>
        </div>

        <div className="grid grid-cols-3 gap-8 p-8">
          <div className="border-r-2 border-black pr-8">
            <p className="text-xs font-sans uppercase tracking-wider mb-4 font-bold">CORRESPONDENCE</p>
            <div className="font-serif space-y-2 text-sm">
              <p><strong>Email:</strong> jimmydef@outlook.fr</p>
              <p><strong>Location:</strong> Paris, Île-de-France</p>
              <p><strong>Response Time:</strong> {'<'} 24 hours</p>
            </div>
          </div>

          <div className="border-r-2 border-black pr-8">
            <p className="text-xs font-sans uppercase tracking-wider mb-4 font-bold">SECTIONS</p>
            <div className="font-serif space-y-2 text-sm">
              <a href="#hero" className="block hover:underline">Home</a>
              <a href="#about" className="block hover:underline">About</a>
              <a href="#projects" className="block hover:underline">Projects</a>
            </div>
          </div>

          <div>
            <p className="text-xs font-sans uppercase tracking-wider mb-4 font-bold">SOCIAL MEDIA</p>
            <div className="space-y-3">
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block text-sm font-sans border-2 border-black p-2 text-center hover:bg-black hover:text-white transition-colors">
                GitHub →
              </a>
              <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="block text-sm font-sans border-2 border-black p-2 text-center hover:bg-black hover:text-white transition-colors">
                LinkedIn →
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-4 border-black p-4 bg-gray-100 text-center">
          <p className="font-serif text-sm">&copy; {new Date().getFullYear()} The Developer Times • Built with Next.js 16 & React 19 • All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
