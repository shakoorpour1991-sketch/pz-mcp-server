/**
 * Mod Workspace Manager — a rooted, safety-first filesystem abstraction for
 * building and managing Project Zomboid mod projects.
 *
 * Every operation takes a *workspace-relative* path and is strictly confined
 * to the configured workspace root(s): traversal sequences (`..`), absolute
 * paths, null bytes and symlink escapes are rejected with a structured
 * WorkspaceError before any disk access. Writes are atomic (temp file +
 * rename), destructive operations require explicit intent (`force`, `dryRun`
 * previews), and nothing is ever silently overwritten.
 *
 * The class knows nothing about MCP — it is the layer future features (game
 * launching, autonomous mod development, watch mode) can depend on. The
 * workspace_* tools in src/tools/workspace.ts are a thin adapter on top, and
 * higher-level mod semantics (mod.info parsing, validation, dependency
 * resolution) are delegated to the existing parser/analyzer at that layer.
 */
import { existsSync, realpathSync } from "fs";
import {
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  stat,
  writeFile,
} from "fs/promises";
import { randomBytes } from "crypto";
import { basename, dirname, isAbsolute, join, relative, resolve } from "path";

/** Stable, machine-readable error codes for workspace operations. */
export type WorkspaceErrorCode =
  | "PATH_ESCAPE"
  | "INVALID_PATH"
  | "NOT_FOUND"
  | "ALREADY_EXISTS"
  | "NOT_EMPTY"
  | "NO_MATCH"
  | "FORCE_REQUIRED"
  | "IS_WORKSPACE_ROOT"
  | "IO";

/** Structured error carrying a code + optional offending path. */
export class WorkspaceError extends Error {
  readonly code: WorkspaceErrorCode;
  readonly path?: string;

  constructor(code: WorkspaceErrorCode, message: string, path?: string) {
    super(message);
    this.name = "WorkspaceError";
    this.code = code;
    if (path !== undefined) this.path = path;
  }
}

export interface CreateProjectOptions {
  modId: string;
  modName?: string;
  author?: string;
  description?: string;
  /** Mod version written into mod.info (default "1.0"). */
  version?: string;
  /** Numeric Build-42 version folder (default "42"). */
  buildVersion?: string;
  /** "minimal" (metadata + scripts dir) or "full" (adds lua/sound/textures/maps + sample server script). */
  template?: "minimal" | "full";
  /** Other mod ids to declare in mod.info require=. */
  requires?: string[];
  /** Pre-generated sample item script text (tool layer uses generate_script). */
  sampleItemScript?: string | undefined;
  /** Also write a poster.png placeholder. */
  includePoster?: boolean;
  /**
   * If the project folder already exists, only add scaffold files that are
   * missing — existing files are NEVER modified.
   */
  overwrite?: boolean;
  dryRun?: boolean;
}

export interface CreateProjectResult {
  project: string;
  root: string;
  created: string[];
  dryRun: boolean;
}

export interface ProjectInfo {
  name: string;
  root: string;
  path: string;
  hasModInfo: boolean;
}

export interface ProjectFileEntry {
  /** Workspace-relative path using forward slashes. */
  path: string;
  name: string;
  type: "file" | "dir";
  size?: number;
}

export interface ListOptions {
  recursive?: boolean;
  maxDepth?: number;
  maxEntries?: number;
}

export interface FilePatch {
  oldText: string;
  newText?: string;
  /** Exact number of occurrences required (default: replace all). */
  count?: number;
  description?: string;
}

export interface PatchChange {
  oldText: string;
  newText: string;
  description?: string;
}

export interface WriteOptions {
  overwrite?: boolean;
  dryRun?: boolean;
}

export interface DeleteOptions {
  force?: boolean;
  recursive?: boolean;
  dryRun?: boolean;
}

export interface RenameOptions {
  overwrite?: boolean;
}

/** Smallest valid 1×1 PNG — used for the poster.png placeholder. */
const TINY_PNG_BASE64 =
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

const MEDIA_CONTENT_TYPES: Array<[string, string]> = [
  ["scripts", "scripts"],
  ["lua", "lua"],
  ["textures", "textures"],
  ["sound", "sound"],
  ["maps", "maps"],
  ["models", "models"],
  ["clothing", "clothing"],
  ["radio", "radio"],
  ["music", "music"],
  ["animsets", "animations"],
  ["ui", "ui"],
  ["fonts", "fonts"],
];

export class WorkspaceManager {
  private readonly roots: string[];

