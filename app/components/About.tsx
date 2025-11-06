export default function About() {
  return (
    <section id="about" className="min-h-screen p-8 bg-white text-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[100px] font-black uppercase leading-none mb-12 border-b-8 border-black pb-4">ABOUT</h2>

        <div className="grid grid-cols-2 gap-8 mb-8">
          <div className="border-8 border-black p-8">
            <p className="text-5xl font-black uppercase mb-6 leading-tight">FULL STACK DEVELOPER</p>
            <div className="space-y-4 text-2xl font-bold">
              <p>→ CAREER TRANSITION FROM EVENT MANAGEMENT TO WEB DEVELOPMENT</p>
              <p>→ JAVASCRIPT REACT DEVELOPER CERTIFICATION (OPENCLASSROOMS RNCP NIVEAU 6)</p>
              <p>→ SPECIALIZING IN MODERN WEB TECHNOLOGIES</p>
              <p>→ CREATING INTUITIVE UIS AND HIGH-PERFORMANCE APPLICATIONS</p>
            </div>
          </div>

          <div className="border-8 border-black p-8 bg-yellow-300">
            <p className="text-5xl font-black uppercase mb-6">SKILLS</p>
            <div className="space-y-3">
              {['REACT 90%', 'TYPESCRIPT 85%', 'NEXT.JS 88%', 'NODE.JS 80%', 'TAILWIND 90%', 'PRISMA 82%', 'DOCKER 75%', 'GIT 85%'].map(skill => (
                <div key={skill} className="border-4 border-black p-4 bg-white">
                  <p className="text-2xl font-black uppercase">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="border-8 border-black p-12 bg-black text-white">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-6xl font-black mb-2">📍</p>
              <p className="text-3xl font-black uppercase">PARIS</p>
              <p className="text-xl font-bold">ÎLE-DE-FRANCE</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">💼</p>
              <p className="text-3xl font-black uppercase">AVAILABLE</p>
              <p className="text-xl font-bold">IMMEDIATELY</p>
            </div>
            <div>
              <p className="text-6xl font-black mb-2">🌐</p>
              <p className="text-3xl font-black uppercase">REMOTE</p>
              <p className="text-xl font-bold">HYBRID</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
