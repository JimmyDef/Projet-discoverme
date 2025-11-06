export default function Hero() {
  return (
    <section id="hero" className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-7xl mx-auto border-4 border-black">
        {/* Masthead */}
        <div className="border-b-4 border-black p-6 bg-white">
          <div className="text-center">
            <p className="text-sm font-serif mb-2">Paris, Île-de-France • {new Date().toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h1 className="text-7xl font-serif font-bold tracking-tight mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>
              THE DEVELOPER TIMES
            </h1>
            <p className="text-sm font-serif italic border-t border-black pt-2">All The Code That's Fit To Deploy</p>
          </div>
        </div>

        {/* Above the fold */}
        <div className="grid grid-cols-12 gap-8 p-8">
          {/* Main story */}
          <div className="col-span-8 border-r-2 border-black pr-8">
            <p className="text-xs font-sans uppercase tracking-wider mb-2 text-gray-600">BREAKING NEWS</p>
            <h2 className="text-6xl font-serif font-bold leading-tight mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>
              Jimmy Defains: Full Stack Developer Available for Immediate Hire
            </h2>
            <p className="text-sm font-sans italic mb-4 text-gray-700">By Editorial Staff • Published Today</p>

            <div className="columns-2 gap-6 text-justify font-serif leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p className="mb-4">
                <span className="text-6xl float-left mr-2 leading-none font-bold">I</span>
                n a career transition that exemplifies adaptability and determination, Jimmy Defains has successfully pivoted from event management to become a skilled full-stack developer. Armed with a JavaScript React Developer certification from OpenClassrooms (RNCP Niveau 6), Defains brings a fresh perspective to modern web development.
              </p>
              <p className="mb-4">
                Specializing in React, TypeScript, and Next.js, Defains creates intuitive user interfaces and high-performance applications. His portfolio ranges from showcase websites to complex SaaS applications with advanced features, demonstrating versatility across the full spectrum of web development.
              </p>
              <p className="mb-4">
                Currently available for remote or hybrid positions, Defains is based in the Paris Île-de-France region and promises a response time of less than 24 hours to inquiries. His technical stack includes cutting-edge technologies such as Next.js 16, React 19, TypeScript, Prisma, and various modern development tools.
              </p>
            </div>

            <div className="mt-6 p-4 bg-gray-100 border-2 border-black">
              <p className="font-serif italic text-center">
                "Creating intuitive UIs and high-performance applications is not just my profession—it's my passion."
              </p>
              <p className="text-xs text-center mt-2 font-sans">— Jimmy Defains, Full Stack Developer</p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-span-4">
            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-wider mb-3 pb-1 border-b-2 border-black font-bold">CONTACT INFORMATION</p>
              <div className="space-y-2 font-serif text-sm">
                <p><strong>Email:</strong> jimmydef@outlook.fr</p>
                <p><strong>Location:</strong> Paris, Île-de-France</p>
                <p><strong>Status:</strong> Available Immediately</p>
                <p><strong>Work Mode:</strong> Remote • Hybrid</p>
              </div>
            </div>

            <div className="mb-8 p-4 bg-black text-white">
              <p className="text-xs font-sans uppercase tracking-wider mb-3 font-bold">FEATURED PROJECT</p>
              <h3 className="text-2xl font-serif font-bold mb-2">QRPlans SaaS Platform</h3>
              <p className="text-xs font-serif mb-3">A multi-tenant SaaS application with advanced payment systems, cloud storage, and asynchronous job processing.</p>
              <ul className="text-xs space-y-1 font-serif">
                <li>• 3 PostgreSQL Databases</li>
                <li>• Stripe & PayPal Integration</li>
                <li>• AWS S3 Cloud Storage</li>
                <li>• BullMQ + Redis Queue</li>
                <li>• Next.js 16 & React 19</li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="text-xs font-sans uppercase tracking-wider mb-3 pb-1 border-b-2 border-black font-bold">TECH STACK</p>
              <div className="grid grid-cols-2 gap-2 text-xs font-serif">
                <div className="border border-black p-2 text-center font-bold">REACT</div>
                <div className="border border-black p-2 text-center font-bold">TYPESCRIPT</div>
                <div className="border border-black p-2 text-center font-bold">NEXT.JS</div>
                <div className="border border-black p-2 text-center font-bold">NODE.JS</div>
                <div className="border border-black p-2 text-center font-bold">PRISMA</div>
                <div className="border border-black p-2 text-center font-bold">DOCKER</div>
              </div>
            </div>

            <div className="space-y-3">
              <a href="mailto:jimmydef@outlook.fr" className="block text-center p-3 bg-red-700 text-white font-sans font-bold uppercase text-sm hover:bg-red-900 transition-colors">
                Send Inquiry →
              </a>
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block text-center p-3 border-2 border-black font-sans font-bold uppercase text-sm hover:bg-black hover:text-white transition-colors">
                View Portfolio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