  constructor(roots: string[]) {
    if (!roots.length) {
      throw new Error("WorkspaceManager requires at least one workspace root");
    }
    this.roots = roots.map((r) => resolve(r));
  }

  /** All configured roots (resolved absolute paths). */
  getRoots(): string[] {
    return [...this.roots];
  }

  /** Primary root — the target of every write operation. */
  primaryRoot(): string {
    return this.roots[0];
  }

  /**
   * Map a workspace-relative path to an absolute path inside the primary root.
   * Throws PATH_ESCAPE / INVALID_PATH on any escape attempt.
   */
  resolve(relPath: string): { root: string; abs: string } {
    const norm = normalizeRelPath(relPath, "INVALID_PATH");
    return { root: this.roots[0], abs: resolve(this.roots[0], norm) };
  }

  /**
   * Resolve for reads: prefer the first root where the path actually exists so
   * secondary roots are inspectable; writes always target the primary root.
   */
  resolveForRead(relPath: string): { root: string; abs: string } {
    const norm = normalizeRelPath(relPath, "INVALID_PATH");
    for (const root of this.roots) {
      const abs = resolve(root, norm);
      if (existsSync(abs)) return { root, abs };
    }
    return { root: this.roots[0], abs: resolve(this.roots[0], norm) };
  }

  // ---------------------------------------------------------------------------
  // Project-level operations
  // ---------------------------------------------------------------------------

  /** Ensure every root directory exists (idempotent). */
  async ensureRoots(): Promise<void> {
    for (const root of this.roots) {
      await mkdir(root, { recursive: true });
    }
  }

  /** List project folders under every root (union, sorted). */
  async listProjects(): Promise<ProjectInfo[]> {
    await this.ensureRoots();
    const out: ProjectInfo[] = [];
    for (const root of this.roots) {
      let entries;
      try {
        entries = await readdir(root, { withFileTypes: true });
      } catch {
        continue;
      }
      for (const entry of entries) {
        if (!entry.isDirectory() || entry.name.startsWith(".")) continue;
        const abs = join(root, entry.name);
        out.push({
          name: entry.name,
          root,
          path: abs,
          hasModInfo:
            existsSync(join(abs, "mod.info")) ||
            existsSync(join(abs, "42", "mod.info")),
        });
      }
    }
    return out.sort((a, b) => a.name.localeCompare(b.name));
  }

  /**
   * Scaffold a new B42 mod project (or top up a missing scaffold on an
   * existing folder when overwrite is set — existing files are never touched).
   */
  async createProject(
    name: string,
    options: CreateProjectOptions,
  ): Promise<CreateProjectResult> {
    const project = normalizeRelPath(name, "INVALID_PATH");
    if (project.includes("/")) {
      throw new WorkspaceError(
        "INVALID_PATH",
        "Project name must be a single folder name (no slashes)",
      );
    }
    const { abs } = this.resolve(project);

    if (existsSync(abs) && !options.overwrite) {
      throw new WorkspaceError(
        "ALREADY_EXISTS",
        `Project already exists — pass overwrite:true to only add missing scaffold files: ${project}`,
        abs,
      );
    }
    this.assertParentWithin(abs);

    const buildVersion = options.buildVersion ?? "42";
    if (!/^\d+(\.\d+)*$/.test(buildVersion)) {
      throw new WorkspaceError(
        "INVALID_PATH",
        `buildVersion must be numeric (e.g. 42 or 42.20), got: ${buildVersion}`,
      );
    }
    const modId = options.modId.trim();
    if (!modId) {
      throw new WorkspaceError("INVALID_PATH", "modId must not be empty");
    }

    const modName = options.modName?.trim() || modId;
    const author = options.author?.trim() || "";
    const description = options.description?.trim() || "";
    const version = options.version?.trim() || "1.0";
    const requires = options.requires?.filter((r) => r.trim()) ?? [];
    const template = options.template ?? "full";
    const includePoster = options.includePoster !== false;

    const files = this.planScaffold(abs, {
      modId,
      modName,
      author,
      description,
      version,
      requires,
      buildVersion,
      template,
      includePoster,
      sampleItemScript: options.sampleItemScript,
    } as const);

    const created: string[] = [];
    for (const file of files) {
      if (existsSync(file.path)) continue; // never clobber an existing file
      created.push(file.relative);
    }

    if (options.dryRun) {
      return { project, root: abs, created, dryRun: true };
    }

    for (const file of files) {
      if (existsSync(file.path)) continue;
      await mkdir(dirname(file.path), { recursive: true });
      await this.writeAtomic(file.path, file.content);
    }
    return { project, root: abs, created, dryRun: false };
  }

