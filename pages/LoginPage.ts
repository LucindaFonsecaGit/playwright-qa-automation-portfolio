import { expect, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { Config } from '../config';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private usernameInput = '[data-test="username"]';
    private passwordInput = '[data-test="password"]';
    private loginButton = '[data-test="login-button"]';
    private errorMessage = '[data-test="error"]';
    private logo = '.login_logo';

    async goto() {
        await this.page.goto(Config.baseUrl);
    }

    async enterUsername(username: string) {
        await this.page.locator(this.usernameInput).fill(username);
    }

    async enterPassword(password: string) {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickLogin() {
        await this.page.locator(this.loginButton).click();
    }

    async login(username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLogin();
    }

    async submitLoginForm() {
        await this.clickLogin();
    }

    async expectLoginPageVisible() {
        await expect(this.page.locator(this.usernameInput)).toBeVisible();
        await expect(this.page.locator(this.passwordInput)).toBeVisible();
        await expect(this.page.locator(this.loginButton)).toBeVisible();
    }

    async expectErrorMessage(message: string) {
        await expect(this.page.locator(this.errorMessage)).toContainText(message);
    }

    async expectUsernameFieldFocused() {
        await expect(this.page.locator(this.usernameInput)).toBeFocused();
    }

    async expectLogoVisible() {
        await expect(this.page.locator(this.logo)).toBeVisible();
    }
}