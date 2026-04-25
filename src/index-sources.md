---
title: Sources Index
oneliner: LLM-maintained index of every raw source under src/sources/, organized by category.
---

<!-- Maintained by the LLM on every source ingest. Keep entries sorted within each category. -->

This file is the agent-facing index of raw source material in `src/sources/`. The wiki at `src/wiki/` cites these sources via relative links (e.g. `../sources/foo.md`).

## Conventions

- Every entry is a single line:
  - `[short title](relative-path) — one-line summary — meta: <key facts>`
- For markdown sources (HTML converted to MD), the canonical URL and access date live in the file's frontmatter; the `meta:` field here can stay terse.
- For non-markdown sources (PDF, CSV, JSON, images) that **cannot carry frontmatter inline**, the `meta:` field MUST include at minimum: original URL, access date, and any other essential metadata (publish date, publisher, row count for CSVs, page count for PDFs, etc.).
- Group entries by category. Add new categories as needed. Suggested seed categories below.

## Entities

_(none yet)_

## Concepts & policy

_(none yet)_

## Government records & ordinances

_(none yet — example shape: `[Anchorage AO 2024-XX](./ao-2024-xx.pdf) — STR registration ordinance — meta: url=https://example.org/ao.pdf, access_date=2026-04-25, publish_date=2024-09-12, pages=14`)_

## Data

_(none yet — example shape: `[Girdwood CDP housing units 2020](./census-girdwood-housing-2020.csv) — Census table B25001 for Girdwood CDP — meta: url=https://data.census.gov/..., access_date=2026-04-25, rows=1`)_

## News & web articles

_(none yet)_
