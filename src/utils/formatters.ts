export function formatSearchResults(results: any[]): string {
  return results
    .map((result) => {
      const type = result.type || "unknown";
      const name = result.name || result.id;
      const description = result.displayName || result.description || "";

      let output = `**${name}** (${type})`;
      if (description) output += ` - ${description}`;

      if (result.properties) {
        const props = Object.entries(result.properties)
          .filter(([, value]) => value !== null && value !== undefined)
          .slice(0, 5) // Limit to first 5 properties
          .map(([key, value]) => `${key}: ${value}`)
          .join(", ");
        if (props) output += `\n  Properties: ${props}`;
      }

      return output;
    })
    .join("\n\n");
}

export function formatRecipeSearchResults(recipes: any[]): string {
  if (recipes.length === 0) {
    return `Found 0 recipes matching the criteria.`;
  }

  let output = `Found ${recipes.length} recipe(s):\n\n`;
  recipes.forEach((r, idx) => {
    output += `${idx + 1}. **${r.name}** (${r.id})\n`;
    if (r.category) output += `   Category: ${r.category}\n`;
    if (r.time !== undefined && r.time !== null)
      output += `   Time: ${r.time}s\n`;
    if (r.skill) {
      output += `   Requires: ${r.skill} ${r.skillLevel ?? "?"}\n`;
    }
    const ing = (r.ingredients || []).filter(
      (i: any) => i.role === "ingredient",
    );
    const tools = (r.ingredients || []).filter((i: any) => i.role === "tool");
    const outs = (r.ingredients || []).filter((i: any) => i.role === "output");
    if (ing.length > 0)
      output += `   Ingredients: ${ing
        .map((i: any) => `${i.count}x ${i.ref}`)
        .join(", ")}\n`;
    if (tools.length > 0)
      output += `   Tools: ${tools.map((i: any) => i.ref).join(", ")}\n`;
    if (outs.length > 0)
      output += `   Results: ${outs
        .map((i: any) => `${i.count}x ${i.ref}`)
        .join(", ")}\n`;
    output += "\n";
  });
  return output;
}

export function formatValidationResults(validation: any): string {
  let output = `## Validation Results\n\n`;

  if (validation.isValid) {
    output += `✅ **Valid** - Script passed all validation checks\n\n`;
  } else {
    output += `❌ **Invalid** - Found ${validation.errors.length} error(s)\n\n`;
  }

  if (validation.errors.length > 0) {
    output += `### Errors:\n`;
    validation.errors.forEach((error: any, index: number) => {
      output += `${index + 1}. **Line ${error.line || "unknown"}**: ${error.message}\n`;
      if (error.suggestion) {
        output += `   💡 Suggestion: ${error.suggestion}\n`;
      }
    });
    output += "\n";
  }

  if (validation.warnings.length > 0) {
    output += `### Warnings:\n`;
    validation.warnings.forEach((warning: any, index: number) => {
      output += `${index + 1}. **Line ${warning.line || "unknown"}**: ${warning.message}\n`;
    });
    output += "\n";
  }

  if (validation.suggestions.length > 0) {
    output += `### Suggestions:\n`;
    validation.suggestions.forEach((suggestion: any, index: number) => {
      output += `${index + 1}. ${suggestion}\n`;
    });
  }

  return output;
}

