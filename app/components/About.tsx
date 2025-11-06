'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function About() {
  const mountRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'REACT', level: 90, color: 0x61dafb },
    { name: 'TYPESCRIPT', level: 85, color: 0x3178c6 },
    { name: 'NEXT.JS', level: 88, color: 0x000000 },
    { name: 'NODE.JS', level: 80, color: 0x339933 },
    { name: 'TAILWIND', level: 90, color: 0x06b6d4 },
    { name: 'PRISMA', level: 82, color: 0x2d3748 },
    { name: 'DOCKER', level: 75, color: 0x2496ed },
    { name: 'GIT', level: 85, color: 0xf05032 },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create spheres for skills
    const spheres: THREE.Mesh[] = [];
    skills.forEach((skill, i) => {
      const geometry = new THREE.SphereGeometry(skill.level / 100 + 0.5, 32, 32);
      const material = new THREE.MeshPhongMaterial({
        color: skill.color,
        wireframe: true
      });
      const sphere = new THREE.Mesh(geometry, material);

      const angle = (i / skills.length) * Math.PI * 2;
      sphere.position.x = Math.cos(angle) * 8;
      sphere.position.z = Math.sin(angle) * 8;

      spheres.push(sphere);
      scene.add(sphere);

      const pointLight = new THREE.PointLight(skill.color, 1, 15);
      pointLight.position.copy(sphere.position);
      scene.add(pointLight);
    });

    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.01;

      spheres.forEach((sphere, i) => {
        sphere.rotation.x += 0.01;
        sphere.rotation.y += 0.01;

        const angle = (i / spheres.length) * Math.PI * 2 + frame * 0.2;
        sphere.position.x = Math.cos(angle) * 8;
        sphere.position.z = Math.sin(angle) * 8;
        sphere.position.y = Math.sin(frame + i) * 2;
      });

      camera.position.y = Math.sin(frame * 0.3) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.4);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.4);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      spheres.forEach(sphere => {
        sphere.geometry.dispose();
        (sphere.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen bg-black text-white py-20">
      <div ref={mountRef} className="absolute inset-0 opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-8">
        <h2 className="text-6xl font-black text-center mb-12">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            ABOUT
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="backdrop-blur-lg bg-white/5 border border-white/20 p-10 rounded-xl">
            <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 mb-6" />
            <h3 className="text-3xl font-black mb-6">Profile</h3>
            <p className="text-lg leading-relaxed mb-4 text-gray-300">
              Full Stack Developer with a unique background in event management, bringing creativity and organizational excellence to software development.
            </p>
            <p className="text-sm text-cyan-400 font-semibold">
              JavaScript React Developer certification (OpenClassrooms RNCP Niveau 6)
            </p>
          </div>

          <div className="backdrop-blur-lg bg-white/5 border border-white/20 p-10 rounded-xl">
            <div className="h-1 w-24 bg-gradient-to-r from-cyan-500 to-blue-500 mb-6" />
            <h3 className="text-3xl font-black mb-6">Expertise</h3>
            <p className="text-lg leading-relaxed text-gray-300">
              Specializing in React, TypeScript, and Next.js. Creating intuitive user interfaces and high-performance applications that combine technical excellence with exceptional user experience.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-4xl font-black text-center mb-12">SKILLS</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, i) => (
              <div
                key={skill.name}
                className="backdrop-blur-lg bg-white/5 border border-white/20 p-6 rounded-lg hover:scale-105 transition-all hover:bg-white/10"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <p className="font-black text-xl mb-4">{skill.name}</p>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-gray-400 mt-2">{skill.level}%</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="backdrop-blur-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-white/20 p-8 rounded-lg text-center hover:scale-105 transition-transform">
            <p className="text-sm mb-2 text-gray-300">LOCATION</p>
            <p className="text-3xl font-black">PARIS</p>
          </div>
          <div className="backdrop-blur-lg bg-gradient-to-br from-cyan-600/20 to-blue-600/20 border border-white/20 p-8 rounded-lg text-center hover:scale-105 transition-transform">
            <p className="text-sm mb-2 text-gray-300">AVAILABILITY</p>
            <p className="text-3xl font-black">IMMEDIATE</p>
          </div>
          <div className="backdrop-blur-lg bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-white/20 p-8 rounded-lg text-center hover:scale-105 transition-transform">
            <p className="text-sm mb-2 text-gray-300">WORK MODE</p>
            <p className="text-3xl font-black">REMOTE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
