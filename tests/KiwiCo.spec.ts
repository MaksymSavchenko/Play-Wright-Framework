import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.kiwico.com/');
  //await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('link', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Email address').click();
  await page.getByPlaceholder('Email address').fill('maxsavchenko@gmail.com');
  //await page.getByPlaceholder('Email address').press('Tab');
  await page.getByPlaceholder('Password').fill('P!7eXf@BwHi@CzC');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'My account' }).click();
  await page.getByRole('button', { name: 'Log Out' }).click();
  await expect(page.locator('#universal-nav')).toContainText('Sign in');
});