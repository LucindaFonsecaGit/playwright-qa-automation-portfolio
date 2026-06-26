import { expect, Page } from '@playwright/test';
import { SortOption } from '../enums/SortOption';

export class InventoryPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private pageTitle = '[data-test="title"]';
    private inventoryList = '[data-test="inventory-list"]';
    private inventoryItem = '[data-test="inventory-item"]';
    private inventoryItemName = '[data-test="inventory-item-name"]';
    private sortDropdown = '[data-test="product-sort-container"]';
    private cartLink = '[data-test="shopping-cart-link"]';
    private cartBadge = '[data-test="shopping-cart-badge"]';
    private burgerMenuButton = '#react-burger-menu-btn';
    private logoutSidebarLink = '[data-test="logout-sidebar-link"]';

    async expectInventoryPageVisible() {
        await expect(this.page).toHaveURL(/.*inventory.html/);
        await expect(this.page.locator(this.pageTitle)).toHaveText('Products');
    }

    async expectProductListVisible() {
        await expect(this.page.locator(this.inventoryList)).toBeVisible();
        await expect(this.page.locator(this.inventoryItem)).toHaveCount(6);
    }

    async sortBy(option: SortOption) {
        await this.page.locator(this.sortDropdown).selectOption(option);
    }

    async expectFirstProductName(name: string) {
        await expect(this.page.locator(this.inventoryItemName).first()).toHaveText(name);
    }

    async addProductToCart(productTestId: string) {
        await this.page.locator(`[data-test="add-to-cart-${productTestId}"]`).click();
    }

    async openCart() {
        await this.page.locator(this.cartLink).click();
    }

    async expectCartBadgeCount(count: string) {
        await expect(this.page.locator(this.cartBadge)).toHaveText(count);
    }

    async openMenu() {
        await this.page.locator(this.burgerMenuButton).click();
    }

    async clickLogout() {
        await this.page.locator(this.logoutSidebarLink).click();
    }

    async logout() {
        await this.openMenu();
        await this.clickLogout();
    }
}