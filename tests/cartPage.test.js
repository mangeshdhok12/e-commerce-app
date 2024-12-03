import { test, expect } from '@playwright/test';

test.describe('Basic Cart Page Tests', () => {

  test('should display empty cart message when no items in cart', async ({ page }) => {
    await page.goto('/cart');
    const emptyCartMessage = page.locator('.empty-cart');
    await expect(emptyCartMessage).toHaveText('Your cart is empty!');
  });

});
