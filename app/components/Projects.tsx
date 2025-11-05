'use client';

interface Project {
  title: string;
  year: string;
  description: string;
  technologies: string[];
  highlights?: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  isFeatured?: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'QRPlans',
      year: '2024-2025',
      description: 'Application SaaS full-stack multi-tenant. Système complexe avec 3 bases de données, paiements (Stripe & PayPal), génération de PDF, cartes interactives, job queue, et monitoring temps réel.',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Zustand',
        'React Query',
        'NextAuth v5',
        'Stripe',
        'PayPal',
        'AWS S3',
        'Leaflet',
        'BullMQ',
        'Redis',
        'Sentry',
        'Docker',
      ],
      highlights: [
        '3 bases de données Prisma (multi-schema)',
        'Paiements récurrents Stripe & PayPal',
        'Génération dynamique QR codes et PDF',
        'Cartes interactives + heatmaps',
        'Job queue avec BullMQ/Redis',
        'Upload images + compression HEIC',
        'Internationalisation (i18n)',
        'Tests Jest + monitoring Sentry',
      ],
      isPrivate: true,
      isFeatured: true,
    },
    {
      title: 'WealthHealth',
      year: '2024',
      description: 'Migration complète d\'une app RH de jQuery vers React moderne. Publication d\'un package npm.',
      technologies: ['React', 'Redux Toolkit', 'Vite', 'TypeScript', 'Sass'],
      githubUrl: 'https://github.com/JimmyDef/Projet-WealthHealth',
      highlights: [
        'Migration jQuery → React',
        'Package npm publié',
        'Redux Toolkit',
      ],
    },
    {
      title: 'ArgentBank',
      year: '2024',
      description: 'Application bancaire avec authentification JWT, gestion profil et API REST. Documentation Swagger complète.',
      technologies: ['React', 'Redux Toolkit', 'RTK Query', 'Swagger', 'JWT'],
      githubUrl: 'https://github.com/JimmyDef/Projet-argentBank',
      highlights: [
        'Auth JWT sécurisée',
        'RTK Query',
        'API Swagger',
      ],
    },
    {
      title: 'Les Petits Plats',
      year: '2024',
      description: 'Moteur de recherche de recettes avec algorithmes optimisés et filtres dynamiques multiples.',
      technologies: ['JavaScript', 'SCSS', 'Algorithms'],
      githubUrl: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
    },
  ];

  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-green-500/30 bg-green-500/5 backdrop-blur-sm rounded mb-4">
            <span className="text-sm font-mono text-green-400">projects[]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Selected <span className="text-green-400">Works</span>
          </h2>
        </div>

        {/* Featured Project - QRPlans */}
        {featuredProject && (
          <div className="mb-16 p-8 border-2 border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-green-500/5 rounded-lg relative overflow-hidden group hover:border-cyan-500/50 transition-all">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-cyan-500 text-black text-xs font-bold rounded font-mono">
                  FEATURED
                </span>
                {featuredProject.isPrivate && (
                  <span className="px-3 py-1 border border-pink-500/50 bg-pink-500/10 text-pink-400 text-xs font-bold rounded font-mono">
                    PRIVATE
                  </span>
                )}
                <span className="text-gray-500 text-sm font-mono">{featuredProject.year}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {featuredProject.title}
                    <span className="text-cyan-400">.</span>
                    <span className="text-green-400">saas</span>
                  </h3>

                  <p className="text-lg text-gray-300 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {featuredProject.highlights && (
                    <div>
                      <p className="text-sm font-mono text-cyan-400 mb-3">// Key Features</p>
                      <ul className="space-y-2">
                        {featuredProject.highlights.map((highlight, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-gray-400"
                          >
                            <span className="text-green-400 font-mono mt-1">▹</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div>
                  <p className="text-sm font-mono text-green-400 mb-4">// Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {featuredProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900/80 border border-gray-700 rounded text-gray-300 text-sm font-mono hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects */}
        <div className="grid md:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="group p-6 border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-lg hover:border-green-500/50 transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.1)]"
            >
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono text-gray-500">{project.year}</span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-green-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors font-mono">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-1 text-xs text-gray-500">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-green-400">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-800 rounded text-xs text-gray-400 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-600">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 font-mono text-sm hover:text-cyan-400 transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    view_code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-500/50 bg-green-500/10 text-green-400 rounded font-bold font-mono hover:bg-green-500/20 hover:border-green-400 transition-all hover:shadow-[0_0_30px_rgba(74,222,128,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
            view_all_repos()
          </a>
        </div>
      </div>
    </section>
  );
}
