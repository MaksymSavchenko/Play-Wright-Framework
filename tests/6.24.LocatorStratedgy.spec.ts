import{test} from'@playwright/test'

test('Different Locator Stratedgy', async({page})=>{
    await page.goto('https://www.saucedemo.com/');
    await page.pause();


// // Directly by using object property
//     await page.click('id=user-name');
//         await page.locator('id=user-name').fill('standard_user');
//     await page.locator('[placeholder="Username"]').fill('standard _user');
//     await page.locator('data-test=username').fill('standard_user');
// // Using CSS Selector
//     await page.locator('#user-name'). fill('standard_user');
// // Using Xpath Selector
//     await page.locator ('//input[@data-test="password"]'). fill('secret_sauce');
// // Using Text
// //Way - 1
//     await page.locator('text=Login').click();
// //Way - 2
//     await page.locator( 'input:has-text("Login")').click();
})