export function formatReferenceResults(results: any): string {
  let output = `## Reference Validation Results\n\n`;

  const valid = results.filter((r: any) => r.isValid);
  const invalid = results.filter((r: any) => !r.isValid);

  output += `✅ Valid: ${valid.length} | ❌ Invalid: ${invalid.length}\n\n`;

  // Completeness summary (freebuff N-series): where each reference actually
  // lives — defined as an item, referenced-only, or missing everywhere.
  const definedCount = results.filter(
    (r: any) => r.detail === "defined",
  ).length;
  const referencedCount = results.filter(
    (r: any) => r.detail === "referenced",
  ).length;
  const missingCount = results.filter(
    (r: any) => r.detail === "missing",
  ).length;
  if (results.some((r: any) => r.detail !== undefined)) {
    output += `📊 Defined: ${definedCount} | Referenced-only: ${referencedCount} | Missing: ${missingCount}\n\n`;
  }

  if (invalid.length > 0) {
    output += `### Invalid References:\n`;
    invalid.forEach((ref: any) => {
      output += `- **${ref.reference}** (${ref.type}): ${ref.error}\n`;
      if (ref.detail === "referenced") {
        output += `  ⚠️ Referenced by ${ref.referenceCount ?? 0} item(s)/recipe(s) but no ${ref.itemType ? `'${ref.itemType}' ` : ""}row defines it\n`;
      }
      if (ref.suggestions && ref.suggestions.length > 0) {
        output += `  💡 Did you mean: ${ref.suggestions.slice(0, 3).join(", ")}?\n`;
      }
    });
    output += "\n";
  }

  if (valid.length > 0) {
    output += `### Valid References:\n`;
    valid.forEach((ref: any) => {
      output += `- **${ref.reference}** (${ref.type}) ✅`;
      if (ref.detail === "referenced") {
        output += ` (referenced-only, ${ref.referenceCount ?? 0} ref(s))`;
      } else if (ref.detail === "defined" && ref.itemType) {
        output += ` (${ref.itemType} row)`;
      }
      output += `\n`;
    });
  }

  return output;
}

export function formatRecipeChain(chain: any): string {
  let output = `## Recipe Chain: ${chain.seed}\n\n`;
  output += `- **Seed kind**: ${chain.seedKind}\n`;
  output += `- **Depth**: ${chain.maxDepth}${chain.truncated ? " (truncated)" : ""}\n`;
  output += `- **Nodes**: ${chain.nodes.length}\n\n`;

  for (const node of chain.nodes) {
    const icon =
      node.kind === "recipe" ? "🔧" : node.kind === "item" ? "📦" : "❓";
    output += `${icon} **${node.id}** (${node.kind}${node.itemType ? `, ${node.itemType}` : ""})\n`;
    if (node.ingredients.length > 0) {
      output += `  ⬆️ consumes: ${node.ingredients.map((i: any) => i.id).join(", ")}\n`;
    }
    if (node.results.length > 0) {
      output += `  ⬇️ produces: ${node.results.map((r: any) => r.id).join(", ")}\n`;
    }
    if (node.producedBy.length > 0) {
      output += `  ⬆️ made by: ${node.producedBy.join(", ")}\n`;
    }
    if (node.consumedBy.length > 0) {
      output += `  ⬇️ used by: ${node.consumedBy.join(", ")}\n`;
    }
    output += "\n";
  }

  return output;
}

export function formatRecipeConflicts(result: any): string {
  let output = `## Recipe Conflict Detection\n\n`;
  output += `- **Recipes in DB**: ${result.totalRecipes}\n`;
  output += `- **Conflicts found**: ${result.conflicts.length}\n\n`;

  if (result.conflicts.length === 0) {
    output += `✅ No items are produced by more than one recipe.\n`;
    return output;
  }

  result.conflicts.forEach((conflict: any, index: number) => {
    output += `${index + 1}. ⚠️ **${conflict.item}** is produced by ${conflict.recipes.length} recipes:\n`;
    conflict.recipes.forEach((r: any) => {
      output += `   - ${r.id} (${r.context})\n`;
    });
  });

  return output;
}

