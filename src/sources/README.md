# Sources

Raw source material that backs claims in the wiki at `../wiki/`.

## What goes here

A source belongs in this folder when:

- It is an HTML page that may change, disappear, or be paywalled in the future. Convert it to markdown first (see below).
- It is a PDF (ordinance, report, study, etc.).
- It is structured data (CSV, JSON) the wiki cites.
- It is anything else that may not be reliably retrievable from its original URL.

A source does **not** belong here when the URL is reasonably stable (e.g. a Census permalink, a Wikipedia article); use an inline citation in the wiki page instead.

## Frontmatter

Markdown sources (including HTML converted to markdown) must start with frontmatter:

```yaml
---
title: Title of the original document
url: https://example.com/path
access_date: 2026-04-25
publisher: Example Org
publish_date: 2024-09-12 # optional, when known
oneliner: One line about what this source contains.
---
```

For non-markdown files (PDF, CSV, etc.) that cannot carry frontmatter inline, record the same metadata in `../index-sources.md` next to the file's entry.

## Conversion

Use `npm run ingest-html -- <url-or-path> [--out <file>]` to fetch an HTML page (or read a local file), convert it to markdown, and stamp frontmatter with the URL and access date.

## Indexing

After adding a source, update `../index-sources.md` with a one-line summary, link, and any essential metadata (especially access date and URL for non-markdown sources). Reference the source from the relevant wiki page(s).
