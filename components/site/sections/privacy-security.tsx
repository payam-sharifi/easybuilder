"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { SectionHead } from "@/components/site/ui/section-head";
import { CONTACT_EMAIL, PRIVACY_PATH, PRIVACY_SECURITY } from "@/lib/content";

export function PrivacySecurity() {
  const { t, lang } = useLanguage();
  const cards = PRIVACY_SECURITY.cards.filter((card) => card.enabled !== false);
  const avvHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(PRIVACY_SECURITY.avvSubject)}`;

  return (
    <section id="datenschutz" className="relative bg-bg py-[clamp(72px,10vw,130px)]">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <SectionHead
          badge={PRIVACY_SECURITY.badge}
          title={PRIVACY_SECURITY.title}
          sub={PRIVACY_SECURITY.intro}
          className="max-w-[860px]"
          subClassName="max-w-[640px]"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.id} delay={(i % 3) * 0.06}>
                <article className="flex h-full flex-col rounded-[22px] border border-line-2 bg-card p-6">
                  <span className="grid size-11 place-items-center rounded-xl bg-surface-2 text-ink">
                    <Icon className="size-[22px]" aria-hidden />
                  </span>
                  <h3 className="mb-0 mt-4 text-[18px] font-medium leading-snug tracking-[-0.02em] text-ink">
                    {t(card.title)}
                  </h3>
                  <p className="mb-0 mt-2 text-[15px] leading-[1.6] text-muted">{t(card.text)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mx-auto mt-10 max-w-[760px] text-center">
          <p className="m-0 text-sm leading-[1.65] text-muted-2">
            {t(PRIVACY_SECURITY.note)} {t(PRIVACY_SECURITY.noteDetails)}{" "}
            <a
              href={`/${lang}${PRIVACY_PATH}`}
              className="focus-ring text-ink underline underline-offset-4"
            >
              {t(PRIVACY_SECURITY.policyLink)}
            </a>
            .
          </p>
          <div className="mt-6 flex justify-center">
            <LinkButton href={avvHref} variant="outline" size="md">
              {t(PRIVACY_SECURITY.avvCta)}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
