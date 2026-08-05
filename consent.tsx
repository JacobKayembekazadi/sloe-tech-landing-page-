// consent.tsx — analytics consent gate for work.sloelabs.com
//
// WHY THIS EXISTS
// Until 2026-08-04 this site called `posthog.init(...)` inline in index.html, so a
// PostHog identifier cookie was written on every visit before the visitor was asked
// anything. Verified in a browser against the live site: a `ph_<token>_posthog`
// cookie, a matching localStorage entry, three sessionStorage keys, and a POST to
// us.i.posthog.com/e/ all happened on first paint with zero interaction. That is a
// non-essential analytics cookie set without prior consent — not lawful for EU/UK
// visitors under GDPR Art. 6 + the ePrivacy/PECR cookie rules, and the site markets
// to four continents.
//
// HOW THE GATE WORKS
// The PostHog snippet stub still lives in index.html. The stub is inert: it defines
// window.posthog as a queueing shim and performs zero network calls and zero storage
// writes. It is `posthog.init()` that injects array.js and writes the cookie — so
// init() IS the gate, and it is only ever called from this file, after consent.
//
// DO NOT re-add `posthog.init(...)` to index.html. That is the exact regression this
// file exists to prevent.

import React, { useEffect, useState } from 'react';

const POSTHOG_TOKEN = 'phc_Bt6wshHJYaKWSv4QPrz8pPuqknVTU7qoKZePJBvQ9ZCp';
const POSTHOG_HOST = 'https://us.i.posthog.com';

/** Where the visitor's choice is remembered. Strictly necessary — it exists only to
 *  honour a preference, so it is exempt from the consent requirement it records. */
export const CONSENT_KEY = 'sloe_consent_v1';

/** Fired by the "Cookie settings" links to reopen the banner so consent can be
 *  withdrawn as easily as it was given (GDPR Art. 7(3)). */
export const CONSENT_SETTINGS_EVENT = 'sloe:cookie-settings';

export type Consent = 'granted' | 'denied';

// ─── Storage ──────────────────────────────────────────────────────────────────

export function readConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed?.choice === 'granted' || parsed?.choice === 'denied' ? parsed.choice : null;
  } catch {
    // Private-mode Safari and blocked-storage browsers throw on access. No stored
    // consent means no analytics — failing closed is the correct default here.
    return null;
  }
}

function writeConsent(choice: Consent) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ choice, ts: new Date().toISOString(), v: 1 }));
  } catch {
    /* choice lives for this page session only; the gate still holds */
  }
}

// ─── PostHog ──────────────────────────────────────────────────────────────────

declare global {
  interface Window {
    posthog?: any;
  }
}

let started = false;

function startAnalytics() {
  if (started) return;
  const ph = window.posthog;
  if (!ph || typeof ph.init !== 'function') return;
  ph.init(POSTHOG_TOKEN, {
    api_host: POSTHOG_HOST,
    person_profiles: 'identified_only',
    // Keep the identifier on this host. PostHog's default writes the cookie to the
    // registrable domain — verified live as `.sloelabs.com`, which every customer's
    // `<slug>.sloelabs.com` tenant OS and the apex product site can read. A
    // consultancy-site visitor id has no business travelling into a client's tenant.
    cross_subdomain_cookie: false,
  });
  started = true;
}

/** Stop capture and remove everything PostHog left behind, on this host and on the
 *  parent domain (visits before 2026-08-04 wrote a `.sloelabs.com` cookie).
 *
 *  Returns true if PostHog was live in this page session, which means the caller
 *  must reload. Clearing storage does NOT stop the in-memory instance: PostHog's
 *  own opt-out marker is one of the keys we delete, so after the wipe
 *  `has_opted_out_capturing()` reads false again and the loaded library would keep
 *  capturing until navigation. Verified — that is not a theoretical race. Reloading
 *  is what actually removes it, because the gate below never re-inits on `denied`.
 */
