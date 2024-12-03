import { test, expect } from '@playwright/test';

test.describe('Basic Home Page Tests', () => {

  test('should display loading state when products are being fetched', async ({ page }) => {
    await page.goto('/');
    const loadingMessage = page.locator('text=Loading...');
    await expect(loadingMessage).toBeVisible();
  });

  test('should allow sorting by price', async ({ page }) => {
    await page.goto('/');
    const sortSelect = page.locator('#sort');
    await sortSelect.waitFor({ state: 'visible' });
    await sortSelect.selectOption({ value: 'asc' });
    const productPrices = await page.locator('.product-card p').allTextContents();
    const prices = productPrices.map(price => parseFloat(price.replace('$', '').trim()));
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).toEqual(sortedPrices);
  });

  test('should filter products by category', async ({ page }) => {
    await page.goto('/');
    const categoryButtons = page.locator('.filter-button');
    await categoryButtons.first().waitFor({ state: 'visible' });
    const categories = await categoryButtons.allTextContents();
    const firstCategoryButton = categoryButtons.first();
    await firstCategoryButton.click();
    await expect(firstCategoryButton).toHaveClass(/active/);
    const productTitles = await page.locator('.product-card h3').allTextContents();
    const selectedCategory = categories[0];
    for (let title of productTitles) {
      expect(title).toContain(selectedCategory);
    }
  });

  test('should display error message when API request fails', async ({ page }) => {
    await page.route('https://fakestoreapi.com/products/categories', (route) => route.abort());
    await page.goto('/');
    const errorMessage = page.locator('.error');
    await expect(errorMessage).toHaveText('Failed to load categories.');
  });
});
