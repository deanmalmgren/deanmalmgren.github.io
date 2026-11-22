---
title: An agentic development flow that lets a small team ship like a big one
summary: I built a sandboxed, multi-agent development pipeline that plans, implements, tests, and reviews its own work, so a small team delivers 20–40 tickets a week.
org: Planet FWD
role: CTO
years: 2025–present
phase: [one-to-n]
capabilities: [technology, data-ai, team]
outcomes:
  - { value: "20–40", label: "tickets delivered per week" }
  - { value: "4", label: "agents per task: implementer, tester, quality assessor, independent reviewer" }
  - { value: "3–7", label: "agents running in parallel at a time" }
featured: true
order: 2
---

## The situation

I started building our agentic development flow in 2025. Planet FWD is a small company with an ambitious roadmap. We needed to deliver more than a team our size normally could, so I invested heavily in it.

## What I did

I built the whole thing myself.

- **Wired into how we already work.** It’s plugged into Slack and Jira and creates cards automatically.
- **Sandboxed by default.** Agents run locally or in a self-hosted cloud in a fully sandboxed harness, so they can move fast without putting anything at risk.
- **Three agents per task.** An *implementer* writes the code. A *tester* pushes on the edge cases. A *quality assessor* checks our standards, makes sure we reuse existing patterns instead of inventing new ones, and keeps the code readable “not just by machines, but also by humans.”
- **Independent review.** Code review is a separate agent with no context on the work, so the review is truly independent.
- **Proof, not promises.** Every PR comes with a Playwright demo video, so I can see that it works before I read the diff. When I leave review comments, the agents implement them, rerun the tests, and tell me when it’s ready to look at again.
- **Right-sized context.** The design principle throughout: give agents enough context to do the job well without burying them in instructions.

## What happened

- Our small team delivers 20–40 tickets a week. That’s not something I would have thought possible a year earlier.
- I typically have 3 to 7 agents working on my laptop at any given time.
- “The whole flow is highly automated, as though I’m working with other people, but it’s really just agents all around.”

## What I’d tell you

Agents are only as good as the verification around them. The leverage didn’t come from writing code faster. It came from the tester, the quality assessor, and the independent reviewer, which catch problems before a person has to.
