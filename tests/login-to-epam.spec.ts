import { test, expect } from '@playwright/test';

// Scenario: Login to Epam
// 1. Navigate to https://www.epam.com/
// 2. Select "Services" from the header menu
// 3. Click the "Explore Our Client Work" link.
// 4. Verify that the "Client Work" text is visible on the page.

test.describe('Login to Epam', () => {
  test('should navigate to Client Work from Services menu', async ({ page }) => {
    // Step 1: Navigate to https://www.epam.com/
    await page.goto('https://www.epam.com/');

    // Step 2: Select "Services" from the header menu
    const servicesMenuItem = page.getByRole('link', { name: /services/i });
    await servicesMenuItem.click();

    // Step 3: Click the "Explore Our Client Work" link.
    const exploreClientWorkLink = page.getByRole('link', { name: /explore our client work/i });
    await exploreClientWorkLink.click();

    // Step 4: Verify that the "Client Work" text is visible on the page.
    await expect(page.getByText(/client work/i)).toBeVisible();
  });
});
