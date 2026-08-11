/**
 * Knowledge base chunker (KB overhaul — freebuff KB v2).
 *
 * Turns a raw markdown doc into the structured, chunked representation the
 * v2 knowledge base stores:
 *
 *  - frontmatter parsing extended to inline arrays (`tags: [pz, modding]`)
 *  - a portable doc-type taxonomy (`wiki` / `api-docs` / `javadocs` /
 *    `mods-analysis` / `research`) derived from the topic path or frontmatter,
 *    so agents can scope searches and results carry portable metadata instead
 *    of machine-specific file paths
 *  - a conservative cleaning pass per doc type (TOC drop, table collapse for
 *    api-docs, wiki footer strip, whitespace normalization)
 *  - heading-based chunking: H1/H2 sections for markdown docs; javadocs also
 *    split every `### <signature>` member under Fields/Constructors/Methods
 *    into its own chunk so an agent hunting a method signature reads only
 *    that member, not the whole class page
 *  - deterministic chunk ids (`doc#slug`, derived from content order) so the
 *    mtime-based incremental sync can skip unchanged files
 *
 * Pure functions, dependency-free, no DB access — trivially unit-testable.
 */

/** The portable doc-type taxonomy used for search filtering. */
export const KB_DOC_TYPES = [
  "wiki",
  "api-docs",
  "javadocs",
  "mods-analysis",
  "research",
] as const;

export type KbDocType = (typeof KB_DOC_TYPES)[number];

/** One searchable unit of a doc. */
interface KbChunk {
  /** Unique id: `<docTopic>#<slug>`, deterministic from content order. */
  chunkTopic: string;
  docTopic: string;
  /** Heading text that opened this chunk (member signature for javadocs). */
  heading: string | null;
  /** Heading level: 0 = intro (pre-heading) chunk. */
  headingLevel: number;
  /** Display title: heading text, member signature, or the doc title. */
  title: string;
  content: string;
  /** 1-based position within the doc (document order). */
  seq: number;
  /**
   * True when the chunk carries no meaningful prose beyond its heading — a
   * javadocs member that is only a bare signature (`### public static final
   * int GlovesStrengthBonus`), an empty `## Methods` marker, or a title-only
   * doc. ~73% of the javadocs corpus is bodyless signatures (the decompiled
   * PZ sources have no javadoc comments), so ranking downweights them in
   * mixed searches and a future embedding pass can skip/embed-title-only them.
   */
  bodyless: boolean;
}

/** Fully parsed + chunked doc, ready for the KB tables. */
interface KbParsedDoc {
  docTopic: string;
  title: string;
  source: string;
  docType: KbDocType;
  tags: string[];
  /** Extra structured metadata (version/build, package, kind). */
  meta: Record<string, string>;
  /** Cleaned body (== concatenation of chunk contents). */
  body: string;
  chunks: KbChunk[];
  /**
   * True when the doc's RAW (pre-clean) body is mostly markdown table rows
   * (loot tables, procedural-distribution dumps). Table-heavy docs are
   * low-value prose for retrieval — mixed searches downweight them.
   */
  tabley: boolean;
}

/** Frontmatter values: scalars and inline arrays. */
interface FrontmatterMeta {
  [key: string]: string | string[];
}

/**
 * Per-chunk hard cap; longer sections are split at paragraph boundaries.
 * 12,000 chars (~3k tokens) was the v2 cap — a single retrieved chunk could
 * cost ~3k tokens of context. 6,000 (~1.5k tokens) keeps retrieval units
 * tighter and cheaper; research sections average ~1.3k so most are untouched.
 */
const MAX_CHUNK_CHARS = 6_000;

