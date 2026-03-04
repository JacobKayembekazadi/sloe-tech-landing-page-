import React from 'react';

const projects = [
  {
    title: "Sebenza",
    summary: "Legal practice management SaaS for South African law firms. Billing, cases, client portal, and AI-assisted workflows.",
    type: "SaaS / LegalTech",
    github: "https://github.com/JacobKayembekazadi/SEBENZAMVP1",
    demo: "https://app.sebenzas.com",
    tags: ["React", "TypeScript", "Neon Postgres", "Vercel"],
  },
  {
    title: "ICON Command Center",
    summary: "Live Shopify intelligence dashboard with AI-generated insights. Built for a $30M DTC menswear brand.",
    type: "AI / E-commerce",
    github: "https://github.com/JacobKayembekazadi/ICON-Command-Center",
    demo: "https://icon-command-center.vercel.app",
    tags: ["React", "Recharts", "Gemini AI", "Shopify API"],
  },
  {
    title: "Sloe Skills",
    summary: "Open-source agent skill packs. Structured knowledge files that make AI agents dramatically better at specific tasks.",
    type: "Open Source / AI",
    github: "https://github.com/JacobKayembekazadi/sloe-skills",
    demo: "https://github.com/JacobKayembekazadi/sloe-skills",
    tags: ["AI Agents", "Shopify", "n8n", "System Design"],
  },
  {
    title: "Funnel Flow",
    summary: "AI-powered marketing funnel analysis with Google Gemini AI.",
    type: "AI / Marketing",
    github: "https://github.com/JacobKayembekazadi/funnel-flow",
    demo: "https://funnel-flow-nine.vercel.app/",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Firebase"],
  },
  {
    title: "7S Analyzer",
    summary: "McKinsey 7-S Framework analysis powered by AI for strategic alignment.",
    type: "AI / Strategy",
    github: "https://github.com/JacobKayembekazadi/7S-analyzer",
    demo: "https://7-s-analyzer.vercel.app/",
    tags: ["Next.js", "TypeScript", "Genkit", "Gemini 2.0"],
  },
  {
    title: "Small Biz Finance Tracker",
    summary: "Multi-product financial dashboard with Google Sheets sync and real-time analytics.",
    type: "Finance / SaaS",
    github: "https://github.com/JacobKayembekazadi/small-biz-finance-tracker",
    demo: "https://small-biz-finance-tracker.vercel.app/",
    tags: ["React", "TypeScript", "Google Sheets", "Vite"],
  },
];

