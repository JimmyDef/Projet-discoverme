export default function Projects() {
  const projects = [
    {
      title: 'QRPlans SaaS',
      tech: 'Next.js 14 • React • TypeScript • Prisma • PostgreSQL',
      desc: 'Multi-tenant SaaS platform with 3 databases architecture. Integrated Stripe & PayPal payments, AWS S3 storage, BullMQ job processing, Redis caching, and real-time updates.',
      features: ['Multi-tenant architecture', 'Payment integration', 'Cloud storage', 'Job queue processing', 'Real-time updates'],
      private: true,
      color: 'from-purple-600 to-pink-600',
    },
    {
      title: 'WealthHealth',
      tech: 'React • Redux • TypeScript • React Table',
      desc: 'Internal web application for HR department to manage employee records. Features advanced data table with sorting, filtering, and pagination.',
      url: 'https://github.com/JimmyDef/Projet-WealthHealth',
      color: 'from-cyan-600 to-blue-600',
    },
    {
      title: 'ArgentBank',
      tech: 'React • Redux • JWT • Swagger • REST API',
      desc: 'Banking application with authentication system. Secure JWT-based authentication, user profile management, and transaction viewing.',
      url: 'https://github.com/JimmyDef/Projet-argentBank',
      color: 'from-green-600 to-emerald-600',
    },
    {
      title: 'SportSee',
      tech: 'React • Recharts • D3.js • REST API',
      desc: 'Sports analytics dashboard with advanced data visualization. Multiple chart types including bar charts, line graphs, radar charts, and radial charts.',
      url: 'https://github.com/JimmyDef/Projet-SportSee',
      color: 'from-orange-600 to-yellow-600',
    },
    {
      title: 'Les Petits Plats',
      tech: 'JavaScript • HTML5 • CSS3 • Algorithms',
      desc: 'Recipe search engine with advanced filtering. Implements optimized search algorithms for fast real-time filtering across multiple criteria.',
      url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
      color: 'from-pink-600 to-red-600',
    },
  ];

  return (
    <section id="projects" className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-black mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            PROJECTS
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 mx-auto mb-6" />
          <p className="text-xl text-gray-400">Explore my work in the 3D gallery above or browse details below</p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl p-8 hover:border-white/30 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className={`text-3xl font-black bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                      {project.title}
                    </h3>
                    {project.private && (
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black rounded">
                        PRIVATE
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-cyan-400 mb-4 font-mono">{project.tech}</p>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.desc}</p>

                  {project.features && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs text-gray-300"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-block px-6 py-3 bg-gradient-to-r ${project.color} font-bold text-sm rounded-lg hover:scale-105 transition-transform`}
                    >
                      VIEW ON GITHUB →
                    </a>
                  )}
                </div>

                <div className={`w-32 h-32 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl font-black text-white/20`}>
                  {i + 1}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-xl rounded-lg hover:scale-105 transition-transform"
          >
            VIEW ALL ON GITHUB
          </a>
        </div>
      </div>
    </section>
  );
}
