'use client';

import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  isPrivate?: boolean;
  features: string[];
  year: string;
}

export default function Projects() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const projects: Project[] = [
    {
      title: 'QRPlans SaaS',
      year: '2024-2025',
      description: 'Multi-tenant SaaS platform with advanced payment systems, cloud storage, and asynchronous job processing.',
      technologies: ['Next.js 16', 'React 19', 'TypeScript', 'Prisma', '3x PostgreSQL', 'Stripe', 'PayPal', 'AWS S3', 'BullMQ', 'Redis'],
      isPrivate: true,
      features: [
        'Multi-tenant architecture with 3 separate databases',
        'Recurring payment systems (Stripe & PayPal)',
        'AWS S3 cloud storage integration',
        'Asynchronous job queue with BullMQ + Redis',
        'Real-time error tracking with Sentry',
        'Advanced state management with Zustand',
      ],
    },
    {
      title: 'WealthHealth',
      year: '2024',
      description: 'jQuery to React migration project with Redux Toolkit. Published reusable component as npm package.',
      technologies: ['React', 'Redux Toolkit', 'TypeScript', 'npm', 'Vite'],
      githubUrl: 'https://github.com/JimmyDef/Projet-WealthHealth',
      features: [
        'Complete jQuery to React migration',
        'State management with Redux Toolkit',
        'Published npm package',
        'Performance optimization',
      ],
    },
    {
      title: 'ArgentBank',
      year: '2024',
      description: 'Banking application with JWT authentication and Redux RTK Query integration.',
      technologies: ['React', 'Redux', 'RTK Query', 'JWT', 'Swagger', 'TypeScript'],
      githubUrl: 'https://github.com/JimmyDef/Projet-argentBank',
      features: [
        'Secure JWT authentication system',
        'Redux RTK Query for API calls',
        'Swagger/OpenAPI documentation',
        'Protected routes and user profiles',
      ],
    },
    {
      title: 'SportSee',
      year: '2023',
      description: 'Sports tracking dashboard with interactive data visualization using Recharts.',
      technologies: ['React', 'Recharts', 'TypeScript', 'CSS3'],
      githubUrl: 'https://github.com/JimmyDef/Projet-SportSee',
      features: [
        'Interactive data visualizations',
        'Custom chart components',
        'Responsive dashboard design',
        'Performance metrics tracking',
      ],
    },
    {
      title: 'Les Petits Plats',
      year: '2023',
      description: 'Recipe filtering application with advanced search algorithms in vanilla JavaScript.',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Algorithm'],
      githubUrl: 'https://github.com/JimmyDef/Projet-LesPetitsPlats',
      features: [
        'Advanced search algorithm',
        'Multi-criteria filtering system',
        'Vanilla JavaScript (no framework)',
        'Performance-optimized search',
      ],
    },
  ];

  const toggleFlip = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      style={{ perspective: '2000px' }}
    >
      {/* Parallax background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="perspective-card h-[500px]"
              style={{
                perspective: '1500px',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 cursor-pointer ${
                  flippedCards[index] ? 'rotate-y-180' : ''
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flippedCards[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}
                onClick={() => toggleFlip(index)}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl flex flex-col"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-sm text-purple-300 font-semibold">{project.year}</span>
                    {project.isPrivate && (
                      <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/50 text-yellow-400 text-xs rounded-full font-semibold">
                        PRIVATE
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>

                  <p className="text-slate-300 text-sm mb-4 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 text-blue-200 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-200 rounded-full text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="mt-auto pt-4 border-t border-white/10">
                    <p className="text-center text-sm text-slate-400">
                      Click to see details →
                    </p>
                  </div>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-xl border border-purple-400/30 rounded-2xl p-6 shadow-2xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>

                  <ul className="space-y-2 mb-6">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-emerald-400 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-white/10 border border-white/20 text-white rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold text-center hover:scale-105 transition-transform"
                      >
                        View on GitHub →
                      </a>
                    ) : (
                      <div className="px-4 py-3 bg-slate-800/50 border border-slate-700 text-slate-400 rounded-lg text-center text-sm">
                        Private Repository
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Explore more projects on my GitHub profile
          </p>
          <a
            href="https://github.com/JimmyDef"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow-2xl shadow-purple-500/50 hover:scale-105 hover:shadow-purple-500/70 transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
            </svg>
            View All Projects
          </a>
        </div>
      </div>

      <style jsx>{`
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
