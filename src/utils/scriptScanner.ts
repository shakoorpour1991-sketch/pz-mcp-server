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
 *
 * Optional deep mode (`keywords` + `nested`) — used by the validation
 * knowledge layer, never by the parser: every block keyword known to the
 * pz-scripts-data dataset (including multi-token variants such as "component
 * FluidContainer") is recognized at any brace depth, each block records its
 * enclosing block in `parent`, and ingredient/entry lines ("item 1 Base.Log",
 * "data 0.0;1.0") are still never treated as headers. The default path is
 * byte-for-byte the legacy flat behavior, so the parser's block stream is
 * unchanged.
 */

/** Container types whose inner lines must never leak as fake items. */
const BASE_KEYWORDS = [
  "item",
  "recipe",
  "craftRecipe",
  "craftrecipe",
  "evolvedrecipe",
  "fixing",
  "sound",
  "vehicle",
  "entity",
  "mod",
  "model",
  "event",
  "timedAction",
  "fluid",
  "physics",
  "mannequin",
  "clock",
  "energy",
  "animation",
  "bodylocation",
  "creature",
] as const;

// Group 1 = keyword, group 2 = name (same capture order as the deep regex).
const BLOCK_RE = new RegExp("^(" + BASE_KEYWORDS.join("|") + ")\\s+([^{]+)");

export interface ScanBlockOptions {
  /**
   * Extra block keywords to recognize as block headers (may be multi-token,
   * e.g. "component FluidContainer"). Only meaningful together with `nested`:
   * the validation knowledge layer passes the dataset's full keyword set.
   */
  keywords?: Iterable<string>;
  /**
   * Recognize block headers while a block is already open, producing nested
   * blocks that carry a `parent` field. Off by default so the parser's flat
   * block stream is unchanged.
   */
  nested?: boolean;
}

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
  /**
   * The block that encloses this one — its rawType for nested blocks,
   * "module" for top-level blocks inside a module, or unset at the file
   * root. Only populated when scanning with `nested: true`.
   */
  parent?: string;
}

/** Strip line comments and inline block comments, tracking block-comment state. */
export function stripLineComments(
  line: string,
  inBlockComment: boolean,
): { code: string; inBlockComment: boolean } {
  let code = "";
  let i = 0;
  while (i < line.length) {
    if (inBlockComment) {
      if (line[i] === "*" && line[i + 1] === "/") {
        inBlockComment = false;
        i += 2;
      } else {
        i++;
      }
    } else {
      if (line[i] === "/" && line[i + 1] === "*") {
        inBlockComment = true;
        i += 2;
      } else if (line[i] === "/" && line[i + 1] === "/") {
        break;
      } else {
        code += line[i];
        i++;
      }
    }
  }
  return { code, inBlockComment };
}

/** Count { and } in a comment-stripped line. Shared by the scanner and ValidationEngine. */
export function countBraces(code: string): { open: number; close: number } {
  return {
    open: (code.match(/\{/g) || []).length,
    close: (code.match(/\}/g) || []).length,
  };
}

