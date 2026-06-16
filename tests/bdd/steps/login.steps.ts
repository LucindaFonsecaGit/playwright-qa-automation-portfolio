import { Given, When, Then } from '@cucumber/cucumber';
import { CustomWorld } from '../support/world';
import { LoginPage } from '../../../pages/LoginPage';
import { InventoryPage } from '../../../pages/InventoryPage';

Given('I am on the SauceDemo login page', async function (this: CustomWorld) {
    const loginPage = new LoginPage(this.page);

    await loginPage.goto();
    await loginPage.expectLoginPageVisible();
});

When(
    'I log in with username {string} and password {string}',
    async function (this: CustomWorld, username: string, password: string) {
        const loginPage = new LoginPage(this.page);

        await loginPage.login(username, password);
    }
);

Then('I should see the product catalogue', async function (this: CustomWorld) {
    const inventoryPage = new InventoryPage(this.page);

    await inventoryPage.expectInventoryPageVisible();
    await inventoryPage.expectProductListVisible();
});

Then('I should see the login error {string}', async function (this: CustomWorld, errorMessage: string) {
    const loginPage = new LoginPage(this.page);

    await loginPage.expectErrorMessage(errorMessage);
});