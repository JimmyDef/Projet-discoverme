'use client';

export default function GlassmorphismPortfolio() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      {/* Floating Blobs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" />
      <div className="absolute top-40 right-20 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-40 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Main Card */}
        <div className="backdrop-blur-2xl bg-white/20 rounded-3xl p-8 md:p-12 border border-white/30 shadow-2xl max-w-4xl w-full">
          <div className="text-center mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl border border-white/30 flex items-center justify-center text-6xl">
              👨‍💻
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{textShadow: '0 2px 20px rgba(0,0,0,0.2)'}}>
              Glassmorphism
            </h1>
            <p className="text-xl text-white/90">
              Développeur Full Stack • Design iOS Inspired
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: '⚛️', name: 'React', level: '90%' },
              { icon: '📘', name: 'TypeScript', level: '85%' },
              { icon: '▲', name: 'Next.js', level: '85%' },
            ].map((skill) => (
              <div
                key={skill.name}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{skill.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2">{skill.name}</h3>
                <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white/80 rounded-full" style={{width: skill.level}} />
                </div>
              </div>
            ))}
          </div>

          {/* Projects */}
          <div className="space-y-4 mb-8">
            {[
              { title: 'E-Commerce Platform', tags: ['React', 'Node.js'] },
              { title: 'Design System', tags: ['TypeScript', 'Storybook'] },
              { title: 'Dashboard Analytics', tags: ['Next.js', 'Charts'] },
            ].map((project, index) => (
              <div
                key={index}
                className="backdrop-blur-xl bg-white/10 rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-white font-bold text-xl mb-2">{project.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/20 backdrop-blur-xl rounded-full text-sm text-white font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="px-8 py-3 bg-white/30 backdrop-blur-xl text-white font-bold rounded-2xl hover:bg-white/40 transition-all duration-300 border border-white/30">
              View Projects
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Contact Me
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-8 text-white/80 text-sm">
          Inspired by iOS • Crafted with React & Tailwind
        </p>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
