# Mod Workspace / Project Manager

The Mod Workspace turns the server into a proper development environment for
**creating and managing** Project Zomboid mods, not just analyzing existing
ones. It is a rooted, safety-first project abstraction (`src/workspace/`) with
an MCP tool surface (`workspace_*`) on top.

Future features — automated game launching/testing, watch mode, autonomous mod
development — build on this layer instead of poking at raw filesystem paths.

---

## The workspace root

Every file operation is strictly confined to a configured **workspace root**:

- `PZ_MCP_WORKSPACE_DIR` env var, or
- default `<dataDir>/workspaces` (next to the SQLite data; self-contained).

Projects are folders directly under the root. All tool paths are
**workspace-relative** — clients never pass absolute paths, and an absolute
path is rejected even if it happens to point inside the root.

## Safety model

| Guarantee | How |
|---|---|
| No path traversal | `..` segments, absolute paths, drive letters, null bytes and empty paths are rejected before any disk access |
| No symlink escapes | Existing paths are `realpath`-checked; a link inside the root pointing outside it is refused (including on writes via the nearest existing ancestor) |
| No silent overwrites | `write_file` requires `overwrite:true`; `create` never edits existing files (only adds missing scaffold); `rename` refuses to clobber unless asked |
| Explicit intent for destruction | `delete_file` requires `force:true` (+ `recursive:true` for non-empty dirs) and previews via `dryRun` (default) |
| Atomic writes | Every write goes through a temp file + rename in the same directory — no torn files, no partial content on failure |
| Safe patching | `patch_file` matches exact context; any patch that matches nothing (or a count mismatch) aborts the whole call and nothing is written |
| Structured errors | `WorkspaceError` codes (`PATH_ESCAPE`, `NOT_FOUND`, `ALREADY_EXISTS`, `NO_MATCH`, `FORCE_REQUIRED`, …) map to MCP error categories through the shared `toMcpError` funnel |

## Scaffolding (intelligent, B42-native)

`workspace_create` generates a valid Build-42 layout from the PZwiki structure
documented in `knowledge-base/wiki/Mod-structure.md`:

```
<project>/
├── mod.info                # name, id, author, description, version, poster, require=
├── workshop.txt            # in-game Steam uploader title/description
├── poster.png              # valid PNG placeholder (binary-safe)
├── common/
│   └── media/              # B42: common/ is mandatory, even if empty
└── 42/                     # numeric build-version folder
    └── media/
        ├── scripts/        # + optional generated starter item script
        ├── lua/server/     # + sample B42-safe event hook (full template)
        ├── sound/
        ├── textures/
        └── maps/
```

`template` selects `minimal` (metadata + scripts dir) or `full` (adds
lua/sound/textures/maps + a sample server script). `sampleItem:true` generates
a real starter item script through the existing `ScriptGenerator` — scaffolding
reuses the generator, not hard-coded text.

Inspection/validation reuse the existing engine: `workspace_inspect` calls
`ModAnalyzer.analyzeMod`, metadata comes from `ProjectZomboidParser.parseModInfo`,
and `require=` ids are resolved against the DB mods table.

---

## Tool reference

### `workspace_list`
List project folders under the workspace root with their `mod.info` presence.

### `workspace_create`
Scaffold a new B42 mod project.

| Param | Type | Required | Description |
|---|---|---|---|
| `name` | string | Yes | Project folder name (single segment, no slashes) |
| `modId` | string | Yes | Unique mod id for `mod.info` (alphanumeric + `_`/`-`) |
| `modName` | string | No | Display name (default: modId) |
| `author` | string | No | Mod author |
| `description` | string | No | Mod description |
| `version` | string | No | Mod version (default `1.0`) |
| `buildVersion` | string | No | Numeric version folder (default `42`) |
| `template` | enum | No | `minimal` \| `full` (default `full`) |
| `requires` | string[] | No | Other mod ids for `require=` |
| `sampleItem` | boolean | No | Also generate a starter item script via `generate_script` |
| `includePoster` | boolean | No | Write `poster.png` (default true) |
| `overwrite` | boolean | No | If the folder exists, only add missing scaffold (never edits existing files) |
| `dryRun` | boolean | No | Preview the scaffold, no disk changes |