export function formatModAnalysis(analysis: any): string {
  let output = `# Mod Analysis Report\n\n`;

  output += `**Mod Name**: ${analysis.modName || "Unknown"}\n`;
  output += `**Path**: ${analysis.modPath}\n`;
  output += `**Analysis Date**: ${new Date().toISOString()}\n\n`;

  // Structure validation
  output += `## Structure Validation\n`;
  output += `- **mod.info**: ${analysis.structure.hasModInfo ? "✅ Found" : "❌ Missing"}\n`;
  output += `- **Scripts**: ${analysis.structure.scriptCount} file(s) found\n`;
  output += `- **Lua Files**: ${analysis.structure.luaCount} file(s) found\n`;
  output += `- **Assets**: ${analysis.structure.assetCount} file(s) found\n\n`;

  // Issues
  if (analysis.issues && analysis.issues.length > 0) {
    output += `## Issues Found\n`;
    analysis.issues.forEach((issue: any, index: number) => {
      const icon =
        issue.severity === "error"
          ? "❌"
          : issue.severity === "warning"
            ? "⚠️"
            : "ℹ️";
      output += `${index + 1}. ${icon} **${issue.file}**: ${issue.message}\n`;
    });
    output += "\n";
  }

  // Balance analysis
  if (analysis.balance) {
    output += `## Balance Analysis\n`;
    output += `- **Items Analyzed**: ${analysis.balance.itemCount}\n`;
    output += `- **Balance Score**: ${analysis.balance.score}/100\n`;
    if (analysis.balance.recommendations.length > 0) {
      output += `- **Recommendations**:\n`;
      analysis.balance.recommendations.forEach((rec: string) => {
        output += `  - ${rec}\n`;
      });
    }
  }

  return output;
}

export function formatParseResults(results: any): string {
  let output = `## Parse Results\n\n`;

  output += `- **Items**: ${results.itemCount} parsed\n`;
  output += `- **Recipes**: ${results.recipeCount} parsed\n`;
  output += `- **Sounds**: ${results.soundCount} parsed\n`;
  output += `- **Vehicles**: ${results.vehicleCount} parsed\n`;
  output += `- **Files Processed**: ${results.filesProcessed}\n`;
  output += `- **Parse Time**: ${results.parseTime}ms\n\n`;

  if (results.errors && results.errors.length > 0) {
    output += `### Parse Errors:\n`;
    results.errors.forEach((error: any, index: number) => {
      output += `${index + 1}. **${error.file}**: ${error.message}\n`;
    });
  }

  return output;
}

export function formatKbIndexResults(result: {
  topics: number;
  files: number;
  chars: number;
  skipped: number;
  removed: number;
  errors: Array<{ file: string; message: string }>;
}): string {
  let output = `## Knowledge Base Index Results\n\n`;
  output += `- **Topics**: ${result.topics} indexed\n`;
  output += `- **Files**: ${result.files} found\n`;
  output += `- **Characters**: ${result.chars}\n`;
  if (result.skipped > 0) {
    output += `- **Skipped (unchanged)**: ${result.skipped}\n`;
  }
  if (result.removed > 0) {
    output += `- **Removed (deleted files)**: ${result.removed}\n`;
  }
  output += `\n`;

  if (result.errors && result.errors.length > 0) {
    output += `### Errors:\n`;
    result.errors.forEach((error, index) => {
      output += `${index + 1}. **${error.file}**: ${error.message}\n`;
    });
  }

  return output;
}

export function formatKbSearchResults(
  query: string,
  results: Array<{
    topic: string;
    title: string;
    snippet: string;
    score: number;
  }>,
): string {
  if (results.length === 0) {
    return `Found 0 results for "${query}" in knowledge base.\n`;
  }

  let output = `Found ${results.length} results for "${query}":\n\n`;
  results.forEach((r) => {
    output += `**${r.topic}** (${r.title})\n`;
    output += `  Score: ${r.score}\n`;
    // Collapse the raw content slice to a single line (qwen audit G5: the
    // old snippet.replace(/\n/g, "\n  ") was a no-op for single-line
    // snippets and produced ragged indents for multi-line ones).
    output += `  ${r.snippet.replace(/\s+/g, " ").trim()}\n\n`;
  });

  return output;
}

