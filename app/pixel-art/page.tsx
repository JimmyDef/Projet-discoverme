'use client';

export default function PixelArtPortfolio() {
  return (
    <div className="min-h-screen bg-gray-900 p-4" style={{imageRendering: 'pixelated'}}>
      <div className="max-w-4xl mx-auto">
        {/* Pixel Art Header */}
        <div className="bg-blue-600 border-8 border-black p-6 mb-8" style={{boxShadow: '8px 8px 0 rgba(0,0,0,0.8)'}}>
          <h1 className="text-6xl font-bold text-yellow-300 mb-2" style={{fontFamily: '"Press Start 2P", monospace', textShadow: '4px 4px 0 #000'}}>
            PIXEL DEV
          </h1>
          <p className="text-white text-sm" style={{fontFamily: '"Press Start 2P", monospace'}}>
            8-BIT DEVELOPER
          </p>
        </div>

        {/* Avatar Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-green-600 border-8 border-black p-6" style={{boxShadow: '8px 8px 0 rgba(0,0,0,0.8)'}}>
            <div className="w-32 h-32 mx-auto mb-4 bg-yellow-400 border-4 border-black grid grid-cols-8 gap-1 p-2">
              {/* Simple pixelated face */}
              {Array.from({length: 64}).map((_, i) => {
                const isEye = i === 18 || i === 21;
                const isSmile = [41, 42, 43, 44, 49, 52].includes(i);
                return (
                  <div
                    key={i}
                    className={`${isEye || isSmile ? 'bg-black' : 'bg-yellow-400'}`}
                  />
                );
              })}
            </div>
            <p className="text-white text-center text-xs" style={{fontFamily: '"Press Start 2P", monospace'}}>
              LEVEL 99 DEV
            </p>
          </div>

          <div className="bg-purple-600 border-8 border-black p-6" style={{boxShadow: '8px 8px 0 rgba(0,0,0,0.8)'}}>
            <h2 className="text-2xl text-yellow-300 mb-4" style={{fontFamily: '"Press Start 2P", monospace'}}>
              STATS
            </h2>
            <div className="space-y-3 text-white text-xs" style={{fontFamily: '"Press Start 2P", monospace'}}>
              <div>
                <p className="mb-1">REACT: ★★★★★</p>
                <div className="h-4 bg-black">
                  <div className="h-full w-[90%] bg-green-400" />
                </div>
              </div>
              <div>
                <p className="mb-1">TYPESCRIPT: ★★★★☆</p>
                <div className="h-4 bg-black">
                  <div className="h-full w-[80%] bg-blue-400" />
                </div>
              </div>
              <div>
                <p className="mb-1">NEXT.JS: ★★★★☆</p>
                <div className="h-4 bg-black">
                  <div className="h-full w-[85%] bg-purple-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'E-SHOP', color: 'bg-red-600' },
            { title: 'BLOG', color: 'bg-blue-600' },
            { title: 'GAME', color: 'bg-green-600' },
          ].map((project) => (
            <div
              key={project.title}
              className={`${project.color} border-8 border-black p-6 hover:translate-y-1 transition-transform cursor-pointer`}
              style={{boxShadow: '8px 8px 0 rgba(0,0,0,0.8)'}}
            >
              <h3 className="text-2xl text-yellow-300 mb-2" style={{fontFamily: '"Press Start 2P", monospace'}}>
                {project.title}
              </h3>
              <p className="text-white text-xs" style={{fontFamily: '"Press Start 2P", monospace'}}>
                CLICK TO VIEW
              </p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            className="px-8 py-4 bg-yellow-400 border-8 border-black text-black font-bold hover:bg-yellow-300 transition-colors"
            style={{fontFamily: '"Press Start 2P", monospace', boxShadow: '8px 8px 0 rgba(0,0,0,0.8)', fontSize: '14px'}}
          >
            START GAME
          </button>
          <button
            className="px-8 py-4 bg-green-500 border-8 border-black text-black font-bold hover:bg-green-400 transition-colors"
            style={{fontFamily: '"Press Start 2P", monospace', boxShadow: '8px 8px 0 rgba(0,0,0,0.8)', fontSize: '14px'}}
          >
            CONTACT
          </button>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-yellow-300 text-xs" style={{fontFamily: '"Press Start 2P", monospace'}}>
            PRESS [SPACE] TO CONTINUE
          </p>
        </div>
      </div>
    </div>
  );
}
