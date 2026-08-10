/**
 * JavaDoc ingestion pipeline.
 *
 * Scans a generated JavaDoc tree recursively, keeps only real API type pages
 * (identified mechanically by the `<meta name="generator" content=
 * "javadoc/ClassWriter">` marker — no manual file lists), parses each into
 * structured API knowledge, renders it into the knowledge base's preferred
 * markdown representation (YAML frontmatter + markdown body), and writes one
 * `<fully.qualified.name>.md` per type. Re-running the pipeline re-discovers
 * everything; unchanged files are left untouched so the KB's mtime-based
 * incremental sync can skip them.
 *
 * Navigation/search/index pages (`index-files/`, `class-use/`,
 * `package-summary*`, `search.html`, search-index JS, etc.) are never
 * ingested — they carry no API knowledge.
 */
import { mkdirSync } from "fs";
import { open, readdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";
import logger from "../../utils/logger.js";
import { isClassPage, parseJavaDocClass } from "./JavaDocParser.js";
import type { JavaDocClass } from "./types.js";

/** Directories that never contain API type pages (skipped in the walk). */
const SKIP_DIRS = new Set([
  ".git",
  "class-use",
  "index-files",
  "resource-files",
  "script-files",
  "legal",
  "src-html",
  "jquery",
]);

/** Result of one full ingest pass. */
export interface JavadocsIngestResult {
  source: string;
  output: string;
  /** Version tag found on the pages (e.g. `42.20.0`), if any. */
  version: string | null;
  /** Number of class pages discovered in the tree. */
  classPages: number;
  /** Number of pages successfully parsed. */
  parsed: number;
  /** Number of markdown files written. */
  written: number;
  /** Files already present with identical content (mtime preserved). */
  unchanged: number;
  /** HTML files seen that are not class pages (nav/index/etc.). */
  skippedNonClass: number;
  /** Stale generated docs (FQN-pattern .md) pruned because their source
   *  class page no longer exists in the tree. */
  removed: number;
  errors: Array<{ file: string; message: string }>;
}

export class JavaDocIndexer {
  /**
   * Recursively discover every class page under `sourceDir`. Returns
   * absolute paths sorted deterministically, plus the count of non-class
   * HTML files that were skipped.
   */
  async discoverClassPages(
    sourceDir: string,
  ): Promise<{ pages: string[]; skippedNonClass: number }> {
    const pages: string[] = [];
    let skippedNonClass = 0;

    const walk = async (dir: string): Promise<void> => {
      const entries = await readdir(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
          if (SKIP_DIRS.has(entry.name)) continue;
          await walk(fullPath);
        } else if (
          entry.isFile() &&
          entry.name.toLowerCase().endsWith(".html")
        ) {
          if (await this.isClassPageFile(fullPath)) {
            pages.push(fullPath);
          } else {
            skippedNonClass += 1;
          }
        }
      }
    };

    await walk(sourceDir);
    pages.sort();
    return { pages, skippedNonClass };
  }

  /**
   * Read just the head of a page to check its generator meta tag (the meta
   * lives in the `<head>` within the first bytes of every javadoc page, so
   * classification is cheap and never parses the full file).
   */
  private async isClassPageFile(filePath: string): Promise<boolean> {
    try {
      const handle = await open(filePath, "r");
      try {
        const buffer = Buffer.alloc(4096);
        const { bytesRead } = await handle.read(buffer, 0, 4096, 0);
        return isClassPage(buffer.subarray(0, bytesRead).toString("utf-8"));
      } finally {
        await handle.close();
      }
    } catch {
      return false;
    }
  }

  /** Parse one class page into structured API knowledge. */
  async parseFile(filePath: string): Promise<JavaDocClass> {
    const html = await readFile(filePath, "utf-8");
    return parseJavaDocClass(html, filePath);
  }

  /**
   * Full ingest: discover → parse → render → write. Files whose rendered
   * content is byte-identical to what is on disk are left untouched (their
   * mtime stays stable so the KB's incremental sync can skip them).
   */
  async ingest(
    sourceDir: string,
    outputDir: string,
  ): Promise<JavadocsIngestResult> {
    const { pages, skippedNonClass } = await this.discoverClassPages(sourceDir);
    mkdirSync(outputDir, { recursive: true });

    const result: JavadocsIngestResult = {
      source: sourceDir,
      output: outputDir,
      version: null,
      classPages: pages.length,
      parsed: 0,
      written: 0,
      unchanged: 0,
      skippedNonClass,
      removed: 0,
      errors: [],
    };

    const produced = new Set<string>();
    const versions = new Map<string, number>();
    for (const filePath of pages) {
      try {
        const doc = await this.parseFile(filePath);
        result.parsed += 1;
        if (doc.version) {
          versions.set(doc.version, (versions.get(doc.version) ?? 0) + 1);
        }

        const markdown = JavaDocIndexer.renderMarkdown(doc);
        const target = join(outputDir, `${doc.fullyQualifiedName}.md`);
        produced.add(`${doc.fullyQualifiedName}.md`);
        const existing = await this.readIfExists(target);
        if (existing === markdown) {
          result.unchanged += 1;
        } else {
          await writeFile(target, markdown, "utf-8");
          result.written += 1;
        }
      } catch (error) {
        result.errors.push({
          file: filePath,
          message: error instanceof Error ? error.message : String(error),
        });
        logger.error(error, "Failed to ingest javadoc page: %s", filePath);
      }
    }

    // Reproducibility: prune generated docs whose source class page has
    // disappeared from the tree (only when the tree is non-empty, so a bad
    // source path can never wipe the output; only FQN-pattern files are ever
    // removed, so foreign .md files in the output dir are left alone). The
    // KB's incremental indexDirectory then drops the corresponding topics.
    if (pages.length > 0) {
      const fqnRe = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)+[.]md$/; // <package>.<Type>.md
      const entries = await readdir(outputDir);
      for (const name of entries) {
        if (fqnRe.test(name) && !produced.has(name)) {
          await rm(join(outputDir, name), { force: true });
          result.removed += 1;
        }
      }
    }

    // The dominant version tag across pages becomes the reported version.
    let bestVersion: string | null = null;
    let bestCount = 0;
    for (const [version, count] of versions) {
      if (count > bestCount) {
        bestVersion = version;
        bestCount = count;
      }
    }
    result.version = bestVersion;

    return result;
  }

  /** Render a parsed type into the KB's preferred markdown representation. */
  static renderMarkdown(doc: JavaDocClass): string {
    const lines: string[] = [
      "---",
      `title: ${doc.fullyQualifiedName}`,
      `source: ${doc.source}`,
      ...(doc.version ? [`version: ${doc.version}`] : []),
      `kind: ${doc.kind}`,
      `package: ${doc.package}`,
      "---",
      "",
      `# ${doc.fullyQualifiedName}`,
      "",
      "`" + doc.signature + "`",
      "",
      `**Kind:** ${doc.kind} · **Package:** ${doc.package}`,
    ];

    if (doc.deprecated) {
      lines.push("", "> ⚠️ **Deprecated**");
    }

    if (doc.inheritance.length > 0) {
      lines.push("", "## Inheritance");
      for (const level of doc.inheritance) {
        lines.push(`- ${level}`);
      }
    }

    if (doc.description) {
      lines.push("", "## Description", "", doc.description);
    }

    const sections: Array<[string, typeof doc.methods]> = [
      ["Fields", doc.fields],
      ["Constructors", doc.constructors],
      ["Methods", doc.methods],
    ];
    for (const [heading, members] of sections) {
      if (members.length === 0) continue;
      lines.push("", `## ${heading}`);
      for (const member of members) {
        lines.push("", `### ${member.signature}`);
        if (member.deprecated) {
          lines.push("", "> ⚠️ **Deprecated**");
        }
        if (member.description) {
          lines.push("", member.description);
        }
        if (member.parameters.length > 0) {
          lines.push("", "**Parameters:**");
          for (const param of member.parameters) {
            const type = param.type ? `\`${param.type}\` ` : "";
            const description = param.description
              ? ` — ${param.description}`
              : "";
            lines.push(`- ${type}\`${param.name}\`${description}`);
          }
        }
        if (member.returnType !== undefined && member.kind === "method") {
          lines.push("", `**Returns:** \`${member.returnType}\``);
        }
      }
    }

    // Provenance footer: never let inferred docs silently override the real
    // source — every page records where it came from.
    lines.push(
      "",
      "---",
      `*Source: ${doc.source}${doc.version ? ` (${doc.version})` : ""} · parsed from \`${doc.filePath}\`*`,
    );

    return lines.join("\n") + "\n";
  }

  private async readIfExists(filePath: string): Promise<string | null> {
    try {
      return await readFile(filePath, "utf-8");
    } catch {
      return null;
    }
  }

  /**
   * Validate a user-supplied output dir before the pipeline writes into it:
   * absolute, traversal-free (mirrors PathManager rules; existence not
   * required because the pipeline creates it).
   */
  static validateOutputDir(input: string): string {
    if (!input || input.trim() === "") {
      throw new Error("Output path must not be empty");
    }
    if (input.includes("\0")) {
      throw new Error("Output path contains invalid characters");
    }
    if (!/^([a-zA-Z]:[\\/]|\/)/.test(input)) {
      throw new Error(`Output path must be absolute: ${input}`);
    }
    const segments = input.split(/[\\/]+/).filter((seg) => seg.length > 0);
    if (segments.includes("..")) {
      throw new Error(`Output path must not contain '..' segments: ${input}`);
    }
    return input;
  }
}