const HEADING_RE = /^(#{1,6})\s+(.*)$/;

/**
 * Parse a leading YAML frontmatter block (`---` ... `---`) into a key/value
 * map and return the remaining body. No-op (meta empty, body unchanged) when
 * the file has no frontmatter or an unterminated opener. Keys are lower-cased;
 * quoted scalar values are stripped; inline arrays (`tags: [a, b]`) are split.
 * Dependency-free.
 */
export function parseFrontmatter(content: string): {
  meta: FrontmatterMeta;
  body: string;
} {
  const lines = content.split("\n");
  if (lines[0]?.trim() !== "---") {
    return { meta: {}, body: content };
  }
  let endIndex = -1;
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") {
      endIndex = i;
      break;
    }
  }
  if (endIndex === -1) {
    // Opening '---' without a closing delimiter is not frontmatter.
    return { meta: {}, body: content };
  }
  const meta: FrontmatterMeta = {};
  for (let i = 1; i < endIndex; i++) {
    const colonIndex = lines[i].indexOf(":");
    if (colonIndex === -1) {
      continue;
    }
    const key = lines[i].slice(0, colonIndex).trim().toLowerCase();
    if (key.length === 0) {
      continue;
    }
    let value = lines[i].slice(colonIndex + 1).trim();
    if (value.startsWith("[")) {
      // Inline array: tags: [pz, modding, build42]
      const inner = value.slice(1).replace(/\]\s*$/, "");
      meta[key] = inner
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter((s) => s.length > 0);
      continue;
    }
    if (
      value.length >= 2 &&
      ((value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'")))
    ) {
      value = value.slice(1, -1);
    }
    meta[key] = value;
  }
  return { meta, body: lines.slice(endIndex + 1).join("\n") };
}

/**
 * Portable doc type from the topic's top-level path segment (wiki/,
 * api-docs/, javadocs/, Mods_Analysis/); root-level docs are `research`.
 * A frontmatter `type:` overrides; javadocs files also self-identify via
 * their `package:`/`kind:` frontmatter keys even when indexed from a flat
 * directory.
 */
export function inferDocType(
  docTopic: string,
  meta?: FrontmatterMeta,
): KbDocType {
  const fmType = meta && typeof meta.type === "string" ? meta.type.trim() : "";
  if (
    fmType.length > 0 &&
    (KB_DOC_TYPES as readonly string[]).includes(fmType)
  ) {
    return fmType as KbDocType;
  }
  if (meta && (meta.package !== undefined || meta.kind !== undefined)) {
    // Distilled javadocs markdown always carries package/kind frontmatter.
    return "javadocs";
  }
  const top = docTopic.split("/")[0] ?? "";
  switch (top) {
    case "wiki":
      return "wiki";
    case "api-docs":
      return "api-docs";
    case "javadocs":
      return "javadocs";
    case "Mods_Analysis":
      return "mods-analysis";
    default:
      return "research";
  }
}

/**
 * Conservative per-type cleaning pass:
 *  - BOM strip + CRLF normalization + trailing-whitespace/newline collapse
 *  - `## Table of Contents` sections are dropped (navigation noise)
 *  - api-docs: markdown tables collapse to `key: value` / joined-cell lines
 *    (raw table cells are tokenizer noise that skews ranking)
 *  - wiki: trailing "Retrieved from / Category" footer lines are dropped
 */
