import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Login tests', () => {
    test('should login successfully with valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.expectInventoryPageVisible();
        await inventoryPage.expectProductListVisible();
    });

    test('should show an error message with invalid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');

        await loginPage.expectErrorMessage('Username and password do not match');
    });
});