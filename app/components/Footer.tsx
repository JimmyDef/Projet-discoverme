export default function Footer() {
  return (
    <footer id="contact" className="bg-zinc-900 dark:bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-zinc-400 mb-2">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <div className="flex flex-col gap-2">
              <a
                href="#hero"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Accueil
              </a>
              <a
                href="#about"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                À propos
              </a>
              <a
                href="#projects"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                Projets
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Réseaux sociaux</h3>
            <div className="flex gap-4">
              <a
                href="https://github.com/JimmyDef"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jimmy-defranceschi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-800 pt-8 text-center text-zinc-400">
          <p>&copy; {new Date().getFullYear()} Portfolio. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
