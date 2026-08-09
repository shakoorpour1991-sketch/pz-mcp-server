/**
 * Shared helpers for PZ script property syntax.
 *
 * The game-file parser, the validation engine and the script generator all
 * need to agree on how "key = value" / "key:value" lines are split and how
 * values are typed/formatted. Keeping these helpers in one place prevents
 * the three from drifting apart (audit F10).
 */
/** Separator styles used by PZ script blocks. */
export type PropertySeparator = "=" | ":" | "[:=]";
/**
 * Match a property line like "Key = Value," or "Key:Value,".
 * Returns the key and the trimmed raw value, or null when the line is not a
 * property line (ingredient lines, braces, section headers, ...).
 */
export declare function matchPropertyLine(line: string, separator: PropertySeparator): {
    key: string;
    value: string;
} | null;
/**
 * Parse a raw script property value into a typed JavaScript value:
 * unquotes strings, splits semicolon-delimited lists, converts integers,
 * floats and booleans (TRUE/FALSE, case-insensitive).
 */
export declare function parseScriptValue(value: string): any;
/**
 * Format a JavaScript value for emission into a PZ script: booleans become
 * TRUE/FALSE, arrays become semicolon-delimited lists.
 */
export declare function formatScriptValue(value: any): string;
//# sourceMappingURL=scriptSyntax.d.ts.map