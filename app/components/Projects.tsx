'use client';

export default function Projects() {
  const projects = [
    { title: 'QRPlans', tech: 'Next.js • React • TypeScript • Prisma • Stripe', year: '2024', isPrivate: true },
    { title: 'WealthHealth', tech: 'React • Redux Toolkit • TypeScript', year: '2024', url: 'https://github.com/JimmyDef/Projet-WealthHealth' },
    { title: 'ArgentBank', tech: 'React • Redux • JWT • Swagger', year: '2024', url: 'https://github.com/JimmyDef/Projet-argentBank' },
    { title: 'SportSee', tech: 'React • Recharts • TypeScript', year: '2023', url: 'https://github.com/JimmyDef/Projet-SportSee' },
    { title: 'Les Petits Plats', tech: 'JavaScript • HTML5 • CSS3', year: '2023', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats' },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-gradient-to-b from-purple-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="scanlines" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400 tracking-wider" style={{ fontFamily: 'Impact, fantasy' }}>
          PROJECTS.EXE
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-gradient-to-r from-cyan-500 to-pink-500 p-1 hover:scale-105 transition-all" style={{ animation: `float ${3 + idx * 0.3}s ease-in-out infinite` }}>
              <div className="bg-purple-950 p-6 h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-yellow-400 font-mono text-sm">[{project.year}]</span>
                  {project.isPrivate && <span className="px-2 py-1 bg-pink-500 text-purple-900 text-xs font-black">PRIVATE</span>}
                </div>
                <h3 className="text-2xl font-black text-cyan-400 mb-3 tracking-wider">{project.title}</h3>
                <p className="text-pink-300 text-sm font-mono mb-4">{project.tech}</p>
                {project.url && (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-cyan-500 text-purple-900 font-black hover:bg-pink-500 transition-colors">
                    VIEW CODE
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-6 bg-gradient-to-r from-pink-500 to-cyan-500 text-purple-900 font-black text-2xl border-4 border-yellow-400 hover:scale-110 transition-all">
            ALL PROJECTS →
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-10px) scale(1.02); }
        }
        .scanlines {
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1) 1px, transparent 1px, transparent 2px);
          pointer-events: none;
        }
      `}</style>
    </section>
  );
}
