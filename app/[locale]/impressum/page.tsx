import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalPageLayout, LegalSection } from '@/components/landing/LegalPageLayout';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('impressum');

  return (
    <div className="min-h-screen bg-[#f6f1e8]">
      <LandingHeader />
      <LegalPageLayout title={t('title')} intro={t('intro')}>
        <LegalSection title={t('operator')}>{t('operatorValue')}</LegalSection>
        <LegalSection title={t('contact')}>{t('contactValue')}</LegalSection>
        <LegalSection title={t('register')}>{t('registerValue')}</LegalSection>
        <LegalSection title={t('vat')}>{t('vatValue')}</LegalSection>
        <LegalSection title={t('responsible')}>{t('responsibleValue')}</LegalSection>
      </LegalPageLayout>
      <LandingFooter />
    </div>
  );
}
