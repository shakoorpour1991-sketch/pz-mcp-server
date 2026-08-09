/**
 * Dynamic PZ mod-layout discovery (mod-analyzer review).
 *
 * Project Zomboid mods ship in many folder shapes, and Steam Workshop items
 * in particular are frequently *packs* that nest the real mods:
 *
 *   direct:              <mod>/media/scripts
 *   B42 versioned:       <mod>/42/media/scripts, <mod>/42.20/media/scripts
 *   common:              <mod>/common/media/scripts
 *   workshop pack:       <mod>/mods/<Name>/<version>/media/scripts
 *   workshop pack (B41): <mod>/mods/<Name>/media/scripts
 *   ...at arbitrary nesting depth, with mod.info either at the item root or
 *   beside each inner mod's media folder.
 *
 * Instead of guessing a fixed set of paths, this walks the tree (bounded
 * depth, `media` dirs are not descended — they are only inspected for
 * scripts/lua children) and groups content by the mod root that owns it: the
 * nearest ancestor containing a mod.info, falling back to the given modPath
 * itself. Each group gets its own module name (mod.info id, else the root
 * folder name) so a pack's inner mods are parsed under their own module.
 */
export interface DiscoveredModLayout {
    /** Directory that owns this content (has mod.info, or the given modPath). */
    modRoot: string;
    /** Absolute path to the governing mod.info, when one was found. */
    modInfoPath?: string;
    /** Module prefix for this group: mod.info id, else basename(modRoot). */
    moduleName: string;
    /** Absolute media/scripts directories (deduped, sorted). */
    scriptsDirs: string[];
    /** Absolute media/lua directories (deduped, sorted). */
    luaDirs: string[];
    /** Numeric build-version dirs seen above content (e.g. "42", "42.20"). */
    versions: string[];
}
/**
 * Walk modPath looking for content-bearing media dirs and mod.info files.
 * Returns one layout per distinct mod root, sorted by root path.
 */
export declare function discoverModLayouts(modPath: string): Promise<DiscoveredModLayout[]>;
/** Minimal mod.info id= read — avoids a parser dependency for module naming.
 * Keep the extraction in sync with ProjectZomboidParser.parseModInfo's id
 * handling (same `id = value` line format). */
export declare function readModInfoId(modInfoPath: string): string | undefined;
//# sourceMappingURL=modDiscovery.d.ts.map