import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';

test.describe('Cart tests', () => {
    test('should add a product to the cart successfully', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addProductToCart('sauce-labs-backpack');
        await inventoryPage.expectCartBadgeCount('1');

        await inventoryPage.openCart();

        await cartPage.expectCartPageVisible();
        await cartPage.expectCartItemVisible('Sauce Labs Backpack');
    });
});