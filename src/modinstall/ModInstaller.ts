/**
 * Smart mod installer (mod installer M2).
 *
 * Takes a .zip archive or a mod folder and installs the mod(s) inside it into
 * Project Zomboid's mods directory (<home>/Zomboid/mods by default,
 * PZ_MODS_DIR to override). Handles the messy real-world shapes mods ship in:
 *
 *   single mod folder:   MyMod/mod.info            → MyMod/
 *   B42 versioned:       MyMod/42/mod.info         → MyMod/  (whole folder)
 *   flat:                mod.info + media/...      → <zip name>/
 *   workshop pack:       mods/A/42/mod.info,
 *                        mods/B/mod.info           → A/, B/
 *
 * Safety-first by default: nothing is ever overwritten unless `overwrite` is
 * explicitly true, conflicts are detected by BOTH folder name and mod.info id
 * (duplicate mod ids make the game loader clash), and dryRun previews the
 * whole plan with zero disk changes. Zip extraction happens in a temp staging
 * dir that is always cleaned up.
 */
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rename,
  rm,
  stat,
} from "fs/promises";
import { existsSync, realpathSync, statSync } from "fs";
import { tmpdir } from "os";
import { basename, dirname, isAbsolute, join, sep } from "path";
import type { PathManager } from "../utils/PathManager.js";
import { extractZipToDir, ZipError } from "../utils/zip.js";

/** Machine-friendly failure codes (mapped to MCP errors in the tool layer). */
export class ModInstallError extends Error {
  readonly code:
    | "invalid-source"
    | "invalid-zip"
    | "no-mod-info"
    | "source-inside-target"
    | "target-not-writable"
    | "io";

  constructor(code: ModInstallError["code"], message: string) {
    super(message);
    this.name = "ModInstallError";
    this.code = code;
  }
}

export interface ModInfoMeta {
  id?: string;
  name?: string;
  version?: string;
}

export interface ModInstallEntry {
  /** Folder name as installed under the target mods dir. */
  name: string;
  modId?: string;
  modName?: string;
  version?: string;
  status: "installed" | "planned" | "skipped" | "error";
  /** Human explanation for skipped/error entries (conflict, missing data…). */
  reason?: string;
  /** Absolute path of the installed/planned folder. */
  targetPath?: string;
  filesCopied?: number;
}

export interface ModInstallResult {
  source: string;
  sourceKind: "zip" | "folder";
  /** Where mods were (or would be) installed. */
  targetDir: string;
  mods: ModInstallEntry[];
  warnings: string[];
  summary: string;
  dryRun: boolean;
}

export interface ModInstallOptions {
  targetDir?: string;
  overwrite?: boolean;
  dryRun?: boolean;
}

const MAX_WALK_DEPTH = 8;
const VERSION_DIR_RE = /^\d+(\.\d+)*$/;
const MAX_TARGET_SCAN_DEPTH = 3;
const MAX_FILE_COUNT = 100_000;

export class ModInstaller {
  constructor(private readonly pathManager: PathManager) {}

