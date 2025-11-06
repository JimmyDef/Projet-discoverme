'use client';

export default function NewspaperPortfolio() {
  return (
    <div className="min-h-screen bg-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl" style={{fontFamily: 'Georgia, serif'}}>
        {/* Newspaper Header */}
        <div className="border-b-8 border-black py-6 px-8">
          <div className="flex justify-between items-start mb-2">
            <div className="text-sm">Vol. 2025 • No. 1</div>
            <div className="text-sm">Paris, France</div>
          </div>
          <h1 className="text-7xl font-bold text-center mb-2" style={{fontFamily: 'serif', letterSpacing: '0.05em'}}>
            THE DEVELOPER TIMES
          </h1>
          <div className="flex justify-between border-t-2 border-b-2 border-black py-1 text-xs uppercase tracking-wider">
            <span>Établi en 2021</span>
            <span>React • TypeScript • Next.js</span>
            <span>Portfolio Edition</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          {/* Hero Article */}
          <div className="border-b-4 border-black pb-8 mb-8">
            <h2 className="text-5xl font-bold mb-4 leading-tight">
              Développeur Full Stack Révolutionne le Web Moderne
            </h2>
            <p className="text-sm text-gray-600 mb-4 uppercase tracking-wide">
              Par L'Équipe Éditoriale • Aujourd'hui
            </p>
            <div className="columns-2 gap-8 text-justify leading-relaxed">
              <p className="mb-4">
                <span className="text-7xl float-left mr-2 leading-none font-bold">D</span>
                ans le paysage en constante évolution du développement web, un nouveau talent émerge
                avec une maîtrise exceptionnelle de React et TypeScript. Fort d'une formation RNCP
                niveau 6 chez OpenClassrooms, ce développeur passionné transforme des concepts
                complexes en applications web élégantes et performantes.
              </p>
              <p className="mb-4">
                Spécialisé dans les technologies modernes telles que Next.js et Node.js, il combine
                expertise technique et sens du design pour créer des expériences utilisateur
                inoubliables. Ses projets, allant de plateformes e-commerce sophistiquées à des
                design systems réutilisables, témoignent d'une approche méthodique et innovante.
              </p>
            </div>
          </div>

          {/* Three Column Layout */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Column 1 */}
            <div className="border-r-2 border-black pr-6">
              <h3 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2">
                COMPÉTENCES
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-gray-300 pb-1">
                  <span>React.js</span>
                  <span className="font-bold">★★★★★</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-1">
                  <span>TypeScript</span>
                  <span className="font-bold">★★★★★</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Next.js</span>
                  <span className="font-bold">★★★★☆</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Node.js</span>
                  <span className="font-bold">★★★★☆</span>
                </li>
                <li className="flex justify-between border-b border-gray-300 pb-1">
                  <span>Tailwind CSS</span>
                  <span className="font-bold">★★★★☆</span>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="border-r-2 border-black pr-6">
              <h3 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2">
                PROJETS RÉCENTS
              </h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-gray-300 pb-3">
                  <h4 className="font-bold mb-1">E-Commerce Platform</h4>
                  <p className="text-gray-700">
                    Plateforme complète avec paiement Stripe et dashboard admin.
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-3">
                  <h4 className="font-bold mb-1">Design System</h4>
                  <p className="text-gray-700">
                    Bibliothèque de composants avec Storybook et documentation.
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-3">
                  <h4 className="font-bold mb-1">Social Dashboard</h4>
                  <p className="text-gray-700">
                    Analytics en temps réel pour réseaux sociaux.
                  </p>
                </div>
              </div>
            </div>

            {/* Column 3 */}
            <div>
              <h3 className="text-2xl font-bold mb-3 border-b-2 border-black pb-2">
                EXPÉRIENCE
              </h3>
              <div className="space-y-4 text-sm">
                <div className="border-b border-gray-300 pb-3">
                  <h4 className="font-bold mb-1">Freelance Developer</h4>
                  <p className="text-gray-600 text-xs mb-1">2023 - Présent</p>
                  <p className="text-gray-700">
                    Applications React/TS pour divers clients internationaux.
                  </p>
                </div>
                <div className="border-b border-gray-300 pb-3">
                  <h4 className="font-bold mb-1">Junior Developer</h4>
                  <p className="text-gray-600 text-xs mb-1">2022 - 2023</p>
                  <p className="text-gray-700">
                    StartUp Tech - Développement et maintenance.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-100 border-2 border-black">
                <h4 className="font-bold mb-2 text-center">CONTACT</h4>
                <p className="text-xs text-center">
                  dev.portfolio@example.com<br />
                  +33 6 12 34 56 78<br />
                  Paris, France
                </p>
              </div>
            </div>
          </div>

          {/* Footer Banner */}
          <div className="border-t-4 border-black pt-6">
            <div className="bg-black text-white text-center py-4 px-6">
              <p className="text-2xl font-bold mb-2">
                DISPONIBLE POUR NOUVEAUX PROJETS
              </p>
              <p className="text-sm">
                Freelance • CDI • Missions Courtes
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t-2 border-black bg-gray-50 px-8 py-4 text-xs text-center">
          © 2025 The Developer Times • Tous droits réservés • Prix : ∞ Passion
        </div>
      </div>
    </div>
  );
}