export function cleanMarkdown(body: string, docType: KbDocType): string {
  const text = body.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const lines = text.split("\n");
  const out: string[] = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^#{1,6}\s+table\s+of\s+contents\s*$/i.test(line.trim())) {
      // Drop the TOC section: the heading + everything until the next heading.
      i++;
      while (i < lines.length && !HEADING_RE.test(lines[i])) {
        i++;
      }
      continue;
    }
    if (docType === "api-docs" && line.trim().startsWith("|")) {
      // Collapse a run of table lines into readable key/value rows.
      const rows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        rows.push(lines[i]);
        i++;
      }
      const collapsed = rows
        .filter((r) => !/^\|[\s:|-]+\|$/.test(r.trim())) // separator rows
        .map((r) => {
          const cells = r
            .replace(/^\||\|$/g, "")
            .split("|")
            .map((c) => c.trim())
            .filter((c) => c.length > 0);
          return cells.length === 2
            ? `${cells[0]}: ${cells[1]}`
            : cells.join(" · ");
        })
        .filter((r) => r.length > 0);
      out.push(...collapsed);
      continue;
    }
    out.push(line);
    i++;
  }
  if (docType === "wiki") {
    // Drop trailing footer/category lines, skipping trailing blank lines.
    while (out.length > 0) {
      const last = out[out.length - 1].trim();
      if (
        last.length === 0 ||
        /^(retrieved from|category\s*[: ])/i.test(last)
      ) {
        out.pop();
      } else {
        break;
      }
    }
  }
  if (docType === "javadocs") {
    // The ingestion footer carries provenance ("*Source: Unofficial PZ
    // JavaDocs 42.12.0 (42.12.0) · parsed from `C:\…html`*"). Keep the
    // source label but drop the machine-specific parse path — a Windows
    // absolute path is privacy + index noise, and it made the final member
    // chunk look like it had a body.
    for (let i = 0; i < out.length; i++) {
      const line = out[i].trim();
      const m = line.match(/^\*Source: (.*?) · parsed from .+\*?$/);
      if (m) {
        out[i] = `*Source: ${m[1].trim()}*`;
      }
    }
  }
  return out
    .join("\n")
    .replace(/[ \t]+$/gm, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Lowercase, dash-separated id slug (max ~60 chars), never empty. */
export function slugify(text: string): string {
  const slug = text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);
  return slug || "section";
}

/**
 * Slug for a javadocs member heading (`public static IsoPlayer getPlayer(int
 * playerNum)`): uses the member name + collapsed parameter types so overloads
 * stay distinct (`getplayer-int`), instead of a truncated signature.
 */
function memberSlug(heading: string): string {
  // The argument list is the outermost paren group ending at the final ')'
  // (javadoc member headings have no trailing annotations). Walk back from
  // the last ')' to its matching '(' so generics inside the parameter types
  // (`public static <T extends Comparable<T>> T max(T a)`) cannot hijack the
  // boundary — indexOf('(') would land inside `Comparable<T>`.
  const close = heading.lastIndexOf(")");
  let open = -1;
  if (close !== -1) {
    let depth = 1;
    for (let i = close - 1; i >= 0; i--) {
      const ch = heading[i];
      if (ch === ")") depth += 1;
      else if (ch === "(") {
        depth -= 1;
        if (depth === 0) {
          open = i;
          break;
        }
      }
    }
  }
  let name: string;
  let params = "";
  if (open !== -1) {
    name = heading.slice(0, open).trim().split(/\s+/).pop() ?? "member";
    params = heading.slice(open + 1, close);
  } else {
    // Field / enum-constant heading (no parens): last identifier is the name.
    const words = heading.trim().split(/\s+/);
    name = words.pop() ?? "member";
  }
  const paramTypes = params
    .split(",")
    .map((p) => p.trim().split(/\s+/)[0] ?? "")
    .filter((p) => p.length > 0)
    .join("-");
  return slugify(paramTypes ? `${name}-${paramTypes}` : name);
}

/**
 * A chunk is bodyless when it carries no substantive content beyond its
 * heading line(s): strip headings, deprecation markers and empty lines — if
 * nothing is left, the chunk is a bare signature / empty section marker.
 * (`> ⚠️ **Deprecated**` is a marker, not a body.)
 *
 * Audit tuning: a body that is only 1–2 STRUCTURAL lines — a bare
 * `**Returns:** `int``, a parameter-list item, a bold definition label —
 * carries no prose that answers a question either, so it is tagged bodyless
 * too (this is exactly the "1-2 short lines" stubby-member case the corpus
 * audit called out: most javadocs fields have nothing beyond their signature).
 */
