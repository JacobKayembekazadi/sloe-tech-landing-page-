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
            <a href="#systems" className="hover:text-white transition-colors duration-300">Campaigns</a>
            <a href="#how" className="hover:text-white transition-colors duration-300">Get Yours</a>
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

// ─── Systems + Campaigns (merged: grid → click a live system → its campaign) ──

const systems = [
  { slug: 'agentic-os-platform', name: 'Agentic OS Platform', tier: 'PRIMARY · LIVE', desc: 'Complete deployment framework for on-device AI operating systems.', tags: ['Inbox triage', 'Lead follow-ups', 'Tool syncing'], hasDetail: true },
  { slug: 'realtor-os', name: 'Realtor OS', tier: 'LIVE', desc: 'Specialized AI operating system for real estate brokerages and property managers.', tags: ['Lead qualification', 'Tour bookings', 'Tenant intake'], hasDetail: false },
  { slug: 'next-1', name: 'Next Vertical', tier: 'COMING SOON', desc: 'The next licensed system enters build once the current cohort ships.', tags: [], hasDetail: false },
  { slug: 'next-2', name: 'Next Vertical', tier: 'COMING SOON', desc: 'Room reserved for the next operating system as operators go live.', tags: [], hasDetail: false },
];

const campaignDetails: Record<string, {
  desc: string;
  video: { src: string; stage: string; title: string; body: string };
  slides: { src: string; stage: string; title: string; body: string }[];
}> = {
  'agentic-os-platform': {
    desc: "The complete deployment framework for on-device AI operating systems — inbox triage, lead follow-ups, and tool syncing, running live on a business's own machine within minutes of the build.",
    video: {
      src: '/assets/agentic_os_demo.mp4',
      stage: '01',
      title: 'Build It Live',
      body: 'Answer a few tight questions. The Architect builds your working application in real time — right in front of you.',
    },
    slides: [
      { src: '/assets/slide_integrations.png', stage: '02', title: 'Connect Your Tools', body: 'Link Gmail, LinkedIn, and the tools the business already runs on — approved access, nothing stored.' },
      { src: '/assets/slide_inbox.png', stage: '03', title: 'Put It To Work', body: 'Your Agent triages the real inbox and flags what actually needs a human.' },
      { src: '/assets/slide_convo.png', stage: '04', title: 'Hand Off Real Tasks', body: 'Tell your Agent what to do in plain language — it drafts, sends, and reports back.' },
      { src: '/assets/slide_library.png', stage: '05', title: 'Scale The Team', body: 'Add specialist agents — sales, marketing, finance — as the work grows.' },
    ],
  },
};

function StageCaption({ stage, title, body }: { stage: string; title: string; body: string }) {
  return (
    <div className="mt-3.5">
      <div className="flex items-baseline gap-2.5 mb-1.5">
        <span className="font-code text-[11px] tracking-widest" style={{ color: '#4ADE80' }}>STAGE {stage}</span>
        <span className="font-display font-semibold text-[15px]">{title}</span>
      </div>
      <div className="text-ash text-[13.5px] leading-relaxed">{body}</div>
    </div>
  );
}

type CampaignDetail = {
  desc: string;
  video: { src: string; stage: string; title: string; body: string };
  slides: { src: string; stage: string; title: string; body: string }[];
};

