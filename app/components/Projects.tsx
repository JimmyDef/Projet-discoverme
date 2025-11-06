export default function Projects() {
  const projects = [
    { title: 'QRPlans', tech: 'Next.js • React • TypeScript • Prisma', private: true },
    { title: 'WealthHealth', tech: 'React • Redux • TypeScript', url: 'https://github.com/JimmyDef/Projet-WealthHealth' },
    { title: 'ArgentBank', tech: 'React • Redux • JWT', url: 'https://github.com/JimmyDef/Projet-argentBank' },
    { title: 'SportSee', tech: 'React • Recharts • TypeScript', url: 'https://github.com/JimmyDef/Projet-SportSee' },
    { title: 'Les Petits Plats', tech: 'JavaScript • HTML • CSS', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats' },
  ];

  return (
    <section id="projects" className="min-h-screen p-6 bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-6xl font-black text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="bg-white/25 backdrop-blur-2xl border border-white/40 rounded-3xl p-6 hover:bg-white/35 transition-all shadow-xl">
              {p.private && <span className="inline-block px-3 py-1 bg-yellow-400/80 rounded-full text-xs font-bold text-gray-800 mb-3">Private</span>}
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{p.title}</h3>
              <p className="text-sm text-gray-700 mb-4">{p.tech}</p>
              {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-white/40 backdrop-blur-xl border border-white/50 rounded-xl text-sm font-bold text-gray-800 hover:bg-white/60 transition-all">View →</a>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
