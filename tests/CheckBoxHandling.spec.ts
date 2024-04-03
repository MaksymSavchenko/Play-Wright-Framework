import { test, expect } from '@playwright/test'

test('Checkbox button Handling', async ({ page }) => {
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

    //Checkboxes
    const cricket=page.locator('#checkbox1');
    const movies=page.locator('#checkbox2');
    const hockey=page.locator('#checkbox3');

    //way 1 AssertionError
    expect(cricket).not.toBeChecked();
    expect(movies).not.toBeChecked();
    expect(hockey).not.toBeChecked();

    //Way 2 Assert
    expect (await cricket.isChecked()).toBeFalsy();
    expect (await movies.isChecked()).toBeFalsy();
    expect (await hockey.isChecked()).toBeFalsy();

    await cricket.check();
    await movies.check();
    await hockey.check();

    expect(cricket).toBeChecked();
    expect(movies).toBeChecked();
    expect (await hockey.isChecked()).toBeTruthy();

await page.close();

});