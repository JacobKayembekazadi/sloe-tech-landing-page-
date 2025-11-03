import React from 'react';

const projects = [
  {
    title: "AI Reel Prompt Builder",
    summary: "Generate reel concepts from a single brand input.",
    type: "AI / Media",
    github: "https://github.com/sloetech/reel-prompt-builder",
    campus: "https://sloecampus.com",
  },
  {
    title: "Client Inbox Automator",
    summary: "Route IG / email / site leads into Airtable with AI tags.",
    type: "Automation",
    github: "https://github.com/sloetech/client-inbox-automator",
    campus: "https://sloecampus.com",
  },
  {
    title: "SLOE Media Prompt Pack",
    summary: "Prompting images + brand-ready templates for content teams.",
    type: "Content / Prompting",
    github: "https://github.com/sloetech/prompt-pack",
    campus: "https://sloecampus.com",
  },
];

export default function App() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* NAV */}
      <header className="w-full border-b border-graphite/70 bg-ink sticky top-0 z-50">
        <div className="mx-auto max-w-content px-4 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/images/sloe-tech-logo-1.png" alt="SLOE Tech Logo" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
            <a href="#projects" className="hover:text-paper transition">Projects</a>
            <a href="#about" className="hover:text-paper transition">About</a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-paper transition"
            >
              GitHub
            </a>
          </nav>
          <a
            href="https://sloecampus.com"
            className="px-4 py-2 rounded-full border border-signal-green/60 text-sm text-paper hover:bg-signal-green hover:text-ink transition"
          >
            Join SLOE Campus
          </a>
        </div>
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
                    <div className="flex items-center gap-3">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-signal-green hover:underline"
                      >
                        View on GitHub →
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
              href="https://github.com"
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
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-signal-green hover:underline"
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

      {/* ABOUT / BRIDGE TO CAMPUS */}
      <section id="about" className="w-full bg-ink py-14">
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

      {/* FOOTER */}
      <footer className="w-full bg-ink border-t border-graphite/80 py-8 mt-auto">
        <div className="mx-auto max-w-content px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ash/80">
          <p>© {new Date().getFullYear()} SLOE Tech. Built open-source.</p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper">
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