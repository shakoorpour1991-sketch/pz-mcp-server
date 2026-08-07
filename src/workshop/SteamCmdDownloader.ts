/**
 * SteamCMD downloader for Project Zomboid workshop items (M2).
 *
 * Downloads are Valve-sanctioned via the `steamcmd` binary (mirrors are dead).
 * Ground truths from docs/workshop-browser-feature.md §5:
 *   - per-download temp dir via `+force_install_dir <tmp>` placed NEXT to the
 *     workshop dir (same-filesystem rename; immune to LOCALAPPDATA redirects)
 *   - temp dir is ALWAYS deleted (a `finally`); orphaned temps accumulate
 *   - `+force_install_dir` before `+login` before `+workshop_download_item`
 *   - Windows success line: `Success. Downloaded item N to "path" (NNNN bytes)`
 *   - `No subscription` on anonymous login → actionable error, never argv passwords
 *   - SteamCMD exit code 7 is transient → retry 3× with backoff
 *
 * Security stance: the mod lands in a workspace dir (workshop content dir or
 * PZ_WORKSHOP_DIR) — it is READ/ANALYZED later, never executed, and never
 * auto-installed into the live game.
 */
import { spawn } from "child_process";
import {
  existsSync,
  mkdirSync,
  rmSync,
  renameSync,
  readdirSync,
  statSync,
  statfsSync,
} from "fs";
import { dirname, join } from "path";
import { homedir } from "os";
import { PZ_APPID } from "./SteamWorkshopClient.js";
import { PathManager } from "../utils/PathManager.js";
import logger from "../utils/logger.js";

export interface SteamCmdRunResult {
  code: number;
  output: string;
}

export interface DownloadResult {
  id: string;
  downloadedPath: string;
  bytes: number;
  elapsedMs: number;
  attempts: number;
  tempDir: string;
  note?: string;
}

export interface SteamCmdDownloaderOptions {
  /** Explicit steamcmd binary path (else env STEAMCMD_PATH, else common paths). */
  steamCmdPath?: string;
  /** Explicit workshop output dir (else env PZ_WORKSHOP_DIR, else Steam install). */
  workshopDir?: string;
  /** Injectable process runner for tests: (cmd, args) => {code, output}. */
  runner?: (cmd: string, args: string[]) => Promise<SteamCmdRunResult>;
  /** Common installation paths to probe (defaults to COMMON_STEAMCMD_PATHS for the platform). */
  commonSteamCmdPaths?: string[];
  pathManager?: PathManager;
  /** Clock injection (tests). */
  now?: () => number;
  /** Free-space probe on the download drive (tests). Default: fs.statfsSync. */
  diskFree?: (dir: string) => number;
}

const COMMON_STEAMCMD_PATHS: Record<string, string[]> = {
  win32: [
    "C:\\steamcmd\\steamcmd.exe",
    "C:\\Program Files (x86)\\Steam\\steamcmd.exe",
    "C:\\Program Files\\Steam\\steamcmd.exe",
    "D:\\steamcmd\\steamcmd.exe",
    "D:\\Steam\\steamcmd.exe",
    "E:\\steamcmd\\steamcmd.exe",
  ],
  linux: ["/usr/games/steamcmd", join(homedir(), ".steam/steamcmd/steamcmd.sh")],
  darwin: [
    "/Applications/Steam/steamcmd",
    join(homedir(), "steamcmd/steamcmd"),
  ],
};

export class SteamCmdDownloader {
  private steamCmdPath: string | null;
  private workshopDir: string | null;
  private runner: (cmd: string, args: string[]) => Promise<SteamCmdRunResult>;
  private commonSteamCmdPaths: string[];
  private pathManager: PathManager;
  private now: () => number;
  private diskFree: (dir: string) => number;

  constructor(opts: SteamCmdDownloaderOptions = {}) {
    this.steamCmdPath = opts.steamCmdPath ?? null;
    this.workshopDir = opts.workshopDir ?? null;
    this.commonSteamCmdPaths =
      opts.commonSteamCmdPaths ?? COMMON_STEAMCMD_PATHS[process.platform] ?? [];
    this.runner =
      opts.runner ??
      ((cmd, args) =>
        new Promise((resolveRun, reject) => {
          const child = spawn(cmd, args, {
            windowsHide: true,
            stdio: ["ignore", "pipe", "pipe"],
          });
          let output = "";
          const sink = (d: Buffer) => {
            output += d.toString();
          };
          child.stdout.on("data", sink);
          child.stderr.on("data", sink);
          child.on("error", (err) => reject(err));
          child.on("close", (code) =>
            resolveRun({ code: code ?? -1, output }),
          );
        }));
    this.pathManager = opts.pathManager ?? new PathManager();
    this.now = opts.now ?? Date.now;
    this.diskFree =
      opts.diskFree ??
      ((dir) => {
        const st = statfsSync(dir);
        return st.bavail * st.bsize;
      });
  }

