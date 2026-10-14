import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/site/page-shell';
import { Faq } from '@/components/site/sections/faq';
import { GoogleMaps } from '@/components/site/sections/google-maps';
import { GoogleSearch } from '@/components/site/sections/google-search';
import { Honesty } from '@/components/site/sections/honesty';
import { PageCta } from '@/components/site/sections/page-cta';
import { PageHero } from '@/components/site/sections/page-hero';
import { Visibility } from '@/components/site/sections/visibility';
import { JsonLd } from '@/components/site/seo/json-ld';
import { FAQ_COPY, MAPS_FAQS } from '@/lib/content';
import { GOOGLE_PAGE } from '@/lib/home-content';
import { SITE_URL } from '@/lib/constants';
import type { AppLocale } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'googleMapsPage' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: `${SITE_URL}/${locale}/google-und-maps`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `${SITE_URL}/${l}/google-und-maps`]),
      ),
    },
  };
}

export default async function GoogleMapsGuidePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SiteShell jsonLd={<JsonLd locale={locale} faqs={MAPS_FAQS} />}>
      <PageHero badge={GOOGLE_PAGE.badge} title={GOOGLE_PAGE.title} subtitle={GOOGLE_PAGE.subtitle} />
      <GoogleSearch />
      <GoogleMaps />
      <Honesty />
      <Visibility />
      <Faq items={MAPS_FAQS} sub={FAQ_COPY.pageSubtitle} />
      <PageCta />
    </SiteShell>
  );
}
