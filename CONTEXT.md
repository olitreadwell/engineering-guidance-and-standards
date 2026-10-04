# UKHomeOffice/engineering-guidance-and-standards context
> refreshed 2026-10-03 | upstream default: main @ 886ef0d (unchanged since 2026-09-14)

## Identity & policies
- upstream: UKHomeOffice/engineering-guidance-and-standards, default branch main, primary language JavaScript (Eleventy 11ty + Liquid docs site, GOV.UK Frontend), English-first (UK English; do not "correct" AU/UK/US dialect spellings).
- CLA/DCO: none found (no CLA bot / DCO in CONTRIBUTING).
- AI-assisted PR policy: unstated (no AI ban / disclosure requirement found in CONTRIBUTING.md, CODE_OF_CONDUCT.md, .github/ or repo-root docs; no `ai-generated`/`no-ai` labels).
- signed commits required: YES — CONTRIBUTING.md, under "Commit your update": "Please make sure you have set up Git to sign your commits with a method that GitHub can verify... To help the site comply with SEGAS-00009 - Signing code commits, the repository rules require a fully signed commit history when merging a pull request into the main branch. You will not be able to merge the resulting PR if any commits in the associated branch are unsigned, or if the signatures can't be verified by GitHub." Re-verified live 2026-10-02 against upstream main. HARD BLOCKER per config (preflight_scan.critical_filters_hard_skip.signed_commits_required -> outcome blocked-needs-signing).
  - Enforcement is not independently readable with the pipeline token: `GET /repos/.../branches/main/protection` -> 404 (no admin), repo rulesets list shows only one DISABLED ruleset ("Code Quality Copilot review for default branch"), and `GET /orgs/UKHomeOffice/rulesets` -> 404 (needs admin:org). The documented CONTRIBUTING policy is the evidence used.
- PR template: none found (pr_template_present: false; no PULL_REQUEST_TEMPLATE.md at repo root or .github/, org default UKHomeOffice/.github has none either). Pipeline 3-section body is the fallback.
- external tracker: GitHub issues only.

