const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  const url = "https://aviso.bz/tasks-youtube";
  console.log(`🌐 Visiting: ${url}`);

  await page.goto(url, { waitUntil: 'domcontentloaded' });
  console.log(`📄 Page loaded: ${page.url()}`);

  await page.waitForTimeout(5000); // Optional: wait to see content

  // You can add URL checks here
  const currentURL = page.url();
  if (currentURL.includes("youtube")) {
    console.log("✅ You are on the YouTube task page.");
  } else {
    console.log("❌ Unexpected page.");
  }

  // Comment this if you don't want to close
  // await browser.close();
})();