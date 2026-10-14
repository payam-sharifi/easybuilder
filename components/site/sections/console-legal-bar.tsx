"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { getConsentSnapshot, parseConsent, saveConsent, subscribeConsent } from "@/lib/consent";
import { COOKIE_COPY } from "@/lib/content";

/** Impressum, privacy and cookie settings on pages outside the marketing footer. */
export function ConsoleLegalBar() {
  const raw = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => undefined);
  const consent = useMemo(() => (raw === undefined ? undefined : parseConsent(raw)), [raw]);
  const [open, setOpen] = useState(false);
  const de = (value: { de: string }) => value.de;

  return (
    <>
      <footer className="px-6 py-8 text-center text-sm text-muted">
        <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
          <a href="/de/impressum" className="underline underline-offset-4">
            Impressum
          </a>
          <a href="/de/datenschutz" className="underline underline-offset-4">
            Datenschutz
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="cursor-pointer border-0 bg-transparent p-0 text-sm text-muted underline underline-offset-4"
          >
            {de(COOKIE_COPY.footerLink)}
          </button>
        </nav>
      </footer>

      {consent === null && !open ? (
        <section className="fixed inset-x-3 bottom-3 z-[100] max-w-[460px] rounded-2xl border border-line-2 bg-white p-5 text-ink shadow-lg sm:start-5">
          <h2 className="m-0 mb-1.5 text-base font-semibold">{de(COOKIE_COPY.title)}</h2>
          <p className="m-0 text-[13.5px] leading-[1.6] text-muted">{de(COOKIE_COPY.text)}</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button type="button" className="h-10 rounded-[11px] bg-ink text-sm font-semibold text-white" onClick={() => saveConsent({ analytics: false, marketing: false })}>
              {de(COOKIE_COPY.acceptAll)}
            </button>
            <button type="button" className="h-10 rounded-[11px] bg-ink text-sm font-semibold text-white" onClick={() => saveConsent({ analytics: false, marketing: false })}>
              {de(COOKIE_COPY.essentialOnly)}
            </button>
          </div>
        </section>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[110] grid place-items-center p-4" role="dialog" aria-modal="true">
          <button type="button" aria-label={de(COOKIE_COPY.close)} className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative w-full max-w-[520px] rounded-2xl bg-white p-6 text-ink">
            <h2 className="m-0 text-lg font-semibold">{de(COOKIE_COPY.dialogTitle)}</h2>
            <p className="mt-2 text-sm leading-[1.6] text-muted">{de(COOKIE_COPY.dialogText)}</p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <button type="button" className="h-10 rounded-[11px] bg-ink text-sm font-semibold text-white" onClick={() => { saveConsent({ analytics: false, marketing: false }); setOpen(false); }}>
                {de(COOKIE_COPY.acceptAll)}
              </button>
              <button type="button" className="h-10 rounded-[11px] bg-ink text-sm font-semibold text-white" onClick={() => { saveConsent({ analytics: false, marketing: false }); setOpen(false); }}>
                {de(COOKIE_COPY.essentialOnly)}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
