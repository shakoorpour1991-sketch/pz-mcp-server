import { execFile } from "child_process";
import { constants, existsSync, readFileSync, realpathSync } from "fs";
import { access } from "fs/promises";
import { isAbsolute, join, parse, resolve } from "path";
import { homedir } from "os";
import logger from "./logger.js";
import {
  modsDirEnv,
  pzInstallEnvPath,
  workshopDirEnv,
} from "./config.js";

/** A detected path with existence (and optional writability) flags. */
export interface PzPathInfo {
  path: string;
  exists: boolean;
  writable?: boolean;
  writableError?: string;
}

/** Consolidated result of detectAllPaths (detect_pz_paths tool). */
export interface PzPathsResult {
  platform: NodeJS.Platform;
  home: string;
  gameInstall: { path: string | null; source: string };
  userDataDir: PzPathInfo;
  modsDir: PzPathInfo;
  workshopDir: { path: string | null; exists: boolean };
  envOverrides: {
    gamePath?: string;
    modsDir?: string;
    workshopDir?: string;
  };
}

export class PathManager {
  private commonPaths: string[] = [];

  constructor() {
    this.initializeCommonPaths();
  }

  private initializeCommonPaths(): void {
    const home = homedir();

    // Windows paths
    if (process.platform === "win32") {
      this.commonPaths = [
        // Steam
        "C:\\Program Files (x86)\\Steam\\steamapps\\common\\ProjectZomboid",
        "C:\\Program Files\\Steam\\steamapps\\common\\ProjectZomboid",
        "D:\\Steam\\steamapps\\common\\ProjectZomboid",
        "E:\\Steam\\steamapps\\common\\ProjectZomboid",

        // Epic Games
        "C:\\Program Files\\Epic Games\\ProjectZomboid",
        "C:\\Program Files (x86)\\Epic Games\\ProjectZomboid",

        // GOG
        "C:\\Program Files (x86)\\GOG Galaxy\\Games\\ProjectZomboid",
        "C:\\Program Files\\GOG Galaxy\\Games\\ProjectZomboid",
        "C:\\GOG Games\\ProjectZomboid",

        // Standalone
        "C:\\ProjectZomboid",
        "C:\\Games\\ProjectZomboid",
        "D:\\Games\\ProjectZomboid",
      ];
    }
    // Linux paths
    else if (process.platform === "linux") {
      this.commonPaths = [
        // Steam
        join(
          home,
          ".steam/debian-installation/steamapps/common/ProjectZomboid",
        ),
        join(home, ".local/share/Steam/steamapps/common/ProjectZomboid"),
        "/usr/games/ProjectZomboid",

        // Standalone
        join(home, "ProjectZomboid"),
        join(home, "Games/ProjectZomboid"),
        "/opt/ProjectZomboid",
      ];
    }
    // macOS paths
    else if (process.platform === "darwin") {
      this.commonPaths = [
        // Steam
        join(
          home,
          "Library/Application Support/Steam/steamapps/common/ProjectZomboid",
        ),
        "/Applications/ProjectZomboid.app/Contents",

        // Standalone
        join(home, "Games/ProjectZomboid"),
        "/Applications/ProjectZomboid",
      ];
    }

    // WSL support - check Windows drives
    if (process.platform === "linux" && process.env.WSL_DISTRO_NAME) {
      const wslPaths = [
        "/mnt/c/Program Files (x86)/Steam/steamapps/common/ProjectZomboid",
        "/mnt/c/Program Files/Steam/steamapps/common/ProjectZomboid",
        "/mnt/d/Steam/steamapps/common/ProjectZomboid",
        "/mnt/e/Steam/steamapps/common/ProjectZomboid",
        "/mnt/c/Program Files/Epic Games/ProjectZomboid",
        "/mnt/c/Program Files (x86)/Epic Games/ProjectZomboid",
      ];
      this.commonPaths.push(...wslPaths);
    }
  }

