import { getTranslations, setRequestLocale } from 'next-intl/server';
import { LegalPageLayout, LegalSection } from '@/components/landing/LegalPageLayout';
import { Footer } from '@/components/site/sections/footer';
import { Header } from '@/components/site/sections/header';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function ImpressumPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('impressum');

  return (
    <div className="app-root">
      <div className="bg-dots" aria-hidden />
      <Header />
      <main className="flex-1">
        <LegalPageLayout title={t('title')} intro={t('intro')}>
          <LegalSection title={t('operator')}>{t('operatorValue')}</LegalSection>
          <LegalSection title={t('contact')}>{t('contactValue')}</LegalSection>
          <LegalSection title={t('register')}>{t('registerValue')}</LegalSection>
          <LegalSection title={t('vat')}>{t('vatValue')}</LegalSection>
          <LegalSection title={t('responsible')}>{t('responsibleValue')}</LegalSection>
        </LegalPageLayout>
      </main>
      <Footer />
    </div>
  );
}
