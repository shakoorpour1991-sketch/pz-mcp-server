export declare class KnowledgeBaseManager {
    private db;
    private dbPath;
    private readonly skipDirs;
    private readonly skipFiles;
    constructor(dataDir?: string, options?: {
        skipDirs?: string[];
        skipFiles?: string[];
    });
    initialize(): Promise<void>;
    indexDirectory(dirPath: string, opts?: {
        overwrite?: boolean;
    }): Promise<{
        topics: number;
        files: number;
        chars: number;
        skipped: number;
        removed: number;
        errors: Array<{
            file: string;
            message: string;
        }>;
    }>;
    search(query: string, opts?: {
        topic?: string;
        limit?: number;
    }): Promise<Array<{
        topic: string;
        title: string;
        snippet: string;
        score: number;
    }>>;
    listTopics(): Promise<Array<{
        topic: string;
        title: string;
        lines: number;
        words: number;
        chars: number;
    }>>;
    getTopic(topic: string): Promise<{
        topic: string;
        title: string;
        content: string;
        lines: number;
        words: number;
        chars: number;
    } | null>;
    close(): void;
    private pathExists;
    private collectMdFiles;
    private sanitizeFtsQuery;
    private buildSnippet;
    /**
     * Parse a leading YAML frontmatter block (`---` ... `---`) into a
     * key/value map and return the remaining body. No-op (meta empty, body
     * unchanged) when the file has no frontmatter or an unterminated opener.
     * Keys are lower-cased; quoted values are stripped. Dependency-free.
     */
    private parseFrontmatter;
}
//# sourceMappingURL=KnowledgeBaseManager.d.ts.map