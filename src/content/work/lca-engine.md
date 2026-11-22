---
title: "The LCA engine: ~20 messy data sources, one traceable calculation library"
summary: I built the computational core of Planet FWD, a Python library and API that turns about 20 government and industry datasets into versioned, traceable emission factors.
org: Planet FWD
role: CTO and primary author
years: 2023–present
phase: [zero-to-one]
capabilities: [technology, data-ai]
outcomes:
  - { value: "~20", label: "data sources integrated and auto-ingested" }
  - { value: "100%", label: "of LCA and inventory calculations run on it" }
  - { value: "v7", label: "released November 2026" }
featured: true
order: 3
---

## The situation

When I arrived, the science team did life cycle assessment (LCA) calculations in spreadsheets and typed the results into a database by hand. If you asked where an emission factor came from, the answer was an obscure spreadsheet that had probably been lost.

## What I did

One of the first things I built was what we lovingly call the LCA engine.

- **One library, two interfaces.** A Python package that serves an API and can also be used directly in Python.
- **About 20 sources under one roof.** EPA, USLCI, ecoinvent, EXIOBASE, USEEIO, the GHG Protocol, eGRID, Ember, Green-e, GREET, BLS, US Census, DEFRA, BEA, and several NGO datasets.
- **Automated ingestion.** Each agency publishes differently: a spreadsheet, an API, a PDF, a locked-down website. I built pipelines that read each one from the source, so updating is easy when new data comes out, which is about once a year per dataset.
- **Versioned and traceable.** Every calculation is versioned and every emission factor traces back to its source.

The hardest part was decoding USLCI’s and ecoinvent’s XML formats, which describe the relationships between components and their flows in a really archaic way. We did that before AI coding tools made this kind of work much easier.

## What happened

- It’s the backbone of every LCA and corporate inventory calculation Planet FWD runs, including AI-generated LCAs.
- Results are reliable and consistent, and we can point to exactly where each number came from.
- I built almost all of it and still maintain it. Version 7 shipped in November 2026.

## What I’d tell you

In a data product, provenance is a feature. Customers and auditors trust a number when you can show exactly where it came from.
