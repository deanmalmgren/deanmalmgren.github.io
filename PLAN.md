# Site plan

## The narrative

**I help companies figure out what to build, build it, and grow the team that keeps building it.**

Most companies hire product leadership and technology leadership separately and hope they get along. Dean has done both jobs, often at once, with a data scientist's habit of checking the numbers. The evidence comes in two halves:

| | Zero to one (find it, prove it, ship it) | One to n (scale it) |
|---|---|---|
| Founder | Datascope: co-founded, bootstrapped, acquired by IDEO. Elemetric: Techstars, and the lesson about killing ideas | Datascope: 50%/yr growth to 15 people |
| Executive | Planet FWD: LCA engine, AI-generated LCAs, photo-to-LCA (and the decision to kill it) | IDEO: 2× data scientists and 2× AI × Design revenue, through influence. Planet FWD: platform rebuild, 4→12 team, ~35%/yr growth, >100% renewal retention, ROI-driven roadmap, agentic dev flow |

Three things set Dean apart from the usual fractional CTO pitch, and the site should keep coming back to them:
1. **He still builds.** He wrote and maintains the LCA engine and built the agentic dev flow. He doesn't manage from a distance.
2. **He's rigorous about AI.** He backtests LLM output against ground truth and kills features when the evidence says to.
3. **He's done both jobs.** Product and technology from one seat, plus a founder's view of the P&L.

### Why the resume may be underperforming
- The headline ("Experienced technology leader, building a better planet for the next generation") reads as climate-only and leaves out product. Lead with the product + technology + data blend and use climate as a domain, not the identity.
- The bullets describe what Dean did more than what changed. The case studies here lead with outcomes. Reuse the `outcomes` numbers on the resume.
- To a reader skimming for operators, IDEO can read as "consultant." Pair it with the numbers (2× revenue, 2× team, 100% retention) so it reads as scaling a business line.

## Audiences

1. **Prospective clients** (primary): founders and CEOs at seed to Series B, and leadership teams at bigger companies starting new AI products. They want to know: has he done my problem before, what will he actually do, and how do we start? → home page, `/work`, engagements, contact.
2. **Hiring managers and recruiters** (secondary): link `/work` or a single case study from cover letters. Each case study is a self-contained story, so it can be dropped into an application. The stories in `~/Projects/application-agent/stories/` are the source for both.

## Roadmap

### Phase 1: launch (this branch)
- [x] Replace Jekyll with Astro and typed content collections
- [x] Contact form (Formspree) so no email address is published
- [ ] Create the Formspree form and paste its endpoint into `src/data/site.ts`
- [x] Positioning, proof bar, the four capabilities, engagements
- [x] Nine case studies drafted from the application-agent stories
- [x] Writing, press, and open source page; About page
- [ ] Dean reviews every case study for accuracy and what's OK to say publicly
- [ ] Switch GitHub Pages to deploy from GitHub Actions, then merge to `master`
- [ ] Add a headshot (`public/`) and an Open Graph share image

### Phase 2: credibility (next 2–4 weeks)
- [ ] **Testimonials (later).** Ask 4–6 people for two or three sentences each: a Planet FWD CEO or board member, an IDEO colleague, a former report, a Datascope client. Add a `testimonials` collection and show them on the home page and the relevant case studies. This is the most important missing piece of proof.
- [ ] (Maybe later) a booking link
- [ ] (Maybe later) a custom domain: add `public/CNAME` and update `site` in `astro.config.mjs`
- [ ] A downloadable one-page PDF resume that matches the new narrative
- [ ] Privacy-friendly analytics (Plausible or GoatCounter) to see which case studies get read

### Phase 3: momentum (ongoing)
- [ ] **Notes.** Short posts on what Dean is learning, starting with the agentic development flow, which is very timely. Add a `notes` collection. One post a month is plenty.
- [ ] Case studies for fractional clients as engagements wrap up (with permission)
- [ ] A specific landing page per engagement type once one starts pulling in leads
- [ ] Keep application-agent and the site in sync: when a new story gets written for an application, consider turning it into a case study

## Open questions for Dean
See the summary in the Claude Code session that created this file.