export function formatKbTopics(
  topics: Array<{
    topic: string;
    title: string;
    lines: number;
    words: number;
    chars: number;
  }>,
): string {
  if (topics.length === 0) {
    return `No knowledge base topics indexed. Run index_knowledge_base first.\n`;
  }

  let output = `## Knowledge Base Topics (${topics.length})\n\n`;
  topics.forEach((t) => {
    output += `- **${t.topic}**: ${t.title} (${t.lines} lines, ${t.words} words, ${t.chars} chars)\n`;
  });

  return output;
}

export function formatWorkshopSearchResults(
  query: string,
  items: Array<{
    id: string;
    title: string;
    author: string;
    url: string;
    shortDescription: string;
    tags: string[];
    subscribers: number;
  }>,
): string {
  if (items.length === 0) {
    return `Found 0 workshop items for "${query}".\n`;
  }
  let output = `Found ${items.length} workshop items for "${query}":\n\n`;
  items.forEach((it, i) => {
    output += `${i + 1}. **${it.title}** — by ${it.author} · id \`${it.id}\`\n`;
    output += `   🔗 ${it.url}\n`;
    if (it.subscribers > 0)
      output += `   👥 ${it.subscribers.toLocaleString()} subscribers\n`;
    if (it.tags.length > 0) output += `   🏷️ ${it.tags.join(", ")}\n`;
    if (it.shortDescription) {
      output += `   ${it.shortDescription.slice(0, 160)}\n`;
    }
    output += `\n`;
  });
  output += `Run workshop_get_details with an id to fetch full metadata, then workshop_download (M2) to fetch and analyze the mod.`;
  return output;
}

export function formatWorkshopDetails(
  details: {
    id: string;
    title: string;
    url: string;
    appId: string;
    fileSize: number;
    subscribers: number;
    views: number;
    votesUp: number;
    votesDown: number;
    tags: string[];
    description: string;
    timeUpdated: number;
  },
  isPz: boolean,
): string {
  let output = `## Workshop Item: ${details.title}\n\n`;
  if (!isPz) {
    output += `⚠️ **Warning**: this item's consumer app is \`${details.appId || "unknown"}\`, not Project Zomboid (108600).\n\n`;
  }
  output += `- **Id**: \`${details.id}\``;
  if (isPz) output += ` ✅ Project Zomboid`;
  output += `\n`;
  output += `- **Link**: ${details.url}\n`;
  output += `- **File size**: ${formatBytes(details.fileSize)}\n`;
  output += `- **Subscribers**: ${details.subscribers.toLocaleString()}\n`;
  output += `- **Views**: ${details.views.toLocaleString()}\n`;
  output += `- **Rating**: 👍 ${details.votesUp.toLocaleString()} / 👎 ${details.votesDown.toLocaleString()}\n`;
  if (details.tags.length > 0) {
    output += `- **Tags**: ${details.tags.join(", ")}\n`;
  }
  output += `- **Last updated**: ${new Date(details.timeUpdated * 1000).toISOString().slice(0, 10)}\n`;
  if (details.description) {
    output += `\n### Description\n${details.description.slice(0, 600)}\n`;
  }
  return output;
}

export function formatWorkshopDownload(result: {
  id: string;
  downloadedPath: string;
  bytes: number;
  elapsedMs: number;
  attempts: number;
  note?: string;
}): string {
  let output = `## Workshop Download: ${result.id}\n\n`;
  output += `✅ Downloaded to: \`${result.downloadedPath}\`\n`;
  output += `- **Size**: ${formatBytes(result.bytes)}\n`;
  output += `- **Elapsed**: ${(result.elapsedMs / 1000).toFixed(1)}s\n`;
  output += `- **SteamCMD attempts**: ${result.attempts}\n`;
  if (result.note) output += `- **Note**: ${result.note}\n`;
  output += `\nNext: run parse_game_files / analyze_mod / check_references on ${result.downloadedPath} to dissect the mod.`;
  return output;
}

