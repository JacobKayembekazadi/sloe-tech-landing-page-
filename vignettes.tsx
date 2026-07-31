import React from 'react';

// ─── Code-built work-card vignettes ───────────────────────────────────────────
// Stylized product interfaces drawn in DOM/SVG — no images. Each panel shares
// the mono header strip so the whole grid reads as one system.

function Panel({ title, status, label, children }: {
  title: string; status: string; label: string; children: React.ReactNode;
}) {
  return (
    <div className="relative w-full h-full bg-ink p-4 md:p-5 flex flex-col text-left"
      role="img" aria-label={label}>
      <div className="flex items-center justify-between gap-2 text-[10px] font-code uppercase tracking-widest text-ash pb-2.5 mb-3 flex-shrink-0"
        style={{ borderBottom: '1px solid #272727' }} aria-hidden="true">
        <span className="truncate">{title}</span>
        <span className="text-signal-green flex-shrink-0">{status}</span>
      </div>
      <div className="flex-1 min-h-0" aria-hidden="true">{children}</div>
    </div>
  );
}

const mono10 = 'text-[10px] font-code';

function Bar({ pct, dim = false }: { pct: number; dim?: boolean }) {
  return (
    <div className="h-1.5 w-full bg-surface-3">
      <div className="h-full" style={{ width: `${pct}%`, background: dim ? '#9B9B9B' : '#4ADE80' }} />
    </div>
  );
}

// 1 · ICON — Shopify revenue dashboard
function IconVignette() {
  const bars = [34, 42, 38, 55, 49, 66, 74, 92];
  return (
    <Panel title="Revenue_Intel" status="Live" label="ICON Command Center — live revenue dashboard vignette">
      <div className="flex h-full gap-4">
        <div className={`${mono10} space-y-3 w-1/3 flex-shrink-0`}>
          <div><div className="text-ash">GMV / MO</div><div className="text-paper text-sm">$2.41M</div><div className="text-signal-green">+12.4%</div></div>
          <div><div className="text-ash">AOV</div><div className="text-paper text-sm">$86.20</div></div>
          <div><div className="text-ash">RETURNING</div><div className="text-paper text-sm">41.7%</div></div>
        </div>
        <div className="flex-1 flex items-end gap-1.5 pb-1">
          {bars.map((h, i) => (
            <div key={i} className="flex-1"
              style={{ height: `${h}%`, background: i === bars.length - 1 ? '#4ADE80' : '#313131' }} />
          ))}
        </div>
      </div>
    </Panel>
  );
}

