import { test, expect } from '@playwright/test';

test('Login to Epam', async ({ page }) => {
  // Step 1: Navigate to https://www.epam.com/
  await page.goto('https://www.epam.com/');
});
