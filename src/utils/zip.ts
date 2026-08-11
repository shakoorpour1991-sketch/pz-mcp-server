/**
 * Safe zip extraction (mod installer M1).
 *
 * Wraps adm-zip (pure-JS, zero native deps — portable across Windows/Linux/
 * macOS) with the safety rails a mod installer needs:
 *   - zip-slip guard: every entry path is normalized and must stay inside the
 *     destination directory (absolute paths and '..' segments are refused)
 *   - size cap: total uncompressed bytes are checked before writing so an
 *     archive bomb cannot fill the disk
 *   - macOS noise filtered: __MACOSX/ metadata + ._* AppleDouble files are
 *     dropped (they are junk, and '._mod.info' would confuse mod detection)
 *   - symlink entries skipped (untrusted archives should not create links)
 */
import AdmZip from "adm-zip";
import { mkdirSync, writeFileSync } from "fs";
import { dirname, join, sep } from "path";

/** Default total uncompressed size cap for one archive (8 GiB). */
const DEFAULT_MAX_ZIP_BYTES = 8 * 1024 * 1024 * 1024;

interface ZipExtractSummary {
  entryCount: number;
  fileCount: number;
  totalBytes: number;
  /** Entries skipped: unsafe paths, macOS junk, symlinks, unsupported methods. */
  skipped: number;
  skippedReasons: string[];
}

export class ZipError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ZipError";
  }
}

/**
 * Normalize an archive entry path: forward slashes, no leading '/', no
 * empty/'.' segments. Returns null when the path is unsafe (absolute,
 * traversal, NUL bytes).
 */
export function safeEntryPath(name: string): string | null {
  const n = String(name).replace(/\\/g, "/");
  // Absolute paths (Unix or Windows drive) are refused outright — a zip
  // entry must never resolve outside the destination.
  if (n.startsWith("/") || /^[A-Za-z]:/.test(n)) return null;
  if (n.includes("\0")) return null;
  const parts = n
    .split("/")
    .filter((p) => p !== "" && p !== ".")
    .slice(0, 512);
  if (parts.length === 0) return null;
  if (parts.some((p) => p === "..")) return null;
  return parts.join("/");
}

/** True for macOS Finder junk that must never be extracted or scanned. */
export function isMacJunk(relPath: string): boolean {
  return (
    relPath.startsWith("__MACOSX/") ||
    /(^|\/)\._/.test(relPath) ||
    /(^|\/)\.DS_Store$/.test(relPath) ||
    relPath === "__MACOSX"
  );
}

/**
 * Extract `zipPath` into `destDir` with the safety rails above. Returns a
 * summary; throws ZipError for unreadable archives or archives that exceed
 * the size cap.
 *
 * NOTE: synchronous (writeFileSync per entry) — acceptable here because
 * install_mod is a long-running tool and the 8 GiB cap bounds the work; an
 * async variant would be needed if this ever ran on the hot path.
 */
export function extractZipToDir(
  zipPath: string,
  destDir: string,
  maxBytes: number = DEFAULT_MAX_ZIP_BYTES,
): ZipExtractSummary {
  let zip: AdmZip;
  try {
    zip = new AdmZip(zipPath);
  } catch (error) {
    throw new ZipError(
      `Not a readable zip archive: ${error instanceof Error ? error.message : String(error)}`,
    );
  }

  const entries = zip.getEntries();
  const summary: ZipExtractSummary = {
    entryCount: entries.length,
    fileCount: 0,
    totalBytes: 0,
    skipped: 0,
    skippedReasons: [],
  };
  const reasonCounts = new Map<string, number>();
  const bump = (reason: string) => {
    summary.skipped++;
    reasonCounts.set(reason, (reasonCounts.get(reason) ?? 0) + 1);
  };

  const basePrefix = destDir.endsWith(sep) ? destDir : destDir + sep;

  for (const entry of entries) {
    const rel = safeEntryPath(entry.entryName);
    if (rel === null) {
      bump("unsafe-path");
      continue;
    }
    if (isMacJunk(rel)) {
      bump("macos-junk");
      continue;
    }
    // Skip symlink entries: untrusted archives must not create links.
    const mode = entry.header.attr >>> 16;
    if (mode === 0xa1ff || (mode & 0xf000) === 0xa000) {
      bump("symlink");
      continue;
    }

    const isDir = entry.isDirectory || entry.entryName.endsWith("/");
    const dest = join(destDir, rel);
    if (dest !== destDir && !dest.startsWith(basePrefix)) {
      bump("unsafe-path");
      continue;
    }

    if (isDir) {
      mkdirSync(dest, { recursive: true });
      continue;
    }

    const size = entry.header.size;
    summary.totalBytes += size;
    if (summary.totalBytes > maxBytes) {
      throw new ZipError(
        `Archive exceeds the ${Math.round(maxBytes / 1024 / 1024)} MB size cap — refusing to extract.`,
      );
    }

    try {
      mkdirSync(dirname(dest), { recursive: true });
      writeFileSync(dest, entry.getData());
      summary.fileCount++;
    } catch (error) {
      throw new ZipError(
        `Failed to extract "${entry.entryName}": ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }

  summary.skippedReasons = [...reasonCounts.entries()]
    .map(([r, n]) => `${r}×${n}`)
    .sort();
  return summary;
}
