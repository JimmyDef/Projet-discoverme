export default function Hero() {
  return (
    <section id="hero" className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <div className="border-8 border-black p-12 mb-8 bg-yellow-300">
          <h1 className="text-[120px] leading-none font-black uppercase tracking-tighter mb-4">
            JIMMY<br/>DEFAINS
          </h1>
          <div className="flex gap-4 items-center">
            <div className="w-4 h-4 bg-red-600" />
            <p className="text-3xl font-bold uppercase">AVAILABLE FOR HIRE</p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-7 border-8 border-black p-8 bg-white">
            <p className="text-6xl font-black uppercase mb-6 leading-tight">
              FULL STACK<br/>DEVELOPER
            </p>
            <div className="space-y-4 text-2xl font-bold">
              <p className="border-l-8 border-black pl-4">REACT • TYPESCRIPT • NEXT.JS • NODE.JS</p>
              <p className="border-l-8 border-black pl-4">PARIS, ÎLE-DE-FRANCE</p>
              <p className="border-l-8 border-black pl-4">OPENCLASSROOMS RNCP NIVEAU 6</p>
              <p className="border-l-8 border-black pl-4">REMOTE • HYBRID • IMMEDIATE</p>
            </div>
          </div>

          <div className="col-span-5 border-8 border-black p-8 bg-black text-white">
            <p className="text-4xl font-black uppercase mb-6">FEATURED:</p>
            <p className="text-5xl font-black uppercase mb-4 leading-tight">QRPLANS SAAS</p>
            <div className="space-y-2 text-lg font-bold">
              <p>→ MULTI-TENANT</p>
              <p>→ 3 DATABASES</p>
              <p>→ STRIPE/PAYPAL</p>
              <p>→ AWS S3 • BULLMQ</p>
              <p>→ NEXT.JS 16 • REACT 19</p>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          <a href="mailto:jimmydef@outlook.fr" className="flex-1 border-8 border-black p-8 bg-red-600 text-white hover:bg-black transition-colors">
            <p className="text-5xl font-black uppercase text-center">CONTACT</p>
            <p className="text-2xl font-bold text-center mt-2">jimmydef@outlook.fr</p>
          </a>
          <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="flex-1 border-8 border-black p-8 bg-blue-600 text-white hover:bg-black transition-colors">
            <p className="text-5xl font-black uppercase text-center">GITHUB</p>
            <p className="text-2xl font-bold text-center mt-2">@JimmyDef</p>
          </a>
          <a href="https://www.linkedin.com/in/jimmy-defranceschi" target="_blank" rel="noopener noreferrer" className="flex-1 border-8 border-black p-8 bg-green-600 text-white hover:bg-black transition-colors">
            <p className="text-5xl font-black uppercase text-center">LINKEDIN</p>
            <p className="text-2xl font-bold text-center mt-2">Connect</p>
          </a>
        </div>
      </div>
    </section>
  );
}
