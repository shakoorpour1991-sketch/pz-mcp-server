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

/** Container types whose inner lines must never leak as fake items. */
const BLOCK_RE =
  /^(item|recipe|craftRecipe|craftrecipe|evolvedrecipe|fixing|sound|vehicle|entity|mod|model|event|timedAction|fluid|physics|mannequin|clock|energy|animation|bodylocation|creature)\s+([^{]+)/;

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

export function scanScriptBlocks(
  content: string,
  defaultModule = "Base",
): ScanBlock[] {
  const lines = content.split("\n");
  const blocks: ScanBlock[] = [];

  let currentModule = defaultModule;
  let currentBlock: ScanBlock | null = null;
  let currentBlockStartLevel = 0;
  let braceLevel = 0;
  let inModule = false;
  let pastModuleHeader = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    const lineNumber = i + 1;

    // Skip empty lines and comments
    if (
      !line ||
      line.startsWith("//") ||
      line.startsWith("/*") ||
      line.startsWith("*")
    ) {
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
    const openBraces = (line.match(/\{/g) || []).length;
    const closeBraces = (line.match(/\}/g) || []).length;
    braceLevel += openBraces - closeBraces;

    // Inside a module whose opening brace has been counted, block headers are
    // recognized. Latched so subsequent blocks keep working.
    if (inModule && braceLevel >= 1) {
      pastModuleHeader = true;
    }

    // Block detection. Lines that look like inner ingredient/property lines
    // (contain [, = or ,) are never headers.
    const blockMatch = line.match(BLOCK_RE);
    const isInnerLine = /[[=,]/.test(line);
    if (
      blockMatch &&
      !currentBlock &&
      !isInnerLine &&
      (!inModule || pastModuleHeader)
    ) {
      const rawType = blockMatch[1];
      currentBlock = {
        type:
          rawType === "craftRecipe" || rawType === "craftrecipe"
            ? "recipe"
            : rawType,
        rawType,
        name: blockMatch[2].trim(),
        module: currentModule,
        startLine: lineNumber,
        endLine: lineNumber,
        content: [line],
        rawContent: line,
      };
      currentBlockStartLevel = braceLevel;

      // Same-line empty blocks ("item Foo {}") close immediately — without
      // this they would swallow every subsequent block.
      if (closeBraces > 0) {
        currentBlock.endLine = lineNumber;
        currentBlock.rawContent = currentBlock.content.join("\n");
        blocks.push(currentBlock);
        currentBlock = null;
        currentBlockStartLevel = 0;
      }
      continue;
    }

    // Collect block content
    if (currentBlock) {
      currentBlock.content.push(line);

      // A block closes when brace depth returns to the level it started at
      // (after the header line's own braces were counted above).
      if (braceLevel <= currentBlockStartLevel && line.includes("}")) {
        currentBlock.endLine = lineNumber;
        currentBlock.rawContent = currentBlock.content.join("\n");
        blocks.push(currentBlock);
        currentBlock = null;
        currentBlockStartLevel = 0;
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
