#!/usr/bin/env node
/**
 * copy-zed-data.mjs — copies the vendored ZedScripts knowledge JSON from
 * src/validation/zedData/ into dist/validation/zedData/ so the compiled
 * server can load it at runtime (tsc does not copy non-TS files).
 *
 * Part of the `npm run build` pipeline: `tsc && node scripts/copy-zed-data.mjs`.
 * The loader in src/validation/zedScriptsKnowledge.ts resolves the JSON
 * relative to its own module location, so the same code path works from
 * `src/` (tsx dev) and `dist/` (compiled).
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
} from "fs";
import { join, dirname, resolve } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const SRC = join(ROOT, "src", "validation", "zedData");
const DST = join(ROOT, "dist", "validation", "zedData");

if (!existsSync(SRC)) {
  console.warn(
    "copy-zed-data: src/validation/zedData missing — nothing to copy.",
  );
  process.exit(0);
}

mkdirSync(DST, { recursive: true });
for (const file of readdirSync(SRC)) {
  if (!file.endsWith(".json")) continue;
  writeFileSync(join(DST, file), readFileSync(join(SRC, file)));
}
console.log(
  "copy-zed-data: vendored knowledge JSON copied to dist/validation/zedData",
);
