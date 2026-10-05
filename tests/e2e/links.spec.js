import { test, expect } from '@playwright/test';
import { testing_params } from '../support/testing_params';
import { resolveLinkUrl } from '../support/resolveLinkUrl';
import { readFileSync } from 'fs';

const data_pages = readFileSync('./_site/search-index.json', 'utf8');
const pages = JSON.parse(data_pages);

const linkExceptionListAll = readFileSync('./tests/support/link-exception-list.json', 'utf8');
const linkExceptionList = JSON.parse(linkExceptionListAll);

let visitedLinks = []; // allows the tests to not repeatedly test the same URLs

test.describe('Check pages contain valid links', () => {
  for (const page_data of pages) {
    test(`${page_data.title} (${page_data.url}) contains valid links`, async ({ page }) => {
      await page.goto(testing_params.TEST_ROOT_URL + page_data.url);
      await checkAllLinks(page);
    });

    // Only check content pages for version permalink
    if ((page_data.url.includes("principles") && !page_data.url.endsWith("principles/")) ||
      (page_data.url.includes("standards") && !page_data.url.endsWith("standards/")) ||
      (page_data.url.includes("patterns") && !page_data.url.endsWith("patterns/"))) {
      test(`${page_data.title} (${page_data.url}) contains version permalink`, async ({ page }) => {
        await page.goto(testing_params.TEST_ROOT_URL + page_data.url);
        await expect(page.locator(".version-permalink")).toContainText(
          "Content version permalink (GitHub) (opens in a new tab)"
        );
      });
    }
  }
});

async function checkAllLinks(page) {
  // Exclude mailto links
  const links = await page.locator("a:not([href*='mailto:'])").all();
  for (const link of links) {
    const href = await link.getAttribute('href');
    await checkUrl(href, page);
  }
}

function isPermalink(url) {
  return url.match(/^https:\/\/github\.com\/UKHomeOffice\/engineering-guidance-and-standards\/blob\//);
}

async function checkUrl(url, page) {
  console.log('checking: ', url);
  if (!url || linkExceptionList.includes(url) || isPermalink(url)) {
    console.log('excluded: ', url);
    return;
  }
  if (visitedLinks.includes(url)) {
    return;
  }
  visitedLinks.push(url);
  // Playwright's request API needs full URLs, so resolve the href against the
  // page it was found on or the site root before requesting it.
  const targetUrl = resolveLinkUrl(url, page.url(), testing_params.TEST_ROOT_URL);
  if (!targetUrl) {
    console.log('excluded (not an http(s) URL): ', url);
    return;
  }
  const response = await page.request.get(targetUrl);
  expect(response.status()).toBeLessThan(400);
}
