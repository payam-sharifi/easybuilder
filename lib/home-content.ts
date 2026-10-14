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
  Search,
  Share2,
  Star,
  type LucideIcon,
} from "lucide-react";
import { DELIVERY_TIME } from "./constants";
import { de } from "./i18n";

/* ------------------------------------------------------------------ */
/*  Two competitive pillars (overview cards)                           */
/* ------------------------------------------------------------------ */
export const PILLARS = {
  badge: de("Zwei Stärken"),
  title: de("Was uns unterscheidet"),
  subtitle: de(
    "Sie pflegen Ihre Website per Nachricht. Und wir sorgen dafür, dass Google Ihr Geschäft versteht.",
  ),
  cards: [
    {
      id: "chat",
      href: "#chat",
      icon: MessageCircle,
      title: de("Änderungen per Nachricht"),
      text: de("Neuer Preis, neues Foto, andere Öffnungszeiten? Eine Nachricht genügt."),
    },
    {
      id: "google",
      href: "#google",
      icon: MapPin,
      title: de("Besser bei Google & Maps"),
      text: de(
        "Wir machen Ihr Geschäft für Google vollständig und verständlich – damit Sie öfter angezeigt werden.",
      ),
    },
  ],
} as const;

/* ------------------------------------------------------------------ */
/*  Pillar 1 — chat changes in 5 steps                                 */
/* ------------------------------------------------------------------ */
export const CHAT_FLOW = {
  badge: de("Änderungen per Chat"),
  title: de("So ändern Sie Ihre Website – in 5 einfachen Schritten"),
  intro: de(
    "Bei vielen alten Websites scheitert die Pflege an Passwörtern, komplizierten Menüs oder einer Agentur, die erst ein Ticket braucht. Bei uns nicht.",
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
  whatsappBadge: de("WhatsApp bald"),
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
  badge: de("Google & Maps"),
  title: de("Wie Google Maps entscheidet – einfach erklärt"),
  intro: de(
    "Wenn jemand „Klempner“ sucht, zeigt Google Maps nur wenige Betriebe ganz oben. Dabei schaut Google vor allem auf drei Dinge:",
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
    "Ganz ehrlich: Platz 1 können wir nicht versprechen – das kann niemand. Aber bei Relevanz und Bekanntheit können wir sehr viel für Sie tun.",
  ),
};

/* ------------------------------------------------------------------ */
/*  Visibility checklist + review QR                                   */
/* ------------------------------------------------------------------ */
export const VISIBILITY = {
  badge: de("Sichtbarkeit"),
  title: de("Das tun wir für Ihre Sichtbarkeit"),
  subtitle: de(
    "Wir verbessern, was wir beeinflussen können – ohne Rang-Versprechen.",
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
  title: de("Ihre alte Website? Wir prüfen sie."),
  // TODO: confirm whether the check is free, and whether it is manual or automated. Do not claim automation. Do not claim “free” until confirmed.
  text: de(
    "Wir schauen uns Ihre bestehende Website an und sagen Ihnen verständlich, was fehlt, damit Google Sie besser anzeigt. Wenn es sinnvoll ist, bauen wir sie neu, hosten sie auf unseren Servern in Deutschland und halten sie laufend aktuell – inklusive Support.",
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
      "Wir halten Ihre Angaben aktuell und verbessern Schritt für Schritt, wie Google Ihr Geschäft zeigt – besonders in Google Maps.",
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
