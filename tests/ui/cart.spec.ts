import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { cartProducts } from '../../test-data/ui/products';

test.describe('Cart tests', () => {
    for (const product of cartProducts) {
        test(`@ui @regression should add ${product.name} to the cart successfully`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const inventoryPage = new InventoryPage(page);
            const cartPage = new CartPage(page);

            await loginPage.goto();
            await loginPage.login('standard_user', 'secret_sauce');

            await inventoryPage.addProductToCart(product.testId);
            await inventoryPage.expectCartBadgeCount('1');

            await inventoryPage.openCart();

            await cartPage.expectCartPageVisible();
            await cartPage.expectCartItemVisible(product.name);
        });
    }
});