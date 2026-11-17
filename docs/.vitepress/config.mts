import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Varnit Monga',
  description: 'IS117 portfolio research, planning, and review evidence.',
  base: '/is117-career-research/',
  lang: 'en-US',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'Portfolio record',
    nav: [
      { text: 'Research', link: '/#research-question' },
      { text: 'Portfolio Plan', link: '/#_2-plan-portfolio' },
      { text: 'Review & checks', link: '/review' }
    ],
    sidebar: [
      { text: 'Career research', items: [
        { text: 'Question & sources', link: '/#research-question' },
        { text: 'Role comparison', link: '/#comparison' },
        { text: 'Evidence & assumptions', link: '/#evidence-vs-assumptions' },
        { text: 'Findings → decisions', link: '/#from-finding-to-design-decision' },
        { text: 'Internship research', link: '/#ai-internship-research' },
        { text: 'Research reviewer check', link: '/#reviewer-check-for-peer-review' }
      ]},
      { text: 'Portfolio Plan', items: [
        { text: 'Reader & approaches', link: '/#_2-plan-portfolio' },
        { text: 'Technology & scope', link: '/#technology-and-scope-decision' },
        { text: 'Stories & observable checks', link: '/#essential-features-and-observable-checks' },
        { text: 'Professional destinations', link: '/#destinations' },
        { text: 'Feedback & open items', link: '/#feedback-changes-and-open-items' },
        { text: 'Canvas submission draft', link: '/#canvas-submission-draft' }
      ]},
      { text: 'Review & maintenance', items: [
        { text: 'Review routine', link: '/review' },
        { text: 'Repository', link: 'https://github.com/vvm3-IT/is117-career-research' }
      ]}
    ],
    search: { provider: 'local' },
    outline: [2, 3],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vvm3-IT/is117-career-research' }],
    editLink: { pattern: 'https://github.com/vvm3-IT/is117-career-research/edit/main/docs/:path', text: 'Suggest an edit on GitHub' },
    footer: { message: 'IS117 · Research → Plan → Review. Planned checks are not observed results.' }
  }
})
