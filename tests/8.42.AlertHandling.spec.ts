import { test, expect } from '@playwright/test'

test('Simple Alert Handling', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    
    // await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');

    // page.on - method. event listener waiting for the action and will do something.
    // "dialog", (alert) - parametrs.
    // async - function. when we run event listener playright cant close alert automatically.
    // close alert - alert.accept() (ok button)
    page.on("dialog",async(alert)=>{
        const alertMessage = alert.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alert.accept();
        await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    await page.close();
});

    test('Confirm Alert - OK button', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",async(alert)=>{
            const alertMessage = alert.message();
            expect(alertMessage).toEqual('I am a JS Confirm');
            await alert.accept();
            await expect(page.locator('#result')).toHaveText('You clicked: Ok');
        })
        await page.locator('button[onclick="jsConfirm()"]').click();
        await page.close();

    });

    test('Confirm Alert - Cancel button', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",async(alert)=>{
            const alertMessage = alert.message();
            expect(alertMessage).toEqual('I am a JS Confirm');
            await alert.dismiss();
            await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
        })
        await page.locator('button[onclick="jsConfirm()"]').click();
        await page.close();

    });

    test('Prompt Alert -OK  button', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",async(alert)=>{
            const alertMessage = alert.message();
            expect(alertMessage).toEqual('I am a JS prompt');
            await alert.accept('Glory to Ukraine!');
            await expect(page.locator('#result')).toHaveText('You entered: Glory to Ukraine!');
        })
        await page.locator('button[onclick="jsPrompt()"]').click();
        await page.close();

    });

    test('Prompt Alert - Cancel button', async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
        page.on("dialog",async(alert)=>{
            const alertMessage = alert.message();
            expect(alertMessage).toEqual('I am a JS prompt');
            await alert.dismiss();
            await expect(page.locator('#result')).toHaveText('You entered: null');
        })
        await page.locator('button[onclick="jsPrompt()"]').click();
        await page.close();

    });