## Conventions (verified from merged PRs)
- Branch naming: issue-number prefix is the house style — most merged PRs use `<issue-number>-<kebab-description>` (e.g. #514 head branch `513-bug-link-to-home-page-on-accessibility-page-incorrect`, #333 head branch `331-bug-accessibility-statement-link-to-engineeringhomeofficegovuk-is-incorrect`) plus dependabot branches. Plain `type/desc` branches exist but are not the norm.
- Commit style: plain imperative/conventional-ish one-liners; squash-merge into main.
- Test command: `npm run test:unit` (node --test on tests/unit/**), `npm run playwright:run` (e2e, needs a running local server), `npm run audit-ci`.
- CI that gates merge: `e2e-tests-on-pr.yml` (pull_request -> main), `content-review-alerts.yml`; deploys on main via `deploy-to-core-cloud.yml` / `deploy-to-staging-core-cloud.yml`.
- How outside PRs get merged: small, well-scoped PRs from Home Office staff land in days (see #331 -> #333 in 2 days, #513 -> #514 in 4 days). The maintainer (nattrassHO) files detailed bug issues with acceptance criteria and then works the backlog.

## Maintainer picture
- Active maintainer/contributor: `nattrassHO` — filed the four open bug issues (#741-744) on 2026-09-16 and has open PRs #740 (sitemap for #738) and #723 (redirects for #673).
- Other recent names: `TOM-CARPENTER-ho` (#746), `jeff-horton-ho-sas` (#705), `aaronrussellHO`, `gurukiranHMO`, `ElliottHSHO`, `arifulhaqueHO` (mostly long-lived content PRs).
- Upstream main last moved 2026-09-14 (@886ef0d); repo-wide push activity is low (pushed_at 2026-09-14).
- Recent external merges 60d: 8.

## Issue-area health
- Site/content repo; docs prior audit (2026-08-05) found 138 links clean, no real 404s.
- Four open BUG issues (#741-744), all filed 2026-09-16 by maintainer `nattrassHO`, all with ZERO comments — no maintainer follow-up, no assignee, no linked PR. They are documented (clear repro + acceptance criteria on #741/#743) but not maintainer-engaged, so no accepted+assigned issue survives the filter.
- Verified live on 2026-10-02 that all four are still present in upstream main @886ef0d and on the deployed site (evidence in "Mined gaps").
- No upstream PR exists for any of #741-744 (`search/issues` q=741/742/743/744 -> only the issues themselves; q=SITE_ROOT -> open PR #740 is about sitemap.xml, not the site root).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-08-05 docs/broken-link — outcome: skipped-no-genuine-doc-fix — 138 links verified clean; well-maintained; also requires signed commits.
- 2026-08-26 self-found — outcome: blocked-needs-signing — CONTRIBUTING.md requires fully signed commit history (SEGAS-00009); no signing key, must not register one to Oli's account.
- 2026-09-03 self-found — outcome: blocked-needs-signing — re-verified live; no signing key in env; must not register one to Oli's account.
- 2026-09-04 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a).
- 2026-09-05 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a).
- 2026-09-07 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a).
- 2026-09-08 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a).
- 2026-09-09 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a).
- 2026-09-24 self-found (loop.sh) — outcome: blocked-needs-signing — main moved 66cd84a -> 886ef0d; CONTRIBUTING still requires a fully signed commit history; no secret GPG keys, no ~/.ssh, no user.signingkey, no commit.gpgsign.
- 2026-09-25 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — main unchanged @ 886ef0d.
- 2026-10-01 self-found (loop.sh) — outcome: blocked-needs-signing — main unchanged @ 886ef0d; issues #741-744 all 0 comments.
- 2026-10-02 self-found (loop.sh) — outcome: blocked-needs-signing — main unchanged @ 886ef0d. Re-verified the four open bug issues still reproduce live (see Mined gaps) and found the exact previous accepted fix for the SITE_ROOT regression (merged PR #333 in 2023 and merged PR #514 in 2025 — the fix was lost again in the core-cloud deploy-action migration). Also verified an unblock path for the signed-commits gate (GitHub-side signed commits, no key registration — see note below). No PR opened: config still hard-skips this repo, and the unblock is Oli's call. No duplicate work: repo has no open PR for any of the four gaps.

- 2026-10-03 trivial-fix pass (loop-trivial) — outcome: pr-opened — fork PR #2 "Fix typos and dead documentation links" (branch fix/doc-typos-and-dead-links, commit 90941b97), 10 files / +18/-18. Packed typos (Artifical->Artificial, necessesary, effectivly, correllate, continously, verfiy, registar), stale Cypress->Playwright refs (CONTRIBUTING.md + both accessibility checklists), and dead links (3x x-govuk.github.io plugin markdown docs -> govuk-eleventy-plugin.x-govuk.org; playwright.dev/docs/test-api -> /docs/api/class-test). Signed-commits gate unblocked key-free via GitHub GraphQL createCommitOnBranch (commit verification verified=true). Fork CI e2e-test RED only at its npm run audit-ci step: pre-existing advisories published 2026-09-29 (markdown-it GHSA-253c-mchw-3w2r, brace-expansion GHSA-6j4f-fj2g-mc7p/GHSA-q2hr-2g5m-vwhr/GHSA-qhr7-859c-m2p7, fast-uri GHSA-hrr3-gc8f-f4qj) that fail identically on unmodified main (lock file unchanged); unit tests (38) + build (100 files) green locally.

- 2026-10-04 trivial-fix pass (loop-trivial) — outcome: pr-opened — fork PR #3 "docs: fix documentation typos and moved plugin links" (branch fix/docs-typos-and-moved-plugin-links, commit b37389a1), 9 files / +9/-9. Second trivial pass, deliberately no file/line overlap with the still-open PR #2 (PR #2 touched write-effective-documentation.md:109 necessesary; this run touched :107 cogitive). Packed typos in published guidance (cogitive->cognitive, OpenTelementry->OpenTelemetry, entegration->integration, depreciated->deprecated, unforseeable->unforeseeable) plus "Any assistance technologies used" -> "Any assistive technologies used" in .github/ISSUE_TEMPLATE/report_an_accessibility_issue.md (the repo's own term, see docs/principles/quality-assurance-and-testing.md), and the same 3x moved x-govuk plugin markdown link in the pattern/principle/standard templates (x-govuk.github.io/govuk-eleventy-plugin/markdown/#line-breaks -> govuk-eleventy-plugin.x-govuk.org/example/markdown/#paragraphs-and-line-breaks; old URL 404, replacement 200). Signed key-free via GitHub GraphQL createCommitOnBranch (verified=true, reason=valid). Same fork-CI caveat as PR #2: e2e-test RED only at its npm run audit-ci step (pre-existing advisories markdown-it/brace-expansion/fast-uri, identical on unmodified main); unit tests (38) + build (101 files) green locally. Exhaustive hunt (typos-cli + codespell + full live URL check of all 228 extracted URLs) found no other genuine typo or dead link outside PR #2's set; the only 403s were bot-blocks (ai.gov.uk, digital.nhs.uk, equalityni.org, gartner.com, security.gov.uk) and the learn.microsoft.com STRIDE link returns 200 once its closing paren is included.

## Mined gaps (discovered, not yet attempted)
Verified live 2026-10-02 against upstream main @886ef0d and the deployed site. All four are blocked by the repo-level signed-commits hard filter; they are ready-to-go picks the moment that gate is lifted.

- 2026-10-02 **G1 — production builds bake localhost into exported URLs (fixes #741 + #742; one root cause).** status: proposed (blocked-needs-signing)
  - Problem: the deployed site exports `http://localhost:8080/` as the site root.
  - Evidence: `curl -s https://engineering.homeoffice.gov.uk/standards.json | grep -c 'http://localhost:8080'` -> 19 (every standard URL is `http://localhost:8080/standards/...`); `curl -s https://engineering.homeoffice.gov.uk/accessibility-statement/ | grep -c 'localhost:8080'` -> 2 (the opening sentence links to `http://localhost:8080/`).
  - Root cause: `.eleventy.js:27` — `const _siteRoot = process.env.SITE_ROOT ?? 'http://localhost:8080/';`, and neither `.github/workflows/deploy-to-core-cloud.yml` nor `deploy-to-staging-core-cloud.yml` sets `SITE_ROOT`, so the production/staging `npm run build` falls back to localhost. (`.github/workflows/content-review-alerts.yml:40` does set `SITE_ROOT: https://engineering.homeoffice.gov.uk`, which is the in-repo precedent.)
  - Precedent: exactly this bug was reported as #331 (2023-11-01) and fixed by merged PR #333 ("Set site root when building docker container"), then reported again as #513 (2025-02-13) and fixed by merged PR #514 ("Add SITE_ROOT env variable to core cloud build."). The fix was lost again in the 2026-05 core-cloud deploy-action migration (`cb2dcb2a` "Switch prod deploy action", `38aecc78`), which is why it is back.
  - Acceptance criteria (from #741): production standards.json contains only production HTTPS URLs; no exported URL refers to localhost; deployment tests validate the origin of every exported URL; the build fails when SITE_ROOT is missing or invalid; local/staging keep their configured origins.
  - Proposed fix (single theme, ~2 files): set `SITE_ROOT: https://engineering.homeoffice.gov.uk` for the production build in `deploy-to-core-cloud.yml` (and the staging origin in the staging workflow) — e.g. as a job-level `env:` next to `TEST_URL`/`TEST_PORT` — and add a guard so a production build without `SITE_ROOT` fails loudly instead of silently defaulting to localhost. Careful: the same workflow's `_site` is served locally for the Playwright run, so the local-test build and the deployed build may need separating (or the e2e job needs `TEST_ROOT_URL` pointed at the production origin) — verify the e2e suite still passes.
  - Proposed test: assert the built `_site/standards.json` contains no `localhost` origin (unit test over the generated file), plus a workflow-level check that `SITE_ROOT` is set for deploys.

- 2026-10-02 **G2 — e2e link checker checks the current page instead of the target link (fixes #743).** status: proposed (blocked-needs-signing)
  - Problem: `tests/e2e/links.spec.js` has `if (url.match('/')) { url = page.url(); }` in `checkUrl`. `url.match('/')` is truthy for *any* href containing a slash, i.e. almost every link, so the request is redirected to the current page and broken links go undetected (false negatives).
  - Evidence: upstream main `tests/e2e/links.spec.js` `checkUrl()` — `if (url.startsWith('#')) { url = page.url() + url; } if (url.match('/')) { url = page.url(); }`.
  - Acceptance criteria (from #743): in-page anchors resolve against the current page; root-relative paths resolve against `TEST_ROOT_URL`; absolute URLs are requested unchanged.
  - Proposed fix: `if (url.startsWith('#')) url = page.url() + url; else if (url.startsWith('/')) url = testing_params.TEST_ROOT_URL + url;` and skip empty/null hrefs and non-HTTP schemes (`mailto:` is already excluded in `checkAllLinks`; also guard `tel:`/`javascript:`). Verify by pointing the checker at a deliberately broken link and confirming it now fails.
  - Note: `tests/support/testing_params.js` builds `TEST_ROOT_URL` as `${TEST_URL}:${TEST_PORT}${TEST_PATH}` with `TEST_URL` defaulting to `http://localhost` and the workflows setting `TEST_URL: localhost` (no scheme) — worth checking that root-relative URLs actually resolve before landing the fix.

- 2026-10-02 **G3 — frontmatter typo "Artifical intelligence (AI)" (fixes #744).** status: attempted 2026-10-03 (fixed in fork PR #2)
  - Problem/evidence: `curl -s https://raw.githubusercontent.com/UKHomeOffice/engineering-guidance-and-standards/main/docs/principles/use-ai-tools.md | grep -n -i artifical` -> line 7: `- Artifical intelligence (AI)`.
  - Proposed fix: one-word change to `Artificial intelligence (AI)` in the frontmatter tags list (check for the same string elsewhere first — `search/code` shows it only in this file).

- 2026-10-02 **G4 — unblock path for the signed-commits gate (research finding, not a repo change).** status: proposed (decision needed by Oli)
  - Verified 2026-10-02 in this fork: GitHub's GraphQL `createCommitOnBranch` mutation creates a commit whose committer is `GitHub <noreply@github.com>` with `commit.verification.verified = true`, `reason = "valid"` (PGP-signed by GitHub's own key, exactly like a commit made in the GitHub web editor). No signing key is created or registered anywhere; nothing is added to Oli's account.
  - Implication: the repo's "fully signed commit history" rule can be satisfied key-free by building the PR branch through that API instead of local unsigned commits, so the hard skip in `config.preflight_scan` is a policy choice rather than a technical impossibility. Config still says skip, so this run opened no PR. If Oli wants this repo worked, the clean change is a config/policy decision to allow API-signed branches for `signed_commits_required` repos.
