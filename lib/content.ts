import {
  BadgeCheck,
  Bot,
  Building2,
  CalendarCheck,
  Camera,
  Eye,
  Gauge,
  Globe,
  Languages,
  MapPin,
  MessageCircle,
  Palette,
  PhoneCall,
  Rocket,
  Search,
  ShoppingBag,
  Sparkles,
  Star,
  Store,
  Tag,
  UserRound,
  Wand2,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { getSignupUrl } from "./chat-links";
import type { L, LList } from "./i18n";

/* ------------------------------------------------------------------ */
/*  Brand                                                              */
/* ------------------------------------------------------------------ */
export const BRAND = {
  name: "easyWebBuilder",
  email: "info@easywebbuilder.de",
};

/** Brand logo (speech bubble) used in the header, footer, preloader and chat demo. */
export const BRAND_LOGO = "/logo.png";

/** Where "Sign up" buttons lead (falls back to the account / login page). */
export const SIGNUP_URL = getSignupUrl();

/* ------------------------------------------------------------------ */
/*  Navigation                                                         */
/* ------------------------------------------------------------------ */
export const NAV_LINKS: { id: string; href: string; label: L }[] = [
  { id: "showcase", href: "#showcase", label: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } },
  { id: "templates", href: "#templates", label: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } },
  { id: "solutions", href: "#solutions", label: { de: "Lösungen", en: "Solutions", fa: "راهکارها", ar: "الحلول" } },
  { id: "how", href: "#how", label: { de: "So funktioniert’s", en: "How It Works", fa: "روند کار", ar: "كيف يعمل" } },
  { id: "faq", href: "#faq", label: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } },
];

export const NAV_CTA: L = {
  de: "Kostenlose Beratung",
  en: "Free Consultation",
  fa: "مشاوره رایگان",
  ar: "استشارة مجانية",
};

/* ------------------------------------------------------------------ */
/*  Chrome (theme / language / preloader labels)                       */
/* ------------------------------------------------------------------ */
export const UI = {
  login: { de: "Login", en: "Log in", fa: "ورود", ar: "تسجيل الدخول" } satisfies L,
  menu: { de: "Menü", en: "Menu", fa: "منو", ar: "القائمة" } satisfies L,
  close: { de: "Schließen", en: "Close", fa: "بستن", ar: "إغلاق" } satisfies L,
  light: { de: "Hell", en: "Light", fa: "روشن", ar: "فاتح" } satisfies L,
  dark: { de: "Dunkel", en: "Dark", fa: "تیره", ar: "داكن" } satisfies L,
  theme: { de: "Design", en: "Theme", fa: "پوسته", ar: "المظهر" } satisfies L,
  language: { de: "Sprache", en: "Language", fa: "زبان", ar: "اللغة" } satisfies L,
  backToTop: { de: "Nach oben", en: "Back to top", fa: "بازگشت به بالا", ar: "العودة للأعلى" } satisfies L,
  loading: { de: "Lädt", en: "Loading", fa: "در حال بارگذاری", ar: "جارٍ التحميل" } satisfies L,
  skip: { de: "Zum Inhalt springen", en: "Skip to content", fa: "پرش به محتوا", ar: "انتقل إلى المحتوى" } satisfies L,
  prev: { de: "Zurück", en: "Previous", fa: "قبلی", ar: "السابق" } satisfies L,
  play: { de: "Video abspielen", en: "Play video", fa: "پخش ویدیو", ar: "تشغيل الفيديو" } satisfies L,
  pause: { de: "Video pausieren", en: "Pause video", fa: "توقف ویدیو", ar: "إيقاف الفيديو مؤقتًا" } satisfies L,
  next: { de: "Weiter", en: "Next", fa: "بعدی", ar: "التالي" } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */
export const HERO = {
  title: [
    {
      de: "Website für Ihr Business",
      en: "A website for your business",
      fa: "وب‌سایت برای کسب‌وکار شما",
      ar: "موقع لنشاطك التجاري",
    },
  ] satisfies L[],
  subtitle: {
    de: "Wir liefern Ihre Website in wenigen Tagen. Danach ändern Sie alles selbst – ohne Panel, ohne Login. Öffnungszeiten, Preise, Leistungen, Fotos: per Chat, ganz einfach.",
    en: "We deliver your website in a few days. After that you change everything yourself — no dashboard, no login. Opening hours, prices, services, photos: by chat, simply.",
    fa: "سایت را در چند روز تحویل می‌دهیم. بعد از آن خودتان همه‌چیز را عوض می‌کنید — بدون پنل، بدون ورود. ساعت کاری، قیمت‌ها، خدمات، عکس‌ها: فقط با چت، خیلی راحت.",
    ar: "نسلّم موقعك خلال أيام. وبعدها تغيّر كل شيء بنفسك — بلا لوحة تحكم وبلا تسجيل دخول. ساعات العمل والأسعار والخدمات والصور: بالدردشة، بسهولة.",
  } satisfies L,
  aside: {
    de: "Größere Projekte starten mit Beratung.",
    en: "Larger projects start with a consultation.",
    fa: "پروژه‌های بزرگ‌تر با مشاوره شروع می‌شوند.",
    ar: "المشاريع الأكبر تبدأ باستشارة.",
  } satisfies L,
  primaryCta: {
    de: "Kostenlose Beratung anfragen",
    en: "Request a free consultation",
    fa: "درخواست مشاوره رایگان",
    ar: "اطلب استشارة مجانية",
  } satisfies L,
  secondaryCta: {
    de: "Kostenlos testen",
    en: "Try it free",
    fa: "تست رایگان",
    ar: "جرّب مجانًا",
  } satisfies L,
};

export const TRUST_ITEMS: {
  value?: number;
  suffix?: string;
  text?: L;
  title: L;
}[] = [
  {
    text: { de: "Tage", en: "Days", fa: "چند روز", ar: "أيام" },
    title: { de: "bis Ihre Website live ist", en: "until your website is live", fa: "تا وب‌سایتتان آنلاین شود", ar: "حتى يصبح موقعك مباشرًا" },
  },
  {
    text: { de: "Chat", en: "Chat", fa: "چت", ar: "دردشة" },
    title: { de: "Änderungen per WhatsApp & Telegram", en: "Updates via WhatsApp & Telegram", fa: "تغییرات با واتس‌اپ و تلگرام", ar: "تعديلات عبر واتساب وتيليجرام" },
  },
  {
    text: { de: "Maps", en: "Maps", fa: "مپ", ar: "خرائط" },
    title: { de: "Profil für Google Maps vorbereitet", en: "Set up for Google Maps", fa: "آماده‌شده برای گوگل مپ", ar: "مجهّز لخرائط جوجل" },
  },
  {
    text: { de: "Support inklusive", en: "Support included", fa: "پشتیبانی شامل", ar: "الدعم مشمول" },
    title: { de: "im monatlichen Preis", en: "in the monthly fee", fa: "در هزینهٔ ماهانه", ar: "ضمن الرسوم الشهرية" },
  },
];

/* ------------------------------------------------------------------ */
/*  Manifesto (sticky word-by-word reveal)                             */
/* ------------------------------------------------------------------ */
export const MANIFESTO = {
  badge: { de: "Warum easyWebBuilder", en: "Why easyWebBuilder", fa: "چرا easyWebBuilder", ar: "لماذا easyWebBuilder" } satisfies L,
  text: {
    de: "Kleine Betriebe ändern Titel, Texte, Bilder und alles andere per WhatsApp – ohne Panel. Größere Projekte beraten wir persönlich. Und für Google Maps richten wir Adresse, Zeiten und Profil so ein, dass Kunden Sie leichter finden.",
    en: "Small businesses change headlines, copy, images and everything else via WhatsApp — no dashboard. Larger projects get a personal consultation. And for Google Maps we set up address, hours and profile so customers can find you more easily.",
    fa: "کسب‌وکارهای کوچک تیتر، متن، عکس و بقیه‌ی سایت را با واتس‌اپ عوض می‌کنند — بدون پنل. پروژه‌های بزرگ‌تر مشاوره‌ی حضوری دارند. و برای گوگل مپ آدرس، ساعت‌ها و پروفایل را طوری می‌چینیم که مشتری راحت‌تر پیدایتان کند.",
    ar: "تغيّر الأنشطة الصغيرة العناوين والنصوص والصور وكل شيء آخر عبر واتساب — بلا لوحة تحكم. والمشاريع الأكبر تحصل على استشارة شخصية. ولخرائط جوجل نضبط العنوان والساعات والملف كي يجدك العملاء بسهولة أكبر.",
  } satisfies L,
  /** Number of trailing words highlighted with the ink "plate". */
  plateWords: { de: 2, en: 3, fa: 3, ar: 3 },
};

/* ------------------------------------------------------------------ */
/*  Showcase                                                           */
/* ------------------------------------------------------------------ */
export type ShowcaseCategory = "all" | "store" | "corporate" | "booking" | "portfolio";
export type SiteKey = "hengameh" | "nilou" | "arman" | "zist" | "raha";
export type ShowcaseId = SiteKey | "termin";

export const SHOWCASE_TABS: { id: ShowcaseCategory; label: L }[] = [
  { id: "all", label: { de: "Alle", en: "All", fa: "همه", ar: "الكل" } },
  { id: "store", label: { de: "Online-Shop", en: "Online Store", fa: "فروشگاه", ar: "متجر إلكتروني" } },
  { id: "corporate", label: { de: "Unternehmen", en: "Corporate", fa: "شرکتی", ar: "شركات" } },
  { id: "booking", label: { de: "Buchung", en: "Booking", fa: "رزرو آنلاین", ar: "حجوزات" } },
  { id: "portfolio", label: { de: "Portfolio", en: "Portfolio", fa: "نمونه‌کار", ar: "معرض أعمال" } },
];

export type ShowcaseItem = {
  id: ShowcaseId;
  category: Exclude<ShowcaseCategory, "all">;
  /** Coloured drop-shadow behind the browser window. */
  glow: string;
  name: L;
  kind: L;
  url: string;
  /** Link for the CTA; defaults to the contact form. */
  href?: string;
  /** Real client project (shown as a live screenshot). */
  live?: boolean;
  /** Screen recording shown instead of a scrolling site. */
  video?: { src: string; poster: string; label: string };
  tags: string[];
  why: L;
  cta: L;
};

export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "hengameh",
    category: "booking",
    glow: "rgb(160 110 90 / 0.3)",
    live: true,
    href: "https://hengameh-luxe-beauty.de/",
    name: { de: "Hengameh Luxe Beauty", en: "Hengameh Luxe Beauty", fa: "هنگامه لوکس بیوتی", ar: "هنغامه لوكس بيوتي" },
    kind: {
      de: "Beautysalon in Köln – Live-Projekt",
      en: "Beauty salon in Cologne — live project",
      fa: "سالن زیبایی در کلن — پروژه‌ی واقعی",
      ar: "صالون تجميل في كولن — مشروع حقيقي",
    },
    url: "hengameh-luxe-beauty.de",
    tags: ["#Live_Project", "#Booking", "#Fast_Load"],
    why: {
      de: "Öffnungszeiten, Adresse und Telefonnummer stehen direkt im Hero, die Behandlungen sind nach Kategorien mit Dauer und Preis gegliedert – Besucher finden alles ohne Suchen und reservieren sofort.",
      en: "Opening hours, address and phone sit right in the hero, and treatments are grouped by category with duration and price — visitors find everything at a glance and book straight away.",
      fa: "ساعت کاری، آدرس و شماره تماس همان بالای صفحه است و خدمات بر اساس دسته، با مدت و قیمت مرتب شده‌اند؛ بازدیدکننده همه‌چیز را یک‌جا می‌بیند و فوراً رزرو می‌کند.",
      ar: "تظهر ساعات العمل والعنوان ورقم الهاتف مباشرة في الواجهة الرئيسية، وتُصنَّف الخدمات حسب الفئة مع المدة والسعر — فيجد الزائر كل شيء بنظرة واحدة ويحجز فورًا.",
    },
    cta: { de: "Website live ansehen", en: "Visit live website", fa: "مشاهده سایت زنده", ar: "زيارة الموقع المباشر" },
  },
  {
    id: "termin",
    category: "booking",
    glow: "rgb(201 160 90 / 0.3)",
    video: {
      src: "/showcase/termin-panel.mp4",
      poster: "/showcase/termin-panel-poster.jpg",
      label: "Terminpanel · Hengameh",
    },
    name: { de: " Terminpanel", en: " Booking Panel", fa: "پنل نوبت‌دهی ", ar: "لوحة حجز المواعيد" },
    kind: {
      de: "Terminverwaltung mit KI-Chat-Assistent",
      en: "Appointment management with an AI chat assistant",
      fa: "مدیریت نوبت با دستیار چت هوشمند",
      ar: "إدارة المواعيد مع مساعد دردشة ذكي",
    },
    url: "",
    tags: ["#Admin_Panel", "#AI_Assistant", "#Booking"],
    why: {
      de: "Termine entstehen auf zwei Wegen: per Kalender-Formular mit Kundensuche und Leistungsauswahl – oder im Chat. Der Assistent fragt Kunde, Leistung und Zeit ab und bucht nach Ihrer Bestätigung direkt in den Kalender. Termine lassen sich per Drag & Drop verschieben, Kunden erhalten automatisch eine SMS-Erinnerung, und das Panel gibt es auch als mobile App.",
      en: "Appointments are created two ways: via the calendar form with customer search and service picker — or in chat. The assistant asks for customer, service and time, then books straight into the calendar once you confirm. Appointments can be rescheduled with drag & drop, customers get an automatic SMS reminder, and the panel is also available as a mobile app.",
      fa: "نوبت به دو روش ثبت می‌شود: با فرم تقویم (جستجوی مشتری و انتخاب خدمت) یا در چت. دستیار مشتری، خدمت و زمان را می‌پرسد و بعد از تأیید شما مستقیم در تقویم ثبت می‌کند. نوبت‌ها با درگ اند دراپ جابه‌جا می‌شوند، یادآوری با پیامک (SMS) برای مشتری ارسال می‌شود و پنل اپلیکیشن موبایل هم دارد.",
      ar: "تُنشأ المواعيد بطريقتين: عبر نموذج التقويم مع البحث عن العميل واختيار الخدمة — أو عبر الدردشة. يسأل المساعد عن العميل والخدمة والوقت، ثم يحجز مباشرة في التقويم بعد تأكيدك. ويمكن نقل المواعيد بالسحب والإفلات، ويتلقى العملاء تذكيرًا تلقائيًا عبر الرسائل القصيرة (SMS)، كما تتوفر اللوحة أيضًا كتطبيق للجوال.",
    },
    cta: { de: "Ähnliches Panel anfragen", en: "Request a similar panel", fa: "درخواست پنل مشابه", ar: "اطلب لوحة مماثلة" },
  },
  {
    id: "nilou",
    category: "store",
    glow: "rgb(224 140 70 / 0.28)",
    name: { de: "Nilou Boutique", en: "Nilou Boutique", fa: "بوتیک نیلو", ar: "بوتيك نيلو" },
    kind: {
      de: "Online-Shop für Handwerkskeramik",
      en: "Handmade ceramics store",
      fa: "فروشگاه اینترنتی سفال دست‌ساز",
      ar: "متجر إلكتروني للخزف المصنوع يدويًا",
    },
    url: "nilou.easywebbuilder.de",
    tags: ["#E_Commerce", "#AI_Powered", "#Fast_Load"],
    why: {
      de: "Ein mitlaufender Mini-Warenkorb und ein Ein-Seiten-Checkout halten Käufer in Bewegung – weniger Klicks zwischen „In den Warenkorb“ und „Bezahlt“.",
      en: "A sticky mini-cart and one-page checkout keep buyers moving — fewer clicks between “Add to cart” and “Paid”.",
      fa: "سبد خرید شناور و تسویه‌حساب تک‌صفحه‌ای، فاصله‌ی «افزودن به سبد» تا «پرداخت» را کوتاه می‌کند.",
      ar: "سلة مصغّرة ثابتة وصفحة دفع واحدة تُبقيان المشتري في حركة — نقرات أقل بين «أضف إلى السلة» و«تم الدفع».",
    },
    cta: { de: "Live-Demo ansehen", en: "View live demo", fa: "مشاهده دموی زنده", ar: "شاهد العرض المباشر" },
  },
  {
    id: "arman",
    category: "corporate",
    glow: "rgb(27 77 255 / 0.28)",
    name: { de: "Arman Group", en: "Arman Group", fa: "گروه آرمان", ar: "مجموعة أرمان" },
    kind: { de: "Unternehmenswebsite", en: "Corporate website", fa: "وب‌سایت شرکتی", ar: "موقع شركة" },
    url: "arman-group.easywebbuilder.de",
    tags: ["#AI_Powered", "#Multilingual", "#Fast_Load"],
    why: {
      de: "Vertrauenssignale direkt im ersten Blick – Kundenlogos, Kennzahlen und eine klare Aktion: „Angebot anfragen“.",
      en: "Trust signals above the fold — client logos, numbers and one clear “Request a quote” action.",
      fa: "نشانه‌های اعتماد در همان نگاه اول: لوگوی مشتریان، آمار و یک دکمه‌ی روشن «درخواست قیمت».",
      ar: "إشارات الثقة من النظرة الأولى — شعارات العملاء والأرقام وإجراء واحد واضح: «اطلب عرض سعر».",
    },
    cta: { de: "Vorlage verwenden", en: "Use this template", fa: "استفاده از قالب", ar: "استخدم هذا القالب" },
  },
  {
    id: "zist",
    category: "booking",
    glow: "rgb(31 107 82 / 0.28)",
    name: { de: "Zist Klinik", en: "Zist Clinic", fa: "کلینیک زیست", ar: "عيادة زيست" },
    kind: { de: "Landingpage mit Terminbuchung", en: "Booking landing page", fa: "لندینگ رزرو نوبت", ar: "صفحة هبوط لحجز المواعيد" },
    url: "zist-clinic.easywebbuilder.de",
    tags: ["#Booking", "#AI_Powered", "#Fast_Load"],
    why: {
      de: "Das Buchungs-Widget sitzt im Hero – Besucher wählen einen Termin ohne Scrollen und ohne Registrierung.",
      en: "The booking widget lives in the hero, so visitors can pick a slot without scrolling or signing up.",
      fa: "ویجت رزرو در همان بالای صفحه است؛ بازدیدکننده بدون اسکرول و ثبت‌نام زمان خود را انتخاب می‌کند.",
      ar: "أداة الحجز في الواجهة الرئيسية، فيختار الزائر موعدًا دون تمرير أو تسجيل.",
    },
    cta: { de: "Live-Demo ansehen", en: "View live demo", fa: "مشاهده دموی زنده", ar: "شاهد العرض المباشر" },
  },
  {
    id: "raha",
    category: "portfolio",
    glow: "rgb(255 61 119 / 0.28)",
    name: { de: "Studio Raha", en: "Studio Raha", fa: "استودیو رها", ar: "استوديو رها" },
    kind: { de: "Kreatives Portfolio", en: "Creative portfolio", fa: "پورتفولیو خلاقانه", ar: "معرض أعمال إبداعي" },
    url: "studio-raha.easywebbuilder.de",
    tags: ["#Portfolio", "#SEO_Ready", "#Fast_Load"],
    why: {
      de: "Ein Masonry-Raster mit Lazy-Loading zeigt Ihre besten Arbeiten zuerst und erreicht trotzdem 95+ bei der Geschwindigkeit.",
      en: "A masonry grid with lazy-loaded media shows your best work first and still scores 95+ on speed.",
      fa: "گرید آجری با بارگذاری تنبل، بهترین کارها را اول نشان می‌دهد و همچنان امتیاز سرعت بالای ۹۵ دارد.",
      ar: "شبكة متدرّجة (Masonry) مع تحميل كسول للوسائط تعرض أفضل أعمالك أولًا وتحقق مع ذلك 95+ في السرعة.",
    },
    cta: { de: "Vorlage verwenden", en: "Use this template", fa: "استفاده از قالب", ar: "استخدم هذا القالب" },
  },
];