function CampaignDetailBody({ name, detail, ctaLabel, ctaHref, ctaInert }: {
  name: string;
  detail: CampaignDetail;
  ctaLabel: string;
  ctaHref?: string;
  ctaInert?: boolean;
}) {
  return (
    <>
      <Eyebrow>Primary Campaign · Live Now</Eyebrow>
      <h1 className="font-display font-medium tracking-tight mb-5" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', maxWidth: '760px' }}>{name}</h1>
      <p className="text-ash text-lg leading-relaxed mb-9" style={{ maxWidth: '680px' }}>{detail.desc}</p>
      {ctaInert ? (
        <button onClick={e => { e.preventDefault(); }}
          title="Calendly link coming soon"
          className="inline-block font-code font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full bg-signal-green text-ink hover:brightness-110 transition mb-14 opacity-90">
          {ctaLabel}
        </button>
      ) : (
        <a href={ctaHref} className="inline-block font-code font-semibold text-[13px] uppercase tracking-widest px-8 py-4 rounded-full bg-signal-green text-ink hover:brightness-110 transition mb-14">
          {ctaLabel}
        </a>
      )}
      <div className="mb-14">
        <video src={detail.video.src} controls playsInline
          className="w-full rounded block"
          style={{ aspectRatio: '16/9', border: '1px solid #272727', background: '#141414', objectFit: 'cover' }} />
        <StageCaption stage={detail.video.stage} title={detail.video.title} body={detail.video.body} />
      </div>
      <div className="grid md:grid-cols-2 gap-x-6 gap-y-12">
        {detail.slides.map(s => (
          <div key={s.src}>
            <img src={s.src} alt={s.title} className="w-full rounded" style={{ aspectRatio: '16/10', border: '1px solid #272727', objectFit: 'cover' }} />
            <StageCaption stage={s.stage} title={s.title} body={s.body} />
          </div>
        ))}
      </div>
    </>
  );
}

