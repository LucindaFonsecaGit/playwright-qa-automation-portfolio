import { expect, Page } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectInventoryPageVisible() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
    }

    async expectProductListVisible() {
        await expect(this.page.locator('[data-test="inventory-list"]')).toBeVisible();
        await expect(this.page.locator('[data-test="inventory-item"]')).toHaveCount(6);
    }

    async logout() {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
}