/** Project Zomboid Steam AppID. */
export declare const PZ_APPID = "108600";
export interface WorkshopItemSummary {
    id: string;
    title: string;
    author: string;
    thumbnailUrl: string;
    shortDescription: string;
    tags: string[];
    subscribers: number;
    updatedAt: number | null;
    url: string;
}
export interface WorkshopItemDetails extends WorkshopItemSummary {
    appId: string;
    fileSize: number;
    fileUrl: string;
    description: string;
    timeCreated: number;
    timeUpdated: number;
    votesUp: number;
    votesDown: number;
    views: number;
    workspaceAccepted: boolean;
}
export interface SteamWorkshopClientOptions {
    /** Override the cache file location (tests). */
    cacheFile?: string;
    /** Override the fetch implementation (tests). */
    fetchImpl?: typeof fetch;
    /** Network timeout in ms. */
    timeoutMs?: number;
    /** Clock injection (tests). */
    now?: () => number;
}
/**
 * Resolve a workshop input — a bare publishedfileid or a steamcommunity URL —
 * into a numeric id. Throws a user-actionable error when unparseable.
 */
export declare function parseWorkshopInput(input: string): string;
export declare class SteamWorkshopClient {
    private cacheFile;
    private fetchImpl;
    private timeoutMs;
    private now;
    private cache;
    constructor(opts?: SteamWorkshopClientOptions);
    /**
     * Resolve full metadata for a workshop id/URL, using the 24h cache.
     */
    getDetails(input: string, opts?: {
        forceRefresh?: boolean;
    }): Promise<WorkshopItemDetails>;
    /**
     * Best-effort workshop search via the public community browse page.
     * Degrades gracefully: throws a descriptive error if Steam HTML cannot be
     * parsed (down / blocked / age-gate), never returns partial garbage.
     */
    search(query: string, limit: number): Promise<WorkshopItemSummary[]>;
    private fetchDetails;
    private mapApiDetail;
    /**
     * Parse the new React SSR workshop browse page. Cards are recognized by
     * their stable link patterns (hashed CSS class names change between Steam
     * releases, the hrefs do not):
     *   - title link:  <a href="…/filedetails/?id=N">TITLE</a>
     *   - author link: <a href="…/myworkshopfiles/?appid=…">By NAME</a>
     *   - thumbnail:   the <img> right after the id link's second occurrence
     * Best-effort by design — anything unparseable becomes an empty field.
     */
    private parseBrowseHtml;
    private loadCache;
    private saveCache;
    private request;
}
//# sourceMappingURL=SteamWorkshopClient.d.ts.map