export function SystemsPage({ initialSelected = null }: { initialSelected?: string | null }) {
  const [selected, setSelected] = useState<string | null>(initialSelected);
  const active = selected ? systems.find(s => s.slug === selected) : null;
  const detail = active ? campaignDetails[active.slug] : null;

  if (active && detail) {
    return (
      <PageShell>
        <div className="mx-auto px-6 pb-24" style={{ maxWidth: '1200px' }}>
          <button onClick={() => setSelected(null)}
            className="font-code text-[11.5px] tracking-wide text-ash hover:text-white transition mb-10 inline-block">
            ← Back to Campaigns
          </button>
          <CampaignDetailBody name={active.name} detail={detail} ctaLabel="Book Your Free Build and Installation" ctaHref="#operators" />
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell>
      <div className="mx-auto max-w-content px-6 pb-24">
        <Eyebrow>What's Live</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-4" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>Campaigns</h1>
        <p className="text-ash text-lg mb-14" style={{ maxWidth: '620px' }}>Every campaign below is deployed and running businesses today — not roadmap.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {systems.map((sys, i) => (
            <div key={i}
              onClick={sys.hasDetail ? () => setSelected(sys.slug) : undefined}
              className="rounded p-9 flex flex-col gap-4 transition"
              style={{
                border: '1px solid #272727', background: '#141414',
                cursor: sys.hasDetail ? 'pointer' : 'default',
                opacity: sys.tier === 'COMING SOON' ? 0.6 : 1,
              }}>
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
              {sys.hasDetail && (
                <div className="font-code text-[11px] tracking-wide mt-1" style={{ color: '#4ADE80' }}>View campaign →</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

// Back-compat: anything still routing to #campaigns lands on the Agentic OS
// Platform detail directly, since that's the one live campaign.
export function CampaignsPage() {
  return <SystemsPage initialSelected="agentic-os-platform" />;
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
        <h1 className="font-display font-medium tracking-tight mb-14" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>How To Get Yours</h1>
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
  { slug: 'd14-sports', business: 'D14', operator: 'Dieubon David', city: 'Houston, US', niche: 'Sports', pitch: 'AI systems built for sports businesses and the people running them.', bookingUrl: 'https://d14-sports.sloelabs.com' },
  { slug: 'harcourts-lifestyle', business: 'Harcourts Lifestyle', operator: 'Onye Orakwue', city: 'Johannesburg, SA', niche: 'Real Estate', pitch: 'Backed by real client relationships in real estate — not a cold pitch.', bookingUrl: 'https://harcourts-lifestyle.sloelabs.com' },
  { slug: 'freeman-construction', business: 'Freeman Construction', operator: 'Thumbiko Chirwa', city: 'Johannesburg, SA', niche: 'Construction', pitch: 'Reaching construction businesses where they already are — built for the trade.', bookingUrl: 'https://freeman-construction.sloelabs.com' },
  { slug: 'kpm-studio', business: 'KPM Studio', operator: 'Kgobane Phomolo Monama', city: 'Johannesburg, SA', niche: 'Marketing & Media', pitch: 'Proven through the work itself — a portfolio of real media projects backing every pitch.', bookingUrl: 'https://kpm-studio.sloelabs.com' },
  { slug: 'motionmarketing', business: 'motionmarketing', operator: 'Mando Muimui', city: 'Johannesburg, SA', niche: 'Marketing & Media', pitch: 'Hands-on outreach, direct relationships — built for marketers who close their own deals.', bookingUrl: 'https://motionmarketing.sloelabs.com' },
];

// Real, shipped work only — no fabricated case studies against a real
// operator's name. Populate an operator's array here once their actual
// project list is confirmed; until then they get the "in progress" state.
const operatorPortfolios: Record<string, { name: string; tagline: string; tags: string[]; link: string | null }[]> = {
  'd14-sports': [
    {
      name: 'RZ Cantera Intelligence',
      tagline: 'AI powered academy operating system for Real Zaragoza — player development intelligence, squad oversight, and a voice driven AI assistant for coaches.',
      tags: ['Football', 'Club OS', 'Voice AI', 'La Liga Academy'],
      link: 'https://rz-cantera-v2.vercel.app',
    },
    {
      name: 'ScoutBase Africa',
      tagline: 'Football scouting platform with computer vision player analysis — built to surface African talent to clubs worldwide.',
      tags: ['Football', 'Computer Vision', 'YOLO v11', 'Scouting'],
      link: null,
    },
    {
      name: 'Sportnaa OS',
      tagline: 'Sports agency management platform — athletes, contracts, and operations in one bilingual Arabic and English system built for the Gulf market.',
      tags: ['Sports Agency', 'Arabic/English', 'Gulf', 'React'],
      link: null,
    },
  ],
};

// Operator Spotlight — the credentialed, proof-driven story for an operator's
// portfolio page. Only populate once the real story is written and confirmed;
// no spotlight block renders for an operator without one.
const operatorSpotlights: Record<string, {
  badge: string;
  roleLine: string;
  territory: string;
  vertical: string;
  regNumber: string;
  proof: string[];
  body: string;
  ctaLabel: string;
  campaignSlug?: string;
  campaignCtaLabel?: string;
}> = {
  'd14-sports': {
    badge: 'SLOE AI LICENSED OPERATOR · OFFICIAL CREATOR & DISTRIBUTION CREDENTIAL',
    roleLine: 'The Licensed Operator who turns sports organizations\u2019 AI ambitions into systems that actually run.',
    territory: 'Europe & USA',
    vertical: 'Sports OS',
    regNumber: '23279',
    proof: ['Real Zaragoza · Spain', 'Parma Calcio · Italy', 'Soccer Club President · Qatar', 'Sports Agencies · EU'],
    body: "Dieubon doesn't sell a demo — he gets Sloe Labs into rooms we couldn't reach alone. He delivered an AI Operating System into the academy of Real Zaragoza, a professional Spanish football club based in Spain, opened the door to a conversation with Parma Calcio — First Division club based in Italy — and personally introduced us to the president of a Qatar-based football. If you're running a club, agency, or academy, that's exactly what you're booking when you book him: someone who's already proven he can get a system in front of the people who decide — not just build it and hope someone notices.",
    ctaLabel: 'Book Time With Dieubon →',
    campaignSlug: 'agentic-os-platform',
    campaignCtaLabel: 'Book With Dieubon →',
  },
};

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

function LicenseBadge({ territory, vertical, regNumber }: { territory: string; vertical: string; regNumber: string }) {
  return (
    <div className="rounded overflow-hidden mb-7" style={{ border: '1px solid rgba(74,222,128,.35)', background: '#0A0F0C' }}>
      <div className="h-[3px]" style={{ background: '#4ADE80' }} />
      <div className="p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full flex items-center justify-center flex-none"
              style={{ background: 'rgba(234,179,8,0.12)', border: '1px solid rgba(234,179,8,0.5)' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EAB308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L3 7v6c0 5.25 3.75 10.15 9 11.25 5.25-1.1 9-6 9-11.25V7l-9-5z" />
                <path d="M12 7v5l3 3" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-display font-bold text-[15px] tracking-wide">SLOE AI LICENSE</span>
                <span className="font-code text-[10px] tracking-wide px-2 py-0.5 rounded-full" style={{ border: '1px solid rgba(74,222,128,.4)', color: '#4ADE80' }}>
                  ✦ VERIFIED OPERATOR
                </span>
              </div>
              <div className="font-code text-[10.5px] text-ash tracking-wide mt-0.5">OFFICIAL CREATOR &amp; DISTRIBUTION CREDENTIAL</div>
            </div>
          </div>
          <span className="font-code text-[11px] tracking-wide text-ash px-2.5 py-1 rounded" style={{ border: '1px solid #272727' }}>Reg #{regNumber}</span>
        </div>
        <div className="grid grid-cols-2 gap-6 pt-4" style={{ borderTop: '1px solid #1C1C1C' }}>
          <div>
            <div className="font-code text-[10px] tracking-widest text-ash mb-1">LICENSED TERRITORY</div>
            <div className="font-display font-semibold text-[15px]">{territory}</div>
          </div>
          <div>
            <div className="font-code text-[10px] tracking-widest text-ash mb-1">PRIMARY VERTICAL</div>
            <div className="font-display font-semibold text-[15px]" style={{ color: '#4ADE80' }}>{vertical}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function OperatorPortfolio({ slug, onBack }: { slug: string; onBack: () => void }) {
  const op = operators.find(o => o.slug === slug)!;
  const spotlight = operatorSpotlights[slug];
  const [campaignOpen, setCampaignOpen] = useState(false);

  const campaignSystem = spotlight?.campaignSlug ? systems.find(s => s.slug === spotlight.campaignSlug) : null;
  const campaignDetail = spotlight?.campaignSlug ? campaignDetails[spotlight.campaignSlug] : null;

  if (campaignOpen && campaignSystem && campaignDetail && spotlight) {
    return (
      <div className="mx-auto px-6 pb-24" style={{ maxWidth: '1200px' }}>
        <button onClick={() => setCampaignOpen(false)}
          className="font-code text-[11.5px] tracking-wide text-ash hover:text-white transition mb-10 inline-block">
          ← Back to {op.operator}
        </button>
        <CampaignDetailBody name={campaignSystem.name} detail={campaignDetail}
          ctaLabel={spotlight.campaignCtaLabel ?? 'Book a Build →'} ctaInert />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-content px-6 pb-24">
      <button onClick={onBack}
        className="font-code text-[11.5px] tracking-wide text-ash hover:text-white transition mb-10 inline-block">
        ← Back to Operators
      </button>
      <Eyebrow>AI Portfolio</Eyebrow>
      <h1 className="font-display font-medium tracking-tight mb-2" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>{op.operator}</h1>
      <div className="font-code text-[12.5px] text-ash mb-9">{op.business} · {op.city} · {op.niche}</div>

      {spotlight && (
        <div className="rounded p-8 mb-14" style={{ border: '1px solid rgba(74,222,128,.3)', background: '#0F1712' }}>
          <div className="font-code text-[10.5px] tracking-widest mb-6" style={{ color: '#4ADE80' }}>{spotlight.badge}</div>

          <LicenseBadge territory={spotlight.territory} vertical={spotlight.vertical} regNumber={spotlight.regNumber} />

          <div className="font-display font-semibold text-xl mb-6 leading-snug" style={{ maxWidth: '640px' }}>{spotlight.roleLine}</div>

          <div className="font-code text-[10.5px] tracking-widest text-ash mb-2.5">DISTRIBUTED TO</div>
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {spotlight.proof.map(item => (
              <span key={item} className="font-code text-[10.5px] tracking-wide px-3 py-1.5 rounded-full"
                style={{ border: '1px solid rgba(74,222,128,.35)', color: '#4ADE80' }}>
                {item.toUpperCase()}
              </span>
            ))}
            <span className="font-code text-[10.5px] tracking-wide text-ash italic">and many more...</span>
          </div>
          <p className="text-[15px] leading-relaxed text-ash mb-7" style={{ maxWidth: '680px' }}>{spotlight.body}</p>
          <button onClick={e => { e.preventDefault(); }}
            title="Calendly link coming soon"
            className="font-code text-[12px] font-semibold tracking-widest uppercase px-6 py-3 rounded-full transition opacity-90"
            style={{ background: '#4ADE80', color: '#000000' }}>
            {spotlight.ctaLabel}
          </button>
        </div>
      )}

      {campaignSystem && (
        <div>
          <div className="font-code text-xs uppercase tracking-[0.2em] text-signal-green mb-4">Live Campaigns</div>
          <div onClick={() => setCampaignOpen(true)}
            className="rounded p-9 flex flex-col gap-4 cursor-pointer transition"
            style={{ border: '1px solid #272727', background: '#141414' }}>
            <div className="flex justify-between items-start gap-3">
              <div className="font-display font-semibold text-2xl">{campaignSystem.name}</div>
              <div className="font-code text-[10.5px] tracking-wide text-signal-green px-2.5 py-1 rounded-full whitespace-nowrap" style={{ border: '1px solid rgba(74,222,128,.4)' }}>{campaignSystem.tier}</div>
            </div>
            <div className="text-ash text-[15px] leading-relaxed">{campaignSystem.desc}</div>
            <div className="flex gap-2 flex-wrap">
              {campaignSystem.tags.map(tag => (
                <span key={tag} className="font-code text-[11px] tracking-wide text-ash px-2.5 py-1 rounded" style={{ border: '1px solid rgba(255,255,255,.12)' }}>{tag}</span>
              ))}
            </div>
            <div className="font-code text-[11px] tracking-wide mt-1" style={{ color: '#4ADE80' }}>View campaign →</div>
          </div>
        </div>
      )}
    </div>
  );
}

export function OperatorsPage() {
  const [city, setCity] = useState('All');
  const [niche, setNiche] = useState('All');
  const [portfolioSlug, setPortfolioSlug] = useState<string | null>(null);

  if (portfolioSlug) {
    return (
      <PageShell>
        <OperatorPortfolio slug={portfolioSlug} onBack={() => setPortfolioSlug(null)} />
      </PageShell>
    );
  }

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
                <div className="flex gap-2.5 flex-wrap mt-1">
                  <button onClick={e => { e.preventDefault(); }}
                    title="Calendly link coming soon"
                    className="font-code text-[11.5px] tracking-wide px-4 py-2 rounded-full transition opacity-60 cursor-default"
                    style={{ border: '1px solid rgba(255,255,255,.15)', color: 'rgba(245,241,232,.6)' }}>
                    Book a Demo →
                  </button>
                  <button onClick={() => setPortfolioSlug(op.slug)}
                    className="font-code text-[11.5px] tracking-wide px-4 py-2 rounded-full hover:bg-white/5 transition"
                    style={{ border: '1px solid rgba(74,222,128,.4)', color: '#4ADE80' }}>
                    View AI Portfolio →
                  </button>
                </div>
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

// ─── Inquiry Form (moved here from the old Home #contact section) ─────────────

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
      <div className="p-8 mx-auto text-center" style={{ background: '#141414', maxWidth: '480px' }}>
        <div className="text-2xl mb-2" style={{ color: '#4ADE80' }}>✓</div>
        <p className="text-white font-semibold mb-1">Got it. We'll be in touch within 24 hours.</p>
        <p className="text-ash text-sm">Your inquiry is already in our pipeline.</p>
      </div>
    );
  }

  const inputStyle: React.CSSProperties = { background: '#141414', border: '1px solid #272727', color: '#F5F1E8' };
  return (
    <form onSubmit={submit} className="mx-auto space-y-3 text-left" style={{ maxWidth: '480px' }} noValidate={false}>
      <div className="grid md:grid-cols-2 gap-3">
        <input required placeholder="Name" value={form.name} onChange={set('name')} autoComplete="name"
          className="w-full px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
        <input required type="email" placeholder="Email" value={form.email} onChange={set('email')} autoComplete="email"
          className="w-full px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
      </div>
      <input placeholder="Company (optional)" value={form.company} onChange={set('company')} autoComplete="organization"
        className="w-full px-3 py-2 text-base outline-none transition-all duration-300 ease-fluid" style={inputStyle} />
      <textarea required placeholder="What do you need built?" rows={4} value={form.message} onChange={set('message')}
        className="w-full px-3 py-2 text-base outline-none resize-none transition-all duration-300 ease-fluid" style={inputStyle} />
      <input tabIndex={-1} autoComplete="off" value={form.website} onChange={set('website')}
        className="hidden" aria-hidden="true" placeholder="Website" />
      <button type="submit" disabled={status === 'sending'}
        className="w-full px-6 py-3 font-medium text-sm uppercase tracking-wide transition-all duration-300 ease-fluid hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
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

// ─── About ──────────────────────────────────────────────────────────────────

export function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto px-6 pb-28" style={{ maxWidth: '900px' }}>
        <Eyebrow>About</Eyebrow>
        <h1 className="font-display font-medium tracking-tight mb-11" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)' }}>Built by operators, for operators.</h1>
        <div className="flex flex-col gap-5 text-[17px] leading-relaxed text-ash">
          <p>Sloe Labs Inc. builds AI operating systems for ambitious businesses — because most "AI for business" is a demo, not a deployment: a deck, a trial link, and an owner left to configure the rest themselves.</p>
          <p>We build the opposite. An operating system that lands on a business's own machine and does real work — triaging inboxes, following up leads, syncing tools — before anyone leaves the room.</p>
          <p>Every build is installed in person by a Licensed SLOE AI Operator who knows the business, not a script. That's the whole model: real systems, run by real people, proven live before we call it done.</p>
          <p className="text-[15px] text-ash/70 pt-2">Founded by Isaac Kayembe & Jacob Kayembe.</p>
        </div>
      </div>

      <div className="mx-auto px-6 pb-28 text-center" style={{ maxWidth: '620px' }}>
        <Eyebrow>Contact</Eyebrow>
        <h2 className="font-display font-medium tracking-tight text-white mx-auto mb-5"
          style={{ fontSize: 'clamp(1.75rem, 5vw, 2.75rem)' }}>
          Ready to transform your operations?
        </h2>
        <p className="text-ash text-lg mx-auto leading-relaxed mb-9">
          Tell us what you need. We'll show you exactly what your business is missing — and build it.
        </p>
        <InquiryForm />
        <p className="text-ash text-sm mt-8">
          Prefer email?{' '}
          <a href="mailto:reports@sloelabs.com" className="text-paper hover:text-white transition-colors duration-300 underline">
            reports@sloelabs.com
          </a>
        </p>
      </div>
    </PageShell>
  );
}
