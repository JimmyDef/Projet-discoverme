'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Projects() {
  const mountRef = useRef<HTMLDivElement>(null);

  const projects = [
    { title: 'QRPLANS', tech: 'Next.js • React • TypeScript', desc: 'Multi-tenant SaaS • 3 Databases • Stripe • AWS', private: true, color: 0xff00ff },
    { title: 'WEALTHHEALTH', tech: 'React • Redux • TypeScript', url: 'https://github.com/JimmyDef/Projet-WealthHealth', color: 0x00ffff },
    { title: 'ARGENTBANK', tech: 'React • JWT • Swagger', url: 'https://github.com/JimmyDef/Projet-argentBank', color: 0x00ff00 },
    { title: 'SPORTSEE', tech: 'React • Recharts', url: 'https://github.com/JimmyDef/Projet-SportSee', color: 0xffff00 },
    { title: 'LES PETITS PLATS', tech: 'JavaScript • HTML5', url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats', color: 0xff0080 },
  ];

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // Create rotating cubes for projects
    const cubes: THREE.Mesh[] = [];
    projects.forEach((project, i) => {
      const geometry = new THREE.BoxGeometry(2, 2, 2);
      const material = new THREE.MeshPhongMaterial({
        color: project.color,
        wireframe: true
      });
      const cube = new THREE.Mesh(geometry, material);
      cube.position.x = (i - 2) * 4;
      cubes.push(cube);
      scene.add(cube);

      const pointLight = new THREE.PointLight(project.color, 1, 10);
      pointLight.position.copy(cube.position);
      scene.add(pointLight);
    });

    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.01;

      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        cube.position.y = Math.sin(frame + i) * 0.5;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.5);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      cubes.forEach(cube => {
        cube.geometry.dispose();
        (cube.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, []);

  return (
    <section id="projects" className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white py-20">
      <div ref={mountRef} className="absolute inset-0 opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <h2 className="text-6xl font-black text-center mb-16">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            PROJECTS
          </span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="backdrop-blur-lg bg-black/50 border border-white/20 p-8 rounded-lg hover:scale-105 transition-all duration-300 hover:border-white/40"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {project.private && (
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-black mb-4 rounded">
                  PRIVATE
                </span>
              )}

              <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                {project.title}
              </h3>

              <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-cyan-500 mb-4" />

              <p className="text-sm text-gray-300 mb-2">{project.tech}</p>
              {project.desc && <p className="text-xs text-gray-400 mb-6">{project.desc}</p>}

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 font-bold text-sm hover:from-pink-600 hover:to-purple-600 transition-all rounded"
                >
                  VIEW PROJECT →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 font-black text-xl hover:scale-105 transition-transform rounded-lg"
          >
            ALL PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}
