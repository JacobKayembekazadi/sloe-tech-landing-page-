import React, { useEffect, useRef, useState } from 'react';

// ─── Scroll Reveal Hook ───────────────────────────────────────────────────────

function useReveal() {
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

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="reveal" style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

// ─── SVG Icons (bespoke, consistent 1.5 stroke) ───────────────────────────────

const IconAgent = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
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
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <rect x="3" y="6" width="22" height="16" rx="2" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="3" y1="11" x2="25" y2="11" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="10" y1="11" x2="10" y2="22" stroke="#4ADE80" strokeWidth="1.5"/>
  </svg>
);

const IconDashboard = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <polyline points="4,20 9,13 14,16 19,9 24,12" stroke="#4ADE80" strokeWidth="1.5" strokeLinejoin="round" strokeLinecap="round"/>
    <circle cx="4" cy="20" r="1.5" fill="#4ADE80"/>
    <circle cx="24" cy="12" r="1.5" fill="#4ADE80"/>
  </svg>
);

const IconAutomation = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
    <circle cx="6" cy="14" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <circle cx="22" cy="8" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <circle cx="22" cy="20" r="3" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="9" y1="13" x2="19" y2="9" stroke="#4ADE80" strokeWidth="1.5"/>
    <line x1="9" y1="15" x2="19" y2="19" stroke="#4ADE80" strokeWidth="1.5"/>
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface CaseStudy {
  challenge: string;
  solution: string;
  results: string[];
  tech: string[];
}

