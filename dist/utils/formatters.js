export function formatSearchResults(results) {
    return results
        .map((result) => {
        const type = result.type || "unknown";
        const name = result.name || result.id;
        const description = result.displayName || result.description || "";
        let output = `**${name}** (${type})`;
        if (description)
            output += ` - ${description}`;
        if (result.properties) {
            const props = Object.entries(result.properties)
                .filter(([, value]) => value !== null && value !== undefined)
                .slice(0, 5) // Limit to first 5 properties
                .map(([key, value]) => `${key}: ${value}`)
                .join(", ");
            if (props)
                output += `\n  Properties: ${props}`;
        }
        return output;
    })
        .join("\n\n");
}
export function formatRecipeSearchResults(recipes) {
    if (recipes.length === 0) {
        return `Found 0 recipes matching the criteria.`;
    }
    let output = `Found ${recipes.length} recipe(s):\n\n`;
    recipes.forEach((r, idx) => {
        output += `${idx + 1}. **${r.name}** (${r.id})\n`;
        if (r.category)
            output += `   Category: ${r.category}\n`;
        if (r.time !== undefined && r.time !== null)
            output += `   Time: ${r.time}s\n`;
        if (r.skill) {
            output += `   Requires: ${r.skill} ${r.skillLevel ?? "?"}\n`;
        }
        const ing = (r.ingredients || []).filter((i) => i.role === "ingredient");
        const tools = (r.ingredients || []).filter((i) => i.role === "tool");
        const outs = (r.ingredients || []).filter((i) => i.role === "output");
        if (ing.length > 0)
            output += `   Ingredients: ${ing
                .map((i) => `${i.count}x ${i.ref}`)
                .join(", ")}\n`;
        if (tools.length > 0)
            output += `   Tools: ${tools.map((i) => i.ref).join(", ")}\n`;
        if (outs.length > 0)
            output += `   Results: ${outs
                .map((i) => `${i.count}x ${i.ref}`)
                .join(", ")}\n`;
        output += "\n";
    });
    return output;
}
export function formatValidationResults(validation) {
    let output = `## Validation Results\n\n`;
    if (validation.isValid) {
        output += `✅ **Valid** - Script passed all validation checks\n\n`;
    }
    else {
        output += `❌ **Invalid** - Found ${validation.errors.length} error(s)\n\n`;
    }
    if (validation.errors.length > 0) {
        output += `### Errors:\n`;
        validation.errors.forEach((error, index) => {
            output += `${index + 1}. **Line ${error.line || "unknown"}**: ${error.message}\n`;
            if (error.suggestion) {
                output += `   💡 Suggestion: ${error.suggestion}\n`;
            }
        });
        output += "\n";
    }
    if (validation.warnings.length > 0) {
        output += `### Warnings:\n`;
        validation.warnings.forEach((warning, index) => {
            output += `${index + 1}. **Line ${warning.line || "unknown"}**: ${warning.message}\n`;
        });
        output += "\n";
    }
    if (validation.suggestions.length > 0) {
        output += `### Suggestions:\n`;
        validation.suggestions.forEach((suggestion, index) => {
            output += `${index + 1}. ${suggestion}\n`;
        });
    }
    return output;
}
export function formatReferenceResults(results) {
    let output = `## Reference Validation Results\n\n`;
    const valid = results.filter((r) => r.isValid);
    const invalid = results.filter((r) => !r.isValid);
    output += `✅ Valid: ${valid.length} | ❌ Invalid: ${invalid.length}\n\n`;
    // Completeness summary (freebuff N-series): where each reference actually
    // lives — defined as an item, referenced-only, or missing everywhere.
    const definedCount = results.filter((r) => r.detail === "defined").length;
    const referencedCount = results.filter((r) => r.detail === "referenced").length;
    const missingCount = results.filter((r) => r.detail === "missing").length;
    if (results.some((r) => r.detail !== undefined)) {
        output += `📊 Defined: ${definedCount} | Referenced-only: ${referencedCount} | Missing: ${missingCount}\n\n`;
    }
    if (invalid.length > 0) {
        output += `### Invalid References:\n`;
        invalid.forEach((ref) => {
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
        valid.forEach((ref) => {
            output += `- **${ref.reference}** (${ref.type}) ✅`;
            if (ref.detail === "referenced") {
                output += ` (referenced-only, ${ref.referenceCount ?? 0} ref(s))`;
            }
            else if (ref.detail === "defined" && ref.itemType) {
                output += ` (${ref.itemType} row)`;
            }
            output += `\n`;
        });
    }
    return output;
}
export function formatRecipeChain(chain) {
    let output = `## Recipe Chain: ${chain.seed}\n\n`;
    output += `- **Seed kind**: ${chain.seedKind}\n`;
    output += `- **Depth**: ${chain.maxDepth}${chain.truncated ? " (truncated)" : ""}\n`;
    output += `- **Nodes**: ${chain.nodes.length}\n\n`;
    // Path mode: the shortest crafting pipeline seed → target.
    if (chain.pathFound) {
        output += `## Shortest path to ${chain.path?.at(-1) ?? "target"}\n\n`;
        output += `${chain.path?.join(" → ") ?? "(none)"}\n\n`;
    }
    else if (chain.path && chain.path.length === 0) {
        output += `No path found from ${chain.seed} to the requested target.\n\n`;
    }
    // Crafting cycles (A→B→A loops) flagged during the walk.
    if (chain.cycles && chain.cycles.length > 0) {
        output += `## ⚠️ Crafting cycles (${chain.cycles.length})\n\n`;
        for (const cyc of chain.cycles) {
            output += `- 🔄 **${cyc.recipe}** produces **${cyc.item}**, which it also consumes\n`;
        }
        output += "\n";
    }
    for (const node of chain.nodes) {
        const icon = node.kind === "recipe" ? "🔧" : node.kind === "item" ? "📦" : "❓";
        const cycleTag = node.cycle ? " 🔄" : "";
        output += `${icon} **${node.id}** (${node.kind}${node.itemType ? `, ${node.itemType}` : ""})${cycleTag}\n`;
        // Rich-inspector payloads: item stats + recipe metadata/tools.
        if (node.props) {
            const bits = [];
            if (node.props.Type)
                bits.push(`Type ${node.props.Type}`);
            if (node.props.category)
                bits.push(`Category ${node.props.category}`);
            if (typeof node.props.weight === "number")
                bits.push(`Weight ${node.props.weight}`);
            if (typeof node.props.calories === "number")
                bits.push(`${node.props.calories} cal`);
            if (typeof node.props.hunger === "number")
                bits.push(`Hunger ${node.props.hunger}`);
            if (typeof node.props.thirst === "number")
                bits.push(`Thirst ${node.props.thirst}`);
            if (Array.isArray(node.props.tags) && node.props.tags.length > 0)
                bits.push(`Tags ${node.props.tags.join(";")}`);
            if (bits.length > 0)
                output += `  📊 ${bits.join(" · ")}\n`;
        }
        if (node.meta) {
            const bits = [];
            if (node.meta.category)
                bits.push(`Category ${node.meta.category}`);
            if (typeof node.meta.time === "number")
                bits.push(`${node.meta.time}s`);
            if (node.meta.skill)
                bits.push(`${node.meta.skill}${node.meta.skillLevel !== undefined ? " " + node.meta.skillLevel : ""}`);
            if (node.meta.tools && node.meta.tools.length > 0)
                bits.push(`Tools ${node.meta.tools.map((t) => t.id).join(", ")}`);
            if (bits.length > 0)
                output += `  ⚙️ ${bits.join(" · ")}\n`;
        }
        if (node.ingredients.length > 0) {
            output += `  ⬆️ consumes: ${node.ingredients
                .map((i) => (i.tag ? `${i.id} (tag)` : i.id))
                .join(", ")}\n`;
        }
        if (node.results.length > 0) {
            output += `  ⬇️ produces: ${node.results.map((r) => r.id).join(", ")}\n`;
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
export function formatRecipeConflicts(result) {
    let output = `## Recipe Conflict Detection\n\n`;
    output += `- **Recipes in DB**: ${result.totalRecipes}\n`;
    output += `- **Conflicts found**: ${result.conflicts.length}\n\n`;
    if (result.conflicts.length === 0) {
        output += `✅ No items are produced by more than one recipe.\n`;
        return output;
    }
    result.conflicts.forEach((conflict, index) => {
        const sev = conflict.severity === "high"
            ? "🔴"
            : conflict.severity === "low"
                ? "🟡"
                : "⚪";
        const kind = conflict.kind === "tag"
            ? " (tag multi-path — game tolerates)"
            : conflict.kind === "mapper"
                ? " (mapper output — resolved per recipe in-game)"
                : "";
        output += `${index + 1}. ${sev} **${conflict.item}** is produced by ${conflict.recipes.length} recipes${kind}:\n`;
        conflict.recipes.forEach((r) => {
            output += `   - ${r.id} (${r.context})\n`;
        });
    });
    return output;
}
export function formatModAnalysis(analysis) {
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
        analysis.issues.forEach((issue, index) => {
            const icon = issue.severity === "error"
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
            analysis.balance.recommendations.forEach((rec) => {
                output += `  - ${rec}\n`;
            });
        }
    }
    return output;
}
export function formatParseResults(results) {
    let output = `## Parse Results\n\n`;
    output += `- **Items**: ${results.itemCount} parsed\n`;
    output += `- **Recipes**: ${results.recipeCount} parsed\n`;
    output += `- **Sounds**: ${results.soundCount} parsed\n`;
    output += `- **Vehicles**: ${results.vehicleCount} parsed\n`;
    output += `- **Files Processed**: ${results.filesProcessed}\n`;
    output += `- **Parse Time**: ${results.parseTime}ms\n\n`;
    if (results.errors && results.errors.length > 0) {
        output += `### Parse Errors:\n`;
        results.errors.forEach((error, index) => {
            output += `${index + 1}. **${error.file}**: ${error.message}\n`;
        });
    }
    return output;
}
export function formatKbIndexResults(result) {
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
export function formatKbSearchResults(query, results) {
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
export function formatKbTopics(topics) {
    if (topics.length === 0) {
        return `No knowledge base topics indexed. Run index_knowledge_base first.\n`;
    }
    let output = `## Knowledge Base Topics (${topics.length})\n\n`;
    topics.forEach((t) => {
        output += `- **${t.topic}**: ${t.title} (${t.lines} lines, ${t.words} words, ${t.chars} chars)\n`;
    });
    return output;
}
export function formatWorkshopSearchResults(query, items) {
    if (items.length === 0) {
        return `Found 0 workshop items for "${query}".\n`;
    }
    let output = `Found ${items.length} workshop items for "${query}":\n\n`;
    items.forEach((it, i) => {
        output += `${i + 1}. **${it.title}** — by ${it.author} · id \`${it.id}\`\n`;
        output += `   🔗 ${it.url}\n`;
        if (it.subscribers > 0)
            output += `   👥 ${it.subscribers.toLocaleString()} subscribers\n`;
        if (it.tags.length > 0)
            output += `   🏷️ ${it.tags.join(", ")}\n`;
        if (it.shortDescription) {
            output += `   ${it.shortDescription.slice(0, 160)}\n`;
        }
        output += `\n`;
    });
    output += `Run workshop_get_details with an id to fetch full metadata, then workshop_download to fetch the mod, or workshop_analyze to fetch, download and analyze it in one pass.`;
    return output;
}
export function formatWorkshopDetails(details, isPz) {
    let output = `## Workshop Item: ${details.title}\n\n`;
    if (!isPz) {
        output += `⚠️ **Warning**: this item's consumer app is \`${details.appId || "unknown"}\`, not Project Zomboid (108600).\n\n`;
    }
    output += `- **Id**: \`${details.id}\``;
    if (isPz)
        output += ` ✅ Project Zomboid`;
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
export function formatWorkshopDownload(result) {
    let output = `## Workshop Download: ${result.id}\n\n`;
    output += `✅ Downloaded to: \`${result.downloadedPath}\`\n`;
    output += `- **Size**: ${formatBytes(result.bytes)}\n`;
    output += `- **Elapsed**: ${(result.elapsedMs / 1000).toFixed(1)}s\n`;
    output += `- **SteamCMD attempts**: ${result.attempts}\n`;
    if (result.note)
        output += `- **Note**: ${result.note}\n`;
    output += `\nNext: run parse_game_files / analyze_mod / check_references on ${result.downloadedPath} to dissect the mod.`;
    return output;
}
export function formatWorkshopModReport(report) {
    const p = report.parse;
    const a = report.analysis ?? {};
    const q = a.quality ?? {};
    const issues = a.issues ?? [];
    const errs = issues.filter((i) => i.severity === "error");
    const warns = issues.filter((i) => i.severity === "warning");
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
        issues.slice(0, 10).forEach((issue) => {
            const icon = issue.severity === "error"
                ? "❌"
                : issue.severity === "warning"
                    ? "⚠️"
                    : "ℹ️";
            out += `${icon} **${issue.file}**: ${issue.message}${issue.code ? ` (\`${issue.code}\`)` : ""}\n`;
        });
        out += `\n`;
    }
    const comp = a.compatibility ?? {};
    if (a.compatibility) {
        out += `## Compatibility\n`;
        const gv = comp.gameVersionCompatibility ?? {};
        if (gv.compatible !== undefined) {
            out += `- **Game version**: ${gv.minVersion ?? "any"} – ${gv.maxVersion ?? "latest"} ${gv.compatible ? "✅ compatible" : "⚠️ may not be compatible"}\n`;
        }
        if ((comp.conflicts ?? []).length > 0) {
            out += `- ⚠️ **Conflicts** (${comp.conflicts.length}):\n`;
            comp.conflicts.slice(0, 5).forEach((c) => {
                out += `  - ${c.item} ↔ ${c.conflictsWith}\n`;
            });
        }
        if ((comp.missingDependencies ?? []).length > 0) {
            out += `- ❌ **Missing dependencies**: ${comp.missingDependencies.slice(0, 5).join(", ")}\n`;
        }
        if ((comp.incompatibleMods ?? []).length > 0) {
            out += `- 🚫 **Incompatible mods**: ${comp.incompatibleMods.slice(0, 5).join(", ")}\n`;
        }
        if ((comp.conflicts ?? []).length === 0 &&
            (comp.missingDependencies ?? []).length === 0 &&
            (comp.incompatibleMods ?? []).length === 0) {
            out += `- ✅ No conflicts or missing dependencies found\n`;
        }
        out += `\n`;
    }
    const bal = a.balance ?? {};
    if (a.balance) {
        out += `## Balance\n`;
        out += `- Score ${bal.score ?? "—"}/100 · ${bal.itemCount ?? 0} items analyzed\n`;
        const outliers = bal.outliers ?? [];
        if (outliers.length > 0) {
            out += `- ⚠️ **Outliers** (${outliers.length}):\n`;
            outliers.slice(0, 5).forEach((o) => {
                out += `  - **${o.item}** · ${o.property}: ${o.value} → ${o.recommendation}\n`;
            });
        }
        if ((bal.recommendations ?? []).length > 0) {
            out += `- ${bal.recommendations.slice(0, 5).join("\n- ")}\n`;
        }
        out += `\n`;
    }
    if ((a.recommendations ?? []).length > 0) {
        out += `## Recommendations\n`;
        a.recommendations.slice(0, 8).forEach((r) => {
            out += `- ${r}\n`;
        });
        out += `\n`;
    }
    out += `---\nMod fetched, parsed, and analyzed locally. Run check_references / detect_recipe_conflicts for deeper checks.`;
    return out;
}
export function formatBytes(n) {
    if (n <= 0)
        return "unknown";
    const units = ["B", "KB", "MB", "GB"];
    let i = 0;
    let v = n;
    while (v >= 1024 && i < units.length - 1) {
        v /= 1024;
        i++;
    }
    return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}
/** Format mod structure for workspace_inspect_mod */
export function formatModStructure(structure) {
    let out = `## Mod Structure: ${structure.modPath}\\n\\n`;
    // Metadata
    if (structure.modInfo) {
        out += `**Name**: ${structure.modInfo.name || "Unknown"}\\n`;
        out += `**ID**: ${structure.modInfo.id || "Unknown"}\\n`;
        if (structure.modInfo.version) {
            out += `**Version**: ${structure.modInfo.version}\\n`;
        }
        out += `\\n`;
    }
    // Structure validation
    out += `## Structure\\n`;
    out += `- **mod.info**: ${structure.hasModInfo ? "✅ Found" : "❌ Missing"}\\n`;
    out += `- **common/ folder**: ${structure.hasCommonFolder ? "✅ Present (B42)" : "ℹ️ Not found"}\\n`;
    out += `- **Build versions**: ${structure.buildVersions.length > 0 ? structure.buildVersions.join(", ") : "None detected"}\\n`;
    out += `- **Valid B42 structure**: ${structure.hasCorrectStructure ? "✅ Yes" : "⚠️ No"}\\n\\n`;
    // File counts
    out += `## Content\\n`;
    out += `- **Scripts (.txt)**: ${structure.scriptCount}\\n`;
    out += `- **Lua files (.lua)**: ${structure.luaCount}\\n`;
    out += `- **Assets**: ${structure.assetCount}\\n`;
    out += `- **Detected types**: ${structure.detectedContentTypes.join(", ") || "none"}\\n\\n`;
    // Files list
    if (structure.files.length > 0) {
        out += `## Files (${structure.files.length})\\n`;
        const byType = new Map();
        for (const f of structure.files) {
            if (!byType.has(f.type))
                byType.set(f.type, []);
            byType.get(f.type).push(f);
        }
        for (const [type, files] of byType.entries()) {
            out += `### ${type.toUpperCase()} (${files.length})\\n`;
            files.slice(0, 20).forEach((f) => {
                out += `- \`${f.relativePath}\` (${formatBytes(f.size)})\\n`;
            });
            if (files.length > 20) {
                out += `- ... and ${files.length - 20} more\\n`;
            }
            out += `\\n`;
        }
    }
    return out;
}
/** Format validation result for workspace_validate_mod */
export function formatValidationResult(validation) {
    let out = `## Mod Validation Results\\n\\n`;
    out += validation.isValid ? "✅ **Valid** - Mod passes all validation checks\\n\\n" : "❌ **Invalid** - Found issues\\n\\n";
    if (validation.missingRequired.length > 0) {
        out += `### Missing Required Files\\n`;
        validation.missingRequired.forEach((f) => {
            out += `- ❌ \`${f}\`\\n`;
        });
        out += `\\n`;
    }
    if (validation.errors.length > 0) {
        out += `### Errors (${validation.errors.length})\\n`;
        validation.errors.forEach((err, i) => {
            out += `${i + 1}. **${err.code}**: ${err.message}\\n`;
            if (err.suggestion) {
                out += `   💡 ${err.suggestion}\\n`;
            }
        });
        out += `\\n`;
    }
    if (validation.warnings.length > 0) {
        out += `### Warnings (${validation.warnings.length})\\n`;
        validation.warnings.forEach((warn, i) => {
            out += `${i + 1}. **${warn.code}**: ${warn.message}\\n`;
            if (warn.suggestion) {
                out += `   💡 ${warn.suggestion}\\n`;
            }
        });
        out += `\\n`;
    }
    if (validation.unexpectedFiles.length > 0) {
        out += `### Unexpected Top-Level Entries\\n`;
        validation.unexpectedFiles.forEach((f) => {
            out += `- ⚠️ \`${f}\`\\n`;
        });
        out += `\\n`;
    }
    return out;
}
/** Format project status for workspace_get_status */
export function formatProjectStatus(status) {
    let out = `# Project Status: ${status.modPath}\\n\\n`;
    // Metadata
    if (status.metadata) {
        out += `## Metadata\\n`;
        out += `- **Name**: ${status.metadata.name || "Unknown"}\\n`;
        out += `- **ID**: ${status.metadata.id || "Unknown"}\\n`;
        if (status.metadata.version)
            out += `- **Version**: ${status.metadata.version}\\n`;
        if (status.metadata.author)
            out += `- **Author**: ${status.metadata.author}\\n`;
        out += `\\n`;
    }
    // Structure summary
    out += `## Structure\\n`;
    out += `- **mod.info**: ${status.structure.hasModInfo ? "✅" : "❌"}\\n`;
    out += `- **B42 structure**: ${status.structure.hasCorrectStructure ? "✅" : "⚠️"}\\n`;
    out += `- **Builds**: ${status.structure.buildVersions.join(", ") || "none"}\\n`;
    out += `- **Content**: ${status.structure.scriptCount} scripts, ${status.structure.luaCount} lua, ${status.structure.assetCount} assets\\n\\n`;
    // Validation
    out += `## Validation\\n`;
    out += status.validation.isValid ? "- ✅ Valid\\n" : `- ❌ Invalid (${status.validation.errors.length} errors, ${status.validation.warnings.length} warnings)\\n`;
    out += `\\n`;
    // Dependencies
    const reqDeps = status.dependencies.filter((d) => d.required && !d.incompatible);
    const incMods = status.dependencies.filter((d) => d.incompatible);
    if (reqDeps.length > 0 || incMods.length > 0) {
        out += `## Dependencies\\n`;
        if (reqDeps.length > 0) {
            out += `- **Requires**: ${reqDeps.map((d) => d.modId).join(", ")}\\n`;
        }
        if (incMods.length > 0) {
            out += `- **Incompatible**: ${incMods.map((d) => d.modId).join(", ")}\\n`;
        }
        out += `\\n`;
    }
    // Issues
    if (status.issues.length > 0) {
        out += `## Issues\\n`;
        status.issues.slice(0, 15).forEach((issue) => {
            const icon = issue.severity === "error" ? "❌" : issue.severity === "warning" ? "⚠️" : "ℹ️";
            out += `${icon} ${issue.message}\\n`;
        });
        if (status.issues.length > 15) {
            out += `... and ${status.issues.length - 15} more\\n`;
        }
        out += `\\n`;
    }
    // Last modified
    if (status.lastModified) {
        out += `**Last Modified**: ${status.lastModified.toISOString()}\\n`;
    }
    return out;
}
//# sourceMappingURL=formatters.js.map