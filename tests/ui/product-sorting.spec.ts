import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

test.describe('Product sorting tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('should sort products from A to Z', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy('az');

        await inventoryPage.expectFirstProductName('Sauce Labs Backpack');
    });

    test('should sort products from Z to A', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy('za');

        await inventoryPage.expectFirstProductName('Test.allTheThings() T-Shirt (Red)');
    });

    test('should sort products from low price to high price', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy('lohi');

        await inventoryPage.expectFirstProductName('Sauce Labs Onesie');
    });

    test('should sort products from high price to low price', async ({ page }) => {
        const inventoryPage = new InventoryPage(page);

        await inventoryPage.sortBy('hilo');

        await inventoryPage.expectFirstProductName('Sauce Labs Fleece Jacket');
    });
});