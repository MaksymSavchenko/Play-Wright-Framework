import { test, expect } from '@playwright/test'

test('Single Static DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');

    await page.selectOption('#Skills',{value:"Android"})
    await page.pause()
    await page.selectOption('#Skills',{label:"Art Design"})
    await page.pause()
    await page.selectOption('#Skills',{index:3})
    await page.pause()
    await page.close();
})

// test'Single Static DropDown Handling'
test('Multi Static DropDown Handling', async ({ page }) => {
await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
await page.selectOption('#multi-select',[{value:"California"},{label:"Texas"},{index:3}])
await page.pause()
await page.close();
})

test.only('Non Searchible dynamic DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.waitForTimeout(3000);
    await page.locator('ul#select2-country-results').locator("li",{hasText: "United"}).click();
    await page.pause()
    await page.close();
})

test('Searchible dynamic DropDown Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    await page.locator('span[role="combobox"]').click();
    await page.locator('input[role="textbox"]').fill("United");
    await page.locator('ul#select2-country-results>li').click();
    await page.waitForTimeout(5000);

    await page.close();
})