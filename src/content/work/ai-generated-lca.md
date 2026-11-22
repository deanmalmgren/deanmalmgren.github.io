---
title: AI-generated LCAs from a product name, tested against 200–300 real ones
summary: A three-prompt LLM pipeline that produces a full life cycle assessment from a product’s name and weight, backtested against hundreds of hand-built LCAs.
org: Planet FWD
role: CTO
years: 2024
phase: [zero-to-one]
capabilities: [product, data-ai, technology]
outcomes:
  - { value: "±10–20%", label: "of gold-standard LCAs, about the spread of the emission factors themselves" }
  - { value: "200–300", label: "hand-built LCAs used for the backtest" }
featured: true
order: 4
---

## The situation

A hand-built LCA takes real work and real data, and many customers don’t have good data about their products. Could we produce a credible, full LCA from almost nothing: just a product’s name and weight?

## What I did

- **Designed the pipeline.** I helped prototype and write the LLM prompts. There are three: one infers the materials and their proportions (and, from the weight, the mass of each), one infers the production energy, and one infers the packaging. Combined with our defaults, they produce a full cradle-to-gate or cradle-to-grave LCA.
- **Owned it end to end.** From the first idea through prototyping, delivery, and integration into the product.
- **Tested it against ground truth.** We generated AI LCAs for 200–300 products we’d already assessed by hand for customers and compared the two. Our data scientist ran the formal accuracy analysis.

## What happened

- AI LCAs generally came within ±10–20% of the hand-built version. Emission factors vary by about that much anyway, so that’s close to the best you can hope for.
- The backtest showed exactly where it breaks: material coverage. Materials are usually about 80% of a product’s footprint. Food, where our library was strong, worked well. Electronics, where it was thinner, showed us where the library had to grow, and we’ve expanded it since.
- It’s still in the product. Customers and our sales team use it, and it’s one of our strongest demos.

## What I’d tell you

An LLM feature is only as good as the reference data behind it. Backtest against ground truth early, and you’ll learn where to invest.
