/**
 * Fuzzy / typo-tolerant matching helpers (search_vanilla resolution layer).
 *
 * AI agents frequently produce near-miss spellings of vanilla ids
 * ("Hamer" → "Hammer", "Base.Hamer", "base:hamer"). These helpers power the
 * resolver that normalizes such input to the canonical stored identifier and
 * reports a confidence so callers can decide how hard to trust the match.
 *
 * Deliberately dependency-free (the repo's house rule): a compact
 * Levenshtein implementation with a similarity-based distance bound, so a
 * one/two-character typo resolves but unrelated words never match.
 */

/** Classic Levenshtein edit distance (two rolling rows, O(n*m) time). */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  // Keep the shorter string as the row dimension to bound memory.
  if (a.length > b.length) [a, b] = [b, a];

  let prev = new Array<number>(a.length + 1);
  let curr = new Array<number>(a.length + 1);
  for (let i = 0; i <= a.length; i++) prev[i] = i;

  for (let j = 1; j <= b.length; j++) {
    curr[0] = j;
    for (let i = 1; i <= a.length; i++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[i] = Math.min(
        prev[i] + 1, // deletion
        curr[i - 1] + 1, // insertion
        prev[i - 1] + cost, // substitution
      );
    }
    [prev, curr] = [curr, prev];
  }
  return prev[a.length];
}

/**
 * Normalize an identifier to its comparison key: lowercase, and strip the
 * module prefix / tag punctuation so "Base.Hamer", "Hamer", "base:hamer" and
 * "HAMMER" all collapse onto the same family before distance comparison.
 */
export function normalizeKey(raw: string): string {
  return raw
    .trim()
    .toLowerCase()
    .replace(/^base[:.]/, "")
    .replace(/^[\w-]+[:.]/, ""); // strip any module qualifier (Mod.X → x)
}

/** Similarity in [0,1]: 1 = identical, 0 = share no characters. */
export function similarity(a: string, b: string): number {
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 1;
  return 1 - dist / maxLen;
}

export interface FuzzyMatch {
  /** The canonical id that matched (stored form, e.g. "Base.Hammer"). */
  id: string;
  /** Human-readable match reason: exact | case-insensitive | prefix | fuzzy */
  method: "exact" | "case-insensitive" | "prefix" | "fuzzy";
  /** Confidence in [0,1]. Exact = 1; a one-char typo stays high (>0.8). */
  confidence: number;
}

const EXACT_CONFIDENCE = 1.0;
const CASE_CONFIDENCE = 0.98;
const PREFIX_CONFIDENCE = 0.9;

/**
 * Resolve a raw user string to the closest stored identifier among
 * `candidates` (e.g. the ids + names in the item index).
 *
 * Resolution ladder — cheapest, most precise first:
 *   1. exact id match
 *   2. case-insensitive id match
 *   3. prefix match on a normalized key (min 3 chars — avoids "S" → Sword)
 *   4. fuzzy: best similarity across the whole candidate set, only accepted
 *      when it clears the per-candidate typo budget.
 *
 * Returns the best match plus the method and confidence, or null when
 * nothing clears the bars.
 */
export function bestFuzzyMatch(
  raw: string,
  candidates: Iterable<string>,
): FuzzyMatch | null {
  const input = raw.trim();
  if (!input) return null;

  // 1. Exact — the canonical stored id may carry a module prefix.
  for (const id of candidates) {
    if (id === input) return { id, method: "exact", confidence: EXACT_CONFIDENCE };
  }

  // 2. Case-insensitive exact on the id itself.
  const lowerInput = input.toLowerCase();
  for (const id of candidates) {
    if (id.toLowerCase() === lowerInput) {
      return {
        id,
        method: "case-insensitive",
        confidence: CASE_CONFIDENCE,
      };
    }
  }

  const normInput = normalizeKey(input);
  if (!normInput) return null;

  // 3. Prefix: normalized input is a prefix of a candidate's normalized key
  // (min 3 chars so "s" doesn't resolve to every "sword").
  if (normInput.length >= 3) {
    for (const id of candidates) {
      if (normalizeKey(id).startsWith(normInput)) {
        return { id, method: "prefix", confidence: PREFIX_CONFIDENCE };
      }
    }
  }

  // 4. Fuzzy: best similarity that clears the typo budget. The budget scales
  // with name length — short ids (4 chars) allow 1 edit, long ones allow a
  // few — so "Hamer"→"Hammer" (6/7 chars, 1 edit) resolves while "Axe"→"Egg"
  // (2 edits on 3 chars) never does.
  let best: FuzzyMatch | null = null;
  let bestScore = 0;
  for (const id of candidates) {
    const normKey = normalizeKey(id);
    if (!normKey) continue;
    const dist = levenshtein(normInput, normKey);
    const budget = Math.max(1, Math.floor(normKey.length / 4));
    if (dist > budget) continue;
    const sim = 1 - dist / Math.max(normKey.length, normInput.length);
    if (sim > bestScore) {
      bestScore = sim;
      best = { id, method: "fuzzy", confidence: sim };
    }
  }
  return best;
}
