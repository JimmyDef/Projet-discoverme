export default function About() {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'React Query', 'Zustand', 'Tailwind CSS', 'Sass', 'Zod'],
    backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST API'],
    tools: ['Docker', 'AWS S3', 'Stripe', 'Sentry', 'Jest', 'React Testing Library', 'Git'],
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm rounded mb-4">
            <span className="text-sm font-mono text-cyan-400">{'<section>'}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            class <span className="text-cyan-400">Developer</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <div className="p-6 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:border-cyan-500/50 transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                <span className="text-cyan-400 font-mono">const</span> background ={' '}
                <span className="text-green-400">"Reconversion professionnelle depuis l'événementiel"</span>;
              </p>
              <p className="text-gray-400 leading-relaxed">
                Après avoir évolué dans l'événementiel, j'ai découvert ma véritable passion
                pour le développement web et l'architecture logicielle.
              </p>
            </div>

            <div className="p-6 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]">
              <p className="text-lg text-gray-300 leading-relaxed mb-2">
                <span className="text-pink-400 font-mono">diploma</span>: {'{'}
              </p>
              <div className="ml-4 space-y-1 text-gray-400">
                <p><span className="text-cyan-400">title</span>: "Développeur JavaScript React",</p>
                <p><span className="text-cyan-400">school</span>: "OpenClassrooms",</p>
                <p><span className="text-cyan-400">level</span>: "RNCP Niveau 6"</p>
              </div>
              <p className="text-lg text-gray-300">{'}'};</p>
            </div>

            <div className="p-6 border border-pink-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:border-pink-500/50 transition-all hover:shadow-[0_0_30px_rgba(236,72,153,0.1)]">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-pink-400 font-mono">focus</span>:{' '}
                <span className="text-green-400">"Applications SaaS full-stack complexes"</span>
              </p>
              <p className="text-gray-400 mt-2">
                Actuellement en développement d'une plateforme SaaS multi-tenant avec
                architecture complexe, paiements et infrastructure cloud.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 border border-cyan-500/30 bg-cyan-500/5 rounded text-center">
                <p className="text-xs font-mono text-cyan-400 mb-1">LOCATION</p>
                <p className="text-white font-semibold">Paris / IDF</p>
              </div>
              <div className="p-4 border border-green-500/30 bg-green-500/5 rounded text-center">
                <p className="text-xs font-mono text-green-400 mb-1">STATUS</p>
                <p className="text-green-400 font-semibold">Available</p>
              </div>
              <div className="p-4 border border-pink-500/30 bg-pink-500/5 rounded text-center">
                <p className="text-xs font-mono text-pink-400 mb-1">MODE</p>
                <p className="text-white font-semibold">Remote/Hybrid</p>
              </div>
              <div className="p-4 border border-cyan-500/30 bg-cyan-500/5 rounded text-center">
                <p className="text-xs font-mono text-cyan-400 mb-1">EMAIL</p>
                <p className="text-white font-semibold text-xs">jimmydef@</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 border border-cyan-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-cyan-400 font-mono">interface</span>
                <span className="text-white font-bold">Frontend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-400 text-sm font-mono hover:bg-cyan-500/20 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-green-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-green-400 font-mono">class</span>
                <span className="text-white font-bold">Backend</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-500/10 border border-green-500/30 rounded text-green-400 text-sm font-mono hover:bg-green-500/20 hover:shadow-[0_0_10px_rgba(74,222,128,0.3)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 border border-pink-500/20 bg-gray-900/50 backdrop-blur-sm rounded-lg">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-pink-400 font-mono">const</span>
                <span className="text-white font-bold">DevOps & Tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-pink-500/10 border border-pink-500/30 rounded text-pink-400 text-sm font-mono hover:bg-pink-500/20 hover:shadow-[0_0_10px_rgba(236,72,153,0.3)] transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
