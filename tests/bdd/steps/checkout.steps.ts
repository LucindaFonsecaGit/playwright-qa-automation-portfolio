import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';
import { CartPage } from '../../../pages/CartPage';
import { CheckoutPage } from '../../../pages/CheckoutPage';

Given('I am logged in as a standard user', async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);
    const inventoryPage = new InventoryPage(this.page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectInventoryPageVisible();
});

When('I add the product {string} to the cart', async function (this: CustomWorld, productTestId: string) {
    const inventoryPage = new InventoryPage(this.page);

    await inventoryPage.addProductToCart(productTestId);
    await inventoryPage.expectCartBadgeCount('1');
});

When('I proceed to checkout', async function (this: CustomWorld) {
    const inventoryPage = new InventoryPage(this.page);
    const cartPage = new CartPage(this.page);

    await inventoryPage.openCart();
    await cartPage.expectCartPageVisible();
    await cartPage.proceedToCheckout();
});

When(
    'I fill checkout information with first name {string}, last name {string} and postal code {string}',
    async function (this: CustomWorld, firstName: string, lastName: string, postalCode: string) {
        const checkoutPage = new CheckoutPage(this.page);

        await checkoutPage.expectCheckoutInformationPageVisible();
        await checkoutPage.fillCustomerInformation(firstName, lastName, postalCode);
        await checkoutPage.continueCheckout();
    }
);

When('I complete the order', async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.expectOverviewPageVisible();
    await checkoutPage.finishCheckout();
});

Then('I should see the checkout confirmation', async function (this: CustomWorld) {
    const checkoutPage = new CheckoutPage(this.page);

    await checkoutPage.expectCheckoutComplete();
});