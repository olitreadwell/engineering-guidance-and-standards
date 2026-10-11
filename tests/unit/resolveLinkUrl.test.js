import assert from 'node:assert/strict';
import { test } from 'node:test';
import { resolveLinkUrl } from '../../tests/support/resolveLinkUrl.js';

const pageUrl = 'http://localhost:8080/pages/example/';
const siteRoot = 'http://localhost:8080';

test('resolves in-page anchors against the current page', () => {
  assert.equal(
    resolveLinkUrl('#section', pageUrl, siteRoot),
    'http://localhost:8080/pages/example/#section'
  );
});

test('resolves root-relative paths against the site root', () => {
  assert.equal(resolveLinkUrl('/standards/', pageUrl, siteRoot), 'http://localhost:8080/standards/');
});

test('adds a scheme when the site root has none', () => {
  assert.equal(resolveLinkUrl('/standards/', pageUrl, 'localhost:8080'), 'http://localhost:8080/standards/');
});

test('requests absolute URLs unchanged', () => {
  assert.equal(resolveLinkUrl('https://example.com/page/', pageUrl, siteRoot), 'https://example.com/page/');
  assert.equal(resolveLinkUrl('http://example.com/page/', pageUrl, siteRoot), 'http://example.com/page/');
});

test('keeps the page scheme for protocol-relative URLs', () => {
  assert.equal(
    resolveLinkUrl('//example.com/page/', 'https://engineering.homeoffice.gov.uk/a/', siteRoot),
    'https://example.com/page/'
  );
});

test('skips empty hrefs', () => {
  assert.equal(resolveLinkUrl('', pageUrl, siteRoot), null);
  assert.equal(resolveLinkUrl(null, pageUrl, siteRoot), null);
  assert.equal(resolveLinkUrl(undefined, pageUrl, siteRoot), null);
});

test('skips schemes the request API cannot fetch', () => {
  assert.equal(resolveLinkUrl('mailto:team@example.com', pageUrl, siteRoot), null);
  assert.equal(resolveLinkUrl('tel:+441234567890', pageUrl, siteRoot), null);
  assert.equal(resolveLinkUrl('javascript:void(0)', pageUrl, siteRoot), null);
});
