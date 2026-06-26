import { expect, Page } from '@playwright/test';
import { URLS } from '../constants/urls';

export class LoginPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async goto() {
        await this.page.goto(URLS.SAUCE_DEMO);
    }

    async expectLogoVisible() {
        await expect(this.page.locator('.login_logo')).toBeVisible();
    }

    async login(username: string, password: string) {
        await this.page.locator('[data-test="username"]').fill(username);
        await this.page.locator('[data-test="password"]').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
    }

    async submitLoginForm() {
        await this.page.locator('[data-test="login-button"]').click();
    }

    async expectLoginPageVisible() {
        await expect(this.page.locator('[data-test="username"]')).toBeVisible();
        await expect(this.page.locator('[data-test="password"]')).toBeVisible();
        await expect(this.page.locator('[data-test="login-button"]')).toBeVisible();
    }

    async expectErrorMessage(message: string) {
        await expect(this.page.locator('[data-test="error"]')).toContainText(message);
    }

    async expectUsernameFieldFocused() {
        await expect(this.page.locator('[data-test="username"]')).toBeFocused();
    }
}