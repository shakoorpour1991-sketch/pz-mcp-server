/**
 * Shared helpers for PZ script property syntax.
 *
 * The game-file parser, the validation engine and the script generator all
 * need to agree on how "key = value" / "key:value" lines are split and how
 * values are typed/formatted. Keeping these helpers in one place prevents
 * the three from drifting apart (audit F10).
 */

/** Separator styles used by PZ script blocks. */
type PropertySeparator = "=" | ":" | "[:=]";

const PROPERTY_LINE_RE: Record<PropertySeparator, RegExp> = {
  // Value may be a comma-separated list ("Base.Potato, Base.Cabbage,"), so
  // allow repeated comma-free runs inside the capture group (audit M3: the old
  // [^,]+ never matched multi-ingredient evolved recipe lines).
  "=": /^\s*(\w+)\s*=\s*([^,]+(?:,[^,]+)*),?\s*$/,
  ":": /^\s*(\w+)\s*:\s*([^,]+(?:,[^,]+)*),?\s*$/,
  "[:=]": /^\s*(\w+)\s*[:=]\s*([^,]+(?:,[^,]+)*),?\s*$/,
};

/**
 * Match a property line like "Key = Value," or "Key:Value,".
 * Returns the key and the trimmed raw value, or null when the line is not a
 * property line (ingredient lines, braces, section headers, ...).
 */
export function matchPropertyLine(
  line: string,
  separator: PropertySeparator,
): { key: string; value: string } | null {
  const match = line.match(PROPERTY_LINE_RE[separator]);
  if (!match) {
    return null;
  }
  return { key: match[1], value: match[2].trim() };
}

/**
 * Parse a raw script property value into a typed JavaScript value:
 * unquotes strings, splits semicolon-delimited lists, converts integers,
 * floats and booleans (TRUE/FALSE, case-insensitive).
 */
export function parseScriptValue(value: string): any {
  // Remove quotes
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    const unquoted = value.slice(1, -1);
    if (unquoted.includes(";")) {
      return unquoted
        .split(";")
        .map((s) => s.trim())
        .filter((s) => s.length > 0);
    }
    return unquoted;
  }
  // Split semicolon-delimited lists before numeric/boolean parsing
  if (value.includes(";")) {
    return value
      .split(";")
      .map((s) => s.trim())
      .filter((s) => s.length > 0);
  }
  // Parse numbers (optional leading minus — negative stats like
  // HungerChange = -10 must parse as numbers, not strings)
  if (/^-?\d+$/.test(value)) {
    // Precision guard: integers with >15 digits can lose precision via
    // parseInt; PZ uses small numbers, so return the original string instead
    if (value.replace(/^-/, "").length > 15) {
      return value;
    }
    return parseInt(value, 10);
  }
  if (/^-?\d*\.\d+$/.test(value)) {
    return parseFloat(value);
  }
  // Parse booleans
  if (value.toLowerCase() === "true") return true;
  if (value.toLowerCase() === "false") return false;
  // Return as string
  return value;
}

/**
 * Format a JavaScript value for emission into a PZ script: booleans become
 * TRUE/FALSE, arrays become semicolon-delimited lists.
 */
export function formatScriptValue(value: any): string {
  if (typeof value === "string") {
    return value;
  } else if (typeof value === "boolean") {
    return value ? "TRUE" : "FALSE";
  } else if (typeof value === "number") {
    return value.toString();
  } else if (Array.isArray(value)) {
    return value.join(";");
  }
  return String(value);
}
