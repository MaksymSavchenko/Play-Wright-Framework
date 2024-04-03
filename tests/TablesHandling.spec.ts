import { test, expect } from '@playwright/test';
import { toASCII } from 'punycode';

test('Handling Webtable', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('table[name="BookTable"]');

    //Total rows and Colums
    const colums = table.locator('tr th');
    console.log("Number of Colums: ", await colums.count());
    const rows = table.locator('tbody tr')
    console.log("Number of Rows: ", await rows.count());

    expect(await colums.count()).toBe(4);
    expect(await rows.count()).toBe(7);    

    await page.close();
})


test('Selecting Single Checkbox in the Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const colums = table.locator('tr th');
    const rows = table.locator('tbody tr');

    const matchedRow = rows.filter({
        has: page.locator('td'),
        hasText: 'Product 3'
})
await matchedRow.locator('input').check();
await page.pause();


await page.close();
})

test('Selecting Multiple Checkbox using function', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const colums = table.locator('tr th');
    const rows = table.locator('tbody tr');

    await selectProduct(rows, page, 'Product 1');
    await selectProduct(rows, page, 'Product 3');
    await selectProduct(rows, page, 'Product 5');

    await page.pause();
    await page.close();
})

async function selectProduct(rows, page, productName){
    const matchedRow =  rows.filter({
        has: page.locator('td'),
        hasText: productName
    })
    await matchedRow.locator('input').check();        
}


test('Printing all items from Page1 in pagination Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const colums = table.locator('tr th');
    const rows = table.locator('tbody tr');

    for(let i=0; i<await rows.count(); i++){
        const row = rows.nth(i);
        const rowData = row. locator('td');
        for(let j=0; j< await rowData.count(); j++){
            const cellcontent = await rowData.nth(j).textContent();
            console.log(cellcontent)
        }
    }


    await page.close();
})

test.only('Printing all items from all pages pagination Table', async ({ page }) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    const table = page.locator('#productTable');
    const colums = table.locator('tr th');
    const rows = table.locator('tbody tr');
    const pages = page.locator('#pagination li a');
    const totalPages = await pages.count();
    console.log('Total number of pages: '+totalPages);

    for(let p=0; p<totalPages; p++){
        if(p>0){
            await pages.nth(p).click();
        }
        for(let i=0; i<await rows.count(); i++){
            const row = rows.nth(i);
            const rowData = row. locator('td');
            for(let j=0; j< await rowData.count(); j++){
                const cellcontent = await rowData.nth(j).textContent();
                console.log(cellcontent)
            }
        }
    }

    await page.close();
})