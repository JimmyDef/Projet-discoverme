export default function About() {
  return (
    <section id="about" className="min-h-screen p-4 bg-[#306230] text-[#9bbc0f] font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="border-8 border-[#8bac0f] bg-[#0f380f] p-8">
          <h2 className="text-4xl font-black text-center mb-8 border-b-4 border-[#8bac0f] pb-4">▸ CHARACTER STATS ◂</h2>
          <div className="space-y-6 mb-8">
            <p className="text-sm leading-relaxed">
              ▸ Full Stack Developer with unique background in event management<br />
              ▸ JavaScript React Developer certification (OpenClassrooms RNCP Niveau 6)<br />
              ▸ Specializing in React, TypeScript, and Next.js<br />
              ▸ Creating intuitive UIs and high-performance applications
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { name: 'REACT', level: 90 },
              { name: 'TYPESCRIPT', level: 85 },
              { name: 'NEXT.JS', level: 88 },
              { name: 'NODE.JS', level: 80 },
              { name: 'TAILWIND', level: 90 },
              { name: 'PRISMA', level: 82 },
              { name: 'DOCKER', level: 75 },
              { name: 'GIT', level: 85 },
            ].map(skill => (
              <div key={skill.name} className="border-4 border-[#8bac0f] p-4 bg-[#306230]">
                <p className="text-sm mb-2">{skill.name}</p>
                <div className="flex gap-1">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <span key={i} className="text-xs">{i < skill.level / 10 ? '█' : '░'}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 border-4 border-[#9bbc0f] bg-[#0f380f] text-center">
            <p className="text-sm">
              📍 PARIS • 💼 AVAILABLE • 🌐 REMOTE/HYBRID
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
