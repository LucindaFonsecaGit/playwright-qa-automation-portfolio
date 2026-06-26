import { expect, Page } from '@playwright/test';
import { SortOption } from '../enums/SortOption';

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

    async sortBy(option: SortOption) {
        await this.page.locator('[data-test="product-sort-container"]').selectOption(option);
    }

    async expectFirstProductName(name: string) {
        await expect(this.page.locator('[data-test="inventory-item-name"]').first()).toHaveText(name);
    }

    async addProductToCart(productTestId: string) {
        await this.page.locator(`[data-test="add-to-cart-${productTestId}"]`).click();
    }

    async openCart() {
        await this.page.locator('[data-test="shopping-cart-link"]').click();
    }

    async expectCartBadgeCount(count: string) {
        await expect(this.page.locator('[data-test="shopping-cart-badge"]')).toHaveText(count);
    }

    async logout() {
        await this.page.locator('#react-burger-menu-btn').click();
        await this.page.locator('[data-test="logout-sidebar-link"]').click();
    }
}