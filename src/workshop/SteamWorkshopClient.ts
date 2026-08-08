/**
 * Steam Workshop metadata client for Project Zomboid (AppID 108600).
 *
 * Two data sources, both keyless:
 *
 *  - `getDetails()`  → Steam Web API `ISteamRemoteStorage/GetPublishedFileDetails`
 *                      (POST, batchable ≤100 ids). Resolves KNOWN ids only.
 *  - `search()`      → best-effort HTML scrape of
 *                      steamcommunity.com/workshop/browse/?appid=108600
 *                      (graceful degradation — see docs/workshop-browser-feature.md §5).
 *
 * Results are cached in data/workshop_metadata.json with a 24h TTL per item.
 * `fetch` is the Node 22 global; the implementation is injectable for tests.
 * This module only READS public metadata — it never downloads or executes mod
 * content (security stance: workshop mods are untrusted).
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from "fs";
import { join, dirname } from "path";
import { dataDir } from "../utils/config.js";
import logger from "../utils/logger.js";

/** Project Zomboid Steam AppID. */
export const PZ_APPID = "108600";

const API_URL =
  "https://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v1/";
const BROWSE_URL = "https://steamcommunity.com/workshop/browse/";
const DEFAULT_CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24h
const DEFAULT_TIMEOUT_MS = 15000;
const ITEM_ID_RE = /^\d{6,15}$/;

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

interface CacheEntry {
  data: WorkshopItemDetails;
  cachedAt: number;
}

interface CacheShape {
  entries: Record<string, CacheEntry>;
}

/**
 * Resolve a workshop input — a bare publishedfileid or a steamcommunity URL —
 * into a numeric id. Throws a user-actionable error when unparseable.
 */
export function parseWorkshopInput(input: string): string {
  const raw = String(input ?? "").trim();
  if (ITEM_ID_RE.test(raw)) return raw;
  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new Error(
      `Could not parse workshop id from "${raw}". Paste a workshop URL (https://steamcommunity.com/sharedfiles/filedetails/?id=…) or a numeric item id.`,
    );
  }
  const host = url.hostname;
  if (host !== 'steamcommunity.com' && host !== 'www.steamcommunity.com') {
    throw new Error(
      `Could not parse workshop id from "${raw}". Paste a workshop URL (https://steamcommunity.com/sharedfiles/filedetails/?id=…) or a numeric item id.`,
    );
  }
  if (!url.pathname.startsWith('/sharedfiles/filedetails/')) {
    throw new Error(
      `Could not parse workshop id from "${raw}". Paste a workshop URL (https://steamcommunity.com/sharedfiles/filedetails/?id=…) or a numeric item id.`,
    );
  }
  const id = url.searchParams.get('id');
  if (!id || !ITEM_ID_RE.test(id)) {
    throw new Error(
      `Could not parse workshop id from "${raw}". Paste a workshop URL (https://steamcommunity.com/sharedfiles/filedetails/?id=…) or a numeric item id.`,
    );
  }
  return id;
}

export class SteamWorkshopClient {
  private cacheFile: string;
  private fetchImpl: typeof fetch;
  private timeoutMs: number;
  private now: () => number;
  private cache: CacheShape;

  constructor(opts: SteamWorkshopClientOptions = {}) {
    this.cacheFile = opts.cacheFile ?? join(dataDir(), "workshop_metadata.json");
    this.fetchImpl = opts.fetchImpl ?? fetch;
    this.timeoutMs = opts.timeoutMs ?? DEFAULT_TIMEOUT_MS;
    this.now = opts.now ?? Date.now;
    this.cache = this.loadCache();
  }

  /* ---------------- public API ---------------- */

  /**
   * Resolve full metadata for a workshop id/URL, using the 24h cache.
   */
  async getDetails(
    input: string,
    opts: { forceRefresh?: boolean } = {},
  ): Promise<WorkshopItemDetails> {
    const id = parseWorkshopInput(input);
    if (!opts.forceRefresh) {
      const hit = this.cache.entries[id];
      if (hit && this.now() - hit.cachedAt < DEFAULT_CACHE_TTL_MS) {
        logger.debug({ id }, "workshop cache hit");
        return hit.data;
      }
    }
    const details = await this.fetchDetails([id]);
    const item = details[0];
    if (!item) {
      throw new Error(`Steam returned no data for workshop id ${id}.`);
    }
    this.cache.entries[id] = { data: item, cachedAt: this.now() };
    this.saveCache();
    return item;
  }

