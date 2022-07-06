import { Page } from 'puppeteer'

describe("Google.com", () => {
  it('should get correct title when go to home page', async () => {
    await page.goto('https://google.com');    
    const title = await page.title();    
    console.log(await title);
    expect(title).toEqual('Google');
  });
});

describe("Google.com", () => {
  it('should get wrong title when go to home page', async () => {
    await page.goto('https://google.com');    
    const title = await page.title();    
    console.log(await title);
    expect(title).toEqual('Yahoo');
  });
});
