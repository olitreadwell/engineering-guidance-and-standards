// Works out the full URL a link check should request for a given href.
// Returns null when the link must not be requested, for example an empty href
// or a scheme the Playwright request API cannot fetch (mailto:, tel:, javascript:).
export function resolveLinkUrl(href, pageUrl, rootUrl) {
  if (!href) {
    return null;
  }
  // In-page anchor: resolve against the page the link was found on.
  if (href.startsWith('#')) {
    return `${pageUrl}${href}`;
  }
  // Protocol-relative URL: keep the scheme of the page the link was found on.
  if (href.startsWith('//')) {
    return `${new URL(pageUrl).protocol}${href}`;
  }
  // Root-relative path: resolve against the site root. The root can be
  // configured without a scheme (for example "localhost:8080" in the e2e
  // workflow), so add one before a request is made.
  if (href.startsWith('/')) {
    const siteRoot = rootUrl.startsWith('http') ? rootUrl : `http://${rootUrl}`;
    return `${siteRoot}${href}`;
  }
  // Absolute URL: request it unchanged.
  if (href.startsWith('http://') || href.startsWith('https://')) {
    return href;
  }
  return null;
}
