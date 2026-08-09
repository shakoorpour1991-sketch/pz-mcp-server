---
title: "Project Zomboid Build 42 Entities Catalog Research"
build: "42.20"
tags: [pz, modding, build42, entities]
---

# Project Zomboid Build 42 — Entities Catalog Research

> **Scope:** Build 42.20 (stable). Catalog of the **Entity** script system under `media/scripts/generated/entities/` — the Build 42 replacement for B41-style world-objects: all 13 categories, entity block anatomy, and the component inventory. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Category Catalog](#3-category-catalog)
4. [Entity Block Anatomy](#4-entity-block-anatomy)
5. [Component Inventory](#5-component-inventory)
6. [Workstations & Entity Recipes](#6-workstations--entity-recipes)
7. [Modding Opportunities](#7-modding-opportunities)

---

## 1. Overview

- The **entities** directory holds **226 script files** defining **219 `entity` blocks** across **13 categories** (`admin`, `agricultural`, `animals`, `appliances`, `barricades`, `blacksmith`, `fences_low`, `furniture`, `misc`, `outdoors`, `pottery`, `stairs`, `walls`).
- An `entity` is a data-driven world object assembled from **components** — most importantly `SpriteConfig` (visuals), `UiConfig` (tool panel), and `CraftRecipe` (how it's built — the entity *is* its craft recipe).
- Many categories are structured as `craftRecipes/` (or `workstations/`) subfolders rather than flat files; workstations (forges, mills, looms, coffee machines) are entities with `CraftBench` components.
- Entity recipes support the full recipe grammar (timed actions, `SkillRequired`, `xpAward`, tags, fluid inputs) — see the Crafting & Skills research doc.

---

## 2. Core Files

| Path | Purpose |
|------|---------|
| `media/scripts/generated/entities/` | All entity scripts (226 files / 219 entity blocks) |
| `media/scripts/generated/entities/furniture/` | Largest furniture set (52 files — carpentry beds, tables, chairs, shelves, bookcases, coffins) |
| `media/scripts/generated/entities/walls/` | Building envelope set (66 files — brick/log/metal walls, floors, door/window frames) |
| `media/scripts/generated/entities/outdoors/` | Outdoor constructions (24 files — rain collectors, shelters, campfire, composters, skull poles) |
| `media/scripts/generated/entities/blacksmith/` | Forge/furnace/standing drill entities + craftRecipes (28 files) |
| `media/scripts/generated/entities/*/workstations/` | Workstation entities with `CraftBench` (forges, looms, mills, dryers, appliances) |
| `media/scripts/generated/entities/*/craftRecipes/` | Entity-bound recipe files |
| `media/scripts/generated/entities/*/cratRecipes/` | Pottery recipes folder (vanilla folder-name typo, verified) |

---

## 3. Category Catalog

Verified file counts per category:

| Category | Files | Contents (verified) |
|----------|:-----:|---------------------|
| `admin` | 1 | `entity_piano.txt` (the Piano entity) |
| `agricultural` | 17 | `craftRecipes/` (fiber, flax) + `workstations/` (drying racks, herb rack, loom, stone mill/quern) |
| `animals` | 10 | `craftRecipes/` (butter churn, leather prep, spinning wheel) + `workstations/` |
| `appliances` | 7 | `workstations/` (coffee machine, toaster, fuel pump, water dispenser, well) |
| `barricades` | 3 | `entity_barricade_metalbar.txt`, `_metalsheet.txt`, `_planks.txt` |
| `blacksmith` | 28 | `craftRecipes/` (14 recipe files: furnaces, tools, armor, blades, heads…) + `workstations/` (forges, furnaces, anvils, standing drill, bandsaw) |
| `fences_low` | 3 | `entity_logfence.txt`, `entity_logfenceopen.txt`, `entity_stickfence.txt` |
| `furniture` | 52 | `entity_carpentry_*`: beds, bookcases, chairs (lvl1–3), coffins, crates, shelves, tables, table drawers, bar elements |
| `misc` | 3 | `entity_brickpallet.txt`, `entity_goldpallet.txt`, `entity_haybundles.txt` |
| `outdoors` | 24 | amphora, campfire, chopping block, composter, lean-to/leather/tarp shelters, rain collectors (+tarp), sandbag wall, skull poles, stone cairn, crosses |
| `pottery` | 9 | `cratRecipes/` (pottery wheel recipes) + `workstations/` |
| `stairs` | 3 | `entity_carpentry_stairs.txt`, `entity_log_stairs.txt`, `entity_welding_stairs.txt` |
| `walls` | 66 | brick walls/doorframes/windowframes (lvl1–2), log walls, metal fences, floor variants (dirt/gravel/sand) |

---

## 4. Entity Block Anatomy

Verified example — `entity_carpentry_bed.txt` (furniture):

```txt
module Base
{
    entity Wood_Bed
    {
        component UiConfig
        {
            xuiSkin = default,
            entityStyle = ES_Wood_Bed,
            uiEnabled = false,
        }
        component SpriteConfig
        {
            face S
            {
                layer
                {
                    row = carpentry_02_72 carpentry_02_73,
                }
            }
            face E
            {
                layer
                {
                    row = carpentry_02_75,
                    row = carpentry_02_74,
                }
            }
        }
        component CraftRecipe
        {
            timedAction = BuildWallHammer,
            time = 50,
            SkillRequired = Woodwork:4,
            xpAward = Woodwork:40,
            category = Furniture,
            Tags = Carpentry;Furniture,
            Tooltip = Tooltip_craft_bedDesc,
            inputs
            {
                item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeVeryLight],
                item 6 [Base.Plank],
                item 4 [Base.Nails],
                item 1 [Base.Mattress],
            }
        }
        ...
    }
}
```

Key anatomy:

- **`component UiConfig`** — `xuiSkin` + `entityStyle` (XUI style id, e.g. `ES_Wood_Bed`) + `uiEnabled` (whether the tool panel shows).
- **`component SpriteConfig`** — per-face (`S`, `E`, …) sprite layers; `row = <tileId>` entries (multiple rows = stacked layers).
- **`component CraftRecipe`** — the entity's construction recipe: timed action, `SkillRequired` (e.g. `Woodwork:4`), `xpAward`, `category`, `Tags`, `Tooltip`, and full `inputs`/`outputs`.

The Piano (`entities/admin/entity_piano.txt`) shows the pure-visual pattern: `SpriteConfig` faces only (`recreational_01_13`, etc.) with no craft recipe.

---

## 5. Component Inventory

Verified occurrence counts across all entity files:

| Component | Count | Meaning |
|-----------|:-----:|---------|
| `UiConfig` | 215 | Tool-panel/UI binding |
| `SpriteConfig` | 210 | World visuals (per-face layers) |
| `CraftRecipe` | 202 | How the entity is built/placed |
| `CraftBench` | 35 | Workstation capability (hosts recipes) |
| `ContextMenuConfig` | 16 | Right-click menu customization |
| `FluidContainer` | 11 | Fluid storage (see Fluid System doc) |
| `CraftBenchSounds` | 9 | Workstation audio |
| `WallCoveringConfig` | 8 | Wall coverings (paint/plaster) |
| `SpriteOverlayConfig` | 8 | Sprite overlays (states) |
| `Resources` | 7 | Resource definitions |
| `DryingCraftLogic` | 7 | Drying rack logic |

The near-1:1 `UiConfig`(215)/`SpriteConfig`(210)/`CraftRecipe`(202) counts reflect the standard entity triad: every entity is visual + UI + buildable.

---

## 6. Workstations & Entity Recipes

- **Workstations** (35 `CraftBench` components) are entities that host recipes: forges/furnaces (blacksmith), looms/querns/mills/drying racks (agricultural), spinning wheel/butter churn (animals), coffee machine/toaster/fuel pump/water dispenser/well (appliances), pottery wheel (pottery).
- Entity recipes live in `craftRecipes/` subfolders (blacksmith: `recipes_blacksmith_*`; agricultural: `recipes_fiber`, `recipes_flax`; animals: `recipes_butter_churn`, `recipes_leather_prep`, `recipes_spinning_wheel`) and in `workstations/*_craftRecipe.txt` files (coffee machine, toaster, drying racks, stone mill/quern).
- Recipe gating by workstation tier is done via `Tags` (e.g. `PrimitiveFurnace` → `PrimitiveForge` → `Furnace` in `recipes_blacksmith_furnaces_i.txt`) — see the Crafting & Skills master doc.
- Pottery recipes live in a folder named **`cratRecipes`** (vanilla typo, verified) — worth knowing when extending.

---

## 7. Modding Opportunities

1. **New furniture/wall entity.** Copy the `entity_carpentry_bed` pattern: `SpriteConfig` (faces/layers), `UiConfig` (entityStyle), `CraftRecipe` (timed action + `SkillRequired` + `xpAward` + inputs) — instant buildable world object with skill gating.
2. **Custom workstation.** Add an entity with `component CraftBench` (+ `CraftBenchSounds`), then drop `craftRecipe` files into its `workstations/`-style folder; gate recipes with custom `Tags` tiers.
3. **Pure visual objects.** `SpriteConfig`-only entities (Piano pattern) add world decoration with zero gameplay code.
4. **Entity fluids.** `component FluidContainer` on your entity (rain collector/well pattern) gives custom water sources or fuel stores.
5. **Recipe integration.** Entity `CraftRecipe` blocks accept the full grammar — fluid inputs (`mode:mixture`), item mappers, `OnCreate` callbacks — so workstations can drive complex craft trees.
6. **Custom UI.** `UiConfig` + `entityStyle` (XUI) customizes the tool panel for your workstation; `ContextMenuConfig` customizes right-click actions.

---