  async detectProjectZomboidPath(): Promise<string | null> {
    return (await this.detectProjectZomboidPathDetailed()).path;
  }

  /**
   * detectProjectZomboidPath plus the detection source ('env' | 'steam' |
   * 'common' | null) so detect_pz_paths can tell the user WHY a path was
   * picked (and when nothing was found).
   */
  async detectProjectZomboidPathDetailed(): Promise<{
    path: string | null;
    source: string;
  }> {
    // First check environment variable override
    const envPath = pzInstallEnvPath();
    if (envPath && this.isValidProjectZomboidInstallation(envPath)) {
      return { path: envPath, source: "env" };
    }

    // Then try to detect from Steam registry/config
    const steamPath = await this.detectSteamInstallation();
    if (steamPath) {
      return { path: steamPath, source: "steam" };
    }

    // Then try common installation paths
    for (const path of this.commonPaths) {
      if (this.isValidProjectZomboidInstallation(path)) {
        return { path, source: "common" };
      }
    }

    return { path: null, source: "none" };
  }

  /**
   * Project Zomboid user-data root (saves, config, mods, workshop cache):
   * <home>/Zomboid on every platform. May not exist yet — callers use the
   * `exists` flag.
   */
  detectUserDataDir(): string {
    return join(homedir(), "Zomboid");
  }

  /**
   * The directory PZ loads manually-installed mods from: <home>/Zomboid/mods.
   * Overridable with PZ_MODS_DIR (also settable from the Control Deck). The
   * folder may not exist yet — the mod installer creates it.
   */
  detectModsDir(): string {
    const env = modsDirEnv();
    if (env) return env;
    return join(homedir(), "Zomboid", "mods");
  }

  /**
   * Steam Workshop content dir for PZ (AppID 108600). Resolution order:
   * PZ_WORKSHOP_DIR env → derived from the game install's Steam library →
   * every known Steam library's workshop dir → PZ's own workshop cache under
   * <home>/Zomboid/workshop.
   */
  async detectWorkshopDir(): Promise<string | null> {
    const env = workshopDirEnv();
    if (env) return env;

    // Derive from the game install when it lives inside a Steam library.
    const game = await this.detectProjectZomboidPath();
    if (game) {
      const m = game.match(/^(.*[\\/])steamapps[\\/]common[\\/]ProjectZomboid$/i);
      if (m) {
        return join(m[1], "steamapps", "workshop", "content", "108600");
      }
    }

    // Otherwise scan every Steam library we can find.
    for (const lib of await this.findSteamLibraries()) {
      const p = join(lib, "steamapps", "workshop", "content", "108600");
      if (existsSync(p)) return p;
    }

    // PZ's own workshop cache under the user data dir.
    const cache = join(homedir(), "Zomboid", "workshop");
    if (existsSync(cache)) return cache;
    return null;
  }

  /**
   * Every Steam library root the machine exposes (registry + libraryfolders.vdf
   * on Windows, common roots on Linux/macOS). Used for workshop-dir detection.
   */
  private async findSteamLibraries(): Promise<string[]> {
    const libs: string[] = [];
    const roots: string[] = [];
    if (process.platform === "win32") {
      const reg = await this.readSteamRegistryPath();
      if (reg) roots.push(reg);
      roots.push(
        "C:\\Program Files (x86)\\Steam",
        "C:\\Program Files\\Steam",
      );
    } else if (process.platform === "linux") {
      const home = homedir();
      roots.push(
        join(home, ".steam/debian-installation"),
        join(home, ".local/share/Steam"),
        join(home, ".steam/steam"),
      );
    } else if (process.platform === "darwin") {
      roots.push(join(homedir(), "Library/Application Support/Steam"));
    }

    for (const root of roots) {
      // The Steam root itself is usually library 0.
      libs.push(root);
      const vdf = join(root, "steamapps", "libraryfolders.vdf");
      if (existsSync(vdf)) {
        try {
          libs.push(
            ...this.parseSteamLibraryFolders(readFileSync(vdf, "utf-8")),
          );
        } catch {
          // unreadable vdf — skip
        }
      }
    }
    return [...new Set(libs)];
  }

