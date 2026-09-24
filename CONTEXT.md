# UKHomeOffice/engineering-guidance-and-standards context
> refreshed 2026-09-24 | upstream default: main @ 886ef0d

## Identity & policies
- upstream: UKHomeOffice/engineering-guidance-and-standards, default branch main, primary language JavaScript (Jekyll/Liquid docs site), English-first (UK English).
- CLA/DCO: none found (no CLA bot / DCO in CONTRIBUTING).
- AI-assisted PR policy: unstated (no AI ban/disclosure found in CONTRIBUTING or .github).
- signed commits required: YES — CONTRIBUTING.md (SEGAS-00009 "Signing code commits") requires a FULLY signed commit history to merge into main; unsigned/unverifiable commits block the merge ("You will not be able to merge the resulting PR if any commits in the associated branch are unsigned, or if the signatures can't be verified by GitHub"). Re-verified live 2026-09-24. This is a HARD BLOCKER for the automation (config known_blockers.signed_commits): no signing key in env, and must NOT register one to Oli's account.
- PR template: none found (pr_template_present: false).
- external tracker: GitHub issues.

## Conventions (verified from merged PRs)
- Branch naming: mixed — feature/issue-number-style branches plus dependabot branches.
- Commit style: conventional-ish, imperative; repo is a docs/standards site.
- CI: GitHub Actions present (setup-node, playwright, liquidjs deps).

## Maintainer picture
- Home Office Digital engineering guidance site; active (pushed 2026-09-14; upstream main moved 66cd84a -> 886ef0d since last run).
- Recent external merges 60d: 8.

## Issue-area health
- Docs/standards site; content is well-maintained (prior audit 2026-08-05: 138 links verified, zero real 404s, misspellings clean).
- Since the 2026-09-09 run, several new open BUG-label issues appeared (2026-09-16): #741 "Fix production URLs in standards.json", #742 "Accessibility page references page hosted on localhost", #743 link checker rewrites most URLs, #744 "Fix typo in AI tag on use-ai-tools page". None are maintainer-engaged (0 comments each). They all hit the signed-commits hard-skip; no PR can be opened per config.

## Gap ledger (dedupe — READ FIRST, never re-pick)
- 2026-08-05 docs/broken-link — outcome: skipped-no-genuine-doc-fix — 138 links verified clean; well-maintained; also requires signed commits.
- 2026-08-26 self-found — outcome: blocked-needs-signing — CONTRIBUTING.md requires fully signed commit history (SEGAS-00009); no signing key, must not register one to Oli's account.
- 2026-09-03 self-found — outcome: blocked-needs-signing — re-verified live: CONTRIBUTING.md still requires fully signed commit history to merge into main; no signing key in env; must not register one to Oli's account. Unlocks only if Oli registers a signing key.
- 2026-09-04 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — re-verified live: upstream main @ 66cd84a, CONTRIBUTING.md still requires a fully signed commit history (SEGAS-00009); no signing key, must not register one to Oli's account. No PR opened.
- 2026-09-05 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a); no gpg/gpg2/ssh/signing key in env; must not register one to Oli's account. No PR opened.
- 2026-09-07 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a, unchanged); no signing key in env; must not register one to Oli's account. No PR opened.
- 2026-09-08 self-found (loop.sh) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a, unchanged); no signing key in env; must not register one to Oli's account. No PR opened.
- 2026-09-09 trivial-fix pass (loop-trivial) — outcome: blocked-needs-signing — re-verified live (main @ 66cd84a, unchanged); no signing key in env; must not register one to Oli's account. No PR opened.

- 2026-09-24 self-found (loop.sh single-contribution cycle, ANY repo type) — outcome: blocked-needs-signing — re-verified live against current upstream CONTRIBUTING.md (main moved to 886ef0d): repo still requires a fully signed commit history to merge into main (SEGAS-00009 "Signing code commits"; "You will not be able to merge the resulting PR if any commits in the associated branch are unsigned, or if the signatures can't be verified by GitHub"). Env has no secret GPG keys (0 'sec'), no ~/.ssh, no user.signingkey, no commit.gpgsign; MUST NOT register a signing key to Oli's account (config known_blockers.signed_commits + preflight_scan.critical_filters_hard_skip.signed_commits_required). No maintainer-engaged open issue survives (newest BUG issues #741-744 are uncommented). Cannot produce a genuine, signed, mergeable contribution; hard-skipped per critical filter. No PR opened (honest stop, no invented work). Unlocks only if Oli registers a GPG/SSH signing key on his GitHub account.

## Mined gaps (discovered, not yet attempted)
- none — repo is a hard blocker (signed commits) until Oli registers a signing key.
