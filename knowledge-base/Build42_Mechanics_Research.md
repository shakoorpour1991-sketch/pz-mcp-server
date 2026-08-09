---
title: Project Zomboid Build 42 Mechanics Research
build: "42.20"
tags: [pz, modding, build42, mechanics]
---

# Build 42 — Mechanics Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the **Mechanics** skill *system*: the perk, its skill books, recipe gating, crafting hooks and character synergies. Vehicle *parts* are already documented in `Build42_Vehicle_Mechanics_Research.md` — this doc focuses on the skill itself and the non-vehicle recipe hooks. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents
1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [The Skill & Books](#3-the-skill--books)
4. [Recipe Gating (Basic / Intermediate / Advanced)](#4-recipe-gating-basic--intermediate--advanced)
5. [Crafting Hooks Outside Vehicles](#5-crafting-hooks-outside-vehicles)
6. [XP Economy](#6-xp-economy)
7. [Character Synergies](#7-character-synergies)
8. [Pitfalls](#8-pitfalls)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- Mechanics is the **vehicle repair skill** of Build 42, but it is defined and gated like a classic crafting skill: a `Perks.Mechanics` perk, a 5-book ladder, and a recipe-gating chain (`Basic Mechanics` → `Intermediate Mechanics` → `Advanced Mechanics`).
- **There is no `recipes_mechanics.txt`.** The "Basic/Intermediate/Advanced Mechanics" recipes are embedded in the **vehicle part templates** — 52 of the 139 files in `scripts/generated/vehicles/` reference Mechanics (verified).
- Outside vehicles, Mechanics appears as a **secondary gating skill** in the improvised-weapons tree (`AutoLearnAny = Maintenance:4;Electricity:4;Mechanics:4`).
- The skill is boosted by the **Mechanic profession** (`Mechanics=4;MetalWelding=1`) and the **Mechanics trait** (`Mechanics=1`).
- For the full vehicle-part catalog, install requirements and repair timed actions, see `Build42_Vehicle_Mechanics_Research.md`.

## 2. Core Files

| File | Role |
|---|---|
| `scripts/generated/vehicles/template_*.txt` (139 files) | Vehicle part templates carrying the `Basic/Intermediate/Advanced Mechanics` recipes (52 files reference Mechanics) |
| `scripts/lua/server/XpSystem/XPSystem_SkillBook.lua` | `SkillBook["Mechanics"]` — book multipliers 3/5/8/12/16 |
| `scripts/generated/characters/character_professions.txt` | `base:mechanics` (Cost −4, `Mechanics=4;MetalWelding=1`, grants all 3 recipe tiers) |
| `scripts/generated/characters/character_traits.txt` | `base:mechanics` (Cost 3, `Mechanics=1`, grants Basic+Intermediate; mutually exclusive with `base:mechanics2`) |
| `scripts/generated/recipes/recipes_improvised_weapons.txt` | `AutoLearnAny = Maintenance:4;Electricity:4;Mechanics:4` (line 821) |
| `scripts/generated/recipes/recipes_disassembly.txt` | 5 disassembly recipes (`category = Assembly`, no script XP) |
| `scripts/generated/items/literature.txt` | `BookMechanic1`–`5` skill books |

## 3. The Skill & Books

Verified in `XPSystem_SkillBook.lua` (lines 115–121):

```lua
SkillBook["Mechanics"] = {};
SkillBook["Mechanics"].perk = Perks.Mechanics;
SkillBook["Mechanics"].maxMultiplier1 = 3;
SkillBook["Mechanics"].maxMultiplier2 = 5;
SkillBook["Mechanics"].maxMultiplier3 = 8;
SkillBook["Mechanics"].maxMultiplier4 = 12;
SkillBook["Mechanics"].maxMultiplier5 = 16;
```

- **5-book ladder** (`BookMechanic1`–`5`, `SkillTrained = Mechanics`, `LvlSkillTrained = 7` in `literature.txt`).
- Multiplier ladder 3× / 5× / 8× / 12× / 16× — the standard B42 passive-training curve shared by all craft skills.
- Book-set recipes (`recipes_packing.txt`) convert single books to/from `BookMechanicsSet` (e.g. `Base.BookMechanic1 = Base.BookMechanicsSet`).

## 4. Recipe Gating (Basic / Intermediate / Advanced)

- The three recipe tiers are **granted, not learned**: `GrantedRecipes = Basic Mechanics;Intermediate Mechanics;Advanced Mechanics` (Mechanic profession).
- They are referenced from vehicle part templates: `template_brake.txt`, `template_door.txt`, `template_engine_door.txt`, `template_gastank.txt`, `template_muffler.txt` and others (52 template files total contain `Mechanics`).
- Mechanically they behave like standard `craftRecipe` blocks attached to vehicle part items (install/remove/repair parts); the exact blocks live inside each template's recipe section — see the Vehicle Mechanics doc §3 for the gating table.

## 5. Crafting Hooks Outside Vehicles

**Improvised weapons (verified, `recipes_improvised_weapons.txt:821`):**

```text
        SkillRequired = Maintenance:1,
        NeedToBeLearn = true,
        AutoLearnAny = Maintenance:4;Electricity:4;Mechanics:4,
```
→ the improvised `Screwdriver_Improvised` recipe auto-learns at **Mechanics:4** (or Maintenance:4 / Electricity:4) — the only non-vehicle script hook for the skill.

**Disassembly (`recipes_disassembly.txt`, 5 recipes, `category = Assembly`):**
- `DismantleBlade`, `DismantleLongImplement`, etc. convert whole weapons into blades/parts using hammer-family tools.
- **No `xpAward` in any of the 5 recipes (verified `grep -c 'xpAward'` = 0)** — disassembly XP (if any) is handled in Lua, not the recipe scripts.

## 6. XP Economy

- **Primary XP source: vehicle work** — part installs, removals, repairs and hotwiring award `Mechanics` XP (implemented in Lua; detailed in `Build42_Vehicle_Mechanics_Research.md`).
- **No recipe-script XP** for the disassembly/assembly trees.
- **Passive training** via the 5-book ladder (max level 7 from books).
- Profession/trait XP multipliers: `Mechanics=4` (profession) / `Mechanics=1` (trait) — the profession is a 4× learner.

## 7. Character Synergies

Verified from `character_professions.txt:139–144` and `character_traits.txt:655–665`:

| Source | Cost | Effect |
|---|---|---|
| Profession `base:mechanics` (Mechanic) | −4 | `XPBoosts = Mechanics=4;MetalWelding=1`; `GrantedTraits = base:mechanics2`; `GrantedRecipes = Basic Mechanics;Intermediate Mechanics;Advanced Mechanics` |
| Trait `base:mechanics` (Mechanics) | +3 | `XPBoosts = Mechanics=1`; `GrantedRecipes = Basic Mechanics;Intermediate Mechanics`; `MutuallyExclusiveTraits = base:mechanics2` |
| Trait `base:mechanics2` (profession-only) | — | `IsProfessionTrait = true` variant granted by the profession |

- Taking the +3 **Mechanics trait** locks you out of the profession variant (`MutuallyExclusiveTraits`) and only grants 2 of the 3 recipe tiers.

## 8. Pitfalls

- **Do not search for `recipes_mechanics.txt`** — it does not exist; vehicle templates own the recipes.
- **`BookMechanic` vs `BookMechanicsSet`** — item IDs are `BookMechanic1`–`5`; the *set* item is `BookMechanicsSet` (packing recipe conversions use `BookMechanicsSet`).
- **Disassembly gives no script XP** — don't cite `xpAward` for `Dismantle*` recipes.
- The Mechanics **trait** and **profession** are mutually exclusive — a character cannot stack both.
- Mechanics appears only as an *AutoLearn* gate in improvised weapons — it does **not** gate that recipe's crafting requirement (that's `Maintenance:1`).

## 9. Modding Opportunities

1. **Custom part recipes:** add `Basic/Intermediate/Advanced Mechanics`-gated `craftRecipe` blocks to new vehicle part templates, matching the existing 52-template pattern.
2. **Non-vehicle Mechanics crafting:** add recipes with `SkillRequired = Mechanics:N` (or `AutoLearnAny = ...;Mechanics:N`) to give the skill crafting uses outside cars.
3. **New skill books:** mirror `SkillBook["Mechanics"]` in `XPSystem_SkillBook.lua` + `BookMechanic` items for a modded "Advanced Mechanics" tier.
4. **Disassembly XP:** attach Lua XP rewards to the existing `Dismantle*` recipes via timed-action hooks.
5. **Trait interplay:** new professions can grant the three recipe tiers via `GrantedRecipes`, or boost `Mechanics=N` in `XPBoosts`.
