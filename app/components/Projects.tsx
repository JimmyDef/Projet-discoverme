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
      year: '2024 - 2025',
      description: 'Application SaaS full-stack de gestion de plans avec QR codes. Plateforme multi-tenant développée en solo avec architecture complexe, système de paiements, génération de PDF, cartes interactives, et infrastructure cloud complète.',
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
        'Tailwind',
        'Zod',
      ],
      highlights: [
        '3 bases de données Prisma (multi-schema)',
        'Système de paiements récurrents (Stripe & PayPal)',
        'Génération dynamique de QR codes et PDF',
        'Cartes interactives avec heatmaps et clustering',
        'Job queue avec BullMQ et Redis pour tâches asynchrones',
        'Upload d\'images avec compression et support HEIC',
        'Internationalisation (next-intl)',
        'Tests unitaires et d\'intégration (Jest)',
        'Monitoring en temps réel (Sentry)',
      ],
      isPrivate: true,
      isFeatured: true,
    },
    {
      title: 'WealthHealth',
      year: '2024',
      description: 'Migration complète d\'une application RH de jQuery vers React moderne. Refonte avec Vite, Redux Toolkit, et publication d\'un composant modal réutilisable sur npm.',
      technologies: ['React', 'Redux Toolkit', 'Vite', 'TypeScript', 'Sass', 'JSDoc'],
      githubUrl: 'https://github.com/JimmyDef/Projet-WealthHealth',
      highlights: [
        'Migration jQuery → React',
        'Publication package npm (react-simple-modal-jimmydef)',
        'Redux Toolkit pour gestion d\'état',
        'Documentation JSDoc complète',
      ],
    },
    {
      title: 'ArgentBank',
      year: '2024',
      description: 'Application bancaire avec authentification JWT, gestion de profil utilisateur et modélisation d\'API REST pour transactions. Intégration Redux RTK Query et documentation Swagger.',
      technologies: ['React', 'Redux Toolkit', 'RTK Query', 'Swagger', 'JWT', 'Sass'],
      githubUrl: 'https://github.com/JimmyDef/Projet-argentBank',
      highlights: [
        'Authentification JWT sécurisée',
        'RTK Query pour data fetching',
        'Documentation API avec Swagger',
        'CRUD utilisateur',
      ],
    },
    {
      title: 'Les Petits Plats',
      year: '2024',
      description: 'Moteur de recherche de recettes avec algorithmes de filtrage optimisés. Focus sur les performances et l\'expérience utilisateur avec filtres dynamiques multiples.',
      technologies: ['JavaScript', 'SCSS', 'HTML', 'Algorithms'],
      githubUrl: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
      highlights: [
        'Algorithmes de recherche performants',
        'Filtres dynamiques multiples',
        'UI/UX intuitive',
      ],
    },
  ];

  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Réalisations
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Projets sélectionnés
          </h2>
        </div>

        {/* Featured Project - QRPlans */}
        {featuredProject && (
          <div className="mb-20 p-8 bg-gradient-to-br from-blue-500/5 to-purple-500/5 border border-blue-500/20 rounded-2xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-semibold rounded-full">
                PROJET PRINCIPAL
              </span>
              {featuredProject.isPrivate && (
                <span className="px-3 py-1 border border-yellow-500/30 bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 text-xs font-semibold rounded-full">
                  CODE PRIVÉ
                </span>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {featuredProject.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {featuredProject.year}
                  </p>
                </div>

                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {featuredProject.description}
                </p>

                <div>
                  <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                    Points clés
                  </h4>
                  <ul className="space-y-2">
                    {featuredProject.highlights?.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-zinc-600 dark:text-zinc-400"
                      >
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
                  Stack technique
                </h4>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
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
              className="group p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02]"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                    {project.year}
                  </p>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {project.highlights && (
                  <ul className="space-y-1 text-sm text-zinc-500 dark:text-zinc-500">
                    {project.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i}>• {highlight}</li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-zinc-100 dark:bg-zinc-700 rounded text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs text-zinc-500">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:gap-3 transition-all"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-6">
            D'autres projets sont disponibles sur mon profil GitHub
          </p>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
            Voir tous mes projets
          </a>
        </div>
      </div>
    </section>
  );
}
