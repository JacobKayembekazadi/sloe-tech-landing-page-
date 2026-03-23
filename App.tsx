import React, { useEffect, useRef, useState } from 'react';

// ─── Scroll Animation Hook ────────────────────────────────────────────────────

function useFadeUp() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          obs.unobserve(el);
        }
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

// ─── SVG Icons ────────────────────────────────────────────────────────────────

const IconAgent = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="4" y="4" width="8" height="8" rx="1" stroke="#4ADE80" strokeWidth="1.5"/>
    <rect x="16" y="4" width="8" height="8" rx="1" stroke="#4ADE80" strokeWidth="1.5"/>
    <rect x="4" y="16" width="8" height="8" rx="1" stroke="#4ADE80" strokeWidth="1.5"/>
    <rect x="16" y="16" width="8" height="8" rx="1" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="8" y1="12" x2="8" y2="16" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="20" y1="12" x2="20" y2="16" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="12" y1="8" x2="16" y2="8" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="12" y1="20" x2="16" y2="20" stroke="#4ADE80" strokeWidth="1.5"/>
  </svg>
);

const IconPlatform = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <rect x="3" y="6" width="22" height="16" rx="2" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="3" y1="11" x2="25" y2="11" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="10" y1="11" x2="10" y2="22" stroke="#4ADE80" strokeWidth="1.5"/>
  </svg>
);

const IconDashboard = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <polyline points="4,20 9,13 14,16 19,9 24,12" stroke="#4ADE80" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <circle cx="4" cy="20" r="1.5" fill="#4ADE80"/>
    <circle cx="24" cy="12" r="1.5" fill="#4ADE80"/>
  </svg>
);

const IconAutomation = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="6" cy="14" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <circle cx="22" cy="8" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <circle cx="22" cy="20" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="9" y1="13" x2="19" y2="9" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="9" y1="15" x2="19" y2="19" stroke="#4ADE80" strokeWidth="1.5"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    Icon: IconAgent,
    title: "AI Operations Systems",
    desc: "Autonomous agents that handle research, outreach, reporting, and pipeline ops.",
  },
  {
    Icon: IconPlatform,
    title: "Business Management Platforms",
    desc: "Full-scale management systems — invoicing, HR, accounting, client management — built for your industry.",
  },
  {
    Icon: IconDashboard,
    title: "Intelligence Dashboards",
    desc: "Live business intelligence connected to your real data with AI-generated insights.",
  },
  {
    Icon: IconAutomation,
    title: "Workflow Automation",
    desc: "End-to-end automation across your tools. Custom APIs, integrations, and AI pipelines.",
  },
];

const work = [
  {
    name: "ICON Command Center",
    tagline: "Shopify intelligence for a $30M DTC brand.",
    tags: ["Shopify API", "Gemini AI", "React"],
    link: "https://icon-command-center.vercel.app",
  },
  {
    name: "EARTI Intelligence System",
    tagline: "Real-time ROI proof for a $15K AgriTech system.",
    tags: ["AgriTech", "IoT", "Supabase"],
    link: "https://earti-intelligence-system.vercel.app",
  },
  {
    name: "Sebenza Business OS",
    tagline: "Multi-industry business management platform for African service businesses.",
    tags: ["Next.js", "Neon Postgres", "26 Industries", "3 Languages"],
    link: null,
  },
  {
    name: "PTX Metals",
    tagline: "Corporate website for a critical minerals exploration company.",
    tags: ["React", "Vite", "Corporate"],
    link: "https://ptxmetals.com",
  },
];

const capabilities = [
  "Document Analysis & OCR",
  "Autonomous Agent Workflows",
  "Multi-Language (EN/FR/PT/AR)",
  "Real-Time Business Intelligence",
  "Custom API Integrations",
  "24-Hour Deployment",
];

const stats = [
  { value: "50+", label: "Systems Deployed" },
  { value: "<24h", label: "Deployment Time" },
  { value: "$5K–$50K+", label: "Per System" },
  { value: "5+", label: "Industries Served" },
];

