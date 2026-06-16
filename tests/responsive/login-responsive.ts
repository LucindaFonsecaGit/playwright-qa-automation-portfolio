import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';

test.describe('Responsive login page tests', () => {
    test('@responsive @smoke should display login page correctly across devices', async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.goto();

        await loginPage.expectLogoVisible();
        await loginPage.expectLoginPageVisible();
    });
});