export type SiteItem = ShowcaseItem & { id: SiteKey };
/** Items that are rendered as scrolling site previews (hero carousel). */
export const SITE_ITEMS = SHOWCASE_ITEMS.filter((s): s is SiteItem => !s.video);

export const SHOWCASE_COPY = {
  badge: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } satisfies L,
  title: {
    de: "Echte Websites. In Tagen gebaut.",
    en: "Real websites. Built in days.",
    fa: "وب‌سایت‌های واقعی؛ ساخته‌شده در چند روز",
    ar: "مواقع حقيقية. بُنيت في أيام.",
  } satisfies L,
  subtitle: {
    de: "Beispielseiten, die mit easyWebBuilder entstanden sind – und warum jedes Layout Besucher zu Kunden macht.",
    en: "Sample sites made with easyWebBuilder — and why each layout turns visitors into customers.",
    fa: "نمونه‌سایت‌های ساخته‌شده با easyWebBuilder و دلیل اینکه هر چیدمان بازدیدکننده را به مشتری تبدیل می‌کند.",
    ar: "مواقع نموذجية أُنشئت بواسطة easyWebBuilder — وسبب تحويل كل تصميم للزوّار إلى عملاء.",
  } satisfies L,
  why: {
    de: "Warum dieses Layout konvertiert",
    en: "Why this layout converts",
    fa: "چرا این چیدمان فروش می‌آورد",
    ar: "لماذا يحقق هذا التصميم التحويلات",
  } satisfies L,
  templatesBadge: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } satisfies L,
  templatesTitle: {
    de: "Für diese Branchen bauen wir Websites",
    en: "We build websites for these businesses",
    fa: "برای این کسب‌وکارها وب‌سایت می‌سازیم",
    ar: "نبني مواقع لهذه الأنشطة",
  } satisfies L,
  empty: {
    de: "In dieser Kategorie gibt es noch keine Beispiele.",
    en: "No sites in this category yet.",
    fa: "هنوز نمونه‌ای در این دسته نیست.",
    ar: "لا توجد مواقع في هذه الفئة بعد.",
  } satisfies L,
};

