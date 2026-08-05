import React, { useState } from 'react';

// ─── Shared shell (matches SimplePage nav pattern already used in App.tsx) ────

function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen font-body grain" style={{ background: '#000000', color: '#F5F1E8' }}>
      <nav className="fixed top-0 inset-x-0 z-50"
        style={{ borderBottom: '1px solid #272727', background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
        aria-label="Main">
        <div className="mx-auto max-w-content px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 font-display font-medium tracking-tight text-white text-lg uppercase"
            onClick={e => { e.preventDefault(); window.location.hash = ''; }}>
            <span className="w-6 h-6 bg-signal-green" aria-hidden="true" />
            SLOE LABS
          </a>
          <div className="hidden md:flex items-center gap-8 text-xs font-code uppercase tracking-widest text-ash">
            <a href="#" className="hover:text-white transition-colors duration-300" onClick={e => { e.preventDefault(); window.location.hash = ''; }}>Home</a>
            <a href="#systems" className="hover:text-white transition-colors duration-300">Systems</a>
            <a href="#campaigns" className="hover:text-white transition-colors duration-300">Campaigns</a>
            <a href="#how" className="hover:text-white transition-colors duration-300">How It Works</a>
            <a href="#operators" className="hover:text-white transition-colors duration-300">Operators</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
          </div>
          <a href="#operators"
            className="hidden md:block text-xs font-code font-semibold uppercase tracking-widest px-4 py-2.5 rounded-full transition-colors duration-300 bg-signal-green text-ink hover:brightness-110">
            Book a Build
          </a>
        </div>
      </nav>
      <main className="pt-32">{children}</main>
      <footer className="border-t mx-auto max-w-content px-6 py-8 flex flex-wrap gap-4 justify-between items-center font-code text-[11.5px] tracking-wide text-ash"
        style={{ borderColor: '#272727' }}>
        <div>© 2026 Sloe Labs Inc.</div>
        <div>Free tier included on every build.</div>
      </footer>
    </div>
  );
}

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="font-code text-xs uppercase tracking-[0.2em] text-signal-green mb-4">{children}</div>
);

// ─── Systems ────────────────────────────────────────────────────────────────

const systems = [
  { name: 'Agentic OS Platform', tier: 'PRIMARY · LIVE', desc: 'Complete deployment framework for on-device AI operating systems.', tags: ['Inbox triage', 'Lead follow-ups', 'Tool syncing'] },
  { name: 'Realtor OS', tier: 'LIVE', desc: 'Specialized AI operating system for real estate brokerages and property managers.', tags: ['Lead qualification', 'Tour bookings', 'Tenant intake'] },
  { name: 'Next Vertical', tier: 'COMING SOON', desc: 'The next licensed system enters build once the current cohort ships.', tags: [] },
  { name: 'Next Vertical', tier: 'COMING SOON', desc: 'Room reserved for the next operating system as operators go live.', tags: [] },
];

