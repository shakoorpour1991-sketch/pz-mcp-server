/**
 * Tool registry assembly: every MCP tool in the server, grouped by family.
 */
import { ToolRegistry } from "./registry.js";
import { discoveryTools } from "./discovery.js";
import { scriptTools } from "./scripts.js";
import { analysisTools } from "./analysis.js";
import { localDataTools } from "./localData.js";
import { workshopTools } from "./workshop.js";
import { workspaceTools } from "./workspace.js";
import { installerTools } from "./installer.js";
import { modgenTools } from "./modgen.js";

export { ToolRegistry };
export type { ToolContext, McpTool, McpToolResult } from "./registry.js";

/** All tool definitions, in registration order. */
export const ALL_TOOLS = [
  ...discoveryTools,
  ...scriptTools,
  ...analysisTools,
  ...localDataTools,
  ...workshopTools,
  ...workspaceTools,
  ...installerTools,
  ...modgenTools,
];
