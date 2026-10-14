"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState, type FormEvent } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Button } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { PRIVACY_PATH } from "@/lib/content";
import { WEBSITE_CHECK } from "@/lib/home-content";
import { cn } from "@/lib/cn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const fieldCls =
  "focus-ring w-full rounded-xl border border-[var(--form-line)] bg-field px-4 text-[15px] text-ink placeholder:text-faint transition-colors focus:border-ink";

export function WebsiteCheck() {
  const { t, lang } = useLanguage();
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const errors = {
    url: url.trim() ? "" : t(WEBSITE_CHECK.errors.url),
    email: EMAIL_RE.test(email.trim()) ? "" : t(WEBSITE_CHECK.errors.email),
    consent: consent ? "" : t(WEBSITE_CHECK.errors.consent),
  };
  const valid = !errors.url && !errors.email && !errors.consent;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: "website-check",
          siteType: "website-check",
          name: "Website-Check",
          email: email.trim(),
          websiteUrl: url.trim(),
          message: `Website-Check: ${url.trim()}`,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setUrl("");
    setEmail("");
    setConsent(false);
    setTouched(false);
    setStatus("idle");
  }

  return (
    <section id="website-check" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
        <Reveal>
          <SectionBadge className="mb-[22px]">{t(WEBSITE_CHECK.badge)}</SectionBadge>
          <h2 className="m-0 text-balance text-[clamp(32px,4.2vw,58px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
            {t(WEBSITE_CHECK.title)}
          </h2>
          <p className="mb-0 mt-5 max-w-[520px] text-[17px] leading-[1.6] text-muted-2">{t(WEBSITE_CHECK.text)}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-[26px] border border-[var(--form-line)] bg-[var(--form-card)] p-6 shadow-[var(--shadow-pop)] sm:p-8">
            <AnimatePresence mode="wait" initial={false}>
              {status === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[280px] flex-col items-center justify-center gap-4 text-center"
                  role="status"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-ink text-on-ink">
                    <Check className="size-8" strokeWidth={2.6} aria-hidden />
                  </span>
                  <h3 className="m-0 text-[24px] font-medium">{t(WEBSITE_CHECK.successTitle)}</h3>
                  <p className="m-0 max-w-[320px] text-muted">{t(WEBSITE_CHECK.successText)}</p>
                  <Button variant="outline" size="form" onClick={reset} className="mt-3">
                    {t(WEBSITE_CHECK.another)}
                  </Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-5"
                >
                  <label className="flex flex-col gap-2">
                    <span className="text-[13px] font-semibold text-muted">{t(WEBSITE_CHECK.urlLabel)}</span>
                    <input
                      className={cn(fieldCls, "h-12")}
                      dir="ltr"
                      type="text"
                      inputMode="url"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      placeholder={t(WEBSITE_CHECK.urlPh)}
                      autoComplete="url"
                    />
                    {touched && errors.url ? (
                      <span className="text-[13px] text-[#ff8a7a]" role="alert">
                        {errors.url}
                      </span>
                    ) : null}
                  </label>
                  <label className="flex flex-col gap-2">
                    <span className="text-[13px] font-semibold text-muted">{t(WEBSITE_CHECK.emailLabel)}</span>
                    <input
                      className={cn(fieldCls, "h-12")}
                      dir="ltr"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t(WEBSITE_CHECK.emailPh)}
                      autoComplete="email"
                    />
                    {touched && errors.email ? (
                      <span className="text-[13px] text-[#ff8a7a]" role="alert">
                        {errors.email}
                      </span>
                    ) : null}
                  </label>
                  <label className="flex cursor-pointer items-start gap-3 text-sm text-muted">
                    <input
                      type="checkbox"
                      checked={consent}
                      onChange={(e) => setConsent(e.target.checked)}
                      className="peer sr-only"
                    />
                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-md border-[1.5px] border-[var(--form-line)] bg-field text-on-ink transition-colors peer-checked:border-ink peer-checked:bg-ink peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-ink [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100">
                      <Check className="size-3.5" strokeWidth={3} aria-hidden />
                    </span>
                    <span>
                      {t(WEBSITE_CHECK.consent)}{" "}
                      <a
                        href={`/${lang}${PRIVACY_PATH}`}
                        className="text-ink underline underline-offset-4"
                      >
                        {t(WEBSITE_CHECK.privacyLink)}
                      </a>
                    </span>
                  </label>
                  {touched && errors.consent ? (
                    <span className="text-[13px] text-[#ff8a7a]" role="alert">
                      {errors.consent}
                    </span>
                  ) : null}
                  {status === "error" ? (
                    <p className="m-0 text-sm text-[#ff8a7a]" role="alert">
                      {t(WEBSITE_CHECK.errors.server)}
                    </p>
                  ) : null}
                  <Button type="submit" arrow size="lg" disabled={status === "sending" || (touched && !valid)} className="w-full">
                    {status === "sending" ? t(WEBSITE_CHECK.sending) : t(WEBSITE_CHECK.submit)}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
