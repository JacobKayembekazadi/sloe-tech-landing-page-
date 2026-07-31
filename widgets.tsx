import React, { useEffect, useMemo, useRef, useState } from 'react';

// ─── Section Eyebrow (brand • section rhythm cue) ─────────────────────────────

export function Eyebrow({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-ink text-xs font-code uppercase tracking-widest text-ash"
      style={{ border: '1px solid #272727' }}>
      <span className="w-1.5 h-1.5 rounded-full bg-signal-green animate-pulse" aria-hidden="true" />
      {label}
    </div>
  );
}

// ─── Ops Engine (interactive proof: what agents take off your plate) ──────────

const engineTabs = [
  { id: 'agents', label: 'Agent ops', rate: 0.7, note: 'Research, outreach, reporting, pipeline ops run autonomously.' },
  { id: 'platform', label: 'Business platform', rate: 0.5, note: 'Invoicing, HR, and client admin consolidated into one system.' },
  { id: 'dashboards', label: 'Dashboards', rate: 0.35, note: 'Reporting hours collapse when the numbers assemble themselves.' },
  { id: 'automation', label: 'Automation', rate: 0.6, note: 'Hand-offs between your tools happen without a human in the loop.' },
] as const;

type EngineTabId = (typeof engineTabs)[number]['id'];

