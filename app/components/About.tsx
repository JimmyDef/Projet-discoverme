'use client';

import { useEffect, useState } from 'react';

export default function About() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'React', level: 90, category: 'Frontend', color: 'from-cyan-500 to-blue-500' },
    { name: 'TypeScript', level: 85, category: 'Language', color: 'from-blue-500 to-indigo-500' },
    { name: 'Next.js', level: 88, category: 'Framework', color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', level: 80, category: 'Backend', color: 'from-green-500 to-emerald-500' },
    { name: 'Tailwind CSS', level: 90, category: 'Styling', color: 'from-teal-500 to-cyan-500' },
    { name: 'Prisma', level: 82, category: 'Database', color: 'from-indigo-500 to-purple-500' },
    { name: 'Docker', level: 75, category: 'DevOps', color: 'from-blue-600 to-cyan-600' },
    { name: 'Git', level: 85, category: 'Version Control', color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section
      id="about"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Parallax background layers */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateZ(${scrollY * -0.5}px) translateY(${scrollY * 0.3}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-tl from-purple-500/30 to-pink-500/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2
          className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
          style={{
            transform: `translateZ(${scrollY * -0.1}px)`,
            transformStyle: 'preserve-3d',
          }}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Story card with 3D effect */}
          <div
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            style={{
              transform: `translateZ(${scrollY * -0.15}px) rotateY(-5deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">👨‍💻</span>
              My Journey
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span>{' '}
                with a unique background in event management, bringing a fresh perspective to web
                development.
              </p>
              <p>
                Successfully completed a career transition by earning my{' '}
                <span className="text-purple-400 font-semibold">
                  JavaScript React Developer certification
                </span>{' '}
                from OpenClassrooms (RNCP Level 6).
              </p>
              <p>
                Specializing in modern web technologies with expertise in React, TypeScript, and
                Next.js, I create intuitive user interfaces and high-performance applications.
              </p>
              <p>
                Currently working on diverse projects ranging from showcase websites to complex SaaS
                applications with advanced features.
              </p>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-xl">
              <p className="text-white font-semibold text-center">
                📍 Paris, Île-de-France • 💼 Available Immediately • 🌐 Remote/Hybrid
              </p>
            </div>
          </div>

          {/* Education card */}
          <div
            className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 rounded-3xl p-8 shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            style={{
              transform: `translateZ(${scrollY * -0.15}px) rotateY(5deg)`,
              transformStyle: 'preserve-3d',
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-4xl">🎓</span>
              Education & Background
            </h3>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-2xl">
                    🏆
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">
                      JavaScript React Developer
                    </h4>
                    <p className="text-purple-300 font-semibold">OpenClassrooms</p>
                    <p className="text-sm text-slate-400">RNCP Level 6 • Certified</p>
                  </div>
                </div>
                <div className="pl-16">
                  <p className="text-sm text-slate-300">
                    Comprehensive training in modern web development, focusing on React ecosystem,
                    TypeScript, and full-stack development best practices.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center text-2xl">
                    🔄
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-1">Career Transition</h4>
                    <p className="text-emerald-300 font-semibold">From Events to Tech</p>
                    <p className="text-sm text-slate-300 mt-2">
                      Leveraging organizational skills and client-focused mindset from event
                      management to deliver exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills grid with 3D cards */}
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-center text-white mb-12">Technical Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-xl hover:scale-110 transition-all duration-300 cursor-pointer"
                style={{
                  transform: `translateZ(${index * 10}px)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="text-center">
                  <p className="text-xs text-slate-400 mb-2">{skill.category}</p>
                  <h4 className="text-xl font-bold text-white mb-4">{skill.name}</h4>

                  {/* Circular progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                        fill="none"
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        className={`bg-gradient-to-r ${skill.color}`}
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 40}`}
                        strokeDashoffset={`${2 * Math.PI * 40 * (1 - skill.level / 100)}`}
                        strokeLinecap="round"
                        style={{
                          stroke: `rgb(${skill.level > 85 ? '59, 130, 246' : skill.level > 80 ? '139, 92, 246' : '168, 85, 247'})`,
                          transition: 'stroke-dashoffset 1s ease-out',
                        }}
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{skill.level}%</span>
                    </div>
                  </div>

                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} transition-all duration-1000 group-hover:animate-pulse`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
