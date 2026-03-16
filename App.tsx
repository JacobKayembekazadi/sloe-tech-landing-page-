import React, { useState } from 'react';

const services = [
  {
    icon: "⚡",
    title: "AI Operations Systems",
    desc: "Autonomous agent infrastructure that handles research, outreach, reporting, and pipeline ops — so your team focuses on decisions, not repetitive work.",
  },
  {
    icon: "📊",
    title: "Intelligence Dashboards",
    desc: "Live business intelligence connected to your real data — Shopify, Stripe, CRM — with AI-generated insights surfaced automatically.",
  },
  {
    icon: "🔗",
    title: "Workflow Automation",
    desc: "End-to-end automation across your tools. n8n, Zapier, custom APIs — we connect the stack and make it run without manual intervention.",
  },
  {
    icon: "🛍️",
    title: "Shopify & E-commerce AI",
    desc: "Conversion audits, theme builds, and AI-assisted merchandising for DTC brands that want to scale without scaling headcount.",
  },
];

const work = [
  {
    id: "icon-command-center",
    name: "ICON Command Center",
    tagline: "Shopify intelligence for a $30M DTC brand.",
    desc: "Live Shopify intelligence dashboard with AI-generated insights for a $30M DTC menswear brand.",
    detail: "ICON needed real-time visibility into what was selling, what wasn't, and why. We built a command center that pulls Shopify data, runs it through Gemini AI, and surfaces ranked insights automatically — no analyst required. The team went from weekly reports to real-time decisions.",
    tags: ["Shopify API", "Gemini AI", "React", "Recharts"],
    link: "https://icon-command-center.vercel.app",
    category: "Intelligence Dashboard",
  },
  {
    id: "earti-intelligence",
    name: "EARTI Intelligence System",
    tagline: "Real-time ROI proof for a $15K AgriTech system.",
    desc: "Real-time ROI dashboard for a $15K agricultural IoT system — harvest predictions, energy optimization, and 14-month payback calculator.",
    detail: "EARTI's biggest sales challenge: proving ROI on a $15K system before prospects buy. We built an intelligence layer on top of their sensor data — harvest predictions (±3% accuracy), energy savings projections, yield forecasting, and a payback calculator that answers 'when do I break even?' The dashboard turns a theoretical pitch into visual proof and generates $99-149/month recurring revenue per unit.",
    tags: ["AgriTech", "IoT", "Supabase", "Gemini AI"],
    link: "https://earti-intelligence-system.vercel.app",
    category: "Intelligence Dashboard",
  },
  {
    id: "sloefit",
    name: "SloeFit",
    tagline: "Nervous system tracking app with AI-driven recovery protocols.",
    desc: "Nervous system tracking app — log signals, get AI-driven protocols, and see your recovery patterns over time.",
    detail: "SloeFit tracks how your nervous system responds to daily life — stress, energy, focus, tension, sleep — and uses AI to surface patterns and recommend specific regulation protocols. Built as a PWA with Firebase, real-time Auracle AI insights, and a signal-to-outcome feedback loop that gets smarter the more you use it.",
    tags: ["React", "Firebase", "PWA", "Claude AI"],
    link: "https://sloe-fit-26.vercel.app",
    category: "Consumer App",
  },
  {
    id: "tati-analyst",
    name: "TATI Prospecting Analyst",
    tagline: "AI agent that briefs your sales team before every call.",
    desc: "AI agent that researches prospects, scores fit, and briefs sales reps before every call — in seconds.",
    detail: "Sales reps were spending 30+ minutes per prospect doing manual research. TATI does it in seconds — pulls company data, scores prospect fit against your ICP, and delivers a ready-to-use brief. Plugs into your CRM and runs automatically when a new lead enters the pipeline.",
    tags: ["Multi-agent", "AI Research", "Sales Ops", "Vercel"],
    link: "https://tati-prospecting-intelligence-analy.vercel.app",
    category: "AI Agent",
  },
  {
    id: "lbj-orchestrator",
    name: "LBJ Orchestrator AI OS",
    tagline: "Multi-agent AI OS coordinating growth, content, and ops.",
    desc: "Multi-agent AI operating system coordinating specialized agents across growth, content, ops, and analytics.",
    detail: "A full AI operating system where specialized agents handle specific domains — one for content ideation, one for growth analysis, one for ops reporting — all coordinated by an orchestrator. Built on Google ADK with persistent memory and cross-agent communication. Demonstrates what AI-native operations infrastructure actually looks like at scale.",
    tags: ["Agent Orchestration", "Google ADK", "Multi-agent", "Vercel"],
    link: "https://lbj-orchestrator-ai-os.vercel.app",
    category: "AI Infrastructure",
  },
  {
    id: "ptx-metals",
    name: "PTX Metals",
    tagline: "Brand and web presence for a precious metals trading company.",
    desc: "Full brand and web presence for a precious metals trading company — clean, conversion-optimized, professional.",
    detail: "PTX needed a web presence that matched the weight of their product — precious metals trading. We delivered a conversion-optimized site with clear trust signals, clean information architecture, and a design language that communicates stability and expertise to high-net-worth buyers.",
    tags: ["Web Design", "Branding", "Finance", "Conversion"],
    link: "https://ptxmetals.com",
    category: "Web & Brand",
  },
];

