import { BRAND, HOME_FAQS, type FaqItem } from "@/lib/content";
import { SITE_URL } from "@/lib/constants";
import type { AppLocale } from "@/i18n/routing";

export function JsonLd({ locale, faqs = HOME_FAQS }: { locale: AppLocale; faqs?: FaqItem[] }) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.name,
    url: SITE_URL,
    email: BRAND.email,
    address: {
      "@type": "PostalAddress",
      addressCountry: "DE",
    },
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a[locale],
      },
    })),
  };

  // #region agent log
  fetch('http://127.0.0.1:7314/ingest/9647e52d-f2ae-4a06-86c3-5785d17c264c',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'bbf498'},body:JSON.stringify({sessionId:'bbf498',runId:'pre-fix',hypothesisId:'H2',location:'json-ld.tsx:JsonLd',message:'JsonLd rendering script tags',data:{locale,faqCount:faqs.length,scriptCount:2,isServer:typeof window==='undefined'},timestamp:Date.now()})}).catch(()=>{});
  // #endregion
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
    </>
  );
}