// ─── Animated Section Wrapper ─────────────────────────────────────────────────

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useFadeUp();
  return (
    <div ref={ref} className="fade-up" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen font-body" style={{ background: '#0A0A0A', color: '#fff' }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1a1a1a' }}
        className="sticky top-0 z-50">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-display font-extrabold tracking-tight text-white text-lg">
              SLOE LABS
            </a>

            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Work', 'About', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                  {link}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a href="#contact"
                className="hidden md:block px-5 py-2 rounded-full text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
                style={{ background: '#4ADE80', color: '#0A0A0A' }}>
                Get Started
              </a>
              <button className="md:hidden p-2 text-gray-400" onClick={() => setMobileOpen(!mobileOpen)}>
                {mobileOpen
                  ? <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><line x1="3" y1="3" x2="17" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="17" y1="3" x2="3" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                  : <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                }
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="md:hidden flex flex-col py-5 gap-4 border-t border-gray-800">
              {['Services', 'Work', 'About', 'Contact'].map(link => (
                <a key={link} href={`#${link.toLowerCase()}`}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                  onClick={() => setMobileOpen(false)}>
                  {link}
                </a>
              ))}
              <a href="#contact"
                className="px-5 py-3 rounded-full text-sm font-semibold text-center mt-2"
                style={{ background: '#4ADE80', color: '#0A0A0A' }}>
                Get Started
              </a>
            </div>
          )}
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '100vh' }}>
        {/* radial glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(74,222,128,0.07) 0%, transparent 70%)' }} />

        <div className="relative mx-auto max-w-content px-6 py-32 space-y-8">
          <FadeUp>
            <h1 className="font-display font-extrabold tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: 1.05 }}>
              <span style={{ color: '#4ADE80' }}>AI Systems</span> for the<br />
              World's Most Ambitious<br />
              Businesses
            </h1>
          </FadeUp>

          <FadeUp delay={100}>
            <p className="text-gray-400 mx-auto max-w-xl text-lg md:text-xl leading-relaxed">
              We deploy autonomous AI infrastructure that runs your operations — in under 24 hours.
              From diagnosis to deployment.
            </p>
          </FadeUp>

          <FadeUp delay={200}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <a href="#contact"
                className="px-7 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
                style={{ background: '#4ADE80', color: '#0A0A0A' }}>
                Start a Project →
              </a>
              <a href="#work"
                className="px-7 py-3.5 rounded-full font-semibold text-sm border transition-colors hover:border-gray-500"
                style={{ borderColor: '#333', color: '#e5e5e5' }}>
                See Our Work
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid #1a1a1a', borderBottom: '1px solid #1a1a1a', background: '#0e0e0e' }}>
        <div className="mx-auto max-w-content px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i}
                className="py-8 px-4 text-center"
                style={{ borderRight: i < stats.length - 1 ? '1px solid #1a1a1a' : undefined }}>
                <div className="font-display font-extrabold tracking-tight text-3xl md:text-4xl"
                  style={{ color: '#4ADE80' }}>
                  {s.value}
                </div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section id="services" style={{ paddingTop: '120px', paddingBottom: '120px' }}>
        <div className="mx-auto max-w-content px-6 space-y-14">
          <FadeUp>
            <div>
              <h2 className="font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                What We Deploy
              </h2>
              <p className="text-gray-500 mt-3 text-lg">Systems that run. Not slides.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl p-8 transition-all duration-300"
                  style={{ background: '#111', border: '1px solid #1e1e1e' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e1e1e')}>
                  <s.Icon />
                  <h3 className="font-display font-bold text-white text-xl mt-5 mb-3">{s.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────────────────── */}
      <section id="work" style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a' }}>
        <div className="mx-auto max-w-content px-6 space-y-14">
          <FadeUp>
            <h2 className="font-display font-extrabold tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Selected Work
            </h2>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {work.map((w, i) => (
              <FadeUp key={w.name} delay={i * 80}>
                {w.link ? (
                  <a href={w.link} target="_blank" rel="noopener noreferrer"
                    className="block group rounded-2xl p-8 transition-all duration-300"
                    style={{ background: '#111', border: '1px solid #1e1e1e' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.35)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}>
                    <WorkCard w={w} />
                  </a>
                ) : (
                  <div className="rounded-2xl p-8 transition-all duration-300"
                    style={{ background: '#111', border: '1px solid #1e1e1e' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.35)';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e';
                      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                    }}>
                    <WorkCard w={w} />
                  </div>
                )}
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI CAPABILITIES ──────────────────────────────────────────────────── */}
      <section style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a', background: '#0e0e0e' }}>
        <div className="mx-auto max-w-content px-6 space-y-12">
          <FadeUp>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                AI Capabilities
              </h2>
              <p className="text-gray-400 mt-4 text-lg">
                Every system we deploy is powered by our proprietary AI infrastructure.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={100}>
            <div className="flex flex-wrap justify-center gap-3">
              {capabilities.map((cap) => (
                <div key={cap}
                  className="px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200"
                  style={{ border: '1px solid rgba(74,222,128,0.3)', color: '#4ADE80', background: 'rgba(74,222,128,0.05)' }}>
                  {cap}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section id="about" style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a' }}>
        <div className="mx-auto max-w-content px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="space-y-6">
                <h2 className="font-display font-extrabold tracking-tight text-white"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  Who We Are
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Sloe Labs is an AI systems consultancy that deploys production-ready AI infrastructure
                  for businesses worldwide. We don't do discovery sprints or 12-week roadmaps.
                  We diagnose, build, and deploy — in under 24 hours.
                </p>
                <p className="text-gray-500 text-base">
                  Operating across North America, Africa, and the Middle East.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={120}>
              <div className="space-y-4">
                {[
                  { name: "Sloe Labs", badge: "Deploys", desc: "AI consulting & client delivery. We scope, build, and ship." },
                  { name: "Sloe Tech", badge: "Builds", desc: "Open-source tools, AI infrastructure, and internal IP." },
                ].map(entity => (
                  <div key={entity.name}
                    className="rounded-2xl p-6"
                    style={{ background: '#111', border: '1px solid #1e1e1e' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-bold text-white text-lg">{entity.name}</span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                        style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.25)' }}>
                        {entity.badge}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">{entity.desc}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section id="contact"
        style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a', background: '#0e0e0e' }}>
        <div className="mx-auto max-w-content px-6 text-center">
          <FadeUp>
            <div className="space-y-7">
              <h2 className="font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                Ready to transform<br />your operations?
              </h2>
              <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
                Tell us what you need. We'll show you exactly what your business is missing — and build it.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a href="mailto:isaac@sloelabs.com"
                  className="px-8 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-85"
                  style={{ background: '#4ADE80', color: '#0A0A0A' }}>
                  Start a Project →
                </a>
                <a href="mailto:isaac@sloelabs.com"
                  className="text-gray-400 hover:text-white text-base transition-colors">
                  isaac@sloelabs.com
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{ borderTop: '1px solid #1a1a1a', background: '#0A0A0A' }}>
        <div className="mx-auto max-w-content px-6 py-12">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div className="space-y-3">
              <div className="font-display font-extrabold tracking-tight text-white text-lg">SLOE LABS</div>
              <p className="text-gray-500 text-sm leading-relaxed">
                AI systems consultancy deploying production-ready infrastructure for ambitious businesses.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-semibold text-sm">Navigation</div>
              <div className="flex flex-col gap-2">
                {['Services', 'Work', 'About', 'Contact'].map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`}
                    className="text-gray-500 hover:text-white text-sm transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-white font-semibold text-sm">Connect</div>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white text-sm transition-colors">
                  GitHub ↗
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white text-sm transition-colors">
                  LinkedIn ↗
                </a>
                <a href="mailto:isaac@sloelabs.com"
                  className="text-gray-500 hover:text-white text-sm transition-colors">
                  isaac@sloelabs.com
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #1a1a1a' }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-gray-600 text-sm">© 2026 Sloe Labs. Toronto, Canada.</p>
            <p className="text-gray-600 text-sm">Dubai · Doha · Johannesburg</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Work Card (shared between link/div) ──────────────────────────────────────

function WorkCard({ w }: { w: typeof work[0] }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-display font-bold text-white text-xl">{w.name}</h3>
        {w.link && (
          <span style={{ color: '#4ADE80' }} className="text-xl flex-shrink-0">↗</span>
        )}
      </div>
      <p className="text-gray-400 leading-relaxed mb-5">{w.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {w.tags.map(t => (
          <span key={t}
            className="text-xs px-3 py-1 rounded-full"
            style={{ background: '#1a1a1a', color: '#9ca3af', border: '1px solid #2a2a2a' }}>
            {t}
          </span>
        ))}
      </div>
    </>
  );
}
