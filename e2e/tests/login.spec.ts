// login.spec.ts

import { test } from "../fixtures"

test.describe("Login page", () => {
  test("should login with the correct credentials", async ({ page,loginPage }) => {
    // const login = new loginpage(page);
    await page.goto("http://localhost:3000");
    await loginPage.loginAndVerifyUser({
      email: "oliver@example.com",
      password: "welcome",
      username: "Oliver Smith",
    });
  });
});