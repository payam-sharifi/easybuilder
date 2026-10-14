import { Check } from "lucide-react";
import { LeadForm } from "@/components/site/sections/lead-form";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionBadge } from "@/components/site/ui/section-badge";
import { LEAD_COPY } from "@/lib/content";
import type { AppLocale } from "@/i18n/routing";
import type { L } from "@/lib/i18n";

/** Server-rendered contact heading + client form, so lead copy cannot drift during hydration. */
export function LeadSection({ locale }: { locale: AppLocale }) {
  const t = (value: L) => value[locale];

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
            {LEAD_COPY.perks[locale].map((p) => (
              <li key={p} className="flex items-center gap-3 text-[15px] text-ink">
                <span className="grid size-6 place-items-center rounded-full bg-ink text-on-ink">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <LeadForm />
      </div>
    </section>
  );
}
