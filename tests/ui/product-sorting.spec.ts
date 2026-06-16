import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';
import { sortableProductOptions } from '../../test-data/ui/products';

test.describe('Product sorting tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
    });

    for (const sortOption of sortableProductOptions) {
        test(`@ui @regression should sort products by ${sortOption.description}`, async ({ page }) => {
            const inventoryPage = new InventoryPage(page);

            await inventoryPage.sortBy(sortOption.option);
            await inventoryPage.expectFirstProductName(sortOption.expectedFirstProduct);
        });
    }
});