import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';

test.describe('Checkout smoke tests', () => {
    test('should complete checkout successfully with one product', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);
        const cartPage = new CartPage(page);
        const checkoutPage = new CheckoutPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.addProductToCart('sauce-labs-backpack');
        await inventoryPage.openCart();

        await cartPage.expectCartPageVisible();
        await cartPage.proceedToCheckout();

        await checkoutPage.expectCheckoutInformationPageVisible();
        await checkoutPage.fillCustomerInformation('Lucinda', 'Fonseca', '3060-000');
        await checkoutPage.continueCheckout();

        await checkoutPage.expectOverviewPageVisible();
        await checkoutPage.finishCheckout();

        await checkoutPage.expectCheckoutComplete();
    });
});