// 2 · Houston Methodist — AI readiness matrix
function MethodistVignette() {
  const rows = [
    { d: 'RADIOLOGY', v: 82 }, { d: 'ICU OPS', v: 64 },
    { d: 'PHARMACY', v: 71 }, { d: 'ADMIN', v: 45 },
  ];
  return (
    <Panel title="Readiness_Matrix" status="Scan 84%" label="Houston Methodist — AI readiness matrix vignette">
      <div className="space-y-3 pt-1">
        {rows.map(r => (
          <div key={r.d} className="flex items-center gap-3">
            <span className={`${mono10} text-ash w-20 flex-shrink-0`}>{r.d}</span>
            <div className="flex-1"><Bar pct={r.v} dim={r.v < 50} /></div>
            <span className={`${mono10} text-paper w-7 text-right`}>{r.v}</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

// 3 · LBJ — multi-agent orchestrator map
function LbjVignette() {
  return (
    <Panel title="Orchestrator" status="4 Agents" label="LBJ Orchestrator — multi-agent coordination map vignette">
      <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
        {[[40, 20], [40, 100], [260, 20], [260, 100]].map(([x, y], i) => (
          <line key={i} x1="150" y1="60" x2={x} y2={y} stroke="#272727" strokeWidth="1" />
        ))}
        <rect x="122" y="46" width="56" height="28" fill="#000" stroke="#4ADE80" strokeWidth="1" />
        <text x="150" y="64" textAnchor="middle" fill="#4ADE80" fontSize="9" fontFamily="JetBrains Mono, monospace">CORE</text>
        {[
          { x: 40, y: 20, t: 'GROWTH' }, { x: 40, y: 100, t: 'SALES' },
          { x: 260, y: 20, t: 'OPS' }, { x: 260, y: 100, t: 'CREATIVE' },
        ].map(n => (
          <g key={n.t}>
            <rect x={n.x - 28} y={n.y - 11} width="56" height="22" fill="#181818" stroke="#313131" strokeWidth="1" />
            <text x={n.x} y={n.y + 3} textAnchor="middle" fill="#9B9B9B" fontSize="8" fontFamily="JetBrains Mono, monospace">{n.t}</text>
          </g>
        ))}
      </svg>
    </Panel>
  );
}

// 4 · EARTI — field telemetry + payback crossover
function EartiVignette() {
  return (
    <Panel title="Field_Telemetry" status="14mo Payback" label="EARTI — agricultural telemetry and payback chart vignette">
      <div className="flex h-full gap-4">
        <div className={`${mono10} space-y-2.5 w-1/3 flex-shrink-0`}>
          <div><span className="text-ash">SOIL </span><span className="text-paper">34%</span></div>
          <div><span className="text-ash">TEMP </span><span className="text-paper">21.4°C</span></div>
          <div><span className="text-ash">PUMP </span><span className="text-signal-green">OK</span></div>
          <div><span className="text-ash">YIELD </span><span className="text-paper">+9.2%</span></div>
        </div>
        <svg viewBox="0 0 200 100" className="flex-1 h-full" preserveAspectRatio="none">
          <line x1="120" y1="0" x2="120" y2="100" stroke="#272727" strokeDasharray="4 3" />
          <path d="M 0,20 L 200,60" fill="none" stroke="#9B9B9B" strokeWidth="2" strokeDasharray="5 4" />
          <path d="M 0,90 L 200,25" fill="none" stroke="#4ADE80" strokeWidth="2.5" />
          <circle cx="120" cy="51" r="3.5" fill="#4ADE80" />
        </svg>
      </div>
    </Panel>
  );
}

// 5 · PTX — corporate site in browser chrome
function PtxVignette() {
  return (
    <Panel title="ptxmetals.com" status="TSXV: PTX" label="PTX Metals — corporate website vignette">
      <div className="h-full flex flex-col" style={{ border: '1px solid #272727' }}>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 flex-shrink-0" style={{ borderBottom: '1px solid #272727' }}>
          {[0, 1, 2].map(i => <span key={i} className="w-1.5 h-1.5 rounded-full bg-surface-4" />)}
        </div>
        <div className="flex-1 flex items-center px-3 min-h-0">
          <div className="font-display font-medium text-paper leading-tight" style={{ fontSize: 'clamp(0.9rem, 2vw, 1.4rem)' }}>
            CRITICAL<br />MINERALS
          </div>
        </div>
        <div className={`${mono10} grid grid-cols-3 flex-shrink-0`} style={{ borderTop: '1px solid #272727' }}>
          {[['PTX', '+7.7%'], ['CU', '+1.2%'], ['NI', '−0.4%']].map(([s, v]) => (
            <div key={s} className="px-2 py-1.5 flex justify-between" style={{ borderRight: '1px solid #272727' }}>
              <span className="text-ash">{s}</span>
              <span className={v.startsWith('+') ? 'text-signal-green' : 'text-ash'}>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </Panel>
  );
}

// 6 · MC — enterprise module stack
function McVignette() {
  const mods = [
    { t: 'INTELLIGENCE', s: 'ACTIVE' }, { t: 'AUTOMATION', s: 'ACTIVE' },
    { t: 'DECISION SUPPORT', s: 'SYNCED' },
  ];
  return (
    <Panel title="Ops_Modules" status="Synced" label="MC Intelligence Platform — enterprise module stack vignette">
      <div className="space-y-2 pt-1">
        {mods.map((m, i) => (
          <div key={m.t} className="flex items-center justify-between bg-surface px-3 py-2.5"
            style={{ border: '1px solid #272727', marginLeft: `${i * 12}px` }}>
            <span className={`${mono10} text-paper`}>{m.t}</span>
            <span className={`${mono10} text-signal-green`}>[{m.s}]</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

// 7 · RZ Cantera — pitch + LEON voice line
function CanteraVignette() {
  return (
    <Panel title="Cantera_OS" status="LEON Online" label="RZ Cantera — academy pitch view with voice assistant vignette">
      <div className="flex h-full gap-4">
        <svg viewBox="0 0 140 90" className="w-1/2 h-full flex-shrink-0" preserveAspectRatio="xMidYMid meet">
          <rect x="2" y="2" width="136" height="86" fill="none" stroke="#272727" strokeWidth="1.5" />
          <line x1="70" y1="2" x2="70" y2="88" stroke="#272727" strokeWidth="1" />
          <circle cx="70" cy="45" r="12" fill="none" stroke="#272727" strokeWidth="1" />
          <rect x="2" y="27" width="18" height="36" fill="none" stroke="#272727" strokeWidth="1" />
          <rect x="120" y="27" width="18" height="36" fill="none" stroke="#272727" strokeWidth="1" />
          {[[38, 30], [52, 60], [88, 26], [96, 64], [112, 45]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={i === 4 ? '#4ADE80' : '#9B9B9B'} />
          ))}
        </svg>
        <div className={`${mono10} flex-1 space-y-2 pt-1 min-w-0`}>
          <div className="text-ash">&gt; "¿Cómo está Marcos?"</div>
          <div className="text-paper leading-relaxed">LEON: fitness 92% · 3 sessions this week · ready for Sunday</div>
          <div className="text-signal-green">■ voice reply — 1.2s</div>
        </div>
      </div>
    </Panel>
  );
}

// 8 · ScoutBase — computer-vision frame
function ScoutbaseVignette() {
  return (
    <Panel title="CV_Pipeline" status="YOLO v11" label="ScoutBase — computer vision player detection vignette">
      <div className="relative h-full bg-surface overflow-hidden" style={{ border: '1px solid #272727' }}>
        {[
          { l: '12%', t: '18%', w: '20%', h: '58%', tag: 'PLAYER .97', hot: true },
          { l: '48%', t: '30%', w: '17%', h: '50%', tag: 'PLAYER .94', hot: false },
          { l: '76%', t: '62%', w: '9%', h: '16%', tag: 'BALL .88', hot: false },
        ].map(b => (
          <div key={b.tag} className="absolute" style={{
            left: b.l, top: b.t, width: b.w, height: b.h,
            border: `1px solid ${b.hot ? '#4ADE80' : '#9B9B9B'}`,
          }}>
            <span className="absolute -top-4 left-0 text-[9px] font-code whitespace-nowrap"
              style={{ color: b.hot ? '#4ADE80' : '#9B9B9B' }}>{b.tag}</span>
          </div>
        ))}
        <div className="absolute bottom-1.5 right-2 text-[9px] font-code text-ash">FRAME 04:12:36</div>
      </div>
    </Panel>
  );
}

// 9 · Sportnaa — bilingual agency roster
function SportnaaVignette() {
  const rows = [
    { en: 'K. AL-DOSSARI', ar: 'عقد نشط', s: 'ACTIVE' },
    { en: 'M. HASSAN', ar: 'تجديد', s: 'RENEWAL' },
    { en: 'Y. KHALIL', ar: 'معار', s: 'ON LOAN' },
  ];
  return (
    <Panel title="Agency_OS" status="AR ⇄ EN" label="Sportnaa — bilingual athlete roster vignette">
      <div className="pt-1">
        {rows.map(r => (
          <div key={r.en} className="flex items-center justify-between py-2.5 gap-2"
            style={{ borderBottom: '1px solid #1F1F1F' }}>
            <span className={`${mono10} text-paper truncate`}>{r.en}</span>
            <span className={`${mono10} text-ash flex-shrink-0`} dir="rtl">{r.ar}</span>
            <span className={`${mono10} text-signal-green flex-shrink-0 w-16 text-right`}>[{r.s}]</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}

const vignettes: Record<string, () => React.JSX.Element> = {
  'icon-command-center': IconVignette,
  'houston-methodist': MethodistVignette,
  'lbj-orchestrator': LbjVignette,
  'earti-intelligence': EartiVignette,
  'ptx-metals': PtxVignette,
  'mc-intelligence': McVignette,
  'rz-cantera': CanteraVignette,
  'scoutbase-africa': ScoutbaseVignette,
  'sportnaa': SportnaaVignette,
};

export function WorkVignette({ slug }: { slug: string }) {
  const V = vignettes[slug];
  return V ? <V /> : <div className="w-full h-full bg-ink" />;
}
