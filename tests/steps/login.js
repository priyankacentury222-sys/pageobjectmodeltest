const { Given, When, Then, Before, After } = require('@cucumber/cucumber');
const { chromium, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginpage');




let browser;
let page;
let loginPage;

// Hooks to handle browser lifecycle
Before(async function () {
  browser = await chromium.launch({ headless: true });
  page = await browser.newPage();
  loginPage = new LoginPage(page);
});

After(async function () {
  await browser.close();
});

// Step Implementations
Given('the user is on the login page', async function () {
  await loginPage.navigate();
});

When('the user logs in with username {string} and password {string}', async function (username, password) {
  await loginPage.login(username, password);
});

Then('the user should see the dashboard page', async function () {
  await expect(page).toHaveURL(/.*inventory.html/);
});