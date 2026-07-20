import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const pages = ['/', '/products/', '/products/fireweed-loose-leaf/', '/ingredients/', '/ingredients/fireweed/', '/making/', '/farm/', '/journal/what-fireweed-tea-is/', '/about/', '/faq/', '/contact/', '/shop/'];

for (const route of pages) {
  test(`${route} has no detectable WCAG A/AA violations`, async ({ page }) => {
    await page.goto(route);
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']).analyze();
    expect(results.violations).toEqual([]);
  });
}
