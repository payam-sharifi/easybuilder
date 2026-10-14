"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";
import { useState, type FormEvent, type ReactNode } from "react";
import { useLanguage } from "@/components/site/providers/language-provider";
import { Button } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { TelegramIcon } from "@/components/site/ui/social-icons";
import { getTelegramUrl, getWhatsAppUrl } from "@/lib/chat-links";
import { BRAND, LEAD_COPY, SITE_TYPES } from "@/lib/content";
import { cn } from "@/lib/cn";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldCls =
  "focus-ring w-full rounded-xl border border-[var(--form-line)] bg-field px-4 text-[15px] text-ink placeholder:text-faint transition-colors focus:border-ink";

function Field({ label, children, error }: { label: string; children: ReactNode; error?: string }) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[13px] font-semibold text-muted">{label}</span>
      {children}
      {error ? <span className="text-[13px] text-[#ff8a7a]" role="alert">{error}</span> : null}
    </label>
  );
}

export function LeadForm() {
  const { t, tl } = useLanguage();
  const [siteType, setSiteType] = useState("corporate");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [consent, setConsent] = useState(false);
  const [touched, setTouched] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  const emailBad = email.trim() !== "" && !EMAIL_RE.test(email.trim());
  const errors = {
    name: name.trim() ? "" : t(LEAD_COPY.errors.name),
    contact: phone.trim() || email.trim() ? "" : t(LEAD_COPY.errors.contact),
    email: emailBad ? t(LEAD_COPY.errors.email) : "",
  };
  const valid = !errors.name && !errors.contact && !errors.email && consent;

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!valid) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ siteType, name, phone, email, message }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
    setConsent(false);
    setTouched(false);
    setStatus("idle");
  }

  return (
    <section id="contact" className="asphalt band relative py-[clamp(72px,10vw,130px)] text-ink">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[minmax(0,1fr)] gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <Reveal className="flex flex-col items-start">
          <SectionBadge className="mb-[22px]">{t(LEAD_COPY.badge)}</SectionBadge>
          <h2 className="m-0 text-balance text-[clamp(32px,4.2vw,58px)] font-medium leading-[1.05] tracking-[-0.03em] text-ink rtl:leading-[1.3]">
            {t(LEAD_COPY.title)}
          </h2>
          <p className="mb-0 mt-5 max-w-[440px] text-base leading-[1.6] text-muted-2">{t(LEAD_COPY.subtitle)}</p>
          <ul className="m-0 mt-8 flex list-none flex-col gap-3 p-0">
            {tl(LEAD_COPY.perks).map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="grid size-6 place-items-center rounded-full bg-ink text-on-ink"><Check className="size-3.5" strokeWidth={3} aria-hidden /></span>
                {p}
              </li>
            ))}
          </ul>
          <p className="mb-0 mt-8 text-[13px] font-semibold text-muted">{t(LEAD_COPY.writeUs)}</p>
          <div className="mt-3 flex flex-col items-start gap-2.5">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium text-ink no-underline hover:underline"
            >
              <MessageCircle className="size-4 text-[#25D366]" aria-hidden />
              WhatsApp
            </a>
            <a
              href={getTelegramUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center gap-2 text-[15px] font-medium text-ink no-underline hover:underline"
            >
              <TelegramIcon className="size-4 text-[#229ED9]" />
              Telegram
            </a>
            <a
              href={`mailto:${BRAND.email}`}
              className="focus-ring text-[15px] font-medium text-ink no-underline hover:underline"
              dir="ltr"
            >
              {BRAND.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative min-h-[520px] rounded-[26px] border border-[var(--form-line)] bg-[var(--form-card)] p-6 shadow-[var(--shadow-pop)] sm:p-9">
            <AnimatePresence mode="wait" initial={false}>
              {status === "done" ? (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[460px] flex-col items-center justify-center gap-4 text-center"
                  role="status"
                >
                  <span className="grid size-16 place-items-center rounded-full bg-ink text-on-ink"><Check className="size-8" strokeWidth={2.6} aria-hidden /></span>
                  <h3 className="m-0 text-[28px] font-medium">{t(LEAD_COPY.successTitle)}</h3>
                  <p className="m-0 max-w-[320px] text-muted">{t(LEAD_COPY.successText)}</p>
                  <Button variant="outline" size="form" onClick={reset} className="mt-3">{t(LEAD_COPY.another)}</Button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-6"
                >
                  <fieldset className="m-0 border-0 p-0">
                    <legend className="mb-3 p-0 text-[15px] font-semibold text-ink">{t(LEAD_COPY.question)}</legend>
                    <div className="flex flex-wrap gap-2">
                      {SITE_TYPES.map((s) => {
                        const on = siteType === s.id;
                        return (
                          <button
                            key={s.id}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setSiteType(s.id)}
                            className={cn(
                              "focus-ring cursor-pointer rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200",
                              on ? "border-ink bg-ink text-on-ink" : "border-[var(--form-line)] bg-transparent text-muted hover:border-ink hover:text-ink",
                            )}
                          >
                            {t(s.label)}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <Field label={t(LEAD_COPY.name)} error={touched ? errors.name : ""}>
                        <input className={cn(fieldCls, "h-12")} value={name} onChange={(e) => setName(e.target.value)} placeholder={t(LEAD_COPY.namePh)} autoComplete="name" />
                      </Field>
                    </div>
                    <Field label={t(LEAD_COPY.phone)} error={touched ? errors.contact : ""}>
                      <input className={cn(fieldCls, "h-12")} dir="ltr" type="tel" inputMode="tel" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder={t(LEAD_COPY.phonePh)} autoComplete="tel" />
                    </Field>
                    <Field label={t(LEAD_COPY.email)} error={touched || emailBad ? errors.email : ""}>
                      <input className={cn(fieldCls, "h-12")} dir="ltr" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t(LEAD_COPY.emailPh)} autoComplete="email" />
                    </Field>
                    <div className="sm:col-span-2">
                      <Field label={t(LEAD_COPY.message)}>
                        <textarea className={cn(fieldCls, "min-h-[104px] resize-y py-3")} value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t(LEAD_COPY.messagePh)} />
                      </Field>
                    </div>
                  </div>

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
                    <span>{t(LEAD_COPY.privacy)}</span>
                  </label>

                  {status === "error" ? <p className="m-0 text-sm text-[#ff8a7a]" role="alert">{t(LEAD_COPY.errors.server)}</p> : null}

                  <Button type="submit" arrow size="lg" disabled={status === "sending" || (touched && !valid)} className="w-full">
                    {status === "sending" ? t(LEAD_COPY.sending) : t(LEAD_COPY.submit)}
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
