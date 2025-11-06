'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x000000, 1, 50);

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xff00ff, 2, 100);
    pointLight1.position.set(10, 10, 10);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00ffff, 2, 100);
    pointLight2.position.set(-10, -10, 10);
    scene.add(pointLight2);

    // Create rotating geometric shapes
    const geometries = [
      new THREE.TorusGeometry(3, 0.5, 16, 100),
      new THREE.OctahedronGeometry(2.5),
      new THREE.IcosahedronGeometry(2),
      new THREE.TetrahedronGeometry(2),
    ];

    const materials = [
      new THREE.MeshPhongMaterial({ color: 0xff00ff, wireframe: true }),
      new THREE.MeshPhongMaterial({ color: 0x00ffff, wireframe: true }),
      new THREE.MeshPhongMaterial({ color: 0xffff00, wireframe: true }),
      new THREE.MeshPhongMaterial({ color: 0xff0080, wireframe: true }),
    ];

    const meshes: THREE.Mesh[] = [];
    geometries.forEach((geometry, i) => {
      const mesh = new THREE.Mesh(geometry, materials[i]);
      mesh.position.x = (i - 1.5) * 8;
      mesh.position.y = Math.sin(i) * 3;
      meshes.push(mesh);
      scene.add(mesh);
    });

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.1,
      color: 0xffffff,
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Animation
    let frame = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      frame += 0.01;

      // Rotate meshes
      meshes.forEach((mesh, i) => {
        mesh.rotation.x += 0.005 * (i + 1);
        mesh.rotation.y += 0.01 * (i + 1);
        mesh.position.y = Math.sin(frame + i) * 3;
      });

      // Rotate particles
      particlesMesh.rotation.y += 0.0005;
      particlesMesh.rotation.x += 0.0002;

      // Animate lights
      pointLight1.position.x = Math.sin(frame) * 15;
      pointLight1.position.z = Math.cos(frame) * 15;
      pointLight2.position.x = Math.cos(frame) * 15;
      pointLight2.position.z = Math.sin(frame) * 15;

      // Camera movement
      camera.position.x = Math.sin(frame * 0.2) * 5;
      camera.position.y = Math.cos(frame * 0.3) * 3;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      geometries.forEach(g => g.dispose());
      materials.forEach(m => m.dispose());
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">
      <div ref={mountRef} className="absolute inset-0" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-white">
        <div className="text-center backdrop-blur-sm bg-black/30 p-12 rounded-lg border border-white/20">
          <h1 className="text-8xl font-black mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              JIMMY DEFAINS
            </span>
          </h1>
          <p className="text-3xl font-bold mb-4 text-cyan-400">FULL STACK DEVELOPER</p>
          <p className="text-xl mb-8 text-gray-300">React • TypeScript • Next.js • 3D</p>

          <div className="flex gap-4 justify-center flex-wrap">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 backdrop-blur-lg border border-white/30 rounded-lg font-bold">
              📍 PARIS
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 backdrop-blur-lg border border-white/30 rounded-lg font-bold">
              💼 AVAILABLE
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 backdrop-blur-lg border border-white/30 rounded-lg font-bold">
              🌐 REMOTE
            </div>
          </div>

          <div className="mt-12 flex gap-6 justify-center">
            <a
              href="#projects"
              className="px-8 py-4 bg-white text-black font-black text-lg hover:scale-105 transition-transform rounded-lg"
            >
              VIEW PROJECTS
            </a>
            <a
              href="mailto:jimmydef@outlook.fr"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-cyan-500 font-black text-lg hover:scale-105 transition-transform rounded-lg"
            >
              CONTACT
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce">
          <div className="text-4xl">↓</div>
        </div>
      </div>
    </section>
  );
}
