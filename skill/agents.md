# Wiki Maintenance Protocol

This repo is an LLM-maintained wiki about Girdwood, Alaska built on [Quartz](https://quartz.jzhao.xyz). The LLM acts as a disciplined wiki maintainer: it summarizes sources, creates and updates entity/concept pages, cross-links them, and keeps everything consistent.

Inspired by [Karpathy's LLM wiki pattern](https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f).

## Repo structure

```
content/           # The wiki (LLM-owned markdown files)
  index.md         # Landing page & topic catalog
  *.md             # Entity and concept pages
skill/
  agents.md        # This file — the schema/protocol
```

## Page conventions

- **One page per entity or concept.** File names are kebab-case: `alyeska-resort.md`, `short-term-rentals.md`.
- Every page starts with YAML frontmatter:
  ```yaml
  ---
  title: Page Title
  tags:
    - housing
    - governance
  ---
  ```
- Use `[[wikilinks]]` for internal links (Quartz uses Obsidian-flavored markdown).
- Keep pages factual and sourced. Inline citations as markdown links: `[Source Name](url)`.
- Sections per page (adapt as needed):
  - **Overview** — 1-2 paragraph summary
  - **Details** — the substance
  - **See also** — related `[[wikilinks]]`
  - **Sources** — list of reference URLs

## Operations

### Ingest

When adding a new source:

1. Read the source material.
2. Create or update relevant entity/concept pages in `content/`.
3. Add `[[wikilinks]]` to connect new content to existing pages.
4. Update `content/index.md` to list any new pages.

### Query

When answering a question:

1. Search existing wiki pages first.
2. Synthesize an answer with `[[wikilinks]]` to relevant pages.
3. If the answer reveals a gap, create a new page or update existing ones.

### Lint

Periodically audit the wiki for health. Run through these checks:

#### Link integrity

- Every `[[wikilink]]` must resolve to an existing `.md` file in `content/`.
- Flag broken links (target page doesn't exist).
- Flag orphan pages (no other page links to them, and they're not in `index.md`).

#### Content consistency

- No two pages should cover the same entity. Flag duplicates.
- Cross-check facts that appear on multiple pages (e.g. population figures, dates). Flag contradictions.
- Tags in frontmatter should use a consistent vocabulary. Flag novel tags that aren't used elsewhere.

#### Completeness

- Every entity mentioned in running text but not linked should be a candidate for a new page or a `[[wikilink]]`.
- Pages with only an overview and no details/sources are stubs — flag them.
- `content/index.md` should list every page. Flag any page missing from the index.

#### Freshness

- Flag pages whose sources are more than 2 years old with no recent update.
- Flag claims with no source at all.

#### Lint procedure (for the LLM)

```
1. Glob content/**/*.md to get all pages.
2. For each page, extract:
   - All [[wikilinks]]
   - All tags from frontmatter
   - All external URLs
   - Whether it has Overview / Sources sections
3. Build a link graph: page -> set of outgoing wikilinks.
4. Check each wikilink resolves to a real file.
5. Find orphan pages (in-degree 0, not index.md).
6. Find stub pages (< 5 lines of body content or missing Sources section).
7. Check index.md lists every content page.
8. Report findings as a bulleted list grouped by category.
```

## Tags vocabulary

Use these tags consistently (extend as needed):

- `governance` — government bodies, boards, elections
- `housing` — housing market, rentals, homebuying, deed restrictions
- `economy` — employers, labor market, tourism revenue
- `land-use` — zoning, land bank, development
- `policy` — regulations, taxes, ordinances
- `recreation` — resort, trails, outdoor activities
- `infrastructure` — services, police, utilities
