import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000");

  const margin = {
    top: "1cm",
    bottom: "1cm",
    left: "1.4cm",
    right: "1.4cm",
  };

  const pdfConfig = {
    path: "planner.pdf",
    format: "A5",
    margin: margin,
  };

  await page.pdf(pdfConfig);

  await browser.close();
})();