  /**
   * Best-effort workshop search via the public community browse page.
   * Degrades gracefully: throws a descriptive error if Steam HTML cannot be
   * parsed (down / blocked / age-gate), never returns partial garbage.
   */
  async search(query: string, limit: number): Promise<WorkshopItemSummary[]> {
    const q = query.trim();
    if (!q) return [];
    const params = new URLSearchParams({
      appid: PZ_APPID,
      searchtext: q,
      browsesort: "trend",
      section: "readytouseitems",
      actualsort: "trend",
      p: "1",
      days: "-1",
    });
    const res = await this.request(`${BROWSE_URL}?${params.toString()}`, {
      headers: { "User-Agent": "Mozilla/5.0 pz-mcp-server workshop browser" },
    });
    const html = await res.text();
    const items = this.parseBrowseHtml(html, limit);
    if (items.length === 0) {
      const hasFileDetails = /sharedfiles\/filedetails/i.test(html);
      const hasBrowseEvidence = /workshop\/browse/i.test(html) || /appid=/i.test(html);
      if (!hasFileDetails && !hasBrowseEvidence) {
        throw new Error(
          `No items parsed from Steam for "${q}" (page may be down, blocked, or age-gated). ` +
            `If you know the mod, paste its workshop URL or id instead.`,
        );
      }
      return [];
    }
    return items;
  }

  /* ---------------- Steam Web API ---------------- */

