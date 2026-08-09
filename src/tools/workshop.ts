/**
 * Workshop tools: browse/resolve Steam Workshop metadata, download via
 * SteamCMD (with dry-run + size-limit guards), and full mod analysis.
 */
import type { z } from "zod";
import { mkdtempSync, rmSync, existsSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import {
  WorkshopSearchSchema,
  WorkshopGetDetailsSchema,
  WorkshopDownloadSchema,
  WorkshopAnalyzeSchema,
} from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatWorkshopDetails,
  formatWorkshopDownload,
  formatWorkshopModReport,
  formatWorkshopSearchResults,
  type WorkshopModReport,
} from "../utils/formatters.js";
import {
  parseWorkshopInput,
  PZ_APPID,
} from "../workshop/SteamWorkshopClient.js";
import { DatabaseManager } from "../database/DatabaseManager.js";
import { ProjectZomboidParser } from "../parsers/ProjectZomboidParser.js";
import { ModAnalyzer } from "../analyzers/ModAnalyzer.js";
import { maxDownloadBytes } from "../utils/config.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import logger from "../utils/logger.js";

/** Refuse downloads larger than the configured cap before touching disk. */
function enforceDownloadSizeLimit(fileSize: number): void {
  const max = maxDownloadBytes();
  if (fileSize > 0 && fileSize > max) {
    throw new McpError(
      ErrorCode.InvalidParams,
      `Item is ${formatBytes(fileSize)}, which exceeds the configured download limit of ${formatBytes(max)}. Raise PZ_MCP_MAX_DOWNLOAD_BYTES to allow it.`,
    );
  }
}

function formatBytes(n: number): string {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let i = 0;
  let v = n;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}