  /**
   * Install every mod found inside `sourcePath` (zip or folder) into the
   * target mods dir. Throws ModInstallError on unusable input.
   */
  async install(
    sourcePath: string,
    options: ModInstallOptions = {},
  ): Promise<ModInstallResult> {
    const overwrite = options.overwrite ?? false;
    const dryRun = options.dryRun ?? false;
    const warnings: string[] = [];

    // --- source kind -----------------------------------------------------
    const resolved = this.resolveSource(sourcePath);
    const sourceKind = resolved.isDir ? "folder" : "zip";

    // --- target dir ------------------------------------------------------
    // The target is created on install (and auto-created by the game), so an
    // explicit targetDir must be absolute + traversal-free but does NOT need
    // to exist yet. The auto-detected mods dir is used when none is given.
    const explicitTarget = options.targetDir?.trim();
    if (explicitTarget) {
      if (!isAbsolute(explicitTarget)) {
        throw new ModInstallError(
          "invalid-source",
          `Target directory must be absolute: ${explicitTarget}`,
        );
      }
      if (explicitTarget.split(/[\\/]+/).includes("..")) {
        throw new ModInstallError(
          "invalid-source",
          `Target directory must not contain '..': ${explicitTarget}`,
        );
      }
    }
    const targetDir = explicitTarget ?? this.pathManager.detectModsDir();
    // --- extract zips to a temp staging dir ------------------------------
    let staging: string | null = null;
    let workDir: string = resolved.path;
    try {
      if (sourceKind === "zip") {
        staging = await mkdtemp(join(tmpdir(), "pz-modinstall-"));
        let summary;
        try {
          summary = extractZipToDir(resolved.path, staging);
        } catch (error) {
          if (error instanceof ZipError) {
            throw new ModInstallError("invalid-zip", error.message);
          }
          throw error;
        }
        if (summary.skipped > 0) {
          warnings.push(
            `Skipped ${summary.skipped} archive entries while extracting (${summary.skippedReasons.join(", ")}).`,
          );
        }
        if (summary.fileCount === 0) {
          throw new ModInstallError(
            "invalid-zip",
            "The zip contains no usable files.",
          );
        }
        workDir = staging;
      }

      // --- discover mods --------------------------------------------------
      const modRoots = await this.findModRoots(workDir);
      // Flat archives (mod.info at the zip root) get their folder name from
      // the source filename so the install lands as <zip name>/ not the tmp
      // staging name.
      const flatName =
        sourceKind === "zip"
          ? sanitizeFolderName(basename(resolved.path).replace(/\.zip$/i, ""))
          : sanitizeFolderName(basename(resolved.path));
      if (modRoots.length === 0) {
        throw new ModInstallError(
          "no-mod-info",
          "No mod found: the source contains no mod.info file anywhere. Project Zomboid requires mod.info to load a mod.",
        );
      }
      const topJunk = await this.findJunkAtRoot(workDir);
      for (const junk of topJunk) {
        warnings.push(`Ignored "${junk}" in the source root.`);
      }

      // Refuse self-copies: a mod root must never land on top of itself (or
      // inside itself), e.g. the source IS the target, or the target is the
      // source's parent so <target>/<name> resolves back to the source folder.
      for (const root of modRoots) {
        const name =
          root.root === workDir
            ? flatName
            : sanitizeFolderName(basename(root.root));
        const dest = join(targetDir, name);
        const destNorm = normPath(dest);
        const rootNorm = normPath(root.root);
        if (
          destNorm === rootNorm ||
          destNorm.startsWith(rootNorm + sep) ||
          rootNorm.startsWith(destNorm + sep)
        ) {
          throw new ModInstallError(
            "source-inside-target",
            `Would copy "${root.root}" onto itself at "${dest}" — the source is inside the target mods directory. Refusing.`,
          );
        }
      }

      // --- existing mods in the target (conflict detection) --------------
      const existing = await this.scanTargetMods(targetDir);

      // --- plan + install -------------------------------------------------
      if (!dryRun) {
        await mkdir(targetDir, { recursive: true });
      }
      // Writability is checked in dry-run too so a preview against a read-only
      // target fails early instead of surprising the real run.
      const writable = await this.pathManager.isAncestorWritable(targetDir);
      if (!writable.writable) {
        throw new ModInstallError(
          "target-not-writable",
          `Target mods directory is not writable: ${targetDir}${writable.error ? ` (${writable.error})` : ""}`,
        );
      }

      const mods: ModInstallEntry[] = [];
      for (const root of modRoots) {
        mods.push(
          await this.installOneMod(
            root,
            targetDir,
            { overwrite, dryRun },
            existing,
            root.root === workDir ? flatName : undefined,
          ),
        );
      }

      const installed = mods.filter((m) => m.status === "installed").length;
      const planned = mods.filter((m) => m.status === "planned").length;
      const skipped = mods.filter((m) => m.status === "skipped").length;
      const errored = mods.filter((m) => m.status === "error").length;
      const parts: string[] = [];
      if (dryRun) parts.push(`PLANNED: ${planned} mod(s)`);
      else parts.push(`${installed} installed`);
      if (skipped > 0) parts.push(`${skipped} skipped (conflict)`);
      if (errored > 0) parts.push(`${errored} failed`);
      const summary = `Source: ${basename(resolved.path)} (${sourceKind}) · ${parts.join(" · ")} · Target: ${targetDir}`;

      return {
        source: resolved.path,
        sourceKind,
        targetDir,
        mods,
        warnings,
        summary,
        dryRun,
      };
    } finally {
      if (staging) {
        await rm(staging, { recursive: true, force: true }).catch(() => {
          /* best-effort staging cleanup */
        });
      }
    }
  }