  /** Locate the steamcmd binary. Throws an actionable error when absent. */
  async resolveSteamCmdPath(): Promise<string> {
    if (this.steamCmdPath) return this.steamCmdPath;
    const envPath = process.env.STEAMCMD_PATH;
    if (envPath && existsSync(envPath)) return envPath;
    const candidates = this.commonSteamCmdPaths;
    for (const p of candidates) {
      if (existsSync(p)) return p;
    }
    throw new Error(
      "SteamCMD not found. Install it (https://developer.valvesoftware.com/wiki/SteamCMD) and either set STEAMCMD_PATH, drop steamcmd.exe in C:\\steamcmd, or place it in your Steam directory.",
    );
  }

  /** Resolve the workshop output dir (env → Steam install → error). */
  async resolveWorkshopDir(): Promise<string> {
    if (this.workshopDir) return this.workshopDir;
    const envDir = process.env.PZ_WORKSHOP_DIR;
    if (envDir) return envDir;
    const gamePath = await this.pathManager.detectProjectZomboidPath();
    if (gamePath) {
      // <lib>/steamapps/common/ProjectZomboid → <lib>/steamapps/workshop/content/108600
      const idx = gamePath.indexOf("steamapps");
      if (idx > 0) {
        const lib = gamePath.slice(0, idx).replace(/[\\/]+$/, "");
        return join(lib, "steamapps", "workshop", "content", PZ_APPID);
      }
    }
    throw new Error(
      "Could not determine the workshop content directory. Set PZ_WORKSHOP_DIR to the folder where mods should be downloaded (e.g. D:\\Steam\\steamapps\\workshop\\content\\108600).",
    );
  }

  /**
   * Download a workshop item via SteamCMD into the workspace dir.
   * Temp dir next to the target, always removed. Retries exit code 7.
   */
  async download(
    id: string,
    onPhase?: (phase: string) => void,
    opts: { expectedBytes?: number } = {},
  ): Promise<DownloadResult> {
    const t0 = this.now();
    const workshopDir = await this.resolveWorkshopDir();
    mkdirSync(workshopDir, { recursive: true });

    // Already present (e.g. subscribed via Steam, or a previous download)?
    // Skip the download entirely — idempotent re-analysis without network.
    // Checked FIRST: no download happens on this path, so no disk space or
    // steamcmd is needed. (Also checked before steamcmd resolution.)
    const existing = join(workshopDir, id);
    if (existsSync(existing)) {
      logger.info({ id }, "workshop item already present — skipping download");
      onPhase?.("already present — skipping download");
      return {
        id,
        downloadedPath: existing,
        bytes: this.dirSize(existing),
        elapsedMs: this.now() - t0,
        attempts: 0,
        tempDir: "",
        note: "already present locally — download skipped",
      };
    }

    // Disk-space guard: refuse before downloading if the known item size
    // leaves less than a 1GB safety margin on the target drive.
    const expectedBytes = opts.expectedBytes ?? 0;
    if (expectedBytes > 0) {
      try {
        const free = this.diskFree(workshopDir);
        const margin = 1024 * 1024 * 1024; // 1 GiB
        if (free < expectedBytes + margin) {
          throw new Error(
            `Not enough free disk space on ${dirname(workshopDir)}: need ~${formatSize(expectedBytes + margin)} free, only ${formatSize(free)} available.`,
          );
        }
      } catch (err) {
        if (
          err instanceof Error &&
          /Not enough free disk space/.test(err.message)
        ) {
          throw err;
        }
        logger.warn(
          "disk-space probe failed (continuing): %s",
          err instanceof Error ? err.message : String(err),
        );
      }
    }

    const steamCmd = await this.resolveSteamCmdPath();

    // Temp dir beside the output: same filesystem for the final rename.
    const tempDir = join(
      dirname(workshopDir),
      `.steamcmd-tmp-${id}-${this.now()}`,
    );

    const loginArgs = this.loginArgs();
    const baseArgs = [
      "+force_install_dir",
      tempDir,
      ...loginArgs,
      "+workshop_download_item",
      PZ_APPID,
      id,
      "+quit",
    ];

    const maxAttempts = 3;
    let attempts = 0;
    try {
      for (;;) {
        attempts++;
        if (attempts > maxAttempts) {
          throw new Error(
            `SteamCMD failed ${maxAttempts}× with transient exit code 7. Try again later.`,
          );
        }
        if (attempts > 1) {
          logger.warn(
            { id, attempt: attempts },
            "retrying steamcmd (previous exit code 7)",
          );
          await new Promise((r) => setTimeout(r, 1500 * attempts));
        }
        onPhase?.(`steamcmd attempt ${attempts}/${maxAttempts}`);

        const { code, output } = await this.runner(steamCmd, baseArgs);
        const parsed = this.parseOutput(output);
        if (parsed.error) throw parsed.error;
        if (code === 0 || parsed.downloaded) {
          const src = join(
            tempDir,
            "steamapps",
            "workshop",
            "content",
            PZ_APPID,
            id,
          );
          if (!existsSync(src)) {
            throw new Error(
              `SteamCMD reported success but content was not found at ${src}.`,
            );
          }
          const dest = join(workshopDir, id);
          rmSync(dest, { recursive: true, force: true });
          renameSync(src, dest);
          const bytes = parsed.bytes || this.dirSize(dest);
          onPhase?.(`completed (${bytes} bytes)`);
          return {
            id,
            downloadedPath: dest,
            bytes,
            elapsedMs: this.now() - t0,
            attempts,
            tempDir,
            ...(parsed.note ? { note: parsed.note } : {}),
          };
        }
        if (code === 7) {
          // Transient SteamCMD failure — loop retries with backoff.
          logger.warn({ id, attempt: attempts }, "steamcmd exit code 7");
          continue;
        }
        throw new Error(`SteamCMD exited with code ${code}${this.tail(output)}`);
      }
    } finally {
      rmSync(tempDir, { recursive: true, force: true });
    }
  }

