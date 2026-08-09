/**
 * The six Project Zomboid script block types that the parser stores, the
 * validator checks, and the generator emits (freebuff review refactor #5).
 *
 * A single source of truth so the three consumers (and the MCP schemas in
 * index.ts) can never drift apart. Previously the array was repeated inline
 * in the parser's allowlist, three zod enums, and the generator dispatch.
 */
export const BLOCK_TYPES = [
    "item",
    "recipe",
    "evolvedrecipe",
    "fixing",
    "sound",
    "vehicle",
];
/** Narrowing guard — true only for the six primary block types. */
export function isBlockType(value) {
    return BLOCK_TYPES.includes(value);
}
/** Search tool type filter — the six block types plus 'all'. */
export const SEARCH_TYPES = [...BLOCK_TYPES, "all"];
//# sourceMappingURL=blockTypes.js.map