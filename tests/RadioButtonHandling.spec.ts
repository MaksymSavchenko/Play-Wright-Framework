import { test, expect } from '@playwright/test'

test('Radio button Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Register.html');
    const maleRadioButton = page.locator('input[value="Male"]');
    const feMaleRadioButton = page.locator('input[value="FeMale"]');
   
//Way 1 Assertion
    expect(maleRadioButton).not.toBeChecked();
    expect(feMaleRadioButton).not.toBeChecked();

//Way 2
    expect(await maleRadioButton.isChecked()).toBeFalsy();
    expect(await feMaleRadioButton.isChecked()).toBeFalsy();
    
    await maleRadioButton.check();
    expect(maleRadioButton).toBeChecked();

    await feMaleRadioButton.check();
    expect(await feMaleRadioButton.isChecked()).toBeTruthy();

await page.close();

});