export const TEMPLATE_CHIPS: { icon: LucideIcon; label: L }[] = [
  { icon: Store, label: { de: "Modeshop", en: "Fashion Store", fa: "فروشگاه مد", ar: "متجر أزياء" } },
  { icon: Building2, label: { de: "Anwaltskanzlei", en: "Law Firm", fa: "دفتر حقوقی", ar: "مكتب محاماة" } },
  { icon: CalendarCheck, label: { de: "Zahnarztpraxis", en: "Dental Clinic", fa: "کلینیک دندان‌پزشکی", ar: "عيادة أسنان" } },
  { icon: Camera, label: { de: "Fotograf:in", en: "Photographer", fa: "عکاس", ar: "مصوّر" } },
  { icon: ShoppingBag, label: { de: "Handwerks-Shop", en: "Handmade Shop", fa: "فروشگاه صنایع‌دستی", ar: "متجر حرف يدوية" } },
  { icon: Palette, label: { de: "Designagentur", en: "Design Agency", fa: "آژانس طراحی", ar: "وكالة تصميم" } },
  { icon: Rocket, label: { de: "SaaS-Landingpage", en: "SaaS Landing", fa: "لندینگ ساس", ar: "صفحة هبوط SaaS" } },
  { icon: Globe, label: { de: "Reisebüro", en: "Travel Agency", fa: "آژانس مسافرتی", ar: "وكالة سفر" } },
  { icon: Bot, label: { de: "KI-Startup", en: "AI Startup", fa: "استارتاپ هوش مصنوعی", ar: "شركة ناشئة في الذكاء الاصطناعي" } },
  { icon: Wand2, label: { de: "Beautysalon", en: "Beauty Salon", fa: "سالن زیبایی", ar: "صالون تجميل" } },
];

/* ------------------------------------------------------------------ */
/*  Chat editing (the competitive edge)                                */
/* ------------------------------------------------------------------ */
export const CHAT_EDIT = {
  badge: {
    de: "WhatsApp & Telegram",
    en: "WhatsApp & Telegram",
    fa: "واتس‌اپ و تلگرام",
    ar: "واتساب وتيليجرام",
  } satisfies L,
  title: {
    de: "Ändern – direkt im Chat.",
    en: "Update — right in chat.",
    fa: "تغییر بدهید — همان در چت.",
    ar: "عدّل — مباشرة في الدردشة.",
  } satisfies L,
  subtitle: {
    de: "Über WhatsApp oder Telegram ändern Sie alles: Titel, Texte, Bilder und den Rest der Seite. Der Agent ist für den Support da. Ohne Panel, ohne Login. Sie sehen zuerst eine Vorschau; erst nach Ihrer Bestätigung geht die Änderung live. Ein Mensch prüft mit. Reicht der Chat nicht, sprechen Sie mit uns.",
    en: "On WhatsApp or Telegram you change everything: headlines, copy, images and the rest of the site. The agent is there for support. No dashboard, no login. You see a preview first; it goes live only after you confirm. A person reviews each change. If chat isn’t enough, you talk to us.",
    fa: "در واتس‌اپ یا تلگرام همه‌چیز را عوض می‌کنید: تیتر، متن، عکس و بقیه‌ی سایت. ایجنت فقط برای پشتیبانی است. بدون پنل، بدون ورود. اول پیش‌نمایش می‌بینید؛ فقط بعد از تأیید شما آنلاین می‌شود. یک نفر تغییرات را چک می‌کند. اگر چت کافی نبود، با خود ما حرف می‌زنید.",
    ar: "عبر واتساب أو تيليجرام تغيّر كل شيء: العناوين والنصوص والصور وبقية الموقع. المساعد للدعم فقط. بلا لوحة تحكم وبلا تسجيل دخول. ترى معاينة أولًا؛ ولا يصبح مباشرًا إلا بعد تأكيدك. يراجع شخص كل تعديل. وإن لم تكفِ الدردشة، تتحدث معنا.",
  } satisfies L,
  benefits: [
    { icon: MessageCircle, title: { de: "Support per Chat", en: "Support by chat", fa: "پشتیبانی با چت", ar: "الدعم بالدردشة" } satisfies L, text: { de: "Der Agent ändert Ihre Website über WhatsApp oder Telegram. Bauen tut unser Team – der Chat ist nur für den Support.", en: "The agent updates your website on WhatsApp or Telegram. Our team builds the site — chat is for support only.", fa: "ایجنت سایت را در واتس‌اپ یا تلگرام عوض می‌کند. ساخت با تیم ماست — چت فقط برای پشتیبانی است.", ar: "يعدّل المساعد موقعك عبر واتساب أو تيليجرام. فريقنا يبني الموقع — والدردشة للدعم فقط." } satisfies L },
    { icon: Tag, title: { de: "Alles per Nachricht ändern", en: "Change anything by message", fa: "همه‌چیز با یک پیام", ar: "غيّر أي شيء برسالة" } satisfies L, text: { de: "Titel, Texte, Bilder – und alles andere auf der Seite. Ohne Dashboard und ohne Login, direkt vom Handy.", en: "Headlines, copy, images — and everything else on the site. No dashboard and no login, straight from your phone.", fa: "تیتر، متن، عکس — و هر چیز دیگری روی سایت. بدون پنل و بدون ورود، مستقیم از موبایل.", ar: "العناوين والنصوص والصور — وكل شيء آخر في الموقع. بلا لوحة تحكم وبلا تسجيل دخول، مباشرة من هاتفك." } satisfies L },
    { icon: Eye, title: { de: "Vorschau, dann Ihre Bestätigung", en: "Preview, then you confirm", fa: "پیش‌نمایش، بعد تأیید شما", ar: "معاينة ثم تأكيدك" } satisfies L, text: { de: "Jede Änderung kommt zuerst als Vorschau. Erst wenn Sie ja sagen, geht sie online.", en: "Every change arrives as a preview first. It goes live only when you say yes.", fa: "هر تغییر اول به‌صورت پیش‌نمایش می‌آید. فقط وقتی بگویید تأیید، آنلاین می‌شود.", ar: "كل تعديل يصل أولًا كمعاينة. ولا يُنشر إلا عندما تقول نعم." } satisfies L },
    { icon: UserRound, title: { de: "Mensch schaut mit", en: "A person checks with you", fa: "یک نفر همراهتان چک می‌کند", ar: "شخص يراجع معك" } satisfies L, text: { de: "Jemand prüft, dass die Seite richtig geändert wurde. Wenn der Chat nicht reicht, sprechen Sie mit einem echten Menschen.", en: "Someone checks that the site was changed correctly. If chat isn’t enough, you speak with a real person.", fa: "کسی نگاه می‌کند که سایت درست عوض شده باشد. اگر چت کافی نبود، با آدم واقعی حرف می‌زنید.", ar: "يراجع أحدهم أن الموقع تغيّر بشكل صحيح. وإن لم تكفِ الدردشة، تتحدث مع شخص حقيقي." } satisfies L },
  ] as { icon: LucideIcon; title: L; text: L }[],
  note: {
    de: "Ideal für kleine Betriebe, die keine komplexe Software brauchen – Studios, Restaurants, Handwerker und Dienstleister. Größere, komplexere Websites starten mit einer Beratung.",
    en: "Ideal for small businesses that don’t need complex software — studios, restaurants, trades and service firms. Larger, more complex websites start with a consultation.",
    fa: "مناسب کسب‌وکارهای کوچکی که نرم‌افزار پیچیده نمی‌خواهند — سالن، رستوران، فنی‌کار و خدمات. وب‌سایت‌های بزرگ‌تر و پیچیده‌تر با مشاوره شروع می‌شوند.",
    ar: "مثالي للأنشطة الصغيرة التي لا تحتاج برمجيات معقّدة — الاستوديوهات والمطاعم والحرف والخدمات. والمواقع الأكبر والأعقد تبدأ باستشارة.",
  } satisfies L,
  cta: {
    de: "Kostenlos testen",
    en: "Try it free",
    fa: "تست رایگان",
    ar: "جرّب مجانًا",
  } satisfies L,
  /** Pre-filled WhatsApp message for visitors who already have their personal code. */
  whatsappPrefill: {
    de: "Hallo, hier ist mein easyWebBuilder-Code: ",
    en: "Hello, here is my easyWebBuilder code: ",
    fa: "سلام، این کد easyWebBuilder من است: ",
    ar: "مرحبًا، هذا رمز easyWebBuilder الخاص بي: ",
  } satisfies L,
  whatsapp: {
    de: "Bot auf WhatsApp öffnen",
    en: "Open bot on WhatsApp",
    fa: "باز کردن ربات در واتس‌اپ",
    ar: "افتح البوت على واتساب",
  } satisfies L,
  telegram: {
    de: "Bot auf Telegram öffnen",
    en: "Open bot on Telegram",
    fa: "باز کردن ربات در تلگرام",
    ar: "افتح البوت على تيليجرام",
  } satisfies L,
  more: {
    de: "Mehr als eine Präsentationsseite? Beratung anfragen",
    en: "Need more than a presentation site? Ask for a consultation",
    fa: "بیشتر از یک سایت معرفی می‌خواهید؟ مشاوره بگیرید",
    ar: "تحتاج أكثر من موقع تعريفي؟ اطلب استشارة",
  } satisfies L,
  /** Example conversation shown in the phone mock-up. */
  demo: {
    agent: "easyWebBuilder",
    status: {
      de: "Online",
      en: "Online",
      fa: "آنلاین",
      ar: "متصل",
    } satisfies L,
    you1: {
      de: "Balayage kostet ab heute 89 € statt 99 €",
      en: "Balayage is now €89 instead of €99",
      fa: "قیمت بالیاژ از امروز ۸۹ یورو شد، نه ۹۹",
      ar: "سعر البالياج أصبح 89 € بدل 99 €",
    } satisfies L,
    bot1: {
      de: "Vorschau ist fertig. Bitte prüfen und mit „Ja“ bestätigen.",
      en: "Preview is ready. Please check and confirm with “Yes”.",
      fa: "پیش‌نمایش آماده است. لطفاً ببینید و با «تأیید» موافقت کنید.",
      ar: "المعاينة جاهزة. يُرجى المراجعة والتأكيد بـ «نعم».",
    } satisfies L,
    you2: {
      de: "Ja, veröffentlichen",
      en: "Yes, publish it",
      fa: "تأیید، منتشر کن",
      ar: "نعم، انشره",
    } satisfies L,
    bot2: {
      de: "Bestätigt ✓ Die Änderung ist live.",
      en: "Confirmed ✓ The change is live.",
      fa: "تأیید شد ✓ تغییر آنلاین شد.",
      ar: "تم التأكيد ✓ التعديل مباشر الآن.",
    } satisfies L,
    preview: {
      de: "Live-Vorschau",
      en: "Live preview",
      fa: "پیش‌نمایش زنده",
      ar: "معاينة مباشرة",
    } satisfies L,
    headline: {
      de: "Farbe & Balayage",
      en: "Colour & Balayage",
      fa: "رنگ و بالیاژ",
      ar: "لون وبالياج",
    } satisfies L,
    service: {
      de: "Balayage",
      en: "Balayage",
      fa: "بالیاژ",
      ar: "بالياج",
    } satisfies L,
    oldPrice: {
      de: "99 €",
      en: "€99",
      fa: "۹۹ €",
      ar: "99 €",
    } satisfies L,
    newPrice: {
      de: "89 €",
      en: "€89",
      fa: "۸۹ €",
      ar: "89 €",
    } satisfies L,
    placeholder: {
      de: "Nachricht schreiben",
      en: "Type a message",
      fa: "پیام بنویسید",
      ar: "اكتب رسالة",
    } satisfies L,
  },
};