  /**
   * Consolidated detection used by detect_pz_paths: game install, user-data
   * dir, mods dir and workshop dir in one object, with exists/writable flags.
   */
  async detectAllPaths(): Promise<PzPathsResult> {
    const home = homedir();
    const { path: gamePath, source } =
      await this.detectProjectZomboidPathDetailed();
    const userDataDir = this.detectUserDataDir();
    const modsDir = this.detectModsDir();
    const workshopDir = await this.detectWorkshopDir();
    const writable = await this.isAncestorWritable(modsDir);
    const envGame = pzInstallEnvPath();
    const envMods = modsDirEnv();
    const envWs = workshopDirEnv();
    return {
      platform: process.platform,
      home,
      gameInstall: { path: gamePath, source },
      userDataDir: { path: userDataDir, exists: existsSync(userDataDir) },
      modsDir: {
        path: modsDir,
        exists: existsSync(modsDir),
        writable: writable.writable,
        ...(writable.error !== undefined ? { writableError: writable.error } : {}),
      },
      workshopDir: {
        path: workshopDir,
        exists: workshopDir !== null && existsSync(workshopDir),
      },
      envOverrides: {
        ...(envGame !== undefined ? { gamePath: envGame } : {}),
        ...(envMods !== undefined ? { modsDir: envMods } : {}),
        ...(envWs !== undefined ? { workshopDir: envWs } : {}),
      },
    };
  }

  private async detectSteamInstallation(): Promise<string | null> {
    try {
      if (process.platform === "win32") {
        return await this.detectSteamWindows();
      } else if (process.platform === "linux") {
        return await this.detectSteamLinux();
      } else if (process.platform === "darwin") {
        return await this.detectSteamMacOS();
      }
    } catch (error) {
      logger.warn(
        "Failed to detect Steam installation: %s",
        error instanceof Error ? error.message : String(error),
      );
    }

    return null;
  }

  private async detectSteamWindows(): Promise<string | null> {
    // Try Windows registry first
    const registrySteamPath = await this.readSteamRegistryPath();
    if (registrySteamPath) {
      const defaultPzPath = join(
        registrySteamPath,
        "steamapps",
        "common",
        "ProjectZomboid",
      );
      if (this.isValidProjectZomboidInstallation(defaultPzPath)) {
        return defaultPzPath;
      }

      const libraryFoldersPath = join(
        registrySteamPath,
        "steamapps",
        "libraryfolders.vdf",
      );
      if (existsSync(libraryFoldersPath)) {
        try {
          const configContent = readFileSync(libraryFoldersPath, "utf-8");
          const libraries = this.parseSteamLibraryFolders(configContent);
          for (const library of libraries) {
            const pzPath = join(
              library,
              "steamapps",
              "common",
              "ProjectZomboid",
            );
            if (this.isValidProjectZomboidInstallation(pzPath)) {
              return pzPath;
            }
          }
        } catch (error) {
          logger.warn(
            "Failed to parse Steam library folders: %s",
            error instanceof Error ? error.message : String(error),
          );
        }
      }
    }

    // Fall back to hardcoded paths
    const steamPaths = [
      "C:\\Program Files (x86)\\Steam",
      "C:\\Program Files\\Steam",
    ];

    for (const steamPath of steamPaths) {
      const configPath = join(steamPath, "steamapps", "libraryfolders.vdf");
      if (existsSync(configPath)) {
        try {
          const configContent = readFileSync(configPath, "utf-8");
          const libraries = this.parseSteamLibraryFolders(configContent);

          for (const library of libraries) {
            const pzPath = join(
              library,
              "steamapps",
              "common",
              "ProjectZomboid",
            );
            if (this.isValidProjectZomboidInstallation(pzPath)) {
              return pzPath;
            }
          }
        } catch (error) {
          logger.warn(
            "Failed to parse Steam library folders: %s",
            error instanceof Error ? error.message : String(error),
          );
        }
      }
    }

    return null;
  }

