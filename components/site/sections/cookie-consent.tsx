"use client";

import { X } from "lucide-react";
import { useCallback, useEffect, useId, useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Button } from "@/components/site/ui/button";
import { cn } from "@/lib/cn";
import {
  OPEN_SETTINGS_EVENT,
  getConsentSnapshot,
  parseConsent,
  saveConsent,
  subscribeConsent,
} from "@/lib/consent";
import { COOKIE_COPY, PRIVACY_PATH } from "@/lib/content";

function Switch({
  checked,
  disabled,
  onChange,
  label,
}: {
  checked: boolean;
  disabled?: boolean;
  onChange?: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      disabled={disabled}
      onClick={() => onChange?.(!checked)}
      dir="ltr"
      className={cn(
        "focus-ring relative h-6 w-11 shrink-0 cursor-pointer rounded-full border-0 transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60",
        checked ? "bg-ink" : "bg-[var(--line-2)]",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 size-5 rounded-full bg-bg transition-[left] duration-200",
          checked ? "left-[22px]" : "left-0.5",
        )}
      />
    </button>
  );
}

/** Cookie banner + settings dialog. Shows until the visitor makes a choice. */
export function CookieConsent() {
  const { t, lang } = useLanguage();
  // `undefined` on the server / first render → nothing is shown until we know the stored choice.
  const raw = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => undefined);
  const consent = useMemo(() => (raw === undefined ? undefined : parseConsent(raw)), [raw]);

  const [open, setOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);

  const openSettings = useCallback(() => {
    const current = parseConsent(getConsentSnapshot());
    setAnalytics(current?.analytics ?? false);
    setMarketing(current?.marketing ?? false);
    setOpen(true);
  }, []);

  useEffect(() => {
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
  }, [openSettings]);

  // Dialog: close on Escape, lock page scroll, focus the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const choose = (a: boolean, m: boolean) => {
    saveConsent({ analytics: a, marketing: m });
    setOpen(false);
  };

  const categories = [
    { id: "essential", copy: COOKIE_COPY.categories.essential, checked: true, locked: true },
    { id: "analytics", copy: COOKIE_COPY.categories.analytics, checked: analytics, set: setAnalytics },
    { id: "marketing", copy: COOKIE_COPY.categories.marketing, checked: marketing, set: setMarketing },
  ] as const;

  return (
    <>
      {consent === null && !open ? (
        <section
          aria-label={t(COOKIE_COPY.title)}
          className="fixed inset-x-3 bottom-3 z-[100] max-w-[460px] rounded-2xl border border-line-2 bg-card p-5 text-ink shadow-[var(--shadow-pop)] sm:inset-x-auto sm:bottom-5 sm:start-5"
        >
          <h2 className="m-0 mb-1.5 text-base font-semibold">{t(COOKIE_COPY.title)}</h2>
          <p className="m-0 text-[13.5px] leading-[1.6] text-muted">
            {t(COOKIE_COPY.text)} {t(COOKIE_COPY.details)}{" "}
            <a href={`/${lang}${PRIVACY_PATH}`} className="focus-ring text-ink underline underline-offset-4">
              {t(COOKIE_COPY.privacy)}
            </a>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button size="sm" onClick={() => choose(true, true)}>
              {t(COOKIE_COPY.acceptAll)}
            </Button>
            <Button size="sm" variant="outline" onClick={() => choose(false, false)}>
              {t(COOKIE_COPY.essentialOnly)}
            </Button>
            <button
              type="button"
              onClick={openSettings}
              className="focus-ring cursor-pointer border-0 bg-transparent px-2 py-2 text-sm font-medium text-muted underline underline-offset-4 hover:text-ink"
            >
              {t(COOKIE_COPY.settings)}
            </button>
          </div>
        </section>
      ) : null}

      {open ? (
        <div className="fixed inset-0 z-[110] grid place-items-center p-4">
          <div
            aria-hidden
            className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"
            onClick={() => setOpen(false)}
          />
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            tabIndex={-1}
            className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-line-2 bg-card p-6 text-ink shadow-[var(--shadow-pop)] outline-none"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t(COOKIE_COPY.close)}
              className="focus-ring absolute end-4 top-4 grid size-8 cursor-pointer place-items-center rounded-full border border-line-2 bg-transparent text-ink"
            >
              <X className="size-4" aria-hidden />
            </button>
            <h2 id={titleId} className="m-0 mb-1.5 pe-10 text-lg font-semibold">
              {t(COOKIE_COPY.dialogTitle)}
            </h2>
            <p className="m-0 text-sm leading-[1.6] text-muted">
              {t(COOKIE_COPY.dialogText)} {t(COOKIE_COPY.details)}{" "}
              <a href={`/${lang}${PRIVACY_PATH}`} className="focus-ring text-ink underline underline-offset-4">
                {t(COOKIE_COPY.privacy)}
              </a>
            </p>

            <ul className="m-0 mt-5 flex list-none flex-col gap-3 p-0">
              {categories.map((c) => (
                <li
                  key={c.id}
                  className="flex items-start justify-between gap-4 rounded-xl border border-line bg-surface p-4"
                >
                  <div>
                    <p className="m-0 text-[15px] font-semibold">{t(c.copy.title)}</p>
                    <p className="m-0 mt-1 text-[13px] leading-[1.55] text-muted">{t(c.copy.text)}</p>
                  </div>
                  {"locked" in c ? (
                    <span className="mt-0.5 shrink-0 whitespace-nowrap text-xs font-medium text-muted-2">
                      {t(COOKIE_COPY.alwaysOn)}
                    </span>
                  ) : (
                    <Switch checked={c.checked} onChange={c.set} label={t(c.copy.title)} />
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => choose(analytics, marketing)}>
                {t(COOKIE_COPY.save)}
              </Button>
              <Button size="sm" variant="outline" onClick={() => choose(true, true)}>
                {t(COOKIE_COPY.acceptAll)}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
