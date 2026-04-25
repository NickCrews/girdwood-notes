#!/usr/bin/env tsx
/**
 * Fetch an HTML page (or read a local .html file), convert to markdown, and
 * write it to src/sources/ with frontmatter (url, access_date, title).
 *
 * Usage:
 *   npm run ingest-html -- <url-or-path> [--out <relpath-under-src/sources>] [--title "..."]
 *
 * The output filename, if not supplied with --out, is derived from the URL
 * path (or input filename) and slugified.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import { dirname, extname, join, resolve } from "node:path"
import TurndownService from "turndown"
// @ts-expect-error - turndown-plugin-gfm has no types
import { gfm } from "turndown-plugin-gfm"

const REPO_ROOT = resolve(new URL("..", import.meta.url).pathname)
const SOURCES_DIR = join(REPO_ROOT, "src", "sources")

type Args = { input: string; out?: string; title?: string }

function parseArgs(argv: string[]): Args {
  const args: Args = { input: "" }
  const rest = argv.slice(2)
  while (rest.length) {
    const a = rest.shift()!
    if (a === "--out") args.out = rest.shift()
    else if (a === "--title") args.title = rest.shift()
    else if (a.startsWith("--")) throw new Error(`unknown flag: ${a}`)
    else if (!args.input) args.input = a
    else throw new Error(`unexpected positional: ${a}`)
  }
  if (!args.input) {
    throw new Error("usage: ingest-html <url-or-path> [--out <relpath>] [--title <text>]")
  }
  return args
}

function slugify(s: string): string {
  return (
    s
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 80) || "source"
  )
}

function extractTitle(html: string): string | undefined {
  const m = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)
  return m ? m[1].replace(/\s+/g, " ").trim() : undefined
}

async function loadHtml(input: string): Promise<{ html: string; url?: string }> {
  if (/^https?:\/\//i.test(input)) {
    const res = await fetch(input, { redirect: "follow" })
    if (!res.ok) throw new Error(`fetch ${input} → ${res.status} ${res.statusText}`)
    return { html: await res.text(), url: input }
  }
  return { html: readFileSync(input, "utf8") }
}

function deriveOutPath(args: Args, url: string | undefined): string {
  if (args.out) return join(SOURCES_DIR, args.out)
  const base = url
    ? new URL(url).hostname + new URL(url).pathname
    : args.input.replace(extname(args.input), "")
  const name = slugify(base) + ".md"
  return join(SOURCES_DIR, name)
}

function buildTurndown(): TurndownService {
  const td = new TurndownService({
    headingStyle: "atx",
    codeBlockStyle: "fenced",
    bulletListMarker: "-",
    emDelimiter: "_",
  })
  td.use(gfm)
  // Drop noisy elements outright
  td.remove(["head", "title", "script", "style", "nav", "header", "footer", "form", "noscript"])
  return td
}

function yamlEscape(s: string): string {
  return s.replace(/"/g, '\\"')
}

function frontmatter(meta: Record<string, string>): string {
  const lines = ["---"]
  for (const [k, v] of Object.entries(meta)) {
    if (v) lines.push(`${k}: "${yamlEscape(v)}"`)
  }
  lines.push("---", "")
  return lines.join("\n")
}

async function main() {
  const args = parseArgs(process.argv)
  const { html, url } = await loadHtml(args.input)
  const td = buildTurndown()
  const md = td.turndown(html).trim() + "\n"
  const title = args.title || extractTitle(html) || "Untitled source"
  const out = deriveOutPath(args, url)
  if (existsSync(out)) {
    console.warn(`warn: ${out} already exists; overwriting`)
  }
  mkdirSync(dirname(out), { recursive: true })
  const fm = frontmatter({
    title,
    url: url || "",
    access_date: new Date().toISOString().slice(0, 10),
    oneliner: "TODO: one-line summary of this source.",
  })
  writeFileSync(out, fm + md)
  console.log(`wrote ${out}`)
  console.log("next: fill in 'oneliner', then add an entry to src/index-sources.md")
}

main().catch((err) => {
  console.error(err.message || err)
  process.exit(1)
})
