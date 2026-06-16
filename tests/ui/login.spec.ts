import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { validUsers, invalidLoginUsers } from '../../test-data/ui/loginUsers';

test.describe('Authentication tests', () => {
    for (const user of validUsers) {
        test(`@ui @smoke should login successfully with ${user.description}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            const inventoryPage = new InventoryPage(page);

            await loginPage.goto();
            await loginPage.login(user.username, user.password);

            await inventoryPage.expectInventoryPageVisible();
        });
    }

    for (const user of invalidLoginUsers) {
        test(`@ui @negative should not login with invalid credentials: ${user.expectedError}`, async ({ page }) => {
            const loginPage = new LoginPage(page);

            await loginPage.goto();
            await loginPage.login(user.username, user.password);

            await loginPage.expectErrorMessage(user.expectedError);
        });
    }
});