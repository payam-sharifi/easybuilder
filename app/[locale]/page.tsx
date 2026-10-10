import { getTranslations, setRequestLocale } from 'next-intl/server';
import {
  ArrowRight,
  Briefcase,
  Building2,
  Check,
  Link2,
  MessageCircle,
  Sparkles,
  UserPlus,
  UtensilsCrossed,
  Wand2,
} from 'lucide-react';
import { ChatCta } from '@/components/landing/ChatCta';
import { LandingFooter } from '@/components/landing/LandingFooter';
import { LandingHeader } from '@/components/landing/LandingHeader';
import { BrandLogo } from '@/components/BrandLogo';
import { ChatDemo, type ChatDemoMessage } from '@/components/landing/ChatDemo';
import {
  getAppVentureUrl,
  getSignupUrl,
  getTelegramUrl,
  getWhatsAppUrl,
} from '@/lib/chat-links';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

function SignupButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-dark"
    >
      {children}
      <ArrowRight className="h-4 w-4 rtl:-scale-x-100" aria-hidden />
    </a>
  );
}

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const whatsappUrl = getWhatsAppUrl(t('hero.whatsappPrefill'));
  const telegramUrl = getTelegramUrl();
  const signupUrl = getSignupUrl();
  const appVentureUrl = getAppVentureUrl();

  const chatMessages: ChatDemoMessage[] = [
    { from: 'user', text: t('mock.user') },
    { from: 'agent', text: t('mock.agent') },
    { from: 'user', text: t('mock.user2') },
    { from: 'agent', text: t('mock.agent2') },
  ];

  const steps = [
    { icon: UserPlus, title: t('how.step1Title'), text: t('how.step1Text') },
    { icon: Wand2, title: t('how.step2Title'), text: t('how.step2Text'), highlight: true },
    { icon: Link2, title: t('how.step3Title'), text: t('how.step3Text') },
    { icon: MessageCircle, title: t('how.step4Title'), text: t('how.step4Text') },
  ];

  const audiences = [
    { icon: Sparkles, title: t('audience.beauty'), text: t('audience.beautyText') },
    { icon: UtensilsCrossed, title: t('audience.food'), text: t('audience.foodText') },
    { icon: Briefcase, title: t('audience.services'), text: t('audience.servicesText') },
    { icon: Building2, title: t('audience.building'), text: t('audience.buildingText') },
  ];

  const features = [1, 2, 3, 4, 5].map((n) => t(`pricing.feature${n}`));

  return (
    <div className="min-h-screen text-ink">
      <LandingHeader />

      <section className="px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-4 inline-flex rounded-full bg-brand/10 px-3 py-1 text-sm font-medium text-brand-dark">
              {t('hero.badge')}
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.4rem] lg:leading-[1.08]">
              {t('hero.title')}
              <span className="mt-1 block text-brand">{t('hero.titleAccent')}</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {t('hero.subtitle')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <SignupButton href={signupUrl}>{t('hero.signup')}</SignupButton>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-brand/25 bg-white/70 px-6 py-3 text-base font-semibold text-brand-dark transition hover:bg-white"
              >
                {t('hero.how')}
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-brand-dark">{t('hero.price')}</p>
          </div>

          <ChatDemo
            label={t('mock.label')}
            status={t('mock.status')}
            typingLabel={t('mock.typing')}
            placeholder={t('mock.placeholder')}
            messages={chatMessages}
          />
        </div>
      </section>

      <section id="how" className="border-y border-brand/10 bg-white/55 px-4 py-20 backdrop-blur-sm sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mx-auto max-w-3xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('how.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {t('how.subtitle')}
          </p>
          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, title, text, highlight }, index) => (
              <li
                key={title}
                className="hv-wrap"
                style={{ '--dir': index % 2 === 0 ? 1 : -1 } as React.CSSProperties}
              >
                <div className="hv-bg" aria-hidden />
                <div
                  className={`hv-card rounded-2xl border p-6 ${
                    highlight
                      ? 'border-brand bg-white shadow-md shadow-brand/10'
                      : 'border-brand/10 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="hv-num flex h-9 w-9 items-center justify-center rounded-full bg-brand text-sm font-semibold text-white">
                      {index + 1}
                    </span>
                    <Icon className="hv-icon h-6 w-6 text-brand" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="pricing" className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-brand">
            {t('pricing.badge')}
          </p>
          <h2 className="mt-2 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('pricing.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {t('pricing.subtitle')}
          </p>

          <article className="mx-auto mt-12 max-w-xl rounded-3xl border border-brand bg-white p-8 shadow-xl shadow-brand/10">
            <div className="flex items-center gap-3">
              <BrandLogo size={44} withWordmark wordmarkClassName="text-xl font-semibold" />
            </div>
            <p className="mt-6 flex items-baseline gap-2">
              <span dir="ltr" className="font-[family-name:var(--font-display)] text-5xl font-bold tracking-tight">
                {t('pricing.price')}
              </span>
              <span className="text-muted">{t('pricing.per')}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{t('pricing.setup')}</p>
            <ul className="mt-6 space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 [&>a]:w-full">
              <SignupButton href={signupUrl}>{t('pricing.cta')}</SignupButton>
            </div>
          </article>

          <p className="mx-auto mt-8 max-w-xl text-center text-sm text-muted">
            {t('pricing.custom')}
            {appVentureUrl ? (
              <>
                {' '}
                <a
                  href={appVentureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-brand underline underline-offset-4"
                >
                  {t('pricing.customLink')}
                </a>
              </>
            ) : null}
          </p>
        </div>
      </section>

      <section id="audience" className="border-t border-brand/10 bg-white/40 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('audience.title')}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-muted">
            {t('audience.subtitle')}
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {audiences.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-2xl border border-brand/10 bg-white/70 p-6 shadow-sm"
              >
                <Icon className="h-8 w-8 text-brand" aria-hidden />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted">{t('audience.more')}</p>
        </div>
      </section>

      <section className="bg-brand-dark px-4 py-20 text-white sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {t('cta.title')}
          </h2>
          <p className="mt-4 text-lg text-white/80">{t('cta.subtitle')}</p>
          <div className="mt-8 flex justify-center">
            <a
              href={signupUrl}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-brand-dark transition hover:bg-brand-soft"
            >
              {t('cta.signup')}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
          </div>
          <p className="mt-10 text-sm text-white/70">{t('cta.connectHint')}</p>
          <div className="mt-4">
            <ChatCta
              whatsappUrl={whatsappUrl}
              telegramUrl={telegramUrl}
              whatsappLabel={t('cta.whatsapp')}
              telegramLabel={t('cta.telegram')}
              size="md"
            />
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
}