export interface WorkshopModReport {
  modId: string;
  title: string;
  url: string;
  fileSize: number;
  subscribers: number;
  downloadedPath: string;
  downloadBytes: number;
  /** Total tool duration (download + parse + analyze), ms. */
  elapsedMs: number;
  parse: {
    itemCount: number;
    recipeCount: number;
    soundCount: number;
    vehicleCount: number;
    evolvedRecipeCount: number;
    fixingCount: number;
    filesProcessed: number;
    parseTime: number;
    errors: Array<{ file: string; message: string }>;
  };
  analysis: any;
}

export function formatWorkshopModReport(report: WorkshopModReport): string {
  const p = report.parse;
  const a = report.analysis ?? {};
  const q = a.quality ?? {};
  const issues = a.issues ?? [];
  const errs = issues.filter((i: any) => i.severity === "error");
  const warns = issues.filter((i: any) => i.severity === "warning");

  let out = `# Mod Report: ${report.title}\n\n`;
  out += `- **Workshop id**: \`${report.modId}\` · [Steam page](${report.url})\n`;
  out += `- **Size**: ${formatBytes(report.fileSize)} · 👥 ${report.subscribers.toLocaleString()} subscribers\n`;
  out += `- **Downloaded**: \`${report.downloadedPath}\` (${formatBytes(report.downloadBytes)})\n\n`;

  out += `## What the mod adds\n`;
  out += `- **Items**: ${p.itemCount} · **Recipes**: ${p.recipeCount} · **Evolved recipes**: ${p.evolvedRecipeCount} · **Fixing**: ${p.fixingCount}\n`;
  out += `- **Sounds**: ${p.soundCount} · **Vehicles**: ${p.vehicleCount}\n`;
  out += `- **Files processed**: ${p.filesProcessed} in ${p.parseTime}ms\n`;
  if (p.errors.length > 0) {
    out += `- ⚠️ Parse errors (${p.errors.length}): ${p.errors
      .map((e) => `${e.file}: ${e.message}`)
      .slice(0, 3)
      .join(" | ")}\n`;
  }
  out += `\n`;

  out += `## Quality score\n`;
  out += `- **Overall**: ${q.overall ?? "—"}/100 (structure ${q.structure ?? "—"} · syntax ${q.syntax ?? "—"} · balance ${q.balance ?? "—"} · documentation ${q.documentation ?? "—"})\n`;
  out += `- **Issues**: ${errs.length} error(s) · ${warns.length} warning(s)\n\n`;

  if (issues.length > 0) {
    out += `## Issues\n`;
    issues.slice(0, 10).forEach((issue: any) => {
      const icon =
        issue.severity === "error"
          ? "❌"
          : issue.severity === "warning"
            ? "⚠️"
            : "ℹ️";
      out += `${icon} **${issue.file}**: ${issue.message}${issue.code ? ` (\`${issue.code}\`)` : ""}\n`;
    });
    out += `\n`;
  }

  if (a.compatibility) {
    out += `## Compatibility\n`;
    out += `- ${JSON.stringify(a.compatibility).slice(0, 300)}\n\n`;
  }

  if (a.balance) {
    out += `## Balance\n`;
    out += `- Score ${a.balance.score}/100 · ${a.balance.itemCount} items analyzed\n`;
    if (a.balance.recommendations?.length > 0) {
      out += `- ${a.balance.recommendations.slice(0, 5).join("\n- ")}\n`;
    }
    out += `\n`;
  }

  if ((a.recommendations ?? []).length > 0) {
    out += `## Recommendations\n`;
    a.recommendations.slice(0, 8).forEach((r: string) => {
      out += `- ${r}\n`;
    });
    out += `\n`;
  }

  out += `---\nMod fetched, parsed, and analyzed locally. Run check_references / detect_recipe_conflicts for deeper checks.`;
  return out;
}

export function formatBytes(n: number): string {
  if (n <= 0) return "unknown";
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = n;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}