export function OpsEngine() {
  const [tab, setTab] = useState<EngineTabId>('agents');
  const [team, setTeam] = useState(8);
  const [hours, setHours] = useState(6);
  const [cost, setCost] = useState(45);

  const active = engineTabs.find(t => t.id === tab)!;

  const model = useMemo(() => {
    const monthly = team * hours * 4.33 * cost;
    const points: { m: number; quo: number; sloe: number }[] = [];
    for (let m = 0; m <= 12; m++) {
      points.push({ m, quo: monthly * m, sloe: monthly * (1 - active.rate) * m });
    }
    const saved = Math.round(monthly * active.rate * 12);
    const hoursBack = Math.round(team * hours * active.rate);
    return { points, saved, hoursBack };
  }, [team, hours, cost, active]);

  const paths = useMemo(() => {
    const { points } = model;
    const W = 600, H = 220, P = 24;
    const max = Math.max(...points.map(p => p.quo)) * 1.05 || 1;
    const x = (i: number) => P + (i / (points.length - 1)) * (W - P * 2);
    const y = (v: number) => H - P - (v / max) * (H - P * 2);
    return {
      quo: `M ${points.map((p, i) => `${x(i)},${y(p.quo)}`).join(' L ')}`,
      sloe: `M ${points.map((p, i) => `${x(i)},${y(p.sloe)}`).join(' L ')}`,
    };
  }, [model]);

  const money = (n: number) => `$${n.toLocaleString('en-US')}`;

  return (
    <div className="overflow-hidden bg-surface p-6 md:p-10 text-left"
      style={{ border: '1px solid #272727' }}>
      {/* Header + tabs */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6"
        style={{ borderBottom: '1px solid #272727' }}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-signal-green animate-pulse" />
            <span className="text-xs font-code font-medium uppercase tracking-widest text-ash">Sloe ops engine</span>
          </div>
          <h3 className="font-display text-2xl md:text-3xl font-medium text-white">
            See what an agent takes off your plate
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 p-1.5 bg-ink" style={{ border: '1px solid #272727' }}>
          {engineTabs.map(t => (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={`px-3.5 py-1.5 text-xs font-semibold transition-all duration-300 ease-fluid ${
                tab === t.id ? 'bg-signal-green text-ink' : 'text-ash hover:text-white hover:bg-white/5'
              }`}>
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-6">
        {/* Controls */}
        <div className="space-y-5 bg-ink p-5" style={{ border: '1px solid #272727' }}>
          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-semibold">
              <span className="text-ash">People on ops</span>
              <span className="font-code text-sm text-paper">{team}</span>
            </div>
            <input type="range" min={1} max={50} step={1} value={team}
              onChange={e => setTeam(Number(e.target.value))}
              aria-label="People on ops"
              className="w-full accent-signal-green cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-semibold">
              <span className="text-ash">Manual hours / person / week</span>
              <span className="font-code text-sm text-paper">{hours}h</span>
            </div>
            <input type="range" min={1} max={20} step={1} value={hours}
              onChange={e => setHours(Number(e.target.value))}
              aria-label="Manual hours per person per week"
              className="w-full accent-signal-green cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1 text-xs font-semibold">
              <span className="text-ash">Loaded hourly cost</span>
              <span className="font-code text-sm text-paper">{money(cost)}/h</span>
            </div>
            <input type="range" min={15} max={150} step={5} value={cost}
              onChange={e => setCost(Number(e.target.value))}
              aria-label="Loaded hourly cost"
              className="w-full accent-signal-green cursor-pointer" />
          </div>

          <p className="text-xs text-ash leading-relaxed pt-1">{active.note}</p>
        </div>

        {/* Chart */}
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <div>
              <span className="text-xs text-ash font-code font-medium uppercase tracking-widest">Recovered in year one</span>
              <div className="text-2xl md:text-3xl font-display font-bold text-signal-green flex items-center gap-2"
                style={{ fontVariantNumeric: 'tabular-nums' }}>
                +{money(model.saved)}
                <span className="text-xs font-body font-medium px-2 py-0.5"
                  style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}>
                  {model.hoursBack}h / week back
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <div className="flex items-center gap-1.5 text-paper">
                <span className="w-3 h-3 rounded-full bg-signal-green" />
                <span>With SLOE</span>
              </div>
              <div className="flex items-center gap-1.5 text-ash">
                <span className="w-3 h-3 rounded-full bg-surface-4" />
                <span>Status quo</span>
              </div>
            </div>
          </div>

          <div className="relative w-full h-[200px] bg-ink p-2 overflow-hidden"
            style={{ border: '1px solid #272727' }}>
            <svg viewBox="0 0 600 220" className="w-full h-full" role="img"
              aria-label="Cumulative cost of manual operations versus with SLOE agents over twelve months">
              <line x1="24" y1="55" x2="576" y2="55" stroke="#272727" strokeDasharray="4 4" />
              <line x1="24" y1="110" x2="576" y2="110" stroke="#272727" strokeDasharray="4 4" />
              <line x1="24" y1="165" x2="576" y2="165" stroke="#272727" strokeDasharray="4 4" />
              <path d={paths.quo} fill="none" stroke="#9B9B9B" strokeWidth="3" strokeDasharray="6 4" />
              <path d={paths.sloe} fill="none" stroke="#4ADE80" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex justify-between items-center text-xs text-ash mt-2 px-2 font-code">
            <span>Month 0</span>
            <span>Month 6</span>
            <span>Month 12 — cumulative cost of manual ops</span>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-ash"
        style={{ borderTop: '1px solid #272727' }}>
        <div className="flex items-center gap-1.5">
          <span className="text-signal-green">✓</span>
          <span>First agent live in 24 hours</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-signal-green">✓</span>
          <span>Illustrative model — bring your real numbers to a call</span>
        </div>
        <a href="#contact" className="font-semibold text-paper underline hover:text-white transition-colors duration-300 ml-auto">
          Run it on your business →
        </a>
      </div>
    </div>
  );
}

// ─── Substrate Explorer (the foundation layer, browsable) ─────────────────────

const substrateDomains = [
  { id: 'crm', label: 'CRM', backend: 'HubSpot', abilities: ['contact.create', 'contact.update', 'lead.create', 'lead.update_status'] },
  { id: 'comms', label: 'Comms', backend: 'Resend + Telegram', abilities: ['message.send', 'message.send_markdown'] },
  { id: 'docs', label: 'Documents', backend: 'Markdown → PDF', abilities: ['document.generate', 'document.summarize'] },
  { id: 'money', label: 'Payments', backend: 'Stripe', abilities: ['payment.initiate'] },
  { id: 'files', label: 'Files', backend: 'Cloudflare R2', abilities: ['file.store'] },
  { id: 'flow', label: 'Orchestration', backend: 'Inngest + internal', abilities: ['workflow.trigger', 'event.emit', 'plan.create', 'plan.execute', 'plan.verify', 'plan.learn'] },
  { id: 'memory', label: 'Memory', backend: 'Qdrant, scoped per key', abilities: ['/memory/*'] },
] as const;

export function SubstrateExplorer() {
  const [domainId, setDomainId] = useState<string>('crm');
  const [ability, setAbility] = useState<string>('contact.create');

  const domain = substrateDomains.find(d => d.id === domainId)!;

  const pick = (id: string) => {
    const d = substrateDomains.find(x => x.id === id)!;
    setDomainId(id);
    setAbility(d.abilities[0]);
  };

  return (
    <div className="bg-surface p-6 md:p-8" style={{ border: '1px solid #272727' }}>
      <div className="flex items-center justify-between gap-3 pb-5" style={{ borderBottom: '1px solid #272727' }}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-signal-green" />
          <h3 className="font-display font-medium text-white text-lg">Substrate explorer</h3>
        </div>
        <span className="text-xs px-2 py-0.5 font-code uppercase tracking-wider font-medium"
          style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}>
          18 live abilities
        </span>
      </div>

      <div className="flex flex-wrap gap-2 py-5">
        {substrateDomains.map(d => (
          <button key={d.id} onClick={() => pick(d.id)}
            className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ease-fluid active:scale-[0.98] ${
              domainId === d.id ? 'bg-signal-green text-ink' : 'bg-ink text-ash hover:text-white'
            }`}
            style={domainId === d.id ? undefined : { border: '1px solid #272727' }}>
            {d.label}
          </button>
        ))}
      </div>

      <div className="bg-ink p-5" style={{ border: '1px solid #272727' }}>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-code font-medium uppercase tracking-widest text-ash">{domain.label}</span>
          <span className="text-xs text-ash">runs on <span className="text-paper font-medium">{domain.backend}</span></span>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {domain.abilities.map(a => (
            <button key={a} onClick={() => setAbility(a)}
              className={`font-code text-xs px-2.5 py-1 transition-all duration-300 ease-fluid ${
                ability === a ? 'text-ink bg-signal-green' : 'text-signal-green bg-surface hover:bg-surface-2'
              }`}>
              {a}
            </button>
          ))}
        </div>
        <pre className="font-code text-xs leading-6 text-ash overflow-x-auto m-0">
{`POST /abilities/execute
{ "ability": "${ability}",
  "input": { … } }`}
        </pre>
      </div>

      <p className="text-xs text-ash mt-4 leading-relaxed">
        Self-describing: <span className="font-code text-paper">GET /.well-known/agent-manifest</span> returns
        every schema live from the code. Agents call abilities as native MCP tools; services call plain HTTP.
      </p>
    </div>
  );
}

// ─── Agent Console (interactive proof: watch an agent run a task) ─────────────

const consoleTasks = [
  {
    id: 'research',
    label: 'Research a prospect',
    lines: [
      '▸ received: "research Meridian Logistics"',
      '▸ scanning company site, LinkedIn, filings, news — 14 sources',
      '▸ found: 3 decision makers, current tech stack, growth signal (2 new depots this year)',
      '▸ drafting one-page brief with the outreach angle',
      '✓ Brief delivered to Telegram — 47s',
    ],
  },
  {
    id: 'outreach',
    label: 'Draft outreach',
    lines: [
      '▸ received: "draft outreach for the shortlist"',
      '▸ pulling 12 qualified leads from the CRM',
      '▸ writing 12 personalized first-touch emails — no templates',
      '▸ queued for your approval — nothing sends without you',
      '✓ 12 drafts in the approval queue — 1m 12s',
    ],
  },
  {
    id: 'report',
    label: 'Compile weekly report',
    lines: [
      '▸ received: "compile the weekly ops report"',
      '▸ querying invoices, pipeline, and delivery status across 4 systems',
      '▸ summarizing: 3 blockers, 2 wins, current cash position',
      '▸ rendering the branded PDF',
      '✓ Report in your inbox — 38s',
    ],
  },
  {
    id: 'invoices',
    label: 'Chase overdue invoices',
    lines: [
      '▸ received: "chase overdue invoices"',
      '▸ found 6 overdue — $8,430 outstanding',
      '▸ drafting reminders with payment links, escalation copy for 30d+',
      '▸ queued for your approval',
      '✓ 6 reminders ready — 29s',
    ],
  },
] as const;

export function AgentConsole() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [shown, setShown] = useState(0);
  const timer = useRef<number | null>(null);

  const task = consoleTasks.find(t => t.id === taskId) ?? null;

  useEffect(() => {
    if (!task) return;
    setShown(0);
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setShown(n => {
        if (n >= task.lines.length) {
          if (timer.current) window.clearInterval(timer.current);
          return n;
        }
        return n + 1;
      });
    }, 550);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [task]);

  const running = task !== null && shown < task.lines.length;

  return (
    <div className="bg-surface p-6 md:p-8" style={{ border: '1px solid #272727' }}>
      <div className="flex items-center justify-between gap-3 pb-5" style={{ borderBottom: '1px solid #272727' }}>
        <div className="flex items-center gap-2">
          <span className={`w-2.5 h-2.5 rounded-full bg-signal-green ${running ? 'animate-pulse' : ''}`} />
          <h3 className="font-display font-medium text-white text-lg">Agent console</h3>
        </div>
        <span className="text-xs px-2 py-0.5 font-code uppercase tracking-wider font-medium"
          style={{ background: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}>
          Live in 24h
        </span>
      </div>

      <div className="flex flex-wrap gap-2 py-5">
        {consoleTasks.map(t => (
          <button key={t.id} onClick={() => setTaskId(t.id)}
            className={`px-3 py-1.5 text-xs font-semibold transition-all duration-300 ease-fluid active:scale-[0.98] ${
              taskId === t.id ? 'bg-signal-green text-ink' : 'bg-ink text-ash hover:text-white'
            }`}
            style={taskId === t.id ? undefined : { border: '1px solid #272727' }}>
            {t.label}
          </button>
        ))}
      </div>

      <div className="bg-ink p-5 font-code text-sm leading-7 min-h-[210px]"
        style={{ border: '1px solid #272727' }} aria-live="polite">
        {!task && (
          <p className="text-ash">▸ Pick a task to watch the agent run it.</p>
        )}
        {task && task.lines.slice(0, shown).map((line, i) => (
          <p key={`${task.id}-${i}`}
            className={line.startsWith('✓') ? 'text-signal-green' : 'text-paper'}
            style={{ opacity: 0, animation: 'consoleLine 0.4s cubic-bezier(0.32,0.72,0,1) forwards' }}>
            {line}
          </p>
        ))}
        {running && <span className="inline-block w-2 h-4 bg-signal-green align-middle console-cursor" />}
      </div>

      <p className="text-xs text-ash mt-4 leading-relaxed">
        Scripted replay of real agent runs. Yours connects to your actual tools — CRM, email, invoicing, Telegram.
      </p>
    </div>
  );
}
