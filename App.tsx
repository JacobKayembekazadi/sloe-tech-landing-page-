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

const work: WorkItem[] = [
  {
    name: "ICON Command Center",
    slug: "icon-command-center",
    tagline: "Shopify intelligence dashboard for a $30M DTC brand. Real-time insights, AI-generated recommendations, zero analysts required.",
    tags: ["Shopify API", "Gemini AI", "React", "Recharts"],
    link: "https://icon-command-center.vercel.app",
    caseStudy: {
      challenge: "ICON, a $30M DTC menswear brand, was drowning in Shopify data but had zero real-time visibility into what was selling, what wasn't, and why. Weekly manual reports were always outdated by the time decisions were made.",
      solution: "We built a live intelligence dashboard that pulls Shopify data in real-time, runs it through Gemini AI, and surfaces ranked insights automatically — no analyst required.",
      results: ["Real-time visibility replacing weekly reports", "AI-generated product recommendations", "Zero manual reporting overhead"],
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
      results: ["Department-level AI readiness mapping", "Gap analysis across clinical and operational workflows", "Executive-ready transformation roadmap"],
      tech: ["AI Strategy", "Data Intelligence", "React", "Custom Analytics Engine"],
    },
  },
  {
    name: "LBJ Orchestrator AI OS",
    slug: "lbj-orchestrator",
    tagline: "Multi-agent AI operating system coordinating specialized agents across growth, operations, sales, and creative — in real time.",
    tags: ["Multi-Agent", "Google ADK", "Orchestration", "AI OS"],
    link: null,
    caseStudy: {
      challenge: "A growing organization needed specialized AI agents for growth, sales, operations, and creative — but couldn't afford separate teams. They needed one system that coordinates all four domains intelligently.",
      solution: "We built a multi-agent AI operating system on Google ADK where specialized agents handle their domains autonomously while a central orchestrator coordinates priorities, resolves conflicts, and routes tasks.",
      results: ["4 specialized AI agents operating in parallel", "Central orchestration with conflict resolution", "Real-time task routing across departments"],
      tech: ["Google ADK", "Multi-Agent Architecture", "Python", "Orchestration Engine"],
    },
  },
  {
    name: "EARTI Intelligence System",
    slug: "earti-intelligence",
    tagline: "Real-time ROI dashboard for a $15K agricultural IoT system. Harvest predictions, energy optimization, 14-month payback proof.",
    tags: ["AgriTech", "IoT", "Supabase", "Gemini AI"],
    link: "https://earti-intelligence-system.vercel.app",
    caseStudy: {
      challenge: "EARTI sells a $15K agricultural IoT system. Their biggest sales challenge: proving ROI to skeptical farmers before they buy. Spreadsheets and promises weren't closing deals.",
      solution: "We built an intelligence layer on top of sensor data — harvest predictions (±3% accuracy), energy savings projections, yield forecasting, and a payback calculator that answers 'when do I break even?' visually.",
      results: ["Harvest predictions within ±3% accuracy", "14-month payback visualization", "$99-149/month recurring revenue per unit"],
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
      solution: "We designed and built a premium dark-themed corporate site with real-time market data integration, investor-focused content architecture, and a design language that signals authority and precision.",
      results: ["Premium corporate presence matching $100M+ peers", "Investor-ready content and navigation", "Real-time market data integration"],
      tech: ["React", "Vite", "Tailwind CSS", "Corporate Design"],
    },
  },
  {
    name: "MC Intelligence Platform",
    slug: "mc-intelligence",
    tagline: "Enterprise operating platform for Millionaire Commerce. Centralized intelligence, automated operations, AI-driven decision support.",
    tags: ["Enterprise", "AI Operations", "Commerce", "Intelligence"],
    link: null,
    caseStudy: {
      challenge: "Millionaire Commerce needed a centralized operating platform to manage intelligence, automate operations, and support AI-driven decisions across their commerce portfolio.",
      solution: "We built an enterprise intelligence platform that consolidates data streams, automates operational workflows, and surfaces AI-driven recommendations for portfolio-wide decision-making.",
      results: ["Centralized intelligence across portfolio", "Automated operational workflows", "AI-driven decision support dashboard"],
      tech: ["Enterprise Architecture", "AI Operations", "React", "Custom APIs"],
    },
  },
  {
    name: "RZ Cantera Intelligence",
    slug: "rz-cantera",
    category: "sports",
    tagline: "AI-powered academy operating system for Real Zaragoza — player development intelligence, squad oversight, and a voice-driven AI assistant for coaches.",
    tags: ["Football", "Club OS", "Voice AI", "La Liga Academy"],
    link: "https://rz-cantera-v2.vercel.app",
    caseStudy: {
      challenge: "Real Zaragoza's cantera — one of Spain's storied youth academies — needed centralized intelligence over player development: structured data, squad oversight, and instant answers for coaching staff, without adding administrative burden.",
      solution: "We built a club operating system with player and squad intelligence, development tracking, and LEON — a voice-driven AI assistant coaches can simply talk to for instant answers about players, squads, and sessions.",
      results: ["Deployed and live for a La Liga club's academy", "Voice-first AI assistant for coaching staff", "Centralized player development intelligence"],
      tech: ["Next.js", "Supabase", "Gemini Live Voice", "LEON AI"],
    },
  },
  {
    name: "ScoutBase Africa",
    slug: "scoutbase-africa",
    category: "sports",
    tagline: "Football scouting platform with computer-vision player analysis — built to surface African talent to clubs worldwide.",
    tags: ["Football", "Computer Vision", "YOLO v11", "Scouting"],
    link: null,
    caseStudy: {
      challenge: "African football talent is systematically under-scouted: no structured data, no video pipeline, no way for clubs abroad to discover and verify players beyond word of mouth.",
      solution: "We built a scouting platform pairing a structured player database with computer-vision match analysis (YOLO v11) — automated player detection and performance signals from raw footage, exposed through a scouting interface clubs can actually use.",
      results: ["Computer-vision analysis pipeline on match footage", "Structured, verifiable player profiles", "60,000+ lines of production code in service"],
      tech: ["FastAPI", "Next.js", "YOLO v11", "Computer Vision"],
    },
  },
  {
    name: "Sportnaa OS",
    slug: "sportnaa",
    category: "sports",
    tagline: "Sports agency management platform — athletes, contracts, and operations in one bilingual Arabic/English system built for the Gulf market.",
    tags: ["Sports Agency", "Arabic/English", "Gulf", "React"],
    link: null,
    caseStudy: {
      challenge: "Sports agencies in the Gulf run athlete rosters, contracts, and commercial deals across spreadsheets and chat threads — in two languages. Nothing on the market handles agency operations bilingually.",
      solution: "We built a full agency operating system — athlete management, contracts, and operations — designed bilingual from the first line: full Arabic/English interface parity, not an afterthought translation.",
      results: ["Full agency operations in one system", "True bilingual Arabic/English interface", "In production for the Gulf market"],
      tech: ["React 19", "TypeScript", "i18n AR/EN", "Vercel"],
    },
  },
];

