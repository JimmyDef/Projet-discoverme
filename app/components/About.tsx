export default function About() {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Next.js', level: 88 },
    { name: 'Node.js', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'Git', level: 85 },
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-zinc-900 dark:text-zinc-100">
          À propos de moi
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Mon parcours
            </h3>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Développeur d'applications web passionné, j'ai obtenu mon diplôme de{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                Développeur d'application JavaScript React
              </span>{' '}
              chez OpenClassrooms (RNCP niveau 6).
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Ma formation m'a permis de maîtriser les technologies modernes du développement web,
              avec une expertise particulière en React, TypeScript et Next.js.
              J'aime créer des interfaces utilisateur intuitives et des applications performantes.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Actuellement, je travaille sur des projets variés, allant de sites vitrines
              modernes à des applications web complexes avec des fonctionnalités avancées.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4">
              Compétences techniques
            </h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100">
                      {skill.name}
                    </span>
                    <span className="text-zinc-600 dark:text-zinc-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-white dark:bg-zinc-800 rounded-lg shadow-lg">
              <h4 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">
                Formation
              </h4>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                Développeur d'application JavaScript React
              </p>
              <p className="text-zinc-600 dark:text-zinc-400">
                OpenClassrooms • RNCP Niveau 6
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
