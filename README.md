# Girdwood Notes

This is my personal notes on issues relating to Girdwood, Alaska.
I want to do research into local issues such as housing, STRs, land use, our past relationship
with the Municipality of Anchorage, etc etc.
I write these down here to record my raw sources, summarize them for easier searching/browsing,
and to serve as a foundation for actual policy arguments.

I publish it because I think that others in the community might find these
thoughts useful for themselves.

## Layout

- `src/wiki/` — the published wiki (Quartz site root). Human-readable summaries, cross-linked.
- `src/sources/` — raw source material (PDFs, HTML pages converted to markdown, CSVs).
- `src/index-wiki.md` — generated index of every wiki page (run `npm run build-wiki-index`).
- `src/index-sources.md` — hand-maintained index of every raw source.
- `skill/agents.md` — protocol for the LLM that maintains this wiki.

## Common commands

- `npm run serve` — live-preview the wiki
- `npm run build-wiki-index` — regenerate the wiki index
- `npm run ingest-html -- <url>` — pull an HTML source into `src/sources/` as markdown