  private planScaffold(
    abs: string,
    p: {
      modId: string;
      modName: string;
      author: string;
      description: string;
      version: string;
      requires: string[];
      buildVersion: string;
      template: "minimal" | "full";
      includePoster: boolean;
      sampleItemScript?: string | undefined;
    },
  ): Array<{ path: string; relative: string; content: string | Buffer }> {
    const out: Array<{
      path: string;
      relative: string;
      content: string | Buffer;
    }> = [];
    const rel = (segments: string[]) =>
      join(abs, ...segments).replace(/\\/g, "/");
    const push = (segments: string[], content: string | Buffer) =>
      out.push({ path: rel(segments), relative: segments.join("/"), content });

    // mod.info — root-level single source of truth (also accepted by the game
    // and by every analyzer layout check; the version folder holds media/).
    const infoLines = [`name=${p.modName}`, `id=${p.modId}`];
    if (p.author) infoLines.push(`author=${p.author}`);
    if (p.description) infoLines.push(`description=${p.description}`);
    infoLines.push(`version=${p.version}`);
    if (p.requires.length) infoLines.push(`require=${p.requires.join(",")}`);
    if (p.includePoster) infoLines.push("poster=poster.png");
    push(["mod.info"], infoLines.join("\n") + "\n");

    // workshop.txt — the in-game Steam uploader reads title/description.
    push(
      ["workshop.txt"],
      `title=${p.modName}\n${p.description ? `description=${p.description}\n` : ""}`,
    );

    if (p.includePoster) {
      push(["poster.png"], Buffer.from(TINY_PNG_BASE64, "base64"));
    }

    // B42 layout: mandatory common/ (shared large assets) + version folder
    // holding the versioned media/ tree (Build 42 modding structure).
    push(["common", "media", ".gitkeep"], "");

    const media = [p.buildVersion, "media"];
    push([...media, "scripts", ".gitkeep"], "");

    if (p.sampleItemScript) {
      push(
        [...media, "scripts", `${p.modId}_items.txt`],
        p.sampleItemScript.trimEnd() + "\n",
      );
    }

    if (p.template === "full") {
      push([...media, "lua", "server", ".gitkeep"], "");
      push(
        [...media, "lua", "server", `${p.modId}_init.lua`],
        this.sampleServerLua(p.modId, p.modName),
      );
      push([...media, "sound", ".gitkeep"], "");
      push([...media, "textures", ".gitkeep"], "");
      push([...media, "maps", ".gitkeep"], "");
    }

    return out;
  }

  /** B42-safe server Lua hook template (knowledge: media/lua/server + Events). */
  private sampleServerLua(modId: string, modName: string): string {
    return [
      `-- ${modName} (${modId}) — server entry point, Build 42`,
      "-- Loaded from media/lua/server/ on the host / dedicated server.",
      "-- Register your events and distribute your content here.",
      "",
      "local function onGameStart()",
      "    -- Example: spawn a starter kit into every survivor's inventory.",
      "    -- local inv = getPlayer():getInventory()",
      "    -- inv:AddItem('Base.CannedBeans2')",
      "end",
      "",
      "Events.OnGameStart.Add(onGameStart)",
      "",
    ].join("\n");
  }

  // ---------------------------------------------------------------------------
  // File operations (all workspace-relative, all root-confined)
  // ---------------------------------------------------------------------------

