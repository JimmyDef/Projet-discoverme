export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-purple-400 via-pink-300 to-blue-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-12 shadow-2xl">
          <div className="text-center space-y-8">
            <div className="inline-block px-6 py-2 bg-white/30 backdrop-blur-xl border border-white/40 rounded-full text-sm font-semibold text-gray-800 shadow-lg">
              ✨ Available for Hire
            </div>

            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">
              Jimmy Defains
            </h1>

            <p className="text-3xl font-bold text-gray-800 mb-8">Full Stack Developer</p>

            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['React', 'TypeScript', 'Next.js', 'Node.js'].map(tech => (
                <span key={tech} className="px-5 py-2 bg-white/40 backdrop-blur-xl border border-white/50 rounded-full text-sm font-semibold text-gray-700 shadow-lg">
                  {tech}
                </span>
              ))}
            </div>

            <div className="bg-white/30 backdrop-blur-2xl border border-white/40 rounded-2xl p-8 mb-8">
              <div className="grid grid-cols-2 gap-6 text-left">
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Location</p>
                  <p className="text-gray-800 font-bold">Paris, Île-de-France</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Availability</p>
                  <p className="text-gray-800 font-bold">Immediate</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Certification</p>
                  <p className="text-gray-800 font-bold">OpenClassrooms RNCP 6</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1">Work Mode</p>
                  <p className="text-gray-800 font-bold">Remote • Hybrid</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white shadow-xl">
              <p className="text-sm font-bold mb-2">⭐ Featured Project</p>
              <p className="text-2xl font-black mb-2">QRPlans SaaS Platform</p>
              <p className="text-sm opacity-90">Multi-tenant • 3 Databases • Stripe/PayPal • AWS S3 • BullMQ</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:jimmydef@outlook.fr" className="px-8 py-4 bg-white/40 backdrop-blur-xl border border-white/50 rounded-2xl font-bold text-gray-800 hover:bg-white/60 transition-all shadow-xl">
                Contact Me
              </a>
              <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold text-white hover:from-purple-700 hover:to-pink-700 transition-all shadow-xl">
                View GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
