"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown, Globe, Menu, X } from "lucide-react";
import NextLink from "next/link";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Button, LinkButton } from "@/components/site/ui/button";
import { Logo } from "@/components/site/ui/logo";
import { NAV_CTA, NAV_LINKS, UI } from "@/lib/content";
import { pad2, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/cn";

const LANGS: { id: Lang; code: string; name: string }[] = [
  { id: "de", code: "DE", name: "Deutsch" },
  { id: "en", code: "EN", name: "English" },
  { id: "fa", code: "FA", name: "فارسی" },
  { id: "ar", code: "AR", name: "العربية" },
];

function LangMenu() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t(UI.language)}
        onClick={() => setOpen((v) => !v)}
        className="focus-ring flex h-10 cursor-pointer items-center gap-1.5 rounded-[11px] border border-line-2 bg-transparent px-2.5 text-sm min-[400px]:px-3 font-semibold text-ink transition-colors hover:bg-surface"
      >
        <Globe className="size-4" aria-hidden />
        <span dir="ltr">{lang.toUpperCase()}</span>
        <ChevronDown
          className={cn("size-3.5 transition-transform max-[359px]:hidden", open && "rotate-180")}
          aria-hidden
        />
      </button>
      <AnimatePresence>
        {open ? (
          <motion.ul
            role="listbox"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="absolute end-0 top-[calc(100%+8px)] z-50 m-0 min-w-[150px] list-none rounded-2xl border border-line-2 bg-card p-1.5 shadow-[var(--shadow-pop)]"
          >
            {LANGS.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  role="option"
                  aria-selected={lang === l.id}
                  onClick={() => {
                    setLang(l.id);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full cursor-pointer items-center justify-between gap-6 rounded-[10px] border-0 bg-transparent px-3 py-2.5 text-sm text-ink transition-colors hover:bg-[var(--menu-active)]",
                    lang === l.id && "bg-[var(--menu-active)] font-semibold",
                  )}
                >
                  <span>{l.name}</span>
                  {lang === l.id ? (
                    <Check className="size-4" aria-hidden />
                  ) : (
                    <span className="text-xs text-faint" dir="ltr">
                      {l.code}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </motion.ul>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const { t, lang, setLang, href, pathname } = useLanguage();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const ids = NAV_LINKS.filter((l) => l.href.startsWith("#")).map((l) => l.id);
    const onScroll = () => {
      setStuck(window.scrollY > 8);
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35)
          current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "site-header sticky top-0 z-50 h-[68px]",
          stuck && "is-stuck",
        )}
      >
        <div className="mx-auto grid h-full max-w-[1280px] grid-cols-[1fr_auto] items-center gap-3 px-4 min-[400px]:gap-4 min-[400px]:px-5 min-[1240px]:grid-cols-[1fr_auto_1fr] sm:px-8">
          <Logo className="justify-self-start" />

          <nav
            aria-label="Main"
            className="hidden items-center gap-5 text-[15px] font-medium text-muted min-[1240px]:flex"
          >
            {NAV_LINKS.map((l) => {
              const current = l.href.startsWith("#") ? active === l.id : pathname === l.href;
              return (
              <a
                key={l.id}
                href={href(l.href)}
                aria-current={current ? "true" : undefined}
                className="nav-link focus-ring whitespace-nowrap"
              >
                {t(l.label)}
              </a>
              );
            })}
          </nav>

          <div className="col-start-2 flex items-center justify-self-end gap-2 min-[1240px]:col-start-3">
            <LangMenu />
            <NextLink
              href="/login"
              className="focus-ring hidden h-10 items-center rounded-[11px] px-3 text-sm font-semibold text-ink no-underline transition-colors hover:bg-surface sm:inline-flex"
            >
              {t(UI.login)}
            </NextLink>
            <div className="hidden sm:block">
              <LinkButton href={href("#contact")} arrow size="sm">
                {t(NAV_CTA)}
              </LinkButton>
            </div>
            <button
              type="button"
              aria-label={open ? t(UI.close) : t(UI.menu)}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="focus-ring grid size-10 cursor-pointer place-items-center rounded-[11px] border border-line-2 bg-transparent text-ink min-[1240px]:hidden"
            >
              {open ? (
                <X className="size-5" aria-hidden />
              ) : (
                <Menu className="size-5" aria-hidden />
              )}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-[68px] bottom-0 z-40 overflow-y-auto bg-bg px-5 pb-10 pt-4 min-[1240px]:hidden sm:px-8"
          >
            <nav
              aria-label="Mobile"
              className="mx-auto flex max-w-[640px] flex-col"
            >
              {NAV_LINKS.map((l, i) => (
                <motion.a
                  key={l.id}
                  href={href(l.href)}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.045 }}
                  className="flex items-baseline justify-between border-b border-line py-[18px] text-[28px] font-medium text-ink no-underline"
                >
                  {t(l.label)}
                  <span className="font-mono text-xs text-faint">
                    {pad2(i + 1, lang)}
                  </span>
                </motion.a>
              ))}
              <div className="mt-8 flex flex-col gap-3">
                <LinkButton
                  href={href("#contact")}
                  arrow
                  size="lg"
                  onClick={() => setOpen(false)}
                  className="w-full"
                >
                  {t(NAV_CTA)}
                </LinkButton>
                <NextLink
                  href="/login"
                  className="focus-ring inline-flex h-[46px] items-center justify-center rounded-[13px] border border-line-2 text-[15px] font-semibold text-ink no-underline"
                >
                  {t(UI.login)}
                </NextLink>
                <div className="grid grid-cols-3 gap-3">
                  {LANGS.map((l) => (
                    <Button
                      key={l.id}
                      variant="outline"
                      size="sm"
                      onClick={() => setLang(l.id)}
                      aria-pressed={lang === l.id}
                      className={cn(lang === l.id && "!border-ink")}
                    >
                      {l.name}
                    </Button>
                  ))}
                </div>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
