#!/usr/bin/env node
/**
 * port_zed_scripts_data.mjs — mechanically vendor the machine-readable
 * Project Zomboid scripts knowledge used by the ZedScripts VS Code extension
 * (https://github.com/PZ-Wiki-Modding/ZedScripts) into this server.
 *
 * The knowledge is NOT hand-copied or hand-transcribed: the extension bundles
 * the pz-scripts-data dataset (https://github.com/pz-wiki-modding/pz-scripts-data),
 * which is the single source of truth for script block types, their
 * parameters, types, allowed/default values, deprecations and dependent
 * parameters. This script copies that dataset verbatim into
 * `src/validation/zedData/` and records exact provenance (repo, commit, date)
 * in `SOURCE.json` so every rule the ValidationEngine runs is traceable back
 * to its upstream revision.
 *
 * Usage:
 *   node scripts/port_zed_scripts_data.mjs [path-to-pz-scripts-data-checkout]
 *
 * The checkout defaults to `../pz-scripts-data` (sibling of this repo). After
 * running it, commit `src/validation/zedData/` together with the rule engine.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";
import { execFileSync } from "child_process";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const TARGET_DIR = join(ROOT, "src", "validation", "zedData");

// The upstream dataset the extension bundles. Defaults to a sibling checkout;
// pass a different path explicitly if you keep it elsewhere.
const DATA_DIR = resolve(
  process.argv[2] || join(ROOT, "..", "pz-scripts-data"),
);
const FILES = ["scriptsBlocks.json", "roots.json", "itemParameters.json"];

function git(cmd) {
  try {
    return execFileSync("git", ["-C", DATA_DIR, ...cmd], {
      encoding: "utf-8",
    }).trim();
  } catch {
    return "unknown";
  }
}

if (!existsSync(DATA_DIR)) {
  console.error(
    `pz-scripts-data checkout not found at ${DATA_DIR}\n` +
      `Clone it first:  git clone https://github.com/pz-wiki-modding/pz-scripts-data.git ${DATA_DIR}\n` +
      `or pass the path as the first argument.`,
  );
  process.exit(1);
}

mkdirSync(TARGET_DIR, { recursive: true });

for (const file of FILES) {
  const src = join(DATA_DIR, "out", file);
  if (!existsSync(src)) {
    console.error(`Missing expected dataset file: ${src}`);
    process.exit(1);
  }
  const raw = readFileSync(src, "utf-8");
  writeFileSync(join(TARGET_DIR, file), raw);
  console.log(`  ${file}: ${(raw.length / 1024).toFixed(1)} KiB`);
}

// Provenance — version-awareness and source metadata for every diagnostic the
// rule engine produces from this data.
const provenance = {
  source: "https://github.com/pz-wiki-modding/pz-scripts-data",
  dataset: "out/scriptsBlocks.json + out/roots.json + out/itemParameters.json",
  vendoredBy: "scripts/port_zed_scripts_data.mjs",
  vendoredAt: new Date().toISOString(),
  commit: git(["rev-parse", "HEAD"]),
  commitShort: git(["rev-parse", "--short", "HEAD"]),
  note:
    "Machine-readable Project Zomboid scripts knowledge bundled by the ZedScripts " +
    "extension (https://github.com/PZ-Wiki-Modding/ZedScripts). Build 42 focused. " +
    "This server treats it as a validation/diagnostic knowledge source; where it " +
    "conflicts with this server's own Build 42.20-verified checks (e.g. required " +
    "ItemType), the verified checks win and the data only adds diagnostics that " +
    "do not contradict them.",
};
writeFileSync(
  join(TARGET_DIR, "SOURCE.json"),
  JSON.stringify(provenance, null, 2) + "\n",
);
console.log(
  `  SOURCE.json: ${provenance.commitShort} @ ${provenance.vendoredAt}`,
);
console.log(`Vendored ${FILES.length} dataset files into ${TARGET_DIR}`);