  /** Recursively list files/dirs under a workspace-relative path. */
  async listFiles(
    relPath: string,
    opts: ListOptions = {},
  ): Promise<ProjectFileEntry[]> {
    const { root, abs } = this.resolveForRead(relPath);
    if (!existsSync(abs)) {
      throw new WorkspaceError("NOT_FOUND", `Path does not exist: ${relPath}`);
    }
    this.assertRealWithin(root, abs);

    const recursive = opts.recursive !== false;
    const maxDepth = opts.maxDepth ?? 12;
    const maxEntries = opts.maxEntries ?? 2000;
    const out: ProjectFileEntry[] = [];

    const walk = async (dir: string, depth: number): Promise<void> => {
      if (out.length >= maxEntries || depth > maxDepth) return;
      let entries;
      try {
        entries = await readdir(dir, { withFileTypes: true });
      } catch {
        return;
      }
      entries.sort((a, b) => a.name.localeCompare(b.name));
      for (const entry of entries) {
        if (out.length >= maxEntries) return;
        let isDir = entry.isDirectory();
        if (!isDir && entry.isSymbolicLink()) {
          try {
            isDir = (await stat(join(dir, entry.name))).isDirectory();
            // A symlinked dir must stay inside the listing root — refuse
            // (PATH_ESCAPE) rather than silently read outside it.
            this.assertRealWithin(root, join(dir, entry.name));
          } catch (error) {
            if (error instanceof WorkspaceError) throw error;
            isDir = false;
          }
        }
        const entryAbs = join(dir, entry.name);
        // Paths are relative to the root this listing resolved against, so
        // secondary-root listings never produce '..' segments.
        const rel = relative(root, entryAbs).replace(/\\/g, "/");
        if (isDir) {
          out.push({ path: rel, name: entry.name, type: "dir" });
          if (recursive) await walk(entryAbs, depth + 1);
        } else {
          let size: number | undefined;
          try {
            size = (await stat(entryAbs)).size;
          } catch {
            size = undefined;
          }
          out.push({
            path: rel,
            name: entry.name,
            type: "file",
            ...(size !== undefined ? { size } : {}),
          });
        }
      }
    };
    const rootStat = await stat(abs);
    const rootRel = relative(root, abs).replace(/\\/g, "/") || ".";
    out.push({
      path: rootRel,
      name: basename(abs),
      type: rootStat.isDirectory() ? "dir" : "file",
    });
    if (rootStat.isDirectory()) {
      await walk(abs, 0);
    }
    return out;
  }

  /** Read a text file inside the workspace. */
  async readFile(
    relPath: string,
  ): Promise<{ path: string; abs: string; content: string; size: number }> {
    const { root, abs } = this.resolveForRead(relPath);
    if (!existsSync(abs)) {
      throw new WorkspaceError("NOT_FOUND", `File does not exist: ${relPath}`);
    }
    this.assertRealWithin(root, abs);
    const st = await stat(abs);
    if (st.isDirectory()) {
      throw new WorkspaceError(
        "INVALID_PATH",
        `Path is a directory, not a file: ${relPath}`,
      );
    }
    const content = await readFile(abs, "utf-8");
    return { path: relPath, abs, content, size: st.size };
  }

  /** Write a file atomically (temp file + rename) with overwrite protection. */
  async writeFile(
    relPath: string,
    content: string | Buffer,
    opts: WriteOptions = {},
  ): Promise<{ dryRun: boolean; path: string; abs: string; bytes: number }> {
    const { root, abs } = this.resolve(relPath);
    if (existsSync(abs)) {
      this.assertRealWithin(root, abs);
      const st = await stat(abs);
      if (st.isDirectory()) {
        throw new WorkspaceError(
          "INVALID_PATH",
          `Path is a directory, not a file: ${relPath}`,
        );
      }
      if (!opts.overwrite) {
        throw new WorkspaceError(
          "ALREADY_EXISTS",
          `File exists — pass overwrite:true to replace it: ${relPath}`,
          abs,
        );
      }
    }
    const bytes = Buffer.byteLength(content, "utf-8");
    if (opts.dryRun) {
      return { dryRun: true, path: relPath, abs, bytes };
    }
    this.assertParentWithin(abs);
    await mkdir(dirname(abs), { recursive: true });
    await this.writeAtomic(abs, content);
    return { dryRun: false, path: relPath, abs, bytes };
  }

  /**
   * Safely patch a file with context-matched replacements. Every patch must
   * match — a patch that matches nothing (or a count mismatch) aborts the
   * whole call with NO_MATCH and nothing is written.
   */
  async patchFile(
    relPath: string,
    patches: FilePatch[],
  ): Promise<{
    path: string;
    abs: string;
    changed: boolean;
    changes: PatchChange[];
  }> {
    const { root, abs } = this.resolve(relPath);
    if (!existsSync(abs)) {
      throw new WorkspaceError("NOT_FOUND", `File does not exist: ${relPath}`);
    }
    this.assertRealWithin(root, abs);
    const original = await readFile(abs, "utf-8");
    let current = original;
    const changes: PatchChange[] = [];

    for (const patch of patches) {
      const oldText = patch.oldText;
      const newText = patch.newText ?? "";
      if (!oldText) {
        throw new WorkspaceError(
          "INVALID_PATH",
          "Each patch needs a non-empty oldText to match against",
        );
      }
      const required = patch.count;
      let applied = 0;
      let from = 0;
      for (;;) {
        const idx = current.indexOf(oldText, from);
        if (idx === -1) break;
        current =
          current.slice(0, idx) + newText + current.slice(idx + oldText.length);
        changes.push({
          oldText,
          newText,
          ...(patch.description !== undefined
            ? { description: patch.description }
            : {}),
        });
        applied++;
        if (required !== undefined && applied >= required) break;
        from = idx + newText.length;
      }
      if (applied === 0) {
        throw new WorkspaceError(
          "NO_MATCH",
          `Patch matched nothing — aborting, nothing written: ${patch.description || oldText.slice(0, 80)}`,
        );
      }
      if (required !== undefined && applied !== required) {
        throw new WorkspaceError(
          "NO_MATCH",
          `Patch expected ${required} occurrence(s) but found ${applied}: ${patch.description || oldText.slice(0, 80)}`,
        );
      }
    }

    if (current === original) {
      return { path: relPath, abs, changed: false, changes: [] };
    }
    await this.writeAtomic(abs, current);
    return { path: relPath, abs, changed: true, changes };
  }