  /** Resolve + stat the source. Files are treated as zips, dirs as folders. */
  private resolveSource(sourcePath: string): {
    path: string;
    isDir: boolean;
  } {
    let validated: string;
    try {
      validated = this.pathManager.validateInputPath(sourcePath, "file");
    } catch (error) {
      throw new ModInstallError(
        "invalid-source",
        `Invalid source path: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
    // validateInputPath('file') only checks existence; stat for kind.
    const s = statSync(validated);
    return { path: validated, isDir: s.isDirectory() };
  }

  /**
   * Walk `root` collecting every folder that owns mod content. A mod folder
   * is the parent of a mod.info — unless that parent is a numeric Build-42
   * version dir, in which case the mod folder is one level up (so a B42
   * versioned mod installs as a single folder, not as "<target>/42").
   */
  async findModRoots(
    root: string,
  ): Promise<Array<{ root: string; modInfoPath: string }>> {
    const modInfoPaths: string[] = [];

    async function walk(dir: string, depth: number): Promise<void> {
      if (depth > MAX_WALK_DEPTH) return;
      let entries;
      try {
        entries = await readdir(dir, { withFileTypes: true });
      } catch {
        return; // unreadable — skip
      }
      for (const entry of entries) {
        if (entry.name === "mod.info" && entry.isFile()) {
          modInfoPaths.push(join(dir, entry.name));
          continue;
        }
        if (!entry.isDirectory()) continue;
        const name = entry.name;
        // Skip VCS / metadata / media dirs.
        if (
          name === "media" ||
          name === ".git" ||
          name === ".svn" ||
          name === "__MACOSX"
        ) {
          continue;
        }
        if (name.startsWith(".")) continue;
        await walk(join(dir, name), depth + 1);
      }
    }
    await walk(root, 0);

    // Derive mod folders from mod.info locations, deduped.
    const byFolder = new Map<string, string>(); // folder -> preferred mod.info
    for (const modInfoPath of modInfoPaths) {
      const parent = dirname(modInfoPath);
      const folder =
        VERSION_DIR_RE.test(basename(parent)) && parent !== root
          ? dirname(parent)
          : parent;
      const preferred = byFolder.get(folder);
      if (
        preferred === undefined ||
        (preferred !== join(folder, "mod.info") &&
          modInfoPath === join(folder, "mod.info"))
      ) {
        byFolder.set(folder, modInfoPath);
      }
    }

    return [...byFolder.entries()]
      .map(([rootPath, modInfoPath]) => ({ root: rootPath, modInfoPath }))
      .sort((a, b) => a.root.localeCompare(b.root));
  }

  /**
   * Non-mod junk at the very top of the source (README, screenshots…). Listed
   * as warnings so a zip that is "mostly" a mod still installs cleanly.
   */
  private async findJunkAtRoot(root: string): Promise<string[]> {
    const junk: string[] = [];
    try {
      const entries = await readdir(root);
      const hasModFolder = existsSync(join(root, "mod.info"));
      if (!hasModFolder) {
        for (const name of entries) {
          if (
            /^readme/i.test(name) ||
            /\.(png|jpg|jpeg|webp|gif|txt|md)$/i.test(name)
          ) {
            const p = join(root, name);
            const s = await stat(p).catch(() => null);
            if (s && s.isFile()) junk.push(name);
          }
        }
      }
    } catch {
      // unreadable root — no junk report
    }
    return junk;
  }

  /** Existing mod ids + folder names under the target (conflict detection). */
  private async scanTargetMods(
    targetDir: string,
  ): Promise<{ byId: Map<string, string>; names: Set<string> }> {
    const byId = new Map<string, string>();
    const names = new Set<string>();
    if (!existsSync(targetDir)) return { byId, names };

    const caseFold =
      process.platform === "win32" || process.platform === "darwin";

    async function walk(dir: string, depth: number): Promise<void> {
      if (depth > MAX_TARGET_SCAN_DEPTH) return;
      let entries;
      try {
        entries = await readdir(dir, { withFileTypes: true });
      } catch {
        return;
      }
      for (const entry of entries) {
        if (!entry.isDirectory()) continue;
        const abs = join(dir, entry.name);
        if (entry.name === "media" || entry.name === ".git") continue;
        const mi = join(abs, "mod.info");
        if (existsSync(mi)) {
          const id = await readModInfoId(mi);
          if (id) byId.set(id.toLowerCase(), abs);
          names.add(caseFold ? entry.name.toLowerCase() : entry.name);
        }
        await walk(abs, depth + 1);
      }
    }
    await walk(targetDir, 1);
    return { byId, names };
  }

  /** Install one discovered mod folder into the target. */
  private async installOneMod(
    mod: { root: string; modInfoPath: string },
    targetDir: string,
    opts: { overwrite: boolean; dryRun: boolean },
    existing: { byId: Map<string, string>; names: Set<string> },
    fallbackName?: string,
  ): Promise<ModInstallEntry> {
    const folderName = fallbackName ?? sanitizeFolderName(basename(mod.root));
    const meta = await readModInfoMeta(mod.modInfoPath);
    const entry: ModInstallEntry = {
      name: folderName,
      status: "planned",
      targetPath: join(targetDir, folderName),
    };
    if (meta.id !== undefined) entry.modId = meta.id;
    if (meta.name !== undefined) entry.modName = meta.name;
    if (meta.version !== undefined) entry.version = meta.version;

    const caseFold =
      process.platform === "win32" || process.platform === "darwin";
    const nameConflict =
      existing.names.has(caseFold ? folderName.toLowerCase() : folderName) ||
      existsSync(join(targetDir, folderName));
    const idConflict =
      meta.id !== undefined && existing.byId.has(meta.id.toLowerCase());
    const conflictPath =
      meta.id !== undefined
        ? existing.byId.get(meta.id.toLowerCase())
        : undefined;

    if (nameConflict || idConflict) {
      if (!opts.overwrite) {
        entry.status = "skipped";
        entry.reason = idConflict
          ? `Already installed — mod id "${meta.id}" exists at ${conflictPath}`
          : `A folder named "${folderName}" already exists in ${targetDir}`;
        return entry;
      }
      entry.reason = `Replaced existing folder (${idConflict ? "same mod id" : "same name"})`;
    }

    if (opts.dryRun) {
      entry.status = "planned";
      return entry;
    }

    // Atomic-ish install: copy to a temp sibling first, verify, then swap it
    // into place. A failed copy (disk full, permissions) leaves any previously
    // installed mod untouched instead of destroying it mid-way.
    const tmpPath = entry.targetPath! + ".pz-install-tmp";
    await rm(tmpPath, { recursive: true, force: true }).catch(() => {
      /* stale tmp from a crashed run */
    });
    try {
      await cp(mod.root, tmpPath, {
        recursive: true,
        force: false,
        errorOnExist: true,
      });

      // Verify the staged copy carries its mod.info (same relative location as
      // the source — B42 mods keep it under a version folder, e.g. 42/mod.info).
      const modInfoRel = mod.modInfoPath.startsWith(mod.root + sep)
        ? mod.modInfoPath.slice(mod.root.length + 1)
        : "mod.info";
      if (!existsSync(join(tmpPath, modInfoRel))) {
        throw new Error(
          "Installed folder is missing mod.info — the game will not load it.",
        );
      }

      // Swap: remove the old folder (overwrite case) and rename the staged one.
      if (existsSync(entry.targetPath!)) {
        await rm(entry.targetPath!, { recursive: true, force: true });
      }
      await rename(tmpPath, entry.targetPath!);
    } catch (error) {
      await rm(tmpPath, { recursive: true, force: true }).catch(() => {
        /* best-effort tmp cleanup */
      });
      entry.status = "error";
      entry.reason = `Copy failed: ${error instanceof Error ? error.message : String(error)}`;
      return entry;
    }

    entry.filesCopied = await countFiles(entry.targetPath!);
    entry.status = "installed";
    return entry;
  }
}

/** Minimal mod.info metadata read (id/name/version) — same line format the
 * game and ProjectZomboidParser.parseModInfo use (`key = value`). */
export async function readModInfoMeta(
  modInfoPath: string,
): Promise<ModInfoMeta> {
  try {
    const content = await readFile(modInfoPath, "utf-8");
    const get = (key: string): string | undefined => {
      const m = content.match(
        new RegExp(`^\\s*${key}\\s*=\\s*(.+?)\\s*$`, "m"),
      );
      return m?.[1]?.trim();
    };
    const meta: ModInfoMeta = {};
    const id = get("id");
    const name = get("name");
    const version = get("version");
    if (id) meta.id = id;
    if (name) meta.name = name;
    if (version) meta.version = version;
    return meta;
  } catch {
    return {};
  }
}

/** Read mod.info id for conflict detection (kept in sync with
 * utils/modDiscovery.readModInfoId). */
async function readModInfoId(modInfoPath: string): Promise<string | undefined> {
  try {
    const content = await readFile(modInfoPath, "utf-8");
    const m = content.match(/^\s*id\s*=\s*(.+?)\s*$/m);
    return m?.[1]?.trim();
  } catch {
    return undefined;
  }
}

/** Replace characters Windows/macOS cannot handle in folder names, and guard
 * against Windows reserved device names (CON, NUL, COM1…). */
export function sanitizeFolderName(name: string): string {
  const invalid = new Set(["<", ">", ":", '"', "/", "\\", "|", "?", "*"]);
  const reserved = /^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i;
  let n = String(name)
    .split("")
    .map((ch) => (invalid.has(ch) || ch.charCodeAt(0) < 32 ? "_" : ch))
    .join("")
    .trim();
  n = n.replace(/[. ]+$/, "").replace(/^\.+/, "");
  if (reserved.test(n)) n = "_" + n;
  return n || "mod";
}

/**
 * Realpath-normalized path for reliable equality on Windows (short 8.3 names
 * like ADMINI~1 vs the long name). For a non-existent leaf, normalizes the
 * nearest existing ancestor instead.
 */
function normPath(p: string): string {
  if (existsSync(p)) {
    try {
      return realpathSync(p);
    } catch {
      return p;
    }
  }
  const parent = dirname(p);
  if (existsSync(parent)) {
    try {
      return join(realpathSync(parent), basename(p));
    } catch {
      return p;
    }
  }
  return p;
}

/** Count regular files under a dir, capped (big asset mods can have a lot). */
async function countFiles(dir: string): Promise<number> {
  let count = 0;
  const stack = [dir];
  while (stack.length > 0 && count < MAX_FILE_COUNT) {
    const current = stack.pop()!;
    let entries;
    try {
      entries = await readdir(current, { withFileTypes: true });
    } catch {
      continue;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) {
        if (stack.length < 1000) stack.push(join(current, entry.name));
      } else if (entry.isFile()) {
        count++;
      }
    }
  }
  return count;
}