export const workshopTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "workshop_search",
    description:
      "Browse the Project Zomboid Steam Workshop (AppID 108600) by text. Best-effort: uses the public community browse page (keyless). Paste a workshop URL/id with workshop_get_details for guaranteed resolution",
    inputSchema: WorkshopSearchSchema,
    handler: async (args, ctx) => {
      const { query, limit } = args;
      const items = await ctx.workshopClient.search(query, limit);
      return {
        content: [
          {
            type: "text",
            text: formatWorkshopSearchResults(query, items),
          },
        ],
        structuredContent: { query, count: items.length, items },
      };
    },
  },
  {
    name: "workshop_get_details",
    description:
      "Resolve full metadata for a Project Zomboid workshop item from its id or steamcommunity URL (Steam Web API, keyless, 24h cache)",
    inputSchema: WorkshopGetDetailsSchema,
    handler: async (args, ctx) => {
      const { id, forceRefresh } = args;
      const details = await ctx.workshopClient.getDetails(id, {
        forceRefresh,
      });
      const isPz = details.appId === PZ_APPID;
      return {
        content: [
          {
            type: "text",
            text: formatWorkshopDetails(details, isPz),
          },
        ],
        structuredContent: {
          id: details.id,
          isProjectZomboid: isPz,
          details: structuredClone(details),
        },
      };
    },
  },
  {
    name: "workshop_download",
    description:
      "Download a Project Zomboid workshop item via SteamCMD into the workshop workspace dir (PZ_WORKSHOP_DIR or <Steam>/steamapps/workshop/content/108600). Verifies the item belongs to Project Zomboid first. Requires steamcmd (STEAMCMD_PATH or common locations)",
    inputSchema: WorkshopDownloadSchema,
    handler: async (args, ctx) => {
      const { id, dryRun } = args;
      const resolvedId = parseWorkshopInput(id);
      // Guard against concurrent downloads of the same item (e.g. double
      // clicks / parallel clients) — steamcmd runs would race on disk.
      if (ctx.activeWorkshopDownloads.has(resolvedId)) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Item ${resolvedId} is already downloading — wait for it to finish or pause it first.`,
        );
      }
      // Confirm the item is a Project Zomboid workshop item before touching disk.
      const details = await ctx.workshopClient.getDetails(resolvedId);
      const isPz = details.appId === PZ_APPID;
      if (!isPz) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Item ${resolvedId} belongs to app ${details.appId || "unknown"}, not Project Zomboid (${PZ_APPID}). Refusing to download.`,
        );
      }
      enforceDownloadSizeLimit(details.fileSize);

      // Dry-run: resolve the destination and report the plan without running
      // SteamCMD or writing anything (audit: explicit dry-run for downloads).
      if (dryRun) {
        let targetDir = "";
        let targetError: string | undefined;
        try {
          targetDir = await ctx.steamCmdDownloader.resolveWorkshopDir();
        } catch (err) {
          targetError = err instanceof Error ? err.message : String(err);
        }
        const alreadyPresent =
          targetDir !== "" && existsSync(join(targetDir, resolvedId));
        const sizeNote =
          details.fileSize > 0
            ? `Size: ${formatBytes(details.fileSize)}`
            : "Size: unknown";
        const targetNote = targetDir
          ? alreadyPresent
            ? `Target: ${join(targetDir, resolvedId)} (already present — download would be skipped)`
            : `Target: ${join(targetDir, resolvedId)}`
          : `Target: unresolved (${targetError || "unknown error"})`;
        return {
          content: [
            {
              type: "text",
              text: `🟡 Dry run — SteamCMD was NOT invoked and no files were written.\n\nWorkshop item: ${resolvedId}\nTitle: ${details.title}\nApp: ${details.appId} (Project Zomboid ✓)\n${sizeNote}\n${targetNote}\n\nCall again with dryRun=false to perform the download.`,
            },
          ],
          structuredContent: {
            dryRun: true,
            id: resolvedId,
            title: details.title,
            appId: details.appId,
            fileSize: details.fileSize,
            targetDir,
            alreadyPresent,
            targetError,
          },
        };
      }

      ctx.activeWorkshopDownloads.add(resolvedId);
      try {
        let lastPct = -1;
        const result = await ctx.steamCmdDownloader.download(
          resolvedId,
          (phase) =>
            logger.info(
              { workshopId: resolvedId },
              "workshop_download: %s",
              phase,
            ),
          {
            expectedBytes: details.fileSize,
            // Streamed to the Control Deck as `workshop_download: progress …`
            // log lines (bridge forwards them over SSE). Deduped by whole-%
            // point so a long download can't flood the log.
            onProgress: (info) => {
              const pct =
                info.expectedBytes > 0 ? Math.min(99, Math.round(info.pct)) : 0;
              if (pct === lastPct) return;
              lastPct = pct;
              logger.info(
                { workshopId: resolvedId },
                "workshop_download: progress %d%% (%d/%d bytes)",
                pct,
                info.bytes,
                info.expectedBytes,
              );
            },
          },
        );
        return {
          content: [
            {
              type: "text",
              text: formatWorkshopDownload(result),
            },
          ],
          structuredContent: structuredClone(result),
        };
      } finally {
        ctx.activeWorkshopDownloads.delete(resolvedId);
      }
    },
  },
  {
    name: "workshop_analyze",
    description:
      "Fetch & Analyze a Project Zomboid workshop item: download via SteamCMD, parse its scripts into the DB, run analyze_mod + reference checks, and return a full Mod Report (what it adds, quality score, issues, recommendations)",
    inputSchema: WorkshopAnalyzeSchema,
    handler: async (args, ctx) => {
      const { id } = args;
      const resolvedId = parseWorkshopInput(id);
      const analyzeT0 = Date.now();
      // Confirm the item is a Project Zomboid workshop item before touching disk.
      const details = await ctx.workshopClient.getDetails(resolvedId);
      const isPz = details.appId === PZ_APPID;
      if (!isPz) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Item ${resolvedId} belongs to app ${details.appId || "unknown"}, not Project Zomboid (${PZ_APPID}). Refusing to analyze.`,
        );
      }
      enforceDownloadSizeLimit(details.fileSize);
      const onPhase = (phase: string) =>
        logger.info({ workshopId: resolvedId }, "workshop_analyze: %s", phase);

      const dl = await ctx.steamCmdDownloader.download(resolvedId, onPhase, {
        expectedBytes: details.fileSize,
      });
      onPhase("parsing mod scripts");
      // Audit M5: analyze workshop mods in a throwaway DB so third-party rows
      // never pollute the vanilla game DB.
      const tmpDbDir = mkdtempSync(join(tmpdir(), "pz-workshop-"));
      const wsDb = new DatabaseManager(join(tmpDbDir, "workshop.db"));
      await wsDb.initialize();
      let report: WorkshopModReport | null = null;
      try {
        const wsParser = new ProjectZomboidParser(wsDb);
        const wsAnalyzer = new ModAnalyzer(wsDb, wsParser);
        const parseResults = await wsParser.parseModDirectory(
          dl.downloadedPath,
        );
        onPhase("running analysis suite");
        const analysis = await wsAnalyzer.analyzeMod(dl.downloadedPath, {
          checkBalance: true,
          checkCompatibility: true,
        });
        report = {
          modId: resolvedId,
          title: details.title,
          url: details.url,
          fileSize: details.fileSize,
          subscribers: details.subscribers,
          downloadedPath: dl.downloadedPath,
          downloadBytes: dl.bytes,
          elapsedMs: Date.now() - analyzeT0,
          parse: parseResults,
          analysis,
        };
      } finally {
        wsDb.close();
        rmSync(tmpDbDir, { recursive: true, force: true });
      }
      if (!report) {
        throw new Error("workshop_analyze produced no report");
      }

      return {
        content: [
          {
            type: "text",
            text: formatWorkshopModReport(report),
          },
        ],
        structuredContent: structuredClone(report),
      };
    },
  },
];