interface WorkItem {
  name: string;
  slug: string;
  tagline: string;
  tags: string[];
  link: string | null;
  caseStudy: CaseStudy;
  category?: 'sports';
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services = [
  {
    Icon: IconAgent,
    title: "AI operations systems",
    desc: "Autonomous agents that handle research, outreach, reporting, and pipeline ops.",
  },
  {
    Icon: IconPlatform,
    title: "Business management platforms",
    desc: "Full scale management systems — invoicing, HR, accounting, client management — built for your industry.",
  },
  {
    Icon: IconDashboard,
    title: "Intelligence dashboards",
    desc: "Live business intelligence connected to your real data with AI generated insights.",
  },
  {
    Icon: IconAutomation,
    title: "Workflow automation",
    desc: "End to end automation across your tools. Custom APIs, integrations, and AI pipelines.",
  },
];

const work: WorkItem[] = [
  {
    name: "ICON Command Center",
    slug: "icon-command-center",
    tagline: "Shopify intelligence dashboard for a $30M DTC brand. Live insights, AI generated recommendations, zero analysts required.",
    tags: ["Shopify API", "Gemini AI", "React", "Recharts"],
    link: "https://icon-command-center.vercel.app",
    caseStudy: {
      challenge: "ICON, a $30M DTC menswear brand, was drowning in Shopify data but had zero live visibility into what was selling, what wasn't, and why. Weekly manual reports were always outdated by the time decisions were made.",
      solution: "We built a live intelligence dashboard that pulls Shopify data as it happens, runs it through Gemini AI, and surfaces ranked insights automatically — no analyst required.",
      results: ["Live visibility replacing weekly reports", "AI generated product recommendations", "Zero manual reporting overhead"],
      tech: ["Shopify Admin API", "Gemini AI", "React", "Recharts", "Vercel"],
    },
  },
  {
    name: "Houston Methodist Intelligence",
    slug: "houston-methodist",
    tagline: "AI adoption intelligence system for one of America's leading hospital networks. Mapping readiness, gaps, and transformation pathways.",
    tags: ["Healthcare", "AI Strategy", "Enterprise", "Data Intelligence"],
    link: null,
    caseStudy: {
      challenge: "Houston Methodist, one of America's top hospital networks, needed to understand where AI could be adopted across departments — and where it couldn't. No existing tool mapped AI readiness at the institutional level.",
      solution: "We built an AI adoption intelligence system that maps readiness scores, identifies gaps, and generates transformation pathways per department — giving leadership a clear picture of where to invest.",
      results: ["Department level AI readiness mapping", "Gap analysis across clinical and operational workflows", "Executive ready transformation roadmap"],
      tech: ["AI Strategy", "Data Intelligence", "React", "Custom Analytics Engine"],
    },
  },
  {
    name: "LBJ Orchestrator AI OS",
    slug: "lbj-orchestrator",
    tagline: "Multi agent AI operating system coordinating specialized agents across growth, operations, sales, and creative — live.",
    tags: ["Multi-Agent", "Google ADK", "Orchestration", "AI OS"],
    link: null,
    caseStudy: {
      challenge: "A growing organization needed specialized AI agents for growth, sales, operations, and creative — but couldn't afford separate teams. They needed one system that coordinates all four domains intelligently.",
      solution: "We built a multi agent AI operating system on Google ADK where specialized agents handle their domains autonomously while a central orchestrator coordinates priorities, resolves conflicts, and routes tasks.",
      results: ["4 specialized AI agents operating in parallel", "Central orchestration with conflict resolution", "Live task routing across departments"],
      tech: ["Google ADK", "Multi-Agent Architecture", "Python", "Orchestration Engine"],
    },
  },
  {
    name: "EARTI Intelligence System",
    slug: "earti-intelligence",
    tagline: "Live ROI dashboard for a $15K agricultural IoT system. Harvest predictions, energy optimization, 14 month payback proof.",
    tags: ["AgriTech", "IoT", "Supabase", "Gemini AI"],
    link: "https://earti-intelligence-system.vercel.app",
    caseStudy: {
      challenge: "EARTI sells a $15K agricultural IoT system. Their biggest sales challenge: proving ROI to skeptical farmers before they buy. Spreadsheets and promises weren't closing deals.",
      solution: "We built an intelligence layer on top of sensor data — harvest predictions within three percent accuracy, energy savings projections, yield forecasting, and a payback calculator that answers 'when do I break even?' visually.",
      results: ["Harvest predictions within ±3% accuracy", "14 month payback visualization", "$99 to $149 monthly recurring revenue per unit"],
      tech: ["IoT Sensors", "Supabase", "Gemini AI", "React", "Vercel"],
    },
  },
  {
    name: "PTX Metals",
    slug: "ptx-metals",
    tagline: "Premium corporate website for a critical minerals exploration company advancing discovery across North America.",
    tags: ["React", "Vite", "Corporate", "Mining"],
    link: "https://ptxmetals.com",
    caseStudy: {
      challenge: "PTX Metals, a critical minerals exploration company, needed a corporate web presence that matched the scale of their operations and attracted institutional investors.",
      solution: "We designed and built a premium dark themed corporate site with live market data integration, investor focused content architecture, and a design language that signals authority and precision.",
      results: ["Premium corporate presence matching $100M+ peers", "Investor ready content and navigation", "Live market data integration"],
      tech: ["React", "Vite", "Tailwind CSS", "Corporate Design"],
    },
  },
  {
    name: "MC Intelligence Platform",
    slug: "mc-intelligence",
    tagline: "Enterprise operating platform for Millionaire Commerce. Centralized intelligence, automated operations, AI driven decision support.",
    tags: ["Enterprise", "AI Operations", "Commerce", "Intelligence"],
    link: null,
    caseStudy: {
      challenge: "Millionaire Commerce needed a centralized operating platform to manage intelligence, automate operations, and support AI driven decisions across their commerce portfolio.",
      solution: "We built an enterprise intelligence platform that consolidates data streams, automates operational workflows, and surfaces AI driven recommendations for portfolio wide decision making.",
      results: ["Centralized intelligence across portfolio", "Automated operational workflows", "AI driven decision support dashboard"],
      tech: ["Enterprise Architecture", "AI Operations", "React", "Custom APIs"],
    },
  },
  {
    name: "RZ Cantera Intelligence",
    slug: "rz-cantera",
    category: "sports",
    tagline: "AI powered academy operating system for Real Zaragoza — player development intelligence, squad oversight, and a voice driven AI assistant for coaches.",
    tags: ["Football", "Club OS", "Voice AI", "La Liga Academy"],
    link: "https://rz-cantera-v2.vercel.app",
    caseStudy: {
      challenge: "Real Zaragoza's cantera — one of Spain's storied youth academies — needed centralized intelligence over player development: structured data, squad oversight, and instant answers for coaching staff, without adding administrative burden.",
      solution: "We built a club operating system with player and squad intelligence, development tracking, and LEON — a voice driven AI assistant coaches can simply talk to for instant answers about players, squads, and sessions.",
      results: ["Deployed and live for a La Liga club's academy", "Voice first AI assistant for coaching staff", "Centralized player development intelligence"],
      tech: ["Next.js", "Supabase", "Gemini Live Voice", "LEON AI"],
    },
  },
  {
    name: "ScoutBase Africa",
    slug: "scoutbase-africa",
    category: "sports",
    tagline: "Football scouting platform with computer vision player analysis — built to surface African talent to clubs worldwide.",
    tags: ["Football", "Computer Vision", "YOLO v11", "Scouting"],
    link: null,
    caseStudy: {
      challenge: "African football talent is systematically under scouted: no structured data, no video pipeline, no way for clubs abroad to discover and verify players beyond word of mouth.",
      solution: "We built a scouting platform pairing a structured player database with computer vision match analysis (YOLO v11) — automated player detection and performance signals from raw footage, exposed through a scouting interface clubs can actually use.",
      results: ["Computer vision analysis pipeline on match footage", "Structured, verifiable player profiles", "60,000+ lines of production code in service"],
      tech: ["FastAPI", "Next.js", "YOLO v11", "Computer Vision"],
    },
  },
  {
    name: "Sportnaa OS",
    slug: "sportnaa",
    category: "sports",
    tagline: "Sports agency management platform — athletes, contracts, and operations in one bilingual Arabic and English system built for the Gulf market.",
    tags: ["Sports Agency", "Arabic/English", "Gulf", "React"],
    link: null,
    caseStudy: {
      challenge: "Sports agencies in the Gulf run athlete rosters, contracts, and commercial deals across spreadsheets and chat threads — in two languages. Nothing on the market handles agency operations bilingually.",
      solution: "We built a full agency operating system — athlete management, contracts, and operations — designed bilingual from the first line: full Arabic and English interface parity, not an afterthought translation.",
      results: ["Full agency operations in one system", "True bilingual Arabic and English interface", "In production for the Gulf market"],
      tech: ["React 19", "TypeScript", "i18n AR/EN", "Vercel"],
    },
  },
];

const products = [
  { name: "Sebenza", badge: "Live", url: "https://app.sebenzas.com", desc: "Business operating system for SMEs — invoicing, HR, payroll, accounting, and client portals across 26 industries." },
  { name: "InOrbit.Pro", badge: "Live", url: "https://www.inorbit.pro", desc: "Referral driven job search platform — candidates broadcast JobCasts, their network taps back, and referrals build reputation." },
  { name: "SLOE OS Substrate", badge: "Platform", url: null, desc: "The operational core behind every system we ship — 18 production abilities spanning CRM, messaging, documents, payments, files, and workflows." },
  { name: "Sloelaboratory", badge: "Live", url: "https://sloelabs.com", desc: "Design your own business OS with an AI architect — industry playbooks, gap analysis, and a personalized deployment plan." },
];

const capabilities = [
  "Document analysis and OCR",
  "Autonomous agent workflows",
  "Multi language (EN/FR/PT/AR)",
  "Live business intelligence",
  "Custom API integrations",
  "First deploy in 24 hours",
];

const stats = [
  { value: "50+", label: "Systems deployed" },
  { value: "<24h", label: "First system live" },
  { value: "6+", label: "Industries served" },
  { value: "4", label: "Continents" },
];

const navLinks = ['Services', 'Products', 'Work', 'Sports', 'About', 'Contact'];

// ─── Island Nav ───────────────────────────────────────────────────────────────

function IslandNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none" aria-label="Main">
        <div className="glass pointer-events-auto mt-6 w-max rounded-full flex items-center gap-1 pl-4 pr-2 py-2">
          <a href="#" className="font-display font-bold tracking-tight text-white text-base mr-2"
            onClick={e => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); }}>
            SLOE LABS
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-sm text-ash hover:text-white px-3 py-2 rounded-full hover:bg-white/5 transition-all duration-300 ease-fluid">
                {link}
              </a>
            ))}
          </div>

          <a href="#contact"
            className="hidden md:block ml-1 px-3 py-2 rounded-full text-sm font-semibold transition-all duration-300 ease-fluid hover:opacity-85 active:scale-[0.98]"
            style={{ background: '#4ADE80', color: '#000000' }}>
            Start a project
          </a>

          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}>
            <span className="absolute block h-[2px] w-5 bg-paper transition-all duration-700 ease-fluid"
              style={{ transform: open ? 'rotate(45deg)' : 'translateY(-4px)' }} />
            <span className="absolute block h-[2px] w-5 bg-paper transition-all duration-700 ease-fluid"
              style={{ transform: open ? 'rotate(-45deg)' : 'translateY(4px)' }} />
          </button>
        </div>
      </nav>

      {/* Fullscreen mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-700 ease-fluid ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ backdropFilter: 'blur(48px)', WebkitBackdropFilter: 'blur(48px)', background: 'rgba(0,0,0,0.8)' }}>
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a key={link} href={`#${link.toLowerCase()}`}
              className="font-display text-3xl font-semibold text-paper transition-all duration-700 ease-fluid"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(48px)',
                opacity: open ? 1 : 0,
                transitionDelay: `${100 + i * 50}ms`,
              }}
              onClick={() => setOpen(false)}>
              {link}
            </a>
          ))}
          <a href="#contact"
            className="mt-4 px-3 py-2 rounded-full text-base font-semibold transition-all duration-700 ease-fluid active:scale-[0.98]"
            style={{
              background: '#4ADE80', color: '#000000',
              transform: open ? 'translateY(0)' : 'translateY(48px)',
              opacity: open ? 1 : 0,
              transitionDelay: `${100 + navLinks.length * 50}ms`,
            }}
            onClick={() => setOpen(false)}>
            Start a project
          </a>
        </div>
      </div>
    </>
  );
}

// ─── Tagline Reveal (words activate in reading order) ─────────────────────────

function TaglineReveal() {
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
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const lines = [
    'Your first agent live in 24 hours.',
    'Full platforms in weeks, not quarters.',
  ];
  let wordIndex = 0;

  return (
    <section className="py-24" style={{ background: '#000000' }}>
      <div className="mx-auto max-w-content px-6">
        <div ref={ref} className="word-reveal font-display font-bold tracking-tight text-paper mx-auto text-center"
          style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.15, maxWidth: '680px' }}>
          {lines.map((line, li) => (
            <div key={li}>
              {line.split(' ').map(word => {
                const d = wordIndex++ * 70;
                return (
                  <span key={`${li}-${word}-${d}`} className="w inline-block mr-[0.28em]" style={{ transitionDelay: `${d}ms` }}>
                    {word}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState(window.location.hash.replace('#', '') || 'home');

  useEffect(() => {
    const handler = () => {
      const slug = window.location.hash.replace('#', '') || 'home';
      if (work.find(w => w.slug === slug) || slug === 'privacy' || slug === 'terms') {
        setPage(slug);
        window.scrollTo(0, 0);
      } else {
        setPage('home');
        setTimeout(() => {
          const el = document.getElementById(slug);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
          else if (slug === 'home') window.scrollTo(0, 0);
        }, 60);
      }
    };
    window.addEventListener('hashchange', handler);
    if (window.location.hash) setTimeout(handler, 80);
    return () => window.removeEventListener('hashchange', handler);
  }, []);

  const caseStudyProject = work.find(w => w.slug === page);
  if (caseStudyProject) {
    return <CaseStudyPage project={caseStudyProject} />;
  }
  if (page === 'privacy') return <SimplePage title="Privacy policy" body={PRIVACY} />;
  if (page === 'terms') return <SimplePage title="Terms of service" body={TERMS} />;

  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <a href="#main" className="skip-link">Skip to content</a>
      <IslandNav />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <main id="main">
      <section className="relative flex items-center justify-center text-center overflow-hidden"
        style={{ minHeight: '100dvh' }}>
        <div className="relative mx-auto max-w-content px-6 py-24 space-y-8">
          <Reveal>
            <h1 className="heading-gradient font-display font-bold tracking-tight mx-auto"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 5.5rem)', lineHeight: 1.05, maxWidth: '680px' }}>
              AI systems for the world's most ambitious businesses
            </h1>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-ash mx-auto text-lg md:text-xl leading-relaxed" style={{ maxWidth: '680px' }}>
              We build the operating systems behind ambitious businesses.
              Your first agent live in 24 hours — full platforms in weeks, not quarters.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="flex flex-col items-center gap-6 pt-2">
              <a href="#contact"
                className="px-3 py-2 rounded-full font-semibold text-base transition-all duration-300 ease-fluid hover:opacity-85 active:scale-[0.98]"
                style={{ background: '#4ADE80', color: '#000000' }}>
                Start a project →
              </a>
              <p className="text-sm text-ash">
                In production for Real Zaragoza, Houston Methodist, and SMEs on 4 continents
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <div style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className="py-8 px-4 text-center">
                <div className="font-display font-bold tracking-tight text-3xl md:text-4xl"
                  style={{ color: '#4ADE80', fontVariantNumeric: 'tabular-nums' }}>
                  {s.value}
                </div>
                <div className="text-ash text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <div>
              <h2 className="font-display font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                What we deploy
              </h2>
              <p className="text-ash mt-3 text-lg">Systems that run. Not slides.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl p-8 transition-all duration-700 ease-fluid hover:-translate-y-1"
                  style={{ background: '#181818' }}>
                  <s.Icon />
                  <h3 className="font-display font-semibold text-white text-xl mt-5 mb-3">{s.title}</h3>
                  <p className="text-ash leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── TAGLINE REVEAL ───────────────────────────────────────────────────── */}
      <TaglineReveal />

      {/* ── PRODUCTS ─────────────────────────────────────────────────────────── */}
      <section id="products" className="py-24" style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <div>
              <h2 className="font-display font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Products we operate
              </h2>
              <p className="text-ash mt-3 text-lg">Not just client work — platforms we build, run, and own.</p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {products.map((p, i) => (
              <Reveal key={p.name} delay={i * 80}>
                <div className="h-full rounded-2xl p-8 flex flex-col transition-all duration-700 ease-fluid hover:-translate-y-1"
                  style={{ background: '#1F1F1F' }}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display font-semibold text-white text-xl">{p.name}</h3>
                    <span className="text-xs px-2 py-0.5 rounded font-medium"
                      style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-ash leading-relaxed flex-1">{p.desc}</p>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="mt-6 text-sm font-semibold w-fit transition-all duration-300 ease-fluid hover:opacity-75"
                      style={{ color: '#4ADE80' }}>
                      Visit →
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────────────────── */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <h2 className="font-display font-bold tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
              Selected work
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {work.filter(w => !w.category).map((w, i) => (
              <Reveal key={w.name} delay={i * 80}>
                <button
                  className="w-full h-full text-left block group rounded-2xl p-8 cursor-pointer transition-all duration-700 ease-fluid hover:-translate-y-1 active:scale-[0.99]"
                  style={{ background: '#181818' }}
                  onClick={() => { window.location.hash = w.slug; }}>
                  <WorkCard w={w} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPORTS & FOOTBALL ────────────────────────────────────────────────── */}
      <section id="sports" className="py-24" style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <div>
              <h2 className="font-display font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Sports &amp; football intelligence
              </h2>
              <p className="text-ash mt-3 text-lg" style={{ maxWidth: '680px' }}>
                From a La Liga academy to African scouting pipelines and Gulf sports agencies —
                we build the operating systems behind football.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {work.filter(w => w.category === 'sports').map((w, i) => (
              <Reveal key={w.name} delay={i * 80}>
                <button
                  className="w-full h-full text-left block group rounded-2xl p-8 cursor-pointer transition-all duration-700 ease-fluid hover:-translate-y-1 active:scale-[0.99]"
                  style={{ background: '#1F1F1F' }}
                  onClick={() => { window.location.hash = w.slug; }}>
                  <WorkCard w={w} />
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ─────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <div className="text-center mx-auto" style={{ maxWidth: '680px' }}>
              <h2 className="font-display font-bold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                AI capabilities
              </h2>
              <p className="text-ash mt-4 text-lg">
                Every system we deploy is powered by our own AI infrastructure.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-wrap justify-center gap-4">
              {capabilities.map((cap) => (
                <div key={cap}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-fluid"
                  style={{ background: '#181818', color: '#4ADE80' }}>
                  {cap}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────────── */}
      <section id="about" className="py-24" style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <Reveal>
              <div className="space-y-6">
                <h2 className="font-display font-bold tracking-tight text-white"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  Who we are
                </h2>
                <p className="text-ash text-lg leading-relaxed" style={{ maxWidth: '65ch' }}>
                  Sloe Labs is an AI systems consultancy that deploys production ready AI infrastructure
                  for businesses worldwide. We don't sell decks and walk away. We diagnose, put your
                  first system live in 24 hours, and compound from there — build, run, improve.
                </p>
                <p className="text-ash text-base">
                  Operating across North America, Europe, Africa, and the Middle East.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="space-y-4">
                {[
                  { name: "Sloe Labs", badge: "Deploys", desc: "AI consulting and client delivery. We scope, build, and ship." },
                  { name: "Sloe Tech", badge: "Builds", desc: "Open source tools, AI infrastructure, and internal IP." },
                ].map(entity => (
                  <div key={entity.name}
                    className="rounded-2xl p-6 transition-all duration-700 ease-fluid"
                    style={{ background: '#1F1F1F' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-semibold text-white text-lg">{entity.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded font-medium"
                        style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}>
                        {entity.badge}
                      </span>
                    </div>
                    <p className="text-ash text-sm leading-relaxed">{entity.desc}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────────── */}
      <section id="contact" className="py-24">
        <div className="mx-auto max-w-content px-6 text-center">
          <Reveal>
            <div className="space-y-8">
              <h2 className="font-display font-bold tracking-tight text-white mx-auto"
                style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', maxWidth: '680px' }}>
                Ready to transform your operations?
              </h2>
              <p className="text-ash text-lg mx-auto leading-relaxed" style={{ maxWidth: '480px' }}>
                Tell us what you need. We'll show you exactly what your business is missing — and build it.
              </p>
              <div className="pt-2">
                <InquiryForm />
                <p className="text-ash text-sm mt-8">
                  Prefer email?{' '}
                  <a href="mailto:reports@sloelabs.com" className="text-paper hover:text-white transition-colors duration-300 underline">
                    reports@sloelabs.com
                  </a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-3">
              <div className="font-display font-bold tracking-tight text-white text-lg">SLOE LABS</div>
              <p className="text-ash text-sm leading-relaxed">
                AI systems consultancy deploying production ready infrastructure for ambitious businesses.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-semibold text-sm">Navigation</div>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <a key={link} href={`#${link.toLowerCase()}`}
                    className="text-ash hover:text-white text-sm transition-colors duration-300">
                    {link}
                  </a>
                ))}
              </div>
            </div>
            <div className="space-y-3">
              <div className="text-white font-semibold text-sm">Connect</div>
              <div className="flex flex-col gap-2">
                <a href="https://github.com/JacobKayembekazadi" target="_blank" rel="noopener noreferrer"
                  className="text-ash hover:text-white text-sm transition-colors duration-300">
                  GitHub ↗
                </a>
                <a href="mailto:reports@sloelabs.com"
                  className="text-ash hover:text-white text-sm transition-colors duration-300">
                  reports@sloelabs.com
                </a>
                <a href="#privacy" className="text-ash hover:text-white text-sm transition-colors duration-300">
                  Privacy policy
                </a>
                <a href="#terms" className="text-ash hover:text-white text-sm transition-colors duration-300">
                  Terms of service
                </a>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #272727' }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-ash text-sm">© 2026 Sloe Labs. Toronto, Canada.</p>
            <p className="text-ash text-sm">Dubai · Doha · Johannesburg</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Work Card ────────────────────────────────────────────────────────────────

function WorkCard({ w }: { w: WorkItem }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-display font-semibold text-white text-xl">{w.name}</h3>
        <span style={{ color: '#4ADE80' }} className="text-xl flex-shrink-0 transition-transform duration-300 ease-fluid group-hover:translate-x-1">→</span>
      </div>
      <p className="text-ash leading-relaxed mb-6">{w.tagline}</p>
      <div className="flex flex-wrap gap-2">
        {w.tags.map(t => (
          <span key={t}
            className="text-xs px-2 py-0.5 rounded"
            style={{ background: '#272727', color: '#9B9B9B' }}>
            {t}
          </span>
        ))}
      </div>
    </>
  );
}

// ─── Inquiry Form ─────────────────────────────────────────────────────────────

function InquiryForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'error'>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '', website: '' });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.website) return; // honeypot
    setStatus('sending');
    try {
      const r = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!r.ok) throw new Error(String(r.status));
      (window as any).posthog?.capture('inquiry_submitted', { company: form.company || null });
      setStatus('ok');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'ok') {
    return (
      <div className="rounded-2xl p-8 mx-auto text-center" style={{ background: '#181818', maxWidth: '480px' }}>
        <div className="text-2xl mb-2" style={{ color: '#4ADE80' }}>✓</div>
        <p className="text-white font-semibold mb-1">Got it. We'll be in touch within 24 hours.</p>
        <p className="text-ash text-sm">Your inquiry is already in our pipeline.</p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = { background: '#181818', border: '1px solid #272727', color: '#F5F1E8' };
  return (
    <form onSubmit={submit} className="mx-auto space-y-3 text-left" style={{ maxWidth: '480px' }} noValidate={false}>
      <div className="grid md:grid-cols-2 gap-3">
        <input required placeholder="Name" value={form.name} onChange={set('name')} autoComplete="name"
          className="w-full rounded-xl px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} autoComplete="email"
          className="w-full rounded-xl px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
      </div>
      <input placeholder="Company (optional)" value={form.company} onChange={set('company')} autoComplete="organization"
        className="w-full rounded-xl px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
      <textarea required placeholder="What do you need built?" rows={4} value={form.message} onChange={set('message')}
        className="w-full rounded-xl px-3 py-2 text-base outline-none resize-none transition-all duration-300 ease-fluid" style={inputStyle} />
      <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')}
        className="hidden" aria-hidden="true" placeholder="Website" />
      <button type="submit" disabled={status === 'sending'}
        className="w-full px-3 py-2 rounded-full font-semibold text-base transition-all duration-300 ease-fluid hover:opacity-85 active:scale-[0.98] disabled:opacity-50"
        style={{ background: '#4ADE80', color: '#000000' }}>
        {status === 'sending' ? 'Sending…' : 'Start a project →'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-center" style={{ color: '#f87171' }}>
          Connection failed. Please try again, or email{' '}
          <a className="underline" href="mailto:reports@sloelabs.com">reports@sloelabs.com</a>
        </p>
      )}
    </form>
  );
}

// ─── Case Study Page ──────────────────────────────────────────────────────────

function CaseStudyPage({ project }: { project: WorkItem }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [project.slug]);

  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none" aria-label="Main">
        <div className="glass pointer-events-auto mt-6 w-max rounded-full flex items-center gap-4 px-4 py-2">
          <a href="#"
            className="font-display font-bold tracking-tight text-white text-base"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            SLOE LABS
          </a>
          <a href="#"
            className="text-sm text-ash hover:text-white transition-colors duration-300"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            ← Back to home
          </a>
        </div>
      </nav>

      <div
        className="mx-auto max-w-content px-6 pt-32 pb-24"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(24px)',
          filter: visible ? 'blur(0)' : 'blur(8px)',
          transition: 'opacity 0.8s cubic-bezier(0.32,0.72,0,1), transform 0.8s cubic-bezier(0.32,0.72,0,1), filter 0.8s cubic-bezier(0.32,0.72,0,1)',
        }}
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(t => (
            <span key={t}
              className="text-xs px-2 py-0.5 rounded"
              style={{ background: '#272727', color: '#9B9B9B' }}>
              {t}
            </span>
          ))}
        </div>

        <h1 className="heading-gradient font-display font-bold tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.05, maxWidth: '680px' }}>
          {project.name}
        </h1>
        <p className="text-ash text-xl leading-relaxed mb-16" style={{ maxWidth: '65ch' }}>
          {project.tagline}
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="space-y-12">
            <div>
              <div className="text-xs font-semibold tracking-widest mb-3 uppercase" style={{ color: '#4ADE80' }}>
                The challenge
              </div>
              <p className="text-paper leading-relaxed text-base" style={{ maxWidth: '65ch' }}>
                {project.caseStudy.challenge}
              </p>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-widest mb-3 uppercase" style={{ color: '#4ADE80' }}>
                What we built
              </div>
              <p className="text-paper leading-relaxed text-base" style={{ maxWidth: '65ch' }}>
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <div className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: '#4ADE80' }}>
                Results
              </div>
              <ul className="space-y-3">
                {project.caseStudy.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-paper text-base">
                    <span style={{ color: '#4ADE80', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs font-semibold tracking-widest mb-4 uppercase" style={{ color: '#4ADE80' }}>
                Tech stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.tech.map(t => (
                  <span key={t}
                    className="text-sm px-3 py-1 rounded-lg font-medium"
                    style={{ background: '#181818', color: '#4ADE80' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="pt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-full font-semibold text-base transition-all duration-300 ease-fluid hover:opacity-85 active:scale-[0.98]"
                  style={{ background: '#4ADE80', color: '#000000' }}>
                  View live →
                </a>
              </div>
            )}
          </div>
        </div>

        <div style={{ borderTop: '1px solid #272727' }} className="pt-8">
          <a href="#"
            className="text-ash hover:text-white text-sm transition-colors duration-300 flex items-center gap-2 w-fit"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            ← Back to all projects
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Simple legal pages ───────────────────────────────────────────────────────

const PRIVACY = [
  "Sloe Labs collects only the information you submit through the contact form on this site: your name, email address, company, and message. We use it solely to respond to your inquiry and manage our engagement pipeline.",
  "This site uses PostHog analytics to understand aggregate visitor behavior (pages viewed, referral source). We do not sell, rent, or share personal information with third parties.",
  "Inquiry data is stored in our project tracking system and retained while relevant to an active or potential engagement. To request deletion of your data, email reports@sloelabs.com.",
];

const TERMS = [
  "This website is provided by Sloe Labs Inc. (Canada) for informational purposes. Content describes our services and past work; it does not constitute a binding offer.",
  "Case study descriptions reflect real engagements. Client names and details are shared with permission or anonymized. Linked demonstrations may run on representative data.",
  "Engagements are governed by individually signed agreements, not by this website. For questions, contact reports@sloelabs.com.",
];

function SimplePage({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-center pointer-events-none" aria-label="Main">
        <div className="glass pointer-events-auto mt-6 w-max rounded-full flex items-center gap-4 px-4 py-2">
          <a href="#" className="font-display font-bold tracking-tight text-white text-base"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            SLOE LABS
          </a>
          <a href="#" className="text-sm text-ash hover:text-white transition-colors duration-300"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            ← Back to home
          </a>
        </div>
      </nav>
      <div className="mx-auto max-w-content px-6 pt-32 pb-24">
        <h1 className="heading-gradient font-display font-bold tracking-tight mb-8"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '680px' }}>
          {title}
        </h1>
        <div className="space-y-6">
          {body.map((p, i) => (
            <p key={i} className="text-ash text-base leading-relaxed" style={{ maxWidth: '65ch' }}>{p}</p>
          ))}
        </div>
        <p className="text-ash text-sm mt-12">Last updated July 2026 · Sloe Labs Inc., Toronto, Canada</p>
      </div>
    </div>
  );
}
