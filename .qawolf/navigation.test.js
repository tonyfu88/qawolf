const qawolf = require("qawolf");

let browser;
let context;

beforeAll(async () => {
  browser = await qawolf.launch();
  context = await browser.newContext();
  await qawolf.register(context);
});

afterAll(async () => {
  await qawolf.stopVideos();
  await browser.close();
});

test("navigation", async () => {
  const page = await context.newPage();
  await page.goto("https://spacex-ships.vercel.app/", { waitUntil: "domcontentloaded" });
  await qawolf.scroll(page, "html", { x: 0, y: 2997.60009765625 });
  await page.click('text="2"');
});