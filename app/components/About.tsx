export default function About() {
  return (
    <section id="about" className="min-h-screen p-6 bg-gradient-to-br from-pink-300 via-purple-300 to-blue-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-6xl font-black text-center mb-12 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About</h2>
        <div className="bg-white/25 backdrop-blur-2xl border border-white/40 rounded-3xl p-12 shadow-2xl">
          <p className="text-lg text-gray-800 leading-relaxed mb-8">Full Stack Developer with a unique background in event management. JavaScript React Developer certification from OpenClassrooms (RNCP Niveau 6). Specializing in React, TypeScript, and Next.js.</p>
          <div className="grid grid-cols-2 gap-4">
            {['React 90%', 'TypeScript 85%', 'Next.js 88%', 'Node.js 80%', 'Tailwind 90%', 'Prisma 82%', 'Docker 75%', 'Git 85%'].map(skill => (
              <div key={skill} className="bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl p-4">
                <p className="font-bold text-gray-800">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
