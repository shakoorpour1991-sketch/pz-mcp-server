/**
 * Shared FTS5 term sanitization (freebuff L3).
 *
 * Both DatabaseManager (vanilla search) and KnowledgeBaseManager (KB search)
 * build FTS MATCH queries from user input. FTS5 MATCH strings are their own
 * query language — raw input containing operators, quotes, or special
 * characters can cause syntax errors, operator injection, or expensive scans.
 * This strips FTS5 special characters and operator keywords and returns the
 * clean search terms; each caller decides how to assemble them into a query.
 */

const FTS_SPECIAL_RE = /["*:^+\-(){}[\]!~;]/g;
const FTS_OPERATOR_RE = /^(AND|OR|NOT|NEAR)$/i;

export function sanitizeFtsTerms(query: string): string[] {
  return query
    .replace(FTS_SPECIAL_RE, ' ')
    .split(/\s+/)
    .filter((term) => term.length > 0 && !FTS_OPERATOR_RE.test(term));
}
