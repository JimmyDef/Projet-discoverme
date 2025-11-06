export default function Projects() {
  const projects = [
    { title: 'QRPlans SaaS Platform', desc: 'Multi-tenant application with 3 databases, payment systems, cloud storage', tech: 'Next.js 16, React 19, TypeScript, Prisma', isPrivate: true },
    { title: 'WealthHealth', desc: 'jQuery to React migration. Published NPM package for reusable components.', tech: 'React, Redux Toolkit, TypeScript', url: 'https://github.com/JimmyDef/Projet-WealthHealth' },
    { title: 'ArgentBank', desc: 'Banking application with JWT authentication and API integration via Redux RTK Query.', tech: 'React, Redux, JWT, Swagger', url: 'https://github.com/JimmyDef/Projet-argentBank' },
    { title: 'SportSee Dashboard', desc: 'Sports tracking application with interactive data visualizations using Recharts.', tech: 'React, Recharts, TypeScript', url: 'https://github.com/JimmyDef/Projet-SportSee' },
    { title: 'Les Petits Plats', desc: 'Recipe filtering application with advanced search algorithms in vanilla JavaScript.', tech: 'JavaScript, HTML5, CSS3', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats' },
  ];

  return (
    <section id="projects" className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-7xl mx-auto border-4 border-black bg-white">
        <div className="border-b-4 border-black p-6 bg-white">
          <h2 className="text-5xl font-serif font-bold text-center" style={{ fontFamily: 'Times New Roman, serif' }}>PROJECT PORTFOLIO</h2>
          <p className="text-center font-serif italic text-sm mt-2">A Comprehensive Review of Recent Work</p>
        </div>

        <div className="grid grid-cols-2 gap-8 p-8">
          {projects.map((project, idx) => (
            <article key={idx} className="border-2 border-black p-6 bg-white hover:shadow-lg transition-shadow">
              <div className="mb-3">
                {project.isPrivate && <span className="inline-block px-2 py-1 bg-black text-white text-xs font-sans uppercase mb-2">Confidential</span>}
                <h3 className="text-2xl font-serif font-bold mb-2" style={{ fontFamily: 'Times New Roman, serif' }}>{project.title}</h3>
                <p className="text-xs font-sans text-gray-600 mb-3 uppercase tracking-wider">Project Report</p>
              </div>
              <p className="font-serif text-sm leading-relaxed mb-4 text-justify" style={{ fontFamily: 'Georgia, serif' }}>{project.desc}</p>
              <p className="text-xs font-sans text-gray-700 mb-4"><strong>Technologies:</strong> {project.tech}</p>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="inline-block text-sm font-sans font-bold border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                  View Code →
                </a>
              )}
            </article>
          ))}
        </div>

        <div className="border-t-4 border-black p-8 text-center bg-gray-100">
          <p className="font-serif mb-4 italic">For a complete list of projects and contributions</p>
          <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-black text-white font-sans font-bold uppercase hover:bg-gray-800 transition-colors">
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}
