import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { checkoutCustomers } from '../../test-data/ui/checkoutCustomers';

test.describe('Checkout smoke tests', () => {
    for (const customer of checkoutCustomers) {
        test(`@ui @smoke should complete checkout successfully for ${customer.description}`, async ({ page }) => {
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
            await checkoutPage.fillCustomerInformation(
                customer.firstName,
                customer.lastName,
                customer.postalCode
            );

            await checkoutPage.continueCheckout();
            await checkoutPage.expectOverviewPageVisible();
            await checkoutPage.finishCheckout();
            await checkoutPage.expectCheckoutComplete();
        });
    }
});