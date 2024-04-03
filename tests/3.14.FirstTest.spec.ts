import {test, expect} from'@playwright/test';

test('My First Test', async({page})=>{

    await page.goto('https://google.com');
    //expect a title

    await expect(page).toHaveTitle('Google');
})