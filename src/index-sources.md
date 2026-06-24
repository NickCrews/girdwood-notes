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

- [Pomeroy Lodging — corporate homepage](./sources/pomeroy-lodging-home.md) — Lists the company's hotel portfolio across Alberta, BC, and Alyeska in Girdwood, AK. Cited from [[pomeroy]].

## Concepts & policy

_(none yet)_

## Government records & ordinances

- [Anchorage property tax exemptions](./sources/anchorage-property-tax-exemptions.md) — Property Appraisal Division list of exemptions (senior, disabled veteran, residential, nonprofit, farm, disaster, business) with amounts and the March 15 deadline. Cited from [[property-tax-exemptions]]. — meta: url=https://www.muni.org/Departments/finance/property_appraisal/Exemption/pages/default.aspx, access_date=2026-06-23

## Data

_(none yet — example shape: `[Girdwood CDP housing units 2020](./census-girdwood-housing-2020.csv) — Census table B25001 for Girdwood CDP — meta: url=https://data.census.gov/..., access_date=2026-04-25, rows=1`)_

## News & web articles

_(none yet)_