export function SystemsPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-content px-6 pb-24">
        <Eyebrow>What's Live</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-4" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>Systems</h1>
        <p className="text-ash text-lg mb-14" style={{ maxWidth: '620px' }}>Every system below is deployed and running businesses today — not roadmap.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <div key={i} className="rounded p-9 flex flex-col gap-4" style={{ border: '1px solid #272727', background: '#141414' }}>
              <div className="flex justify-between items-start gap-3">
                <div className="font-display font-semibold text-2xl">{sys.name}</div>
                <div className="font-code text-[10.5px] tracking-wide text-signal-green px-2.5 py-1 rounded-full whitespace-nowrap" style={{ border: '1px solid rgba(74,222,128,.4)' }}>{sys.tier}</div>
              </div>
              <div className="text-ash text-[15px] leading-relaxed">{sys.desc}</div>
              <div className="flex gap-2 flex-wrap">
                {sys.tags.map(tag => (
                  <span key={tag} className="font-code text-[11px] tracking-wide text-ash px-2.5 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,.12)' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ─── Campaigns ──────────────────────────────────────────────────────────────

const slides = [
  { src: '/assets/slide_inbox.png', label: 'Inbox & Email Triage' },
  { src: '/assets/slide_convo.png', label: 'Conversational Task Handoff' },
  { src: '/assets/slide_integrations.png', label: 'Integrations Hub' },
  { src: '/assets/slide_library.png', label: 'Agent Library' },
];

export function CampaignsPage() {
  return (
    <PageShell>
      <div className="mx-auto px-6 pb-24" style={{ maxWidth: '1200px' }}>
        <Eyebrow>Primary Campaign · Live Now</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', maxWidth: '760px' }}>Agentic OS Platform</h1>
        <p className="text-ash text-lg leading-relaxed mb-9" style={{ maxWidth: '680px' }}>
          The complete deployment framework for on-device AI operating systems — inbox triage, lead follow-ups, and tool syncing, running live on a business's own machine within minutes of the build.
        </p>
        <a href="#operators" className="inline-block font-code font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full bg-signal-green text-ink hover:brightness-110 transition mb-14">
          Book Your Free Build and Installation
        </a>
        <video src="/assets/agentic_os_demo.mp4" controls playsInline
          className="w-full rounded mb-14 block"
          style={{ aspectRatio: '16/9', border: '1px solid #272727', background: '#141414', objectFit: 'cover' }} />
        <div className="grid md:grid-cols-2 gap-6">
          {slides.map(s => (
            <div key={s.src}>
              <img src={s.src} alt={s.label} className="w-full rounded" style={{ aspectRatio: '16/10', border: '1px solid #272727', objectFit: 'cover' }} />
              <div className="font-code text-[11px] tracking-wide text-ash mt-2.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ─── How It Works ───────────────────────────────────────────────────────────

const steps = [
  { n: '01', title: 'Claim Your Free Build', body: 'Your AI Agent, built for your business — free, no card, no catch. It runs on your machine, live in under 2 minutes.', first: true },
  { n: '02', title: 'A Real Person Builds It With You', body: 'No configuring software yourself. A licensed Sloe operator gets on with you, learns what your business actually needs, and picks the right setup for you — built, not templated.', first: false },
  { n: '03', title: 'We Prove It Works Before We Leave', body: "Before handoff, you give your Agent its first real task yourself, live. You watch it work. You know it's real before we go.", first: false },
  { n: '04', title: "It's Yours", body: 'It lives on your machine, running your business. Free tier included. Upgrade only if you want more.', first: false },
];

export function HowItWorksPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-content px-6 pb-24">
        <Eyebrow>The Process</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-14" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>How It Works</h1>
        <div className="grid md:grid-cols-4 border-t" style={{ borderColor: '#272727' }}>
          {steps.map((step, i) => (
            <div key={step.n} className="pt-8 pr-6 border-r" style={{ borderColor: i === steps.length - 1 ? 'transparent' : '#272727' }}>
              <div className="font-display font-semibold text-4xl mb-4" style={{ color: 'rgba(74,222,128,.9)' }}>{step.n}</div>
              {step.first && (
                <div className="mb-5">
                  <div className="h-1 rounded overflow-hidden" style={{ background: '#272727' }}>
                    <div className="h-full rounded" style={{ width: '100%', background: '#4ADE80' }} />
                  </div>
                  <div className="font-code text-[11px] tracking-wide text-ash mt-2">LIVE BUILD · UNDER 2:00</div>
                </div>
              )}
              <div className="font-display font-semibold text-lg mb-3 leading-snug">{step.title}</div>
              <div className="text-ash text-[14.5px] leading-relaxed pr-2">{step.body}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// ─── Operators ──────────────────────────────────────────────────────────────

const operators = [
  { business: 'D14 Sports', operator: 'Dieubon', city: 'Houston, US', niche: 'Sports', pitch: 'AI systems built for sports businesses and the people running them.', bookingUrl: 'https://d14-sports.sloelabs.com' },
  { business: 'Harcourts Lifestyle', operator: 'Onye Orakwue', city: 'Johannesburg, SA', niche: 'Real Estate', pitch: 'Backed by real client relationships in real estate — not a cold pitch.', bookingUrl: 'https://harcourts-lifestyle.sloelabs.com' },
  { business: 'Freeman Construction', operator: 'Thumbiko Chirwa', city: 'Johannesburg, SA', niche: 'Construction', pitch: 'Reaching construction businesses where they already are — built for the trade.', bookingUrl: 'https://freeman-construction.sloelabs.com' },
  { business: 'KPM Studio', operator: 'Kgobane Phomolo Monama', city: 'Johannesburg, SA', niche: 'Marketing & Media', pitch: 'Proven through the work itself — a portfolio of real media projects backing every pitch.', bookingUrl: 'https://kpm-studio.sloelabs.com' },
  { business: 'motionmarketing', operator: 'Mando Muimui', city: 'Johannesburg, SA', niche: 'Marketing & Media', pitch: 'Hands-on outreach, direct relationships — built for marketers who close their own deals.', bookingUrl: 'https://motionmarketing.sloelabs.com' },
];

function Chip({ label, active, onClick }: { label: string; active: boolean; onClick: () => void; key?: React.Key }) {
  return (
    <span onClick={onClick} className="cursor-pointer font-code text-[11.5px] tracking-wide px-4 py-2 rounded-full transition"
      style={{
        border: `1px solid ${active ? '#4ADE80' : 'rgba(255,255,255,.15)'}`,
        background: active ? '#4ADE80' : 'transparent',
        color: active ? '#000000' : 'rgba(245,241,232,.6)',
      }}>
      {label}
    </span>
  );
}

export function OperatorsPage() {
  const [city, setCity] = useState('All');
  const [niche, setNiche] = useState('All');

  const cities = ['All', ...Array.from(new Set(operators.map(o => o.city)))];
  const niches = ['All', ...Array.from(new Set(operators.map(o => o.niche)))];
  const filtered = operators.filter(o => (city === 'All' || o.city === city) && (niche === 'All' || o.niche === niche));

  return (
    <PageShell>
      <div className="mx-auto max-w-content px-6 pb-24">
        <Eyebrow>Licensed Guild</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-4" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>Operators</h1>
        <p className="text-ash text-lg mb-11" style={{ maxWidth: '620px' }}>Pick the licensed operator who serves your city and niche — they run your free build and installation in person.</p>

        <div className="flex gap-2.5 flex-wrap mb-4">
          {cities.map(c => <Chip key={c} label={c} active={c === city} onClick={() => setCity(c)} />)}
        </div>
        <div className="flex gap-2.5 flex-wrap mb-11">
          {niches.map(n => <Chip key={n} label={n} active={n === niche} onClick={() => setNiche(n)} />)}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map(op => (
            <div key={op.business} className="rounded p-7 flex gap-5" style={{ border: '1px solid #272727', background: '#141414' }}>
              <div className="w-[72px] h-[72px] flex-none rounded-full flex items-center justify-center font-display font-semibold text-xl"
                style={{ background: '#1F1F1F', color: '#4ADE80' }}>
                {op.operator.split(' ').map(n => n[0]).slice(0, 2).join('')}
              </div>
              <div className="flex flex-col gap-2.5 min-w-0">
                <div>
                  <div className="font-display font-semibold text-lg">{op.business}</div>
                  <div className="font-code text-[11.5px] text-ash mt-0.5">{op.operator} · {op.city} · {op.niche}</div>
                </div>
                <div className="text-[14px] leading-relaxed text-ash">{op.pitch}</div>
                <a href={op.bookingUrl} target="_blank" rel="noreferrer"
                  className="font-code text-[11.5px] tracking-wide px-4 py-2 rounded-full w-fit mt-1 hover:bg-white/5 transition"
                  style={{ border: '1px solid rgba(74,222,128,.4)', color: '#4ADE80' }}>
                  Book with {op.operator} →
                </a>
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="font-code text-[13px] text-ash text-center py-16">No operators match that combination yet.</div>
        )}
      </div>
    </PageShell>
  );
}

// ─── About ──────────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto px-6 pb-28" style={{ maxWidth: '900px' }}>
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-11" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>Built by operators, for operators.</h1>
        <div className="flex gap-8 items-start">
          <div className="w-[140px] h-[140px] flex-none rounded-full flex items-center justify-center font-display font-semibold text-3xl"
            style={{ background: '#1F1F1F', color: '#4ADE80' }}>
            IK
          </div>
          <div className="flex flex-col gap-5 text-[17px] leading-relaxed text-ash pt-1.5">
            <p>I'm Isaac. I started Sloe Labs because most "AI for business" is a demo, not a deployment — a deck, a trial link, and a business owner left to configure the rest themselves.</p>
            <p>We build the opposite: an operating system that lands on your machine and does real work — triaging inboxes, following up leads, syncing your tools — before anyone leaves the room.</p>
            <p>Every build is installed in person by a licensed Sloe operator who knows your business, not a script. That's the whole model: real systems, run by real people, proven live before we call it done.</p>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