const products = [
  { name: "Sebenza", badge: "Live", url: "https://app.sebenzas.com", desc: "Business operating system for SMEs — invoicing, HR, payroll, accounting, and client portals across 26 industries." },
  { name: "InOrbit.Pro", badge: "Live", url: "https://www.inorbit.pro", desc: "Referral-driven job search platform — candidates broadcast JobCasts, their network taps back, and referrals build reputation." },
  { name: "SLOE OS Substrate", badge: "Platform", url: null, desc: "The operational core behind every system we ship — 18 production abilities spanning CRM, messaging, documents, payments, files, and workflows." },
  { name: "Sloelaboratory", badge: "Live", url: "https://sloelabs.com", desc: "Design your own business OS with an AI architect — industry playbooks, gap analysis, and a personalized deployment plan." },
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
  { value: "6+", label: "Industries Served" },
  { value: "4", label: "Continents" },
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
  const [page, setPage] = useState(window.location.hash.replace('#', '') || 'home');

  useEffect(() => {
    const handler = () => {
      const slug = window.location.hash.replace('#', '') || 'home';
      if (work.find(w => w.slug === slug)) {
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

  // If hash matches a project slug, render case study
  const caseStudyProject = work.find(w => w.slug === page);
  if (caseStudyProject) {
    return <CaseStudyPage project={caseStudyProject} />;
  }

  return (
    <div className="min-h-screen font-body" style={{ background: '#0A0A0A', color: '#fff' }}>

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1a1a1a' }}
        className="sticky top-0 z-50">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="font-display font-extrabold tracking-tight text-white text-lg"
              onClick={() => { window.location.hash = ''; setPage('home'); }}>
              SLOE LABS
            </a>

            <div className="hidden md:flex items-center gap-8">
              {['Services', 'Products', 'Work', 'Sports', 'About', 'Contact'].map(link => (
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
              {['Services', 'Products', 'Work', 'Sports', 'About', 'Contact'].map(link => (
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

      {/* ── PRODUCTS ─────────────────────────────────────────────────────────── */}
      <section id="products" style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a', background: '#0e0e0e' }}>
        <div className="mx-auto max-w-content px-6 space-y-14">
          <FadeUp>
            <div>
              <h2 className="font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Products We Operate
              </h2>
              <p className="text-gray-500 mt-3 text-lg">Not just client work — platforms we build, run, and own.</p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-5">
            {products.map((p, i) => (
              <FadeUp key={p.name} delay={i * 80}>
                <div className="h-full rounded-2xl p-8 transition-all duration-300 flex flex-col"
                  style={{ background: '#111', border: '1px solid #1e1e1e' }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(74,222,128,0.35)')}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = '#1e1e1e')}>
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display font-bold text-white text-xl">{p.name}</h3>
                    <span className="text-xs px-2.5 py-0.5 rounded-full font-medium"
                      style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80', border: '1px solid rgba(74,222,128,0.25)' }}>
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-gray-400 leading-relaxed flex-1">{p.desc}</p>
                  {p.url && (
                    <a href={p.url} target="_blank" rel="noopener noreferrer"
                      className="mt-5 text-sm font-semibold w-fit transition-opacity hover:opacity-75"
                      style={{ color: '#4ADE80' }}>
                      Visit →
                    </a>
                  )}
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
            {work.filter(w => !w.category).map((w, i) => (
              <FadeUp key={w.name} delay={i * 80}>
                <button
                  className="w-full text-left block group rounded-2xl p-8 transition-all duration-300 cursor-pointer"
                  style={{ background: '#111', border: '1px solid #1e1e1e' }}
                  onClick={() => { window.location.hash = w.slug; }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}>
                  <WorkCard w={w} />
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPORTS & FOOTBALL ────────────────────────────────────────────────── */}
      <section id="sports" style={{ paddingTop: '120px', paddingBottom: '120px', borderTop: '1px solid #1a1a1a', background: '#0e0e0e' }}>
        <div className="mx-auto max-w-content px-6 space-y-14">
          <FadeUp>
            <div>
              <h2 className="font-display font-extrabold tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Sports &amp; Football Intelligence
              </h2>
              <p className="text-gray-500 mt-3 text-lg max-w-2xl">
                From a La Liga academy to African scouting pipelines and Gulf sports agencies —
                we build the operating systems behind football.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {work.filter(w => w.category === 'sports').map((w, i) => (
              <FadeUp key={w.name} delay={i * 80}>
                <button
                  className="w-full h-full text-left block group rounded-2xl p-8 transition-all duration-300 cursor-pointer"
                  style={{ background: '#111', border: '1px solid #1e1e1e' }}
                  onClick={() => { window.location.hash = w.slug; }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74,222,128,0.35)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#1e1e1e';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                  }}>
                  <WorkCard w={w} />
                </button>
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
                  Operating across North America, Europe, Africa, and the Middle East.
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
              <div className="pt-4">
                <InquiryForm />
                <p className="text-gray-500 text-sm mt-6">
                  Prefer email?{' '}
                  <a href="mailto:reports@sloelabs.com" className="text-gray-400 hover:text-white transition-colors underline">
                    reports@sloelabs.com
                  </a>
                </p>
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
                {['Services', 'Products', 'Work', 'Sports', 'About', 'Contact'].map(link => (
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
                <a href="mailto:reports@sloelabs.com"
                  className="text-gray-500 hover:text-white text-sm transition-colors">
                  reports@sloelabs.com
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

function WorkCard({ w }: { w: WorkItem }) {
  return (
    <>
      <div className="flex items-start justify-between gap-2 mb-3">
        <h3 className="font-display font-bold text-white text-xl">{w.name}</h3>
        <span style={{ color: '#4ADE80' }} className="text-xl flex-shrink-0">→</span>
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
      <div className="rounded-2xl p-8 max-w-lg mx-auto text-center"
        style={{ background: '#111', border: '1px solid rgba(74,222,128,0.35)' }}>
        <div className="text-2xl mb-2" style={{ color: '#4ADE80' }}>✓</div>
        <p className="text-white font-semibold mb-1">Got it — we'll be in touch within 24 hours.</p>
        <p className="text-gray-400 text-sm">Your inquiry is already in our pipeline.</p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = { background: '#111', border: '1px solid #2a2a2a', color: '#fff' };
  return (
    <form onSubmit={submit} className="max-w-lg mx-auto space-y-3 text-left">
      <div className="grid md:grid-cols-2 gap-3">
        <input required placeholder="Name" value={form.name} onChange={set('name')}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={inputStyle} />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')}
          className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={inputStyle} />
      </div>
      <input placeholder="Company (optional)" value={form.company} onChange={set('company')}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none" style={inputStyle} />
      <textarea required placeholder="What do you need built?" rows={4} value={form.message} onChange={set('message')}
        className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none" style={inputStyle} />
      <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')}
        className="hidden" aria-hidden="true" placeholder="Website" />
      <button type="submit" disabled={status === 'sending'}
        className="w-full px-8 py-4 rounded-full font-bold text-base transition-opacity hover:opacity-85 disabled:opacity-50"
        style={{ background: '#4ADE80', color: '#0A0A0A' }}>
        {status === 'sending' ? 'Sending…' : 'Start a Project →'}
      </button>
      {status === 'error' && (
        <p className="text-sm text-center" style={{ color: '#f87171' }}>
          Something broke — email us instead at{' '}
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
    // Trigger fade-in after mount
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [project.slug]);

  return (
    <div className="min-h-screen font-body" style={{ background: '#0A0A0A', color: '#fff' }}>
      {/* ── NAV ── */}
      <nav style={{ background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(16px)', borderBottom: '1px solid #1a1a1a' }}
        className="sticky top-0 z-50">
        <div className="mx-auto max-w-content px-6">
          <div className="flex items-center justify-between h-16">
            <a href="#"
              className="font-display font-extrabold tracking-tight text-white text-lg"
              onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
              SLOE LABS
            </a>
            <a href="#"
              className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
              ← Back to Home
            </a>
          </div>
        </div>
      </nav>

      {/* ── CONTENT ── */}
      <div
        className="mx-auto max-w-content px-6 py-20"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.45s ease, transform 0.45s ease',
        }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(t => (
            <span key={t}
              className="text-xs px-3 py-1 rounded-full"
              style={{ background: '#1a1a1a', color: '#9ca3af', border: '1px solid #2a2a2a' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Headline */}
        <h1 className="font-display font-extrabold tracking-tight text-white mb-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.05 }}>
          {project.name}
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed mb-16 max-w-2xl">
          {project.tagline}
        </p>

        {/* Body grid */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          {/* Left column */}
          <div className="space-y-10">
            {/* Challenge */}
            <div>
              <div className="text-xs font-bold tracking-widest mb-3 uppercase"
                style={{ color: '#4ADE80' }}>
                The Challenge
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <div className="text-xs font-bold tracking-widest mb-3 uppercase"
                style={{ color: '#4ADE80' }}>
                What We Built
              </div>
              <p className="text-gray-300 leading-relaxed text-base">
                {project.caseStudy.solution}
              </p>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-10">
            {/* Results */}
            <div>
              <div className="text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ color: '#4ADE80' }}>
                Results
              </div>
              <ul className="space-y-3">
                {project.caseStudy.results.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 text-base">
                    <span style={{ color: '#4ADE80', flexShrink: 0, marginTop: '2px' }}>✓</span>
                    {r}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="text-xs font-bold tracking-widest mb-4 uppercase"
                style={{ color: '#4ADE80' }}>
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.caseStudy.tech.map(t => (
                  <span key={t}
                    className="text-sm px-4 py-1.5 rounded-full font-medium"
                    style={{ border: '1px solid rgba(74,222,128,0.3)', color: '#4ADE80', background: 'rgba(74,222,128,0.05)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            {project.link && (
              <div className="pt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-opacity hover:opacity-85"
                  style={{ background: '#4ADE80', color: '#0A0A0A' }}>
                  View Live →
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Back link bottom */}
        <div style={{ borderTop: '1px solid #1a1a1a' }} className="pt-10">
          <a href="#"
            className="text-gray-500 hover:text-white text-sm transition-colors flex items-center gap-2 w-fit"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            ← Back to all projects
          </a>
        </div>
      </div>
    </div>
  );
}
