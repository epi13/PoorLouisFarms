import { chromium } from '@playwright/test';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const output = new URL('../qa/screenshots/', import.meta.url);
await mkdir(fileURLToPath(output), { recursive: true });

const browser = await chromium.launch({ headless: true });
const captures = [
  ['home-desktop.jpg', '/', 1440, 900],
  ['products-desktop.jpg', '/products/', 1440, 900],
  ['product-detail-desktop.jpg', '/products/fireweed-loose-leaf/', 1440, 900],
  ['ingredient-guide-desktop.jpg', '/ingredients/', 1440, 900],
  ['farm-map-desktop.jpg', '/farm/', 1440, 900],
  ['journal-article-desktop.jpg', '/journal/what-fireweed-tea-is/', 1440, 900],
  ['home-small-desktop.jpg', '/', 1024, 768],
  ['farm-map-tablet.jpg', '/farm/', 768, 1024],
  ['home-mobile.jpg', '/', 390, 844],
  ['home-narrow-mobile.jpg', '/', 320, 720]
];

for (const [name, route, width, height] of captures) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(`http://127.0.0.1:4321${route}`, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    document.documentElement.style.scrollBehavior = 'auto';
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 40));
    }
    window.scrollTo(0, 0);
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
    await new Promise((resolve) => setTimeout(resolve, 80));
  });
  await page.screenshot({ path: fileURLToPath(new URL(name, output)), fullPage: true, type: 'jpeg', quality: 88 });
  await page.close();
}

await browser.close();
