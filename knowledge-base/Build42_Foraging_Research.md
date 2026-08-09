---
title: "PZ Build 42 Foraging Research"
build: "42.18"
tags: [pz, modding, build42, foraging]
---

# Project Zomboid Build 42 — Foraging System Research

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Forage Zones](#3-forage-zones)
4. [Forage Categories](#4-forage-categories)
5. [Events and Hooks](#5-events-and-hooks)
6. [Skill System](#6-skill-system)
7. [Occupation Bonuses](#7-occupation-bonuses)
8. [Search Mode](#8-search-mode)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

Foraging in Build 42 is a **zone-based item discovery system** driven by the `forageSystem` Lua library. Items spawn as clickable world icons within defined zones, with density/refill rates per zone and weighted item pools per category. The system is fully exposed in Lua — **all definitions, zone configs, category tables, and item pools are moddable**.

---

## 2. Core Files

**Shared** (`media/lua/shared/Foraging/`):

| File | Purpose |
|------|---------|
| `forageSystem.lua` | Core engine — pool management, zone checks, integrity validation |
| `forageDefinitions.lua` | Default item definitions (named item tables with weights) |
| `forageCategories.lua` | Category definitions — 23 categories with zone weights, affinities, visibility |
| `forageZones.lua` | Zone definitions — density, refill rates, abundance settings |
| `forageSkills.lua` | Per-occupation skill bonuses — vision range, category specialisations |
| `ISForageAction.lua` | Timed action for foraging interaction |
| `scavenges.lua` | Scavenge definitions (item pools per zone) |
| `Categories/*.lua` | 23 individual category definition files |

**Server** (`media/lua/server/Foraging/`):

| File | Purpose |
|------|---------|
| `forageServer.lua` | Server-side pool generation, periodic refill, sync |

**Client**:

| File | Purpose |
|------|---------|
| `ISSearchManager.lua` | Search mode activation, overlay management |
| `ISSearchWindow.lua` | Forage UI window |
| `ISZoneDisplay.lua` | Visual zone overlay |

---

## 3. Forage Zones

Defined in `forageZones.lua`. Each zone sets density, refill rate, and abundance setting:

| Zone | Density Min | Density Max | Refill % | Abundance Setting |
|------|:-----------:|:-----------:|:--------:|:-----------------:|
| DeepForest | 8 | 10 | 7 | NatureAbundance |
| Forest | 8 | 10 | 7 | NatureAbundance |
| Vegitation | 6 | 8 | 5 | NatureAbundance |
| PHForest, PHMixForest | 6 | 8 | 5 | NatureAbundance |
| BirchForest, OrganicForest, PRForest | 6 | 8 | 5 | NatureAbundance |
| FarmLand, Farm | 5 | 7.5 | 5 | NatureAbundance |
| TownZone | 3 | 5 | 3 | NatureAbundance |
| Nav, ForagingNav | 3 | 5 | 3 | NatureAbundance |
| TrailerPark | 1.5 | 5 | 3 | NatureAbundance |

Some zones have `containsBiomes` linking to base biome types (e.g., `Farm → FarmLand`, `Nav → ForagingNav`).

---

## 4. Forage Categories

**23 categories** defined in `forageCategories.lua` (670 lines) plus **individual files** in `Categories/`:

| Category | Skill Req | Hidden | Zone Affinity | Items |
|----------|:---------:|:------:|---------------|-------|
| Tracks | PlantScavenging 0 | No | All zones | Animal tracks |
| Animals | PlantScavenging 5 | No | Vegitation 25, Forest 15 | Animal encounters |
| DeadAnimals | PlantScavenging 5 | **Yes** | Birch/Deep 3 | Carcasses |
| Berries | PlantScavenging 3 | No | Forest 15 | Wild berries |
| Mushrooms | PlantScavenging 4 | No | DeepForest 20 | Wild mushrooms |
| MedicinalPlants | PlantScavenging 4 | No | Vegitation 25 | Herbal medicines |
| WildPlants | PlantScavenging 2 | No | Forest 15 | Wild edibles |
| Fruits | PlantScavenging 3 | No | Forest 12 | Wild fruit |
| Vegetables | — | No | FarmLand 20 | Wild veg |
| Herbs | — | No | Forest 10 | Culinary herbs |
| Firewood | PlantScavenging 1 | No | DeepForest 20 | Sticks, logs |
| Stone | PlantScavenging 1 | No | Forest 15 | Flints, stones |
| Bones | — | No | TownZone 10 | Animal bones |
| Insects | PlantScavenging 3 | No | Forest 10 | Crickets, grubs |
| CraftingMaterials | — | No | Forest 8 | Twine, plant fiber |
| Ammo | — | No | TownZone 5 | Scattered ammo |
| Clothing | — | No | TownZone 10 | Ripped clothes |
| Junk | — | No | TownZone 15 | General junk |
| JunkFood | — | No | TownZone 10 | Rotten/wrapped food |
| JunkWeapons | — | No | TownZone 5 | Improvised weapons |
| Medical | — | No | TownZone 8 | Medical junk |
| Artifacts | — | No | — | Rare finds |
| Trash | — | No | TownZone 20 | General trash |

**Category properties**:
- `identifyCategoryPerk` + `identifyCategoryLevel` — skill gate for seeing this category's items
- `categoryHidden = true` — items invisible until player reaches required level
- `spriteAffinities` — optional sprite overlay mapping (e.g., `genericPlants` for Animals category)
- `chanceToMoveIcon` / `chanceToCreateIcon` — icon randomization
- `focusChanceMin/Max` — bonus when actively focused on this category

---

## 5. Events and Hooks

The forge system fires six insertion events in `forageSystem.init()`, in order:

```
1. preAddForageDefs     — Before any defs added
2. preAddSkillDefs      — Before skill/occupation defs
3. preAddCatDefs        — Before category defs
4. preAddZoneDefs       — Before zone defs
5. preAddItemDefs       — Before item defs
6. onAddForageDefs      — After all defs added (finalise)
```

**Search mode events**:
```lua
onEnableSearchMode(player)
onDisableSearchMode(player)
onToggleSearchMode(player)
OnOverrideSearchManager  -- Override default search manager
onUpdateIcon             -- Icon state update
```

---

## 6. Skill System

**5 skill books** (BookForaging1–5) in `items/literature.txt`:
- BookForaging1 — Level 1 (SkillTrained: 1)
- BookForaging2 — Level 3
- BookForaging3 — Level 5
- BookForaging4 — Level 7
- BookForaging5 — Level 9

**Foraging skill effects** (from `forageSystem.lua`):
- **Vision range** — base detection radius increases with level
- **Weather penalty** — reduced by skill (max 75% penalty in bad weather)
- **Darkness penalty** — reduced by skill (max penalty in pitch black)
- **Category unlocks** — hidden categories reveal at specific PlantScavenging levels

---

## 7. Occupation Bonuses

From `forageSkills.lua`, each occupation has a `visionBonus`, `weatherEffect`, `darknessEffect`, and `specialisations` table:

| Occupation | Vision | Weather | Dark | Key Specs |
|------------|:------:|:-------:|:----:|-----------|
| Park Ranger | 2.0 | 33% | 15% | MedPlants 75, WildPlants 50, WildHerbs 50 |
| Veteran | 1.75 | 33% | 15% | Ammo 50, MedPlants 20 |
| Farmer | 1.5 | 33% | 10% | Crops 50, WildHerbs 15 |
| Lumberjack | 1.25 | 33% | 15% | Firewood 50, Mushrooms 20 |
| Chef | 0 | 0 | 0 | Mushrooms 50, Berries 20 |
| Burglar | 0 | 0 | 0 | Junk 15, JunkWeapons 10 |
| Doctor | 0 | 0 | 0 | MedPlants 50, WildHerbs 15 |
| Nurse | 0 | 0 | 0 | MedPlants 50, WildHerbs 10 |
| (Base) | 0 | 0 | 0 | Generic defaults |

Spec values represent **percentage spawn chance bonus** for that category.

---

## 8. Search Mode

The forage UI is built around **search mode** — a toggleable state (`ISSearchManager`) that:
1. Shows zone boundaries as colored overlays (`ISZoneDisplay`)
2. Reveals forage icons as interactable world items
3. Opens `ISSearchWindow` with filter controls
4. Each icon click triggers `ISForageAction` (timed action)

**Key mechanics**:
- Icons are server-authoritative (generated by `forageServer.lua` pools)
- Zones refill per-tick based on `refillPercent`
- Weather and time-of-day affect detection probability
- Each zone has `densityMin/Max` icons active at any time

---

## 9. Modding Opportunities

### Easy (Lua data only)

1. **New forage categories** — Add entries in `forageCategoryDefinitions` + new `.lua` in `Categories/`
2. **New forage items** — Add item defs in `forageDefinitions.lua` item tables
3. **Custom zone weights** — Edit zone density/refill rates per category
4. **New zones** — Add zone definition + assign category weights

### Medium (Data + scripting)

5. **Custom forage skills** — New occupation specialisation tables in `forageSkills.lua`
6. **Seasonal forage pools** — Hook `onAddForageDefs` with month/year checks
7. **Forage overlay mod** — Custom `ISZoneDisplay` coloring or new visual indicators

---

*Source: Analysis of Project Zomboid Build 42.18. All file paths are under `media/lua/{shared,server,client}/Foraging/`.*
