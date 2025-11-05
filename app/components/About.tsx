'use client';

export default function About() {
  const skills = [
    { name: 'React', level: 90 }, { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 88 }, { name: 'Node.js', level: 80 },
    { name: 'Tailwind', level: 90 }, { name: 'Prisma', level: 82 },
    { name: 'Docker', level: 75 }, { name: 'Git', level: 85 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-purple-900 via-pink-900 to-purple-900 relative overflow-hidden">
      <div className="scanlines" />

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-6xl md:text-7xl font-black text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-cyan-400 tracking-wider" style={{ fontFamily: 'Impact, fantasy' }}>
          ABOUT.SYS
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gradient-to-r from-cyan-500 to-pink-500 p-1">
            <div className="bg-purple-950 p-8">
              <h3 className="text-3xl font-black text-yellow-400 mb-6">PROFILE.TXT</h3>
              <div className="space-y-4 text-cyan-300 font-mono text-sm">
                <p>{'>'} Full Stack Developer with a unique background in event management.</p>
                <p>{'>'} JavaScript React Developer certification from OpenClassrooms (RNCP Level 6).</p>
                <p>{'>'} Specializing in modern web technologies: React, TypeScript, Next.js.</p>
                <p>{'>'} Creating intuitive UIs and high-performance applications.</p>
              </div>
              <div className="mt-6 p-4 bg-cyan-500 text-purple-900 font-black">
                📍 PARIS • 💼 AVAILABLE • 🌐 REMOTE/HYBRID
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-cyan-500 p-1">
            <div className="bg-purple-950 p-8">
              <h3 className="text-3xl font-black text-yellow-400 mb-6">SKILLS.DAT</h3>
              <div className="space-y-3">
                {skills.map(skill => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-cyan-400 font-mono font-bold">{skill.name}</span>
                      <span className="text-pink-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-purple-900 border-2 border-cyan-500">
                      <div className="h-full bg-gradient-to-r from-cyan-400 to-pink-500" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
