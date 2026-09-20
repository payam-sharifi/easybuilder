import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Coffee, Hammer, Stethoscope, Store } from 'lucide-react';
import { ChatCta } from '@/components/landing/ChatCta';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { getTelegramUrl, getWhatsAppUrl } from '@/lib/chat-links';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const whatsappUrl = getWhatsAppUrl(t('hero.whatsappPrefill'));
  const telegramUrl = getTelegramUrl();

  const steps = [
    { title: t('how.step1Title'), text: t('how.step1Text') },
    { title: t('how.step2Title'), text: t('how.step2Text') },
    { title: t('how.step3Title'), text: t('how.step3Text') },
  ];

  const audiences = [
    {
      icon: Coffee,
      title: t('audience.bakeries'),
      text: t('audience.bakeriesText'),
    },
    {
      icon: Hammer,
      title: t('audience.trades'),
      text: t('audience.tradesText'),
    },
    {
      icon: Stethoscope,
      title: t('audience.practices'),
      text: t('audience.practicesText'),
    },
    {
      icon: Store,
      title: t('audience.shops'),
      text: t('audience.shopsText'),
    },
  ];

  return (
    <div className="min-h-screen bg-[#f6f1e8] text-stone-900">
      <LandingHeader />

      <section className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-emerald-900/10 px-3 py-1 text-sm font-medium text-emerald-900">
              {t('hero.badge')}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {t('hero.title')}
              <span className="mt-1 block text-emerald-800">{t('hero.titleAccent')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-600">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8">
              <ChatCta
                whatsappUrl={whatsappUrl}
                telegramUrl={telegramUrl}
                whatsappLabel={t('hero.whatsapp')}
                telegramLabel={t('hero.telegram')}
              />
            </div>
            <p className="mt-4 text-sm text-stone-500">{t('hero.noAccount')}</p>
          </div>

          <div className="rounded-3xl bg-emerald-950 p-6 text-left shadow-xl shadow-emerald-950/20">
            <div className="rounded-2xl bg-white p-5 text-stone-900">
              <p className="text-xs font-medium uppercase tracking-wide text-stone-400">
                {t('mock.label')}
              </p>
              <div className="mt-4 space-y-3">
                <div className="ml-8 rounded-2xl rounded-tr-sm bg-stone-100 px-4 py-3 text-sm leading-relaxed">
                  {t('mock.user')}
                </div>
                <div className="mr-8 rounded-2xl rounded-tl-sm bg-emerald-800 px-4 py-3 text-sm leading-relaxed text-white">
                  {t('mock.agent')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how" className="border-y border-stone-200 bg-white px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('how.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            {t('how.subtitle')}
          </p>
          <ol className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-2xl border border-stone-200 p-6">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="audience" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('audience.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-stone-600">
            {t('audience.subtitle')}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audiences.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
              >
                <Icon className="h-8 w-8 text-emerald-800" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-950 px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-emerald-100">{t('cta.subtitle')}</p>
          <div className="mt-8">
            <ChatCta
              whatsappUrl={whatsappUrl}
              telegramUrl={telegramUrl}
              whatsappLabel={t('cta.whatsapp')}
              telegramLabel={t('cta.telegram')}
            />
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