  /**
   * Delete a file or directory. Requires explicit `force: true` (destructive
   * operations demand intent) and `recursive: true` for non-empty dirs.
   * dryRun defaults to true — preview before acting.
   */
  async delete(
    relPath: string,
    opts: DeleteOptions = {},
  ): Promise<{
    dryRun: boolean;
    path: string;
    abs: string;
    type: "file" | "dir";
  }> {
    const { root, abs } = this.resolve(relPath);
    if (!existsSync(abs)) {
      throw new WorkspaceError("NOT_FOUND", `Path does not exist: ${relPath}`);
    }
    for (const r of this.roots) {
      if (abs === r) {
        throw new WorkspaceError(
          "IS_WORKSPACE_ROOT",
          "Refusing to delete a workspace root",
        );
      }
    }
    this.assertRealWithin(root, abs);
    if (!opts.force) {
      throw new WorkspaceError(
        "FORCE_REQUIRED",
        "Deletion requires explicit force:true",
        abs,
      );
    }
    const st = await stat(abs);
    const type: "file" | "dir" = st.isDirectory() ? "dir" : "file";
    if (type === "dir") {
      const entries = await readdir(abs);
      if (entries.length > 0 && !opts.recursive) {
        throw new WorkspaceError(
          "NOT_EMPTY",
          "Directory is not empty — pass recursive:true to delete it",
          abs,
        );
      }
    }
    if (opts.dryRun !== false) {
      return { dryRun: true, path: relPath, abs, type };
    }
    await rm(abs, { recursive: type === "dir", force: true });
    return { dryRun: false, path: relPath, abs, type };
  }

  /** Rename or move a file/dir within the workspace. */
  async rename(
    fromRel: string,
    toRel: string,
    opts: RenameOptions = {},
  ): Promise<{ from: string; to: string; moved: boolean }> {
    const { root, abs: fromAbs } = this.resolve(fromRel);
    const { abs: toAbs } = this.resolve(toRel);
    if (!existsSync(fromAbs)) {
      throw new WorkspaceError(
        "NOT_FOUND",
        `Source does not exist: ${fromRel}`,
      );
    }
    this.assertRealWithin(root, fromAbs);
    if (existsSync(toAbs)) {
      if (!opts.overwrite) {
        throw new WorkspaceError(
          "ALREADY_EXISTS",
          `Target already exists — pass overwrite:true to replace it: ${toRel}`,
          toAbs,
        );
      }
      this.assertRealWithin(root, toAbs);
    }
    this.assertParentWithin(toAbs);
    await mkdir(dirname(toAbs), { recursive: true });
    await rename(fromAbs, toAbs);
    return { from: fromRel, to: toRel, moved: true };
  }

