export default function About() {
  const skills = [
    { name: 'React', level: 90, category: 'FRONTEND' },
    { name: 'TypeScript', level: 85, category: 'LANGUAGE' },
    { name: 'Next.js', level: 88, category: 'FRAMEWORK' },
    { name: 'Node.js', level: 80, category: 'BACKEND' },
    { name: 'Tailwind CSS', level: 90, category: 'STYLING' },
    { name: 'Git', level: 85, category: 'VERSION_CONTROL' },
    { name: 'Prisma', level: 82, category: 'DATABASE' },
    { name: 'Docker', level: 75, category: 'DEVOPS' },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400 font-mono border-2 border-green-500 inline-block px-8 py-4 ml-[50%] translate-x-[-50%] drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">
          {'>'} SYSTEM_INFO
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 border-2 border-green-500/30 p-6 bg-black/50 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono border-b border-green-500/30 pb-2">
              {'>'} BACKGROUND_PROCESS
            </h3>
            <div className="space-y-4 font-mono text-green-300 text-sm">
              <p className="leading-relaxed">
                <span className="text-green-500">{'> '}</span>
                PROFILE: FULL_STACK_DEVELOPER<br />
                <span className="text-green-500">{'> '}</span>
                PREVIOUS_SECTOR: EVENEMENTIEL<br />
                <span className="text-green-500">{'> '}</span>
                STATUS: CAREER_RECONVERSION_SUCCESS
              </p>
              <p className="leading-relaxed border-l-2 border-green-500 pl-4 bg-green-500/5">
                <span className="text-green-400 font-bold">CERTIFICATION_ACQUIRED:</span><br />
                <span className="text-green-300">└─ Développeur d'application JavaScript React</span><br />
                <span className="text-green-300">└─ OpenClassrooms (RNCP_NIVEAU_6)</span><br />
                <span className="text-green-300">└─ SPECIALIZATION: React • TypeScript • Next.js</span>
              </p>
              <p className="leading-relaxed">
                <span className="text-green-500">{'> '}</span>
                EXPERTISE: Modern web technologies<br />
                <span className="text-green-500">{'> '}</span>
                FOCUS: User-centric UI/UX • Performance optimization<br />
                <span className="text-green-500">{'> '}</span>
                PROJECTS: Showcase sites → Complex SaaS applications
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400 mb-4 font-mono border-b border-green-500/30 pb-2">
              {'>'} TECHNICAL_SKILLS
            </h3>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.name} className="border border-green-500/30 p-3 bg-black/50 hover:bg-green-500/5 transition-all">
                  <div className="flex justify-between mb-2 font-mono">
                    <span className="font-medium text-green-400">
                      [{skill.category}] {skill.name}
                    </span>
                    <span className="text-green-300">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1 bg-green-950 overflow-hidden relative">
                    <div
                      className="h-full bg-green-500 shadow-[0_0_10px_rgba(0,255,0,0.7)] transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/30 to-transparent animate-pulse" />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-black border-2 border-green-500 shadow-[0_0_30px_rgba(0,255,0,0.2)]">
              <div className="font-mono">
                <div className="text-xs text-green-500 mb-3 animate-pulse">
                  ▌CREDENTIAL_VERIFIED
                </div>
                <h4 className="font-semibold text-lg mb-2 text-green-400">
                  {'>'} FORMATION_DATA
                </h4>
                <p className="text-green-300 font-medium mb-1">
                  Développeur d'application JavaScript React
                </p>
                <p className="text-green-400/80 text-sm">
                  OpenClassrooms • RNCP Niveau 6 • CERTIFIED
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block border border-green-500/30 px-6 py-3 bg-green-500/5 font-mono text-green-400 text-sm">
            <span className="animate-pulse">▌</span> LOCATION: PARIS_ILE_DE_FRANCE • AVAILABILITY: IMMEDIATE • MODE: REMOTE_HYBRID
          </div>
        </div>
      </div>
    </section>
  );
}
