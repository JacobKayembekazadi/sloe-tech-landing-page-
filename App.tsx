import React, { useEffect, useRef, useState } from 'react';
import { AgentConsole, Eyebrow, OpsEngine, SubstrateExplorer } from './widgets';
import { WorkVignette } from './vignettes';
import { openCookieSettings } from './consent';
import { SystemsPage, CampaignsPage, HowItWorksPage, OperatorsPage, AboutPage } from './Pages';


/** Hash slugs that render a standalone legal page rather than scrolling the home page. */
const LEGAL_SLUGS = ['privacy', 'cookies', 'terms'];

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
  imageAlt: string;
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
    imageAlt: "Emerald data streams converging into a rising bar chart on black",
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
    imageAlt: "Emerald neural network lattice with a heartbeat pulse line",
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
    imageAlt: "Four orbs orbiting an emerald core, linked by filaments of light",
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
    imageAlt: "Night farmland dotted with emerald sensor lights and data lines",
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
    imageAlt: "Dark rock cross section with veins of glowing emerald mineral",
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
    imageAlt: "Stacked dark glass planes with emerald light tracing their edges",
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
    imageAlt: "Aerial night football pitch with emerald tactical lines and markers",
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
    imageAlt: "Football player silhouette with emerald computer vision tracking overlay",
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
    imageAlt: "Dark stadium bowl at night with sweeping emerald light arcs",
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
  { name: "Sloelaboratory", badge: "Live", url: "https://sloelabs.com", desc: "Design your own business OS with an AI architect — industry playbooks, gap analysis, and a personalized deployment plan." },
];

const osLayers = [
  { name: "SLOE OS", indent: 0, meaning: "the operating system", desc: "The whole machine — products, agents, memory, and the learning loop that compounds across engagements." },
  { name: "Substrate", indent: 1, meaning: "the foundation layer", desc: "One self-describing service for CRM, comms, documents, payments, files, and memory — a new system plugs in instead of rebuilding plumbing." },
  { name: "Primitives", indent: 2, meaning: "the bricks", desc: "18 live abilities — each a schema plus a handler on a real backend: HubSpot, Stripe, Resend, R2, Qdrant, Inngest." },
];

const capabilities = [
  "Document analysis and OCR",
  "Autonomous agent workflows",
  "Multi language (EN/FR/PT/AR)",
  "Live business intelligence",
  "Custom API integrations",
  "First deploy in under 2 minutes",
];

const stats = [
  { value: "50+", label: "Systems deployed" },
  { value: "<2min", label: "First system live" },
  { value: "6+", label: "Industries served" },
  { value: "4", label: "Continents" },
];

const navLinks = [
  { label: 'Home', hash: '' },
  { label: 'Campaigns', hash: 'systems' },
  { label: 'Get Yours', hash: 'how' },
  { label: 'Operators', hash: 'operators' },
  { label: 'About', hash: 'about' },
];

// ─── Island Nav ───────────────────────────────────────────────────────────────

function IslandNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50"
        style={{ borderBottom: '1px solid #272727', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        aria-label="Main">
        <div className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-display font-medium tracking-tight text-white text-lg uppercase"
            onClick={e => { e.preventDefault(); window.location.hash = ''; window.scrollTo({ top: 0, behavior: 'smooth' }); setOpen(false); }}>
            <span className="w-6 h-6 bg-signal-green" aria-hidden="true" />
            SLOE LABS
          </a>

          <div className="hidden md:flex items-center gap-8 text-xs font-code uppercase tracking-widest text-ash">
            {navLinks.map(link => (
              <a key={link.hash || 'home'} href={`#${link.hash}`}
                className="hover:text-white transition-colors duration-300">
                {link.label}
              </a>
            ))}
          </div>

          <a href="#operators"
            className="hidden md:block text-xs font-code font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full transition-colors duration-300 bg-signal-green text-ink hover:brightness-110">
            Book a Build
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
            <a key={link.hash || 'home'} href={`#${link.hash}`}
              className="font-display text-3xl font-semibold text-paper transition-all duration-700 ease-fluid"
              style={{
                transform: open ? 'translateY(0)' : 'translateY(48px)',
                opacity: open ? 1 : 0,
                transitionDelay: `${100 + i * 50}ms`,
              }}
              onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#operators"
            className="mt-4 px-6 py-3 text-sm font-code uppercase tracking-widest transition-all duration-700 ease-fluid active:scale-[0.98]"
            style={{
              background: '#4ADE80', color: '#000000',
              transform: open ? 'translateY(0)' : 'translateY(48px)',
              opacity: open ? 1 : 0,
              transitionDelay: `${100 + navLinks.length * 50}ms`,
            }}
            onClick={() => setOpen(false)}>
            Book a Build
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
    'Your first agent live in under 2 minutes.',
    'Full platforms in weeks, not quarters.',
  ];
  let wordIndex = 0;

  return (
    <section className="py-24" style={{ background: '#000000' }}>
      <div className="mx-auto max-w-content px-6">
        <div ref={ref} className="word-reveal font-display font-medium tracking-tight text-paper mx-auto text-center"
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

// ─── Hero Backdrop (ambient video, reduced-motion safe) ──────────────────────

function HeroBackdrop() {
  const [motionOK, setMotionOK] = useState(false);

  useEffect(() => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMotionOK(true);
    }
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {motionOK ? (
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          src="/videos/hero-ambient.mp4"
        />
      ) : (
        <img src="/images/hero-poster.webp" alt="" className="h-full w-full object-cover" />
      )}
      <div className="absolute inset-0" style={{ background: 'rgba(0, 0, 0, 0.7)' }} />
      <div className="absolute inset-0 bg-grid opacity-40" />
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState(window.location.hash.replace('#', '') || 'home');

  useEffect(() => {
    const handler = () => {
      const slug = window.location.hash.replace('#', '') || 'home';
      const topLevelPages = ['privacy', 'cookies', 'terms', 'systems', 'campaigns', 'how', 'operators', 'about'];
      if (work.find(w => w.slug === slug) || topLevelPages.includes(slug)) {
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
  if (page === 'cookies') return <SimplePage title="Cookie policy" body={COOKIES} />;
  if (page === 'terms') return <SimplePage title="Terms of service" body={TERMS} />;
  if (page === 'systems') return <SystemsPage />;
  if (page === 'campaigns') return <CampaignsPage />;
  if (page === 'how') return <HowItWorksPage />;
  if (page === 'operators') return <OperatorsPage />;
  if (page === 'about') return <AboutPage />;

  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <a href="#main" className="skip-link">Skip to content</a>
      <IslandNav />

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <main id="main">
      <section className="relative flex items-center overflow-hidden"
        style={{ minHeight: '100dvh' }}>
        <HeroBackdrop />
        <div className="relative mx-auto max-w-content px-6 py-28 w-full space-y-10">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-ink text-xs font-code uppercase tracking-widest text-ash"
              style={{ border: '1px solid #272727' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" aria-hidden="true" />
              50+ systems in production — 4 continents
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display font-medium tracking-tight text-paper"
              style={{ fontSize: 'clamp(3rem, 9vw, 7.5rem)', lineHeight: 0.92, maxWidth: '18ch' }}>
              AI systems for the world's most <span className="italic text-ash">ambitious</span> businesses
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <div className="max-w-2xl text-lg md:text-xl font-light leading-relaxed pl-6"
              style={{ borderLeft: '1px solid #272727' }}>
              <p className="text-ash">
                Our first public campaign is live. Build your first Agentic OS with specialized AI Agents — live in under 2 minutes.
              </p>
              <p className="mt-4 text-paper">
                Already running production for InOrbit, Houston Methodist, and SMEs on 4 continents.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-8 max-w-2xl"
              style={{ borderTop: '1px solid #272727' }}>
              <a href="#campaigns"
                className="btn-offset px-6 py-3 font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-fluid hover:opacity-90 active:scale-[0.98]"
                style={{ background: '#4ADE80', color: '#000000' }}>
                Book a Free Build →
              </a>
              <a href="#work"
                className="text-sm font-code uppercase tracking-widest text-ash hover:text-white transition-colors duration-300">
                See the work
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── OPS ENGINE (interactive proof, straight off the hero) ───────────── */}
      <section className="py-16" aria-label="Ops engine">
        <div className="mx-auto max-w-content px-6">
          <Reveal>
            <OpsEngine />
          </Reveal>
        </div>
      </section>

      {/* ── STATS BAR ───────────────────────────────────────────────────────── */}
      <div style={{ borderTop: '1px solid #272727', borderBottom: '1px solid #272727' }}>
        <div className="mx-auto max-w-content px-6">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <div key={i} className={`py-8 px-4 text-center ${i > 0 ? 'md:border-l' : ''}`}
                style={{ borderColor: '#272727' }}>
                <div className="font-display font-medium tracking-tight text-3xl md:text-4xl"
                  style={{ color: '#4ADE80', fontVariantNumeric: 'tabular-nums' }}>
                  {s.value}
                </div>
                <div className="text-ash text-xs font-code uppercase tracking-widest mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES (split: offer left, live console right) ─────────────────── */}
      <section id="services" className="py-24">
        <div className="mx-auto max-w-content px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <Eyebrow label="What we deploy" />
                <h2 className="font-display font-medium tracking-tight text-white"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  Systems that run. Not slides.
                </h2>
                <p className="text-ash mt-3 text-lg" style={{ maxWidth: '65ch' }}>
                  Four ways we take operations off your team's plate — pick one on the right
                  and watch it work.
                </p>

                <div className="mt-10">
                  {services.map((s) => (
                    <div key={s.title}
                      className="group flex items-start gap-5 py-6 transition-all duration-300 ease-fluid hover:translate-x-1"
                      style={{ borderTop: '1px solid #272727' }}>
                      <div className="flex-shrink-0 mt-1"><s.Icon /></div>
                      <div>
                        <h3 className="font-display font-medium text-white text-lg mb-1.5">{s.title}</h3>
                        <p className="text-ash leading-relaxed text-sm">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:sticky lg:top-28">
                <AgentConsole />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TAGLINE REVEAL ───────────────────────────────────────────────────── */}
      <TaglineReveal />

      {/* ── PLATFORM + PRODUCTS (nesting left, substrate explorer right) ─────── */}
      <section id="products" className="py-24" style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6 space-y-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <Reveal>
              <div>
                <Eyebrow label="Platform" />
                <h2 className="font-display font-medium tracking-tight text-white"
                  style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                  One operating system underneath
                </h2>
                <p className="text-ash mt-3 text-lg" style={{ maxWidth: '65ch' }}>
                  We don't rebuild plumbing per product. Three layers, one machine:
                </p>

                <div className="mt-10">
                  {osLayers.map(layer => (
                    <div key={layer.name} className="py-5" style={{ borderTop: '1px solid #272727' }}>
                      <div className="flex items-baseline gap-3 mb-1.5"
                        style={{ paddingLeft: `${layer.indent * 20}px` }}>
                        {layer.indent > 0 && (
                          <span className="font-code text-ash text-sm" aria-hidden="true">└─</span>
                        )}
                        <h3 className="font-display font-medium text-white text-lg">{layer.name}</h3>
                        <span className="text-xs font-semibold tracking-widest uppercase text-signal-green">
                          {layer.meaning}
                        </span>
                      </div>
                      <p className="text-ash leading-relaxed text-sm"
                        style={{ paddingLeft: `${layer.indent * 20}px` }}>
                        {layer.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="lg:sticky lg:top-28">
                <SubstrateExplorer />
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="font-display font-medium tracking-tight text-white text-2xl md:text-3xl">
                  Products we operate
                </h3>
                <p className="text-ash mt-2">Not just client work — platforms we build, run, and own.</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {products.map(p => (
                  <div key={p.name}
                    className="h-full p-8 flex flex-col transition-all duration-700 ease-fluid hover:-translate-y-1"
                    style={{ background: '#1F1F1F' }}>
                    <div className="flex items-center gap-3 mb-3">
                      <h4 className="font-display font-medium text-white text-xl">{p.name}</h4>
                      <span className="text-xs px-2 py-0.5 font-code uppercase tracking-wider font-medium"
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
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── WORK ─────────────────────────────────────────────────────────────── */}
      <section id="work" className="py-24">
        <div className="mx-auto max-w-content px-6 space-y-12">
          <Reveal>
            <div>
              <Eyebrow label="Client work" />
              <h2 className="font-display font-medium tracking-tight text-white"
                style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                Selected work
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            {work.filter(w => !w.category).map((w, i) => (
              <Reveal key={w.name} delay={i * 80}>
                <button
                  className="w-full h-full text-left block group overflow-hidden cursor-pointer transition-all duration-700 ease-fluid hover:-translate-y-1 active:scale-[0.99]"
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
              <Eyebrow label="Sports" />
              <h2 className="font-display font-medium tracking-tight text-white"
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
                  className="w-full h-full text-left block group overflow-hidden cursor-pointer transition-all duration-700 ease-fluid hover:-translate-y-1 active:scale-[0.99]"
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
              <h2 className="font-display font-medium tracking-tight text-white"
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
                  className="px-4 py-2 text-sm font-code transition-all duration-300 ease-fluid"
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
                <div>
                  <Eyebrow label="About" />
                  <h2 className="font-display font-medium tracking-tight text-white"
                    style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                    Who we are
                  </h2>
                </div>
                <p className="text-ash text-lg leading-relaxed" style={{ maxWidth: '65ch' }}>
                  Sloe Labs is an AI systems consultancy that deploys production ready AI infrastructure
                  for businesses worldwide. We don't sell decks and walk away. We diagnose, put your
                  first system live in under 2 minutes, and compound from there — build, run, improve.
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
                    className="p-6 transition-all duration-700 ease-fluid"
                    style={{ background: '#1F1F1F' }}>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-display font-medium text-white text-lg">{entity.name}</span>
                      <span className="text-xs px-2 py-0.5 font-code uppercase tracking-wider font-medium"
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

      </main>

      {/* ── FOOTER ───────────────────────────────────────────────────────────── */}
      <footer style={{ background: '#181818' }}>
        <div className="mx-auto max-w-content px-6 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div className="space-y-3">
              <div className="font-display font-medium tracking-tight text-white text-lg">SLOE LABS</div>
              <p className="text-ash text-sm leading-relaxed">
                AI systems consultancy deploying production ready infrastructure for ambitious businesses.
              </p>
            </div>
            <div className="space-y-3">
              <div className="text-white font-semibold text-sm">Navigation</div>
              <div className="flex flex-col gap-2">
                {navLinks.map(link => (
                  <a key={link.hash || 'home'} href={`#${link.hash}`}
                    className="text-ash hover:text-white text-sm transition-colors duration-300">
                    {link.label}
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
                <a href="#cookies" className="text-ash hover:text-white text-sm transition-colors duration-300">
                  Cookie policy
                </a>
                <a href="#terms" className="text-ash hover:text-white text-sm transition-colors duration-300">
                  Terms of service
                </a>
                <button type="button" onClick={openCookieSettings}
                  className="text-ash hover:text-white text-sm transition-colors duration-300 text-left">
                  Cookie settings
                </button>
              </div>
            </div>
          </div>

          <div style={{ borderTop: '1px solid #272727' }} className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-ash text-xs font-code uppercase tracking-widest">© 2026 Sloe Labs · Toronto, Canada</p>
            <p className="text-ash text-xs font-code uppercase tracking-widest">Texas, USA · Johannesburg, South Africa · United Kingdom</p>
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
      <div className="overflow-hidden" style={{ aspectRatio: '16 / 9', borderBottom: '1px solid #272727' }}>
        <WorkVignette slug={w.slug} />
      </div>
      <div className="p-8">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="font-display font-medium text-white text-xl">{w.name}</h3>
          <span style={{ color: '#4ADE80' }} className="text-xl flex-shrink-0 transition-transform duration-300 ease-fluid group-hover:translate-x-1">→</span>
        </div>
        <p className="text-ash leading-relaxed mb-6">{w.tagline}</p>
        <div className="flex flex-wrap gap-2">
          {w.tags.map(t => (
            <span key={t}
              className="text-xs font-code px-2 py-0.5"
              style={{ background: '#272727', color: '#9B9B9B' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </>
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
      <nav className="fixed top-0 inset-x-0 z-50"
        style={{ borderBottom: '1px solid #272727', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        aria-label="Main">
        <div className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
          <a href="#"
            className="font-display font-medium tracking-tight text-white text-base"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            SLOE LABS
          </a>
          <a href="#"
            className="text-xs font-code uppercase tracking-widest text-ash hover:text-white transition-colors duration-300"
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
              className="text-xs font-code px-2 py-0.5"
              style={{ background: '#272727', color: '#9B9B9B' }}>
              {t}
            </span>
          ))}
        </div>

        <h1 className="font-display font-medium tracking-tight mb-4"
          style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', lineHeight: 1.05, maxWidth: '680px' }}>
          {project.name}
        </h1>
        <p className="text-ash text-xl leading-relaxed mb-12" style={{ maxWidth: '65ch' }}>
          {project.tagline}
        </p>

        <div className="overflow-hidden mb-16" style={{ aspectRatio: '16 / 9', border: '1px solid #272727' }}>
          <WorkVignette slug={project.slug} />
        </div>

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
                    className="text-sm font-code px-3 py-1 font-medium"
                    style={{ background: '#181818', color: '#4ADE80' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {project.link && (
              <div className="pt-2">
                <a href={project.link} target="_blank" rel="noopener noreferrer"
                  className="btn-offset inline-flex items-center gap-2 px-6 py-3 font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-fluid hover:opacity-90 active:scale-[0.98]"
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

type Block =
  | { h: string }
  | { p: string }
  | { list: string[] }
  | { table: { head: string[]; rows: string[][] } }
  | { action: string };

const PRIVACY: Block[] = [
  { p: "This site, work.sloelabs.com, is operated by Sloe Labs Inc. — a Canadian federal corporation (CBCA corporation number 1781545-0) registered in Ontario, Canada. We decide what happens to the personal information described below, which makes us the controller of it. Everything on this page routes to one address: reports@sloelabs.com." },

  { h: "What we collect" },
  { p: "Two things, and only two. There is no account, no login, and no tracking pixel in the contact form." },
  { list: [
    "The contact form — your name, email address, company (optional), and message.",
    "Analytics, and only if you accept — which pages you view, the link or search that sent you, clicks on page elements, and coarse device and browser details. Your IP address reaches our analytics provider and is used to derive an approximate location.",
  ] },
  { p: "If you decline analytics, none of the second category is collected. The script is never loaded at all." },

  { h: "Why, and on what basis" },
  { list: [
    "To answer you. Contact-form details are used to reply and to manage the conversation that follows. The lawful basis is the steps taken at your request before entering a contract, plus our legitimate interest in running a sales pipeline.",
    "To understand what the site is doing. Analytics only. The lawful basis is your consent, which you can withdraw at any moment and as easily as you gave it.",
  ] },

  { h: "Where it goes" },
  { p: "We use four service providers. This is the complete list, not a representative sample." },
  { table: {
    head: ["Provider", "What it handles", "Where"],
    rows: [
      ["Linear", "The contact form files an issue in our project tracker containing your name, email, company and message", "United States"],
      ["PostHog", "Analytics events — only after you accept", "United States"],
      ["Cloudflare", "Hosting, CDN, and an aggregate performance measurement that sets no cookie", "Global edge network"],
      ["Google Fonts", "Serves the site's typefaces; your IP address is disclosed to Google when a page loads", "United States"],
    ],
  } },
  { p: "We do not sell, rent, or trade personal information, we do not share it with anyone outside that list, and we do not use it to train AI models." },

  { h: "Leaving Canada" },
  { p: "Those providers are in the United States, so anything you send us is processed outside Canada and outside the EEA and the UK. Each of them offers a data processing agreement incorporating the European Commission's Standard Contractual Clauses. If you are contracting with us and need the transfer paperwork for your own compliance file, email reports@sloelabs.com and we will sort it out with you." },

  { h: "How long we keep it" },
  { p: "Inquiries stay in our issue tracker for as long as they are relevant to a live or potential engagement. We will be straight with you: we do not currently run an automatic deletion schedule for them. If you want your inquiry removed, email reports@sloelabs.com and we will delete it." },
  { p: "Analytics events are held in our PostHog project. The identifier stored in your browser expires 12 months after your last visit, and declining analytics clears it immediately." },

  { h: "Your rights" },
  { p: "Wherever you are, you can ask us for a copy of what we hold about you, ask us to correct it, ask us to delete it, object to how we are using it, or withdraw your analytics consent. One email — reports@sloelabs.com — covers all of it, and we will answer within 30 days." },
  { p: "You can also complain to a regulator: the Office of the Privacy Commissioner of Canada, your national supervisory authority in the EU, the Information Commissioner's Office in the UK, or the Information Regulator in South Africa." },

  { h: "Cookies" },
  { p: "One analytics identifier, set only if you accept, plus one entry that remembers your answer. The full list with names and lifetimes is on the cookie policy, and you can change your mind there or here." },
  { action: "Change your cookie choice" },

  { h: "Changes" },
  { p: "If we change this policy we change the date below. If we materially change how analytics work, we will ask for your consent again rather than assume the old answer still applies." },
];

const COOKIES: Block[] = [
  { p: "This site uses one non-essential cookie, and it is not set unless you accept it. What follows was checked in a browser against the live site — the names, the lifetimes, and the claim that nothing else sets a cookie are observations, not a template." },

  { h: "If you do nothing" },
  { p: "No analytics script loads, no analytics cookie is written, and no analytics event is sent anywhere. The banner stays until you answer it. The site behaves identically whichever way you choose — nothing is withheld, degraded, or nagged." },

  { h: "What gets set, and when" },
  { table: {
    head: ["Name", "Kind", "Set by", "What it does", "Expires"],
    rows: [
      ["sloe_consent_v1", "Local storage", "Sloe Labs", "Remembers whether you accepted or declined, so we stop asking", "When you clear your browser storage"],
      ["ph_phc_…_posthog", "Cookie and local storage", "PostHog", "Analytics identifier — a random device id, a session id, and the page and referrer you first arrived from", "12 months after your last visit"],
      ["ph_phc_…_window_id (and two related keys)", "Session storage", "PostHog", "Keeps events attached to the right browser tab", "When you close the tab"],
    ],
  } },
  { p: "Only the first row applies if you decline — it is what records the decline, and it is why the banner does not ask again. The PostHog rows appear only after you accept, and are removed if you later change your mind." },

  { h: "Things that are not cookies" },
  { list: [
    "Cloudflare serves this site and takes an aggregate performance measurement. It sets no cookie: on a fresh visit the only cookie present is the PostHog one, and only once accepted.",
    "The typefaces load from Google Fonts. That sets no cookie either, but it does disclose your IP address to Google, which is why Google is named in the privacy policy.",
  ] },

  { h: "Changing your mind" },
  { p: "Decline after accepting and we stop capture, delete the PostHog entries from your browser, and expire the cookie — including any copy an earlier visit left on the parent domain. You can also clear everything yourself in your browser settings; nothing here survives that." },
  { action: "Change your cookie choice" },
];

const TERMS: Block[] = [
  { p: "This website is provided by Sloe Labs Inc. (Canada) for informational purposes. Content describes our services and past work; it does not constitute a binding offer." },
  { p: "Case study descriptions reflect real engagements. Client names and details are shared with permission or anonymized. Linked demonstrations may run on representative data." },
  { p: "Engagements are governed by individually signed agreements, not by this website. For questions, contact reports@sloelabs.com." },
];

function LegalBlocks({ body }: { body: Block[] }) {
  return (
    <>
      {body.map((block, i) => {
        if ('h' in block) {
          return (
            <h2 key={i} className="font-display font-medium tracking-tight text-paper pt-6"
              style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)' }}>
              {block.h}
            </h2>
          );
        }
        if ('p' in block) {
          return (
            <p key={i} className="text-ash text-base leading-relaxed" style={{ maxWidth: '65ch' }}>
              {block.p}
            </p>
          );
        }
        if ('list' in block) {
          return (
            <ul key={i} className="space-y-3" style={{ maxWidth: '65ch' }}>
              {block.list.map((item, j) => (
                <li key={j} className="flex items-start gap-3 text-ash text-base leading-relaxed">
                  <span style={{ color: '#4ADE80', flexShrink: 0 }} aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          );
        }
        if ('table' in block) {
          return (
            <div key={i} className="overflow-x-auto" style={{ border: '1px solid #272727' }}>
              <table className="w-full text-left text-sm" style={{ minWidth: '640px', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {block.table.head.map(h => (
                      <th key={h} scope="col"
                        className="px-4 py-3 text-xs font-code uppercase tracking-widest font-medium"
                        style={{ background: '#181818', color: '#4ADE80', borderBottom: '1px solid #272727' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.table.rows.map((row, r) => (
                    <tr key={r}>
                      {row.map((cell, c) => (
                        <td key={c} className="px-4 py-3 align-top leading-relaxed"
                          style={{ color: c === 0 ? '#F5F1E8' : '#9B9B9B', borderTop: r === 0 ? 'none' : '1px solid #272727' }}>
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <button key={i} type="button" onClick={openCookieSettings}
            className="btn-offset inline-flex items-center px-6 py-3 font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-fluid hover:opacity-90 active:scale-[0.98]"
            style={{ background: '#4ADE80', color: '#000000' }}>
            {block.action} →
          </button>
        );
      })}
    </>
  );
}

function SimplePage({ title, body }: { title: string; body: Block[] }) {
  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <nav className="fixed top-0 inset-x-0 z-50"
        style={{ borderBottom: '1px solid #272727', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        aria-label="Main">
        <div className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-medium tracking-tight text-white text-base"
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
        <h1 className="font-display font-medium tracking-tight mb-8"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', maxWidth: '680px' }}>
          {title}
        </h1>
        <div className="space-y-6">
          <LegalBlocks body={body} />
        </div>
        <p className="text-ash text-sm mt-12" style={{ borderTop: '1px solid #272727', paddingTop: '2rem' }}>
          Last updated 4 August 2026 · Sloe Labs Inc., Ontario, Canada ·{' '}
          <a className="underline hover:text-white transition-colors duration-300" href="mailto:reports@sloelabs.com">
            reports@sloelabs.com
          </a>
        </p>
      </div>
    </div>
  );
}
