import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.kiwico.com/');
  await page.locator('#subnav-by-age').getByRole('link', { name: '-3' }).click();
  await page.getByRole('button', { name: 'Close' }).click();
  await page.locator('div:nth-child(8) > div > div > .jsx-1385608643').click();
});