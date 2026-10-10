'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  useSyncExternalStore,
} from 'react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/Button';
import {
  OPEN_SETTINGS_EVENT,
  getConsentSnapshot,
  parseConsent,
  saveConsent,
  subscribeConsent,
} from '@/lib/consent';

function Switch({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: (next: boolean) => void;
  label: string;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      dir="ltr"
      className={`relative h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
        checked ? 'bg-brand' : 'bg-brand/25'
      }`}
    >
      <span
        className={`absolute top-0.5 size-5 rounded-full bg-white shadow transition-[left] ${
          checked ? 'left-[22px]' : 'left-0.5'
        }`}
      />
    </button>
  );
}

/** Cookie banner + settings dialog. Shows until the visitor makes a choice. */
export function CookieConsent() {
  const t = useTranslations('cookies');
  // `undefined` on the server / first render: nothing is shown until the stored choice is known.
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

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const choose = (a: boolean, m: boolean) => {
    saveConsent({ analytics: a, marketing: m });
    setOpen(false);
  };

  return (
    <>
      {consent === null && !open ? (
        <section
          aria-label={t('title')}
          className="fixed inset-x-3 bottom-3 z-[100] max-w-[460px] rounded-2xl border border-brand/20 bg-white p-5 text-ink shadow-xl sm:inset-x-auto sm:bottom-5 sm:left-5"
        >
          <h2 className="mb-1.5 text-base font-semibold">{t('title')}</h2>
          <p className="text-[13.5px] leading-relaxed text-muted">
            {t('text')} {t('details')}{' '}
            <Link href="/datenschutz" className="text-ink underline underline-offset-4">
              {t('privacy')}
            </Link>
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Button size="sm" onClick={() => choose(true, true)}>
              {t('acceptAll')}
            </Button>
            <Button size="sm" variant="outline" onClick={() => choose(false, false)}>
              {t('essentialOnly')}
            </Button>
            <button
              type="button"
              onClick={openSettings}
              className="cursor-pointer px-2 py-2 text-sm font-medium text-muted underline underline-offset-4 hover:text-ink"
            >
              {t('settings')}
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
            className="relative max-h-[90vh] w-full max-w-[520px] overflow-y-auto rounded-2xl border border-brand/20 bg-white p-6 text-ink shadow-xl outline-none"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t('close')}
              className="absolute right-4 top-4 grid size-8 cursor-pointer place-items-center rounded-full border border-brand/25 text-ink hover:bg-brand-soft"
            >
              <X className="size-4" aria-hidden />
            </button>
            <h2 id={titleId} className="mb-1.5 pr-10 text-lg font-semibold">
              {t('dialogTitle')}
            </h2>
            <p className="text-sm leading-relaxed text-muted">
              {t('dialogText')} {t('details')}{' '}
              <Link href="/datenschutz" className="text-ink underline underline-offset-4">
                {t('privacy')}
              </Link>
            </p>

            <ul className="mt-5 flex flex-col gap-3">
              <li className="flex items-start justify-between gap-4 rounded-xl border border-brand/15 bg-brand-soft/50 p-4">
                <div>
                  <p className="text-[15px] font-semibold">{t('essentialTitle')}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{t('essentialText')}</p>
                </div>
                <span className="mt-0.5 shrink-0 whitespace-nowrap text-xs font-medium text-muted">
                  {t('alwaysOn')}
                </span>
              </li>
              <li className="flex items-start justify-between gap-4 rounded-xl border border-brand/15 bg-brand-soft/50 p-4">
                <div>
                  <p className="text-[15px] font-semibold">{t('analyticsTitle')}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{t('analyticsText')}</p>
                </div>
                <Switch checked={analytics} onChange={setAnalytics} label={t('analyticsTitle')} />
              </li>
              <li className="flex items-start justify-between gap-4 rounded-xl border border-brand/15 bg-brand-soft/50 p-4">
                <div>
                  <p className="text-[15px] font-semibold">{t('marketingTitle')}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-muted">{t('marketingText')}</p>
                </div>
                <Switch checked={marketing} onChange={setMarketing} label={t('marketingTitle')} />
              </li>
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button size="sm" onClick={() => choose(analytics, marketing)}>
                {t('save')}
              </Button>
              <Button size="sm" variant="outline" onClick={() => choose(true, true)}>
                {t('acceptAll')}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
