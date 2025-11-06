export default function About() {
  const skills = [
    { name: 'REACT', level: 90, color: 'from-cyan-500 to-blue-500' },
    { name: 'TYPESCRIPT', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'NEXT.JS', level: 88, color: 'from-indigo-500 to-purple-500' },
    { name: 'NODE.JS', level: 80, color: 'from-green-500 to-emerald-500' },
    { name: 'TAILWIND', level: 90, color: 'from-cyan-400 to-teal-500' },
    { name: 'PRISMA', level: 82, color: 'from-purple-500 to-pink-500' },
    { name: 'DOCKER', level: 75, color: 'from-blue-400 to-cyan-400' },
    { name: 'GIT', level: 85, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="about" className="min-h-screen p-8 bg-black text-white relative overflow-hidden">
      {/* Abstract shapes */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-pink-500 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500 to-blue-500 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-2 h-3 bg-gradient-to-r from-pink-500 to-purple-500 transform rotate-2" />
            <div className="col-span-8 flex items-center justify-center">
              <h2 className="text-7xl font-black">ABOUT</h2>
            </div>
            <div className="col-span-2 h-3 bg-gradient-to-l from-cyan-500 to-blue-500 transform -rotate-2" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 transform -rotate-1">
            <div className="bg-gradient-to-br from-purple-600/30 to-pink-600/30 backdrop-blur-sm border border-white/20 p-8">
              <div className="h-2 w-24 bg-gradient-to-r from-pink-500 to-transparent mb-6" />
              <p className="text-lg leading-relaxed mb-4">
                Full Stack Developer with a unique background in event management, bringing creativity and organizational excellence to software development.
              </p>
              <p className="text-sm text-gray-300">
                JavaScript React Developer certification (OpenClassrooms RNCP Niveau 6)
              </p>
            </div>
          </div>

          <div className="space-y-6 transform rotate-1">
            <div className="bg-gradient-to-br from-cyan-600/30 to-blue-600/30 backdrop-blur-sm border border-white/20 p-8">
              <div className="h-2 w-24 bg-gradient-to-r from-cyan-500 to-transparent mb-6" />
              <p className="text-lg leading-relaxed">
                Specializing in React, TypeScript, and Next.js. Creating intuitive user interfaces and high-performance applications that combine technical excellence with exceptional user experience.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-black mb-8 text-center">SKILLS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className={`transform ${i % 3 === 0 ? 'rotate-2' : i % 3 === 1 ? '-rotate-1' : 'rotate-1'} hover:rotate-0 hover:scale-105 transition-all`}
              >
                <div className="bg-black/80 border border-white/20 p-6">
                  <p className="font-black text-xl mb-4">{skill.name}</p>
                  <div className="h-3 bg-gray-800 relative overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-2">{skill.level}%</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 transform -rotate-2 hover:rotate-0 transition-transform">
            <p className="text-sm mb-2">LOCATION</p>
            <p className="text-2xl font-black">PARIS</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 p-6 transform rotate-1 hover:rotate-0 transition-transform">
            <p className="text-sm mb-2">AVAILABILITY</p>
            <p className="text-2xl font-black">IMMEDIATE</p>
          </div>
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 transform -rotate-1 hover:rotate-0 transition-transform">
            <p className="text-sm mb-2">WORK MODE</p>
            <p className="text-2xl font-black">REMOTE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