  private async fetchDetails(ids: string[]): Promise<WorkshopItemDetails[]> {
    const body = new URLSearchParams();
    body.set("itemcount", String(ids.length));
    ids.forEach((id, i) => body.set(`publishedfileids[${i}]`, id));

    const res = await this.request(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body,
    });
    const json = (await res.json()) as {
      response?: { result?: number; publishedfiledetails?: ApiDetail[] };
    };
    const details = json.response?.publishedfiledetails ?? [];
    return details
      .filter((d) => d && d.result === 1 && d.publishedfileid)
      .map((d) => this.mapApiDetail(d));
  }

  private mapApiDetail(d: ApiDetail): WorkshopItemDetails {
    // The details API returns only the creator's steamid64, not a display
    // name — leave author empty here (the HTML browse scrape does provide one).
    const previewUrl = d.preview_url || "";
    const safePreview = previewUrl.startsWith("https://") ? previewUrl : "";
    const fileUrl = d.file_url || "";
    const safeFileUrl = fileUrl.startsWith("https://") ? fileUrl : "";
    const tags = (d.tags ?? []).map((t) => t.tag);
    const votes = d.vote_data ?? {};
    return {
      id: d.publishedfileid,
      title: d.title || "(untitled)",
      author: "",
      thumbnailUrl: safePreview,
      shortDescription: stripTags(d.description || "").slice(0, 300),
      tags,
      subscribers: num(d.subscriptions),
      updatedAt: d.time_updated ? Number(d.time_updated) : null,
      url: `https://steamcommunity.com/sharedfiles/filedetails/?id=${d.publishedfileid}`,
      appId: String(d.consumer_app_id ?? d.creator_app_id ?? ""),
      fileSize: num(d.file_size),
      fileUrl: safeFileUrl,
      description: d.description || "",
      timeCreated: num(d.time_created),
      timeUpdated: num(d.time_updated),
      votesUp: num(votes.votes_up),
      votesDown: num(votes.votes_down),
      views: num(d.views),
      workspaceAccepted: Boolean(d.workshop_accepted),
    };
  }

  /* ---------------- HTML browse parsing (best-effort) ---------------- */

  /**
   * Parse the new React SSR workshop browse page. Cards are recognized by
   * their stable link patterns (hashed CSS class names change between Steam
   * releases, the hrefs do not):
   *   - title link:  <a href="…/filedetails/?id=N">TITLE</a>
   *   - author link: <a href="…/myworkshopfiles/?appid=…">By NAME</a>
   *   - thumbnail:   the <img> right after the id link's second occurrence
   * Best-effort by design — anything unparseable becomes an empty field.
   */
  private parseBrowseHtml(html: string, limit: number): WorkshopItemSummary[] {
    // Group every filedetails link occurrence by id — a card references its id
    // twice (title link + thumbnail link) and the two may be far apart in the
    // React SSR DOM, so we scan around EACH occurrence for the fields.
    const occurrences = new Map<string, number[]>();
    for (const m of html.matchAll(/sharedfiles\/filedetails\/\?id=(\d+)/g)) {
      const id = m[1];
      const arr = occurrences.get(id) ?? [];
      arr.push(m.index);
      occurrences.set(id, arr);
    }

    const items: WorkshopItemSummary[] = [];
    for (const [id, idxs] of occurrences) {
      if (items.length >= limit) break;
      let title = "";
      let titleIdx = 0;
      let thumbnailUrl = "";
      for (const idx of idxs) {
        // Start 150 chars before the link so the <a …> prefix is inside the
        // window (m.index points AT the href, past the anchor's opening tag).
        const after = html.slice(Math.max(0, idx - 150), idx + 300);
        if (!title) {
          const am = after.match(
            new RegExp(`<a[^>]*filedetails/\\?id=${id}[^>]*>([\\s\\S]*?)</a>`),
          );
          if (am) {
            const text = cleanHtml(am[1]);
            if (text) {
              title = text;
              titleIdx = idx;
            }
          }
        }
        if (!thumbnailUrl) {
          const rawThumb = first(after, /<img[^>]*src="([^"]+)"/);
          if (rawThumb && rawThumb.startsWith("https://")) {
            thumbnailUrl = rawThumb;
          }
        }
      }
      // Fallback: the thumbnail img alt often carries the title.
      if (!title) {
        for (const idx of idxs) {
          const alt = first(
            html.slice(Math.max(0, idx - 150), idx + 300),
            /<img[^>]*alt="([^"]+)"/,
          );
          if (alt) {
            title = decodeEntities(alt);
            titleIdx = idx;
            break;
          }
        }
      }
      // Skip navigation/hero links (e.g. the "Learn More" policy item).
      if (!title || /^learn\s+more$/i.test(title)) continue;

      // Author: the "By NAME" link lives adjacent to the title link.
      const author = cleanHtml(
        first(
          html.slice(Math.max(0, titleIdx - 300), titleIdx + 900),
          /<a[^>]*\/myworkshopfiles\/[^>]*>\s*By\s*([^<]+)</i,
        ),
      );

      items.push({
        id,
        title,
        author: author || "",
        thumbnailUrl,
        shortDescription: "",
        tags: [],
        subscribers: 0,
        updatedAt: null,
        url: `https://steamcommunity.com/sharedfiles/filedetails/?id=${id}`,
      });
    }
    return items;
  }

  /* ---------------- cache ---------------- */

  private loadCache(): CacheShape {
    try {
      if (existsSync(this.cacheFile)) {
        const parsed = JSON.parse(
          readFileSync(this.cacheFile, "utf-8"),
        ) as CacheShape;
        if (parsed && typeof parsed === "object" && parsed.entries) {
          const validEntries: Record<string, CacheEntry> = {};
          const now = this.now();
          const maxAge = 2 * DEFAULT_CACHE_TTL_MS;
          for (const [id, entry] of Object.entries(parsed.entries)) {
            if (
              entry &&
              typeof entry === "object" &&
              entry.data &&
              typeof entry.data === "object" &&
              typeof entry.data.id === "string" &&
              typeof entry.cachedAt === "number" &&
              Number.isFinite(entry.cachedAt)
            ) {
              if (now - entry.cachedAt <= maxAge) {
                validEntries[id] = entry;
              }
            }
          }
          return { entries: validEntries };
        }
      }
    } catch (err) {
      logger.warn(
        "Workshop metadata cache unreadable (ignoring): %s",
        err instanceof Error ? err.message : String(err),
      );
    }
    return { entries: {} };
  }

  private saveCache(): void {
    try {
      mkdirSync(dirname(this.cacheFile), { recursive: true });
      const tmpFile = `${this.cacheFile}.tmp`;
      writeFileSync(tmpFile, JSON.stringify(this.cache, null, 2), { mode: 0o600 });
      renameSync(tmpFile, this.cacheFile);
    } catch (err) {
      logger.warn(
        "Could not write workshop metadata cache: %s",
        err instanceof Error ? err.message : String(err),
      );
    }
  }

  /* ---------------- shared ---------------- */

  private async request(
    url: string,
    init: RequestInit = {},
  ): Promise<Response> {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), this.timeoutMs);
    try {
      const res = await this.fetchImpl(url, { ...init, signal: ctrl.signal, redirect: "error" });
      if (!res.ok) {
        throw new Error(`Steam responded HTTP ${res.status} (${url})`);
      }
      return res;
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") {
        throw new Error(
          `Steam request timed out after ${this.timeoutMs / 1000}s. Is the network up?`,
        );
      }
      throw err;
    } finally {
      clearTimeout(timer);
    }
  }
}

/* ---------------- internal types + helpers ---------------- */

interface ApiDetail {
  publishedfileid: string;
  result?: number;
  title?: string;
  creator?: string;
  creator_app_id?: number;
  consumer_app_id?: number;
  description?: string;
  file_size?: number | string;
  file_url?: string;
  preview_url?: string;
  time_created?: number | string;
  time_updated?: number | string;
  subscriptions?: number | string;
  views?: number | string;
  tags?: Array<{ tag: string }>;
  vote_data?: { votes_up?: number | string; votes_down?: number | string };
  workshop_accepted?: boolean;
}

function num(v: number | string | undefined): number {
  if (v === undefined || v === null || v === "") return 0;
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
}

function first(s: string, re: RegExp): string {
  const m = s.match(re);
  return m ? m[1] : "";
}

function stripTags(s: string): string {
  return s
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanHtml(s: string): string {
  return decodeEntities(stripTags(s));
}

function decodeEntities(s: string): string {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");
}