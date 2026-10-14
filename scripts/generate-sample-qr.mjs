/**
 * Generates the example Google-review QR as a self-hosted SVG.
 * Run at build time: node scripts/generate-sample-qr.mjs
 *
 * The encoded URL is an example only — not a customer Place ID.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import QRCode from "qrcode";

const SAMPLE_REVIEW_QR_URL = "https://search.google.com/local/writereview";
const outDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "qr");
const outFile = join(outDir, "sample-review.svg");

const svg = await QRCode.toString(SAMPLE_REVIEW_QR_URL, {
  type: "svg",
  margin: 1,
  errorCorrectionLevel: "M",
  color: { dark: "#0e3d31", light: "#ffffff" },
});

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, svg);
console.log(`Wrote ${outFile}`);