/* ------------------------------------------------------------------ */
/*  Free Telegram / WhatsApp trial                                     */
/* ------------------------------------------------------------------ */
export const TRY_CHAT = {
  badge: {
    de: "Kostenlos testen",
    en: "Try it free",
    fa: "تست رایگان",
    ar: "جرّب مجانًا",
  } satisfies L,
  title: {
    de: "Probieren Sie es selbst – in Telegram.",
    en: "Try it yourself — in Telegram.",
    fa: "خودتان امتحان کنید — در تلگرام.",
    ar: "جرّبه بنفسك — في تيليجرام.",
  } satisfies L,
  subtitle: {
    de: "Öffnen Sie Telegram, ändern Sie eine Website und sehen Sie die Änderung sofort. Kostenlos, ohne Anmeldung, ohne Panel.",
    en: "Open Telegram, change a website and see the update at once. Free, no sign-up, no dashboard.",
    fa: "تلگرام را باز کنید، یک وب‌سایت را عوض کنید و همان‌جا نتیجه را ببینید. رایگان، بدون ثبت‌نام، بدون پنل.",
    ar: "افتح تيليجرام، غيّر موقعًا وشاهد التعديل فورًا. مجانًا، بلا تسجيل وبلا لوحة تحكم.",
  } satisfies L,
  cta: {
    de: "Kostenlos in Telegram testen",
    en: "Try it free on Telegram",
    fa: "رایگان در تلگرام تست کنید",
    ar: "جرّب مجانًا على تيليجرام",
  } satisfies L,
  whatsapp: {
    de: "Oder auf WhatsApp testen",
    en: "Or try it on WhatsApp",
    fa: "یا در واتس‌اپ تست کنید",
    ar: "أو جرّبه على واتساب",
  } satisfies L,
  prefill: {
    de: "Hallo, ich möchte die kostenlose Demo testen.",
    en: "Hello, I’d like to try the free demo.",
    fa: "سلام، می‌خواهم دموی رایگان را تست کنم.",
    ar: "مرحبًا، أود تجربة العرض المجاني.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Solutions (two target groups)                                      */
/* ------------------------------------------------------------------ */
export type Solution = {
  id: "small" | "custom";
  icon: LucideIcon;
  metaIcon: LucideIcon;
  /** Optional brand logo (public path) shown instead of the icon. */
  logo?: string;
  highlight?: boolean;
  tag: L;
  name: L;
  audience: L;
  /** Small word before the amount ("from"). */
  pricePrefix?: L;
  /** The amount itself, always rendered left-to-right. Omit for quote-only cards. */
  price?: L;
  /** Large text instead of a number (e.g. “Preis nach Beratung”). */
  priceHeadline?: L;
  /** Small word after the amount ("/ month"). */
  priceSuffix?: L;
  priceNote: L;
  meta: L;
  features: LList;
  cta: L;
  href: string;
};

export const SOLUTIONS: Solution[] = [
  {
    id: "small",
    icon: MessageCircle,
    logo: BRAND_LOGO,
    metaIcon: Zap,
    highlight: true,
    tag: { de: "Für kleine Betriebe", en: "For small businesses", fa: "برای کسب‌وکارهای کوچک", ar: "للأنشطة الصغيرة" },
    name: { de: "Kleine Betriebe", en: "Small businesses", fa: "کسب‌وکارهای کوچک", ar: "الأنشطة الصغيرة" },
    audience: {
      de: "Für kleine Unternehmen & Präsentationsseiten",
      en: "For small businesses & presentation sites",
      fa: "برای کسب‌وکارهای کوچک و سایت‌های معرفی",
      ar: "للشركات الصغيرة ومواقع التعريف",
    },
    pricePrefix: {
      de: "ab",
      en: "from",
      fa: "از",
      ar: "ابتداءً من",
    },
    price: {
      de: "699 €",
      en: "€699",
      fa: "۶۹۹ €",
      ar: "699 €",
    },
    priceNote: {
      de: "49 € / Monat Support inklusive.",
      en: "€49 / month, support included.",
      fa: "۴۹ یورو در ماه، پشتیبانی شامل.",
      ar: "49 € شهريًا، الدعم مشمول.",
    },
    meta: {
      de: "In wenigen Tagen online",
      en: "Online in a few days",
      fa: "آنلاین در چند روز",
      ar: "على الإنترنت خلال أيام",
    },
    features: {
      de: [
        "Website in wenigen Tagen – danach Support per Chat",
        "Änderungen per WhatsApp oder Telegram – ohne Panel, ohne Login",
        "Titel, Texte, Bilder und alles andere per Nachricht",
        "Vorschau vor jeder Änderung – live erst nach Ihrer Bestätigung",
        "Ein Mensch prüft mit; wenn der Chat nicht reicht, sprechen Sie mit uns",
        "Einrichtung für Google und Google Maps · Support inklusive",
      ],
      en: [
        "Website in a few days — then support by chat",
        "Changes via WhatsApp or Telegram — no dashboard, no login",
        "Headlines, copy, images and everything else by message",
        "Preview before every change — live only after you confirm",
        "A person reviews with you; if chat isn’t enough, you talk to us",
        "Set-up for Google and Google Maps · support included",
      ],
      fa: [
        "وب‌سایت در چند روز — بعد پشتیبانی با چت",
        "تغییرات با واتس‌اپ یا تلگرام — بدون پنل، بدون ورود",
        "تیتر، متن، عکس و همه‌چیز دیگر با پیام",
        "پیش‌نمایش قبل از هر تغییر — آنلاین فقط بعد از تأیید شما",
        "یک نفر چک می‌کند؛ اگر چت کافی نبود با ما حرف می‌زنید",
        "آماده‌سازی برای گوگل و گوگل مپ · پشتیبانی شامل",
      ],
      ar: [
        "موقع خلال أيام — ثم الدعم بالدردشة",
        "تعديلات عبر واتساب أو تيليجرام — بلا لوحة تحكم وبلا تسجيل دخول",
        "العناوين والنصوص والصور وكل شيء آخر برسالة",
        "معاينة قبل كل تعديل — لا يُنشر إلا بعد تأكيدك",
        "يراجع شخص معك؛ وإن لم تكفِ الدردشة تتحدث معنا",
        "تجهيز لجوجل وخرائط جوجل · الدعم مشمول",
      ],
    },
    cta: {
      de: "Jetzt anfragen",
      en: "Get in touch",
      fa: "درخواست بدهید",
      ar: "تواصل معنا",
    },
    href: "#contact",
  },
  {
    id: "custom",
    icon: Building2,
    metaIcon: PhoneCall,
    tag: { de: "Mit persönlicher Beratung", en: "With personal consultation", fa: "با مشاوره‌ی شخصی", ar: "مع استشارة شخصية" },
    name: {
      de: "Professionelle Website",
      en: "Professional Website",
      fa: "وب‌سایت حرفه‌ای",
      ar: "موقع احترافي",
    },
    audience: {
      de: "Für größere und komplexere Websites – mit Beratung",
      en: "For larger, more complex websites — with consultation",
      fa: "برای وب‌سایت‌های بزرگ‌تر و پیچیده‌تر — با مشاوره",
      ar: "للمواقع الأكبر والأعقد — مع استشارة",
    },
    priceHeadline: {
      de: "Preis nach Beratung",
      en: "Price after consultation",
      fa: "قیمت بعد از مشاوره",
      ar: "السعر بعد الاستشارة",
    },
    priceNote: {
      de: "Ohne Gespräch können wir keinen Preis nennen. Schreiben Sie uns über das Formular – oder per WhatsApp, Telegram oder E-Mail.",
      en: "We cannot quote a price without a conversation. Write to us via the form — or on WhatsApp, Telegram or email.",
      fa: "بدون گفتگو نمی‌توانیم قیمت بدهیم. از فرم بنویسید — یا واتس‌اپ، تلگرام یا ایمیل.",
      ar: "لا يمكننا ذكر سعر دون حديث. اكتب لنا عبر النموذج — أو واتساب أو تيليجرام أو البريد.",
    },
    meta: {
      de: "Erst Beratung, dann Angebot",
      en: "Consultation first, then a quote",
      fa: "اول مشاوره، بعد پیشنهاد",
      ar: "استشارة أولًا ثم عرض سعر",
    },
    features: {
      de: [
        "Persönliche Beratung – Preis und Umfang danach",
        "Individuelles Design, passend zu Ihrer Marke",
        "Funktionen, die ein größeres Projekt braucht",
        "Schnelle Website, eingerichtet für Google und Google Maps",
        "Mehrsprachig – inkl. RTL (DE / EN / FA / AR)",
        "Fester Ansprechpartner – nicht nur Chat",
      ],
      en: [
        "Personal consultation — price and scope after that",
        "Individual design, tailored to your brand",
        "Features a larger project actually needs",
        "Fast website, set up for Google and Google Maps",
        "Multilingual — incl. RTL (DE / EN / FA / AR)",
        "A dedicated contact — not just chat",
      ],
      fa: [
        "مشاوره‌ی شخصی — قیمت و دامنه بعد از آن",
        "طراحی اختصاصی، متناسب با برند شما",
        "امکاناتی که پروژه‌ی بزرگ‌تر واقعاً لازم دارد",
        "وب‌سایت سریع، آماده‌شده برای گوگل و گوگل مپ",
        "چندزبانه، شامل راست‌به‌چپ (DE / EN / FA / AR)",
        "مسئول ارتباط ثابت — فقط چت نیست",
      ],
      ar: [
        "استشارة شخصية — السعر والنطاق بعدها",
        "تصميم مخصّص يناسب علامتك",
        "ميزات يحتاجها مشروع أكبر فعلًا",
        "موقع سريع مجهّز لجوجل وخرائط جوجل",
        "متعدد اللغات — بما فيها RTL (DE / EN / FA / AR)",
        "جهة اتصال ثابتة — ليست الدردشة فقط",
      ],
    },
    cta: {
      de: "Kostenlose Beratung anfragen",
      en: "Request a free consultation",
      fa: "درخواست مشاوره رایگان",
      ar: "اطلب استشارة مجانية",
    },
    href: "#contact",
  },
];

export const SOLUTIONS_COPY = {
  badge: {
    de: "Lösungen",
    en: "Solutions",
    fa: "راهکارها",
    ar: "الحلول",
  } satisfies L,
  title: {
    de: "Die passende Lösung für Ihr Unternehmen",
    en: "The right solution for your business",
    fa: "راهکار مناسب کسب‌وکار شما",
    ar: "الحل المناسب لنشاطك",
  } satisfies L,
  subtitle: {
    de: "Kleine Betriebe starten ab 699 €. Für größere Projekte nennen wir den Preis erst nach einem Gespräch.",
    en: "Small businesses start from €699. For larger projects we name the price only after a conversation.",
    fa: "کسب‌وکارهای کوچک از ۶۹۹ یورو شروع می‌شوند. برای پروژه‌های بزرگ‌تر قیمت را فقط بعد از گفتگو می‌گوییم.",
    ar: "تبدأ الأنشطة الصغيرة من 699 €. وللمشاريع الأكبر نذكر السعر بعد الحديث فقط.",
  } satisfies L,
  note: {
    de: "Unsicher, was zu Ihnen passt? Schreiben Sie uns über das Formular – oder per WhatsApp, Telegram oder E-Mail.",
    en: "Not sure which fits? Write to us via the form — or on WhatsApp, Telegram or email.",
    fa: "مطمئن نیستید کدام مناسب است؟ از فرم بنویسید — یا واتس‌اپ، تلگرام یا ایمیل.",
    ar: "لست متأكدًا أيهما يناسبك؟ اكتب عبر النموذج — أو واتساب أو تيليجرام أو البريد.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  How it works                                                       */
/* ------------------------------------------------------------------ */
export const STEPS: { icon: LucideIcon; title: L; text: L }[] = [
  {
    icon: MessageCircle,
    title: {
      de: "Schreiben Sie uns",
      en: "Message us",
      fa: "برای ما بنویسید",
      ar: "راسلنا",
    },
    text: {
      de: "WhatsApp, Telegram oder das Formular unten – sagen Sie uns, was Sie brauchen.",
      en: "WhatsApp, Telegram or the form below — tell us what you need.",
      fa: "واتس‌اپ، تلگرام یا فرم پایین — بگویید چه می‌خواهید.",
      ar: "واتساب أو تيليجرام أو النموذج أدناه — أخبرنا بما تحتاجه.",
    },
  },
  {
    icon: Wand2,
    title: {
      de: "Wir bauen Ihre Website",
      en: "We build your website",
      fa: "ما وب‌سایتتان را می‌سازیم",
      ar: "نبني موقعك",
    },
    text: {
      de: "Unser Team baut Ihre Website in wenigen Tagen, für Google und Google Maps. Kein wochenlanges Warten.",
      en: "Our team builds your website in a few days, for Google and Google Maps. No weeks of waiting.",
      fa: "تیم ما وب‌سایت را در چند روز می‌سازد، برای گوگل و گوگل مپ. بدون هفته‌ها انتظار.",
      ar: "يبني فريقنا موقعك خلال أيام، لجوجل وخرائط جوجل. دون انتظار أسابيع.",
    },
  },
  {
    icon: Eye,
    title: {
      de: "Vorschau, dann Bestätigung",
      en: "Preview, then confirm",
      fa: "پیش‌نمایش، بعد تأیید",
      ar: "معاينة ثم تأكيد",
    },
    text: {
      de: "Sie sehen die Seite zuerst als Vorschau. Erst wenn Sie bestätigen, geht sie live.",
      en: "You see the site as a preview first. It goes live only when you confirm.",
      fa: "اول سایت را به‌صورت پیش‌نمایش می‌بینید. فقط وقتی تأیید کنید، آنلاین می‌شود.",
      ar: "ترى الموقع أولًا كمعاينة. ولا يصبح مباشرًا إلا عندما تؤكّد.",
    },
  },
  {
    icon: UserRound,
    title: {
      de: "Danach per Chat aktuell halten",
      en: "Keep it current by chat",
      fa: "بعد از آن با چت به‌روز بماند",
      ar: "أبقِه محدَّثًا بالدردشة",
    },
    text: {
      de: "Titel, Texte, Bilder – alles per Nachricht. Ein Mensch prüft mit. Reicht der Chat nicht, sprechen Sie mit uns.",
      en: "Headlines, copy, images — everything by message. A person reviews with you. If chat isn’t enough, you talk to us.",
      fa: "تیتر، متن، عکس — همه‌چیز با پیام. یک نفر چک می‌کند. اگر چت کافی نبود، با ما حرف می‌زنید.",
      ar: "العناوين والنصوص والصور — كل شيء برسالة. يراجع شخص معك. وإن لم تكفِ الدردشة، تتحدث معنا.",
    },
  },
];

export const HOW_COPY = {
  badge: {
    de: "So funktioniert’s",
    en: "How It Works",
    fa: "روند کار",
    ar: "كيف يعمل",
  } satisfies L,
  title: {
    de: "In wenigen Tagen online – danach per Chat aktuell",
    en: "Live in days, updated by chat",
    fa: "در چند روز آنلاین، با چت همیشه به‌روز",
    ar: "على الإنترنت خلال أيام، ومحدَّث بالدردشة",
  } satisfies L,
  subtitle: {
    de: "Wir bauen Ihre Website in wenigen Tagen. Danach halten Sie sie per WhatsApp oder Telegram aktuell – mit Vorschau, Ihrer Bestätigung und einem Menschen, der mitprüft.",
    en: "We build your website in a few days. After that you keep it current via WhatsApp or Telegram — with a preview, your confirmation, and a person who reviews with you.",
    fa: "وب‌سایت را در چند روز می‌سازیم. بعد با واتس‌اپ یا تلگرام به‌روز می‌ماند — با پیش‌نمایش، تأیید شما، و کسی که همراهتان چک می‌کند.",
    ar: "نبني موقعك خلال أيام. وبعدها تُبقيه محدَّثًا عبر واتساب أو تيليجرام — مع معاينة وتأكيدك وشخص يراجع معك.",
  } satisfies L,
  step: {
    de: "Schritt",
    en: "Step",
    fa: "مرحله",
    ar: "الخطوة",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Google Maps & Google                                               */
/* ------------------------------------------------------------------ */
export const LOCAL_FIND = {
  badge: {
    de: "Google & Google Maps",
    en: "Google & Google Maps",
    fa: "گوگل و گوگل مپ",
    ar: "جوجل وخرائط جوجل",
  } satisfies L,
  title: {
    de: "Google Maps: drei Kriterien",
    en: "Google Maps: three criteria",
    fa: "گوگل مپ: سه معیار",
    ar: "خرائط جوجل: ثلاثة معايير",
  } satisfies L,
  subtitle: {
    de: "Sucht jemand in der Nähe nach einem Klempner, zeigt Google Maps lokale Betriebe. Drei Kriterien entscheiden, wer erscheint. Wir richten Website und Profil darauf aus – ein besseres Ranking können wir nicht garantieren.",
    en: "When someone nearby searches for a plumber, Google Maps shows local businesses. Three criteria decide who appears. We set up your site and profile for that — we cannot guarantee a better ranking.",
    fa: "وقتی کسی نزدیکش دنبال لوله‌کش می‌گردد، گوگل مپ کسب‌وکارهای محلی را نشان می‌دهد. سه معیار معلوم می‌کند چه کسی دیده شود. ما سایت و پروفایل را برای همین آماده می‌کنیم — بهتر شدن رتبه را تضمین نمی‌کنیم.",
    ar: "عندما يبحث أحدهم في الجوار عن سمكري، تعرض خرائط جوجل الأنشطة المحلية. ثلاثة معايير تقرّر من يظهر. نجهّز موقعك وملفك لذلك — ولا يمكننا ضمان ترتيب أفضل.",
  } satisfies L,
  example: {
    de: "Klempner in der Nähe",
    en: "Plumber nearby",
    fa: "لوله‌کش نزدیک من",
    ar: "سمكري قريب",
  } satisfies L,
  you: {
    de: "Sie",
    en: "You",
    fa: "شما",
    ar: "أنت",
  } satisfies L,
  factors: [
    {
      icon: MapPin,
      title: {
        de: "Entfernung",
        en: "Distance",
        fa: "فاصله",
        ar: "المسافة",
      } satisfies L,
      text: {
        de: "Google zeigt vor allem Betriebe in der Nähe der suchenden Person. Die Lage Ihres Betriebs können wir nicht ändern – sie ist eines der drei Kriterien.",
        en: "Google mainly shows businesses near the person searching. We cannot change where you are — location is one of the three criteria.",
        fa: "گوگل بیشتر کسب‌وکارهای نزدیکِ همان فردی را نشان می‌دهد که جستجو می‌کند. جای کسب‌وکار شما را عوض نمی‌کنیم — فاصله یکی از همان سه معیار است.",
        ar: "يعرض جوجل أساسًا الأنشطة القريبة ممن يبحث. لا يمكننا تغيير موقعك — والمسافة أحد المعايير الثلاثة.",
      } satisfies L,
    },
    {
      icon: Star,
      title: {
        de: "Bewertungen",
        en: "Reviews & ratings",
        fa: "نظر و امتیاز",
        ar: "التقييمات",
      } satisfies L,
      text: {
        de: "Wie bekannt ein Betrieb ist, hängt unter anderem von echten Bewertungen und der Sternezahl ab. Mehr und bessere Bewertungen können die Sichtbarkeit stützen.",
        en: "How well-known a business is depends in part on real reviews and star ratings. More and better reviews can support visibility.",
        fa: "شناخته‌شدن یک کسب‌وکار تا حدی به نظرهای واقعی و تعداد ستاره‌ها بستگی دارد. نظر بیشتر و بهتر می‌تواند به دیده‌شدن کمک کند.",
        ar: "مدى شهرة النشاط يعتمد جزئيًا على التقييمات الحقيقية وعدد النجوم. المزيد من التقييمات الأفضل يمكن أن يدعم الظهور.",
      } satisfies L,
    },
    {
      icon: BadgeCheck,
      title: {
        de: "Vollständige Angaben",
        en: "Complete business info",
        fa: "اطلاعات کامل کسب‌وکار",
        ar: "بيانات النشاط الكاملة",
      } satisfies L,
      text: {
        de: "Google prüft, wie gut ein Eintrag zur Suche passt. Adresse, Telefon, Öffnungszeiten, Kategorie und Website müssen stimmen und zusammenpassen. Genau das richten wir auf Ihrer Seite ein.",
        en: "Google checks how well a listing matches the search. Address, phone, hours, category and website must be accurate and consistent. That is what we set up on your site.",
        fa: "گوگل می‌سنجد فهرست چقدر با جستجو جور است. آدرس، تلفن، ساعت کاری، دسته و وب‌سایت باید درست و هم‌خوان باشند. همین‌ها را روی سایت شما می‌چینیم.",
        ar: "يتحقق جوجل من مدى مطابقة الملف للبحث. يجب أن يكون العنوان والهاتف وساعات العمل والفئة والموقع دقيقة ومتسقة. وهذا ما نضبطه على موقعك.",
      } satisfies L,
    },
  ],
  disclaimer: {
    de: "Ein besseres Ranking auf Google oder Google Maps können wir nicht garantieren – lokale Platzierungen lassen sich nicht kaufen. Wir setzen Adresse, Öffnungszeiten und die übrigen Angaben so vollständig wie möglich und tun unser Bestes.",
    en: "We cannot guarantee a better ranking on Google or Google Maps — local placement cannot be bought. We fill in address, hours and the rest as completely as possible, and we do our best.",
    fa: "بهتر شدن رتبه در گوگل یا گوگل مپ را تضمین نمی‌کنیم — جایگاه محلی خریدنی نیست. آدرس، ساعت کاری و بقیه‌ی اطلاعات را تا جای ممکن کامل می‌چینیم و تمام تلاشمان را می‌کنیم.",
    ar: "لا يمكننا ضمان ترتيب أفضل على جوجل أو خرائط جوجل — ولا يمكن شراء الظهور المحلي. نُكمل العنوان وساعات العمل وبقية البيانات قدر الإمكان ونبذل أقصى جهدنا.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Features                                                           */
/* ------------------------------------------------------------------ */
export type FeatureId = "ai" | "seo" | "i18n" | "geo";

export const FEATURES: {
  id: FeatureId;
  icon: LucideIcon;
  title: L;
  text: L;
}[] = [
  {
    id: "ai",
    icon: Sparkles,
    title: { de: "KI-Content-Generator", en: "AI Content Generator", fa: "تولیدکننده‌ی محتوای هوشمند", ar: "مولّد المحتوى بالذكاء الاصطناعي" },
    text: {
      de: "Headlines, Produkttexte und Blog-Entwürfe in Ihrer Markenstimme – auf Deutsch, Englisch, Persisch oder Arabisch.",
      en: "Headlines, product copy and blog drafts written in your brand voice — in German, English, Persian or Arabic.",
      fa: "تیتر، متن محصول و پیش‌نویس مقاله با لحن برند شما، به آلمانی، انگلیسی، فارسی یا عربی.",
      ar: "عناوين ونصوص منتجات ومسودات مقالات بنبرة علامتك — بالألمانية أو الإنجليزية أو الفارسية أو العربية.",
    },
  },
  {
    id: "seo",
    icon: Gauge,
    title: { de: "Blitzschnelle SEO-Optimierung", en: "Lightning SEO Optimization", fa: "بهینه‌سازی سئوی لحظه‌ای", ar: "تحسين SEO فائق السرعة" },
    text: {
      de: "Sauberes Markup, automatische Sitemaps, Schema, Bildkomprimierung und optimierte Core Web Vitals – direkt ab Werk.",
      en: "Clean markup, auto sitemaps, schema, image compression and Core Web Vitals tuned out of the box.",
      fa: "کد تمیز، نقشه‌ی سایت خودکار، اسکیما، فشرده‌سازی تصویر و Core Web Vitals بهینه از همان ابتدا.",
      ar: "كود نظيف وخرائط موقع تلقائية وSchema وضغط للصور وCore Web Vitals مضبوطة من البداية.",
    },
  },
  {
    id: "i18n",
    icon: Languages,
    title: { de: "Mehrsprachigkeit", en: "Multilingual Support", fa: "پشتیبانی چندزبانه", ar: "دعم متعدد اللغات" },
    text: {
      de: "Echte RTL- und LTR-Layouts. Starten Sie auf Deutsch, Englisch, Persisch, Arabisch und mehr – mit KI-Übersetzung per Klick.",
      en: "True RTL & LTR layouts. Launch in German, English, Persian, Arabic and more with one-click AI translation.",
      fa: "چیدمان واقعی راست‌به‌چپ و چپ‌به‌راست. با ترجمه‌ی یک‌کلیکی، به آلمانی، انگلیسی، فارسی، عربی و بیشتر منتشر کنید.",
      ar: "تخطيطات حقيقية من اليمين إلى اليسار ومن اليسار إلى اليمين. أطلق موقعك بالألمانية والإنجليزية والفارسية والعربية وغيرها بترجمة بالذكاء الاصطناعي بنقرة واحدة.",
    },
  },
  {
    id: "geo",
    icon: Search,
    title: {
      de: "Bereit für ChatGPT & KI-Suche",
      en: "ChatGPT & AI Search Ready",
      fa: "آماده‌ی ChatGPT و جستجوی هوشمند",
      ar: "جاهز لـ ChatGPT والبحث بالذكاء الاصطناعي",
    },
    text: {
      de: "Strukturierte Daten und llms.txt helfen KI-Assistenten, Ihr Unternehmen zu verstehen und zu empfehlen.",
      en: "Structured data and llms.txt help AI assistants understand and recommend your business.",
      fa: "داده‌ی ساختاریافته و llms.txt کمک می‌کند دستیارهای هوشمند کسب‌وکار شما را بفهمند و معرفی کنند.",
      ar: "تساعد البيانات المنظمة وملف llms.txt مساعدي الذكاء الاصطناعي على فهم نشاطك والتوصية به.",
    },
  },
];

export const FEATURES_COPY = {
  badge: { de: "Plattform-Funktionen", en: "Platform Features", fa: "امکانات پلتفرم", ar: "مميزات المنصة" } satisfies L,
  title: {
    de: "Alles, was Sie online zum Erfolg brauchen",
    en: "Everything you need to win online",
    fa: "هر چه برای موفقیت آنلاین لازم دارید",
    ar: "كل ما تحتاجه للنجاح على الإنترنت",
  } satisfies L,
  subtitle: {
    de: "Eine Plattform für Design, Inhalte, SEO und Wachstum – vom ersten Klick an KI-gestützt.",
    en: "One platform for design, content, SEO and growth — powered by AI from the first click.",
    fa: "یک پلتفرم برای طراحی، محتوا، سئو و رشد؛ با هوش مصنوعی از همان کلیک اول.",
    ar: "منصة واحدة للتصميم والمحتوى وSEO والنمو — مدعومة بالذكاء الاصطناعي منذ أول نقرة.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */
export const FAQS: { q: L; a: L }[] = [
  {
    q: {
      de: "Was ist der Unterschied zwischen kleinen Betrieben und größeren Projekten?",
      en: "What’s the difference between small businesses and larger projects?",
      fa: "تفاوت کسب‌وکار کوچک با پروژه‌ی بزرگ‌تر چیست؟",
      ar: "ما الفرق بين الأنشطة الصغيرة والمشاريع الأكبر؟",
    },
    a: {
      de: "Kleine Betriebe starten ab 699 €, plus 49 € im Monat mit Support. Größere, komplexere Projekte brauchen ein Gespräch – ohne das können wir keinen Preis nennen. Schreiben Sie uns über das Formular, WhatsApp, Telegram oder E-Mail.",
      en: "Small businesses start from €699, plus €49 a month with support. Larger, more complex projects need a conversation — we cannot quote a price without it. Write via the form, WhatsApp, Telegram or email.",
      fa: "کسب‌وکارهای کوچک از ۶۹۹ یورو شروع می‌شوند، به‌علاوه ۴۹ یورو در ماه با پشتیبانی. پروژه‌های بزرگ‌تر و پیچیده‌تر گفتگو می‌خواهند — بدون آن قیمت نمی‌دهیم. از فرم، واتس‌اپ، تلگرام یا ایمیل بنویسید.",
      ar: "تبدأ الأنشطة الصغيرة من 699 €، إضافة إلى 49 € شهريًا مع الدعم. المشاريع الأكبر والأعقد تحتاج حديثًا — ولا نستطيع ذكر سعر دونه. اكتب عبر النموذج أو واتساب أو تيليجرام أو البريد.",
    },
  },
  {
    q: {
      de: "Was kostet die Website für kleine Betriebe?",
      en: "What does a website for small businesses cost?",
      fa: "وب‌سایت برای کسب‌وکار کوچک چقدر است؟",
      ar: "كم يكلف موقع الأنشطة الصغيرة؟",
    },
    a: {
      de: "Ab 699 €, plus 49 € im Monat. Support ist inklusive. Für größere Projekte nennen wir den Preis erst nach einem Gespräch.",
      en: "From €699, plus €49 a month. Support is included. For larger projects we name the price only after a conversation.",
      fa: "از ۶۹۹ یورو، به‌علاوه ۴۹ یورو در ماه. پشتیبانی شامل است. برای پروژه‌های بزرگ‌تر قیمت را فقط بعد از گفتگو می‌گوییم.",
      ar: "ابتداءً من 699 €، إضافة إلى 49 € شهريًا. الدعم مشمول. وللمشاريع الأكبر نذكر السعر بعد الحديث فقط.",
    },
  },
  {
    q: {
      de: "Kann ich meine bestehende Domain übernehmen?",
      en: "Can I transfer my existing domain?",
      fa: "آیا می‌توانم دامنه‌ی فعلی‌ام را منتقل کنم؟",
      ar: "هل يمكنني نقل نطاقي الحالي؟",
    },
    a: {
      de: "Ja. Sie können Ihre Domain beim bisherigen Anbieter lassen und nur die DNS-Einträge auf uns zeigen lassen oder sie vollständig umziehen. Die technischen Schritte übernehmen wir – ohne Ausfallzeit beim Wechsel.",
      en: "Yes. Keep your domain where it is and simply point the DNS to us, or transfer it fully. We handle the technical steps and guarantee zero downtime during the switch.",
      fa: "بله. می‌توانید دامنه را همان‌جا نگه دارید و فقط DNS را به ما وصل کنید یا آن را کامل منتقل کنید. مراحل فنی با ما است و جابه‌جایی بدون وقفه انجام می‌شود.",
      ar: "نعم. يمكنك إبقاء نطاقك لدى مزوّده الحالي وتوجيه سجلات DNS إلينا فقط، أو نقله بالكامل. نتولى الخطوات التقنية دون أي توقف أثناء الانتقال.",
    },
  },
  {
    q: {
      de: "Wie lange dauert es, bis meine Website online ist?",
      en: "How long until my website is online?",
      fa: "چقدر طول می‌کشد تا وب‌سایتم آنلاین شود؟",
      ar: "كم يستغرق حتى يصبح موقعي مباشرًا؟",
    },
    a: {
      de: "Nur wenige Tage – nicht Wochen. Unser Team baut Ihre erste Website für Sie. Danach ist easyWebBuilder Ihr Draht zu uns: Änderungen und Support laufen bequem per WhatsApp oder Telegram.",
      en: "Just a few days — not weeks. Our team builds your first website for you. After that, easyWebBuilder is your line to us: changes and support run conveniently via WhatsApp or Telegram.",
      fa: "فقط چند روز، نه چند هفته. تیم ما وب‌سایت اولیه‌ی شما را می‌سازد. بعد از آن easyWebBuilder راه ارتباطی شما با ماست: تغییرات و پشتیبانی راحت با واتس‌اپ یا تلگرام انجام می‌شود.",
      ar: "أيام قليلة فقط، لا أسابيع. يبني فريقنا موقعك الأول لك. وبعدها يصبح easyWebBuilder قناة تواصلك معنا: التعديلات والدعم عبر واتساب أو تيليجرام بكل سهولة.",
    },
  },
  {
    q: {
      de: "Wie ändere ich meine Website per Chat?",
      en: "How do I change my website via chat?",
      fa: "چطور وب‌سایتم را با چت تغییر بدهم؟",
      ar: "كيف أغيّر موقعي عبر الدردشة؟",
    },
    a: {
      de: "Schreiben Sie auf WhatsApp oder Telegram, wie Sie einer Kollegin schreiben würden – neuer Titel, anderer Text, neues Foto, was Sie wollen. Sie bekommen eine Vorschau. Erst wenn Sie bestätigen, geht die Änderung live. Ein Mensch prüft mit. Ohne Panel, ohne Login. Sie können das kostenlos in Telegram ausprobieren.",
      en: "Write on WhatsApp or Telegram as you would to a colleague — a new headline, different copy, a new photo, whatever you need. You get a preview. The change goes live only when you confirm. A person reviews with you. No dashboard, no login. You can try it free on Telegram.",
      fa: "در واتس‌اپ یا تلگرام همان‌طور بنویسید که به همکار می‌نویسید — تیتر جدید، متن دیگر، عکس تازه، هر چه بخواهید. پیش‌نمایش می‌آید. فقط وقتی تأیید کنید، آنلاین می‌شود. یک نفر چک می‌کند. بدون پنل، بدون ورود. می‌توانید رایگان در تلگرام تست کنید.",
      ar: "اكتب على واتساب أو تيليجرام كما تكتب لزميل — عنوان جديد أو نص مختلف أو صورة جديدة، ما شئت. تصلك معاينة. ولا يُنشر التعديل إلا بعد تأكيدك. يراجع شخص معك. بلا لوحة تحكم وبلا تسجيل دخول. ويمكنك تجربته مجانًا على تيليجرام.",
    },
  },
  {
    q: {
      de: "Können Sie uns auf Google Maps nach oben bringen?",
      en: "Can you get us higher on Google Maps?",
      fa: "می‌توانید ما را در گوگل مپ بالاتر بیاورید؟",
      ar: "هل يمكنكم رفعنا على خرائط جوجل؟",
    },
    a: {
      de: "Wir richten Website und Profil nach den drei Kriterien von Google ein: Entfernung, Bewertungen und vollständige Angaben (Adresse, Öffnungszeiten, Kategorie, Website). Ein besseres Ranking können wir nicht garantieren – lokale Platzierungen lassen sich nicht kaufen. Wir tun unser Bestes.",
      en: "We set up your site and profile around Google’s three criteria: distance, reviews and complete information (address, hours, category, website). We cannot guarantee a better ranking — local placement cannot be bought. We do our best.",
      fa: "سایت و پروفایل را بر اساس سه معیار گوگل آماده می‌کنیم: فاصله، نظرها، و اطلاعات کامل (آدرس، ساعت کاری، دسته، وب‌سایت). بهتر شدن رتبه را تضمین نمی‌کنیم — جایگاه محلی خریدنی نیست. تمام تلاشمان را می‌کنیم.",
      ar: "نجهّز موقعك وملفك وفق معايير جوجل الثلاثة: المسافة والتقييمات والبيانات الكاملة (العنوان وساعات العمل والفئة والموقع). لا يمكننا ضمان ترتيب أفضل — ولا يمكن شراء الظهور المحلي. نبذل أقصى جهدنا.",
    },
  },
  {
    q: {
      de: "Funktioniert meine Website auch gut auf dem Smartphone?",
      en: "Will my website work well on mobile?",
      fa: "آیا سایت من روی موبایل خوب نمایش داده می‌شود؟",
      ar: "هل سيعمل موقعي جيدًا على الجوال؟",
    },
    a: {
      de: "Selbstverständlich. Alle Websites sind mobile-first entwickelt und auf echten Geräten getestet – Layout, Menüs und Checkout fühlen sich auf Smartphone und Tablet nativ an.",
      en: "Absolutely. Every website is designed mobile-first and tested on real devices, so layouts, menus and checkout flows feel native on phones and tablets.",
      fa: "قطعاً. همه‌ی سایت‌ها موبایل‌محور طراحی و روی دستگاه‌های واقعی تست شده‌اند؛ چیدمان، منو و فرایند خرید روی موبایل و تبلت کاملاً روان است.",
      ar: "بالتأكيد. صُمّمت كل المواقع بمبدأ الجوال أولًا واختُبرت على أجهزة حقيقية، فتبدو التخطيطات والقوائم ومسار الدفع طبيعية على الهواتف واللوحيات.",
    },
  },
  {
    q: {
      de: "Wie schnell wird meine Website sein?",
      en: "How fast will my website be?",
      fa: "سرعت سایت من چقدر خواهد بود؟",
      ar: "ما مدى سرعة موقعي؟",
    },
    a: {
      de: "Die Websites werden über ein globales CDN mit optimierten Bildern, minimalem JavaScript und modernem Caching ausgeliefert. Die meisten unserer Seiten erreichen 95–100 Punkte bei Google PageSpeed.",
      en: "Sites are served from a global CDN with optimized images, minimal JavaScript and modern caching. Most of our sites score 95–100 on Google PageSpeed.",
      fa: "سایت‌ها از طریق CDN جهانی، با تصاویر بهینه، حداقل جاوااسکریپت و کش مدرن ارائه می‌شوند. بیشتر سایت‌های ما امتیاز ۹۵ تا ۱۰۰ در PageSpeed گوگل می‌گیرند.",
      ar: "تُقدَّم المواقع عبر شبكة CDN عالمية مع صور محسّنة وحد أدنى من JavaScript وتخزين مؤقت حديث. تحصل معظم مواقعنا على 95–100 في Google PageSpeed.",
    },
  },
  {
    q: {
      de: "Was passiert nach dem Launch? Gibt es Support?",
      en: "What happens after launch? Do you offer support?",
      fa: "بعد از راه‌اندازی چه می‌شود؟ پشتیبانی دارید؟",
      ar: "ماذا يحدث بعد الإطلاق؟ هل تقدمون دعمًا؟",
    },
    a: {
      de: "Ja. Änderungen und Support laufen über WhatsApp oder Telegram. Jede Änderung wird von einem Menschen mitgeprüft. Wenn der Chat nicht reicht, sprechen Sie direkt mit uns. Support ist inklusive.",
      en: "Yes. Changes and support run via WhatsApp or Telegram. A person reviews every change. If chat isn’t enough, you talk to us directly. Support is included.",
      fa: "بله. تغییرات و پشتیبانی از واتس‌اپ یا تلگرام است. هر تغییر را یک نفر چک می‌کند. اگر چت کافی نبود، مستقیم با ما حرف می‌زنید. پشتیبانی شامل است.",
      ar: "نعم. التعديلات والدعم عبر واتساب أو تيليجرام. يراجع شخص كل تعديل. وإن لم تكفِ الدردشة، تتحدث معنا مباشرة. الدعم مشمول.",
    },
  },
];

export const FAQ_COPY = {
  badge: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } satisfies L,
  title: {
    de: "Fragen? Wir haben die Antworten.",
    en: "Questions? We’ve got answers.",
    fa: "سوالی دارید؟ پاسخش اینجاست",
    ar: "لديك أسئلة؟ لدينا الإجابات.",
  } satisfies L,
  subtitle: {
    de: "Nicht fündig geworden? Fragen Sie uns einfach über das Formular unten.",
    en: "Can’t find what you’re looking for? Ask us anything in the form below.",
    fa: "پاسخ سوالتان را پیدا نکردید؟ از فرم پایین از ما بپرسید.",
    ar: "لم تجد ما تبحث عنه؟ اسألنا عن أي شيء عبر النموذج أدناه.",
  } satisfies L,
};

/* ------------------------------------------------------------------ */
/*  Lead form                                                          */
/* ------------------------------------------------------------------ */
export const SITE_TYPES: { id: string; label: L }[] = [
  { id: "landing", label: { de: "Landingpage", en: "Landing Page", fa: "لندینگ پیج", ar: "صفحة هبوط" } },
  { id: "corporate", label: { de: "Unternehmenswebsite", en: "Corporate Site", fa: "سایت شرکتی", ar: "موقع شركة" } },
  { id: "store", label: { de: "Online-Shop", en: "Online Store", fa: "فروشگاه اینترنتی", ar: "متجر إلكتروني" } },
  { id: "booking", label: { de: "Buchungsseite", en: "Booking Website", fa: "سایت رزرو", ar: "موقع حجوزات" } },
  { id: "portfolio", label: { de: "Portfolio", en: "Portfolio", fa: "نمونه‌کار", ar: "معرض أعمال" } },
  { id: "unsure", label: { de: "Noch unsicher", en: "Not sure yet", fa: "هنوز مطمئن نیستم", ar: "لست متأكدًا بعد" } },
];

export const LEAD_COPY = {
  badge: { de: "Kostenlose Beratung", en: "Free Consultation", fa: "مشاوره رایگان", ar: "استشارة مجانية" } satisfies L,
  title: {
    de: "Lassen Sie uns Ihre Website bauen – kostenlose Beratung",
    en: "Let’s build your website — free consultation",
    fa: "وب‌سایت‌تان را با هم بسازیم؛ مشاوره‌ی رایگان",
    ar: "لنبنِ موقعك معًا — استشارة مجانية",
  } satisfies L,
  subtitle: {
    de: "Erzählen Sie uns von Ihrem Projekt. Ohne Gespräch nennen wir keinen Preis – wir melden uns über das Formular, WhatsApp, Telegram oder E-Mail.",
    en: "Tell us about your project. We do not quote a price without a conversation — we reply via the form, WhatsApp, Telegram or email.",
    fa: "درباره‌ی پروژه‌تان بگویید. بدون گفتگو قیمت نمی‌دهیم — از فرم، واتس‌اپ، تلگرام یا ایمیل جواب می‌دهیم.",
    ar: "أخبرنا عن مشروعك. لا نذكر سعرًا دون حديث — نرد عبر النموذج أو واتساب أو تيليجرام أو البريد.",
  } satisfies L,
  perks: {
    de: ["WhatsApp, Telegram oder E-Mail", "Angebot erst nach dem Gespräch", "Völlig unverbindlich"],
    en: ["WhatsApp, Telegram or email", "A quote only after we talk", "No commitment"],
    fa: ["واتس‌اپ، تلگرام یا ایمیل", "پیشنهاد فقط بعد از گفتگو", "بدون هیچ تعهدی"],
    ar: ["واتساب أو تيليجرام أو البريد", "عرض سعر بعد الحديث فقط", "بلا أي التزام"],
  } satisfies LList,
  writeUs: {
    de: "Oder schreiben Sie uns direkt",
    en: "Or message us directly",
    fa: "یا مستقیم برای ما بنویسید",
    ar: "أو راسلنا مباشرة",
  } satisfies L,
  question: {
    de: "Welche Art von Website brauchen Sie?",
    en: "What type of website do you need?",
    fa: "چه نوع وب‌سایتی نیاز دارید؟",
    ar: "ما نوع الموقع الذي تحتاجه؟",
  } satisfies L,
  name: { de: "Vollständiger Name", en: "Full name", fa: "نام و نام خانوادگی", ar: "الاسم الكامل" } satisfies L,
  namePh: { de: "z. B. Anna Schmidt", en: "e.g. Sara Ahmadi", fa: "مثلاً سارا احمدی", ar: "مثال: سارة أحمد" } satisfies L,
  phone: { de: "Telefon / WhatsApp", en: "Phone / WhatsApp", fa: "شماره تماس / واتس‌اپ", ar: "الهاتف / واتساب" } satisfies L,
  phonePh: { de: "+49 170 0000000", en: "+49 170 0000000", fa: "۰۹۱۲ ۰۰۰ ۰۰۰۰", ar: "+49 170 0000000" } satisfies L,
  email: { de: "E-Mail", en: "Email", fa: "ایمیل", ar: "البريد الإلكتروني" } satisfies L,
  emailPh: { de: "sie@firma.de", en: "you@company.com", fa: "you@company.com", ar: "you@company.com" } satisfies L,
  message: {
    de: "Erzählen Sie uns von Ihrem Projekt (optional)",
    en: "Tell us about your project (optional)",
    fa: "درباره‌ی پروژه‌تان بنویسید (اختیاری)",
    ar: "حدّثنا عن مشروعك (اختياري)",
  } satisfies L,
  messagePh: {
    de: "Was macht Ihr Unternehmen? Wer sind Ihre Kunden?",
    en: "What does your business do? Who are your customers?",
    fa: "کسب‌وکارتان چه می‌کند؟ مشتریانتان چه کسانی هستند؟",
    ar: "ما هو نشاط عملك؟ ومن هم عملاؤك؟",
  } satisfies L,
  submit: {
    de: "Kostenlose Beratung anfordern",
    en: "Get My Free Consultation",
    fa: "دریافت مشاوره‌ی رایگان",
    ar: "احصل على استشارتي المجانية",
  } satisfies L,
  sending: { de: "Wird gesendet …", en: "Sending…", fa: "در حال ارسال…", ar: "جارٍ الإرسال…" } satisfies L,
  privacy: {
    de: "Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu. Wir respektieren Ihre Privatsphäre – kein Spam, versprochen.",
    en: "I agree to my details being used to contact me. We respect your privacy. No spam, ever.",
    fa: "با استفاده از اطلاعاتم برای تماس موافقم. به حریم خصوصی شما احترام می‌گذاریم و هرگز اسپم نمی‌فرستیم.",
    ar: "أوافق على استخدام بياناتي للتواصل معي. نحترم خصوصيتك ولا نرسل رسائل مزعجة أبدًا.",
  } satisfies L,
  successTitle: {
    de: "Vielen Dank – wir kümmern uns darum!",
    en: "Thank you — we’re on it!",
    fa: "ممنون، درخواستتان ثبت شد!",
    ar: "شكرًا لك — نحن على الأمر!",
  } satisfies L,
  successText: {
    de: "Unser Team meldet sich innerhalb von 24 Stunden bei Ihnen.",
    en: "Our team will reach out within 24 hours.",
    fa: "تیم ما ظرف ۲۴ ساعت با شما تماس می‌گیرد.",
    ar: "سيتواصل معك فريقنا خلال 24 ساعة.",
  } satisfies L,
  another: {
    de: "Weitere Anfrage senden",
    en: "Send another request",
    fa: "ارسال درخواست جدید",
    ar: "إرسال طلب آخر",
  } satisfies L,
  errors: {
    name: {
      de: "Bitte geben Sie Ihren Namen ein.",
      en: "Please enter your name.",
      fa: "لطفاً نام خود را وارد کنید.",
      ar: "يرجى إدخال اسمك.",
    } satisfies L,
    contact: {
      de: "Geben Sie eine Telefonnummer oder E-Mail an, damit wir Sie erreichen.",
      en: "Add a phone number or an email so we can reach you.",
      fa: "برای ارتباط، شماره تماس یا ایمیل وارد کنید.",
      ar: "أضف رقم هاتف أو بريدًا إلكترونيًا لنتمكن من التواصل معك.",
    } satisfies L,
    email: {
      de: "Diese E-Mail-Adresse scheint nicht zu stimmen.",
      en: "This email doesn’t look right.",
      fa: "فرمت ایمیل درست نیست.",
      ar: "يبدو أن هذا البريد الإلكتروني غير صحيح.",
    } satisfies L,
    server: {
      de: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
      en: "Something went wrong. Please try again.",
      fa: "مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
      ar: "حدث خطأ ما. يرجى المحاولة مرة أخرى.",
    } satisfies L,
  },
};

/* ------------------------------------------------------------------ */
/*  Footer                                                             */
/* ------------------------------------------------------------------ */
export const FOOTER = {
  tagline: {
    de: "Websites für kleine und große Betriebe – per Chat gepflegt oder nach Beratung individuell gebaut.",
    en: "Websites for small and large businesses — maintained by chat, or built individually after a consultation.",
    fa: "وب‌سایت برای کسب‌وکار کوچک و بزرگ؛ با چت به‌روز، یا بعد از مشاوره به‌صورت اختصاصی.",
    ar: "مواقع للأنشطة الصغيرة والكبيرة — تُدار بالدردشة أو تُبنى خصيصًا بعد استشارة.",
  } satisfies L,
  columns: [
    {
      title: { de: "Produkt", en: "Product", fa: "محصول", ar: "المنتج" } satisfies L,
      links: [
        { label: { de: "Referenzen", en: "Showcases", fa: "نمونه‌کارها", ar: "نماذج الأعمال" } satisfies L, href: "#showcase" },
        { label: { de: "Branchen", en: "Industries", fa: "صنعت‌ها", ar: "القطاعات" } satisfies L, href: "#templates" },
        { label: { de: "Lösungen", en: "Solutions", fa: "راهکارها", ar: "الحلول" } satisfies L, href: "#solutions" },
        { label: { de: "Kostenlos testen", en: "Try it free", fa: "تست رایگان", ar: "جرّب مجانًا" } satisfies L, href: "#try" },
        { label: { de: "Google Maps", en: "Google Maps", fa: "گوگل مپ", ar: "خرائط جوجل" } satisfies L, href: "#maps" },
      ],
    },
    {
      title: { de: "Unternehmen", en: "Company", fa: "شرکت", ar: "الشركة" } satisfies L,
      links: [
        { label: { de: "So funktioniert’s", en: "How It Works", fa: "روند کار", ar: "كيف يعمل" } satisfies L, href: "#how" },
        { label: { de: "FAQ", en: "FAQ", fa: "سوالات متداول", ar: "الأسئلة الشائعة" } satisfies L, href: "#faq" },
        { label: { de: "Kontakt", en: "Contact", fa: "تماس با ما", ar: "اتصل بنا" } satisfies L, href: "#contact" },
        { label: { de: "Login", en: "Log in", fa: "ورود", ar: "تسجيل الدخول" } satisfies L, href: "/login" },
      ],
    },
    {
      title: { de: "Rechtliches", en: "Legal", fa: "قوانین", ar: "قانوني" } satisfies L,
      links: [
        { label: { de: "Impressum", en: "Legal Notice", fa: "اطلاعات قانونی", ar: "البيانات القانونية" } satisfies L, href: "/impressum" },
        { label: { de: "Datenschutz", en: "Privacy Policy", fa: "حریم خصوصی", ar: "سياسة الخصوصية" } satisfies L, href: "/datenschutz" },
      ],
    },
  ],
  copyright: {
    de: "© 2026 easyWebBuilder. Alle Rechte vorbehalten.",
    en: "© 2026 easyWebBuilder. All rights reserved.",
    fa: "© ۱۴۰۵ easyWebBuilder. تمامی حقوق محفوظ است.",
    ar: "© 2026 easyWebBuilder. جميع الحقوق محفوظة.",
  } satisfies L,
  madeWith: {
    de: "Mit Sorgfalt für wachsende Unternehmen gemacht.",
    en: "Crafted with care for growing businesses.",
    fa: "ساخته‌شده با دقت برای کسب‌وکارهای در حال رشد.",
    ar: "صُنع بعناية للشركات المتنامية.",
  } satisfies L,
};

export const SOCIALS = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "telegram", label: "Telegram", href: "https://t.me" },
  { id: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { id: "x", label: "X", href: "https://x.com" },
  { id: "github", label: "GitHub", href: "https://github.com" },
] as const;

/* ------------------------------------------------------------------ */
/*  Cookie consent                                                     */
/* ------------------------------------------------------------------ */
/** Privacy policy path (without locale prefix). */
export const PRIVACY_PATH = "/datenschutz";

export const COOKIE_COPY = {
  title: {
    de: "Cookies bei easyWebBuilder",
    en: "Cookies on easyWebBuilder",
    fa: "کوکی‌ها در easyWebBuilder",
    ar: "ملفات تعريف الارتباط في easyWebBuilder",
  } satisfies L,
  text: {
    de: "Essenzielle Cookies sorgen dafür, dass die Seite funktioniert, und sind immer aktiv. Mit Ihrer Einwilligung aktivieren wir zusätzlich Analyse-Cookies (Besucherstatistik) und Marketing-Cookies (Werbewirksamkeit).",
    en: "Essential cookies keep the site working and are always on. With your consent we will also enable analytics cookies (visit statistics) and marketing cookies (ad effectiveness).",
    fa: "کوکی‌های ضروری برای کار کردن سایت لازم‌اند و همیشه فعال هستند. با رضایت شما، کوکی‌های تحلیلی (آمار بازدید) و کوکی‌های بازاریابی (اثربخشی تبلیغات) را نیز فعال می‌کنیم.",
    ar: "ملفات تعريف الارتباط الأساسية تُبقي الموقع يعمل وهي مفعّلة دائمًا. بموافقتك سنفعّل أيضًا ملفات التحليلات (إحصاءات الزيارات) وملفات التسويق (فعالية الإعلانات).",
  } satisfies L,
  details: { de: "Details:", en: "Details:", fa: "جزئیات:", ar: "التفاصيل:" } satisfies L,
  privacy: {
    de: "Datenschutzerklärung",
    en: "Privacy Policy",
    fa: "سیاست حریم خصوصی",
    ar: "سياسة الخصوصية",
  } satisfies L,
  acceptAll: { de: "Alle akzeptieren", en: "Accept all", fa: "پذیرش همه", ar: "قبول الكل" } satisfies L,
  essentialOnly: { de: "Nur essenzielle", en: "Essential only", fa: "فقط ضروری", ar: "الأساسية فقط" } satisfies L,
  settings: { de: "Einstellungen", en: "Settings", fa: "تنظیمات", ar: "الإعدادات" } satisfies L,
  footerLink: {
    de: "Cookie-Einstellungen",
    en: "Cookie settings",
    fa: "تنظیمات کوکی",
    ar: "إعدادات ملفات تعريف الارتباط",
  } satisfies L,
  dialogTitle: {
    de: "Cookie-Einstellungen",
    en: "Cookie settings",
    fa: "تنظیمات کوکی",
    ar: "إعدادات ملفات تعريف الارتباط",
  } satisfies L,
  dialogText: {
    de: "Wählen Sie, welche Cookies wir verwenden dürfen. Ihre Auswahl können Sie jederzeit ändern.",
    en: "Choose which cookies we may use. You can change your choice at any time.",
    fa: "انتخاب کنید از کدام کوکی‌ها می‌توانیم استفاده کنیم. هر زمان می‌توانید انتخاب خود را تغییر دهید.",
    ar: "اختر ملفات تعريف الارتباط التي يمكننا استخدامها. يمكنك تغيير اختيارك في أي وقت.",
  } satisfies L,
  save: { de: "Auswahl speichern", en: "Save selection", fa: "ذخیره انتخاب", ar: "حفظ الاختيار" } satisfies L,
  close: { de: "Schließen", en: "Close", fa: "بستن", ar: "إغلاق" } satisfies L,
  alwaysOn: { de: "Immer aktiv", en: "Always on", fa: "همیشه فعال", ar: "مفعّلة دائمًا" } satisfies L,
  categories: {
    essential: {
      title: { de: "Essenziell", en: "Essential", fa: "ضروری", ar: "أساسية" } satisfies L,
      text: {
        de: "Notwendig für den Betrieb der Seite, z. B. Sprache, Design und Ihre Cookie-Auswahl.",
        en: "Required for the site to work, e.g. language, theme and your cookie choice.",
        fa: "برای کار کردن سایت لازم است؛ مثلاً زبان، پوسته و انتخاب کوکی شما.",
        ar: "ضرورية لعمل الموقع، مثل اللغة والمظهر واختيارك لملفات تعريف الارتباط.",
      } satisfies L,
    },
    analytics: {
      title: { de: "Analyse", en: "Analytics", fa: "تحلیلی", ar: "التحليلات" } satisfies L,
      text: {
        de: "Hilft uns zu verstehen, wie die Seite genutzt wird (Besucherstatistik).",
        en: "Helps us understand how the site is used (visit statistics).",
        fa: "به ما کمک می‌کند بفهمیم سایت چگونه استفاده می‌شود (آمار بازدید).",
        ar: "تساعدنا على فهم كيفية استخدام الموقع (إحصاءات الزيارات).",
      } satisfies L,
    },
    marketing: {
      title: { de: "Marketing", en: "Marketing", fa: "بازاریابی", ar: "التسويق" } satisfies L,
      text: {
        de: "Misst die Wirksamkeit unserer Werbung.",
        en: "Measures how effective our advertising is.",
        fa: "اثربخشی تبلیغات ما را اندازه‌گیری می‌کند.",
        ar: "تقيس مدى فعالية إعلاناتنا.",
      } satisfies L,
    },
  },
};
