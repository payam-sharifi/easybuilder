import { hasLocale } from 'next-intl';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { routing } from '@/i18n/routing';
import { AppProviders } from '@/components/site/providers/app-providers';
import { SITE_URL } from '@/lib/constants';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    return { title: 'easyWebBuilder' };
  }

  const messages = (await import(`../../messages/${locale}.json`)).default as {
    meta: { title: string; description: string };
  };

  return {
    metadataBase: new URL(SITE_URL),
    title: messages.meta.title,
    description: messages.meta.description,
    keywords:
      locale === 'de'
        ? [
            'Website per Chat ändern',
            'Google und Google Maps',
            'bei Google Maps besser gefunden werden',
            'alte Website erneuern',
            'Webdesign',
            'easyWebBuilder',
            'Telegram Website',
          ]
        : ['easyWebBuilder', 'website builder'],
    openGraph: {
      title: messages.meta.title,
      description: messages.meta.description,
      type: 'website',
      locale: { de: 'de_DE', en: 'en_US', fa: 'fa_IR', ar: 'ar_AE' }[locale],
    },
    alternates: {
      languages: Object.fromEntries(routing.locales.map((l) => [l, `/${l}`])),
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <AppProviders locale={locale}>{children}</AppProviders>
    </NextIntlClientProvider>
  );
}
