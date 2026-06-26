import { expect, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private pageTitle = '[data-test="title"]';
    private inventoryItemName = '[data-test="inventory-item-name"]';
    private checkoutButton = '[data-test="checkout"]';

    async expectCartPageVisible() {
        await expect(this.page).toHaveURL(/.*cart.html/);
        await expect(this.page.locator(this.pageTitle)).toHaveText('Your Cart');
    }

    async expectCartItemVisible(productName: string) {
        await expect(this.page.locator(this.inventoryItemName)).toContainText(productName);
    }

    async proceedToCheckout() {
        await this.page.locator(this.checkoutButton).click();
    }
}