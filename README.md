# deanmalmgren.github.io

Dean Malmgren's portfolio site, for consulting and fractional CTO/CPO work. Built with [Astro](https://astro.build) and deployed to GitHub Pages by GitHub Actions on every push to `master`.

```sh
npm install
npm run dev      # http://localhost:4321, drafts included
npm run build    # production build into dist/, drafts excluded
```

## Adding content

| To add… | Edit |
|---|---|
| A case study | New file in `src/content/work/<slug>.md` → served at `/work/<slug>/` |
| An article, talk, press mention, or repo | New entry in `src/data/links.yaml` |
| Headline, proof numbers, engagements, client list | `src/data/site.ts` |
| Bio and experience timeline | `src/pages/about.astro` |

A case study looks like this. The build fails if the frontmatter doesn't match the schema in `src/content.config.ts`, so typos get caught.

```markdown
---
title: "Short, specific title (quote it if it has a colon)"
summary: One sentence. Shown on cards and in search results.
org: Company
role: Your role
years: 2024–2025
phase: [zero-to-one]            # and/or one-to-n
capabilities: [product, data-ai] # product | technology | data-ai | team
outcomes:
  - { value: "3×", label: "what the number means" }
featured: true   # show on the home page
order: 10        # lower sorts first
draft: true      # hidden from the live site until you remove this
---

## The situation
## What I did
## What happened
## What I'd tell you
```

Rules for content: every number traces to something real, write "I" rather than "we" for what you did yourself, and leave client names out unless they're OK to name publicly.

## Contact form

The site never shows Dean's email address. Messages come in through a [Formspree](https://formspree.io) form, which forwards each submission by email and filters spam (there's also a honeypot field).

1. Sign up at formspree.io (the free tier allows 50 submissions a month) and create a form that sends to your email.
2. Copy its endpoint (`https://formspree.io/f/xxxxxxxx`) into `formEndpoint` in `src/data/site.ts`.

If `formEndpoint` is empty, the footer shows a LinkedIn button instead.

`public/email-signature.png` keeps its old URL (`/email-signature.png`) because email signatures link to it.
