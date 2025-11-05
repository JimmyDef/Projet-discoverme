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
      description: 'Application SaaS full-stack de gestion de plans avec QR codes. Développement solo d\'une plateforme multi-tenant avec architecture complexe : 3 bases de données distinctes, système de paiements (Stripe & PayPal), génération de PDF, cartes interactives, job queue, et monitoring temps réel.',
      technologies: [
        'Next.js 16',
        'React 19',
        'TypeScript',
        'Prisma (multi-schema)',
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
        'Architecture multi-tenant avec 3 bases de données',
        'Système de paiements récurrents (Stripe & PayPal)',
        'Génération dynamique de QR codes et PDF',
        'Cartes interactives avec heatmaps et clustering',
        'Job queue avec BullMQ et Redis',
        'Upload d\'images avec compression et support HEIC',
        'Internationalisation (i18n)',
        'Tests unitaires et d\'intégration',
      ],
      isPrivate: true,
      isFeatured: true,
    },
    {
      title: 'WealthHealth',
      year: '2024',
      description: 'Migration d\'une application RH jQuery vers React moderne. Refonte complète avec Vite, Redux Toolkit, et publication d\'un composant modal réutilisable sur npm.',
      technologies: ['React', 'Redux Toolkit', 'Vite', 'TypeScript', 'Sass'],
      githubUrl: 'https://github.com/JimmyDef/Projet-WealthHealth',
      highlights: [
        'Migration jQuery → React',
        'Publication d\'un package npm',
        'Redux Toolkit pour la gestion d\'état',
        'Documentation JSDoc complète',
      ],
    },
    {
      title: 'ArgentBank',
      year: '2024',
      description: 'Application bancaire avec authentification JWT, gestion de profil et modélisation d\'API REST pour transactions. Intégration Redux RTK Query et documentation Swagger.',
      technologies: ['React', 'Redux Toolkit', 'RTK Query', 'Swagger', 'JWT'],
      githubUrl: 'https://github.com/JimmyDef/Projet-argentBank',
      highlights: [
        'Authentification JWT sécurisée',
        'RTK Query pour data fetching',
        'Documentation API avec Swagger',
        'Gestion de profil utilisateur',
      ],
    },
    {
      title: 'Les Petits Plats',
      year: '2024',
      description: 'Application de recherche et filtrage de recettes avec algorithmes de recherche optimisés. Focus sur les performances et l\'expérience utilisateur.',
      technologies: ['JavaScript', 'SCSS', 'Algorithms'],
      githubUrl: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
      highlights: [
        'Algorithmes de recherche performants',
        'Filtres dynamiques multiples',
        'Interface utilisateur intuitive',
      ],
    },
  ];

  const featuredProject = projects.find(p => p.isFeatured);
  const otherProjects = projects.filter(p => !p.isFeatured);

  return (
    <section id="projects" className="min-h-screen py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-16">
          Projets sélectionnés
        </p>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-zinc-100">
                    {featuredProject.title}
                  </h2>
                  {featuredProject.isPrivate && (
                    <span className="px-3 py-1 text-xs uppercase tracking-wider border border-zinc-400 dark:border-zinc-600 text-zinc-600 dark:text-zinc-400">
                      Privé
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {featuredProject.year}
                </p>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {featuredProject.description}
                </p>

                {featuredProject.highlights && (
                  <div className="pt-4">
                    <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                      Points clés
                    </h3>
                    <ul className="space-y-2">
                      {featuredProject.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-zinc-600 dark:text-zinc-400 pl-4 border-l-2 border-zinc-200 dark:border-zinc-800"
                        >
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                  Stack technique
                </h3>
                <div className="flex flex-wrap gap-2">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
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
        <div className="space-y-16">
          {otherProjects.map((project, index) => (
            <div
              key={index}
              className="border-t border-zinc-200 dark:border-zinc-800 pt-8"
            >
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-2xl font-light text-zinc-900 dark:text-zinc-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {project.year}
                  </p>
                </div>

                <div className="md:col-span-2 space-y-6">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {project.description}
                  </p>

                  {project.highlights && (
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="text-sm text-zinc-500 dark:text-zinc-500"
                        >
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm uppercase tracking-wider text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                      </svg>
                      Voir sur GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-sm uppercase tracking-wider border-b-2 border-zinc-900 dark:border-zinc-100 pb-1 hover:border-zinc-500 dark:hover:border-zinc-500 transition-colors"
          >
            Voir tous mes projets sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
