const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://api.whatsapp.com/send?phone=5493424484925&text=hola');
  await page.click("a#action-button");
  await page.waitForTimeout(1500);
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  // await page.keyboard.press('Tab')
  await page.keyboard.press('Enter');
  // await browser.waitForTarget(() => false)
  // await page.screenshot({path: 'example.png'});

  // await browser.close();
})();