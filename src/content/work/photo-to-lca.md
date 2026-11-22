---
title: Photo-to-LCA in the grocery aisle, and the evidence to kill it
summary: I built a phone-photo-to-carbon-footprint prototype, ran an MIT student hackathon to test it with shoppers, and used what we learned to decide not to build it.
org: Planet FWD
role: CTO
years: 2024
phase: [zero-to-one]
capabilities: [product, technology, data-ai]
outcomes:
  - { value: "Full stack", label: "prototype I built myself, from photo to LCA" }
  - { value: "MIT", label: "student hackathon to test demand with real shoppers" }
featured: true
order: 5
---

## The situation

We could already generate an LCA from a product’s name. Could we do it from a photo taken on a phone in a real store? And would shoppers even want that?

## What I did

- **Built the prototype myself, across the full stack.** Take a photo, isolate the product in the image, and have an LLM identify it, with a second LLM confirming or questioning the match. Then send the name, details, and estimated weight to the Planet FWD APIs to generate an AI LCA.
- **Dealt with real cameras.** Photos were blurry from moving hands, or poorly lit, with shadows and reflections. Detecting a bad photo automatically is hard, and we didn’t fully solve it.
- **Tested demand, not just the tech.** We sponsored a hackathon with MIT students to try many user experiences in real grocery aisles. I was a technical mentor and a judge, and we invited the winning teams back to Planet FWD to share what they’d learned.

## What happened

- The LCAs from grocery aisle photos were surprisingly good, despite the messy images.
- The key insight came from the students’ conversations with shoppers. People were curious about carbon footprints but weren’t going to scan everything in their basket. They decide on price, health, and taste.
- So we killed further development. We didn’t spend engineering time on it, and it lives on as a conference demo of what the technology can do.

## What I’d tell you

The cheapest feature is the one you prove you don’t need. Build just enough to put it in front of real people, then listen.
