import { test, expect } from '@playwright/test';

test('EPAM - navigate to Client Work via Services menu', async ({ page }) => {
  await page.goto('https://www.epam.com/');
});
