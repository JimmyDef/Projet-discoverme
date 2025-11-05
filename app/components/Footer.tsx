export default function Footer() {
  return (
    <footer id="contact" className="border-t border-zinc-200 dark:border-zinc-800 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-4">
                Contact
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-zinc-900 dark:text-zinc-100 mb-6">
                Discutons de votre projet
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Disponible immédiatement pour des missions en remote ou hybride
                sur Paris / Île-de-France.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:jimmydef@outlook.fr"
                className="block text-zinc-900 dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-400 transition-colors"
              >
                jimmydef@outlook.fr
              </a>
              <p className="text-zinc-600 dark:text-zinc-400">
                Paris / Île-de-France
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Liens
              </p>
              <div className="space-y-3">
                <a
                  href="https://github.com/JimmyDef"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/jimmy-defranceschi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <div>
              <p className="text-sm uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-4">
                Navigation
              </p>
              <div className="space-y-3">
                <a
                  href="#hero"
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Accueil
                </a>
                <a
                  href="#about"
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  À propos
                </a>
                <a
                  href="#projects"
                  className="block text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  Projets
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} Jimmy Defains. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
