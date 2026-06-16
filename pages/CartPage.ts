import { expect, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectCartPageVisible() {
        await expect(this.page).toHaveURL(/.*cart.html/);
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Your Cart');
    }

    async expectCartItemVisible(productName: string) {
        await expect(this.page.locator('[data-test="inventory-item-name"]')).toContainText(productName);
    }

    async proceedToCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }
}