  private async readSteamRegistryPath(): Promise<string | null> {
    try {
      const hkcuPath = await this.queryRegistryValue(
        "HKCU\\Software\\Valve\\Steam",
        "SteamPath",
      );
      if (hkcuPath) {
        return hkcuPath;
      }

      const hklmPath = await this.queryRegistryValue(
        "HKLM\\SOFTWARE\\WOW6432Node\\Valve\\Steam",
        "InstallPath",
      );
      if (hklmPath) {
        return hklmPath;
      }
    } catch (error) {
      logger.warn(
        "Failed to read Steam registry: %s",
        error instanceof Error ? error.message : String(error),
      );
    }

    return null;
  }

  private async queryRegistryValue(
    key: string,
    valueName: string,
  ): Promise<string | null> {
    try {
      const result = await new Promise<{ stdout: string; stderr: string }>(
        (resolve, reject) => {
          execFile(
            "reg",
            ["query", key, "/v", valueName],
            { timeout: 5000 },
            (error, stdout, stderr) => {
              if (error) {
                // `reg query` exits with code 1 when the key/value is not present —
                // an expected miss (we fall through to other detection strategies),
                // not an error worth warning about.
                const code = (error as { code?: unknown }).code;
                if (code === 1) {
                  resolve({ stdout, stderr });
                  return;
                }
                reject(error);
                return;
              }
              resolve({ stdout, stderr });
            },
          );
        },
      );
      const lines = result.stdout.split("\n");
      for (const line of lines) {
        const trimmed = line.trim();
        const regex = new RegExp(`^${valueName}\\s+REG_SZ\\s+(.+)$`);
        const match = trimmed.match(regex);
        if (match) {
          return match[1].trim();
        }
      }
    } catch (error) {
      logger.warn(
        "Steam registry query failed: %s",
        error instanceof Error ? error.message : String(error),
      );
    }
    return null;
  }

  private async detectSteamLinux(): Promise<string | null> {
    const home = homedir();
    const steamPaths = [
      join(home, ".steam/debian-installation"),
      join(home, ".local/share/Steam"),
      join(home, ".steam/steam"),
    ];

    for (const steamPath of steamPaths) {
      const configPath = join(steamPath, "steamapps", "libraryfolders.vdf");
      if (existsSync(configPath)) {
        try {
          const configContent = readFileSync(configPath, "utf-8");
          const libraries = this.parseSteamLibraryFolders(configContent);

          for (const library of libraries) {
            const pzPath = join(
              library,
              "steamapps",
              "common",
              "ProjectZomboid",
            );
            if (this.isValidProjectZomboidInstallation(pzPath)) {
              return pzPath;
            }
          }
        } catch (error) {
          logger.warn(
            "Failed to parse Steam library folders: %s",
            error instanceof Error ? error.message : String(error),
          );
        }
      }
    }

    return null;
  }

  private async detectSteamMacOS(): Promise<string | null> {
    const home = homedir();
    const steamPath = join(home, "Library/Application Support/Steam");
    const configPath = join(steamPath, "steamapps", "libraryfolders.vdf");

    if (existsSync(configPath)) {
      try {
        const configContent = readFileSync(configPath, "utf-8");
        const libraries = this.parseSteamLibraryFolders(configContent);

        for (const library of libraries) {
          const pzPath = join(library, "steamapps", "common", "ProjectZomboid");
          if (this.isValidProjectZomboidInstallation(pzPath)) {
            return pzPath;
          }
        }
      } catch (error) {
        logger.warn(
          "Failed to parse Steam library folders: %s",
          error instanceof Error ? error.message : String(error),
        );
      }
    }

    return null;
  }

