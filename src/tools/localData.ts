/**
 * Local data tools: game-file parsing and knowledge-base indexing/search.
 */
import type { z } from "zod";
import {
  ParseGameFilesSchema,
  IndexKnowledgeBaseSchema,
  SearchKnowledgeBaseSchema,
  ListKnowledgeTopicsSchema,
} from "../schemas.js";
import type { McpTool } from "./registry.js";
import {
  formatKbIndexResults,
  formatKbSearchResults,
  formatKbTopics,
  formatParseResults,
} from "../utils/formatters.js";
import { ErrorCode, McpError } from "@modelcontextprotocol/sdk/types.js";
import { knowledgeBasePath } from "../utils/config.js";

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
      "Index markdown knowledge base docs (title, source, content) into a searchable FTS database",
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
    name: "search_knowledge_base",
    description:
      "Search knowledge base docs with relevance ranking and topic filter",
    inputSchema: SearchKnowledgeBaseSchema,
    handler: async (args, ctx) => {
      const { query, topic, limit } = args;
      const results = await ctx.knowledgeBaseManager.search(
        query,
        topic ? { topic, limit } : { limit },
      );
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
    description: "List all indexed knowledge base topics with stats",
    inputSchema: ListKnowledgeTopicsSchema,
    handler: async (_args, ctx) => {
      const topics = await ctx.knowledgeBaseManager.listTopics();
      return {
        content: [
          {
            type: "text",
            text: formatKbTopics(topics),
          },
        ],
        structuredContent: { topics: structuredClone(topics) },
      };
    },
  },
];
