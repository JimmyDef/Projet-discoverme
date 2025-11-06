export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0f380f] text-[#9bbc0f] p-4 font-mono border-t-8 border-[#8bac0f]">
      <div className="max-w-4xl mx-auto border-4 border-[#306230] bg-[#0f380f] p-8">
        <h2 className="text-3xl font-black text-center mb-8">▸ COMMUNICATION LINK ◂</h2>
        <div className="grid grid-cols-3 gap-6 mb-8">
          <div className="border-4 border-[#8bac0f] p-4">
            <p className="text-xs mb-2 font-black">CONTACT</p>
            <div className="text-xs space-y-1">
              <p>📧 jimmydef@outlook.fr</p>
              <p>📍 PARIS</p>
              <p>⚡ {'<'} 24H</p>
            </div>
          </div>
          <div className="border-4 border-[#8bac0f] p-4">
            <p className="text-xs mb-2 font-black">MENU</p>
            <div className="text-xs space-y-1">
              <a href="#hero" className="block hover:text-[#8bac0f]">▸ HOME</a>
              <a href="#about" className="block hover:text-[#8bac0f]">▸ ABOUT</a>
              <a href="#projects" className="block hover:text-[#8bac0f]">▸ PROJECTS</a>
            </div>
          </div>
          <div className="border-4 border-[#8bac0f] p-4">
            <p className="text-xs mb-2 font-black">SOCIAL</p>
            <div className="space-y-2">
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-[#8bac0f] text-[#0f380f] text-xs font-black hover:bg-[#9bbc0f]">GITHUB</a>
              <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 bg-[#8bac0f] text-[#0f380f] text-xs font-black hover:bg-[#9bbc0f]">LINKEDIN</a>
            </div>
          </div>
        </div>
        <div className="text-center border-t-4 border-[#8bac0f] pt-4">
          <p className="text-xs">&copy; {new Date().getFullYear()} JIMMY DEFAINS • NEXT.JS 16 • REACT 19</p>
        </div>
      </div>
    </footer>
  );
}
