import { test, expect } from '@playwright/test';

test('Login to Epam', async ({ page }) => {
  // Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');

  // Select "Services" from the header menu
  await page.getByRole('link', { name: 'Services' }).click();

  // Click the "Explore Our Client Work" link.
  await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

  // Verify that the "Client Work" text is visible on the page.
  await expect(page.getByText('Client Work', { exact: false })).toBeVisible();
});