  private parseSteamLibraryFolders(content: string): string[] {
    const libraries: string[] = [];

    // Parse VDF format to extract library paths
    const lines = content.split("\n");
    let inLibraryFolders = false;

    for (const line of lines) {
      const trimmed = line.trim();

      if (trimmed === '"libraryfolders"') {
        inLibraryFolders = true;
        continue;
      }

      if (inLibraryFolders && trimmed.includes('"path"')) {
        const match = trimmed.match(/"path"\s*"([^"]+)"/);
        if (match) {
          let path = match[1];
          // Handle escaped backslashes
          path = path.replace(/\\\\/g, "\\");
          libraries.push(path);
        }
      }
    }

    return libraries;
  }

  isValidProjectZomboidInstallation(path: string): boolean {
    if (!existsSync(path)) {
      return false;
    }

    // Check for key Project Zomboid files/directories
    const requiredPaths = [join(path, "media"), join(path, "media", "scripts")];

    // Check for executable (varies by platform)
    const executables = [
      join(path, "ProjectZomboid64.exe"), // Windows 64-bit
      join(path, "ProjectZomboid32.exe"), // Windows 32-bit
      join(path, "ProjectZomboid.exe"), // Windows generic
      join(path, "projectzomboid.sh"), // Linux
      join(path, "ProjectZomboid"), // Linux binary
      join(path, "Contents", "MacOS", "ProjectZomboid"), // macOS
    ];

    const hasExecutable = executables.some((exe) => existsSync(exe));
    const hasRequiredPaths = requiredPaths.every((reqPath) =>
      existsSync(reqPath),
    );

    return hasExecutable && hasRequiredPaths;
  }

  /**
   * Validate a user-supplied file path before it is used for filesystem access.
   * Guards against path traversal (audit P1 #10): rejects empty/relative paths,
   * NUL bytes, and any '..' segment. Verifies the target exists.
   *
   * @param input raw path from an MCP tool argument
   * @param kind expected target type ('dir' or 'file')
   * @returns the validated, resolved absolute path
   * @throws Error describing the rejection
   */
  validateInputPath(input: string, kind: "dir" | "file" = "dir"): string {
    if (!input || input.trim() === "") {
      throw new Error("Path must not be empty");
    }

    if (input.includes("\0")) {
      throw new Error("Path contains invalid characters");
    }

    // Reject traversal sequences outright — no path may escape via '..'
    const segments = input.split(/[\\/]+/).filter((seg) => seg.length > 0);
    if (segments.includes("..")) {
      throw new Error(`Path must not contain '..' segments: ${input}`);
    }

    if (!isAbsolute(input)) {
      throw new Error(`Path must be absolute: ${input}`);
    }

    let resolved: string;
    try {
      resolved = realpathSync(input);
    } catch {
      resolved = resolve(input);
    }

    if (kind === "dir" && !existsSync(resolved)) {
      throw new Error(`Directory does not exist: ${resolved}`);
    }
    if (kind === "file" && !existsSync(resolved)) {
      throw new Error(`File does not exist: ${resolved}`);
    }

    return resolved;
  }

  /**
   * Walk up from `target` to the first existing ancestor directory and check
   * whether it is writable (W_OK via fs.access). Returns a verdict object
   * with `writable` boolean and, when not writable, an `error` message.
   * Used by export_mod_script dry-run to warn early (audit D6).
   */
  async isAncestorWritable(
    target: string,
  ): Promise<{ writable: boolean; error?: string }> {
    let current = target;
    for (;;) {
      try {
        await access(current, constants.W_OK);
        return { writable: true };
      } catch {
        // not writable or doesn't exist — walk up
      }
      const parent = join(current, "..");
      if (parent === current) break;
      current = parent;
    }
    // Fallback: check filesystem root explicitly
    try {
      const root = parse(target).root;
      if (root) {
        await access(root, constants.W_OK);
        return { writable: true };
      }
    } catch (err) {
      return { writable: false, error: (err as Error).message };
    }
    return { writable: false, error: "No writable ancestor found" };
  }
}