function stopAnalytics(): boolean {
  const wasRunning = started;
  try {
    if (started && typeof window.posthog?.opt_out_capturing === 'function') {
      // Stops capture immediately so nothing new is queued before the reload lands.
      window.posthog.opt_out_capturing();
    }
  } catch {
    /* nothing we can do; storage is still cleared below */
  }

  const isPostHogKey = (k: string) => k.startsWith('ph_') || k.startsWith('__ph_');

  for (const store of [() => localStorage, () => sessionStorage]) {
    try {
      const s = store();
      Object.keys(s).filter(isPostHogKey).forEach(k => s.removeItem(k));
    } catch {
      /* storage unavailable */
    }
  }

  try {
    const host = location.hostname;
    const parent = '.' + host.split('.').slice(-2).join('.');
    for (const pair of document.cookie.split(';')) {
      const name = pair.split('=')[0].trim();
      if (!name || !isPostHogKey(name)) continue;
      for (const domain of ['', `; domain=${host}`, `; domain=${parent}`]) {
        document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT${domain}`;
      }
    }
  } catch {
    /* no document.cookie access */
  }

  started = false;
  return wasRunning;
}

/** Call once at startup. Resumes analytics for a visitor who already accepted, and
 *  clears any pre-consent identifier for everyone else — including the ones this
 *  site set before the gate existed. */
export function applyStoredConsent() {
  if (readConsent() === 'granted') startAnalytics();
  else stopAnalytics();
}

export function openCookieSettings() {
  window.dispatchEvent(new CustomEvent(CONSENT_SETTINGS_EVENT));
}

// ─── Banner ───────────────────────────────────────────────────────────────────

const BTN =
  'px-5 py-2.5 text-xs font-code uppercase tracking-widest transition-all duration-300 ease-fluid hover:opacity-90 active:scale-[0.98] w-full sm:w-auto';

export function CookieBanner() {
  const [open, setOpen] = useState(() => readConsent() === null);
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reopen = () => setOpen(true);
    window.addEventListener(CONSENT_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_SETTINGS_EVENT, reopen);
  }, []);

  // The banner is fixed to the bottom, so without this it sits on top of the last
  // screenful — which on the cookie policy page is the table describing it.
  useEffect(() => {
    if (!open) {
      document.body.style.paddingBottom = '';
      return;
    }
    const sync = () => {
      document.body.style.paddingBottom = `${ref.current?.offsetHeight ?? 0}px`;
    };
    sync();
    const ro = new ResizeObserver(sync);
    if (ref.current) ro.observe(ref.current);
    window.addEventListener('resize', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
      document.body.style.paddingBottom = '';
    };
  }, [open]);

  if (!open) return null;

  const choose = (choice: Consent) => {
    writeConsent(choice);
    if (choice === 'granted') {
      startAnalytics();
    } else if (stopAnalytics()) {
      // Withdrawn after accepting: the library is loaded in this page session and only
      // a reload truly unloads it. The choice is already persisted, so the reloaded
      // page reads `denied` and never inits. A first-time Decline skips this — nothing
      // was ever loaded, so there is nothing to reload away.
      location.reload();
      return;
    }
    setOpen(false);
  };

  const current = readConsent();

  return (
    <div
      ref={ref}
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 inset-x-0 z-[60]"
      style={{ background: '#181818', borderTop: '1px solid #272727' }}
    >
      <div className="mx-auto max-w-content px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
        <div className="flex-1 space-y-1.5">
          <div className="text-[10px] font-code uppercase tracking-widest" style={{ color: '#4ADE80' }}>
            Analytics
          </div>
          <p className="text-ash text-sm leading-relaxed" style={{ maxWidth: '68ch' }}>
            We'd like to use PostHog to count page views and see which pages get read. It sets one
            identifier that lasts 12 months. Nothing loads and nothing is stored unless you say yes,
            and the site works exactly the same either way.{' '}
            <a
              href="#cookies"
              className="underline text-paper hover:text-white transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              Cookie policy
            </a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 shrink-0">
          <button type="button" onClick={() => choose('denied')} className={BTN}
            style={{ background: '#272727', color: '#F5F1E8' }}>
            Decline
          </button>
          <button type="button" onClick={() => choose('granted')} className={BTN}
            style={{ background: '#4ADE80', color: '#000000' }}>
            Accept
          </button>
        </div>
      </div>
      {current !== null && (
        <div className="mx-auto max-w-content px-6 pb-4 -mt-2">
          <p className="text-ash text-xs font-code uppercase tracking-widest">
            Current choice: analytics {current === 'granted' ? 'accepted' : 'declined'}
          </p>
        </div>
      )}
    </div>
  );
}
