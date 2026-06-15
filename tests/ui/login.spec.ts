import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Authentication tests', () => {
    test('should login successfully with valid standard user credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');

        await inventoryPage.expectInventoryPageVisible();
        await inventoryPage.expectProductListVisible();
    });

    test('should not login with invalid username and password', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('invalid_user', 'wrong_password');

        await loginPage.expectErrorMessage('Username and password do not match');
    });

    test('should not login when username is missing', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('', 'secret_sauce');

        await loginPage.expectErrorMessage('Username is required');
    });

    test('should not login when password is missing', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', '');

        await loginPage.expectErrorMessage('Password is required');
    });

    test('should not login with locked out user', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');

        await loginPage.expectErrorMessage('Sorry, this user has been locked out');
    });

    test('should allow login with problem user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('problem_user', 'secret_sauce');

        await inventoryPage.expectInventoryPageVisible();
    });

    test('should allow login with performance glitch user', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const inventoryPage = new InventoryPage(page);

        await loginPage.goto();
        await loginPage.login('performance_glitch_user', 'secret_sauce');

        await inventoryPage.expectInventoryPageVisible();
    });
});