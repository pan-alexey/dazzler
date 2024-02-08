import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('screen', async ({ page }) => {
  await page.goto('/iframe.html?viewMode=story&id=button--basic');
  await expect(page).toHaveScreenshot({
    maxDiffPixels: 100,
  });
});

// test('testing chromium screenshots', async ({ page }, testInfo) => {
//   await page.goto('https://playwright.dev/');
//   if (testInfo.project.name === 'chromium') {
//       await page.screenshot({ path:`./screenshots/${testInfo.title}.png` });
//   }
// });