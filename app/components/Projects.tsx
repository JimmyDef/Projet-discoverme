export default function Projects() {
  const projects = [
    { title: 'QRPLANS', tech: 'Next.js • React • TypeScript', desc: 'Multi-tenant SaaS • 3 Databases • Stripe • AWS', private: true, color: 'from-purple-600 via-pink-600 to-red-600' },
    { title: 'WEALTHHEALTH', tech: 'React • Redux • TypeScript', url: 'https://github.com/JimmyDef/Projet-WealthHealth', color: 'from-blue-600 via-cyan-600 to-teal-600' },
    { title: 'ARGENTBANK', tech: 'React • JWT • Swagger', url: 'https://github.com/JimmyDef/Projet-argentBank', color: 'from-green-600 via-emerald-600 to-lime-600' },
    { title: 'SPORTSEE', tech: 'React • Recharts', url: 'https://github.com/JimmyDef/Projet-SportSee', color: 'from-orange-600 via-amber-600 to-yellow-600' },
    { title: 'LES PETITS PLATS', tech: 'JavaScript • HTML5', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats', color: 'from-pink-600 via-rose-600 to-purple-600' },
  ];

  return (
    <section id="projects" className="min-h-screen p-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Abstract background shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-gradient-to-tl from-pink-500 to-purple-500 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-2 w-32 bg-gradient-to-r from-pink-500 to-transparent" />
            <h2 className="text-6xl font-black">PROJECTS</h2>
            <div className="h-2 flex-1 bg-gradient-to-l from-cyan-500 to-transparent" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`relative group transform ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-all duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60 blur-2xl group-hover:blur-xl transition-all`} />
              <div className="relative bg-black/80 backdrop-blur-sm border border-white/20 p-8">
                <div className="mb-4">
                  {project.private && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black mb-3">
                      PRIVATE
                    </span>
                  )}
                  <h3 className="text-4xl font-black mb-2 tracking-tight">{project.title}</h3>
                  <div className="h-1 w-20 bg-gradient-to-r from-white to-transparent mb-4" />
                </div>

                <p className="text-sm text-gray-300 mb-2">{project.tech}</p>
                {project.desc && <p className="text-xs text-gray-400 mb-6">{project.desc}</p>}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 bg-white text-black font-black text-sm hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 hover:text-white transition-all"
                  >
                    VIEW PROJECT →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 text-white font-black text-xl hover:scale-105 transition-transform"
          >
            ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}
