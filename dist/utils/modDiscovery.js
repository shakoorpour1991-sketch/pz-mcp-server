import { existsSync, readFileSync } from "fs";
import { readdir, stat } from "fs/promises";
import { join, basename, dirname, sep } from "path";
const MAX_WALK_DEPTH = 8;
const VERSION_DIR_RE = /^\d+(\.\d+)*$/;
/**
 * Walk modPath looking for content-bearing media dirs and mod.info files.
 * Returns one layout per distinct mod root, sorted by root path.
 */
export async function discoverModLayouts(modPath) {
    const mediaDirs = [];
    const modInfoDirs = new Map(); // dir -> mod.info path
    async function walk(dir, depth) {
        if (depth > MAX_WALK_DEPTH)
            return;
        let entries;
        try {
            entries = await readdir(dir, { withFileTypes: true });
        }
        catch {
            return; // unreadable dir — skip (matches parser's tolerant style)
        }
        for (const entry of entries) {
            if (entry.name === "mod.info") {
                modInfoDirs.set(dir, join(dir, entry.name));
                continue;
            }
            // Follow symlinked dirs (some mod installs link media/ or version
            // folders) — Dirent.isDirectory() is false for symlinks, so stat the
            // target and fall through when it resolves to a directory.
            let isDir = entry.isDirectory();
            if (!isDir && entry.isSymbolicLink()) {
                try {
                    isDir = (await stat(join(dir, entry.name))).isDirectory();
                }
                catch {
                    isDir = false; // dangling link — skip
                }
            }
            if (!isDir)
                continue;
            if (entry.name === "media") {
                const mediaDir = join(dir, entry.name);
                const hasContent = existsSync(join(mediaDir, "scripts")) ||
                    existsSync(join(mediaDir, "lua"));
                if (hasContent)
                    mediaDirs.push({ mediaDir, depth });
                // Do not descend into media — it holds textures/sounds, not layouts.
                continue;
            }
            await walk(join(dir, entry.name), depth + 1);
        }
    }
    await walk(modPath, 0);
    // Group media dirs by their nearest mod-root ancestor.
    const byRoot = new Map();
    for (const { mediaDir } of mediaDirs) {
        const modRoot = nearestModRoot(dirname(mediaDir), modInfoDirs, modPath);
        let layout = byRoot.get(modRoot);
        if (layout === undefined) {
            const modInfoPath = modInfoDirs.get(modRoot);
            const moduleName = modInfoPath === undefined
                ? modRoot === modPath
                    ? basename(modPath)
                    : basename(modRoot)
                : (readModInfoId(modInfoPath) ?? basename(modRoot));
            const fresh = {
                modRoot,
                moduleName,
                scriptsDirs: [],
                luaDirs: [],
                versions: [],
            };
            if (modInfoPath !== undefined)
                fresh.modInfoPath = modInfoPath;
            byRoot.set(modRoot, fresh);
            layout = fresh;
        }
        const scriptsDir = join(mediaDir, "scripts");
        const luaDir = join(mediaDir, "lua");
        if (existsSync(scriptsDir))
            layout.scriptsDirs.push(scriptsDir);
        if (existsSync(luaDir))
            layout.luaDirs.push(luaDir);
    }
    const layouts = [...byRoot.values()];
    for (const layout of layouts) {
        layout.scriptsDirs.sort();
        layout.luaDirs.sort();
        layout.versions = collectVersions(layout, modPath);
    }
    layouts.sort((a, b) => a.modRoot.localeCompare(b.modRoot));
    return layouts;
}
/** Walk up from a content dir to the nearest ancestor holding mod.info. */
function nearestModRoot(fromDir, modInfoDirs, fallback) {
    let dir = fromDir;
    while (dir && dir.length >= fallback.length) {
        if (modInfoDirs.has(dir))
            return dir;
        const parent = dirname(dir);
        if (parent === dir)
            break;
        dir = parent;
    }
    return fallback;
}
/**
 * Collect numeric build-version dirs that sit between the mod root and its
 * content (e.g. "42", "42.20") — the B42 layout signal used by
 * analyzeStructure's buildVersions.
 */
function collectVersions(layout, modPath) {
    const versions = new Set();
    const contentDirs = [...layout.scriptsDirs, ...layout.luaDirs];
    for (const contentDir of contentDirs) {
        const rel = contentDir.slice(modPath.length).split(sep);
        for (const segment of rel) {
            if (VERSION_DIR_RE.test(segment))
                versions.add(segment);
        }
    }
    return [...versions].sort();
}
/** Minimal mod.info id= read — avoids a parser dependency for module naming.
 * Keep the extraction in sync with ProjectZomboidParser.parseModInfo's id
 * handling (same `id = value` line format). */
export function readModInfoId(modInfoPath) {
    try {
        const content = readFileSync(modInfoPath, "utf-8");
        const match = content.match(/^\s*id\s*=\s*(.+?)\s*$/m);
        return match?.[1];
    }
    catch {
        return undefined;
    }
}
//# sourceMappingURL=modDiscovery.js.map