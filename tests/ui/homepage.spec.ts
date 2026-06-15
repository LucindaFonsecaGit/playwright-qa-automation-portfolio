import { test, expect } from '@playwright/test';

test.describe('Homepage smoke tests', () => {
    test('should load the homepage successfully', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveTitle(/Swag Labs/);
        await expect(page.locator('[data-test="username"]')).toBeVisible();
        await expect(page.locator('[data-test="password"]')).toBeVisible();
        await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    });
});