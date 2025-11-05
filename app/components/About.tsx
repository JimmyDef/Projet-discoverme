export default function About() {
  const skills = {
    frontend: ['React', 'Next.js', 'TypeScript', 'React Query', 'Zustand', 'Tailwind CSS', 'Sass', 'Zod'],
    backend: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST API'],
    tools: ['Docker', 'AWS S3', 'Stripe', 'Sentry', 'Jest', 'React Testing Library', 'Git'],
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-gradient-to-b from-white to-zinc-50 dark:from-black dark:to-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full mb-4">
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              À propos
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100">
            Passionné par le code et l'innovation
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div className="space-y-6">
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Après une reconversion professionnelle depuis l'événementiel,
              j'ai trouvé ma véritable passion dans le développement web.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Diplômé d'<span className="font-semibold text-blue-600 dark:text-blue-400">OpenClassrooms</span> (RNCP niveau 6)
              en développement JavaScript React, je me spécialise dans la création
              d'applications web modernes, performantes et scalables.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Actuellement, je développe une application SaaS full-stack complexe
              avec architecture multi-tenant, systèmes de paiement, et infrastructure cloud.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Localisation</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">Paris / IDF</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Disponibilité</p>
                <p className="font-semibold text-green-600 dark:text-green-400">Immédiate</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Mode</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">Remote / Hybride</p>
              </div>
              <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">Formation</p>
                <p className="font-semibold text-zinc-900 dark:text-zinc-100">RNCP Niv. 6</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4 text-zinc-900 dark:text-zinc-100">
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4 text-zinc-900 dark:text-zinc-100">
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-lg">
              <h3 className="font-semibold text-lg mb-4 text-zinc-900 dark:text-zinc-100">
                Outils & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-full text-sm text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
