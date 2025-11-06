'use client';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  highlight?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: 'Projet Open Source #1',
      description: 'Une application web moderne construite avec React et TypeScript. Cette application démontre mes compétences en développement frontend avec une architecture composant réutilisable et une gestion d\'état efficace.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      githubUrl: 'https://github.com/JimmyDef/votre-projet-1',
    },
    {
      title: 'Projet Open Source #2',
      description: 'Un projet full-stack mettant en œuvre les meilleures pratiques de développement. Intégration d\'une API REST, authentification utilisateur, et interface responsive.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      githubUrl: 'https://github.com/JimmyDef/votre-projet-2',
    },
    {
      title: 'Projet Open Source #3',
      description: 'Application innovante développée pendant ma formation, démontrant ma capacité à résoudre des problèmes complexes et à créer des interfaces utilisateur intuitives.',
      technologies: ['React', 'TypeScript', 'Redux', 'SASS'],
      githubUrl: 'https://github.com/JimmyDef/votre-projet-3',
    },
    {
      title: 'Projet Professionnel Privé',
      description: 'Application web à but lucratif développée de A à Z. Projet confidentiel intégrant des fonctionnalités avancées, une architecture scalable et des optimisations de performance. Architecture microservices avec CI/CD.',
      technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Docker', 'AWS'],
      isPrivate: true,
      highlight: 'Projet confidentiel - Code source privé',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-100">
          Mes Projets
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-zinc-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-zinc-200 dark:border-zinc-700 hover:scale-[1.02]"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  {project.isPrivate && (
                    <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-xs font-semibold rounded-full">
                      Privé
                    </span>
                  )}
                </div>

                {project.highlight && (
                  <div className="px-3 py-2 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400">
                    <p className="text-sm text-blue-700 dark:text-blue-300 font-medium">
                      {project.highlight}
                    </p>
                  </div>
                )}

                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-100 dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 rounded-full text-sm font-medium"
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
                    className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                    </svg>
                    Voir sur GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Plus de projets disponibles sur mon profil GitHub
          </p>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-semibold hover:scale-105 transition-all"
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
