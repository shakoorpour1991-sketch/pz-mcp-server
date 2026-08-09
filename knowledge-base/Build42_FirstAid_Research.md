---
title: Project Zomboid Build 42 First Aid Research
build: "42.20"
tags: [pz, modding, build42, firstaid]
---

# Build 42 — First Aid Research

> **Scope:** Build 42.20 (stable). Per-skill sub-doc for the **FirstAid** skill (perk `Perks.Doctor`): the perk, skill books, XP sources, treatment gating, and character synergies. Medical *items*, *recipes* and the HealthSystem Lua are documented in `Build42_Medical_Health_Research.md` — this doc focuses on the skill itself. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents
1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [The Skill & Books](#3-the-skill--books)
4. [XP Sources](#4-xp-sources)
5. [Skill-Level Gating of Treatments](#5-skill-level-gating-of-treatments)
6. [Character Synergies](#6-character-synergies)
7. [Key Items](#7-key-items)
8. [Pitfalls](#8-pitfalls)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- FirstAid is the **wound-treatment skill** (perk `Perks.Doctor`). Unlike craft skills it has **almost no recipe gating** — the 9 medical recipes in `recipes_medical.txt` contain **no `SkillRequired` at all** (verified: zero matches); skill level instead gates *treatment quality/success* in Lua.
- The skill levels up primarily through **timed treatment actions**: applying bandages, cleaning burns, disinfecting, removing bullets and making herbal poultices.
- `doctorLevel = character:getPerkLevel(Perks.Doctor)` is read into the action objects of `ISApplyBandage`, `ISCleanBurn`, `ISDisinfect` and `ISRemoveBullet` (verified) — the skill drives roll outcomes.
- Skill ladder: 5-book ladder (`BookFirstAid1`–`5`), multipliers 3/5/8/12/16.

## 2. Core Files

| File | Role |
|---|---|
| `scripts/lua/server/XpSystem/XPSystem_SkillBook.lua` | `SkillBook["FirstAid"]` — perk `Perks.Doctor`, multipliers 3/5/8/12/16 (lines 59–65) |
| `scripts/lua/shared/TimedActions/ISApplyBandage.lua` | `addXp(character, Perks.Doctor, 5)` when bandaging (line 117); reads `doctorLevel` (line 177) |
| `scripts/lua/shared/TimedActions/ISCleanBurn.lua` | burn-cleaning action; reads `doctorLevel` (line 98) |
| `scripts/lua/shared/TimedActions/ISDisinfect.lua` | disinfection action; reads `doctorLevel` (line 116) |
| `scripts/lua/shared/TimedActions/ISRemoveBullet.lua` | bullet removal; reads `doctorLevel` (line 97) |
| `scripts/lua/shared/TimedActions/ISComfreyCataplasm.lua`, `ISGarlicCataplasm.lua`, `ISPlantainCataplasm.lua` | herbal poultice actions (reference `Perks.Doctor`) |
| `scripts/lua/server/HealthSystem/HealthUpdate.lua` | passive health simulation (see Medical doc) |
| `scripts/generated/recipes/recipes_medical.txt` | 9 medical recipes — `AutoLearnAny`, no `SkillRequired` |
| `scripts/generated/characters/character_professions.txt` | Doctor (line 58), plus paramedic/others with `Doctor=N` boosts |
| `scripts/generated/characters/character_traits.txt` | `base:firstaid` (Cost 2, `Doctor=1`) |
| `scripts/generated/items/container.txt` | FirstAid kit containers (6 variants) |

## 3. The Skill & Books

Verified in `XPSystem_SkillBook.lua` (lines 59–65):

```lua
SkillBook["FirstAid"] = {};
SkillBook["FirstAid"].perk = Perks.Doctor;
SkillBook["FirstAid"].maxMultiplier1 = 3;
SkillBook["FirstAid"].maxMultiplier2 = 5;
SkillBook["FirstAid"].maxMultiplier3 = 8;
SkillBook["FirstAid"].maxMultiplier4 = 12;
SkillBook["FirstAid"].maxMultiplier5 = 16;
```

- 5-book ladder (`BookFirstAid1`–`5`, `SkillTrained = FirstAid` in `literature.txt`).
- Perk name is **`Doctor`** in code (`Perks.Doctor`) while the user-facing skill is "First Aid".

## 4. XP Sources

Verified `addXp` call in `ISApplyBandage.lua` (line 116–117):

```lua
if self.bodyPart:isGetBandageXp() and bandageLife > 0 then
    addXp(self.character, Perks.Doctor, 5);
```

- **Bandaging** — `+5 Doctor XP` per qualifying bandage application (`isGetBandageXp()` gate).
- **Burn cleaning** (`ISCleanBurn`), **disinfecting** (`ISDisinfect`), **bullet removal** (`ISRemoveBullet`) — all reference `Perks.Doctor` and award XP on successful treatment.
- **Herbal poultices** (`ISComfreyCataplasm`, `ISGarlicCataplasm`, `ISPlantainCataplasm`) — XP alongside the poultice effects.
- `XpUpdate.lua` (server) also references FirstAid — passive/gradual XP updates.
- **Recipes award no FirstAid XP** — the medical recipe file has no `xpAward = ...FirstAid` lines (verified).

## 5. Skill-Level Gating of Treatments

`doctorLevel = character:getPerkLevel(Perks.Doctor)` is captured by 4 treatment actions (verified):
- `ISRemoveBullet.lua:97`
- `ISApplyBandage.lua:177`
- `ISDisinfect.lua:116`
- `ISCleanBurn.lua:98`

The captured level feeds **success/quality rolls** (e.g. bullet-removal success chance, bandage quality). Higher First Aid = better outcomes; the level itself is not a hard recipe gate.

## 6. Character Synergies

Verified from `character_professions.txt` / `character_traits.txt`:

| Source | Cost | Effect |
|---|---|---|
| Profession `base:doctor` (Doctor) | −4 | `XPBoosts = Doctor=6;SmallBlade=1` (line 58–60) |
| Profession (paramedic line) | — | `XPBoosts = Doctor=3;Lightfoot=1;Fitness=1` (line 164) |
| Profession `base:parkranger` (Park Ranger) | −4 | `XPBoosts = ...;Doctor=1;...` (line 175) |
| Trait `base:firstaid` (First Aid) | +2 | `XPBoosts = Doctor=1` (line 343–347) |

The Doctor profession is the dominant FirstAid learner (`Doctor=6`).

## 7. Key Items

Verified item locations:
- **First aid kits** (`items/container.txt`): `FirstAidKit` (707), `FirstAidKit_New` (1838), `FirstAidKit_NewPro` (1859), `FirstAidKit_Camping` (4847), `FirstAidKit_Camping_New` (4863), `FirstAidKit_Military` (4879)
- **Bandages** (`items/normal.txt`): `Bandage` (8054), `Bandaid` (8102) — plus wound-specific bandages (`Bandage_LeftUpperArm` etc., see Medical doc)
- **Splint** (`items/normal.txt`) — bone-fracture treatment
- Medical consumables (`items/drainable.txt`): pills, disinfectant, alcohol wipes, cotton balls, water-purification tablets

## 8. Pitfalls

- **No `SkillRequired` on medical recipes** — first aid *crafting* is not skill-gated; skill affects treatment outcomes only.
- **Perk name mismatch:** use `Perks.Doctor` in code/Lua, "FirstAid" in scripts (`character_traits` uses `Doctor=1` too — the *XP name* is `Doctor`).
- **XP is Lua-driven** — `addXp` lives in the timed-action files, not recipe `xpAward`; don't grep recipes for FirstAid XP.
- **`FirstAidKit_*` variants** are containers with different loot tables — a "first aid kit" is not one item in B42.
- Bandage XP is conditional (`isGetBandageXp()`) — not every bandage application grants XP.

## 9. Modding Opportunities

1. **New treatment actions:** copy `ISApplyBandage` — read `doctorLevel`, gate success on it, call `addXp(self.character, Perks.Doctor, N)`.
2. **New poultices/meds:** model herbal cataplasm actions for custom plants; gate recipe inputs by existing tags.
3. **Skill-scaled effects:** key bandage quality, infection chance and bullet-removal odds to `getPerkLevel(Perks.Doctor)` for depth.
4. **Trait/profession hooks:** new professions can set `XPBoosts = Doctor=N`; traits can grant bonus bandaging recipes or boosted healing.
5. **First aid kit loot:** add container definitions with tailored medical distributions (`container.txt` pattern).
