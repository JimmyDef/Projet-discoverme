'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [showInstructions, setShowInstructions] = useState(true);
  const [hoveredObject, setHoveredObject] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000510);
    scene.fog = new THREE.Fog(0x000510, 10, 100);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 1.6, 10);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    // Movement variables
    const moveSpeed = 0.15;
    const keys: { [key: string]: boolean } = {};
    const velocity = new THREE.Vector3();
    const direction = new THREE.Vector3();

    // Mouse look
    const euler = new THREE.Euler(0, 0, 0, 'YXZ');
    const PI_2 = Math.PI / 2;
    let isPointerLocked = false;

    const onMouseMove = (event: MouseEvent) => {
      if (!isPointerLocked) return;

      const movementX = event.movementX || 0;
      const movementY = event.movementY || 0;

      euler.setFromQuaternion(camera.quaternion);
      euler.y -= movementX * 0.002;
      euler.x -= movementY * 0.002;
      euler.x = Math.max(-PI_2, Math.min(PI_2, euler.x));
      camera.quaternion.setFromEuler(euler);
    };

    const onPointerLockChange = () => {
      isPointerLocked = document.pointerLockElement === renderer.domElement;
      setIsLocked(isPointerLocked);
      setShowInstructions(!isPointerLocked);
    };

    const onPointerLockError = () => {
      console.error('Pointer lock error');
    };

    document.addEventListener('pointerlockchange', onPointerLockChange);
    document.addEventListener('pointerlockerror', onPointerLockError);

    renderer.domElement.addEventListener('click', () => {
      renderer.domElement.requestPointerLock();
    });

    // Keyboard controls
    const onKeyDown = (event: KeyboardEvent) => {
      keys[event.code] = true;
    };

    const onKeyUp = (event: KeyboardEvent) => {
      keys[event.code] = false;
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    // Neon lights
    const createNeonLight = (color: number, x: number, y: number, z: number, intensity = 2) => {
      const light = new THREE.PointLight(color, intensity, 20);
      light.position.set(x, y, z);
      light.castShadow = true;
      scene.add(light);

      // Add glow sphere
      const glowGeometry = new THREE.SphereGeometry(0.2, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({ color });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(light.position);
      scene.add(glowMesh);

      return light;
    };

    createNeonLight(0xff00ff, -10, 3, 0);
    createNeonLight(0x00ffff, 10, 3, 0);
    createNeonLight(0xff0080, 0, 3, -15);
    createNeonLight(0x00ff00, -8, 3, -15);
    createNeonLight(0xffff00, 8, 3, -15);

    // Floor with grid
    const floorGeometry = new THREE.PlaneGeometry(100, 100, 50, 50);
    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      metalness: 0.8,
      roughness: 0.4,
      wireframe: false,
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Grid helper
    const gridHelper = new THREE.GridHelper(100, 50, 0xff00ff, 0x00ffff);
    gridHelper.material.opacity = 0.3;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    // Projects data
    const projects = [
      { title: 'QRPLANS', desc: 'Multi-tenant SaaS', color: 0xff00ff, x: -8, z: -5, private: true },
      { title: 'WEALTHHEALTH', desc: 'React • Redux', color: 0x00ffff, x: -4, z: -5, url: 'https://github.com/JimmyDef/Projet-WealthHealth' },
      { title: 'ARGENTBANK', desc: 'React • JWT', color: 0x00ff00, x: 0, z: -5, url: 'https://github.com/JimmyDef/Projet-argentBank' },
      { title: 'SPORTSEE', desc: 'React • Recharts', color: 0xffff00, x: 4, z: -5, url: 'https://github.com/JimmyDef/Projet-SportSee' },
      { title: 'PETITS PLATS', desc: 'JavaScript', color: 0xff0080, x: 8, z: -5, url: 'https://github.com/JimmyDef/Projet-LesPetitsPlats' },
    ];

    // Create interactive project displays
    const interactiveObjects: THREE.Mesh[] = [];
    projects.forEach((project) => {
      // Pedestal
      const pedestalGeometry = new THREE.BoxGeometry(1.5, 0.3, 1.5);
      const pedestalMaterial = new THREE.MeshStandardMaterial({
        color: 0x1a1a1a,
        metalness: 0.9,
        roughness: 0.1,
      });
      const pedestal = new THREE.Mesh(pedestalGeometry, pedestalMaterial);
      pedestal.position.set(project.x, 0.15, project.z);
      pedestal.castShadow = true;
      pedestal.receiveShadow = true;
      scene.add(pedestal);

      // Project cube (hovering)
      const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
      const cubeMaterial = new THREE.MeshStandardMaterial({
        color: project.color,
        emissive: project.color,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      });
      const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.position.set(project.x, 1.5, project.z);
      cube.castShadow = true;
      cube.userData = { type: 'project', project };
      scene.add(cube);
      interactiveObjects.push(cube);

      // Project point light
      const projectLight = new THREE.PointLight(project.color, 1, 5);
      projectLight.position.set(project.x, 2, project.z);
      scene.add(projectLight);

      // Wireframe outline
      const wireframeGeometry = new THREE.EdgesGeometry(cubeGeometry);
      const wireframeMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
      const wireframe = new THREE.LineSegments(wireframeGeometry, wireframeMaterial);
      cube.add(wireframe);
    });

    // Skills display - floating spheres in a circle
    const skills = [
      { name: 'REACT', level: 90, color: 0x61dafb },
      { name: 'TYPESCRIPT', level: 85, color: 0x3178c6 },
      { name: 'NEXT.JS', level: 88, color: 0x000000 },
      { name: 'NODE.JS', level: 80, color: 0x339933 },
      { name: 'TAILWIND', level: 90, color: 0x06b6d4 },
      { name: 'PRISMA', level: 82, color: 0x5a67d8 },
      { name: 'DOCKER', level: 75, color: 0x2496ed },
      { name: 'GIT', level: 85, color: 0xf05032 },
    ];

    const skillsRadius = 6;
    skills.forEach((skill, i) => {
      const angle = (i / skills.length) * Math.PI * 2;
      const x = Math.cos(angle) * skillsRadius;
      const z = -15 + Math.sin(angle) * skillsRadius;

      const sphereGeometry = new THREE.SphereGeometry(0.3 + skill.level / 200, 32, 32);
      const sphereMaterial = new THREE.MeshStandardMaterial({
        color: skill.color,
        emissive: skill.color,
        emissiveIntensity: 0.5,
        metalness: 0.8,
        roughness: 0.2,
      });
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.set(x, 1.5, z);
      sphere.userData = { type: 'skill', skill };
      scene.add(sphere);
      interactiveObjects.push(sphere);

      // Skill point light
      const skillLight = new THREE.PointLight(skill.color, 0.5, 5);
      skillLight.position.copy(sphere.position);
      scene.add(skillLight);
    });

    // Welcome sign
    const signGeometry = new THREE.BoxGeometry(3, 1.5, 0.1);
    const signMaterial = new THREE.MeshStandardMaterial({
      color: 0x1a1a1a,
      emissive: 0xff00ff,
      emissiveIntensity: 0.3,
    });
    const sign = new THREE.Mesh(signGeometry, signMaterial);
    sign.position.set(0, 2.5, -1);
    scene.add(sign);

    // Particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 100;
      if (i % 3 === 1) posArray[i] = Math.random() * 20; // Y position
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.05,
      color: 0xffffff,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Raycaster for interaction
    const raycaster = new THREE.Raycaster();
    const centerPoint = new THREE.Vector2(0, 0);

    // Animation loop
    let frame = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      frame += 0.01;

      // Update movement
      if (isPointerLocked) {
        velocity.x -= velocity.x * 10.0 * delta;
        velocity.z -= velocity.z * 10.0 * delta;

        direction.z = Number(keys['KeyW'] || keys['ArrowUp']) - Number(keys['KeyS'] || keys['ArrowDown']);
        direction.x = Number(keys['KeyD'] || keys['ArrowRight']) - Number(keys['KeyA'] || keys['ArrowLeft']);
        direction.normalize();

        if (keys['KeyW'] || keys['ArrowUp'] || keys['KeyS'] || keys['ArrowDown']) {
          velocity.z -= direction.z * moveSpeed * delta * 100;
        }
        if (keys['KeyA'] || keys['ArrowLeft'] || keys['KeyD'] || keys['ArrowRight']) {
          velocity.x -= direction.x * moveSpeed * delta * 100;
        }

        const cameraDirection = new THREE.Vector3();
        camera.getWorldDirection(cameraDirection);
        cameraDirection.y = 0;
        cameraDirection.normalize();

        const right = new THREE.Vector3();
        right.crossVectors(camera.up, cameraDirection).normalize();

        camera.position.addScaledVector(cameraDirection, -velocity.z * delta);
        camera.position.addScaledVector(right, -velocity.x * delta);

        // Keep camera above floor
        camera.position.y = 1.6;

        // Boundaries
        camera.position.x = Math.max(-45, Math.min(45, camera.position.x));
        camera.position.z = Math.max(-45, Math.min(45, camera.position.z));
      }

      // Animate project cubes
      interactiveObjects.forEach((obj, i) => {
        if (obj.userData.type === 'project') {
          obj.rotation.y += 0.01;
          obj.position.y = 1.5 + Math.sin(frame + i) * 0.1;
        } else if (obj.userData.type === 'skill') {
          obj.rotation.x += 0.01;
          obj.rotation.y += 0.01;
        }
      });

      // Animate particles
      particlesMesh.rotation.y += 0.0001;

      // Raycasting for hover
      raycaster.setFromCamera(centerPoint, camera);
      const intersects = raycaster.intersectObjects(interactiveObjects);

      if (intersects.length > 0) {
        const obj = intersects[0].object as THREE.Mesh;
        if (obj.userData.type === 'project') {
          setHoveredObject(obj.userData.project.title);
          (obj.material as THREE.MeshStandardMaterial).emissiveIntensity = 1;
        } else if (obj.userData.type === 'skill') {
          setHoveredObject(obj.userData.skill.name);
          (obj.material as THREE.MeshStandardMaterial).emissiveIntensity = 1;
        }
      } else {
        setHoveredObject(null);
        interactiveObjects.forEach((obj) => {
          (obj.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5;
        });
      }

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
    document.addEventListener('mousemove', onMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      document.removeEventListener('pointerlockchange', onPointerLockChange);
      document.removeEventListener('pointerlockerror', onPointerLockError);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div ref={mountRef} className="absolute inset-0" />

      {/* Instructions overlay */}
      {showInstructions && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-10 pointer-events-none">
          <div className="text-center max-w-2xl p-12 bg-black/60 border border-cyan-500/50 rounded-lg">
            <h1 className="text-6xl font-black mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              JIMMY DEFAINS
            </h1>
            <p className="text-2xl font-bold text-cyan-400 mb-8">3D INTERACTIVE PORTFOLIO</p>

            <div className="space-y-4 text-left text-gray-300 mb-8">
              <p className="text-lg font-bold text-white mb-4">🎮 CONTROLS:</p>
              <p>🖱️ <strong className="text-cyan-400">CLICK</strong> to enter the gallery</p>
              <p>⌨️ <strong className="text-cyan-400">W A S D</strong> or <strong className="text-cyan-400">Arrow Keys</strong> to move</p>
              <p>🖱️ <strong className="text-cyan-400">MOUSE</strong> to look around</p>
              <p>👁️ <strong className="text-cyan-400">CENTER CROSSHAIR</strong> on objects to interact</p>
              <p>🚪 <strong className="text-cyan-400">ESC</strong> to exit pointer lock</p>
            </div>

            <p className="text-xl font-black text-pink-500 animate-pulse pointer-events-auto cursor-pointer">
              CLICK ANYWHERE TO START
            </p>
          </div>
        </div>
      )}

      {/* Crosshair */}
      {isLocked && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
          <div className="relative w-6 h-6">
            <div className="absolute top-1/2 left-0 w-full h-px bg-cyan-400"></div>
            <div className="absolute top-0 left-1/2 w-px h-full bg-cyan-400"></div>
            <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-pink-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      )}

      {/* Hover info */}
      {isLocked && hoveredObject && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          <div className="px-6 py-3 bg-black/80 border border-cyan-500 rounded-lg backdrop-blur-sm">
            <p className="text-cyan-400 font-bold text-lg">{hoveredObject}</p>
          </div>
        </div>
      )}

      {/* Info overlay */}
      {isLocked && (
        <div className="absolute bottom-8 left-8 z-20 pointer-events-none">
          <div className="space-y-2 text-sm text-gray-400 bg-black/60 p-4 rounded border border-white/20 backdrop-blur-sm">
            <p>📍 <strong className="text-cyan-400">PARIS</strong> • Full Stack Developer</p>
            <p>📧 jimmydef@outlook.fr</p>
            <p>💼 Available • Remote</p>
          </div>
        </div>
      )}

      {/* Links */}
      {isLocked && (
        <div className="absolute bottom-8 right-8 z-20 flex gap-3">
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black/80 border border-purple-500 rounded text-purple-400 font-bold text-sm hover:bg-purple-500 hover:text-black transition-all backdrop-blur-sm"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/jimmy-defranceschi"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-black/80 border border-cyan-500 rounded text-cyan-400 font-bold text-sm hover:bg-cyan-500 hover:text-black transition-all backdrop-blur-sm"
          >
            LINKEDIN
          </a>
        </div>
      )}
    </section>
  );
}
