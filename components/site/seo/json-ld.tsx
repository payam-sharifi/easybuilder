import { BRAND, FAQS } from "@/lib/content";
import { SITE_URL } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";

export function JsonLd({ locale }: { locale: AppLocale }) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BRAND.name,
    url: SITE_URL,
    email: BRAND.email,
    // TODO: street and postal code. Do not invent a street address.
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hamburg",
      addressCountry: "DE",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a[locale],
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
