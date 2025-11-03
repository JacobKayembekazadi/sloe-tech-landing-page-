import React from 'react';

const projects = [
  {
    title: "Funnel Flow",
    summary: "AI-powered marketing funnel analysis with Google Gemini AI.",
    type: "AI / Marketing",
    github: "https://github.com/JacobKayembekazadi/funnel-flow",
    demo: "https://funnel-flow-nine.vercel.app/",
    campus: "https://sloecampus.com",
    tags: ["Next.js", "TypeScript", "Gemini AI", "Firebase"],
  },
  {
    title: "7S Analyzer",
    summary: "McKinsey 7-S Framework analysis powered by AI for strategic alignment.",
    type: "AI / Strategy",
    github: "https://github.com/JacobKayembekazadi/7S-analyzer",
    demo: "https://7-s-analyzer.vercel.app/",
    campus: "https://sloecampus.com",
    tags: ["Next.js", "TypeScript", "Genkit", "Gemini 2.0"],
  },
  {
    title: "Small Biz Finance Tracker",
    summary: "Multi-product financial dashboard with Google Sheets sync and real-time analytics.",
    type: "Finance / SaaS",
    github: "https://github.com/JacobKayembekazadi/small-biz-finance-tracker",
    demo: "https://small-biz-finance-tracker.vercel.app/",
    campus: "https://sloecampus.com",
    tags: ["React", "TypeScript", "Google Sheets", "Vite"],
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <main className="min-h-screen flex flex-col">
      {/* NAV */}
      <header className="w-full border-b border-graphite/70 bg-ink sticky top-0 z-50">
        <div className="mx-auto max-w-content px-4 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/sloe-tech-logo-1.png" alt="SLOE Tech Logo" className="h-12 w-auto" />
          </a>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
            <a href="#projects" className="hover:text-paper transition">Projects</a>
            <a href="#about" className="hover:text-paper transition">About</a>
            <a
              href="https://github.com/JacobKayembekazadi"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition"
            >
              GitHub
            </a>
          </nav>
          
          {/* Desktop CTA */}
          <a
            href="https://sloecampus.com"
            className="hidden md:block px-4 py-2 rounded-full border border-signal-green/60 text-sm text-paper hover:bg-signal-green hover:text-ink transition"
          >
            Join SLOE Campus
          </a>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-paper p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-graphite/70 bg-ink">
            <nav className="px-4 py-4 flex flex-col gap-4">
              <a 
                href="#projects" 
                className="text-mist hover:text-paper transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#about" 
                className="text-mist hover:text-paper transition py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="https://github.com/JacobKayembekazadi" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-mist hover:text-paper transition py-2"
              >
                GitHub
              </a>
              <a 
                href="https://sloecampus.com" 
                className="bg-signal-green text-ink px-4 py-3 rounded-full text-sm text-center font-medium mt-2"
              >
                Join SLOE Campus
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="w-full bg-ink pt-16 pb-16">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-[1.1fr,0.9fr] gap-10 items-start">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-graphite/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mist">
              Open source in motion
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight">
              Open-source tools for
              <br className="hidden md:block" /> creatives & founders.
            </h1>
            <p className="text-ash max-w-xl">
              Built by SLOE Tech. Used by SLOE Media. Taught inside SLOE Campus.
              We build it in public so non-technical people can learn it too.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-signal-green text-ink px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition"
              >
                View projects
              </a>
              <a
                href="https://sloecampus.com"
                className="text-paper/80 hover:text-paper text-sm rounded-full px-5 py-3 border border-graphite/70 transition"
              >
                Learn this in SLOE Campus
              </a>
            </div>
            <p className="text-xs text-ash">
              New: A-Star track for non-technical builders → inside Campus.
            </p>
          </div>

          {/* Latest Projects panel */}
          <div className="bg-graphite/40 border border-graphite rounded-2xl p-5 space-y-4">
            <h2 className="font-display text-lg flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-signal-green inline-block" />
              Latest releases
            </h2>
            <div className="space-y-3">
              {projects.map((project) => (
                <div
                    key={project.title}
                    className="rounded-xl bg-ink/30 border border-graphite/60 p-4 space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-medium text-sm">{project.title}</p>
                      <span className="text-[10px] px-2 py-[2px] bg-ink/40 border border-graphite rounded-full uppercase tracking-[0.18em] text-mist">
                        live
                      </span>
                    </div>
                    <p className="text-xs text-ash">{project.summary}</p>
                    {project.tags && (
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] px-2 py-0.5 bg-graphite/60 text-mist rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <div className="flex items-center gap-3 flex-wrap">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-signal-green hover:underline"
                        >
                          View Demo →
                        </a>
                      )}
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-mist hover:text-paper"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.campus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-mist hover:text-paper"
                      >
                        Learn in Campus
                      </a>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="w-full bg-ink py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl">Projects</h2>
              <p className="text-ash text-sm">
                Open-source, documented, and tied to SLOE Campus.
              </p>
            </div>
            <a
              href="https://github.com/JacobKayembekazadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-mist hover:text-paper transition"
            >
              View all on GitHub →
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-graphite/40 border border-graphite rounded-2xl p-5 flex flex-col justify-between shadow-card"
              >
                <div className="space-y-3">
                  <p className="text-xs inline-flex px-3 py-1 rounded-full bg-ink/30 border border-graphite text-mist">
                    {project.type}
                  </p>
                  <h3 className="font-display text-lg leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm text-ash">{project.summary}</p>
                  {project.tags && (
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 bg-graphite/60 text-mist rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-signal-green hover:underline"
                    >
                      View Demo →
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist hover:text-paper"
                  >
                    View on GitHub →
                  </a>
                  <a
                    href={project.campus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-mist hover:text-paper"
                  >
                    Watch the lesson in SLOE Campus →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY OPEN SOURCE */}
      <section className="w-full bg-ink py-14">
        <div className="mx-auto max-w-content px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="font-display text-2xl">Why everything is open source</h2>
            <p className="text-ash">
              We believe the best way to learn is by doing. Every tool we build is free, 
              open-source, and comes with a full lesson inside SLOE Campus. No gatekeeping, 
              no paywalls—just code and learning in public.
            </p>
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <div className="text-center">
                <p className="text-signal-green font-display text-lg">MIT Licensed</p>
                <p className="text-xs text-ash">Use commercially</p>
              </div>
              <div className="text-center">
                <p className="text-signal-green font-display text-lg">Full Docs</p>
                <p className="text-xs text-ash">Comprehensive guides</p>
              </div>
              <div className="text-center">
                <p className="text-signal-green font-display text-lg">Video Lessons</p>
                <p className="text-xs text-ash">Learn to build them</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / BRIDGE TO CAMPUS */}
      <section id="about" className="w-full bg-ink py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 rounded-2xl bg-graphite/30 border border-graphite p-8 space-y-4">
          <h2 className="font-display text-xl">Why SLOE Campus exists</h2>
          <p className="text-ash text-sm max-w-3xl">
            A lot of our tools are built by people who taught themselves — marketers, comms people,
            editors, founders. So we ship the code publicly under SLOE Tech, then teach the exact
            build inside SLOE Campus. If you’re non-technical, start with the A-Star path.
          </p>
          <a
            href="https://sloecampus.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-signal-green hover:underline"
          >
            Go to SLOE Campus →
          </a>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="w-full bg-graphite/20 py-14 border-t border-graphite/70">
        <div className="mx-auto max-w-content px-4 text-center">
          <h2 className="font-display text-2xl mb-3">Get updates on new tools</h2>
          <p className="text-ash text-sm mb-6 max-w-xl mx-auto">
            Join our mailing list to get notified when we release new open-source tools and lessons.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-full bg-ink border border-graphite text-paper text-sm focus:outline-none focus:border-signal-green"
              required
            />
            <button 
              type="submit"
              className="bg-signal-green text-ink px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-ash/70 mt-3">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-ink border-t border-graphite/80 py-8 mt-auto">
        <div className="mx-auto max-w-content px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ash/80">
          <p>© {new Date().getFullYear()} SLOE Tech. Built open-source.</p>
          <div className="flex gap-4">
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              GitHub
            </a>
            <a href="https://sloecampus.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
              SLOE Campus
            </a>
            <a href="#" className="hover:text-paper">
              Documentation
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}