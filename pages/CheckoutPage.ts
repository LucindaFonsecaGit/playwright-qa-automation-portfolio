import { expect, Page } from '@playwright/test';

export class CheckoutPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    private pageTitle = '[data-test="title"]';
    private firstNameInput = '[data-test="firstName"]';
    private lastNameInput = '[data-test="lastName"]';
    private postalCodeInput = '[data-test="postalCode"]';
    private continueButton = '[data-test="continue"]';
    private finishButton = '[data-test="finish"]';
    private completeHeader = '[data-test="complete-header"]';

    async expectCheckoutInformationPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-one.html/);
        await expect(this.page.locator(this.pageTitle)).toHaveText('Checkout: Your Information');
    }

    async enterFirstName(firstName: string) {
        await this.page.locator(this.firstNameInput).fill(firstName);
    }

    async enterLastName(lastName: string) {
        await this.page.locator(this.lastNameInput).fill(lastName);
    }

    async enterPostalCode(postalCode: string) {
        await this.page.locator(this.postalCodeInput).fill(postalCode);
    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
        await this.enterFirstName(firstName);
        await this.enterLastName(lastName);
        await this.enterPostalCode(postalCode);
    }

    async continueCheckout() {
        await this.page.locator(this.continueButton).click();
    }

    async expectOverviewPageVisible() {
        await expect(this.page).toHaveURL(/.*checkout-step-two.html/);
        await expect(this.page.locator(this.pageTitle)).toHaveText('Checkout: Overview');
    }

    async finishCheckout() {
        await this.page.locator(this.finishButton).click();
    }

    async expectCheckoutComplete() {
        await expect(this.page).toHaveURL(/.*checkout-complete.html/);
        await expect(this.page.locator(this.completeHeader)).toHaveText('Thank you for your order!');
    }
}