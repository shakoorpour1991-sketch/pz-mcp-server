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
export declare function sanitizeFtsTerms(query: string): string[];
//# sourceMappingURL=fts.d.ts.map