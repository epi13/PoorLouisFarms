import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'small-desktop', width: 1024, height: 768 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 390, height: 844 },
  { name: 'narrow-mobile', width: 320, height: 720 }
];

const representativeRoutes = ['/', '/products/', '/products/fireweed-puer/', '/ingredients/', '/ingredients/fireweed/', '/making/', '/farm/', '/seasons/', '/journal/', '/journal/what-fireweed-tea-is/', '/about/', '/faq/', '/contact/', '/shop/'];

test('required viewport matrix has no horizontal overflow or broken images', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'desktop-chromium', 'matrix runs once in Chromium');
  test.setTimeout(120_000);
  for (const viewport of viewports) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    for (const route of representativeRoutes) {
      const response = await page.goto(route);
      expect(response?.status(), `${viewport.name}: ${route}`).toBe(200);
      const result = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth,
        brokenImages: [...document.images].filter((image) => image.complete && image.naturalWidth === 0).map((image) => image.currentSrc || image.src)
      }));
      expect(result.overflow, `${viewport.name}: ${route}`).toBeFalsy();
      expect(result.brokenImages, `${viewport.name}: ${route}`).toEqual([]);
    }
  }
});

test('direct detail route survives a refresh', async ({ page }) => {
  await page.goto('/journal/what-fireweed-tea-is/');
  const response = await page.reload();
  expect(response?.status()).toBe(200);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('What Fireweed Tea Actually Is');
});

test('custom 404 renders its useful navigation', async ({ page }) => {
  const response = await page.goto('/404.html');
  expect(response?.status()).toBe(404);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('That field note is not here.');
  await expect(page.getByRole('link', { name: /Return home/ })).toBeVisible();
});
