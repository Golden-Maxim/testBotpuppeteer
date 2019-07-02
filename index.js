const puppeteer = require('puppeteer');
const credentials = require('./credentials')

async function getPic() {
  const browser = await puppeteer.launch({
    headless:false,
    args: [
      '--window-size=1080, 1920'
    ]
  });
  const page = await browser.newPage();

  page.setViewport({height:1080,width:1920});

  await page.goto('https://www.instagram.com/accounts/login/?source=auth_switcher');

  await page.waitFor(()=> document.querySelectorAll('input').length);

  await page.type('[name = username]', credentials.username);
  await page.type('[name = password]', credentials.password);

  await page.evaluate(() => 
  {
    document.querySelector('._0mzm-.sqdOP.L3NKy').click();//passing registration
  })

  await waitFor(()=>document.querySelector('.pbNvD.fPMEg'));

  await page.evaluate(() => 
  {
    document.querySelector('.aOOlW.bIiDR').click();//turn on(problem with alert)
 })


 
  await page.evaluate(() =>
  {
    document.querySelector('[href="/accounts/activity/"]').click();
   
  })
 

  await page.evaluate(() =>
  {
    
    document.querySelector(".YFq-A").click();
   
  })


  await page.evaluate(() =>
  {
    
    document.querySelector("._0mzm-.sqdOP.L3NKy").click();
  })


  await page.waitFor(4000);

  await browser.close();
};   

getPic();