export function isBodyless(content: string): boolean {
  const lines = content
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .filter((l) => !/^#{1,6}\s+/.test(l)) // heading line(s)
    // Deprecation markers (`> ⚠️ **Deprecated**` — the ⚠ is followed by the
    // U+FE0F variation selector, so skip any non-word glyphs after the `>`).
    .filter((l) => !/^>\s*[^\w]*\*{0,2}Deprecated\*{0,2}/i.test(l))
    .filter((l) => !/^[-*_\s]+$/.test(l));
  if (lines.length === 0) return true;
  if (lines.length <= 2) {
    return lines.every(
      (l) =>
        /^\*\*[^*]+\*\*/.test(l) || // **Returns:** `int` / **Parameters:**
        /^-\s+\S/.test(l) || // - `ISearchNode` `iSearchNode0`
        /^`[^`]+`$/.test(l) || // a bare code-token line
        /^[^a-zA-Z]*$/.test(l), // separators / non-letter noise
    );
  }
  return false;
}

/** Split an over-long chunk deterministically at paragraph/line boundaries. */
function splitLong(text: string, max: number): string[] {
  const parts: string[] = [];
  let rest = text;
  while (rest.length > max) {
    let cut = rest.lastIndexOf("\n\n", max);
    if (cut < max / 2) {
      cut = rest.lastIndexOf("\n", max);
    }
    if (cut <= 0) {
      // No paragraph/line boundary nearby — prefer a word boundary so a
      // single huge line is not severed mid-token.
      cut = rest.lastIndexOf(" ", max);
    }
    if (cut <= 0) {
      cut = max;
    }
    parts.push(rest.slice(0, cut).trim());
    rest = rest.slice(cut).trim();
  }
  if (rest.length > 0) {
    parts.push(rest);
  }
  return parts.filter((p) => p.length > 0);
}

/**
 * Split a cleaned markdown body into deterministic section chunks.
 *
 * Boundary levels: H1/H2 for markdown docs; javadocs additionally split at
 * H3 so every `### <signature>` member (under Fields/Constructors/Methods)
 * becomes its own chunk. The intro (pre-heading) text becomes a chunk only
 * when non-empty. Section chunks that carry only their heading line (e.g. an
 * empty `## Fields` after members were extracted) are dropped; bare H3 member
 * signatures are kept (the signature itself is the searchable content).
 */
export function chunkMarkdown(
  body: string,
  docTopic: string,
  docType: KbDocType,
  docTitle: string,
): KbChunk[] {
  const allowedLevels =
    docType === "javadocs" ? new Set([1, 2, 3]) : new Set([1, 2]);
  const lines = body.split("\n");

  interface Section {
    level: number;
    heading: string | null;
    lines: string[];
  }
  const sections: Section[] = [];
  let current: Section | null = null;
  const intro: string[] = [];
  for (const line of lines) {
    const m = HEADING_RE.exec(line);
    if (m && allowedLevels.has(m[1].length)) {
      if (current) sections.push(current);
      current = { level: m[1].length, heading: m[2].trim(), lines: [line] };
    } else if (current) {
      current.lines.push(line);
    } else {
      intro.push(line);
    }
  }
  if (current) sections.push(current);

  const chunks: KbChunk[] = [];
  const usedSlugs = new Set<string>();
  let seq = 0;

  const emit = (
    level: number,
    heading: string | null,
    content: string,
    baseSlug: string,
    keepEmpty = false,
  ): void => {
    const trimmed = content.trim();
    if (trimmed.length === 0) return;
    const bodyOnly =
      heading !== null ? trimmed.replace(/^#{1,6}\s+[^\n]+\n?/, "") : trimmed;
    // Empty level-2 sections (a bare `## Heading` with no body) are noise —
    // except javadocs member-section markers (## Methods/Fields/…), which
    // carry no body of their own but keep the assembled class page readable.
    // Level-1 header-only chunks are KEPT: a doc consisting of just a title
    // would otherwise produce zero chunks and become completely unsearchable.
    if (
      heading !== null &&
      level === 2 &&
      bodyOnly.trim().length === 0 &&
      !keepEmpty
    ) {
      return;
    }

    // A bodyless chunk is short by construction (no prose to split), so the
    // flag is computed once on the full section and propagated to every part.
    const bodyless = isBodyless(trimmed);
    const parts =
      trimmed.length > MAX_CHUNK_CHARS
        ? splitLong(trimmed, MAX_CHUNK_CHARS)
        : [trimmed];
    parts.forEach((part, partIndex) => {
      let slug = baseSlug;
      if (parts.length > 1) slug = `${baseSlug}-part-${partIndex + 1}`;
      let unique = slug;
      let n = 2;
      while (usedSlugs.has(unique)) {
        unique = `${slug}-${n}`;
        n += 1;
      }
      usedSlugs.add(unique);
      chunks.push({
        chunkTopic: `${docTopic}#${unique}`,
        docTopic,
        heading,
        headingLevel: level,
        title: heading ?? docTitle,
        content: part,
        seq: ++seq,
        bodyless,
      });
    });
  };

  if (intro.join("\n").trim().length > 0) {
    emit(0, null, intro.join("\n"), slugify(docTitle));
  }
  sections.forEach((s, idx) => {
    const baseSlug =
      s.heading !== null
        ? s.level === 3
          ? memberSlug(s.heading)
          : slugify(s.heading)
        : slugify(docTitle);
    // A level-2 section followed by level-3 children is a javadocs member
    // section: keep its header even when it has no body of its own.
    const hasMemberChildren =
      docType === "javadocs" &&
      s.level === 2 &&
      idx + 1 < sections.length &&
      sections[idx + 1].level === 3;
    emit(s.level, s.heading, s.lines.join("\n"), baseSlug, hasMemberChildren);
  });
  return chunks;
}

/**
 * Full parse pipeline for one markdown file: frontmatter → metadata → clean →
 * chunk. `relPath` is the path relative to the indexed root (forward slashes,
 * `.md` extension included); it becomes the doc topic (extension stripped).
 */
export function parseKbDoc(raw: string, relPath: string): KbParsedDoc {
  const { meta, body } = parseFrontmatter(raw);
  const docTopic = relPath.replace(/\.md$/i, "").replace(/\\/g, "/");
  const docType = inferDocType(docTopic, meta);
  const cleaned = cleanMarkdown(body, docType);

  // Title priority: frontmatter `title`, then first H1, then filename.
  let title = typeof meta.title === "string" ? meta.title.trim() : "";
  if (title.length === 0) {
    for (const line of cleaned.split("\n")) {
      if (line.startsWith("# ")) {
        title = line.slice(2).trim();
        break;
      }
    }
  }
  if (title.length === 0) {
    title = docTopic.split("/").pop() ?? docTopic;
  }

  // Source priority: frontmatter `source`, then `> Source:` blockquote.
  let source = typeof meta.source === "string" ? meta.source.trim() : "";
  if (source.length === 0) {
    for (const line of cleaned.split("\n")) {
      if (line.startsWith("> Source:")) {
        source = line.slice("> Source:".length).trim();
        break;
      }
    }
  }

  let tags: string[] = [];
  const fmTags = meta.tags;
  if (Array.isArray(fmTags)) {
    tags = fmTags.map(String).filter((t) => t.length > 0);
  } else if (typeof fmTags === "string" && fmTags.trim().length > 0) {
    tags = fmTags
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
  }

  const extra: Record<string, string> = {};
  for (const key of ["version", "package", "kind"] as const) {
    const v = meta[key];
    if (typeof v === "string" && v.trim().length > 0) {
      extra[key] = v.trim();
    }
  }
  // wiki/research docs tag their target game build as `build: '42.20'`.
  const build = typeof meta.build === "string" ? meta.build.trim() : "";
  if (build.length > 0 && extra.version === undefined) {
    extra.version = build;
  }

  // Table density is measured on the RAW body (pre-clean): api-docs tables
  // are collapsed by cleanMarkdown, so the signal only survives on the input.
  // A doc that is mostly markdown table rows (loot tables, procedural
  // distributions) is low-value prose for retrieval — mixed searches
  // downweight it so one giant table dump can't flood a top-10.
  const rawLines = body.split("\n").filter((l) => l.trim().length > 0);
  const tableLines = rawLines.filter((l) => l.trim().startsWith("|")).length;
  const tabley =
    rawLines.length > 0 && tableLines / rawLines.length >= 0.4;

  const chunks = chunkMarkdown(cleaned, docTopic, docType, title);

  return {
    docTopic,
    title,
    source,
    docType,
    tags,
    meta: extra,
    body: cleaned,
    chunks,
    tabley,
  };
}
