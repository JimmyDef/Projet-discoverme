'use client';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  highlight?: string;
  features?: string[];
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'QRPLANS_SAAS',
      description: 'Multi-tenant SaaS platform. Full-stack application with advanced payment systems, cloud storage, and asynchronous job processing.',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', '3x PostgreSQL', 'Stripe', 'PayPal', 'AWS S3', 'BullMQ', 'Redis', 'Zustand', 'Zod', 'Sentry', 'Docker'],
      isPrivate: true,
      highlight: 'PRIVATE_REPOSITORY • PRODUCTION_READY',
      features: [
        'Multi-tenant architecture with 3 separate databases',
        'Recurring payment systems (Stripe & PayPal)',
        'AWS S3 cloud storage integration',
        'Asynchronous job queue with BullMQ + Redis',
        'Real-time error tracking with Sentry',
        'Advanced state management with Zustand',
        'Docker containerization for deployment',
      ],
    },
    {
      title: 'WEALTH_HEALTH',
      description: 'jQuery to React migration project. Converted legacy application to modern React with Redux Toolkit. Published reusable component as npm package.',
      technologies: ['React', 'Redux Toolkit', 'TypeScript', 'npm', 'Vite'],
      githubUrl: 'https://github.com/JimmyDef/Projet-WealthHealth',
      features: [
        'Complete jQuery to React migration',
        'State management with Redux Toolkit',
        'Published npm package for reusable components',
        'Performance optimization and modern tooling',
      ],
    },
    {
      title: 'ARGENT_BANK',
      description: 'Banking application with JWT authentication. RESTful API integration with Redux RTK Query. Swagger API documentation.',
      technologies: ['React', 'Redux', 'RTK Query', 'JWT', 'Swagger', 'TypeScript'],
      githubUrl: 'https://github.com/JimmyDef/Projet-argentBank',
      features: [
        'Secure JWT authentication system',
        'Redux RTK Query for API calls',
        'Swagger/OpenAPI documentation',
        'Protected routes and user profiles',
      ],
    },
    {
      title: 'SPORTSSEE',
      description: 'Sports tracking dashboard with data visualization. Custom chart components using Recharts library.',
      technologies: ['React', 'Recharts', 'TypeScript', 'CSS3'],
      githubUrl: 'https://github.com/JimmyDef/Projet-SportSee',
      features: [
        'Interactive data visualizations',
        'Custom chart components',
        'Responsive dashboard design',
        'Performance metrics tracking',
      ],
    },
    {
      title: 'LES_PETITS_PLATS',
      description: 'Recipe filtering application with advanced search algorithms. Vanilla JavaScript implementation with performance optimization.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Algorithm'],
      githubUrl: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
      features: [
        'Advanced search algorithm',
        'Multi-criteria filtering system',
        'Vanilla JavaScript (no framework)',
        'Performance-optimized search',
      ],
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 bg-black relative">
      {/* Matrix background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f0_1px,transparent_1px),linear-gradient(to_bottom,#0f0_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-green-400 font-mono border-2 border-green-500 inline-block px-8 py-4 ml-[50%] translate-x-[-50%] drop-shadow-[0_0_20px_rgba(0,255,0,0.5)]">
          {'>'} PROJECT_DATABASE
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group border-2 border-green-500/30 bg-black/70 backdrop-blur-sm hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] overflow-hidden"
            >
              <div className="p-6 space-y-4 font-mono">
                {/* Header */}
                <div className="flex items-start justify-between border-b border-green-500/30 pb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-green-500 text-xs animate-pulse">▌</span>
                      <h3 className="text-2xl font-bold text-green-400 group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] transition-all">
                        {project.title}
                      </h3>
                    </div>
                    {project.highlight && (
                      <div className="inline-block px-3 py-1 bg-green-500/10 border border-green-500/50 text-green-300 text-xs">
                        {'>'} {project.highlight}
                      </div>
                    )}
                  </div>
                  {project.isPrivate && (
                    <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs font-semibold">
                      [PRIVATE]
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-green-300/90 leading-relaxed text-sm">
                  <span className="text-green-500">{'>'} </span>
                  {project.description}
                </p>

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div className="bg-green-500/5 border-l-2 border-green-500 pl-4 py-2">
                    <div className="text-xs text-green-400 mb-2">{'>'} KEY_FEATURES:</div>
                    <ul className="space-y-1 text-xs text-green-300/80">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>
                          <span className="text-green-500">└─ </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div>
                  <div className="text-xs text-green-400 mb-2">{'>'} TECH_STACK:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-500/10 border border-green-500/30 text-green-400 text-xs hover:bg-green-500/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-green-400 border border-green-500/50 px-4 py-2 hover:bg-green-500/10 hover:shadow-[0_0_15px_rgba(0,255,0,0.3)] transition-all group/link"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs">{'>'} VIEW_REPOSITORY</span>
                    <span className="opacity-0 group-hover/link:opacity-100 transition-opacity">→</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-12 text-center border-2 border-green-500/30 p-8 bg-black/50">
          <p className="text-green-300 mb-4 font-mono text-sm">
            <span className="text-green-500">{'>'} </span>
            MORE_PROJECTS_AVAILABLE_ON_GITHUB_PROFILE
          </p>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-black font-mono font-bold hover:bg-green-400 transition-all hover:shadow-[0_0_40px_rgba(0,255,0,0.6)] border-2 border-green-400"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
            {'>'} ACCESS_ALL_REPOSITORIES
          </a>
        </div>
      </div>
    </section>
  );
}
