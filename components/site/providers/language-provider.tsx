"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import {
  LANG_STORAGE_KEY,
  dirOf,
  type L,
  type LList,
  type Lang,
} from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  dir: "rtl" | "ltr";
  isRtl: boolean;
  pathname: string;
  /** Switches the language by navigating to the same page under another locale. */
  setLang: (lang: Lang) => void;
  /** Translate a bilingual string. */
  t: (value: L) => string;
  /** Translate a bilingual list. */
  tl: (value: LList) => string[];
  /** Locale-aware href for hashes, in-site paths, login, mailto and external URLs. */
  href: (path: string) => string;
  /** Builds a link to a section of the landing page that also works from sub pages. */
  homeHref: (hash?: string) => string;
};

/** `#contact` stays on the home page; `/support` gets the locale prefix. */
export function localizedHref(lang: Lang, pathname: string, path: string): string {
  if (!path) return `/${lang}`;
  if (/^(https?:|mailto:|tel:)/i.test(path)) return path;
  if (path === "/login" || path.startsWith("/login")) return path;
  if (path.startsWith("#")) {
    return pathname === "/" ? path : `/${lang}${path}`;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalized}`;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The language is driven by the URL (`/de`, `/en`, `/fa`, `/ar`), so every language has
 * its own indexable page and the legal pages follow the same locale.
 */
export function LanguageProvider({ locale, children }: { locale: Lang; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = locale;
  // #region agent log
  fetch('http://127.0.0.1:7314/ingest/9647e52d-f2ae-4a06-86c3-5785d17c264c',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'bbf498'},body:JSON.stringify({sessionId:'bbf498',runId:'pre-fix',hypothesisId:'H4',location:'language-provider.tsx:LanguageProvider',message:'LanguageProvider lang snapshot',data:{locale,lang,pathname,isServer:typeof window==='undefined'},timestamp:Date.now()})}).catch(()=>{});
  // #endregion

  // Keep <html lang dir> in sync so fonts, RTL and a11y follow the language.
  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dirOf(lang);
    try {
      window.localStorage.setItem(LANG_STORAGE_KEY, lang);
    } catch {}
  }, [lang]);

  const setLang = useCallback(
    (next: Lang) => {
      if (next === lang) return;
      const hash = typeof window !== "undefined" ? window.location.hash : "";
      router.replace(`${pathname}${hash}`, { locale: next, scroll: false });
    },
    [lang, pathname, router],
  );

  const value = useMemo<LanguageContextValue>(() => {
    const href = (path: string) => localizedHref(lang, pathname, path);
    return {
      lang,
      dir: dirOf(lang),
      isRtl: dirOf(lang) === "rtl",
      pathname,
      setLang,
      t: (v) => v[lang],
      tl: (v) => v[lang],
      href,
      homeHref: (hash = "") => href(hash || "#top"),
    };
  }, [lang, pathname, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
