'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

export default function StorytellingPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);
  const chapter4Ref = useRef<HTMLDivElement>(null);
  const finalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Register GSAP plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    gsap.fromTo(
      heroRef.current,
      { opacity: 1, scale: 1 },
      {
        opacity: 0,
        scale: 0.8,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    // Chapter 1 - Fade in and slide
    gsap.fromTo(
      chapter1Ref.current?.querySelector('.chapter-content'),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: chapter1Ref.current,
          start: 'top 80%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );

    // Chapter 1 - Background color change
    gsap.to(chapter1Ref.current, {
      backgroundColor: '#1e3a8a',
      scrollTrigger: {
        trigger: chapter1Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Chapter 2 - Skills bars animation
    const skillBars = chapter2Ref.current?.querySelectorAll('.skill-bar');
    skillBars?.forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: bar.getAttribute('data-width') || '0%',
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          delay: index * 0.1,
        }
      );
    });

    // Chapter 2 - Text reveal
    gsap.fromTo(
      chapter2Ref.current?.querySelector('.chapter-content'),
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: chapter2Ref.current,
          start: 'top 70%',
          end: 'top 30%',
          scrub: 1,
        },
      }
    );

    // Chapter 3 - Projects cards stagger
    const projectCards = chapter3Ref.current?.querySelectorAll('.project-card');
    gsap.fromTo(
      projectCards,
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: chapter3Ref.current,
          start: 'top 70%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );

    // Chapter 4 - Experience timeline
    const timelineItems = chapter4Ref.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'top 40%',
            scrub: 1,
          },
        }
      );
    });

    // Chapter 4 - Background gradient
    gsap.to(chapter4Ref.current, {
      background: 'linear-gradient(180deg, #7c3aed 0%, #ec4899 100%)',
      scrollTrigger: {
        trigger: chapter4Ref.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    });

    // Final Section - Scale up
    gsap.fromTo(
      finalRef.current?.querySelector('.final-content'),
      { scale: 0.5, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: finalRef.current,
          start: 'top 60%',
          end: 'top 20%',
          scrub: 1,
        },
      }
    );

    // Final Section - Parallax stars
    const stars = finalRef.current?.querySelectorAll('.star');
    stars?.forEach((star, index) => {
      gsap.to(star, {
        y: -200 * (index + 1) * 0.5,
        opacity: 0,
        scrollTrigger: {
          trigger: finalRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-white overflow-x-hidden">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-purple-900 via-blue-900 to-black"
      >
        <div className="text-center z-10 px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Une Histoire
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Scroll pour découvrir mon parcours
          </p>
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="stars"></div>
        </div>
      </section>

      {/* Chapter 1: Introduction */}
      <section
        ref={chapter1Ref}
        className="min-h-screen flex items-center justify-center px-6 bg-black transition-colors duration-1000"
      >
        <div className="chapter-content max-w-4xl">
          <span className="text-cyan-400 text-sm font-mono mb-4 block">
            // Chapitre 1
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
            Tout a commencé par une{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              passion
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
            En 2021, j'ai découvert le monde du développement web. Ce qui
            n'était qu'une curiosité est devenu une véritable vocation. Chaque
            ligne de code était une nouvelle aventure, chaque bug résolu une
            victoire.
          </p>
        </div>
      </section>

      {/* Chapter 2: Skills */}
      <section
        ref={chapter2Ref}
        className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-blue-900 to-purple-900"
      >
        <div className="chapter-content max-w-4xl w-full">
          <span className="text-purple-400 text-sm font-mono mb-4 block">
            // Chapitre 2
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-12">
            Compétences acquises
          </h2>
          <div className="space-y-8">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">React & TypeScript</span>
                <span className="text-cyan-400">90%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                  data-width="90%"
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">Next.js & Node.js</span>
                <span className="text-purple-400">85%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  data-width="85%"
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">UI/UX Design</span>
                <span className="text-green-400">80%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                  data-width="80%"
                ></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-xl font-semibold">Three.js & WebGL</span>
                <span className="text-orange-400">75%</span>
              </div>
              <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="skill-bar h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                  data-width="75%"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3: Projects */}
      <section
        ref={chapter3Ref}
        className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-purple-900 to-pink-900 py-20"
      >
        <div className="max-w-6xl w-full">
          <span className="text-pink-400 text-sm font-mono mb-4 block">
            // Chapitre 3
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Projets marquants
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="project-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-400 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-gray-300 mb-4">
                Plateforme complète avec paiement sécurisé, gestion de stock et
                dashboard administrateur.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-cyan-400/20 rounded-full text-sm text-cyan-300">
                  React
                </span>
                <span className="px-3 py-1 bg-blue-400/20 rounded-full text-sm text-blue-300">
                  Node.js
                </span>
                <span className="px-3 py-1 bg-purple-400/20 rounded-full text-sm text-purple-300">
                  MongoDB
                </span>
              </div>
            </div>

            <div className="project-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">Design System</h3>
              <p className="text-gray-300 mb-4">
                Bibliothèque de composants réutilisables avec Storybook et
                documentation complète.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-purple-400/20 rounded-full text-sm text-purple-300">
                  React
                </span>
                <span className="px-3 py-1 bg-pink-400/20 rounded-full text-sm text-pink-300">
                  TypeScript
                </span>
              </div>
            </div>

            <div className="project-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-green-400 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">Social Dashboard</h3>
              <p className="text-gray-300 mb-4">
                Dashboard d'analytics pour réseaux sociaux avec graphiques
                temps réel et export PDF.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-green-400/20 rounded-full text-sm text-green-300">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-emerald-400/20 rounded-full text-sm text-emerald-300">
                  Chart.js
                </span>
              </div>
            </div>

            <div className="project-card bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-orange-400 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-3">3D Portfolio</h3>
              <p className="text-gray-300 mb-4">
                Portfolio immersif en 3D avec navigation FPS et animations
                WebGL interactives.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-orange-400/20 rounded-full text-sm text-orange-300">
                  Three.js
                </span>
                <span className="px-3 py-1 bg-red-400/20 rounded-full text-sm text-red-300">
                  WebGL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 4: Experience Timeline */}
      <section
        ref={chapter4Ref}
        className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-pink-900 to-purple-700 py-20"
      >
        <div className="max-w-4xl w-full">
          <span className="text-yellow-400 text-sm font-mono mb-4 block">
            // Chapitre 4
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mb-16">
            Le parcours
          </h2>
          <div className="space-y-16 relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-white/20"></div>

            <div className="timeline-item relative pl-8 md:pl-0 md:flex md:items-center">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-400 rounded-full -ml-2"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold mb-2">Freelance Developer</h3>
                <p className="text-cyan-400">2023 - Présent</p>
              </div>
              <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                <p className="text-gray-300">
                  Développement d'applications web modernes pour divers clients
                </p>
              </div>
            </div>

            <div className="timeline-item relative pl-8 md:pl-0 md:flex md:items-center md:flex-row-reverse">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-purple-400 rounded-full -ml-2"></div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-2">Junior Developer</h3>
                <p className="text-purple-400">2022 - 2023</p>
              </div>
              <div className="md:w-1/2 md:pr-12 md:text-right mt-2 md:mt-0">
                <p className="text-gray-300">
                  StartUp Tech - Développement React et maintenance
                </p>
              </div>
            </div>

            <div className="timeline-item relative pl-8 md:pl-0 md:flex md:items-center">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-pink-400 rounded-full -ml-2"></div>
              <div className="md:w-1/2 md:pr-12 md:text-right">
                <h3 className="text-2xl font-bold mb-2">Formation</h3>
                <p className="text-pink-400">2022 - 2023</p>
              </div>
              <div className="md:w-1/2 md:pl-12 mt-2 md:mt-0">
                <p className="text-gray-300">
                  OpenClassrooms - RNCP Niveau 6
                </p>
              </div>
            </div>

            <div className="timeline-item relative pl-8 md:pl-0 md:flex md:items-center md:flex-row-reverse">
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-yellow-400 rounded-full -ml-2"></div>
              <div className="md:w-1/2 md:pl-12">
                <h3 className="text-2xl font-bold mb-2">Les Débuts</h3>
                <p className="text-yellow-400">2021</p>
              </div>
              <div className="md:w-1/2 md:pr-12 md:text-right mt-2 md:mt-0">
                <p className="text-gray-300">
                  Découverte du développement web et premiers projets
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section
        ref={finalRef}
        className="min-h-screen flex items-center justify-center px-6 bg-black relative overflow-hidden"
      >
        <div className="final-content text-center z-10">
          <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Et ce n'est que le début...
          </h2>
          <p className="text-2xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Prêt à créer quelque chose d'extraordinaire ensemble ?
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-xl font-semibold hover:scale-105 transition-transform duration-300">
            Contactez-moi
          </button>
        </div>
        {/* Floating stars */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="star absolute w-2 h-2 bg-white rounded-full top-[10%] left-[10%]"></div>
          <div className="star absolute w-1 h-1 bg-white rounded-full top-[20%] right-[15%]"></div>
          <div className="star absolute w-2 h-2 bg-cyan-400 rounded-full top-[40%] left-[20%]"></div>
          <div className="star absolute w-1 h-1 bg-purple-400 rounded-full top-[60%] right-[25%]"></div>
          <div className="star absolute w-2 h-2 bg-pink-400 rounded-full bottom-[20%] left-[30%]"></div>
          <div className="star absolute w-1 h-1 bg-white rounded-full bottom-[40%] right-[20%]"></div>
        </div>
      </section>
    </div>
  );
}
