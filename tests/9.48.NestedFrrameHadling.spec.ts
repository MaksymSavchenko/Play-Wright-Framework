import { test, expect } from '@playwright/test';

// test('Frame Handling Using Page.Frame()', async ({ page }) => {
// })

    test.only('Nested Frame Handling', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');
    const frame3 = page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})

    const childFrames = frame3?.childFrames();
    console.log("Number of Child Frames "+childFrames?.length);

    await childFrames[0].locator('//*[@id="i8"]/div[3]/div').check({force:true});
    await childFrames[0].locator('//*[@id="i19"]/div[3]').check({force:true});

    await page.waitForTimeout(5000);
    await page.close();
})