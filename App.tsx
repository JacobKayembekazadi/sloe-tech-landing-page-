import React from 'react';

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
    name: "ICON Command Center",
    desc: "Live Shopify intelligence dashboard with AI-generated insights for a $30M DTC menswear brand.",
    tags: ["Shopify API", "Gemini AI", "React", "Recharts"],
    link: "https://icon-command-center.vercel.app",
  },
  {
    name: "Sebenza",
    desc: "AI-native legal practice management SaaS — billing, cases, client portal, and AI-assisted workflows.",
    tags: ["SaaS", "LegalTech", "Postgres", "Vercel"],
    link: "https://app.sebenzas.com",
  },
  {
    name: "Houston Ion Demos",
    desc: "Five live AI intelligence dashboards built for enterprise pitches across healthcare, agritech, and nonprofit sectors.",
    tags: ["Multi-agent", "Supabase", "Gemini AI", "Vercel"],
    link: "https://github.com/JacobKayembekazadi",
  },
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most builds are 1–4 weeks depending on scope. We move fast — no sprints, no ceremony."
  },
  {
    q: "Do you work with non-technical founders?",
    a: "Yes. You describe the business problem. We build the system. You own the output."
  },
  {
    q: "What's the minimum engagement?",
    a: "Project minimum is $5K. Ongoing AI ops retainers start at $1.5K/month."
  },
  {
    q: "Can you work with our existing stack?",
    a: "Yes. We integrate with whatever you're running — Shopify, HubSpot, Notion, Airtable, custom APIs."
  },
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  return (
    <main className="min-h-screen flex flex-col bg-ink text-paper">

      {/* NAV */}
      <header className="w-full border-b border-graphite/70 bg-ink sticky top-0 z-50">
        <div className="mx-auto max-w-content px-4 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2">
            <span className="font-display text-lg tracking-tight">
              SLOE <span className="text-signal-green">LABS</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm text-mist">
            <a href="#services" className="hover:text-paper transition">Services</a>
            <a href="#work" className="hover:text-paper transition">Work</a>
            <a href="https://tech.sloelabs.com" target="_blank" rel="noopener noreferrer" className="hover:text-paper transition">Sloe Tech</a>
            <a href="#faq" className="hover:text-paper transition">FAQ</a>
          </nav>

          <a href="mailto:jacobkayembekazadi@gmail.com" className="hidden md:block px-4 py-2 rounded-full bg-signal-green text-ink text-sm font-medium hover:opacity-90 transition">
            Work with us
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-paper p-2">
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
              <a href="#services" className="text-mist hover:text-paper py-2" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#work" className="text-mist hover:text-paper py-2" onClick={() => setMobileMenuOpen(false)}>Work</a>
              <a href="https://tech.sloelabs.com" className="text-mist hover:text-paper py-2">Sloe Tech</a>
              <a href="#faq" className="text-mist hover:text-paper py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
              <a href="mailto:jacobkayembekazadi@gmail.com" className="bg-signal-green text-ink px-4 py-3 rounded-full text-sm text-center font-medium mt-2">Work with us</a>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="w-full pt-20 pb-20 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-graphite/80 px-3 py-1 text-xs uppercase tracking-[0.25em] text-mist">
              AI Systems Consultancy · Toronto
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
              <a href="#work" className="text-paper/80 hover:text-paper text-sm rounded-full px-6 py-3 border border-graphite/70 transition">
                See our work →
              </a>
            </div>
          </div>

          {/* Stats panel */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { stat: "$30M+", label: "Client revenue managed" },
              { stat: "5", label: "Live AI dashboards shipped" },
              { stat: "1–4 wk", label: "Typical build time" },
              { stat: "$5K+", label: "Project minimum" },
            ].map((item) => (
              <div key={item.label} className="bg-graphite/40 border border-graphite rounded-2xl p-6 space-y-2">
                <p className="font-display text-3xl text-signal-green">{item.stat}</p>
                <p className="text-sm text-ash">{item.label}</p>
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
            <p className="text-ash text-sm mt-1">Production systems, not prototypes.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-graphite/40 border border-graphite rounded-2xl p-6 space-y-3 hover:border-signal-green/40 transition">
                <span className="text-2xl">{s.icon}</span>
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
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="text-sm text-mist hover:text-paper transition">
              View all →
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {work.map((w) => (
              <a key={w.name} href={w.link} target="_blank" rel="noopener noreferrer"
                className="bg-graphite/40 border border-graphite rounded-2xl p-6 flex flex-col gap-4 hover:border-signal-green/40 transition group">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-base">{w.name}</h3>
                    <span className="text-mist group-hover:text-signal-green transition text-lg">↗</span>
                  </div>
                  <p className="text-ash text-sm leading-relaxed">{w.desc}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {w.tags.map((tag) => (
                    <span key={tag} className="text-[10px] px-2 py-0.5 bg-graphite/60 text-mist rounded">{tag}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO ECOSYSTEM */}
      <section className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-8">
          <h2 className="font-display text-2xl text-center">The Sloe portfolio</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: "Sloe Labs", tag: "Deploys", desc: "AI consulting & client delivery", url: "#", active: true },
              { name: "Sloe Tech", tag: "Builds", desc: "Open-source tools & infrastructure", url: "https://tech.sloelabs.com" },
              { name: "Sloe Campus", tag: "Teaches", desc: "AI-native education — coming soon", url: "#", soon: true },
            ].map((e) => (
              <a key={e.name} href={e.url}
                className={`bg-graphite/40 border rounded-2xl p-6 space-y-2 hover:border-signal-green/40 transition ${e.active ? 'border-signal-green/40' : 'border-graphite'}`}>
                <div className="flex items-center justify-between">
                  <span className={`font-display text-lg ${e.active ? 'text-signal-green' : 'text-paper'}`}>{e.name}</span>
                  {e.soon && <span className="text-[10px] px-2 py-0.5 border border-graphite rounded-full text-ash uppercase tracking-widest">Soon</span>}
                  {e.active && <span className="text-[10px] px-2 py-0.5 bg-signal-green/10 border border-signal-green/30 rounded-full text-signal-green uppercase tracking-widest">you are here</span>}
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-ash">{e.tag}</p>
                <p className="text-sm text-mist">{e.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="w-full py-16 border-b border-graphite/70">
        <div className="mx-auto max-w-content px-4 space-y-8">
          <h2 className="font-display text-2xl">FAQ</h2>
          <div className="space-y-3 max-w-2xl">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-graphite rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-graphite/30 transition"
                >
                  <span className="text-sm font-medium">{faq.q}</span>
                  <span className={`text-signal-green transition-transform ${openFaq === i ? 'rotate-45' : ''}`}>+</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-sm text-ash leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="w-full py-20">
        <div className="mx-auto max-w-content px-4 text-center space-y-6">
          <h2 className="font-display text-3xl md:text-5xl">Ready to build?</h2>
          <p className="text-ash max-w-xl mx-auto">Tell us what you're trying to automate or build. We'll tell you if we can help — usually within 24 hours.</p>
          <a href="mailto:jacobkayembekazadi@gmail.com"
            className="inline-block bg-signal-green text-ink px-8 py-4 rounded-full text-sm font-medium hover:opacity-90 transition">
            Start a conversation →
          </a>
          <p className="text-xs text-ash">No retainer required to start. Project minimums from $5K.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full bg-ink border-t border-graphite/80 py-8">
        <div className="mx-auto max-w-content px-4 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-ash/80">
          <p>© {new Date().getFullYear()} Sloe Labs · Toronto, Canada</p>
          <div className="flex gap-4">
            <a href="https://tech.sloelabs.com" className="hover:text-paper">Sloe Tech</a>
            <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer" className="hover:text-paper">GitHub</a>
            <a href="mailto:jacobkayembekazadi@gmail.com" className="hover:text-paper">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
