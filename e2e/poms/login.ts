import { Page,expect } from "@playwright/test";

export default class LoginPage {
    page: Page;
    constructor(page: Page){
        this.page= page;
    }
    loginAndVerifyUser = async ({
        email, password, userName,
    }: {
        email:string;
        password: string;
        userName: string;
    }): Promise<void> =>{
        await this.page.getByTestId("login-email-field").fill(email);
        await this.page.getByTestId("login-password-field").fill(password);
        await this.page.getByTestId("login-submit-button").click();
        await expect(this.page.getByTestId("navbar-username-label")).toContainText(
            userName
        );
        await expect(this.page.getByTestId("navbar-logout-link")).toBeVisible();
    };
}

