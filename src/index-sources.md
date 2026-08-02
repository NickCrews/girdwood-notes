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

- [Visit Anchorage bed tax FAQ](./sources/visit-anchorage-bed-tax-faq.md) — The beneficiary's own account of the [[bed-tax]]: 1975 origin, 1979 increase from 5% to 8%, the three-way 12% split, and collections ($45M in 2023, $26M+ average since 2014). Not a neutral source. Cited from [[bed-tax]].

## Government records & ordinances

- [Anchorage property tax exemptions](./sources/anchorage-property-tax-exemptions.md) — Property Appraisal Division list of exemptions (senior, disabled veteran, residential, nonprofit, farm, disaster, business) with amounts and the March 15 deadline. Cited from [[property-tax-exemptions]]. — meta: url=https://www.muni.org/Departments/finance/property_appraisal/Exemption/pages/default.aspx, access_date=2026-06-23
- [AR 2026-55, As Amended — 2026 Tourism Improvement Projects (TIPs)](./sources/ar-2026-55-tourism-improvement-projects.pdf) — The resolution that created TIPs, plus attached AM 161-2026 giving the eligible-use list and the year-by-year withheld amounts ($1.6M 2026, $1.5M 2027, 10% of Net Tourism Receipts from 2028). Cited from [[tourism-improvement-projects]] and [[bed-tax]]. — meta: url=https://s3.documentcloud.org/documents/28049901/ar-2026-055-as-amended.pdf (mirrored by ADN; not found at a stable muni.org URL), access_date=2026-08-01, passed=2026-03-24, publisher=Anchorage Assembly, pages=6
- [GBOS Resolution 2025-18 — STR tax with geographic dedication](./sources/gbos-resolution-2025-18-str-tax.pdf) — GBOS supports an STR tax ballot proposition only if Girdwood-raised revenue is dedicated to Girdwood housing; source of the "~25% of Girdwood residential properties vs ~1% in the rest of the MOA" STR figure. Passed 3-0. Cited from [[bed-tax]]. — meta: url=https://www.muni.org/Departments/operations/streets/Service/GBOS/2025-18%20STR%20Tax%20with%20amendment.docx.pdf, access_date=2026-08-01, passed=2025-10-20, publisher=Girdwood Board of Supervisors, pages=1
- [GBOS minutes, May 18 2026](./sources/gbos-2026-05-18-minutes.pdf) — Girdwood's 2027 TIPs candidate projects (housing study, RV park feasibility study), the early-September deadline to Visit Anchorage/MOA/Bill Falsey, and the warning that projects must fit AR 2026-55's "promote tourism" definition. Cited from [[tourism-improvement-projects]]. — meta: url=https://www.muni.org/Departments/operations/streets/Service/GBOS/GBOS%20May%2018%202026%20Minutes%20final.pdf, access_date=2026-08-01, publisher=Girdwood Board of Supervisors, pages=5
- [GBOS minutes, June 15 2026](./sources/gbos-2026-06-15-minutes.pdf) — TIPs referred to PSAC and GHEC; GBOS requests TIPs and police IT funding on the July 27 MOA quarterly meeting agenda. Cited from [[tourism-improvement-projects]]. — meta: url=https://www.muni.org/Departments/operations/streets/Service/GBOS/GBOS%20June%2015%202026%20minutes%20draft.pdf, access_date=2026-08-01, publisher=Girdwood Board of Supervisors, pages=4

## Data

_(none yet — example shape: `[Girdwood CDP housing units 2020](./census-girdwood-housing-2020.csv) — Census table B25001 for Girdwood CDP — meta: url=https://data.census.gov/..., access_date=2026-04-25, rows=1`)_

## News & web articles

- [ADN, 2025-12-18 — Assembly rejects 5% STR tax, approves registration](./sources/adn-2025-12-17-assembly-str-tax-vote.md) — The Dec 16 2025 votes (STR tax down 8-4, registration up 10-2) and the failed Johnson amendment that would have kept Girdwood STR tax revenue in Girdwood. Cited from [[bed-tax]].
- [Alaska Public Media, 2025-12-17 — Assembly nixes Airbnb tax proposal](./sources/alaskapublic-2025-12-17-assembly-nixes-str-tax.md) — Shorter account of the same votes, with the competing-revenue-proposals context (room tax increase, 3% sales tax). Cited from [[bed-tax]].
- [ADN, 2026-04-17 — Anchorage steers room tax money toward downtown police patrols](./sources/adn-2026-04-16-room-tax-tips-downtown-patrols.md) — How the first year of TIPs money is spent, and the narrative of carving the withheld amount out of Visit Anchorage's contract. Cited from [[tourism-improvement-projects]].
