'use client';

export default function BrutalistPortfolio() {
  return (
    <div className="min-h-screen bg-white text-black p-4 md:p-8" style={{fontFamily: 'Arial, Helvetica, sans-serif'}}>
      <div className="max-w-7xl mx-auto">
        {/* Harsh Header */}
        <header className="border-8 border-black p-6 mb-6 bg-yellow-400">
          <h1 className="text-6xl md:text-9xl font-black uppercase mb-2" style={{lineHeight: '0.9'}}>
            BRUTAL<br />DESIGN
          </h1>
          <p className="text-2xl font-bold uppercase">
            NO BS • JUST CODE • RAW TALENT
          </p>
        </header>

        {/* Warning Banner */}
        <div className="bg-black text-yellow-400 p-4 border-4 border-black mb-6 text-center font-bold text-xl animate-pulse">
          ⚠️ WARNING: EXTREMELY HONEST PORTFOLIO AHEAD ⚠️
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* About */}
          <div className="border-8 border-black p-6 bg-red-500 text-white">
            <h2 className="text-4xl font-black uppercase mb-4 border-b-4 border-white pb-2">
              WHO AM I?
            </h2>
            <p className="text-xl font-bold mb-4">
              A DEVELOPER WHO DOESN'T WASTE YOUR TIME
            </p>
            <p className="text-lg">
              React • TypeScript • Next.js<br />
              RNCP Level 6 Certified<br />
              Based in Paris, France<br />
              Available for Work: YES
            </p>
          </div>

          {/* Skills */}
          <div className="border-8 border-black p-6 bg-blue-600 text-white">
            <h2 className="text-4xl font-black uppercase mb-4 border-b-4 border-white pb-2">
              WHAT I DO
            </h2>
            <ul className="space-y-2 text-xl font-bold">
              <li className="flex items-center gap-2">
                <span className="text-3xl">▶</span> REACT DEVELOPMENT
              </li>
              <li className="flex items-center gap-2">
                <span className="text-3xl">▶</span> TYPESCRIPT EXPERT
              </li>
              <li className="flex items-center gap-2">
                <span className="text-3xl">▶</span> NEXT.JS APPS
              </li>
              <li className="flex items-center gap-2">
                <span className="text-3xl">▶</span> API INTEGRATION
              </li>
            </ul>
          </div>
        </div>

        {/* Projects Strip */}
        <div className="border-8 border-black p-6 mb-6 bg-green-500">
          <h2 className="text-5xl font-black uppercase mb-6 text-center">
            PROJECTS (THE GOOD STUFF)
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { num: '01', title: 'E-COMMERCE', tech: 'REACT+NODE' },
              { num: '02', title: 'DESIGN SYSTEM', tech: 'TYPESCRIPT' },
              { num: '03', title: 'DASHBOARD', tech: 'NEXT.JS' },
            ].map((project) => (
              <div
                key={project.num}
                className="border-4 border-black p-6 bg-white hover:bg-black hover:text-white transition-colors cursor-pointer"
              >
                <div className="text-6xl font-black mb-2">{project.num}</div>
                <h3 className="text-2xl font-black mb-2">{project.title}</h3>
                <p className="text-lg font-bold">{project.tech}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {[
            { num: '15+', label: 'PROJECTS' },
            { num: '3', label: 'YEARS EXP' },
            { num: '500+', label: 'COMMITS' },
            { num: '100%', label: 'HONEST' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="border-8 border-black p-6 bg-yellow-400 text-center"
            >
              <div className="text-5xl font-black mb-2">{stat.num}</div>
              <div className="text-xl font-black">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="border-8 border-black p-8 bg-black text-white text-center">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-6">
            NEED A DEVELOPER?
          </h2>
          <p className="text-2xl font-bold mb-8">
            STOP LOOKING. YOU FOUND ONE.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="px-12 py-6 bg-red-500 text-white text-2xl font-black uppercase border-4 border-white hover:bg-red-600 transition-colors">
              HIRE ME NOW
            </button>
            <button className="px-12 py-6 bg-blue-500 text-white text-2xl font-black uppercase border-4 border-white hover:bg-blue-600 transition-colors">
              VIEW GITHUB
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-6 border-4 border-black p-4 text-center bg-yellow-400">
          <p className="text-xl font-black uppercase">
            © 2025 • NO COPYRIGHT • DO WHATEVER YOU WANT
          </p>
        </footer>
      </div>
    </div>
  );
}