const ecosystem = [
  {
    name: "Sloe Labs",
    url: "https://sloelabs.com",
    role: "Deploys",
    desc: "AI consulting & client delivery",
    color: "text-signal-green",
  },
  {
    name: "Sloe Tech",
    url: "#",
    role: "Builds",
    desc: "Open-source tools & infrastructure",
    color: "text-paper",
    active: true,
  },
  {
    name: "Sloe Campus",
    url: "#waitlist",
    role: "Teaches",
    desc: "Learn to build & maintain the stack",
    color: "text-ash",
    badge: "Coming soon",
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [waitlistEmail, setWaitlistEmail] = React.useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = React.useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to email service
    setWaitlistSubmitted(true);
  };

  return (
    <main className="min-h-screen flex flex-col">
      {/* NAV */}
      <header className="w-full border-b border-graphite/70 bg-ink sticky top-0 z-50">
        <div className="mx-auto max-w-content px-4 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-lg text-paper tracking-tight">SLOE <span className="text-signal-green">TECH</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
            <a href="#projects" className="hover:text-paper transition">Projects</a>
            <a href="#ecosystem" className="hover:text-paper transition">Ecosystem</a>
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition">GitHub</a>
          </nav>

          <a href="#waitlist" className="hidden md:block px-4 py-2 rounded-full border border-signal-green/60 text-sm text-paper hover:bg-signal-green hover:text-ink transition">
            Campus waitlist
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-paper p-2" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-graphite/70 bg-ink">
            <nav className="px-4 py-4 flex flex-col gap-4">
              <a href="#projects" className="text-mist hover:text-paper transition py-2" onClick={() => setMobileMenuOpen(false)}>Projects</a>
              <a href="#ecosystem" className="text-mist hover:text-paper transition py-2" onClick={() => setMobileMenuOpen(false)}>Ecosystem</a>
              <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="text-mist hover:text-paper transition py-2">GitHub</a>
              <a href="#waitlist" className="bg-signal-green text-ink px-4 py-3 rounded-full text-sm text-center font-medium mt-2" onClick={() => setMobileMenuOpen(false)}>Campus waitlist</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="w-full bg-ink pt-16 pb-16">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-graphite/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mist">
              R&D arm of the Sloe portfolio
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight">
              Open-source tools built<br className="hidden md:block" /> in production.
            </h1>
            <p className="text-ash max-w-xl">
              Sloe Tech is where we build and open-source the infrastructure behind Sloe Labs client work.
              Real tools, built for real use cases — not tutorials.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="bg-signal-green text-ink px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                View projects
              </a>
              <a href="https://sloelabs.com" target="_blank" rel="noopener noreferrer" className="text-paper/80 hover:text-paper text-sm rounded-full px-5 py-3 border border-graphite/70 transition">
                Work with us →
              </a>
            </div>
            <p className="text-xs text-ash">
              Part of the Sloe portfolio · <a href="https://sloelabs.com" className="text-signal-green hover:underline">Sloe Labs</a> · Sloe Campus (coming soon)
            </p>
          </div>

          {/* Latest Projects panel */}
          <div className="bg-graphite/40 border border-graphite rounded-2xl p-5 space-y-4">
            <h2 className="font-display text-lg flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-green inline-block animate-pulse" />
              Latest releases
            </h2>
            <div className="space-y-3">
              {projects.slice(0, 3).map((project) => (
                <div key={project.title} className="rounded-xl bg-ink/30 border border-graphite/60 p-4 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-medium text-sm">{project.title}</p>
                    <span className="text-[10px] px-2 py-[2px] bg-ink/40 border border-graphite rounded-full uppercase tracking-[0.18em] text-mist">live</span>
                  </div>
                  <p className="text-xs text-ash">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 bg-graphite/60 text-mist rounded">{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-xs text-signal-green hover:underline">View →</a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs text-mist hover:text-paper">GitHub</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section id="ecosystem" className="w-full bg-ink py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-display text-2xl">The Sloe portfolio</h2>
            <p className="text-ash text-sm max-w-xl mx-auto">Three companies. One flywheel. Sloe Tech builds it. Sloe Labs deploys it for clients. Sloe Campus teaches it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {ecosystem.map((e) => (
              <a key={e.name} href={e.url} target={e.url.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className={`bg-graphite/40 border rounded-2xl p-6 space-y-2 transition hover:border-signal-green/40 ${e.active ? 'border-signal-green/40' : 'border-graphite'}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-display text-lg ${e.color}`}>{e.name}</span>
                  {e.badge && <span className="text-[10px] px-2 py-0.5 bg-ink/40 border border-graphite rounded-full text-ash uppercase tracking-widest">{e.badge}</span>}
                  {e.active && <span className="text-[10px] px-2 py-0.5 bg-signal-green/10 border border-signal-green/30 rounded-full text-signal-green uppercase tracking-widest">you are here</span>}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-ash">{e.role}</p>
                <p className="text-sm text-mist">{e.desc}</p>
              </a>
            ))}
          </div>
          <div className="text-center">
            <p className="text-xs text-ash">All tools are MIT licensed. Use them, fork them, ship them.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full bg-ink py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">Projects</h2>
              <p className="text-ash text-sm">Open-source. Production-tested. MIT licensed.</p>
            </div>
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="text-sm text-mist hover:text-paper transition">
              View all on GitHub →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.title} className="bg-graphite/40 border border-graphite rounded-2xl p-5 flex flex-col justify-between shadow-card">
                <div className="space-y-3">
                  <p className="text-xs inline-flex px-3 py-1 rounded-full bg-ink/30 border border-graphite text-mist">{project.type}</p>
                  <h3 className="font-display text-lg leading-tight">{project.title}</h3>
                  <p className="text-sm text-ash">{project.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] px-2 py-0.5 bg-graphite/60 text-mist rounded">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-sm text-signal-green hover:underline">View Demo →</a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-sm text-mist hover:text-paper">View on GitHub →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS WAITLIST */}
      <section id="waitlist" className="w-full bg-graphite/20 py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 text-center space-y-4">
          <p className="text-xs uppercase tracking-[0.25em] text-ash">Coming soon</p>
          <h2 className="font-display text-2xl">Sloe Campus</h2>
          <p className="text-ash text-sm max-w-xl mx-auto">
            Learn to build and maintain the exact stack behind these tools. AI-native curriculum, real projects, no fluff. Join the waitlist to get early access.
          </p>
          {waitlistSubmitted ? (
            <p className="text-signal-green text-sm font-medium">You're on the list. We'll reach out when Campus opens.</p>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={waitlistEmail}
                onChange={(e) => setWaitlistEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-full bg-ink border border-graphite text-paper text-sm focus:outline-none focus:border-signal-green"
                required
              />
              <button type="submit" className="bg-signal-green text-ink px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition whitespace-nowrap">
                Join waitlist
              </button>
            </form>
          )}
          <p className="text-xs text-ash/70">No spam. You'll hear from us when it's ready.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-ink border-t border-graphite/80 py-8 mt-auto">
        <div className="mx-auto max-w-content px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ash/80">
          <p>© {new Date().getFullYear()} Sloe Tech · Part of the <a href="https://sloelabs.com" className="text-signal-green hover:underline">Sloe portfolio</a></p>
          <div className="flex gap-4">
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
            <a href="https://sloelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper">Sloe Labs</a>
            <a href="#waitlist" className="hover:text-paper">Campus waitlist</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
