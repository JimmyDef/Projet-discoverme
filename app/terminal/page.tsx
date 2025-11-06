'use client';

import { useState, useEffect, useRef } from 'react';

interface CommandHistory {
  input: string;
  output: string | JSX.Element;
}

export default function TerminalPortfolio() {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const asciiArt = `
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ██████╗ ███████╗██╗   ██╗    ██████╗  ██████╗ ██████╗  ║
║   ██╔══██╗██╔════╝██║   ██║    ██╔══██╗██╔═══██╗██╔══██╗ ║
║   ██║  ██║█████╗  ██║   ██║    ██████╔╝██║   ██║██████╔╝ ║
║   ██║  ██║██╔══╝  ╚██╗ ██╔╝    ██╔═══╝ ██║   ██║██╔══██╗ ║
║   ██████╔╝███████╗ ╚████╔╝     ██║     ╚██████╔╝██║  ██║ ║
║   ╚═════╝ ╚══════╝  ╚═══╝      ╚═╝      ╚═════╝ ╚═╝  ╚═╝ ║
║                                                           ║
║         Portfolio Terminal v1.0.0 - React/TypeScript     ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝
`;

  const commands: { [key: string]: () => string | JSX.Element } = {
    help: () => `
Commandes disponibles:

  about       - Afficher les informations personnelles
  skills      - Lister les compétences techniques
  projects    - Voir les projets réalisés
  experience  - Parcourir l'expérience professionnelle
  education   - Afficher la formation
  contact     - Obtenir les coordonnées
  social      - Liens vers les réseaux sociaux
  cv          - Télécharger le CV (simulation)
  clear       - Effacer le terminal
  whoami      - Qui suis-je ?
  date        - Afficher la date et l'heure
  ls          - Lister les sections disponibles
  cat [file]  - Afficher le contenu (ex: cat skills.txt)
  help        - Afficher cette aide
`,
    about: () => `
┌─────────────────────────────────────────────────────────┐
│ À PROPOS                                                │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ Nom:        Développeur React/TypeScript               │
│ Métier:     Développeur d'Application Web              │
│ Diplôme:    RNCP Niveau 6 (OpenClassrooms)             │
│ Passion:    Créer des expériences web innovantes       │
│ Statut:     Disponible pour nouvelles opportunités     │
│                                                         │
│ "Code is poetry, debug is detective work"              │
│                                                         │
└─────────────────────────────────────────────────────────┘
`,
    skills: () => `
╔══════════════════════════════════════════════════════════╗
║ COMPÉTENCES TECHNIQUES                                   ║
╠══════════════════════════════════════════════════════════╣
║                                                          ║
║ Frontend:                                                ║
║   ▰▰▰▰▰▰▰▰▰▱ React.js            90%                    ║
║   ▰▰▰▰▰▰▰▰▰▱ TypeScript          90%                    ║
║   ▰▰▰▰▰▰▰▰▱▱ Next.js             85%                    ║
║   ▰▰▰▰▰▰▰▰▱▱ JavaScript (ES6+)   85%                    ║
║   ▰▰▰▰▰▰▰▰▱▱ HTML5/CSS3          85%                    ║
║   ▰▰▰▰▰▰▰▱▱▱ Tailwind CSS        75%                    ║
║                                                          ║
║ Backend:                                                 ║
║   ▰▰▰▰▰▰▰▱▱▱ Node.js             70%                    ║
║   ▰▰▰▰▰▰▱▱▱▱ Express.js          65%                    ║
║   ▰▰▰▰▰▰▱▱▱▱ MongoDB             60%                    ║
║                                                          ║
║ Outils:                                                  ║
║   ▰▰▰▰▰▰▰▰▱▱ Git/GitHub          85%                    ║
║   ▰▰▰▰▰▰▰▱▱▱ VS Code             75%                    ║
║   ▰▰▰▰▰▰▰▱▱▱ Figma               70%                    ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
`,
    projects: () => `
═══════════════════════════════════════════════════════════
 PROJETS RÉALISÉS
═══════════════════════════════════════════════════════════

[1] 🎯 E-Commerce Platform
    Tech: React, TypeScript, Node.js, MongoDB
    Desc: Plateforme de vente en ligne avec paiement Stripe
    Link: github.com/user/ecommerce-app
    ────────────────────────────────────────────────────

[2] 🎨 Design System Library
    Tech: React, Storybook, TypeScript
    Desc: Bibliothèque de composants réutilisables
    Link: github.com/user/design-system
    ────────────────────────────────────────────────────

[3] 📱 Social Media Dashboard
    Tech: Next.js, TailwindCSS, API REST
    Desc: Dashboard analytics pour réseaux sociaux
    Link: github.com/user/social-dashboard
    ────────────────────────────────────────────────────

[4] 🎮 Portfolio Interactive 3D
    Tech: Three.js, React, WebGL
    Desc: Portfolio immersif avec navigation FPS
    Link: github.com/user/3d-portfolio
    ────────────────────────────────────────────────────

Type 'cat project-[1-4].txt' pour plus de détails
`,
    experience: () => `
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ EXPÉRIENCE PROFESSIONNELLE                           ┃
┡━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┩
│                                                      │
│ 2023 - Présent                                       │
│ ► Développeur Frontend - Freelance                  │
│   • Développement d'applications React/TypeScript   │
│   • Création de sites web responsive et modernes    │
│   • Optimisation des performances web                │
│                                                      │
│ 2022 - 2023                                          │
│ ► Développeur Junior - StartUp Tech                 │
│   • Intégration de maquettes Figma en React         │
│   • Maintenance et amélioration du code existant    │
│   • Collaboration en équipe Agile/Scrum             │
│                                                      │
│ 2021 - 2022                                          │
│ ► Stage Développeur Web - Agence Digital            │
│   • Développement de sites vitrine avec Next.js     │
│   • Intégration d'APIs tierces                       │
│   • Tests et debugging                               │
│                                                      │
└──────────────────────────────────────────────────────┘
`,
    education: () => `
╭──────────────────────────────────────────────────────╮
│ 🎓 FORMATION                                         │
├──────────────────────────────────────────────────────┤
│                                                      │
│ 2022-2023                                            │
│ Développeur d'Application Web (RNCP Niveau 6)       │
│ OpenClassrooms                                       │
│ • React.js & TypeScript                             │
│ • Architecture MVC                                   │
│ • API REST & GraphQL                                 │
│ • Tests unitaires & E2E                              │
│                                                      │
│ 2020-2021                                            │
│ Formation Développement Web                          │
│ Autodidacte / FreeCodeCamp                           │
│ • HTML, CSS, JavaScript                              │
│ • Responsive Design                                  │
│ • Git & GitHub                                       │
│                                                      │
╰──────────────────────────────────────────────────────╯
`,
    contact: () => `
┌───────────────────────────────────────────────────────┐
│ 📧 CONTACT                                            │
├───────────────────────────────────────────────────────┤
│                                                       │
│  Email:      dev.portfolio@example.com                │
│  Téléphone:  +33 6 12 34 56 78                        │
│  Location:   Paris, France                            │
│  Website:    www.dev-portfolio.fr                     │
│                                                       │
│  💼 Disponible pour: Freelance, CDI, Missions        │
│                                                       │
└───────────────────────────────────────────────────────┘
`,
    social: () => `
╔════════════════════════════════════════════════════════╗
║ 🌐 RÉSEAUX SOCIAUX                                     ║
╠════════════════════════════════════════════════════════╣
║                                                        ║
║  GitHub:      github.com/devportfolio                  ║
║  LinkedIn:    linkedin.com/in/devportfolio             ║
║  Twitter/X:   @devportfolio                            ║
║  CodePen:     codepen.io/devportfolio                  ║
║  Portfolio:   dev-portfolio.fr                         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
`,
    cv: () => `
📄 Téléchargement du CV...

[████████████████████████████████] 100%

✅ CV téléchargé avec succès: cv-dev-portfolio-2025.pdf

(Simulation - Dans une version réelle, ceci déclencherait
un téléchargement de fichier PDF)
`,
    whoami: () => 'dev-portfolio@terminal:~$ Un développeur passionné par le code et l\'innovation web',
    date: () => new Date().toLocaleString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }),
    ls: () => `
about.txt       skills.txt      projects/
experience.txt  education.txt   contact.txt
social.txt      cv.pdf          README.md
`,
    cat: (args?: string) => {
      if (!args) return 'cat: missing file operand\nTry: cat skills.txt';

      const fileMap: { [key: string]: string } = {
        'skills.txt': commands.skills() as string,
        'about.txt': commands.about() as string,
        'contact.txt': commands.contact() as string,
        'README.md': '# Dev Portfolio Terminal\nWelcome to my interactive terminal portfolio!\nType "help" to get started.',
      };

      return fileMap[args] || `cat: ${args}: No such file or directory`;
    },
  };

  useEffect(() => {
    // Welcome message
    setHistory([
      {
        input: '',
        output: (
          <div className="text-green-400">
            <pre className="text-xs leading-tight">{asciiArt}</pre>
            <p className="mt-4 text-sm">Bienvenue sur mon portfolio interactif !</p>
            <p className="text-sm">Tapez <span className="text-yellow-400 font-bold">help</span> pour voir les commandes disponibles.</p>
            <p className="text-xs text-gray-500 mt-2">Astuce: Utilisez ↑ ↓ pour naviguer dans l'historique des commandes</p>
          </div>
        ),
      },
    ]);

    // Focus input on mount
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Auto-scroll to bottom
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const executeCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim();
    const [command, ...args] = trimmedCmd.split(' ');

    if (trimmedCmd === '') return;

    // Add to command history
    setCommandHistory(prev => [...prev, trimmedCmd]);
    setHistoryIndex(-1);

    let output: string | JSX.Element;

    if (command === 'clear') {
      setHistory([]);
      return;
    }

    if (commands[command]) {
      if (command === 'cat') {
        output = commands[command](args[0]);
      } else {
        output = commands[command]();
      }
    } else {
      output = `bash: ${command}: command not found\nTapez 'help' pour voir les commandes disponibles.`;
    }

    setHistory(prev => [
      ...prev,
      {
        input: trimmedCmd,
        output,
      },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const availableCommands = Object.keys(commands);
      const matches = availableCommands.filter(cmd => cmd.startsWith(input));
      if (matches.length === 1) {
        setInput(matches[0]);
      }
    } else if (e.ctrlKey && e.key === 'l') {
      e.preventDefault();
      setHistory([]);
    }
  };

  return (
    <div
      className="min-h-screen bg-black text-green-400 font-mono p-4 overflow-hidden"
      onClick={() => inputRef.current?.focus()}
    >
      <div
        ref={terminalRef}
        className="max-w-5xl mx-auto h-screen overflow-y-auto pb-32 scrollbar-thin scrollbar-thumb-green-700 scrollbar-track-gray-900"
      >
        {history.map((entry, index) => (
          <div key={index} className="mb-4">
            {entry.input && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-cyan-400">dev@portfolio</span>
                <span className="text-purple-400">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
                <span className="text-green-300">{entry.input}</span>
              </div>
            )}
            <div className="mt-1 text-sm whitespace-pre-wrap">
              {entry.output}
            </div>
          </div>
        ))}

        <form onSubmit={handleSubmit} className="flex items-center gap-2 text-sm">
          <span className="text-cyan-400">dev@portfolio</span>
          <span className="text-purple-400">:</span>
          <span className="text-blue-400">~</span>
          <span className="text-white">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-green-300 caret-green-400"
            autoFocus
            spellCheck={false}
            autoComplete="off"
          />
          <span className="animate-pulse text-green-400">▊</span>
        </form>
      </div>

      {/* Hint Panel */}
      <div className="fixed bottom-4 right-4 bg-gray-900 border border-green-700 rounded p-3 text-xs max-w-xs opacity-75 hover:opacity-100 transition-opacity">
        <p className="text-yellow-400 font-bold mb-1">💡 Astuces</p>
        <p className="text-gray-400">• ↑ ↓ : Historique</p>
        <p className="text-gray-400">• Tab : Auto-complétion</p>
        <p className="text-gray-400">• Ctrl+L : Clear</p>
      </div>
    </div>
  );
}
