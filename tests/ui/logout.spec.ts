import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Logout tests', () => {
    test('should logout successfully after user is authenticated', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.expectInventoryPageVisible();
        await inventoryPage.logout();

        await loginPage.expectLoginPageVisible();
    });
});