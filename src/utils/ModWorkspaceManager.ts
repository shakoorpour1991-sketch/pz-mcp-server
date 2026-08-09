/**
 * PZ Mod Workspace Manager - First-class workspace abstraction for Project Zomboid mod development.
 * 
 * Provides a coherent workspace abstraction supporting:
 * - Create mod/project
 * - Scaffold a valid B42 mod
 * - Inspect mod structure
 * - List files
 * - Read files
 * - Write/create files
 * - Safely patch files
 * - Delete files
 * - Rename/move files
 * - Validate mod structure
 * - Detect malformed metadata
 * - Detect missing required directories/files
 * - Inspect dependencies
 * - Report project status
 */

import {
  existsSync,
  readFileSync,
  renameSync,
  unlinkSync,
} from "fs";
import { readdir, stat, writeFile, mkdir } from "fs/promises";
import { join, relative, normalize, isAbsolute, dirname, basename } from "path";
import logger from "./logger.js";
import { PathManager } from "./PathManager.js";
import { discoverModLayouts, readModInfoId } from "./modDiscovery.js";

/** Valid B42 mod directory structure */
export const VALID_MOD_DIRS = [
  "common",
  "media",
  "media/scripts",
  "media/lua",
  "media/sound",
  "media/textures",
  "media/maps",
  "lua",
  "scripts",
  "sound",
  "textures",
  "maps",
] as const;

/** Required files for a valid mod */
export const REQUIRED_MOD_FILES = ["mod.info"] as const;

/** Optional but common mod files */
export const OPTIONAL_MOD_FILES = [
  "poster.png",
  "icon.png",
  "preview.png",
  "workshop.txt",
  "README.md",
  "README.txt",
] as const;

/** File extensions recognized in mods */
export const MOD_FILE_EXTENSIONS = {
  scripts: [".txt"],
  lua: [".lua"],
  assets: [".png", ".jpg", ".jpeg", ".webp", ".bmp", ".ogg", ".wav", ".mp3"],
  data: [".json", ".xml", ".ini"],
  docs: [".md", ".txt"],
} as const;

export interface WorkspaceConfig {
  /** Root directories where mods can be created/managed */
  workspaceRoots: string[];
  /** Default mod template (B42 or B41) */
  defaultTemplate: "B42" | "B41";
  /** Enable strict path validation */
  strictPaths: boolean;
}

export interface ModMetadata {
  id: string;
  name: string;
  author?: string;
  description?: string;
  version?: string;
  url?: string;
  poster?: string;
  icon?: string;
  require?: string[];
  incompatible?: string[];
  versionMin?: string;
  versionMax?: string;
}

export interface ModFile {
  path: string;
  relativePath: string;
  type: "script" | "lua" | "asset" | "data" | "doc" | "config" | "other";
  size: number;
  modified: Date;
}

export interface ModStructure {
  modPath: string;
  modInfo?: ModMetadata;
  hasModInfo: boolean;
  hasCommonFolder: boolean;
  hasCorrectStructure: boolean;
  buildVersions: string[];
  files: ModFile[];
  scriptCount: number;
  luaCount: number;
  assetCount: number;
  detectedContentTypes: string[];
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  warnings: ValidationWarning[];
  missingRequired: string[];
  unexpectedFiles: string[];
}

export interface ValidationError {
  path: string;
  severity: "error";
  code: string;
  message: string;
  suggestion?: string;
}

export interface ValidationWarning {
  path: string;
  severity: "warning";
  code: string;
  message: string;
  suggestion?: string;
}

export interface DependencyInfo {
  modId: string;
  required: boolean;
  incompatible: boolean;
  versionMin?: string;
  versionMax?: string;
}

export interface ProjectStatus {
  modPath: string;
  metadata: ModMetadata | null;
  structure: ModStructure;
  validation: ValidationResult;
  dependencies: DependencyInfo[];
  issues: Array<{ severity: "error" | "warning" | "info"; message: string }>;
  lastModified: Date | null;
}

export interface CreateModOptions {
  name: string;
  id: string;
  author?: string;
  description?: string;
  version?: string;
  template?: "B42" | "B41";
  moduleName?: string;
  createCommonFolder?: boolean;
  createLuaFolder?: boolean;
  createSoundFolder?: boolean;
  createTexturesFolder?: boolean;
}

export interface FileOperationResult {
  success: boolean;
  path?: string;
  error?: string;
  content?: string;
  backupPath?: string;
}

