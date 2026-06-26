import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { CartPage } from '../../pages/CartPage';
import { CheckoutPage } from '../../pages/CheckoutPage';
import { checkoutCustomers } from '../../test-data/ui/checkoutCustomers';
import { USERS } from '../../constants/users';
import { PRODUCTS } from '../../constants/products';

test.describe('Checkout smoke tests', () => {
    for (const customer of checkoutCustomers) {
        test(`@ui @smoke should complete checkout successfully for ${customer.description}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const inventoryPage = new InventoryPage(page);
            const cartPage = new CartPage(page);
            const checkoutPage = new CheckoutPage(page);

            await loginPage.goto();
            await loginPage.login(USERS.STANDARD.username, USERS.STANDARD.password);

            await inventoryPage.addProductToCart(PRODUCTS.BACKPACK.testId);
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