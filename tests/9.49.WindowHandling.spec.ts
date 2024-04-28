import { test, expect } from '@playwright/test';

test('Single Tab Handling', async ({ page }) => {
await page.goto('https://demo.automationtesting.in/Windows.html');
const [newTab] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button:has-text("click")')
])
    await newTab.waitForLoadState();
    newTab.locator("//span[normalize-space()='Documentation']").click();
    newTab.locator("#docsearch-1").click();
    newTab.locator("#docsearch-input").fill("Locator Strategies")
    await newTab.waitForTimeout(5000);
    await newTab.close();


})

test('Single Window Handling', async ({ page }) => {

await page.goto('https://demo.automationtesting.in/Windows.html');
await page.locator('.analystic[href="#Seperate"]').click();
const [newWindow] = await Promise.all([
    page.waitForEvent('popup'),
    await page.click('button[onclick="newwindow()"]')
])
    await newWindow.waitForLoadState();
    newWindow.locator("//span[normalize-space()='Documentation']").click();
    newWindow.locator("#docsearch-1").click();
    newWindow.locator("#docsearch-input").fill("Locator Strategies")
    await newWindow.waitForTimeout(5000);
    await newWindow.close();

})

test.only('Multi Tabs Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Multiple"]').click();
    const [muliTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])

    await muliTab.waitForLoadState();
    const pages = muliTab.context().pages();
    console.log("Total pages opened " +pages.length);
    await pages[1].getByRole('button', { name: 'Sign In', exact: true }).click();
    //await pages[1].locator('#email').fill('max@max.com');
    //await pages[1].getByPlaceholder('Email id for Sign Up').fill('max@max.com');
    await muliTab.waitForTimeout(1000);

    await pages[2].locator("//span[normalize-space()='Documentation']").click();
    await pages[2].locator("#docsearch-1").click();
    await pages[2].locator("#docsearch-input").fill("Locator Strategies")
    await pages[2].waitForTimeout(5000);
    await pages[1].close();
    await pages[2].close();
    await pages[0].close();
    
    })

    test.only('Multi Tabs Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.locator('.analystic[href="#Multiple"]').click();
    const [muliTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="multiwindow()"]')
    ])

    await muliTab.waitForLoadState();
    const pages = muliTab.context().pages();
    console.log("Total pages opened " +pages.length);
    await pages[1].getByRole('button', { name: 'Sign In', exact: true }).click();
    //await pages[1].locator('#email').fill('max@max.com');
    //await pages[1].getByPlaceholder('Email id for Sign Up').fill('max@max.com');
    await muliTab.waitForTimeout(1000);

    await pages[2].locator("//span[normalize-space()='Documentation']").click();
    await pages[2].locator("#docsearch-1").click();
    await pages[2].locator("#docsearch-input").fill("Locator Strategies")
    await pages[2].waitForTimeout(5000);
    await pages[1].close();
    await pages[2].close();
    await pages[0].close();
    
    })