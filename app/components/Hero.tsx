'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setRotation(r => (r + 1) % 360), 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen p-8 bg-black text-white relative overflow-hidden">
      {/* Animated abstract shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-br from-red-500 to-yellow-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-blue-500 to-purple-500 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-12 gap-4" style={{ transform: `rotate(${rotation * 0.1}deg)` }}>
          {/* Abstract geometric layout */}
          <div className="col-span-3 h-32 bg-gradient-to-br from-red-500 to-pink-500 transform rotate-12" />
          <div className="col-span-6 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center transform -rotate-3">
            <span className="text-xs">AVAILABLE</span>
          </div>
          <div className="col-span-3 h-32 bg-gradient-to-tl from-blue-500 to-purple-500 transform rotate-6" />
        </div>

        <div className="my-16 text-center">
          <h1 className="text-9xl font-black mb-4" style={{
            background: 'linear-gradient(45deg, #ff0080, #ff8c00, #40e0d0, #9b59b6, #ff0080)',
            backgroundSize: '400% 400%',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'gradient 3s ease infinite'
          }}>
            JIMMY<br/>DEFAINS
          </h1>
        </div>

        <div className="grid grid-cols-5 gap-4 mb-16">
          <div className="col-span-2 bg-gradient-to-br from-purple-600 to-pink-600 p-8 transform -rotate-2">
            <p className="text-3xl font-black mb-2">FULL STACK</p>
            <p className="text-lg">DEVELOPER</p>
          </div>
          <div className="col-span-1 bg-gradient-to-b from-yellow-400 to-red-500 transform rotate-45" />
          <div className="col-span-2 bg-gradient-to-tr from-cyan-500 to-blue-500 p-8 transform rotate-1">
            <div className="space-y-2 text-sm">
              <p>PARIS</p>
              <p>IMMEDIATE</p>
              <p>REMOTE</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-16">
          {['REACT', 'TYPESCRIPT', 'NEXT.JS', 'NODE.JS'].map((tech, i) => (
            <div key={tech} className={`p-6 bg-gradient-to-br ${
              i % 4 === 0 ? 'from-red-500 to-orange-500' :
              i % 4 === 1 ? 'from-blue-500 to-cyan-500' :
              i % 4 === 2 ? 'from-green-500 to-emerald-500' :
              'from-purple-500 to-pink-500'
            } transform ${i % 2 === 0 ? 'rotate-2' : '-rotate-2'} hover:scale-110 transition-transform`}>
              <p className="font-black text-2xl">{tech}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-4 bg-gradient-to-br from-yellow-400 to-orange-500 p-8 transform rotate-1">
            <p className="text-sm mb-2">FEATURED</p>
            <p className="text-3xl font-black mb-2">QRPLANS</p>
            <p className="text-xs">Multi-tenant SaaS • 3 Databases • Stripe • AWS</p>
          </div>
          <div className="col-span-5 flex flex-col gap-4">
            <a href="mailto:jimmydef@outlook.fr" className="bg-gradient-to-r from-red-500 to-pink-500 p-6 font-black text-2xl text-center transform -rotate-1 hover:scale-105 transition-transform">
              CONTACT
            </a>
            <a href="https://github.com/JimmyDef" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 font-black text-2xl text-center transform rotate-1 hover:scale-105 transition-transform">
              GITHUB
            </a>
          </div>
          <div className="col-span-3 bg-gradient-to-tl from-green-500 to-cyan-500 transform -rotate-3" />
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
