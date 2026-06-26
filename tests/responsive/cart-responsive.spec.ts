import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { USERS } from '../../constants/users';
import { PRODUCTS } from '../../constants/products';

test.describe('Responsive cart behaviour tests', () => {
    test('@responsive @regression should keep cart accessible on small viewport', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await page.setViewportSize({ width: 390, height: 844 });

        await loginPage.goto();
        await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

        await inventoryPage.addProductToCart(PRODUCTS.BACKPACK.testId);

        await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
        await inventoryPage.expectCartBadgeCount('1');
    });
});