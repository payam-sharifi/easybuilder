/**
 * Cookie consent state. Stored in localStorage (first-party). Essential cookies are
 * always on and not stored here.
 *
 * Analytics / marketing scripts must only load when `readConsent()?.analytics` /
 * `.marketing` is true, and can listen to `CONSENT_CHANGE_EVENT` for later changes.
 */
export type Consent = {
  analytics: boolean;
  marketing: boolean;
  /** Timestamp (ms) of when the choice was made. */
  ts: number;
};

export const CONSENT_KEY = 'ewb-cookie-consent';
export const CONSENT_CHANGE_EVENT = 'ewb:consent-change';
export const OPEN_SETTINGS_EVENT = 'ewb:open-cookie-settings';

export function parseConsent(raw: string | null | undefined): Consent | null {
  if (!raw) return null;
  try {
    const v = JSON.parse(raw) as Partial<Consent>;
    if (typeof v.analytics === 'boolean' && typeof v.marketing === 'boolean') {
      return { analytics: v.analytics, marketing: v.marketing, ts: Number(v.ts) || 0 };
    }
  } catch {}
  return null;
}

export function readConsent(): Consent | null {
  try {
    return parseConsent(window.localStorage.getItem(CONSENT_KEY));
  } catch {
    return null;
  }
}

export function saveConsent(choice: Pick<Consent, 'analytics' | 'marketing'>) {
  const value: Consent = { ...choice, ts: Date.now() };
  try {
    window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
  } catch {}
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
}

/** Re-opens the settings dialog (e.g. from the footer). */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

/** For `useSyncExternalStore`. */
export function subscribeConsent(onChange: () => void) {
  window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
  window.addEventListener('storage', onChange);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
    window.removeEventListener('storage', onChange);
  };
}

export function getConsentSnapshot(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}
