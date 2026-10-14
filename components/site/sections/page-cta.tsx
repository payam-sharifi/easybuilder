"use client";

import { useLanguage } from "@/components/site/providers/language-provider";
import { LinkButton } from "@/components/site/ui/button";
import { Reveal } from "@/components/site/ui/reveal";
import { PAGE_CTA } from "@/lib/home-content";

export function PageCta({
  title = PAGE_CTA.title,
  text = PAGE_CTA.text,
}: {
  title?: typeof PAGE_CTA.title;
  text?: typeof PAGE_CTA.text;
}) {
  const { t, href } = useLanguage();

  return (
    <section className="relative bg-bg py-[clamp(56px,8vw,100px)]">
      <div className="mx-auto max-w-[760px] px-5 text-center sm:px-8">
        <Reveal>
          <h2 className="m-0 text-balance text-[clamp(28px,3.6vw,44px)] font-medium leading-[1.1] tracking-[-0.03em] text-ink">
            {t(title)}
          </h2>
          <p className="mx-auto mb-0 mt-4 max-w-[520px] text-[16px] leading-[1.65] text-muted-2">{t(text)}</p>
          <div className="mt-8 flex justify-center">
            <LinkButton href={href("#contact")} arrow size="lg">
              {t(PAGE_CTA.cta)}
            </LinkButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
