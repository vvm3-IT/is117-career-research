# Review & checks

This page helps a reviewer inspect the existing research and portfolio Plan. It does not record a new peer review or completed test.

## Review one story

1. Open the [Portfolio Plan](./index.md#_2-plan-%E2%80%94-portfolio) and choose S1–S4.
2. Explain the intended reader and goal in your own words.
3. Describe how you would perform the story's observable check.
4. File one question or suggested change in the [same repository's issues](https://github.com/vvm3-IT/is117-career-research/issues).

For research, use the [source-to-decision reviewer check](./index.md#reviewer-check-for-peer-review). Open the original source before evaluating the proposed decision.

## Preserve the decision history

| Step | Evidence to record |
|---|---|
| Feedback | Issue URL and specific observation |
| Decision | Implement, investigate, defer, or decline, with the author's reason |
| Change | Linked documentation/code commit or PR; accepted work references the issue number |
| Verification | What was checked, on which version, and the actual result |
| Reviewer retry | Reviewer's recorded retry and remaining concerns |
| Resolution | Close only after a resolved issue has the required evidence; retain next steps for unfinished work |

## Existing feedback

- [Issue #4: helper evaluation](https://github.com/vvm3-IT/is117-career-research/issues/4)
- [Issue #5: source-to-decision connection](https://github.com/vvm3-IT/is117-career-research/issues/5)

See the [Nov 17 audit](./index.md#review-1-audit-and-next-steps-%E2%80%94-november-17-2026) for the observed evidence gaps. No reviewer retry is asserted here.

## Keep plans separate from results

The phone, keyboard, résumé download, profile navigation, and AI helper checks remain planned until performed and logged. A successful documentation build verifies generation of the site; it does not pass the portfolio's user stories.

## Maintain this site

Edit Markdown in `docs/`. Run `npm install`, then `npm run docs:dev` for local editing or `npm run docs:build` for a production check. VitePress provides the navigation, local search, outline, and theme.

The publication workflow builds the same repository's Markdown and uploads the resulting static site to GitHub Pages. Source content remains in the existing record so previous research and Plan links can still be traced.

[Return to the evolving record](./index.md)
