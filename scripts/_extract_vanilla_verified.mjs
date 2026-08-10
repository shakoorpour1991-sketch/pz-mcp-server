#!/usr/bin/env node
/**
 * _extract_vanilla_verified.mjs — regenerate src/validation/zedData/vanillaVerified.json
 * from a real Project Zomboid install.
 *
 * The vendored pz-scripts-data dataset does not model every block keyword and
 * parameter the game itself ships (verified against the 42.20 script tree).
 * This tool finds those gaps mechanically and unions them into the
 * vanilla-verified extensions file, so the validator accepts real-game
 * knowledge instead of flagging it as unknown.
 *
 * How it works: it runs the *existing* engine over every vanilla script file
 * and collects the diagnostics the engine itself would emit for those gaps
 * (NOT_VALID_BLOCK for unmodeled block keywords, UNKNOWN_PARAMETER for
 * unmodeled parameters). Because the merged knowledge layer already accepts
 * everything currently in the file, re-running the tool after a game update
 * only surfaces *new* gaps — this is the version-aware refresh path.
 *
 * Usage:  node scripts/_extract_vanilla_verified.mjs [gamePath]
 *   gamePath defaults to the 42.20 install used to generate the shipped file.
 *   Run `npm run build` first (the tool consumes the compiled engine).
 *
 * The file is intentionally never shrunk: a parameter the game stops using
 * simply stays accepted (harmless), while newly observed ones are added.
 */
import {
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  writeFileSync,
} from "fs";
import { dirname, join, resolve } from "path";
import { fileURLToPath } from "url";
import { ValidationEngine } from "../dist/validation/ValidationEngine.js";
import { DatabaseManager } from "../dist/database/DatabaseManager.js";
import { getZedBlock } from "../dist/validation/zedScriptsKnowledge.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const gamePath = process.argv[2] || "D:/Games/ProjectZomboid";
const scriptsRoot = join(gamePath, "media", "scripts");
const target = join(
  ROOT,
  "src",
  "validation",
  "zedData",
  "vanillaVerified.json",
);

if (!existsSync(scriptsRoot)) {
  console.error(
    `_extract_vanilla_verified: no script tree at ${scriptsRoot} — pass the game install dir as the first argument.`,
  );
  process.exit(1);
}

// 1. Collect every script file in the tree.
const files = [];
function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith(".txt")) files.push(p);
  }
}
walk(scriptsRoot);

// 2. Run the engine and collect the gap diagnostics.
const db = new DatabaseManager(":memory:");
const engine = new ValidationEngine(db);
const unknownKeywords = new Set();
const unknownPairs = new Map(); // "blockKey::param" -> count
const NOT_VALID_BLOCK_RE = /'([^']+)' is an unknown script block\./;
const UNKNOWN_PARAM_RE =
  /'([^']+)' is an unknown parameter for '([^']+)' block\./;

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  const result = await engine.validateScript(content, undefined, false, {
    filePath: file,
    zedScripts: true,
  });
  for (const diagnostic of result.errors.concat(result.warnings)) {
    if (diagnostic.code === "NOT_VALID_BLOCK") {
      const m = NOT_VALID_BLOCK_RE.exec(diagnostic.message);
      if (m) unknownKeywords.add(m[1]);
    } else if (diagnostic.code === "UNKNOWN_PARAMETER") {
      const m = UNKNOWN_PARAM_RE.exec(diagnostic.message);
      if (m) {
        const key = `${m[2]}::${m[1]}`;
        unknownPairs.set(key, (unknownPairs.get(key) || 0) + 1);
      }
    }
  }
}

// 3. Resolve findings to canonical dataset block keys (the engine's message
//    embeds the script spelling; `component FluidContainer` → the dataset key
//    `component FluidContainer`, an unmodeled `component X` → the generic
//    `component` key the runtime lookup actually uses). Store under the
//    canonical key so every entry in the file is always consulted at runtime.
function canonicalBlockKey(rawType) {
  return getZedBlock(rawType)?.key ?? rawType;
}

// 4. Union with the existing file (never shrink), keeping canonical spelling.
const existing = existsSync(target)
  ? JSON.parse(readFileSync(target, "utf-8"))
  : { blockKeywords: [], extraParameters: {} };

// Nothing new to add and a file already exists → never rewrite it, so a game
// tree whose file count differs cannot churn the committed JSON.
if (
  existing.blockKeywords &&
  unknownKeywords.size === 0 &&
  unknownPairs.size === 0
) {
  console.log(
    `_extract_vanilla_verified: no new gaps — ${target} unchanged (${files.length} files scanned).`,
  );
  process.exit(0);
}

const blockKeywords = [
  ...new Set([...existing.blockKeywords, ...unknownKeywords]),
].sort((a, b) => a.localeCompare(b));

const extraParameters = { ...existing.extraParameters };
for (const [key] of unknownPairs) {
  const [block, param] = key.split("::");
  const canonical = canonicalBlockKey(block);
  extraParameters[canonical] = [
    ...new Set([...(extraParameters[canonical] ?? []), param]),
  ];
}
// Deterministic key order for stable diffs.
const sortedParams = {};
for (const block of Object.keys(extraParameters).sort((a, b) =>
  a.localeCompare(b),
)) {
  sortedParams[block] = [...extraParameters[block]].sort((a, b) =>
    a.localeCompare(b),
  );
}

const next = {
  source: {
    generatedBy: "scripts/_extract_vanilla_verified.mjs",
    gameInstall: gamePath,
    gameVersion: "42.20",
    scannedFiles: files.length,
    note: "Block keywords and parameters observed across the real vanilla script tree that the vendored pz-scripts-data dataset does not model. The game files themselves are the newest verified Build 42 documentation, so these are accepted silently instead of being flagged as unknown — this is the 'verified game data wins' conflict resolution. Re-run scripts/_extract_vanilla_verified.mjs after a game update to refresh this file.",
  },
  blockKeywords,
  extraParameters: sortedParams,
};

// 5. Write only when something changed (keeps committed data stable).
const currentText = existsSync(target) ? readFileSync(target, "utf-8") : "";
const nextText = `${JSON.stringify(next, null, 2)}\n`;
if (nextText === currentText) {
  console.log(
    `_extract_vanilla_verified: no new gaps — ${target} unchanged (${files.length} files scanned).`,
  );
} else {
  mkdirSync(dirname(target), { recursive: true });
  writeFileSync(target, nextText);
  console.log(
    `_extract_vanilla_verified: updated ${target} from ${files.length} vanilla script files.`,
  );
}

console.log(
  `  block keywords: ${blockKeywords.length} (${blockKeywords.join(", ") || "—"})`,
);
console.log(
  `  extra parameters: ${Object.values(sortedParams).reduce((n, p) => n + p.length, 0)} across ${Object.keys(sortedParams).length} blocks`,
);
