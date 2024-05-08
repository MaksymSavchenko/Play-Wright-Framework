import {test, expect} from '@playwright/test';

test('Frame Handling Using Page.Frame()', async ({ page }) => {
    await page.goto('https://ui.vision/demo/webtest/frames/');

// To Find total number of Frames
   // const allFrames = page.frames();
   // const allFramesCount = page.frames.allFrames.length;
   const allFramesCount = page.frames().length;
    console.log('Total Frames Count is '+allFramesCount);
    const frame1=page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'});
    await frame1?.locator('input[name="mytext1"]').fill('Playwright');
    await page. waitForTimeout (5000);
    await page.close();
    })

    test.only('Frame Handling Using Page.FrameLocator()', async ({ page }) => {
        await page.goto('https://ui.vision/demo/webtest/frames/');
        const frame1 = page.frameLocator('frame[src="frame_1.html"]');
        await frame1?.locator('input[name="mytext1"]').fill('Playwright');
        await page. waitForTimeout (5000);
        await page.close();
        })