import { setRequestLocale } from 'next-intl/server';
import { ChatEdit } from '@/components/site/sections/chat-edit';
import { Faq } from '@/components/site/sections/faq';
import { Footer } from '@/components/site/sections/footer';
import { GoogleMaps } from '@/components/site/sections/google-maps';
import { Header } from '@/components/site/sections/header';
import { Hero } from '@/components/site/sections/hero';
import { HowItWorks } from '@/components/site/sections/how-it-works';
import { LeadForm } from '@/components/site/sections/lead-form';
import { Manifesto } from '@/components/site/sections/manifesto';
import { Preloader } from '@/components/site/sections/preloader';
import { Showcase } from '@/components/site/sections/showcase';
import { Solutions } from '@/components/site/sections/solutions';
import { TryChat } from '@/components/site/sections/try-chat';
import type { AppLocale } from '@/i18n/routing';

type Props = {
  params: Promise<{ locale: AppLocale }>;
};

export default async function LandingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="app-root">
      {/* Dotted page edges + film grain */}
      <div className="bg-dots" aria-hidden />
      <div className="bg-grain" aria-hidden />
      <Preloader />
      <Header />
      <main className="flex-1">
        <Hero />
        <Manifesto />
        <ChatEdit />
        <TryChat />
        <GoogleMaps />
        <Showcase />
        {/* Features section is hidden for now – re-enable with <Features /> and the "features" nav/footer links in lib/content.ts */}
        <Solutions />
        <HowItWorks />
        <Faq />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
