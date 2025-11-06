export default function About() {
  const skills = [
    { name: 'React', level: 90, color: 'from-cyan-500 to-blue-500', category: 'Frontend' },
    { name: 'TypeScript', level: 85, color: 'from-blue-500 to-indigo-500', category: 'Language' },
    { name: 'Next.js', level: 88, color: 'from-gray-700 to-gray-900', category: 'Framework' },
    { name: 'Node.js', level: 80, color: 'from-green-500 to-emerald-600', category: 'Backend' },
    { name: 'Tailwind CSS', level: 90, color: 'from-cyan-400 to-teal-500', category: 'Styling' },
    { name: 'Prisma', level: 82, color: 'from-purple-500 to-pink-500', category: 'Database' },
    { name: 'Docker', level: 75, color: 'from-blue-400 to-cyan-400', category: 'DevOps' },
    { name: 'Git', level: 85, color: 'from-orange-500 to-red-500', category: 'Tools' },
  ];

  const experience = [
    {
      role: 'Full Stack Developer',
      type: 'Personal Project',
      project: 'QRPlans SaaS',
      period: '2024',
      description: 'Developed a complete multi-tenant SaaS platform from scratch with modern architecture.',
      achievements: [
        'Implemented multi-tenant database architecture',
        'Integrated payment systems (Stripe & PayPal)',
        'Built real-time features with BullMQ and Redis',
        'Deployed on cloud infrastructure',
      ],
    },
    {
      role: 'React Developer',
      type: 'Certification Projects',
      project: 'OpenClassrooms',
      period: '2023-2024',
      description: 'Completed intensive React Developer certification (RNCP Level 6) with multiple professional-grade projects.',
      achievements: [
        'Built 5+ production-ready applications',
        'Mastered React, Redux, and TypeScript',
        'Implemented REST APIs and authentication',
        'Created data visualizations with D3.js',
      ],
    },
  ];

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            ABOUT ME
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mb-6" />
        </div>

        {/* Profile */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          <div className="backdrop-blur-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/10 rounded-xl p-10">
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mb-6" />
            <h3 className="text-4xl font-black mb-6">Profile</h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              Full Stack Developer with a unique background in event management, bringing <strong className="text-cyan-400">creativity</strong> and <strong className="text-cyan-400">organizational excellence</strong> to software development.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              Passionate about creating <strong className="text-pink-400">innovative web experiences</strong> that combine cutting-edge technology with exceptional user experience.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-cyan-400 font-semibold">
                🎓 JavaScript React Developer Certification
              </p>
              <p className="text-sm text-gray-400">OpenClassrooms • RNCP Niveau 6</p>
            </div>
          </div>

          <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-white/10 rounded-xl p-10">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6" />
            <h3 className="text-4xl font-black mb-6">Expertise</h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              Specializing in <strong className="text-cyan-400">React</strong>, <strong className="text-cyan-400">TypeScript</strong>, and <strong className="text-cyan-400">Next.js</strong>. Expert in building modern, scalable web applications.
            </p>
            <p className="text-lg leading-relaxed text-gray-300">
              From <strong className="text-pink-400">full-stack SaaS platforms</strong> to <strong className="text-pink-400">interactive 3D experiences</strong>, I bring ideas to life with clean, maintainable code.
            </p>
            <div className="mt-6 pt-6 border-t border-white/20 space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📍</span>
                <span className="text-gray-300">Paris, Île-de-France</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💼</span>
                <span className="text-gray-300">Available • Immediate</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🌐</span>
                <span className="text-gray-300">Remote • Hybrid</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h3 className="text-4xl font-black text-center mb-12">TECHNICAL SKILLS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-6 hover:border-white/30 transition-all hover:scale-105"
              >
                <div className="flex justify-between items-start mb-4">
                  <p className="font-black text-xl">{skill.name}</p>
                  <span className="text-xs px-2 py-1 bg-white/10 rounded">{skill.category}</span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-2">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 text-right">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <h3 className="text-4xl font-black text-center mb-12">EXPERIENCE</h3>
          <div className="space-y-8">
            {experience.map((exp, i) => (
              <div
                key={i}
                className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h4 className="text-3xl font-black mb-2 bg-gradient-to-r from-pink-500 to-cyan-500 bg-clip-text text-transparent">
                      {exp.role}
                    </h4>
                    <p className="text-lg text-cyan-400 mb-1">{exp.project}</p>
                    <p className="text-sm text-gray-400">{exp.type}</p>
                  </div>
                  <span className="text-sm px-4 py-2 bg-white/10 border border-white/20 rounded-full text-gray-300 mt-4 lg:mt-0 inline-block">
                    {exp.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▸</span>
                      <span className="text-gray-300">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