export class ModWorkspaceManager {
  private config: WorkspaceConfig;
  private pathManager: PathManager;

  constructor(config: WorkspaceConfig) {
    this.config = {
      ...config,
      strictPaths: config.strictPaths ?? true,
    };
    this.pathManager = new PathManager();
  }

  /**
   * Validate that a path is within configured workspace roots.
   * Prevents path traversal and ensures operations stay within allowed directories.
   */
  validateWorkspacePath(inputPath: string): string {
    if (!inputPath || inputPath.trim() === "") {
      throw new Error("Path must not be empty");
    }

    if (inputPath.includes("\0")) {
      throw new Error("Path contains invalid characters");
    }

    // Reject path traversal sequences
    const normalized = normalize(inputPath);
    if (normalized.includes("..")) {
      throw new Error(`Path must not contain '..' segments: ${inputPath}`);
    }

    let resolved: string;
    try {
      resolved = normalize(isAbsolute(inputPath) ? inputPath : join(process.cwd(), inputPath));
    } catch (err) {
      throw new Error(`Invalid path: ${(err as Error).message}`);
    }

    // Check against workspace roots
    const withinWorkspace = this.config.workspaceRoots.some((root) => {
      const normalizedRoot = normalize(root);
      return resolved === normalizedRoot || resolved.startsWith(normalizedRoot + "/") || resolved.startsWith(normalizedRoot + "\\");
    });

    if (!withinWorkspace && this.config.strictPaths) {
      throw new Error(
        `Path '${resolved}' is not within any configured workspace root: ${this.config.workspaceRoots.join(", ")}`,
      );
    }

    return resolved;
  }