function escapeRe(s: string): string {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Is a captured block name entry-like (an ingredient/entry line)? True when
 * the name is an amount ("1", "1.5", ".5", "-1", "+1") followed by
 * whitespace/end, or contains ';' (a list). Digit-leading block IDs
 * ("item 1H_KitchenKnife") are legitimately NOT entry-like.
 */
function isEntryLikeName(name: string): boolean {
  return (
    name !== "" &&
    (/^[+-]?(?:\d+(?:\.\d+)?|\.\d+)(?=\s|$)/.test(name) || name.includes(";"))
  );
}

const deepReCache = new Map<string, RegExp>();

/**
 * Compile the block-header regex for a keyword set. Multi-token keywords
 * ("component FluidContainer") are tried before their prefixes, and the name
 * capture is optional (`[^{]*`) because deep-mode blocks (variants, ID-less
 * nested blocks like `model {`) may legitimately have no name. Matching is
 * case-insensitive so scripts that write dataset keywords in any case still
 * resolve through the knowledge layer's case-insensitive lookup.
 */
function buildBlockRe(keywords?: Iterable<string>): RegExp {
  if (!keywords) return BLOCK_RE;
  const extras = [...keywords];
  if (extras.length === 0) return BLOCK_RE;
  const signature = extras.join("\u0001");
  const cached = deepReCache.get(signature);
  if (cached) return cached;
  const union = new Set<string>([...BASE_KEYWORDS, ...extras]);
  const ordered = [...union].sort((a, b) => {
    const ta = a.split(" ").length;
    const tb = b.split(" ").length;
    return tb - ta || b.length - a.length;
  });
  // Group 1 is the (source-verbatim) keyword, group 2 the optional name —
  // mirroring BLOCK_RE's (keyword, name) capture order. The whitespace+name
  // part is optional so a multi-token keyword alone ("component
  // FluidContainer") or a bare keyword ("sound") still matches the full
  // keyword instead of backtracking onto a shorter alternative. The word
  // boundary lookahead stops prefix collisions: "items" must never match
  // the keyword "item" (a vehicle table's `items` section is not an item
  // block), "components" is its own keyword, etc.
  const re = new RegExp(
    "^(" + ordered.map(escapeRe).join("|") + ")(?=\\s|\\{|$)(?:\\s+([^{]*))?",
    "i",
  );
  deepReCache.set(signature, re);
  return re;
}

export function scanScriptBlocks(
  content: string,
  defaultModule = "Base",
  options: ScanBlockOptions = {},
): ScanBlock[] {
  const lines = content.split("\n");
  const blocks: ScanBlock[] = [];
  const blockRe = buildBlockRe(options.keywords);

  let currentModule = defaultModule;
  // Open-block chain (deep mode): each frame remembers the block and the
  // brace level it started at, so a nested block can pop back to it.
  const stack: Array<{ block: ScanBlock; startLevel: number }> = [];
  let currentBlock: ScanBlock | null = null;
  let currentBlockStartLevel = 0;
  let braceLevel = 0;
  let inModule = false;
  let pastModuleHeader = false;
  let inBlockComment = false;

  const finalizeBlock = (lineNumber: number): void => {
    currentBlock!.endLine = lineNumber;
    currentBlock!.rawContent = currentBlock!.content.join("\n");
    blocks.push(currentBlock!);
    // Pop back to the enclosing block, if any (deep mode).
    const frame = stack.pop();
    if (frame) {
      currentBlock = frame.block;
      currentBlockStartLevel = frame.startLevel;
    } else {
      currentBlock = null;
      currentBlockStartLevel = 0;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const { code: stripped, inBlockComment: newState } = stripLineComments(
      rawLine,
      inBlockComment,
    );
    inBlockComment = newState;

    const line = stripped.trim();
    const lineNumber = i + 1;

    // Skip empty lines and comments (already stripped above)
    if (!line) {
      continue;
    }

    // Handle module declarations (B42: "module Base" + "{" on next line;
    // B41: "module Base {" on one line). Guarded by the keyword regex so a
    // property line like "module = Foo," outside any module is NOT swallowed.
    const moduleMatch = line.match(/^module\s+(\w+)(?:\s*\{)?\s*(?:\/\/.*)?$/);
    if (moduleMatch && !inModule) {
      currentModule = moduleMatch[1];
      inModule = true;
      braceLevel = 0;
      pastModuleHeader = !line.includes("{");
      // If the opening brace is on its own line, skip to it next iteration.
      if (!line.includes("{")) {
        continue;
      }
    }

    // Count braces to track module/block scope
    const { open: openBraces, close: closeBraces } = countBraces(line);
    braceLevel += openBraces - closeBraces;

    // Inside a module whose opening brace has been counted, block headers are
    // recognized. Latched so subsequent blocks keep working.
    if (inModule && braceLevel >= 1) {
      pastModuleHeader = true;
    }

    // Block detection. Lines that look like inner ingredient/property lines
    // (contain [, = or ,) are never headers.
    const blockMatch = line.match(blockRe);
    const isInnerLine = /[[=,]/.test(line);
    // The optional name group is `undefined` when the keyword line has none.
    const candidateName = blockMatch ? (blockMatch[2] ?? "").trim() : "";
    // The entry-like guard is a deep-mode concern (ingredient lines inside
    // sections could otherwise become headers while a block is open); in the
    // flat base path the `!currentBlock` gate already prevents that, so the
    // parser's behavior stays byte-identical.
    const entryLike =
      options.nested === true &&
      blockMatch !== null &&
      isEntryLikeName(candidateName);

    const canStartHeader =
      blockMatch !== null &&
      !isInnerLine &&
      !entryLike &&
      (!inModule || pastModuleHeader);

    if (canStartHeader && currentBlock === null) {
      const rawType = blockMatch![1];
      const blk: ScanBlock = {
        type:
          rawType === "craftRecipe" || rawType === "craftrecipe"
            ? "recipe"
            : rawType,
        rawType,
        name: candidateName,
        module: currentModule,
        startLine: lineNumber,
        endLine: lineNumber,
        content: [rawLine.trim()],
        rawContent: rawLine.trim(),
      };
      if (inModule) blk.parent = "module";
      currentBlock = blk;
      currentBlockStartLevel = braceLevel;

      // Same-line empty blocks ("item Foo {}") close immediately — without
      // this they would swallow every subsequent block.
      if (closeBraces > 0) {
        finalizeBlock(lineNumber);
      }
      continue;
    }

    if (canStartHeader && options.nested === true && currentBlock !== null) {
      // Nested block: push the current frame and start a child of it.
      stack.push({ block: currentBlock, startLevel: currentBlockStartLevel });
      const rawType = blockMatch![1];
      const blk: ScanBlock = {
        type:
          rawType === "craftRecipe" || rawType === "craftrecipe"
            ? "recipe"
            : rawType,
        rawType,
        name: candidateName,
        module: currentModule,
        startLine: lineNumber,
        endLine: lineNumber,
        content: [rawLine.trim()],
        rawContent: rawLine.trim(),
        parent: currentBlock.rawType,
      };
      currentBlock = blk;
      currentBlockStartLevel = braceLevel;

      if (closeBraces > 0) {
        finalizeBlock(lineNumber);
      }
      continue;
    }

    // Collect block content
    if (currentBlock) {
      currentBlock.content.push(rawLine.trim());

      // A block closes when brace depth returns to the level it started at
      // (after the header line's own braces were counted above).
      if (braceLevel <= currentBlockStartLevel && line.includes("}")) {
        finalizeBlock(lineNumber);
      }
    }

    // Module exit: the module's own '}' drops depth to 0. (The module's
    // opening brace was counted, so its close lands exactly at 0.)
    if (inModule && braceLevel === 0 && line.includes("}") && !currentBlock) {
      inModule = false;
      pastModuleHeader = false;
      currentModule = defaultModule;
    }
  }

  return blocks;
}