  /**
   * Content types present in a project, derived from its media/ tree:
   * scripts, lua, textures, sound, maps, models, clothing, radio, music,
   * animations, ui, fonts + mod/poster/workshop markers.
   */
  async detectContentTypes(projectAbs: string): Promise<string[]> {
    const found = new Set<string>();
    if (!existsSync(projectAbs)) return [];

    const walk = async (dir: string, depth: number): Promise<void> => {
      if (depth > 8) return;
      let entries;
      try {
        entries = await readdir(dir, { withFileTypes: true });
      } catch {
        return;
      }
      for (const entry of entries) {
        if (entry.name.startsWith(".")) continue;
        if (!entry.isDirectory()) continue;
        if (entry.name === "media") {
          const mediaDir = join(dir, entry.name);
          let mediaEntries;
          try {
            mediaEntries = await readdir(mediaDir, { withFileTypes: true });
          } catch {
            continue;
          }
          for (const sub of mediaEntries) {
            const match = MEDIA_CONTENT_TYPES.find(
              ([name]) => name === sub.name,
            );
            if (match) found.add(match[1]);
          }
          continue; // do not descend deeper into media/
        }
        await walk(join(dir, entry.name), depth + 1);
      }
    };

    await walk(projectAbs, 0);
    if (
      existsSync(join(projectAbs, "mod.info")) ||
      existsSync(join(projectAbs, "42", "mod.info"))
    ) {
      found.add("mod");
    }
    if (
      /^(poster|icon|preview)\.(png|jpe?g|webp|bmp)$/i.test(
        basename(projectAbs),
      ) ||
      existsSync(join(projectAbs, "poster.png"))
    ) {
      found.add("poster");
    }
    if (existsSync(join(projectAbs, "workshop.txt"))) found.add("workshop");
    return [...found].sort();
  }

  // ---------------------------------------------------------------------------
  // Safety internals
  // ---------------------------------------------------------------------------

  /** Atomic write: temp file in the same dir, then rename over the target. */
  private async writeAtomic(
    abs: string,
    content: string | Buffer,
  ): Promise<void> {
    const tmp = join(
      dirname(abs),
      `.${basename(abs)}.${process.pid}.${randomBytes(4).toString("hex")}.tmp`,
    );
    // Buffer stays raw (binary assets like poster.png); strings default to UTF-8.
    await writeFile(tmp, content);
    try {
      await rename(tmp, abs);
    } catch (error) {
      await rm(tmp, { force: true }).catch(() => {});
      throw new WorkspaceError(
        "IO",
        `Failed to write ${basename(abs)}: ${error instanceof Error ? error.message : String(error)}`,
        abs,
      );
    }
  }

  /** Case-insensitive containment test (Windows paths are case-insensitive). */
  private isWithin(root: string, candidate: string): boolean {
    const cmp = (s: string) =>
      process.platform === "win32" ? s.toLowerCase() : s;
    const rel = relative(cmp(root), cmp(candidate));
    return rel === "" || (!rel.startsWith("..") && !isAbsolute(rel));
  }

  /**
   * Realpath containment guard for an existing path — stops symlink/junction
   * escapes (a link inside the root pointing outside it).
   */
  private assertRealWithin(root: string, abs: string): void {
    if (!existsSync(abs)) return;
    let real: string;
    try {
      real = realpathSync(abs);
    } catch {
      return; // dangling link — the parent guard handles it
    }
    const realRoot = existsSync(root) ? realpathSync(root) : root;
    if (!this.isWithin(realRoot, real)) {
      throw new WorkspaceError(
        "PATH_ESCAPE",
        `Path resolves outside the workspace via a link: ${abs}`,
        abs,
      );
    }
  }

  /**
   * Guard for paths that don't exist yet (writes/renames): walk up to the
   * nearest existing ancestor and realpath-check it stays inside the root.
   */
  private assertParentWithin(abs: string): void {
    let cur = dirname(abs);
    while (!existsSync(cur) && cur !== dirname(cur)) {
      cur = dirname(cur);
    }
    if (cur === dirname(cur) && !existsSync(cur)) return;
    this.assertRealWithin(this.primaryRoot(), cur);
  }
}

/**
 * Normalize a workspace-relative path and reject anything that could escape:
 * empty, null bytes, '..' segments, absolute paths, drive letters.
 */
function normalizeRelPath(
  relPath: string,
  emptyCode: WorkspaceErrorCode,
): string {
  if (typeof relPath !== "string" || relPath.trim() === "") {
    throw new WorkspaceError(emptyCode, "Path must not be empty");
  }
  if (relPath.includes("\0")) {
    throw new WorkspaceError("INVALID_PATH", "Path contains a null byte");
  }
  const norm = relPath
    .split(/[\\/]+/)
    .filter((s) => s.length > 0 && s !== ".")
    .join("/");
  if (norm === "") {
    throw new WorkspaceError(emptyCode, "Path must not be empty");
  }
  if (isAbsolute(relPath) || /^[A-Za-z]:/.test(relPath)) {
    throw new WorkspaceError(
      "PATH_ESCAPE",
      "Path must be relative to the workspace root",
    );
  }
  if (norm.split("/").includes("..")) {
    throw new WorkspaceError(
      "PATH_ESCAPE",
      `Path must not contain '..' segments: ${relPath}`,
    );
  }
  return norm;
}
