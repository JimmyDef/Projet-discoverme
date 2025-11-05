export default function About() {
  const frontend = [
    'React',
    'Next.js',
    'TypeScript',
    'React Query',
    'Zustand',
    'Tailwind CSS',
    'Sass',
    'Zod',
  ];

  const backend = [
    'Node.js',
    'Express',
    'Prisma',
    'PostgreSQL',
    'REST API',
  ];

  const tools = [
    'Git',
    'Docker',
    'AWS S3',
    'Stripe',
    'Sentry',
    'Jest',
    'React Testing Library',
  ];

  return (
    <section id="about" className="min-h-screen py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-16">
          À propos
        </p>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 leading-tight">
              Développeur passionné par les technologies modernes
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <p>
                Issue d'une reconversion professionnelle après plusieurs années dans l'événementiel,
                j'ai découvert ma passion pour le développement web et me suis formé
                intensivement aux technologies modernes.
              </p>
              <p>
                Diplômé d'OpenClassrooms (RNCP niveau 6) en développement JavaScript React,
                je me spécialise dans la création d'applications web performantes et scalables.
              </p>
              <p>
                Actuellement, je développe une application SaaS complète en production,
                gérant paiements, multi-tenant, et infrastructure cloud.
              </p>
            </div>

            <div className="pt-8 space-y-2">
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Localisation
              </p>
              <p className="text-zinc-900 dark:text-zinc-100">Paris / Île-de-France</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Disponibilité
              </p>
              <p className="text-zinc-900 dark:text-zinc-100">Immédiate</p>
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Mode de travail
              </p>
              <p className="text-zinc-900 dark:text-zinc-100">Remote / Hybride</p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Outils & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
              <h3 className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
                Formation
              </h3>
              <p className="text-zinc-900 dark:text-zinc-100 font-light">
                Développeur d'application JavaScript React
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                OpenClassrooms • RNCP Niveau 6
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
