'use client';

export default function VaporwavePortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-600 to-orange-500 overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,0,255,0.3) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255,0,255,0.3) 2px, transparent 2px)
          `,
          backgroundSize: '50px 50px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center bottom',
        }}
      />

      {/* Sun */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-b from-yellow-300 via-pink-500 to-purple-600" style={{boxShadow: '0 0 100px rgba(255,0,255,0.8)'}} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1
          className="text-7xl md:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-yellow-400"
          style={{
            fontFamily: 'Impact, sans-serif',
            textShadow: '3px 3px 0 rgba(255,0,255,0.5), 6px 6px 0 rgba(0,255,255,0.5)',
          }}
        >
          ＡＥＳＴＨＥＴＩＣ
        </h1>

        <p className="text-2xl md:text-3xl text-cyan-300 mb-12 font-bold tracking-widest" style={{textShadow: '2px 2px 4px rgba(255,0,255,0.8)'}}>
          レトロ • Ｄｅｖｅｌｏｐｅｒ • ８０ｓ
        </p>

        <div className="bg-black/40 border-4 border-pink-500 p-8 rounded-lg backdrop-blur-md max-w-2xl" style={{boxShadow: '0 0 30px rgba(255,0,255,0.6)'}}>
          <p className="text-cyan-300 text-lg mb-6">
            🌴 Crafting digital experiences with 80s vibes 🌴
          </p>

          <div className="flex gap-4 justify-center flex-wrap mb-6">
            {['React', 'TypeScript', 'Next.js', 'Vibes'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full border-2 border-cyan-400"
                style={{boxShadow: '0 0 10px rgba(255,0,255,0.8)'}}
              >
                {skill}
              </span>
            ))}
          </div>

          <button
            className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-white font-bold text-xl rounded-lg hover:scale-105 transition-transform"
            style={{boxShadow: '0 0 20px rgba(255,0,255,0.8)'}}
          >
            ▶ PLAY PORTFOLIO
          </button>
        </div>

        <div className="mt-12 text-pink-300 text-sm tracking-widest">
          © 1985-2025 • ＲＥＴＲＯ ＷＡＶＥ ＳＴＵＤＩＯ
        </div>
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, black 2px, black 4px)',
        }}
      />
    </div>
  );
}
