//fixtures/index.ts

import {test as base} from "@playwright/test"
import LoginPage from "../poms/login"

interface  ExtendedFixtures {
    loginpage: LoginPage;
}

export const test = base.extend<ExtendedFixtures>({
    loginpage: async({page},use)=>{
        const loginPage = new LoginPage(page);
        await use(loginPage);
    },
});
