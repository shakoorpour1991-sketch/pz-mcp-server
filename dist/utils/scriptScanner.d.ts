/**
 * Shared PZ script block scanner (freebuff review M1).
 *
 * The game-file parser and the validation engine previously maintained two
 * copies of the module/brace/block tracking state machine that drifted apart
 * (audit F5–F9 fixed exactly such drift). This is the single source of truth
 * for splitting a script's text into blocks. Ported faithfully from the
 * parser's battle-tested algorithm (B42 quirks included):
 *
 * - recognizes both "module X {" (B41) and "module X\n{" (B42) forms
 * - block headers are recognized only outside a module or after its opening
 *   brace (pastModuleHeader latch)
 * - lines that look like inner property/ingredient lines (contain [, = or ,)
 *   are never treated as block headers — this stops "item variable[1:20]
 *   [Base.Corn] ..." ingredient lines inside craftRecipe from becoming fake
 *   items
 * - craftRecipe/craftrecipe are normalized to type 'recipe' (rawType keeps
 *   the original keyword so B42-vs-B41 property parsing can still differ)
 * - same-line empty blocks ("item Foo {}") close immediately
 * - a block closes when brace depth returns to the level it started at
 */
export interface ScanBlock {
    /** Normalized block type (craftRecipe/craftrecipe → 'recipe'). */
    type: string;
    /** Original block keyword ("craftRecipe" for B42 recipes). */
    rawType: string;
    name: string;
    module: string;
    /** 1-based line of the block header. */
    startLine: number;
    endLine: number;
    /** Trimmed lines including the header line. */
    content: string[];
    rawContent: string;
}
/** Strip line comments and inline block comments, tracking block-comment state. */
export declare function stripLineComments(line: string, inBlockComment: boolean): {
    code: string;
    inBlockComment: boolean;
};
/** Count { and } in a comment-stripped line. Shared by the scanner and ValidationEngine. */
export declare function countBraces(code: string): {
    open: number;
    close: number;
};
export declare function scanScriptBlocks(content: string, defaultModule?: string): ScanBlock[];
//# sourceMappingURL=scriptScanner.d.ts.map