const faqs = [
  { q: "How long does a typical project take?", a: "Most builds are 1–4 weeks depending on scope. We move fast — no sprints, no ceremony." },
  { q: "Do you work with non-technical founders?", a: "Yes. You describe the business problem. We build the system. You own the output." },
  { q: "What's your pricing?", a: "Project minimum is $5K. Ongoing AI ops retainers start at $1.5K/month." },
  { q: "Can you work with our existing stack?", a: "Yes — we integrate with whatever you're running. Shopify, Supabase, HubSpot, n8n, custom APIs." },
];

// ─── Work Detail Page ──────────────────────────────────────────────────────────

function WorkDetail({ project, onBack }: { project: typeof work[0]; onBack: () => void }) {
  return (
    <div className="min-h-screen bg-ink text-paper font-sans">
      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-graphite/50">
        <div className="mx-auto max-w-content px-4 h-14 flex items-center gap-4">
          <button onClick={onBack} className="text-sm text-mist hover:text-paper transition flex items-center gap-1.5">
            ← Back
          </button>
          <span className="text-graphite">/</span>
          <span className="text-sm text-mist">{project.name}</span>
        </div>
      </nav>

      <main className="mx-auto max-w-content px-4 py-16 space-y-12">
        {/* Header */}
        <div className="space-y-4 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-signal-green font-medium">{project.category}</span>
          <h1 className="font-display text-4xl md:text-5xl leading-tight">{project.name}</h1>
          <p className="text-ash text-xl leading-relaxed">{project.tagline}</p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map(t => (
            <span key={t} className="text-xs bg-graphite/60 text-mist px-3 py-1.5 rounded-full border border-graphite">{t}</span>
          ))}
        </div>

        {/* Detail */}
        <div className="max-w-2xl">
          <p className="text-paper/80 text-lg leading-relaxed">{project.detail}</p>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4 pt-4">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-signal-green text-ink px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition inline-flex items-center gap-2"
          >
            View live demo ↗
          </a>
          <a
            href="mailto:jacobkayembekazadi@gmail.com"
            className="text-paper/80 hover:text-paper text-sm rounded-full px-6 py-3 border border-graphite/70 transition"
          >
            Build something like this →
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-graphite/50 pt-12">
          <p className="text-mist text-sm mb-6">More work</p>
          <div className="grid md:grid-cols-3 gap-4">
            {work.filter(w => w.id !== project.id).slice(0, 3).map(w => (
              <button
                key={w.id}
                onClick={() => { window.scrollTo(0,0); onBack(); setTimeout(() => {}, 0); }}
                className="text-left bg-graphite/30 border border-graphite rounded-xl p-4 hover:border-signal-green/40 transition"
              >
                <p className="font-display text-sm">{w.name}</p>
                <p className="text-ash text-xs mt-1 leading-relaxed line-clamp-2">{w.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── Work Page ────────────────────────────────────────────────────────────────

function WorkPage({ onBack, onSelect }: { onBack: () => void; onSelect: (p: typeof work[0]) => void }) {
  return (
    <div className="min-h-screen bg-ink text-paper font-sans">
      <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-graphite/50">
        <div className="mx-auto max-w-content px-4 h-14 flex items-center gap-4">
          <button onClick={onBack} className="text-sm text-mist hover:text-paper transition flex items-center gap-1.5">
            ← Sloe Labs
          </button>
          <span className="text-graphite">/</span>
          <span className="text-sm text-mist">Work</span>
        </div>
      </nav>

      <main className="mx-auto max-w-content px-4 py-16 space-y-12">
        <div className="space-y-3 max-w-xl">
          <h1 className="font-display text-4xl md:text-5xl">All work</h1>
          <p className="text-ash text-lg">Built in production, not in theory. Every project ships with a live demo.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {work.map(w => (
            <button
              key={w.id}
              onClick={() => { window.scrollTo(0,0); onSelect(w); }}
              className="text-left bg-graphite/40 border border-graphite rounded-2xl p-6 flex flex-col gap-4 hover:border-signal-green/40 transition group"
            >
              <div className="space-y-2 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-base leading-snug">{w.name}</h3>
                  <span className="text-mist group-hover:text-signal-green transition text-lg flex-shrink-0">↗</span>
                </div>
                <p className="text-ash text-sm leading-relaxed">{w.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {w.tags.map(t => (
                  <span key={t} className="text-[10px] bg-graphite/60 text-mist/80 px-2 py-0.5 rounded-full border border-graphite/50">{t}</span>
                ))}
              </div>
              <span className="text-xs text-signal-green/70 font-medium">{w.category}</span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<'home' | 'work' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<typeof work[0] | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (page === 'project' && selectedProject) {
    return <WorkDetail project={selectedProject} onBack={() => setPage('work')} />;
  }

  if (page === 'work') {
    return <WorkPage onBack={() => setPage('home')} onSelect={(p) => { setSelectedProject(p); setPage('project'); }} />;
  }

  return (
    <div className="min-h-screen bg-ink text-paper font-sans">
      {/* NAV */}
      <nav className="sticky top-0 z-50 bg-ink/90 backdrop-blur border-b border-graphite/50">
        <div className="mx-auto max-w-content px-4">
          <div className="flex items-center justify-between h-14">
            <button onClick={() => setPage('home')} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-signal-green flex items-center justify-center">
                <span className="text-ink font-black text-xs italic">S</span>
              </div>
              <span className="font-display font-bold tracking-tight">Sloe Labs</span>
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#services" className="hover:text-paper transition text-sm text-mist">Services</a>
              <button onClick={() => setPage('work')} className="hover:text-paper transition text-sm text-mist">Work</button>
              <a href="https://tech.sloelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition text-sm text-mist">Sloe Tech</a>
              <a href="#faq" className="hover:text-paper transition text-sm text-mist">FAQ</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="mailto:jacobkayembekazadi@gmail.com" className="hidden md:block px-4 py-2 rounded-full bg-signal-green text-ink text-sm font-medium hover:opacity-90 transition">
                Work with us
              </a>
              <button className="md:hidden p-2 text-mist" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden flex flex-col py-4 gap-3 border-t border-graphite/50">
              <a href="#services" className="text-mist hover:text-paper py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <button onClick={() => { setPage('work'); setMobileMenuOpen(false); }} className="text-mist hover:text-paper py-2 text-sm text-left">Work</button>
              <a href="https://tech.sloelabs.com" className="text-mist hover:text-paper py-2 text-sm">Sloe Tech</a>
              <a href="#faq" className="text-mist hover:text-paper py-2 text-sm" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="mailto:jacobkayembekazadi@gmail.com" className="bg-signal-green text-ink px-4 py-3 rounded-full text-sm text-center font-medium mt-2">Work with us</a>
            </div>
          )}
        </div>
      </nav>

      {/* HERO */}
      <section className="w-full pt-20 pb-20 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-graphite/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mist">
              AI Systems Consultancy
            </p>
            <h1 className="font-display text-4xl md:text-6xl leading-tight">
              We build AI systems<br className="hidden md:block" /> that <span className="text-signal-green">run your ops.</span>
            </h1>
            <p className="text-ash text-lg max-w-lg">
              Sloe Labs designs and deploys AI-powered operations infrastructure for founders and operators who want to move faster without growing headcount.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:jacobkayembekazadi@gmail.com" className="bg-signal-green text-ink px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition">
                Start a project
              </a>
              <button onClick={() => setPage('work')} className="text-paper/80 hover:text-paper text-sm rounded-full px-6 py-3 border border-graphite/70 transition">
                See our work →
              </button>
            </div>
          </div>
          <div className="hidden md:grid grid-cols-2 gap-3">
            {services.map((s) => (
              <div key={s.title} className="bg-graphite/30 border border-graphite/60 rounded-2xl p-4 space-y-2">
                <span className="text-2xl">{s.icon}</span>
                <p className="font-display text-sm">{s.title}</p>
                <p className="text-ash text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-10">
          <div>
            <h2 className="font-display text-2xl">What we build</h2>
            <p className="text-ash text-sm mt-1">Systems that run. Not slides.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-graphite/20 border border-graphite/50 rounded-2xl p-6 space-y-3">
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-display text-lg">{s.title}</h3>
                <p className="text-ash text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WORK */}
      <section id="work" className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-10">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="font-display text-2xl">Selected work</h2>
              <p className="text-ash text-sm mt-1">Built in production, not in theory.</p>
            </div>
            <button onClick={() => setPage('work')} className="text-sm text-mist hover:text-paper transition">
              View all →
            </button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {work.slice(0, 3).map((w) => (
              <button
                key={w.id}
                onClick={() => { window.scrollTo(0,0); setSelectedProject(w); setPage('project'); }}
                className="text-left bg-graphite/40 border border-graphite rounded-2xl p-6 flex flex-col gap-4 hover:border-signal-green/40 transition group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base">{w.name}</h3>
                    <span className="text-mist group-hover:text-signal-green transition text-lg">↗</span>
                  </div>
                  <p className="text-ash text-sm leading-relaxed">{w.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {w.tags.map(t => (
                    <span key={t} className="text-[10px] bg-graphite/60 text-mist/80 px-2 py-0.5 rounded-full border border-graphite/50">{t}</span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-display text-2xl">Who we are</h2>
            <p className="text-ash text-base leading-relaxed">
              Sloe Labs is a small, fast-moving AI systems consultancy. We don't do discovery sprints or 12-week roadmaps. We scope fast, build fast, and ship things that actually run in production.
            </p>
            <p className="text-ash text-base leading-relaxed">
              Our clients are founders, operators, and growth teams who've tried the generic AI tools and want something built for their specific problem.
            </p>
          </div>
          <div className="space-y-3">
            {[
              { name: "Sloe Labs", tag: "Deploys", desc: "AI consulting & client delivery", url: "#", active: true },
              { name: "Sloe Tech", tag: "Builds", desc: "Open-source tools & infrastructure", url: "https://tech.sloelabs.com" },
            ].map(entity => (
              <a key={entity.name} href={entity.url} target={entity.url === '#' ? undefined : '_blank'} rel="noopener noreferrer"
                className={`flex items-center justify-between p-4 rounded-xl border transition ${entity.active ? 'bg-signal-green/5 border-signal-green/30 text-paper' : 'border-graphite/50 text-mist hover:text-paper hover:border-graphite'}`}>
                <div>
                  <p className="font-medium text-sm">{entity.name} <span className="text-xs text-mist ml-2">{entity.tag}</span></p>
                  <p className="text-xs text-ash mt-0.5">{entity.desc}</p>
                </div>
                <span className="text-xs text-mist">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl">Common questions</h2>
            <p className="text-ash text-sm mt-2">The stuff people always ask.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-graphite/60 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-graphite/20 transition"
                >
                  <span className="font-medium text-sm">{faq.q}</span>
                  <span className="text-mist ml-4 flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-4 text-ash text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-content px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-4xl">Ready to build?</h2>
          <p className="text-ash text-lg max-w-md mx-auto">Tell us what you're trying to automate or build. We'll tell you if we can help — no pitch deck required.</p>
          <a href="mailto:jacobkayembekazadi@gmail.com" className="inline-block bg-signal-green text-ink px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition">
            Start a project →
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-graphite/50 py-8">
        <div className="mx-auto max-w-content px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-mist">
          <p>© {new Date().getFullYear()} Sloe Labs</p>
          <div className="flex items-center gap-6">
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
            <a href="https://tech.sloelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper">Sloe Tech</a>
            <a href="mailto:jacobkayembekazadi@gmail.com" className="hover:text-paper">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
