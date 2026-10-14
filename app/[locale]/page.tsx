import { setRequestLocale } from 'next-intl/server';
import { SiteShell } from '@/components/site/page-shell';
import { ChatEdit } from '@/components/site/sections/chat-edit';
import { Faq } from '@/components/site/sections/faq';
import { GoogleMaps } from '@/components/site/sections/google-maps';
import { Hero } from '@/components/site/sections/hero';
import { HowItWorks } from '@/components/site/sections/how-it-works';
import { LeadSection } from '@/components/site/sections/lead-section';
import { Pillars } from '@/components/site/sections/pillars';
import { PrivacySecurity } from '@/components/site/sections/privacy-security';
import { Showcase } from '@/components/site/sections/showcase';
import { Solutions } from '@/components/site/sections/solutions';
import { WebsiteCheck } from '@/components/site/sections/website-check';
import { JsonLd } from '@/components/site/seo/json-ld';
import { HOME_FAQS } from '@/lib/content';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <SiteShell preloader jsonLd={<JsonLd locale={locale} faqs={HOME_FAQS} />}>
      <Hero />
      <Pillars />
      <GoogleMaps />
      <ChatEdit />
      <WebsiteCheck />
      <HowItWorks />
      <PrivacySecurity />
      <Showcase />
      <Solutions />
      <Faq items={HOME_FAQS} />
      <LeadSection locale={locale} />
    </SiteShell>
  );
}
