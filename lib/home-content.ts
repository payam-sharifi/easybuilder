import {
  Camera,
  Check,
  Clock,
  FileSearch,
  Globe,
  Handshake,
  KeyRound,
  MapPin,
  MessageCircle,
  Palette,
  QrCode,
  RefreshCw,
  Search,
  Share2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { DELIVERY_TIME, PATHS } from "./constants";
import { de } from "./i18n";

/* ------------------------------------------------------------------ */
/*  Competitive pillars (overview cards)                               */
/* ------------------------------------------------------------------ */
export const PILLARS = {
  badge: de("Unsere Stärken"),
  title: de("Was uns unterscheidet"),
  subtitle: de(
    "Neue Website oder bestehende erneuern. Änderungen per Chat. Sichtbarkeit bei Google und Google Maps.",
  ),
  cards: [
    {
      id: "google",
      href: "#google",
      icon: MapPin,
      title: de("Besser bei Google & Google Maps"),
      text: de(
        "Wir machen Ihr Geschäft für Google und Google Maps vollständig und verständlich – damit Sie öfter angezeigt werden.",
      ),
    },
    {
      id: "chat",
      href: "#chat",
      icon: MessageCircle,
      title: de("Änderungen per Nachricht"),
      text: de("Neuer Preis, neues Foto, andere Öffnungszeiten? Eine Nachricht genügt."),
    },
    {
      id: "website",
      href: "#website-check",
      icon: RefreshCw,
      title: de("Alte Website prüfen & erneuern"),
      text: de(
        "Wir bewerten Ihre bestehende Seite und bauen sie so um, dass Kunden sowie Google und Google Maps sie verstehen.",
      ),
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Pillar 1 — chat changes in 5 steps                                 */
/* ------------------------------------------------------------------ */
export const CHAT_FLOW = {
  badge: de("Änderungen per Chat"),
  title: de("So funktionieren Änderungen per Nachricht"),
  intro: de(
    "Kein Panel, kein Login, kein Ticket. Sie schreiben, sehen eine Vorschau, bestätigen – und die Änderung geht live.",
  ),
  steps: [
    {
      title: de("Nachricht schreiben"),
      text: de(
        "Schreiben Sie unserem Bot, was sich ändern soll: ein Preis, ein Foto, die Öffnungszeiten, eine Überschrift. Ohne Login, ohne Passwort.",
      ),
    },
    {
      title: de("Vorschau ansehen"),
      text: de("Sie sehen sofort, wie Ihre Seite nach der Änderung aussehen würde."),
    },
    {
      title: de("Bestätigen"),
      text: de(
        "Passt alles? Antworten Sie mit „Ja“. Wenn nicht, sagen Sie einfach, was anders sein soll.",
      ),
    },
    {
      // TODO: confirm this human review is real, and the typical duration. Do not publish a duration until confirmed.
      title: de("Wir schauen kurz drauf"),
      text: de("Unser Team prüft die Änderung, damit nichts Falsches online geht."),
    },
    {
      // TODO: only keep “Zurück” if version rollback is actually implemented.
      title: de("Live"),
      text: de(
        "Ihre Änderung ist online. Etwas stimmt nicht? Mit „Zurück“ stellen Sie den alten Stand wieder her.",
      ),
    },
  ],
  compareAgency: {
    label: de("Viele Agenturen"),
    text: de("Ticket → Warten → Rechnung"),
  },
  compareUs: {
    label: de("easyWebBuilder"),
    text: de("Nachricht → Vorschau → Live"),
  },
  telegramBadge: de("Telegram ✓ verfügbar"),
  whatsappBadge: de("WhatsApp ✓ verfügbar"),
  // TODO: confirm the product roadmap includes products later; remove this note if not.
  note: de(
    "Das geht auch für Bilder, Texte, Überschriften und Öffnungszeiten – Produkte folgen später.",
  ),
};

export const CHANNELS = {
  telegram: de("Telegram"),
  telegramAvailable: de("verfügbar"),
  whatsapp: de("WhatsApp"),
  whatsappSoon: de("bald"),
};

/* ------------------------------------------------------------------ */
/*  Pillar 2 — Google Maps explainer                                   */
/* ------------------------------------------------------------------ */
export const MAPS = {
  badge: de("Google & Google Maps"),
  title: de("So funktionieren Google und Google Maps"),
  intro: de(
    "Google findet Ihre Website, versteht Leistungen, Öffnungszeiten und Fotos und zeigt dann passende Betriebe. In Google Maps zählen vor allem drei Dinge:",
  ),
  searchQuery: de("Klempner in der Nähe"),
  mapLabel: de("Vereinfachte Karte: Suche in der Nähe mit drei Einflussfaktoren"),
  factors: [
    {
      id: "distance",
      icon: MapPin,
      title: de("Entfernung"),
      text: de(
        "Wie nah ist Ihr Betrieb an der suchenden Person? Das können weder Sie noch wir ändern.",
      ),
      mark: de("nicht beeinflussbar"),
      help: false,
    },
    {
      id: "relevance",
      icon: Search,
      title: de("Relevanz"),
      text: de(
        "Passt Ihr Betrieb zur Suche? Das hängt davon ab, wie vollständig und klar Ihre Angaben sind: Leistungen, Öffnungszeiten, Feiertage, Fotos, Beschreibung.",
      ),
      mark: de("Hier helfen wir"),
      help: true,
    },
    {
      id: "prominence",
      icon: Star,
      title: de("Bekanntheit"),
      text: de(
        "Wie gut ist Ihr Ruf? Dazu zählen Bewertungen – wie viele und wie gut – und wie präsent Ihr Betrieb im Netz ist.",
      ),
      mark: de("Hier helfen wir"),
      help: true,
    },
  ],
  callout: de(
    "Ganz ehrlich: Platz 1 in Google oder Google Maps können wir nicht versprechen – das kann niemand. Die Entfernung zum Suchenden lässt sich nicht ändern. Bei Relevanz und Bekanntheit können wir sehr viel für Sie tun.",
  ),
};

/* ------------------------------------------------------------------ */
/*  How Google Search works (dedicated page)                           */
/* ------------------------------------------------------------------ */
export const GOOGLE_SEARCH = {
  badge: de("Google Suche"),
  title: de("Wie Google entscheidet, wen es zeigt"),
  intro: de(
    "Google durchsucht das Netz, versteht Inhalte und zeigt dann die Ergebnisse, die zur Suche passen. Bei lokalen Suchen kommt oft Google Maps dazu – die Karte mit den Betrieben in der Nähe.",
  ),
  steps: [
    {
      id: "find",
      icon: Globe,
      title: de("Finden"),
      text: de(
        "Google findet Ihre Website über Links und technische Hinweise. Eine langsame oder unlesbare Seite wird seltener verstanden.",
      ),
    },
    {
      id: "understand",
      icon: FileSearch,
      title: de("Verstehen"),
      text: de(
        "Klar beschriebene Leistungen, Öffnungszeiten, echte Fotos, Adresse und Telefon helfen Google zu erkennen, was Sie anbieten – und für welche Suchen Sie passen.",
      ),
    },
    {
      id: "show",
      icon: MapPin,
      title: de("Zeigen"),
      text: de(
        "In der normalen Suche und in Google Maps zeigt Google die Betriebe, die zur Anfrage passen. In Maps zählen vor allem Relevanz, Entfernung und Bekanntheit.",
      ),
    },
  ],
  note: de(
    "Google selbst schreibt: Betriebe mit vollständigen und korrekten Angaben erscheinen eher in den lokalen Ergebnissen. Eine feste Prozentzahl – etwa „40 % besser“ – nennt Google nicht. Die geben wir deshalb auch nicht an.",
  ),
};

export const HONESTY = {
  badge: de("Ehrlich gesagt"),
  title: de("Was wir tun können – und was nicht"),
  canTitle: de("Das können wir"),
  cannotTitle: de("Das können wir nicht"),
  can: [
    de(
      "Eine Website bauen oder erneuern, die Google lesen kann: mobil, schnell, mit Leistungen, Öffnungszeiten und Fotos.",
    ),
    de("Name, Adresse und Telefon überall gleich halten – auf der Website und bei Google."),
    de("Ihr Google-Unternehmensprofil mit Ihrer Freigabe vollständig machen. Es bleibt Ihres."),
    de(
      "Einen Bewertungs-QR-Code, damit Kundinnen und Kunden in wenigen Sekunden ehrlich bewerten können – alle, nicht nur die zufriedenen, und nie gegen Belohnung.",
    ),
  ],
  cannot: [
    de("Die Entfernung zum Suchenden ändern. Die liegt fest."),
    de("Platz 1 in Google oder Google Maps versprechen. Das kann niemand seriös."),
    de(
      "Eine pauschale Steigerung wie „40 % besser als ähnliche Betriebe“ belegen. Google nennt keine solche Zahl.",
    ),
  ],
};

/* ------------------------------------------------------------------ */
/*  Homepage teasers → inner pages                                     */
/* ------------------------------------------------------------------ */
export const GUIDES = {
  badge: de("Leitfäden"),
  title: de("Zum Nachlesen, nicht alles auf einer Seite"),
  subtitle: de(
    "Die Startseite zeigt, was wir tun. Die Details zu Google, Google Maps und zum Chat-Support liegen auf eigenen Seiten.",
  ),
  cards: [
    {
      id: "google",
      href: PATHS.googleMaps,
      icon: MapPin,
      title: de("Leitfaden: Google & Google Maps"),
      text: de(
        "Wie die Suche und die Karte entscheiden, was wir an Website und Profil verbessern – und warum Entfernung tabu bleibt.",
      ),
      cta: de("Leitfaden lesen"),
    },
    {
      id: "support",
      href: PATHS.support,
      icon: MessageCircle,
      title: de("Support per Telegram & WhatsApp"),
      text: de(
        "Änderungen und Support per Chat. Telegram und WhatsApp sind verbunden. Vorschau, Bestätigung, dann live.",
      ),
      cta: de("So funktioniert der Chat"),
    },
  ],
};

export const PAGE_CHROME = {
  back: de("Zur Startseite"),
};

export const PAGE_CTA = {
  title: de("Sollen Google und Google Maps Ihr Geschäft verstehen?"),
  text: de(
    "Wir prüfen Ihre alte Website, bauen neu oder erneuern – und halten Angaben per Chat aktuell.",
  ),
  cta: de("Kostenlose Beratung anfragen"),
  supportTitle: de("Bereit für Änderungen per Chat?"),
  supportText: de(
    "Wir bauen oder erneuern Ihre Website. Danach ändern Sie Preise, Texte und Öffnungszeiten per Telegram oder WhatsApp.",
  ),
};

export const GOOGLE_PAGE = {
  badge: de("Leitfaden"),
  title: de("Google und Google Maps – wie sie arbeiten, und was wir tun"),
  subtitle: de(
    "Keine Rang-Garantie. Stattdessen: eine Website und ein Profil, die Google lesen kann – Öffnungszeiten, Fotos, Leistungen, einheitliche Angaben, ehrliche Bewertungen.",
  ),
};

export const SUPPORT_PAGE = {
  badge: de("Chat & Support"),
  title: de("Änderungen und Support per Chat"),
  subtitle: de(
    "Telegram und WhatsApp sind verbunden. Kein Dashboard, kein Ticket, kein Passwort – eine Nachricht genügt.",
  ),
};

/* ------------------------------------------------------------------ */
/*  Visibility checklist + review QR                                   */
/* ------------------------------------------------------------------ */
export const VISIBILITY = {
  badge: de("Sichtbarkeit"),
  title: de("Das tun wir für Google und Google Maps"),
  subtitle: de(
    "Wir verbessern, was sich beeinflussen lässt – Website und Profil nach den Regeln, die Google selbst nennt. Ohne Rang-Versprechen.",
  ),
  items: [
    {
      icon: Share2,
      text: de(
        "Einheitliche Angaben: Name, Adresse und Telefonnummer überall gleich – auf Ihrer Website und bei Google",
      ),
    },
    {
      icon: Clock,
      text: de("Öffnungszeiten – auch für Feiertage und Sonderzeiten"),
    },
    {
      icon: FileSearch,
      text: de("Ihre Leistungen vollständig und verständlich beschrieben"),
    },
    {
      icon: Camera,
      text: de("Passende, echte Fotos"),
    },
    {
      // TODO: confirm Google Business Profile setup/improvement is included in packages and price.
      icon: Globe,
      text: de(
        "Ihr Google-Unternehmensprofil einrichten und verbessern – mit Ihrer Freigabe, es bleibt Ihr Profil",
      ),
    },
    {
      icon: Check,
      text: de(
        "Eine schnelle, mobile Website, die Google gut lesen kann (inkl. strukturierter Daten)",
      ),
    },
    {
      icon: QrCode,
      text: de("Bewertungs-QR-Code für Ihre Kunden"),
    },
  ],
  qr: {
    sampleLabel: de("Beispiel"),
    title: de("Mehr ehrliche Bewertungen – mit einem Scan"),
    text: de(
      "Wir geben Ihnen einen QR-Code. Ihre Kunden scannen ihn, landen direkt auf Ihrer Google-Bewertungsseite und bewerten in wenigen Sekunden. Bitten Sie alle Kunden um eine ehrliche Bewertung – nicht nur die zufriedenen, und nie gegen Belohnung.",
    ),
    alt: de("Beispiel-QR-Code zur Google-Bewertungsseite"),
  },
};

/** Example-only URL encoded in the sample QR. Not a customer Place ID. */
export const SAMPLE_REVIEW_QR_URL = "https://search.google.com/local/writereview";
export const SAMPLE_REVIEW_QR_SRC = "/qr/sample-review.svg";

/* ------------------------------------------------------------------ */
/*  Existing-website check                                             */
/* ------------------------------------------------------------------ */
export const WEBSITE_CHECK = {
  badge: de("Website-Check"),
  title: de("Ihre alte Website? Wir prüfen sie und machen sie neu."),
  // TODO: confirm whether the check is free, and whether it is manual or automated. Do not claim automation. Do not claim “free” until confirmed.
  text: de(
    "Viele Betriebe haben schon eine Seite – nur versteht Google sie schlecht. Wir schauen sie an und sagen verständlich, was fehlt, damit Google und Google Maps Ihr Geschäft einordnen können. Wenn es sinnvoll ist, bauen wir sie neu, hosten sie in Deutschland und halten sie per Chat aktuell.",
  ),
  urlLabel: de("Ihre Website-Adresse"),
  urlPh: de("www.ihr-betrieb.de"),
  emailLabel: de("E-Mail"),
  emailPh: de("sie@firma.de"),
  consent: de("Ich stimme der Verarbeitung meiner Angaben zur Kontaktaufnahme zu."),
  privacyLink: de("Datenschutzerklärung"),
  submit: de("Website-Check anfragen"),
  sending: de("Wird gesendet …"),
  successTitle: de("Danke – wir haben Ihre Anfrage erhalten."),
  successText: de("Wir melden uns bei Ihnen."),
  another: de("Weitere Adresse prüfen"),
  errors: {
    url: de("Bitte geben Sie die Adresse Ihrer Website ein."),
    email: de("Bitte geben Sie eine gültige E-Mail-Adresse ein."),
    consent: de("Bitte stimmen Sie der Verarbeitung zu."),
    server: de("Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."),
  },
};

/* ------------------------------------------------------------------ */
/*  Customer journey (“So läuft es ab”)                                */
/* ------------------------------------------------------------------ */
export const JOURNEY: { icon: LucideIcon; title: ReturnType<typeof de>; text: ReturnType<typeof de> }[] = [
  {
    icon: Handshake,
    title: de("Kennenlernen"),
    text: de("Wir sprechen kurz über Ihr Geschäft und prüfen ggf. Ihre alte Website."),
  },
  {
    icon: Palette,
    title: de("Wir gestalten Ihre Website"),
    text: de(`Design und Aufbau – fertig in ${DELIVERY_TIME.de}.`),
  },
  {
    icon: KeyRound,
    title: de("Übergabe"),
    text: de("Sie bekommen Ihre Website und Ihren persönlichen Zugang zum Chat."),
  },
  {
    icon: MessageCircle,
    title: de("Änderungen per Chat"),
    text: de("Ab jetzt pflegen Sie Preise, Texte, Bilder und Öffnungszeiten per Nachricht."),
  },
  {
    icon: MapPin,
    title: de("Wir arbeiten an Ihrer Sichtbarkeit"),
    text: de(
      "Wir halten Ihre Angaben aktuell und verbessern Schritt für Schritt, wie Google und Google Maps Ihr Geschäft zeigen.",
    ),
  },
];

export const JOURNEY_COPY = {
  badge: de("Ablauf"),
  title: de("So läuft es ab"),
  subtitle: de(
    `Vom ersten Gespräch bis zur gepflegten Website – in ${DELIVERY_TIME.de} startklar, danach per Chat aktuell.`,
  ),
  step: de("Schritt"),
};
