import { expect, test } from '@playwright/test';

const routes = [
  '/', '/products/', '/products/fireweed-puer/', '/products/spruce-tip-hot-sauce/',
  '/ingredients/', '/ingredients/fireweed/', '/ingredients/spruce-tips/', '/making/',
  '/farm/', '/seasons/', '/journal/', '/journal/what-fireweed-tea-is/', '/about/',
  '/faq/', '/contact/', '/shop/'
];

for (const route of routes) {
  test(`${route} renders without browser errors or overflow`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text());
    });
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator('main')).toBeVisible();
    await expect(page.locator('main h1')).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
    expect(overflow).toBeFalsy();
    expect(errors).toEqual([]);
  });
}

test('mobile navigation opens, closes, and moves focus safely', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'mobile navigation test');
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Menu' });
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('navigation', { name: 'Primary navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await expect(menu).toBeFocused();
});

test('skip link reaches main content', async ({ page }) => {
  await page.goto('/');
  await page.keyboard.press('Tab');
  const skip = page.getByRole('link', { name: 'Skip to main content' });
  await expect(skip).toBeFocused();
  await skip.press('Enter');
  await expect(page.locator('#main-content')).toBeFocused();
});

test('product and ingredient filters narrow the visible content', async ({ page }) => {
  await page.goto('/products/');
  await page.getByLabel('Category').selectOption('tea');
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(3);
  await page.getByRole('searchbox').fill('spruce');
  await expect(page.locator('[data-catalog-item]:visible')).toHaveCount(0);

  await page.goto('/ingredients/');
  await page.getByRole('searchbox').fill('fireweed');
  await expect(page.locator('[data-ingredient-card]:visible')).toHaveCount(1);
  await expect(page.getByRole('heading', { name: 'Fireweed' })).toBeVisible();
});

test('farm map controls reveal the matching accessible entry', async ({ page }) => {
  await page.goto('/farm/');
  const control = page.locator('[data-map-point]').nth(1);
  const expectedTitle = await control.getAttribute('data-name');
  await control.click();
  await expect(control).toHaveAttribute('aria-pressed', 'true');
  await expect(page.locator('[data-panel-title]')).toHaveText(expectedTitle ?? '');
});

test('reduced motion preference disables nonessential animation', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/farm/');
  const duration = await page.locator('.map-hotspot').first().evaluate((element) => getComputedStyle(element).animationDuration);
  expect(duration).toMatch(/^(0\.01ms|1e-05s)$/);
});
