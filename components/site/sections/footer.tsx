"use client";

import { ArrowUp } from "lucide-react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Logo } from "@/components/site/ui/logo";
import { SOCIAL_ICON_MAP } from "@/components/site/ui/social-icons";
import { openCookieSettings } from "@/lib/consent";
import { BRAND, COOKIE_COPY, FOOTER, SOCIALS, UI } from "@/lib/content";

export function Footer() {
  const { t, lang, homeHref } = useLanguage();
  /** `#id` → landing section, `/login` → app page, everything else → localized page. */
  const resolve = (href: string) =>
    href.startsWith("#") ? homeHref(href) : href === "/login" ? href : `/${lang}${href}`;
  return (
    <footer className="asphalt relative overflow-hidden border-t border-line bg-[var(--mgrad-b)] text-ink">
      <div className="mx-auto max-w-[1180px] px-5 pt-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_2fr]">
          <div className="flex flex-col items-start gap-5">
            <Logo />
            <p className="m-0 max-w-[320px] text-[15px] leading-[1.6] text-muted-2">{t(FOOTER.tagline)}</p>
            <a href={`mailto:${BRAND.email}`} className="text-[15px] font-medium text-ink underline decoration-line-2 underline-offset-4 hover:decoration-ink" dir="ltr">
              {BRAND.email}
            </a>
            <div className="flex gap-2.5">
              {SOCIALS.map((s) => {
                const Icon = SOCIAL_ICON_MAP[s.id];
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="focus-ring h-lift3 grid size-10 place-items-center rounded-full border border-line-2 text-ink transition-colors hover:bg-ink hover:text-on-ink"
                  >
                    <Icon className="size-[18px]" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {FOOTER.columns.map((c) => (
              <nav key={c.title.en} aria-label={c.title.en}>
                <h4 className="m-0 mb-4 text-[13px] font-semibold uppercase tracking-[0.06em] text-faint">{t(c.title)}</h4>
                <ul className="m-0 flex list-none flex-col gap-3 p-0">
                  {c.links.map((l) => (
                    <li key={l.label.en}>
                      <a href={resolve(l.href)} className="nav-link focus-ring text-[15px] text-muted">{t(l.label)}</a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6 text-sm text-faint">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p className="m-0">{t(FOOTER.copyright)}</p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="nav-link focus-ring cursor-pointer border-0 bg-transparent p-0 text-sm text-muted"
            >
              {t(COOKIE_COPY.footerLink)}
            </button>
          </div>
          <a
            href={homeHref("#top")}
            className="focus-ring flex items-center gap-2 text-muted no-underline transition-colors hover:text-ink"
          >
            {t(UI.backToTop)}
            <span className="grid size-8 place-items-center rounded-full border border-line-2"><ArrowUp className="size-4" aria-hidden /></span>
          </a>
        </div>
      </div>

      {/* Giant cropped wordmark */}
      <div aria-hidden dir="ltr" className="pointer-events-none mt-6 select-none overflow-hidden text-center">
        <div
          className="-mb-[0.2em] whitespace-nowrap font-extrabold leading-[0.82] tracking-[-0.06em]"
          style={{
            fontFamily: "var(--font-display), var(--font-inter), system-ui, sans-serif",
            fontSize: "clamp(34px, 11.4vw, 190px)",
            background: "linear-gradient(to bottom, color-mix(in srgb, var(--ink) 22%, transparent), transparent 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {BRAND.name}
        </div>
      </div>
    </footer>
  );
}
