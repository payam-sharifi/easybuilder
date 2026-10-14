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
  /** Switches the language by navigating to the same page under another locale. */
  setLang: (lang: Lang) => void;
  /** Translate a bilingual string. */
  t: (value: L) => string;
  /** Translate a bilingual list. */
  tl: (value: LList) => string[];
  /** Builds a link to a section of the landing page that also works from sub pages. */
  homeHref: (hash?: string) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * The language is driven by the URL (`/de`, `/en`, `/fa`, `/ar`), so every language has
 * its own indexable page and the legal pages follow the same locale.
 */
export function LanguageProvider({ locale, children }: { locale: Lang; children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const lang = locale;

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
    const isHome = pathname === "/";
    return {
      lang,
      dir: dirOf(lang),
      isRtl: dirOf(lang) === "rtl",
      setLang,
      t: (v) => v[lang],
      tl: (v) => v[lang],
      homeHref: (hash = "") => (isHome ? hash || `/${lang}` : `/${lang}${hash}`),
    };
  }, [lang, pathname, setLang]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside <LanguageProvider>");
  return ctx;
}
