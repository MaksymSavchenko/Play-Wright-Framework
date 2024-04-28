import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon';

test('Using Fill Method', async ({ page }) => {

await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
let date = "1993-10-18";
await page.locator('#birthday').fill(date);
await page.pause();

})

test.only('Using Luxon', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo');
    await page.locator('input[placeholder="Start date"]').click();

    // Select Past Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(20,"June 2019",page);
    await page.waitForTimeout(5000);
    await page.reload();

    // Select Future Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(20,"June 2024",page);
    await page.waitForTimeout(5000);
    await page.reload();

    // Select Current Date
    await page.locator('input[placeholder="Start date"]').click();
    selectDate(7,"April 2024",page);
    await page.waitForTimeout(5000);
    await page.reload();
});


async function selectDate(date: Number,dateToSelect:String,page){
const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');
const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy");

    while(await monthYear.textContent() != dateToSelect){
    if(formattedMonth < DateTime.fromJsDate(new Date())){
        await prevButton.click();
    }
    else{
        await nextButton.click();
        }
    }

    await page.locator(`//td[@class="day"] [text()="${date}"]`).click();
}