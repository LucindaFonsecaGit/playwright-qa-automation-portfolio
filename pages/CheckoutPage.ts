import { expect, Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async expectCheckoutInformationPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Your Information');
    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.locator('[data-test="firstName"]').fill(firstName);
        await this.page.locator('[data-test="lastName"]').fill(lastName);
        await this.page.locator('[data-test="postalCode"]').fill(postalCode);
    }

    async continueCheckout() {
        await this.page.locator('[data-test="continue"]').click();
    }

    async expectOverviewPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
        await expect(this.page.locator('[data-test="title"]')).toHaveText('Checkout: Overview');
    }

    async finishCheckout() {
        await this.page.locator('[data-test="finish"]').click();
    }

    async expectCheckoutComplete() {
        await expect(this.page).toHaveURL(/.*checkout-complete.html/);
        await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
    }
}