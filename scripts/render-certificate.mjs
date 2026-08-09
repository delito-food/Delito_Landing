// One-off headless render of the certificate HTML to a high-res PNG.
// Usage: node scripts/render-certificate.mjs
import { chromium } from "playwright";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const htmlPath = path.join(__dirname, "..", "certificate", "certificate_anmol_upadhyay.html");
const outPath = path.join(__dirname, "..", "certificate", "certificate_anmol_upadhyay.png");

const A4_WIDTH_PX = 794; // 210mm at 96dpi
const A4_HEIGHT_PX = 1123; // 297mm at 96dpi

async function main() {
  const browser = await chromium.launch();
  const pageObj = await browser.newPage({
    viewport: { width: A4_WIDTH_PX, height: A4_HEIGHT_PX },
    deviceScaleFactor: 2,
  });
  await pageObj.goto(`file://${htmlPath.replace(/\\/g, "/")}`, { waitUntil: "networkidle" });
  await pageObj.waitForTimeout(300);
  const box = await pageObj.locator(".page").boundingBox();
  await pageObj.screenshot({ path: outPath, clip: box });
  await browser.close();
  console.log(`Rendered certificate to ${outPath} (clip: ${JSON.stringify(box)})`);
}

main().catch((err) => {
  console.error("Failed to render certificate:", err);
  process.exit(1);
});
