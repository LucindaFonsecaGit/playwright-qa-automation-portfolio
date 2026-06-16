import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Responsive cart behaviour tests', () => {
    test('@responsive @regression should keep cart accessible on small viewport', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await page.setViewportSize({ width: 390, height: 844 });

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addProductToCart('sauce-labs-backpack');

        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await inventoryPage.expectCartBadgeCount('1');
    });
});