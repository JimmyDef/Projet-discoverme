export default function Projects() {
  const projects = [
    { title: 'QRPLANS', tech: 'Next.js • React • TypeScript', rare: 'LEGENDARY', private: true },
    { title: 'WEALTHHEALTH', tech: 'React • Redux • TypeScript', rare: 'RARE', url: 'https://github.com/JimmyDef/Projet-WealthHealth' },
    { title: 'ARGENTBANK', tech: 'React • JWT • Swagger', rare: 'RARE', url: 'https://github.com/JimmyDef/Projet-argentBank' },
    { title: 'SPORTSEE', tech: 'React • Recharts', rare: 'UNCOMMON', url: 'https://github.com/JimmyDef/Projet-SportSee' },
    { title: 'LES PETITS PLATS', tech: 'JavaScript • HTML5', rare: 'UNCOMMON', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats' },
  ];

  return (
    <section id="projects" className="min-h-screen p-4 bg-[#0f380f] text-[#9bbc0f] font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="border-8 border-[#306230] bg-[#0f380f] p-8">
          <h2 className="text-4xl font-black text-center mb-12 border-b-4 border-[#8bac0f] pb-4">▸ PROJECT INVENTORY ◂</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div key={i} className="border-4 border-[#8bac0f] p-6 bg-[#306230] hover:bg-[#0f380f] transition-colors">
                {p.private && <span className="inline-block px-2 py-1 bg-[#9bbc0f] text-[#0f380f] text-xs font-black mb-2">LOCKED</span>}
                <p className="text-xs mb-2 text-[#8bac0f]">[{p.rare}]</p>
                <h3 className="text-xl font-black mb-3">{p.title}</h3>
                <p className="text-xs mb-4">{p.tech}</p>
                {p.url && <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-[#8bac0f] text-[#0f380f] border-2 border-[#9bbc0f] text-sm font-black hover:bg-[#9bbc0f]">► OPEN</a>}
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="inline-block px-12 py-4 bg-[#8bac0f] text-[#0f380f] border-4 border-[#9bbc0f] text-xl font-black hover:bg-[#9bbc0f]">
              ► ALL PROJECTS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
