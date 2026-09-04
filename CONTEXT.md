# UKHomeOffice/engineering-guidance-and-standards context
> refreshed 2026-09-03 | upstream default: main @ 66cd84a

## Identity & policies
- upstream: UKHomeOffice/engineering-guidance-and-standards, default branch main, primary language JavaScript (Jekyll/Liquid docs site), English-first (UK English).
- CLA/DCO: none found (no CLA bot / DCO in CONTRIBUTING).
- AI-assisted PR policy: unstated (no AI ban/disclosure found in CONTRIBUTING or .github).
- signed commits required: YES — CONTRIBUTING.md (SEGAS-00009 "Signing code commits") requires a FULLY signed commit history to merge into main; unsigned/unverifiable commits block the merge. This is a HARD BLOCKER for the automation (config known_blockers.signed_commits): no signing key in env, and must NOT register one to Oli's account.
- PR template: none found (pr_template_present: false).
- external tracker: GitHub issues.

## Conventions (verified from merged PRs)
- Branch naming: mixed — feature/issue-number-style branches (e.g. 224-create-security-principle-secure-by-design-principle, 592-collect-dora-metrics-standard, 625-recommended-documentation) plus dependabot branches.
- Commit style: conventional-ish, imperative; repo is a docs/standards site.
- CI: GitHub Actions present (setup-node, playwright, liquidjs deps).

## Maintainer picture
- Home Office Digital engineering guidance site; active (pushed 2026-08-17).
- Recent external merges 60d: 8.

## Issue-area health
- Docs/standards site; content is well-maintained (prior audit 2026-08-05: 138 links verified, zero real 404s, misspellings clean).

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-08-05 docs/broken-link — outcome: skipped-no-genuine-doc-fix — 138 links verified clean; well-maintained; also requires signed commits.
- 2026-08-26 self-found — outcome: blocked-needs-signing — CONTRIBUTING.md requires fully signed commit history (SEGAS-00009); no signing key, must not register one to Oli's account.
- 2026-09-03 self-found — outcome: blocked-needs-signing — re-verified live: CONTRIBUTING.md still requires fully signed commit history to merge into main; no gpg binary, no ssh keys, no signing key in env; must not register one to Oli's account. Unlocks only if Oli registers a signing key on his GitHub account.
- 2026-09-04 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — re-verified live: upstream main still @ 66cd84a, CONTRIBUTING.md still requires a fully signed commit history to merge into main (SEGAS-00009); env has no gpg/ssh binary, no signing key, and must not register one to Oli's account. No PR opened (honest stop, no invented work).

## Mined gaps (discovered, not yet attempted)
- none — repo is a hard blocker (signed commits) until Oli registers a signing key.