  /**
   * Create a new mod project with proper B42/B41 structure.
   */
  async createMod(options: CreateModOptions, targetDir: string): Promise<FileOperationResult> {
    try {
      const validatedDir = this.validateWorkspacePath(targetDir);
      const modPath = join(validatedDir, options.id || options.name.replace(/\s+/g, "_"));

      if (existsSync(modPath)) {
        return { success: false, error: `Mod directory already exists: ${modPath}` };
      }

      // Create mod directory
      await mkdir(modPath, { recursive: true });

      // Create mod.info
      const modInfoContent = this.generateModInfo(options);
      await writeFile(join(modPath, "mod.info"), modInfoContent, "utf-8");

      // Create directory structure based on template
      const template = options.template || this.config.defaultTemplate || "B42";
      
      if (template === "B42") {
        // B42 structure with common/ folder
        const commonScripts = join(modPath, "common", "media", "scripts");
        await mkdir(commonScripts, { recursive: true });

        // Create placeholder script file
        const placeholderScript = this.generatePlaceholderScript(options.moduleName || "Base", options.id || options.name);
        await writeFile(join(commonScripts, `${options.id || options.name}_items.txt`), placeholderScript, "utf-8");

        if (options.createLuaFolder) {
          const commonLua = join(modPath, "common", "media", "lua");
          await mkdir(commonLua, { recursive: true });
        }

        if (options.createSoundFolder) {
          const commonSound = join(modPath, "common", "media", "sound");
          await mkdir(commonSound, { recursive: true });
        }

        if (options.createTexturesFolder) {
          const commonTextures = join(modPath, "common", "media", "textures");
          await mkdir(commonTextures, { recursive: true });
        }
      } else {
        // B41 legacy structure
        const mediaScripts = join(modPath, "media", "scripts");
        await mkdir(mediaScripts, { recursive: true });

        // Create placeholder script file
        const placeholderScript = this.generatePlaceholderScript(options.moduleName || "Base", options.id || options.name);
        await writeFile(join(mediaScripts, `${options.id || options.name}_items.txt`), placeholderScript, "utf-8");

        if (options.createLuaFolder) {
          const mediaLua = join(modPath, "media", "lua");
          await mkdir(mediaLua, { recursive: true });
        }
      }

      // Create README
      const readmeContent = this.generateReadme(options);
      await writeFile(join(modPath, "README.md"), readmeContent, "utf-8");

      return { success: true, path: modPath };
    } catch (err) {
      logger.error(`Failed to create mod: ${(err as Error).message}`);
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Generate mod.info content.
   */
  private generateModInfo(options: CreateModOptions): string {
    const lines: string[] = [];
    lines.push(`name=${options.name}`);
    lines.push(`id=${options.id || options.name.replace(/\s+/g, "_")}`);
    
    if (options.author) {
      lines.push(`author=${options.author}`);
    }
    
    if (options.description) {
      lines.push(`description=${options.description}`);
    }
    
    if (options.version) {
      lines.push(`version=${options.version}`);
    } else {
      lines.push(`version=1.0.0`);
    }

    if (options.template === "B42" || this.config.defaultTemplate === "B42") {
      lines.push(`versionMin=42.20`);
    }

    return lines.join("\n");
  }

  /**
   * Generate placeholder script content.
   */
  private generatePlaceholderScript(module: string, modId: string): string {
    const safeName = modId.replace(/[^a-zA-Z0-9_]/g, "_");
    return `module ${module} {
  // ${modId} - Placeholder items
  // Generated by PZ MCP Server
  
  item ${safeName}_ExampleItem {
    Type = Normal,
    DisplayName = Example Item,
    Icon = ${safeName}_ExampleItem,
    // Add more properties as needed
  }
}
`;
  }

  /**
   * Generate README content.
   */
  private generateReadme(options: CreateModOptions): string {
    return `# ${options.name}

${options.description || "A Project Zomboid mod"}

## Installation

Place this folder in your Project Zomboid mods directory:
- Windows: \`C:\\Users\\<Username>\\Zomboid\\mods\\\`
- Linux: \`~/.local/share/Steam/steamapps/workshop/content/108600/\`
- Mac: \`~/Library/Application Support/Steam/steamapps/workshop/content/108600/\`

## Features

- TODO: List mod features

## Requirements

- Project Zomboid Build 42.20 or later

## Credits

${options.author ? `Author: ${options.author}` : "Author: Unknown"}

## License

All rights reserved.
`;
  }

  /**
   * Inspect mod structure and return detailed information.
   */
  async inspectMod(modPath: string): Promise<ModStructure> {
    const validatedPath = this.pathManager.validateInputPath(modPath, "dir");
    
    const structure: ModStructure = {
      modPath: validatedPath,
      hasModInfo: false,
      hasCommonFolder: false,
      hasCorrectStructure: false,
      buildVersions: [],
      files: [],
      scriptCount: 0,
      luaCount: 0,
      assetCount: 0,
      detectedContentTypes: [],
    };

    // Check for mod.info
    const modInfo = await this.parseModInfo(validatedPath);
    if (modInfo) {
      structure.modInfo = modInfo;
      structure.hasModInfo = true;
    }

    // Dynamic layout discovery
    const layouts = await discoverModLayouts(validatedPath);
    
    structure.hasCommonFolder = layouts.some(
      (l) =>
        l.scriptsDirs.some((d) => d.includes("/common/") || d.includes("\\common\\")) ||
        l.luaDirs.some((d) => d.includes("/common/") || d.includes("\\common\\")),
    );

    // Collect build versions
    const versions = new Set<string>();
    for (const layout of layouts) {
      for (const v of layout.versions) {
        versions.add(v);
      }
    }
    structure.buildVersions = [...versions].sort();

    // Has correct structure if it has common folder OR version folders
    structure.hasCorrectStructure = structure.hasCommonFolder || structure.buildVersions.length > 0;

    // Scan files
    await this.scanFiles(validatedPath, validatedPath, structure);

    // Detect content types
    if (structure.scriptCount > 0) structure.detectedContentTypes.push("scripts");
    if (structure.luaCount > 0) structure.detectedContentTypes.push("lua");
    if (structure.assetCount > 0) structure.detectedContentTypes.push("assets");

    return structure;
  }

  /**
   * Recursively scan files in mod directory.
   */
  private async scanFiles(
    dirPath: string,
    modRoot: string,
    structure: ModStructure,
  ): Promise<void> {
    try {
      const entries = await readdir(dirPath);
      
      for (const entry of entries) {
        const fullPath = join(dirPath, entry);
        const entryStat = await stat(fullPath);
        
        if (entryStat.isDirectory()) {
          await this.scanFiles(fullPath, modRoot, structure);
        } else if (entryStat.isFile()) {
          const ext = entry.match(/\.[^.]+$/)?.[0]?.toLowerCase() || "";
          const relPath = relative(modRoot, fullPath);
          
          let fileType: ModFile["type"] = "other";
          
          if (MOD_FILE_EXTENSIONS.scripts.includes(ext as ".txt")) {
            fileType = "script";
            structure.scriptCount++;
          } else if (MOD_FILE_EXTENSIONS.lua.includes(ext as ".lua")) {
            fileType = "lua";
            structure.luaCount++;
          } else if (MOD_FILE_EXTENSIONS.assets.includes(ext as ".png")) {
            fileType = "asset";
            structure.assetCount++;
          } else if (MOD_FILE_EXTENSIONS.data.includes(ext as ".json")) {
            fileType = "data";
          } else if (MOD_FILE_EXTENSIONS.docs.includes(ext as ".md")) {
            fileType = "doc";
          } else if (entry === "mod.info" || entry === "workshop.txt") {
            fileType = "config";
          }
          
          structure.files.push({
            path: fullPath,
            relativePath: relPath,
            type: fileType,
            size: entryStat.size,
            modified: entryStat.mtime,
          });
        }
      }
    } catch (err) {
      logger.warn(`Failed to scan directory ${dirPath}: ${(err as Error).message}`);
    }
  }

  /**
   * Parse mod.info file.
   */
  private async parseModInfo(modPath: string): Promise<ModMetadata | undefined> {
    const modInfoPaths = [
      join(modPath, "mod.info"),
      join(modPath, "42", "mod.info"),
      join(modPath, "41", "mod.info"),
    ];

    for (const infoPath of modInfoPaths) {
      if (existsSync(infoPath)) {
        try {
          const content = readFileSync(infoPath, "utf-8");
          const metadata: Partial<ModMetadata> = {};
          
          for (const line of content.split("\n")) {
            const match = line.match(/^(\w+)\s*=\s*(.+)$/);
            if (match) {
              const [, key, value] = match;
              const trimmedValue = value.trim();
              
              switch (key.toLowerCase()) {
                case "name":
                  metadata.name = trimmedValue;
                  break;
                case "id":
                  metadata.id = trimmedValue;
                  break;
                case "author":
                  metadata.author = trimmedValue;
                  break;
                case "description":
                  metadata.description = trimmedValue;
                  break;
                case "version":
                  metadata.version = trimmedValue;
                  break;
                case "url":
                  metadata.url = trimmedValue;
                  break;
                case "poster":
                  metadata.poster = trimmedValue;
                  break;
                case "icon":
                  metadata.icon = trimmedValue;
                  break;
                case "require":
                  metadata.require = trimmedValue.split(",").map((s) => s.trim()).filter(Boolean);
                  break;
                case "incompatible":
                  metadata.incompatible = trimmedValue.split(",").map((s) => s.trim()).filter(Boolean);
                  break;
                case "versionmin":
                  metadata.versionMin = trimmedValue;
                  break;
                case "versionmax":
                  metadata.versionMax = trimmedValue;
                  break;
              }
            }
          }
          
          if (metadata.id) {
            return metadata as ModMetadata;
          }
        } catch (err) {
          logger.warn(`Failed to parse mod.info at ${infoPath}: ${(err as Error).message}`);
        }
      }
    }

    // Try discovered layouts
    const layouts = await discoverModLayouts(modPath);
    for (const layout of layouts) {
      if (layout.modInfoPath) {
        try {
          const id = readModInfoId(layout.modInfoPath);
          if (id) {
            return { id, name: layout.moduleName };
          }
        } catch (err) {
          logger.warn(`Failed to read mod.info id: ${(err as Error).message}`);
        }
      }
    }

    return undefined;
  }

  /**
   * List all files in mod directory.
   */
  async listFiles(modPath: string, options?: { pattern?: string; type?: ModFile["type"] }): Promise<ModFile[]> {
    const validatedPath = this.pathManager.validateInputPath(modPath, "dir");
    const structure = await this.inspectMod(validatedPath);
    
    let files = structure.files;
    
    if (options?.type) {
      files = files.filter((f) => f.type === options.type);
    }
    
    if (options?.pattern) {
      const regex = new RegExp(options.pattern);
      files = files.filter((f) => regex.test(f.relativePath));
    }
    
    return files;
  }

  /**
   * Read a file from mod directory.
   */
  async readFile(modPath: string, filePath: string): Promise<FileOperationResult> {
    try {
      const validatedModPath = this.pathManager.validateInputPath(modPath, "dir");
      
      // Ensure filePath doesn't escape mod directory
      const normalizedFile = normalize(filePath);
      if (normalizedFile.startsWith("..") || isAbsolute(normalizedFile)) {
        return { success: false, error: "Invalid file path - must be relative to mod directory" };
      }
      
      const fullPath = join(validatedModPath, normalizedFile);
      
      // Verify file is within mod directory
      const resolvedFull = normalize(fullPath);
      if (!resolvedFull.startsWith(validatedModPath)) {
        return { success: false, error: "File path escapes mod directory" };
      }
      
      if (!existsSync(fullPath)) {
        return { success: false, error: `File not found: ${filePath}` };
      }
      
      const content = readFileSync(fullPath, "utf-8");
      return { success: true, path: fullPath, content };
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Write/create a file in mod directory.
   */
  async writeFile(
    modPath: string,
    filePath: string,
    content: string,
    options?: { createBackup?: boolean; overwrite?: boolean },
  ): Promise<FileOperationResult> {
    try {
      const validatedModPath = this.pathManager.validateInputPath(modPath, "dir");
      
      // Ensure filePath doesn't escape mod directory
      const normalizedFile = normalize(filePath);
      if (normalizedFile.startsWith("..") || isAbsolute(normalizedFile)) {
        return { success: false, error: "Invalid file path - must be relative to mod directory" };
      }
      
      const fullPath = join(validatedModPath, normalizedFile);
      
      // Verify file is within mod directory
      const resolvedFull = normalize(fullPath);
      if (!resolvedFull.startsWith(validatedModPath)) {
        return { success: false, error: "File path escapes mod directory" };
      }
      
      // Check if file exists
      const fileExists = existsSync(fullPath);
      
      if (fileExists && !options?.overwrite) {
        return { success: false, error: `File already exists: ${filePath}. Use overwrite option.` };
      }
      
      // Create backup if requested
      let backupPath: string | undefined;
      if (fileExists && options?.createBackup) {
        backupPath = fullPath + `.backup.${Date.now()}`;
        renameSync(fullPath, backupPath);
      }
      
      // Ensure parent directory exists
      const parentDir = dirname(fullPath);
      await mkdir(parentDir, { recursive: true });
      
      // Atomic write using temp file
      const tempPath = fullPath + `.tmp.${Date.now()}`;
      try {
        await writeFile(tempPath, content, "utf-8");
        renameSync(tempPath, fullPath);
      } catch (writeErr) {
        // Clean up temp file on failure
        try {
          unlinkSync(tempPath);
        } catch {}
        
        // Restore backup if created
        if (backupPath) {
          renameSync(backupPath, fullPath);
        }
        
        throw writeErr;
      }
      
      const result: FileOperationResult = { success: true, path: fullPath };
      if (backupPath) {
        result.backupPath = backupPath;
      }
      return result;
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Delete a file from mod directory.
   */
  async deleteFile(modPath: string, filePath: string, options?: { createBackup?: boolean }): Promise<FileOperationResult> {
    try {
      const validatedModPath = this.pathManager.validateInputPath(modPath, "dir");
      
      const normalizedFile = normalize(filePath);
      if (normalizedFile.startsWith("..") || isAbsolute(normalizedFile)) {
        return { success: false, error: "Invalid file path - must be relative to mod directory" };
      }
      
      const fullPath = join(validatedModPath, normalizedFile);
      const resolvedFull = normalize(fullPath);
      
      if (!resolvedFull.startsWith(validatedModPath)) {
        return { success: false, error: "File path escapes mod directory" };
      }
      
      if (!existsSync(fullPath)) {
        return { success: false, error: `File not found: ${filePath}` };
      }
      
      // Protect critical files
      const baseName = basename(filePath).toLowerCase();
      if (baseName === "mod.info") {
        return { success: false, error: "Cannot delete mod.info - required for mod structure" };
      }
      
      // Create backup if requested
      let backupPath: string | undefined;
      if (options?.createBackup) {
        backupPath = fullPath + `.backup.${Date.now()}`;
        renameSync(fullPath, backupPath);
      } else {
        unlinkSync(fullPath);
      }
      
      const result: FileOperationResult = { success: true, path: fullPath };
      if (backupPath) {
        result.backupPath = backupPath;
      }
      return result;
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Rename/move a file within mod directory.
   */
  async renameFile(
    modPath: string,
    oldPath: string,
    newPath: string,
    _options?: { createBackup?: boolean },
  ): Promise<FileOperationResult> {
    try {
      const validatedModPath = this.pathManager.validateInputPath(modPath, "dir");
      
      const normalizedOld = normalize(oldPath);
      const normalizedNew = normalize(newPath);
      
      if (normalizedOld.startsWith("..") || isAbsolute(normalizedOld)) {
        return { success: false, error: "Invalid old path - must be relative to mod directory" };
      }
      
      if (normalizedNew.startsWith("..") || isAbsolute(normalizedNew)) {
        return { success: false, error: "Invalid new path - must be relative to mod directory" };
      }
      
      const fullOldPath = join(validatedModPath, normalizedOld);
      const fullNewPath = join(validatedModPath, normalizedNew);
      
      const resolvedOld = normalize(fullOldPath);
      const resolvedNew = normalize(fullNewPath);
      
      if (!resolvedOld.startsWith(validatedModPath)) {
        return { success: false, error: "Old path escapes mod directory" };
      }
      
      if (!resolvedNew.startsWith(validatedModPath)) {
        return { success: false, error: "New path escapes mod directory" };
      }
      
      if (!existsSync(fullOldPath)) {
        return { success: false, error: `Source file not found: ${oldPath}` };
      }
      
      if (existsSync(fullNewPath)) {
        return { success: false, error: `Destination already exists: ${newPath}` };
      }
      
      // Ensure parent directory exists
      const parentDir = dirname(fullNewPath);
      await mkdir(parentDir, { recursive: true });
      
      renameSync(fullOldPath, fullNewPath);
      
      return { success: true, path: fullNewPath };
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }

  /**
   * Validate mod structure.
   */
  async validateMod(modPath: string): Promise<ValidationResult> {
    const validatedPath = this.pathManager.validateInputPath(modPath, "dir");
    const structure = await this.inspectMod(validatedPath);
    
    const result: ValidationResult = {
      isValid: true,
      errors: [],
      warnings: [],
      missingRequired: [],
      unexpectedFiles: [],
    };

    // Check required files
    if (!structure.hasModInfo) {
      result.missingRequired.push("mod.info");
      result.errors.push({
        path: validatedPath,
        severity: "error",
        code: "MISSING_MOD_INFO",
        message: "Missing required mod.info file",
        suggestion: "Create a mod.info file with at least 'name' and 'id' fields",
      });
      result.isValid = false;
    } else if (structure.modInfo && !structure.modInfo.id) {
      result.errors.push({
        path: join(validatedPath, "mod.info"),
        severity: "error",
        code: "MISSING_MOD_ID",
        message: "mod.info is missing required 'id' field",
        suggestion: "Add 'id=YourModId' to mod.info",
      });
      result.isValid = false;
    }

    // Check for proper structure
    if (!structure.hasCorrectStructure && structure.files.length > 0) {
      result.warnings.push({
        path: validatedPath,
        severity: "warning",
        code: "NON_STANDARD_STRUCTURE",
        message: "Mod does not follow standard B42 structure (missing common/ folder or version folders)",
        suggestion: "Consider organizing files into common/media/scripts for B42 compatibility",
      });
    }

    // Check for malformed metadata
    if (structure.modInfo) {
      if (structure.modInfo.version && !/^\d+\.\d+(\.\d+)?$/.test(structure.modInfo.version)) {
        result.warnings.push({
          path: join(validatedPath, "mod.info"),
          severity: "warning",
          code: "INVALID_VERSION_FORMAT",
          message: `Version '${structure.modInfo.version}' does not follow semantic versioning`,
          suggestion: "Use format like '1.0.0' or '1.0'",
        });
      }

      if (structure.modInfo.versionMin && !/^\d+(\.\d+)*$/.test(structure.modInfo.versionMin)) {
        result.errors.push({
          path: join(validatedPath, "mod.info"),
          severity: "error",
          code: "INVALID_VERSION_MIN",
          message: `Invalid versionMin: '${structure.modInfo.versionMin}'`,
          suggestion: "Use numeric version like '42.20'",
        });
        result.isValid = false;
      }
    }

    // Check for unexpected top-level files
    const topLevelEntries = await readdir(validatedPath);
    const expectedTopLevel = new Set([
      "mod.info",
      "common",
      "media",
      "lua",
      "scripts",
      "sound",
      "textures",
      "maps",
      "poster.png",
      "icon.png",
      "preview.png",
      "workshop.txt",
      "readme.md",
      "readme.txt",
      "README.md",
      "README.txt",
      ".git",
      ".gitignore",
    ]);

    for (const entry of topLevelEntries) {
      const lowerEntry = entry.toLowerCase();
      if (!expectedTopLevel.has(entry) && !expectedTopLevel.has(lowerEntry) && !entry.startsWith(".")) {
        // Check if it's a version folder
        if (!/^\d+(\.\d+)*$/.test(entry)) {
          result.unexpectedFiles.push(entry);
          result.warnings.push({
            path: join(validatedPath, entry),
            severity: "warning",
            code: "UNEXPECTED_FILE",
            message: `Unexpected top-level entry: ${entry}`,
          });
        }
      }
    }

    // Check for script files without module declaration
    for (const file of structure.files) {
      if (file.type === "script") {
        try {
          const content = readFileSync(file.path, "utf-8");
          if (!content.match(/module\s+\w+\s*\{/)) {
            result.warnings.push({
              path: file.path,
              severity: "warning",
              code: "MISSING_MODULE_DECLARATION",
              message: "Script file missing module declaration",
              suggestion: "Add 'module ModuleName { ... }' wrapper",
            });
          }
        } catch (err) {
          // Skip unreadable files
        }
      }
    }

    return result;
  }

  /**
   * Get mod dependencies from mod.info.
   */
  async getDependencies(modPath: string): Promise<DependencyInfo[]> {
    const validatedPath = this.pathManager.validateInputPath(modPath, "dir");
    const metadata = await this.parseModInfo(validatedPath);
    
    const dependencies: DependencyInfo[] = [];
    
    if (metadata?.require) {
      for (const req of metadata.require) {
        const dep: DependencyInfo = {
          modId: req,
          required: true,
          incompatible: false,
        };
        dependencies.push(dep);
      }
    }
    
    if (metadata?.incompatible) {
      for (const inc of metadata.incompatible) {
        const dep: DependencyInfo = {
          modId: inc,
          required: false,
          incompatible: true,
        };
        dependencies.push(dep);
      }
    }
    
    return dependencies;
  }

  /**
   * Get comprehensive project status.
   */
  async getProjectStatus(modPath: string): Promise<ProjectStatus> {
    const validatedPath = this.pathManager.validateInputPath(modPath, "dir");
    const structure = await this.inspectMod(validatedPath);
    const validation = await this.validateMod(validatedPath);
    const dependencies = await this.getDependencies(validatedPath);
    
    const issues: Array<{ severity: "error" | "warning" | "info"; message: string }> = [];
    
    // Collect errors
    for (const err of validation.errors) {
      issues.push({ severity: "error", message: err.message });
    }
    
    // Collect warnings
    for (const warn of validation.warnings) {
      issues.push({ severity: "warning", message: warn.message });
    }
    
    // Info about structure
    if (structure.hasCorrectStructure) {
      issues.push({ severity: "info", message: "Mod follows standard B42 structure" });
    }
    
    if (structure.buildVersions.length > 0) {
      issues.push({ 
        severity: "info", 
        message: `Supports Build versions: ${structure.buildVersions.join(", ")}` 
      });
    }

    // Find last modified time
    let lastModified: Date | null = null;
    for (const file of structure.files) {
      if (!lastModified || file.modified > lastModified) {
        lastModified = file.modified;
      }
    }

    return {
      modPath: validatedPath,
      metadata: structure.modInfo || null,
      structure,
      validation,
      dependencies,
      issues,
      lastModified,
    };
  }

  /**
   * Patch a file safely with atomic write.
   */
  async patchFile(
    modPath: string,
    filePath: string,
    patchFn: (content: string) => string,
    options?: { createBackup?: boolean },
  ): Promise<FileOperationResult> {
    const readResult = await this.readFile(modPath, filePath);
    
    if (!readResult.success || !readResult.content) {
      return { success: false, error: readResult.error ?? "Failed to read file" };
    }
    
    try {
      const newContent = patchFn(readResult.content);
      const writeOptions: { createBackup?: boolean; overwrite?: boolean } = {};
      if (options?.createBackup !== undefined) {
        writeOptions.createBackup = options.createBackup;
      }
      writeOptions.overwrite = true;
      
      return await this.writeFile(modPath, filePath, newContent, writeOptions);
    } catch (err) {
      return { success: false, error: (err as Error).message };
    }
  }
}

export default ModWorkspaceManager;
