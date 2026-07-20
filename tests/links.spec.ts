import { expect, test } from '@playwright/test';

test('all internal links and local images resolve', async ({ page }) => {
  await page.goto('/');
  const visited = new Set<string>();
  const pending = ['/'];

  while (pending.length) {
    const route = pending.shift()!;
    if (visited.has(route)) continue;
    visited.add(route);
    const response = await page.goto(route);
    expect(response?.status(), `route ${route}`).toBe(200);

    const links = await page.locator('a[href]').evaluateAll((anchors) => anchors.map((anchor) => (anchor as HTMLAnchorElement).getAttribute('href') || ''));
    for (const href of links) {
      if (!href.startsWith('/') || href.startsWith('//')) continue;
      const normalized = new URL(href, 'http://local').pathname;
      if (!visited.has(normalized) && !pending.includes(normalized)) pending.push(normalized);
    }
  }

  expect(visited.size).toBeGreaterThanOrEqual(40);
});

test('Square actions identify a new tab and use safe link attributes', async ({ page }) => {
  await page.goto('/products/fireweed-puer/');
  const squareLinks = page.locator('a[href*="poor-louis-farms.square.site"]');
  expect(await squareLinks.count()).toBeGreaterThan(0);
  for (const link of await squareLinks.all()) {
    await expect(link).toHaveAttribute('target', '_blank');
    await expect(link).toHaveAttribute('rel', /noopener/);
    await expect(link).toContainText(/opens in a new tab/i);
  }
});
