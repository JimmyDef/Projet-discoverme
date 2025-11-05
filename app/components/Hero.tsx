'use client';

import { useState, useEffect, useRef } from 'react';

export default function Hero() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ type: 'command' | 'output', content: string }>>([
    { type: 'output', content: 'Jimmy Defains Terminal Portfolio v1.0.0' },
    { type: 'output', content: 'Type "help" for available commands' },
    { type: 'output', content: '' },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  const commands: { [key: string]: () => string | string[] } = {
    help: () => [
      'Available commands:',
      '  about       - Learn about Jimmy',
      '  skills      - View technical skills',
      '  projects    - List projects',
      '  qrplans     - Featured project details',
      '  contact     - Get contact information',
      '  github      - Open GitHub profile',
      '  linkedin    - Open LinkedIn profile',
      '  email       - Show email address',
      '  clear       - Clear terminal',
      '  whoami      - Display current user info',
    ],
    about: () => [
      'Jimmy Defains - Full Stack Developer',
      '',
      '🎓 Formation: OpenClassrooms RNCP Niveau 6',
      '📍 Location: Paris / Île-de-France',
      '💼 Status: Available immediately',
      '🏠 Mode: Remote / Hybrid',
      '',
      'Reconversion professionnelle depuis l\'événementiel.',
      'Passionné par les architectures SaaS complexes.',
    ],
    skills: () => [
      'Technical Skills:',
      '',
      '⚛️  Frontend:',
      '   React • Next.js • TypeScript • React Query',
      '   Zustand • Tailwind CSS • Sass • Zod',
      '',
      '🔧 Backend:',
      '   Node.js • Express • Prisma • PostgreSQL • REST API',
      '',
      '🛠️  DevOps & Tools:',
      '   Docker • AWS S3 • Stripe • Sentry',
      '   Jest • React Testing Library • Git',
    ],
    projects: () => [
      'Projects:',
      '',
      '1. QRPlans (2024-2025) ⭐ FEATURED',
      '   → Application SaaS multi-tenant',
      '   → Next.js 16 • React 19 • TypeScript • Prisma',
      '   → Stripe & PayPal • AWS S3 • BullMQ • Redis',
      '',
      '2. WealthHealth (2024)',
      '   → Migration jQuery → React',
      '   → Published npm package',
      '',
      '3. ArgentBank (2024)',
      '   → Banking app with JWT auth',
      '   → Redux RTK Query • Swagger',
      '',
      '4. Les Petits Plats (2024)',
      '   → Recipe search engine',
      '   → Optimized algorithms',
      '',
      'Type "qrplans" for detailed info',
    ],
    qrplans: () => [
      '╔══════════════════════════════════════════════════════╗',
      '║              QRPlans - SaaS Platform                 ║',
      '╚══════════════════════════════════════════════════════╝',
      '',
      'Description:',
      '  Application SaaS full-stack multi-tenant développée',
      '  en solo. Système complexe de gestion de plans avec',
      '  QR codes, paiements et infrastructure cloud.',
      '',
      'Key Features:',
      '  ✓ 3 bases de données Prisma (multi-schema)',
      '  ✓ Paiements récurrents (Stripe & PayPal)',
      '  ✓ Génération dynamique QR codes et PDF',
      '  ✓ Cartes interactives avec heatmaps',
      '  ✓ Job queue avec BullMQ et Redis',
      '  ✓ Upload images + compression HEIC',
      '  ✓ Internationalisation (i18n)',
      '  ✓ Tests Jest + monitoring Sentry',
      '',
      'Tech Stack:',
      '  Next.js 16, React 19, TypeScript, Prisma,',
      '  PostgreSQL, Zustand, React Query, NextAuth v5,',
      '  Stripe, PayPal, AWS S3, Leaflet, BullMQ,',
      '  Redis, Sentry, Docker, Tailwind, Zod',
      '',
      'Status: Private repository',
    ],
    contact: () => [
      'Contact Information:',
      '',
      '📧 Email: jimmydef@outlook.fr',
      '🐙 GitHub: github.com/JimmyDef',
      '💼 LinkedIn: linkedin.com/in/jimmy-defranceschi',
      '📍 Location: Paris / Île-de-France',
      '⚡ Availability: Immediate',
      '🏠 Mode: Remote / Hybrid',
    ],
    github: () => {
      window.open('https://github.com/JimmyDef', '_blank');
      return 'Opening GitHub profile...';
    },
    linkedin: () => {
      window.open('https://www.linkedin.com/in/jimmy-defranceschi', '_blank');
      return 'Opening LinkedIn profile...';
    },
    email: () => 'jimmydef@outlook.fr',
    whoami: () => 'visitor@jimmydefains-portfolio',
    clear: () => {
      setHistory([]);
      return '';
    },
  };

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setHistory(prev => [...prev, { type: 'command', content: `visitor@jimmy:~$ ${cmd}` }]);

    if (trimmedCmd === '') {
      return;
    }

    if (trimmedCmd === 'clear') {
      commands.clear();
      return;
    }

    if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      const outputs = Array.isArray(output) ? output : [output];
      setHistory(prev => [...prev, ...outputs.map(o => ({ type: 'output' as const, content: o }))]);
    } else {
      setHistory(prev => [...prev, {
        type: 'output',
        content: `Command not found: ${trimmedCmd}. Type "help" for available commands.`
      }]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-black"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="w-full max-w-5xl">
        {/* Terminal Header */}
        <div className="bg-gray-800 rounded-t-lg px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="ml-4 text-gray-400 text-sm font-mono">
            jimmy@portfolio:~
          </span>
        </div>

        {/* Terminal Content */}
        <div className="bg-gray-900 rounded-b-lg p-6 font-mono text-sm min-h-[600px] max-h-[600px] overflow-y-auto" ref={historyRef}>
          {history.map((entry, i) => (
            <div key={i} className={entry.type === 'command' ? 'text-green-400' : 'text-gray-300'}>
              {entry.content}
            </div>
          ))}

          {/* Input Line */}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="text-green-400 mr-2">visitor@jimmy:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono"
              autoFocus
              spellCheck={false}
            />
            <span className="text-green-400 animate-pulse">▊</span>
          </form>
        </div>

        {/* Hints */}
        <div className="mt-4 text-center text-gray-500 text-sm font-mono">
          <p>💡 Tip: Try typing "help" to see all commands</p>
          <p>Click anywhere to focus the terminal</p>
        </div>
      </div>
    </section>
  );
}