  /** `+login anonymous`, or credentials from env (never argv literals in code). */
  private loginArgs(): string[] {
    const user = process.env.STEAMCMD_USER;
    const pass = process.env.STEAMCMD_PASS;
    if (user) {
      if (!pass) {
        throw new Error(
          "STEAMCMD_USER is set but STEAMCMD_PASS is empty — +login would fail with an empty password. Set both, or unset STEAMCMD_USER to use anonymous.",
        );
      }
      return ["+login", user, pass];
    }
    return ["+login", "anonymous"];
  }

  private parseOutput(output: string): {
    downloaded: boolean;
    bytes: number;
    note?: string;
    error?: Error;
  } {
    const success =
      output.match(
        /Success\. Downloaded item \d+ to "([^"]+)" \(\s*(\d+)\s*bytes\)/,
      ) || output.match(/Download item \d+ result: OK/);
    if (success) {
      const noteMatch = output.match(
        /Success\. Downloaded item [^"]+ to "([^"]+)"/,
      );
      return {
        downloaded: true,
        bytes: success[2] ? parseInt(success[2], 10) : 0,
        ...(noteMatch ? { note: noteMatch[1] } : {}),
      };
    }
    if (/No subscription/i.test(output)) {
      return {
        downloaded: false,
        bytes: 0,
        error: new Error(
          "SteamCMD (anonymous) was rejected for this item — it requires an account that owns a subscription. Subscribe in Steam, or set STEAMCMD_USER/STEAMCMD_PASS (never on the command line).",
        ),
      };
    }
    if (/Invalid workshop item|item not found|doesn't exist/i.test(output)) {
      return {
        downloaded: false,
        bytes: 0,
        error: new Error(
          `SteamCMD could not find workshop item (invalid id or private item).`,
        ),
      };
    }
    return { downloaded: false, bytes: 0 };
  }

  private tail(output: string, n = 400): string {
    const tail = output.trim().split("\n").slice(-6).join(" | ").trim();
    return tail ? ` — ${tail.slice(0, n)}` : "";
  }

  private dirSize(dir: string): number {
    try {
      let total = 0;
      for (const name of readdirSync(dir)) {
        const p = join(dir, name);
        const st = statSync(p);
        total += st.isDirectory() ? this.dirSize(p) : st.size;
      }
      return total;
    } catch {
      return 0;
    }
  }
}

function formatSize(n: number): string {
  const units = ["B", "KB", "MB", "GB"];
  let i = 0;
  let v = n;
  while (v >= 1024 && i < units.length - 1) {
    v /= 1024;
    i++;
  }
  return `${v.toFixed(v >= 10 || i === 0 ? 0 : 1)} ${units[i]}`;
}
