# IS117-007 Portfolio: Research and Plan

Research comparing two early-career roles, **AI Engineer** and **Forward Deployed Engineer**, and how the findings shape my portfolio plan.

- **Research source:** [docs/index.md](docs/index.md).
- **Sources:** original employer job descriptions, linked and dated on the research page.
- **Privacy:** my full reflection, role cards and personal eligibility details are submitted privately in Canvas and are **not** in this repository.

## Portfolio Plan

Continue the individual portfolio in this same repository.

- [Current Plan, stories, destinations, and Canvas submission draft](docs/index.md#2-plan--portfolio)
- [Existing published documentation](https://is117-career-research.smoothpopcorn.chatgpt.site/)
- The GitHub record is current after the Nov 17 update. The separately hosted documentation has not been verified as synchronized.
- Review issues [#4](https://github.com/vvm3-IT/is117-career-research/issues/4) and [#5](https://github.com/vvm3-IT/is117-career-research/issues/5) contain received feedback; their missing response/retry evidence is documented in the Plan.

## GitHub Pages

- [Career research and role comparison](https://vvm3-it.github.io/is117-career-research/)
- [AI internship research and skills](https://vvm3-it.github.io/is117-career-research/#ai-internship-research)

## Peer review

Reviewers: please read the research page and file **3–5 constructive issues**. Each issue should:

1. Name a specific observation, gap or question.
2. Explain why it matters.
3. Suggest a useful next step, with a page, source or example if you can.

Please also try the **Reviewer check** at the bottom of the research page: open a source, then trace one finding into the proposed decision and its check.

## How I handle feedback

For each issue I will write my decision in the issue (implement, investigate, defer or decline) and explain why. For accepted changes I will reference the issue number in the commit message (for example, `Clarify research question (#3)`), link that commit in the issue and describe how I checked it. I'll ask the reviewer to retry before I close a resolved issue. Unfinished work stays open with a next step.

## AI assistance

I drafted this research with Claude (Anthropic). I verified the facts against the original employer pages and noted where a source was secondary.


## VitePress documentation

Source: `docs/index.md` and `docs/review.md`. Configuration: `docs/.vitepress/config.mts`.

- Install: `npm install`
- Develop: `npm run docs:dev`
- Build: `npm run docs:build`
- Preview: `npm run docs:preview`

The `Publish VitePress documentation` workflow builds and deploys on main-branch pushes. GitHub Pages target: https://vvm3-it.github.io/is117-career-research/ . Check the workflow's result before treating publication as verified. The separate chatgpt.site copy is not automatically synchronized by this workflow.