### `workspace_inspect`
Full structured inspection — metadata, supported builds, dependencies
(including missing ones), content types, file counts, and every validation
error/warning (same engine as `analyze_mod`).

| Param | Type | Required | Description |
|---|---|---|---|
| `project` | string | Yes | Project name |
| `checkDependencies` | boolean | No | Resolve `require=` against known mods (default true) |
| `includeFileList` | boolean | No | Include the recursive file list |

### `workspace_status`
Fast status: metadata, file/script/lua counts, content types, and a single
`ok` verdict. No script parsing.

### `workspace_validate`
Structure + metadata validation: `mod.info` presence and well-formedness
(missing `id`/`name`, duplicate keys), B42 layout (`common/`, version folder,
content), and dependency resolution.

### `workspace_list_files`
Recursively list files/dirs inside a project (`path` optional, `recursive`,
`maxDepth`, `maxEntries` cap).

### `workspace_read_file`
Read a text file (`project` + workspace-relative `path`).

### `workspace_write_file`
Write/create a file atomically. `overwrite` (default false) must be true to
replace; `dryRun` previews.

### `workspace_patch_file`
Context-based safe patching. `patches` is an ordered array of
`{ oldText, newText?, count?, description? }`; all must match or nothing is
written.

### `workspace_delete_file`
Delete a file or dir. Requires `force:true`; `recursive:true` for non-empty
dirs; `dryRun` previews by default. The workspace root itself can never be
addressed for deletion.

### `workspace_rename_file`
Rename/move within the project (`from`, `to`, `overwrite`).

---

## Examples

### Create a mod from scratch

```text
workspace_create  name=MyFirstMod  modId=my_first_mod  modName="My First Mod"
                  author="You"  description="Learning to mod B42."
                  template=full  sampleItem=true

workspace_status  project=MyFirstMod          # metadata + counts + verdict
workspace_validate project=MyFirstMod         # ✅ valid

workspace_list_files project=MyFirstMod       # see the scaffold tree
```

### Iterate on content

```text
# Write a new item script directly
workspace_write_file  project=MyFirstMod  path=42/media/scripts/my_items.txt
                      content='module MyFirstMod { item ... }'  overwrite=false

# Patch an existing file surgically (all-or-nothing)
workspace_patch_file  project=MyFirstMod  path=mod.info
                      patches=[{oldText:"version=1.0", newText:"version=1.1",
                                description:"bump version"}]

# Move a texture into common/ (shared assets live in common/media)
workspace_rename_file project=MyFirstMod  from=42/media/textures/wood.png
                      to=common/media/textures/wood.png

# Full re-inspection after changes
workspace_inspect  project=MyFirstMod  checkDependencies=true  includeFileList=true
```

### End-to-end AI workflow

```text
1. workspace_create  name=BlacksmithPack modId=blacksmith_pack template=full
2. search_vanilla    query="anvil"                      # study vanilla balance
3. generate_script   type=item name=BlacksmithAnvil     # build the item
4. workspace_write_file project=BlacksmithPack
        path=42/media/scripts/blacksmith_pack_items.txt content=<script>
5. workspace_patch_file project=BlacksmithPack path=mod.info
        patches=[{oldText:"version=1.0", newText:"version=1.0", count:1}]
6. validate_script  content=<script> type=item          # syntax + references
7. workspace_validate project=BlacksmithPack            # structure still valid
8. workspace_inspect project=BlacksmithPack             # final report + deps
```

---

## Tests

`tests/unit/workspaceManager.unit.test.js` covers: scaffolding (minimal/full,
dry-run, overwrite semantics, binary-safe poster), file round-trips, atomic
writes (no temp leftovers), patch safety (no-match/count-mismatch aborts),
destructive-op guards, rename/delete rules, path-traversal + symlink/junction
escape rejection, the checked-in valid B42 fixture
(`tests/fixtures/mods/b42_mod/`), invalid-mod detection, dependency resolution
against the DB, and the tool registry surface.

Run: `npm test` (whole suite) or `node --test tests/unit/workspaceManager.unit.test.js`.
