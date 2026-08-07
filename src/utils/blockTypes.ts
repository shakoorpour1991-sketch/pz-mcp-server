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
] as const;

export type BlockType = (typeof BLOCK_TYPES)[number];

/** Narrowing guard — true only for the six primary block types. */
export function isBlockType(value: string): value is BlockType {
  return (BLOCK_TYPES as readonly string[]).includes(value);
}

/** Search tool type filter — the six block types plus 'all'. */
export const SEARCH_TYPES = [...BLOCK_TYPES, "all"] as const;

export type SearchType = (typeof SEARCH_TYPES)[number];
