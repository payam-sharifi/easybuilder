/**
 * Privacy-friendly analytics — not loaded.
 *
 * Self-hosting Umami (or Plausible CE) on our own server in Germany is required
 * before any tracker is added. Do not load umami.cloud, plausible.io, Google
 * Analytics, or any other third-party analytics.
 *
 * Setup steps (TODO, owner / ops):
 * 1. Install Umami or Plausible CE + database on the German server (test host
 *    now; later the same host constant as the website, planned Hetzner).
 * 2. Serve the script only from a first-party domain/subdomain
 *    (e.g. stats.easywebbuilder.de). No third-party requests.
 * 3. Cookieless, no localStorage, IP anonymization, no cross-site tracking.
 * 4. Set NEXT_PUBLIC_UMAMI_SCRIPT_URL (first-party) and NEXT_PUBLIC_UMAMI_WEBSITE_ID.
 * 5. Only then add a "Statistik" paragraph to the Datenschutzerklärung
 *    (Art. 6 Abs. 1 lit. f DSGVO — TODO: legal review) and keep the cookie
 *    banner without an analytics toggle unless the implementation actually
 *    needs consent.
 *
 * Until those steps are done, this module must not inject a script.
 */
export const ANALYTICS_ENABLED = false;
