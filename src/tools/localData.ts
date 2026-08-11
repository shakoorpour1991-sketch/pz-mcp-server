/**
 * Local data tools: game-file parsing and knowledge-base indexing/search.
 */
import type { z } from "zod";
import {
  ParseGameFilesSchema,
  IndexKnowledgeBaseSchema,
  IndexJavadocsSchema,
  SearchKnowledgeBaseSchema,
  ListKnowledgeTopicsSchema,
  GetKnowledgeSectionSchema,
} from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatJavadocsIndexResults,
  formatKbIndexResults,
  formatKbSearchResults,
  formatKbSection,
  formatKbSections,
  formatKbTopics,
  formatParseResults,
} from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { isAbsolute, relative } from "path";
import {
  javadocsKbDir,
  knowledgeBasePath,
  shippedJavadocsPath,
} from "../utils/config.js";
import {
  JavaDocIndexer,
  type JavadocsIngestResult,
} from "../knowledge/javadocs/JavaDocIndexer.js";
import type { KbDocType } from "../knowledge/kbChunker.js";

export const localDataTools: McpTool<z.ZodTypeAny>[] = [
  {
    name: "parse_game_files",
    description:
      "Parse and index Project Zomboid game files to populate the database",
    inputSchema: ParseGameFilesSchema,
    handler: async (args, ctx) => {
      const { gamePath, forceReparse } = args;
      let detectedPath: string | null;
      if (gamePath) {
        try {
          detectedPath = ctx.pathManager.validateInputPath(gamePath, "dir");
        } catch (err) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Invalid gamePath: ${(err as Error).message}`,
          );
        }
      } else {
        detectedPath = await ctx.pathManager.detectProjectZomboidPath();
      }

      if (!detectedPath) {
        throw new McpError(
          ErrorCode.InvalidParams,
          "Could not detect Project Zomboid installation. Please provide the game path manually.",
        );
      }

      const results = await ctx.parser.parseGameFiles(
        detectedPath,
        forceReparse,
      );

      return {
        content: [
          {
            type: "text",
            text: `Successfully parsed Project Zomboid files from: ${detectedPath}\n\n${formatParseResults(results)}`,
          },
        ],
        structuredContent: structuredClone(results),
      };
    },
  },
  {
    name: "index_knowledge_base",
    description:
      "Index markdown knowledge base docs into the chunked search database. Docs are cleaned, split into section chunks, and tagged with a portable doc type (wiki / api-docs / mods-analysis / research). Note: JavaDocs are a separate corpus — run index_javadocs to index them (index_knowledge_base skips the javadocs/ directory by default)",
    inputSchema: IndexKnowledgeBaseSchema,
    handler: async (args, ctx) => {
      const { path: kbPath, overwrite } = args;
      const rawPath = kbPath || knowledgeBasePath();
      // Same traversal/existence guard as analyze_mod/parse_game_files
      // (freebuff review §5 security gap: was existsSync-only).
      let resolvedPath: string;
      try {
        resolvedPath = ctx.pathManager.validateInputPath(rawPath, "dir");
      } catch (err) {
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid knowledge base path: ${(err as Error).message}`,
        );
      }
      const result = await ctx.knowledgeBaseManager.indexDirectory(
        resolvedPath,
        {
          overwrite,
        },
      );
      return {
        content: [
          {
            type: "text",
            text: `Successfully indexed knowledge base from: ${resolvedPath}\n\n${formatKbIndexResults(result)}`,
          },
        ],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "index_javadocs",
    description:
      "Index Java API docs into the knowledge base so search_knowledge_base returns class/interface/method results alongside markdown notes. With no source, the repo-shipped distilled JavaDocs markdown (knowledge-base/javadocs — one file per API type from the Unofficial PZ JavaDocs) is indexed directly, so it works on any machine. With source, a raw generated JavaDoc HTML tree is re-ingested: class pages are discovered by generator marker, parsed into structured API knowledge (package, type, FQN, constructors, methods, fields, params, return types, signatures, inheritance, descriptions), rendered as markdown, then indexed. Re-runnable — unchanged pages are skipped",
    inputSchema: IndexJavadocsSchema,
    handler: async (args, ctx) => {
      // Accept both 'path' and 'source' as the input path. 'path' is the
      // recommended name (consistent with index_knowledge_base); 'source'
      // is the legacy name for raw HTML re-ingestion.
      const inputPath = args.path || args.source;

      // output only makes sense with an explicit input (re-ingest); with no
      // input the repo-shipped distilled markdown is indexed in place.
      if (args.output && !inputPath) {
        throw new McpError(
          ErrorCode.InvalidParams,
          "output requires an explicit path — with no path the repo-shipped distilled markdown is indexed directly",
        );
      }
      const rawOutput = args.output || javadocsKbDir();

      // Resolve the input: an explicit path (raw HTML javadocs tree or
      // distilled markdown dir) or the repo-shipped distilled markdown
      // (default — works on any machine with zero arguments).
      let sourcePath: string;
      let outputPath: string | undefined;
      try {
        if (inputPath) {
          sourcePath = ctx.pathManager.validateInputPath(inputPath, "dir");
          outputPath = JavaDocIndexer.validateOutputDir(rawOutput);
          // Never write generated docs into the source tree itself.
          const rel = relative(sourcePath, outputPath);
          if (rel === "" || (!rel.startsWith("..") && !isAbsolute(rel))) {
            throw new Error(
              `output must not be inside the javadocs source directory: ${outputPath}`,
            );
          }
        } else {
          // No input: index the repo-shipped distilled markdown directly.
          sourcePath = ctx.pathManager.validateInputPath(
            shippedJavadocsPath(),
            "dir",
          );
        }
      } catch (error) {
        // Friendly error when the default shipped path is missing.
        const defaultPath = shippedJavadocsPath();
        const msg = error instanceof Error ? error.message : String(error);
        if (!inputPath && msg.includes("does not exist")) {
          throw new McpError(
            ErrorCode.InvalidParams,
            `Shipped JavaDocs not found at ${defaultPath}. The knowledge-base/javadocs/ directory ships with the repository. ` +
              `If it's missing, run 'git checkout knowledge-base/javadocs/' from the repo root, or set PZ_MCP_JAVADOCS_PATH to point to your distilled JavaDocs markdown directory.`,
          );
        }
        throw new McpError(
          ErrorCode.InvalidParams,
          `Invalid javadocs path: ${msg}`,
        );
      }

      let ingest:
        | JavadocsIngestResult
        | {
            mode: "shipped";
            source: string;
            output: string;
            version: null;
            classPages: number;
            parsed: number;
            written: number;
            unchanged: number;
            skippedNonClass: number;
            removed: number;
            errors: Array<{ file: string; message: string }>;
          };
      if (inputPath) {
        // outputPath is always assigned on this branch (validated above).
        ingest = await new JavaDocIndexer().ingest(sourcePath, outputPath!);
      } else {
        // Shipped mode: no HTML re-parse — the markdown is already distilled.
        ingest = {
          mode: "shipped",
          source: sourcePath,
          output: sourcePath,
          version: null,
          classPages: 0,
          parsed: 0,
          written: 0,
          unchanged: 0,
          skippedNonClass: 0,
          removed: 0,
          errors: [],
        };
      }
      const indexDir = inputPath ? outputPath! : sourcePath;
      // Namespace javadocs topics under `javadocs/` (KB v2: path-prefixed
      // topics are collision-proof and self-describing).
      const index = await ctx.knowledgeBaseManager.indexDirectory(indexDir, {
        overwrite: args.overwrite,
        topicPrefix: "javadocs",
      });

      const result = {
        mode: (inputPath ? "source" : "shipped") as "source" | "shipped",
        ingest,
        index,
      };
      return {
        content: [
          {
            type: "text",
            text: formatJavadocsIndexResults(result),
          },
        ],
        structuredContent: structuredClone(result),
      };
    },
  },
  {
    name: "search_knowledge_base",
    description:
      'Search knowledge base docs with relevance ranking (bm25 with column weights, unicode61 exact terms first, prefix + inflection re-run as a no-hit fallback). Returns section-level chunks — each result is a precise unit (a wiki section or a single javadocs method/field) with read-cost metadata (chars/words). Type-aware defaults: natural-language queries rank prose docs (wiki/research/api-docs) first so javadocs constants don\'t flood the list; identifier-like queries (getSquare, Base.Hammer) rank javadocs first; bodyless signatures and table-heavy docs are downweighted, and maxResultsPerDoc (default 3) stops one giant doc from monopolizing the top-N. Set includeContent: true to get the chunk bodies inline (search + read in one call, capped by maxContent). Filters: topic (exact doc topic), type / types (single or multi-select doc types), package (Java package, javadocs only). JavaDocs must be indexed with index_javadocs first — index_knowledge_base skips javadocs/. Examples: {query: "blacksmithing recipe"}, {query: "getSquare", type: "javadocs", package: "zombie.iso"}, {query: "blacksmithing", includeContent: true}',
    inputSchema: SearchKnowledgeBaseSchema,
    handler: async (args, ctx) => {
      const {
        query,
        topic,
        limit,
        type,
        types,
        package: pkg,
        includeContent,
        maxContent,
        maxResultsPerDoc,
      } = args;
      const opts: {
        topic?: string;
        limit?: number;
        type?: KbDocType;
        types?: KbDocType[];
        package?: string;
        includeContent?: boolean;
        maxContent?: number;
        maxResultsPerDoc?: number;
      } = { limit, includeContent, maxContent, maxResultsPerDoc };
      if (topic) opts.topic = topic;
      if (type) opts.type = type;
      if (types?.length) opts.types = types;
      if (pkg) opts.package = pkg;
      const results = await ctx.knowledgeBaseManager.search(query, opts);
      return {
        content: [
          {
            type: "text",
            text: formatKbSearchResults(query, results),
          },
        ],
        structuredContent: {
          query,
          results: structuredClone(results),
        },
      };
    },
  },
  {
    name: "list_knowledge_topics",
    description:
      'List indexed knowledge base topics with stats (lines/words/chars) — stored columns, instant even at ~5,000 topics. Optional filters keep the reply lean: types (multi-select doc types, e.g. ["research", "wiki"]), prefix (path-prefixed topic id start, e.g. "wiki" or "javadocs/zombie.iso"), and limit/offset for pagination. Example: {types: ["research", "wiki"], limit: 50}. With no filters the full list is returned.',
    inputSchema: ListKnowledgeTopicsSchema,
    handler: async (args, ctx) => {
      const { type, types, prefix, limit, offset } = args;
      const opts: {
        types?: KbDocType[];
        prefix?: string;
        limit?: number;
        offset?: number;
      } = {};
      if (types?.length) opts.types = types;
      else if (type) opts.types = [type];
      if (prefix) opts.prefix = prefix;
      if (limit !== undefined) opts.limit = limit;
      if (offset !== undefined) opts.offset = offset;
      const topics = await ctx.knowledgeBaseManager.listTopics(opts);
      const countOpts: { types?: KbDocType[]; prefix?: string } = {};
      if (opts.types !== undefined) countOpts.types = opts.types;
      if (opts.prefix !== undefined) countOpts.prefix = opts.prefix;
      const total = await ctx.knowledgeBaseManager.countTopics(countOpts);
      return {
        content: [
          {
            type: "text",
            text: formatKbTopics(topics),
          },
        ],
        structuredContent: {
          topics: structuredClone(topics),
          total,
          filtered:
            opts.limit !== undefined ||
            opts.types !== undefined ||
            opts.prefix !== undefined,
        },
      };
    },
  },
  {
    name: "get_knowledge_section",
    description:
      "Read one section of a knowledge base doc by name — no slug guessing needed. Pass a doc topic (wiki/Java, javadocs/zombie.iso.IsoGameCharacter) plus the section heading or javadocs member name ('Section One', 'getPlayer', 'public static void Load()'), or a full chunk id (wiki/Java#section-one) to read it directly. Returns only that chunk (a wiki section or a single method/field), not the whole page. On no match, the reply lists the doc's available sections. Batch mode: pass sections: ['getPlayer', 'Load'] to read several members of one doc in a single call (a miss yields null for that entry instead of an error).",
    inputSchema: GetKnowledgeSectionSchema,
    handler: async (args, ctx) => {
      const { topic, section, sections } = args;
      // Batch mode: sections[] resolves several members in one round trip.
      // An inline #section in `topic` names the exact chunk and wins over
      // the batch (mirroring the documented single-section contract
      // "omitted when topic already carries a #section").
      if (sections && sections.length > 0 && topic.indexOf("#") === -1) {
        const res = await ctx.knowledgeBaseManager.getSections(topic, sections);
        if (!res) {
          const docTopic = topic.split("#")[0];
          throw new McpError(
            ErrorCode.InvalidParams,
            `Doc not found: ${docTopic}. Run index_knowledge_base / index_javadocs first, or check the topic id.`,
          );
        }
        return {
          content: [{ type: "text", text: formatKbSections(res) }],
          structuredContent: structuredClone(res),
        };
      }
      const res = await ctx.knowledgeBaseManager.getSection(topic, section);
      if (!res) {
        const docTopic = topic.split("#")[0];
        throw new McpError(
          ErrorCode.InvalidParams,
          `Doc not found: ${docTopic}. Run index_knowledge_base / index_javadocs first, or check the topic id.`,
        );
      }
      if (!res.match) {
        // Report the effective requested section (from the section param or
        // the #fragment in the topic) so inline misses aren't shown as "".
        const hashIdx = topic.indexOf("#");
        const want =
          hashIdx === -1 ? (section ?? "") : topic.slice(hashIdx + 1);
        const list = res.sections.slice(0, 20).join("; ");
        throw new McpError(
          ErrorCode.InvalidParams,
          `No section matched "${want}" in ${res.docTopic}. Available sections: ${list || "(none)"}`,
        );
      }
      return {
        content: [
          {
            type: "text",
            text: formatKbSection(res.match),
          },
        ],
        structuredContent: structuredClone(res.match),
      };
    },
  },
];
