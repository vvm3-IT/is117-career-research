---
title: "Career Research: AI Engineer vs. Forward Deployed Engineer"
---

# Career Research: AI Engineer vs. Forward Deployed Engineer

*Last checked: November 11, 2026. Public page. My personal reflection and eligibility details are kept privately in Canvas.*

## Research question

**What do early-career AI Engineer and Forward Deployed Engineer roles actually ask for, and what should my portfolio show to move toward them?**

## Sources (original employer descriptions)

| # | Role | Employer | Link | Date | Status when checked |
|---|------|----------|------|------|------------------|
| S1 | Forward Deployed Software Engineer, New Grad – Commercial (Chicago, IL) | Palantir Technologies | [Lever posting](https://jobs.lever.co/palantir/e500bcf3-19d8-4d3c-b340-4d76e4a55b40) | Posted date not stated; checked Nov 11, 2026 | Open |
| S2 | AI Engineer I, Launch Program 2027 – St. Louis, MO (R-284852) | Mastercard | [Workday posting](https://mastercard.wd1.myworkdayjobs.com/en-US/Campus/job/OFallon-Missouri/AI-Engineer-I--Launch-Program-2027---St-Louis--MO--US_R-284852) · [copy of the posting on WayUp](https://www.wayup.com/i-j-AI-Engineer-I-Launch-Program-2027-St-Louis-MO-US-Mastercard-170355302709667/) | Posted date not stated; first logged by a job tracker Oct 16, 2026; checked Nov 11, 2026 | **Closed.** The employer page now says it doesn't exist. |

**About S2:** The employer page was gone by the time I checked, so I read the full text on WayUp's copy of the posting, which links back to Mastercard's posting. Treat S2 details as **secondary-source**.

## Comparison

| | S1 Palantir FDE (New Grad) | S2 Mastercard AI Engineer I |
|---|---|---|
| Core work | Embed with customers, build custom apps and **LLM workflows**, own projects from first conversation to shipping | Build **AI tools for regulatory compliance**, map rules to controls and evidence, full AI lifecycle with mentorship |
| Languages / tools | Python, Java, C++, **TypeScript/JavaScript** or similar | Software development + hands-on use of AI tools (Claude, Copilot, Gemini…) |
| Experience asked | Not stated beyond "new grad" | AI/ML app experience **and** a prior internship or substantial AI project |
| Graduation window | Dec 2026 or Spring 2027 | Apr–Jun 2027 |
| People skills | Own stakeholder relationships, mixed technical/non-technical teams | Cross-functional program, works with regulatory experts |
| Pay (stated) | $135k–$145k base estimate | $100k base |
| Travel | 25–50% | Not stated |
| Deadline | Not stated | Not stated (now closed) |

## Evidence vs. assumptions

**Evidence (stated in the sources):**

- Both roles build working software with AI/LLMs, not just research (S1, S2).
- S1 accepts TypeScript/JavaScript and lists front-end frameworks among the problems FDEs solve.
- S2 explicitly wants evidence of past AI/ML project work.
- Both roles target graduates in a Dec 2026–Jun 2027 window.
- S2 closed sometime before Nov 11, 2026. No deadline was ever stated.

**Assumptions (not proven by these two sources):**

- That these two postings are typical of the field. Two postings is a small sample.
- That a portfolio project can partly stand in for the "AI project experience" S2 asks for.
- That internships broadly ask for the same skills as new-grad roles. The internship sample below shows some overlap, and requirements vary by role.

## From finding to design decision

| Finding | Proposed portfolio decision | How I'll check it |
|---|---|---|
| S2 wants visible AI/ML project work, and S1 builds "LLM workflows" for users. | Add one small **AI-powered feature** to my portfolio site (for example, a helper that answers questions about my projects), with a README section explaining it. | *Planned, not yet observed:* Run 10 fixed questions on the deployed helper. For 8 questions covered by the project docs, record the expected answer and source page before testing. Count an answer as correct only if it matches the docs and cites a supporting page. For 2 questions the docs cannot answer, check that the helper says it cannot find the answer. Aim for at least 7 of 8 correct answers and both appropriate fallbacks. Publish the questions, sources, results, and limitations in the README so a reviewer can repeat the test. |
| Both roles center on solving a real user's problem. | Write each portfolio project page as **problem → user → what I built → evidence it works**. | *Planned:* a classmate reads one page and can state the user's problem in one sentence. |
| S1 accepts JavaScript, but JS logic is a gap for me. | Practice JS first and build the AI feature in JavaScript. | *Planned:* one logged JS exercise per day for a week, linked in the worklog. |

## AI internship research

Three employer listings for summer 2027 showed application forms when checked on November 12, 2026. This sample covers applied AI, ML infrastructure, and model development. Availability and eligibility can change.

| Internship | What interns work on | Skills and eligibility from the posting |
|---|---|---|
| Addepar · AI Engineering Intern · New York, NY, in person | Build reusable AI platform components, evaluate models, and document and demo the work. | Python and an ML framework such as PyTorch or TensorFlow. Foundations in ML, natural language processing, or AI systems, plus familiarity with LLMs, prompting, retrieval-augmented generation (RAG), or AI app development. Open to students pursuing a relevant bachelor's or master's degree. Rolling review. [Employer listing](https://job-boards.greenhouse.io/addepar1/jobs/8927543002) |
| IMC · Machine Learning Engineer Intern · New York, United States | Build systems that support large-scale model training and deployment, including GPU and distributed computing work. | Strong algorithms and data structures, proficiency in a programming language, and collaboration across technical and nontechnical teams. Python or C++ preferred. The posting specifies a relevant degree and a September 2027–July 2028 graduation window. [Employer listing](https://job-boards.greenhouse.io/imc/jobs/4962456101) |
| Raft · AI/ML Intern · Remote within the continental U.S., with travel to headquarters | Help train and deploy models, build agentic workflows, and document findings. | PyTorch, LangChain, LangGraph, and prior research are highly preferred. The posting highly prefers relevant master's or PhD enrollment and requires U.S. citizenship. [Employer listing](https://job-boards.greenhouse.io/raft/jobs/6240555004) |

### Skills to build and show

1. **Python and software engineering.** Write a small Python API with tests and a setup guide. Practice data structures and explain the time and space cost of a solution. Addepar asks for Python and engineering fundamentals, while IMC explicitly asks for algorithms and data structures.
2. **Machine learning fundamentals and evaluation.** Train a small model, compare it with a simple baseline on held-out data, and document where it fails. This gives a reviewer concrete evidence of ML framework experience and the evaluation work described by Addepar.
3. **Applied LLM development.** Extend the proposed portfolio helper with a JavaScript interface and a Python service that retrieves answers from project documentation. Test it on a fixed set of questions, including questions the documentation cannot answer. Record whether its answers are correct and supported by the cited project pages. This is a portfolio exercise based on Addepar's interest in LLMs and RAG.
4. **Deployment and communication.** Deploy the demo, document how to reproduce the results, and ask a classmate to try it. Summarize one failure, what changed, and how the change was checked. The postings describe collaboration, and Addepar and Raft explicitly describe documenting work.

These three postings suggest starting with programming, testing, and evaluation. GPU and distributed systems are especially relevant to IMC's work, while agent frameworks are more specific to Raft's listing. Use the employer's own posting to check the requirements for each role.

## Alternatives considered

- **General software engineer roles:** broader, but less aligned with my interest in customer-facing problem solving.
- **Data analyst roles:** easier to enter, but less building and less AI work.
- **AI research roles:** usually require graduate degrees. Not a realistic near-term target.

## AI use and verification

I used Claude (Anthropic) to search for postings and draft this page. I opened the Palantir page on Nov 11, 2026 and checked each fact in the table against it. The Mastercard link returned "page doesn't exist," so those details come from the WayUp copy and are labeled as secondary.

## Reviewer check (for peer review)

1. Open **S1**, the Palantir posting, and find where it describes building LLM workflows for users.
2. In the [From finding to design decision](#from-finding-to-design-decision) table, trace that evidence to the proposed AI-powered helper that answers questions about portfolio projects.
3. Review the planned 10-question evaluation. Check whether comparing 8 answers with the project docs and testing 2 questions the docs cannot answer would show that the helper is accurate and handles missing information. File an issue with any gap you find and a concrete suggestion.

## 2. Plan — Portfolio

**Checkpoint:** Introduce Nov 10, work and review Nov 12, submit Nov 17 at 8:30 a.m. Eastern (2026).

**Reader and goal.** My first reader is an internship recruiter looking for evidence that an NJIT Enterprise AI student can build working software and explain their contribution. A technical reviewer should be able to follow that evidence into the code, documentation, or a repeatable demo. The research above points to documenting user problems, showing concrete project work, and testing the proposed JavaScript AI helper. The Mastercard evidence comes from the secondary copy identified above.

| Approach | Page and destination choices | Tradeoff |
|---|---|---|
| A — Project-first | Home introduces me, then shows three project cards. Each opens a case study with its repository link. Header links lead to GitHub, LinkedIn, and a readable résumé page with a PDF download. | Recruiters see work immediately. Consistent cards make three different projects easy to compare. |
| B — Résumé-first | Home leads with a short résumé summary and links to the full résumé, GitHub, and LinkedIn. A Projects page lists all three case studies and their repository links. | Readers get career context immediately. Project evidence sits one click deeper. |

**Decision:** Plan A. Lead with evidence and keep résumé access in the header. Use the same content and claims in both layouts so a peer can compare navigation. Ask a peer to find the résumé and a project's code in each layout without hints and record the first clicks and any wrong turns.

**Brand and visual choices.** Use my name, my Enterprise AI focus, and a calm, direct voice across the site. Proposed visual direction: a restrained palette, readable headings, consistent spacing, and a single accent for links and focus. Carry over the Quiet Reps brand work as an example of consistent hierarchy and evidence-led copy. Its product identity belongs inside its case study. Use actual project screenshots with captions, label demo behavior and work in progress, credit teammates, and attach proof to claims. Use descriptive actions such as “View T-shirt repository” and “Read résumé.”

### Essential features and observable checks

| ID | User story | Essential feature | Observable check |
|---|---|---|---|
| S1 | As an internship recruiter, I want to understand Varnit's focus and see his work quickly so I can decide what to review. | Home heading, Enterprise AI introduction, and three project cards. | At a 390 px viewport, a peer opens Home, identifies my focus, and opens a project without hints or horizontal scrolling. |
| S2 | As a technical reviewer, I want to inspect all three repositories and see what Varnit contributed so I can verify his work. | Three case studies with problem, user, contribution, evidence, and labeled repository links. The team case study credits all members. | Open all three links while signed out, check each lands on the intended repo, and ask the reviewer to explain one user problem and one contribution after reading its case study. |
| S3 | As a recruiter, I want a readable résumé and access to Varnit's professional profiles so I can review his background. | Header links to GitHub, LinkedIn, and the HTML résumé, with a text-selectable PDF on the résumé page. | Tab to each link and open it. Confirm both profiles belong to me. At 390 px, read the résumé without horizontal scrolling and download the PDF, open it, and select text. |
| S4 | As a technical reviewer, I want to see how the project helper handles questions so I can judge whether its answers are grounded. | Planned JavaScript interface, linked source pages, plain fallback, and evaluation record. | Prewrite expected answers and source pages for eight covered questions and add two unsupported questions. Pass at seven of eight correct with supporting citations and two of two explicit fallbacks. Publish questions, results, and limitations. |

### Destinations

| Destination | Target or next step |
|---|---|
| Personal GitHub | [vvm3-IT](https://github.com/vvm3-IT) |
| LinkedIn | Confirm my exact public profile URL before adding it. |
| Individual T-shirt repository | [plain-white-tee](https://github.com/vvm3-IT/plain-white-tee) |
| Group business repository | Add the confirmed shared repository URL and every member's name and GitHub username. |
| Individual portfolio repository | Confirm my portfolio repository URL. The career research repository holds this documentation record. |
| Résumé | Plan a site-local résumé page and downloadable PDF. Add verified content and check both published destinations. |
| Published documentation | [Career research and portfolio planning record](https://vvm3-it.github.io/is117-career-research/) |
| Deployed portfolio | Add the live URL when available and repeat the checks on that URL. |

### Feedback, changes, and open items

- [Research peer issue #4](https://github.com/vvm3-IT/is117-career-research/issues/4) asked for measurable helper accuracy. The Plan carries that decision into S4 by specifying expected sources, a threshold, and unsupported questions.
- [Research peer issue #5](https://github.com/vvm3-IT/is117-career-research/issues/5) asked for a direct connection between research and the proposed feature. The Plan connects the research on LLM workflows to the helper and its evaluation.
- **Plan-specific review pending.** Review request draft: “Please pick S1–S4, explain the reader and goal in your own words, walk through the observable check, and file one question or change as a GitHub issue.” Record the actual request link after sending. If review is unavailable, contact the instructor to arrange a reviewer.
- For each incoming Plan issue, review it with AI, then record my decision and reason in the issue. For an accepted change, reference the issue in the documentation commit or PR, link it in the issue, describe my verification, and ask the reviewer to retry before closing. For deferred or investigated items, record a next step. Explain declined suggestions in the issue.
- **Verification status:** The research-to-Plan mapping and GitHub account and T-shirt repo destinations were checked against the existing research and GitHub records. Site walkthroughs, peer retest, and the helper evaluation are pending.
- **AI assistance:** ChatGPT drafted the comparison, stories and checks from the existing career research and checked the listed research issue references against GitHub. I need to confirm the proposed visual direction, missing destinations, team credits, and the checks before submitting.
