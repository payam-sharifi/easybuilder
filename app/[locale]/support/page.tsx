import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/page-shell';
import { ChatEdit } from '@/components/site/sections/chat-edit';
import { Faq } from '@/components/site/sections/faq';
import { PageCta } from '@/components/site/sections/page-cta';
import { PageHero } from '@/components/site/sections/page-hero';
import { JsonLd } from '@/components/site/seo/json-ld';
import { FAQ_COPY, SUPPORT_FAQS } from '@/lib/content';
import { PAGE_CTA, SUPPORT_PAGE } from '@/lib/home-content';
import { SITE_URL } from '@/lib/constants';
import type { AppLocale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'supportPage' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/support`,
      languages: Object.fromEntries(routing.locales.map((l) => [l, `${SITE_URL}/${l}/support`])),
    },
  };
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SiteShell jsonLd={<JsonLd locale={locale} faqs={SUPPORT_FAQS} />}>
      <PageHero badge={SUPPORT_PAGE.badge} title={SUPPORT_PAGE.title} subtitle={SUPPORT_PAGE.subtitle} />
      <ChatEdit hideHead />
      <Faq items={SUPPORT_FAQS} sub={FAQ_COPY.pageSubtitle} />
      <PageCta title={PAGE_CTA.supportTitle} text={PAGE_CTA.supportText} />
    </SiteShell>
  );
}
