export default function Projects() {
  return (
    <section id="projects" className="min-h-screen p-8 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[100px] font-black uppercase leading-none mb-12 border-b-8 border-white pb-4">PROJECTS</h2>

        <div className="space-y-8">
          <div className="border-8 border-white p-8 bg-red-600">
            <div className="flex justify-between items-start mb-4">
              <p className="text-6xl font-black uppercase">QRPLANS</p>
              <span className="border-4 border-white px-4 py-2 text-2xl font-black bg-yellow-300 text-black">PRIVATE</span>
            </div>
            <p className="text-2xl font-bold mb-6">MULTI-TENANT SAAS • 3 POSTGRESQL DATABASES • STRIPE & PAYPAL PAYMENTS • AWS S3 STORAGE • BULLMQ + REDIS QUEUE • SENTRY MONITORING • DOCKER DEPLOYMENT</p>
            <p className="text-xl font-bold border-t-4 border-white pt-4">NEXT.JS 16 • REACT 19 • TYPESCRIPT • PRISMA • ZUSTAND • ZOD</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <a href="https://github.com/JimmyDef/Projet-WealthHealth" target="_blank" rel="noopener noreferrer" className="border-8 border-white p-8 bg-white text-black hover:bg-yellow-300 transition-colors">
              <p className="text-4xl font-black uppercase mb-4">WEALTHHEALTH</p>
              <p className="text-xl font-bold mb-4">JQUERY TO REACT MIGRATION • PUBLISHED NPM PACKAGE</p>
              <p className="text-lg font-bold">REACT • REDUX TOOLKIT • TYPESCRIPT</p>
            </a>

            <a href="https://github.com/JimmyDef/Projet-argentBank" target="_blank" rel="noopener noreferrer" className="border-8 border-white p-8 bg-white text-black hover:bg-yellow-300 transition-colors">
              <p className="text-4xl font-black uppercase mb-4">ARGENTBANK</p>
              <p className="text-xl font-bold mb-4">BANKING APP • JWT AUTH • API INTEGRATION</p>
              <p className="text-lg font-bold">REACT • REDUX • RTK QUERY • SWAGGER</p>
            </a>

            <a href="https://github.com/JimmyDef/Projet-SportSee" target="_blank" rel="noopener noreferrer" className="border-8 border-white p-8 bg-white text-black hover:bg-yellow-300 transition-colors">
              <p className="text-4xl font-black uppercase mb-4">SPORTSEE</p>
              <p className="text-xl font-bold mb-4">SPORTS DASHBOARD • DATA VISUALIZATION</p>
              <p className="text-lg font-bold">REACT • RECHARTS • TYPESCRIPT</p>
            </a>

            <a href="https://github.com/JimmyDef/Projet-LesPetitsPlats" target="_blank" rel="noopener noreferrer" className="border-8 border-white p-8 bg-white text-black hover:bg-yellow-300 transition-colors">
              <p className="text-4xl font-black uppercase mb-4">LES PETITS PLATS</p>
              <p className="text-xl font-bold mb-4">RECIPE APP • ADVANCED SEARCH ALGORITHM</p>
              <p className="text-lg font-bold">VANILLA JS • HTML5 • CSS3</p>
            </a>
          </div>

          <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="block border-8 border-white p-12 bg-blue-600 text-white hover:bg-black transition-colors text-center">
            <p className="text-7xl font-black uppercase">VIEW ALL PROJECTS →</p>
          </a>
        </div>
      </div>
    </section>
  );
}
