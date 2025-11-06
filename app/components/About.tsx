export default function About() {
  return (
    <section id="about" className="min-h-screen p-8 bg-white">
      <div className="max-w-7xl mx-auto border-4 border-black bg-white">
        <div className="border-b-4 border-black p-6">
          <h2 className="text-5xl font-serif font-bold text-center" style={{ fontFamily: 'Times New Roman, serif' }}>PROFESSIONAL PROFILE</h2>
          <p className="text-center font-serif italic text-sm mt-2">An In-Depth Look at Skills and Experience</p>
        </div>

        <div className="grid grid-cols-12 gap-8 p-8">
          <div className="col-span-8 border-r-2 border-black pr-8">
            <p className="text-xs font-sans uppercase tracking-wider mb-4 text-gray-600">CAREER FEATURE</p>
            <div className="columns-2 gap-6 text-justify font-serif leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
              <p className="mb-4">
                <span className="text-5xl float-left mr-2 leading-none font-bold">A</span>
                skilled full-stack developer with a unique background in event management, Jimmy Defains brings a fresh perspective to modern web development. His career transition exemplifies adaptability and determination in today's rapidly evolving tech landscape.
              </p>
              <p className="mb-4">
                Holding a JavaScript React Developer certification from OpenClassrooms (RNCP Niveau 6), Defains has demonstrated proficiency in modern web technologies. His specialization includes React, TypeScript, and Next.js, with a focus on creating intuitive user interfaces and high-performance applications.
              </p>
              <p className="mb-4">
                His portfolio showcases versatility, ranging from showcase websites to complex SaaS applications with advanced features. This breadth of experience demonstrates his capability across the full spectrum of web development, from front-end design to back-end architecture.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gray-100 border-2 border-black">
              <h3 className="text-2xl font-serif font-bold mb-4" style={{ fontFamily: 'Times New Roman, serif' }}>Education & Certification</h3>
              <div className="font-serif">
                <p className="mb-2"><strong>JavaScript React Developer</strong></p>
                <p className="text-sm text-gray-700">OpenClassrooms • RNCP Niveau 6 • Certified 2024</p>
                <p className="text-sm mt-3 italic">Comprehensive training in modern web development, focusing on React ecosystem, TypeScript, and full-stack development best practices.</p>
              </div>
            </div>
          </div>

          <div className="col-span-4">
            <p className="text-xs font-sans uppercase tracking-wider mb-4 pb-2 border-b-2 border-black font-bold">TECHNICAL SKILLS</p>
            <div className="space-y-3 font-serif text-sm">
              {[
                { name: 'React', level: '90%' },
                { name: 'TypeScript', level: '85%' },
                { name: 'Next.js', level: '88%' },
                { name: 'Node.js', level: '80%' },
                { name: 'Tailwind CSS', level: '90%' },
                { name: 'Prisma', level: '82%' },
                { name: 'Docker', level: '75%' },
                { name: 'Git', level: '85%' },
              ].map(skill => (
                <div key={skill.name} className="border border-black p-3">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold">{skill.name}</span>
                    <span className="text-xs">{skill.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200">
                    <div className="h-full bg-black" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-black text-white">
              <p className="text-xs font-sans uppercase tracking-wider mb-3 font-bold">LOCATION & AVAILABILITY</p>
              <div className="font-serif text-sm space-y-2">
                <p>📍 Paris, Île-de-France</p>
                <p>💼 Available Immediately</p>
                <p>🌐 Remote • Hybrid</p>
                <p>⚡ Response {'<'} 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
