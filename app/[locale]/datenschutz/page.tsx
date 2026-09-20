import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalPageLayout, LegalSection } from '@/components/landing/LegalPageLayout';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function DatenschutzPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('datenschutz');

  return (
    <div className="min-h-screen bg-[#f6f1e8]">
      <LandingHeader />
      <LegalPageLayout title={t('title')} intro={t('intro')}>
        <LegalSection title={t('controllerTitle')}>{t('controllerText')}</LegalSection>
        <LegalSection title={t('dataTitle')}>{t('dataText')}</LegalSection>
        <LegalSection title={t('legalTitle')}>{t('legalText')}</LegalSection>
        <LegalSection title={t('retentionTitle')}>{t('retentionText')}</LegalSection>
        <LegalSection title={t('rightsTitle')}>{t('rightsText')}</LegalSection>
        <LegalSection title={t('messagingTitle')}>{t('messagingText')}</LegalSection>
      </LegalPageLayout>
      <LandingFooter />
    </div>
  );
}
