import { test, expect } from '@playwright/test';

test.describe('Product Detail Page Tests', () => {

  test('should display loading message while fetching product details', async ({ page }) => {
    // Go to the product detail page
    await page.goto('/product/1');

    // Ensure the loading message is visible
    const loadingMessage = page.locator('text=Loading...');
    await expect(loadingMessage).toBeVisible();
  });

  test('should have an "Add to Cart" button', async ({ page }) => {
    // Go to the product detail page
    await page.goto('/product/1');

    // Wait for the "Add to Cart" button to be visible
    const addToCartButton = page.locator('button.add-to-cart');
    await addToCartButton.waitFor({ state: 'visible' });

    // Ensure the "Add to Cart" button is visible
    await expect(addToCartButton).toBeVisible();
  });

  test('should navigate back to the homepage when clicking "Back to Home" link', async ({ page }) => {
    // Go to the product detail page
    await page.goto('/product/1');

    // Get the "Back to Home" link and click it
    const backLink = page.locator('a.back-link');
    await backLink.waitFor({ state: 'visible' });

    // Click the link to navigate back to the homepage
    await backLink.click();

    // Verify that the URL is the homepage
    await expect(page).toHaveURL('/');
  });

});
