---
title: "Project Zomboid Build 42 Traits & Professions Research"
build: "42.20"
tags: [pz, modding, build42, traits, professions]
---

# Project Zomboid Build 42 — Traits & Professions Research

> **Scope:** Build 42.20 (stable). Character creation data: trait definitions, profession definitions, skill XP boosts, granted recipes, and the NPC zombie-profession distribution table. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Trait Definitions](#3-trait-definitions)
4. [Trait Catalog](#4-trait-catalog)
5. [Profession Definitions](#5-profession-definitions)
6. [Profession Perks](#6-profession-perks)
7. [NPC Professions & Distribution](#7-npc-professions--distribution)
8. [Skill Boosts Overview](#8-skill-boosts-overview)
9. [Modding Opportunities](#9-modding-opportunities)

---

## 1. Overview

- Traits and professions are **data blocks** in two files: `character_traits.txt` (**97 trait definitions**) and `character_professions.txt` (**25 profession definitions**).
- A trait/profession block carries: an id (`base:<name>`), a point **`Cost`** (positive = costs points, negative = grants points), UI strings, **`XPBoosts`** (`Skill=Multiplier`), **`GrantedRecipes`** (recipes learned at start), **`MutuallyExclusiveTraits`**, and — for traits — `IsProfessionTrait`.
- Professions bundle **`GrantedTraits`** (which traits a profession includes), XP boosts and recipe grants; the `Cost` can be negative (professions that grant spare points) or positive.
- The player-facing flavor/balance is data; the **runtime effects** (moodles, body stats, etc.) of many traits are implemented in Lua/Java keyed on the trait id (e.g. `media/lua/server/Professions/Professions.lua` is the **NPC** profession distribution).
- B42 note: professions grant **B42 skill names** (`Woodwork`, `Carving`, `Masonry`, `Blacksmith`, `Husbandry`, `Doctor`, `PlantScavenging`, …) — B41-era skill names (`Carpentry`) no longer appear in `XPBoosts`.

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/characters/character_traits.txt` | 97 `character_trait_definition` blocks |
| `media/scripts/generated/characters/character_professions.txt` | 25 `character_profession_definition` blocks |
| `media/lua/server/Professions/Professions.lua` | NPC zombie profession rarity table |
| `media/lua/shared/Translate/EN/UI.json` | `UI_trait_*` / `UI_prof_*` / `UI_profdesc_*` strings |
| `media/lua/shared/` (skill Lua) | Runtime skill/XP effects (see Crafting & Skills doc) |

---

## 3. Trait Definitions

### Block anatomy (verified, `character_traits.txt`)

```txt
character_trait_definition base:adrenalinejunkie
{
    IsProfessionTrait = false,
    DisabledInMultiplayer = false,
    CharacterTrait = base:adrenalinejunkie,
    Cost = 4,
    UIName = UI_trait_AdrenalineJunkie,
    UIDescription = UI_trait_AdrenalineJunkieDesc,
    MutuallyExclusiveTraits = base:agoraphobic;base:claustrophobic;base:cowardly;base:desensitized,
}
```

### Field reference

| Field | Meaning | Example |
|-------|---------|---------|
| `CharacterTrait` | Trait id (must match the block id) | `base:adrenalinejunkie` |
| `IsProfessionTrait` | Trait only granted by a profession (not pickable) | `true` (16 traits) |
| `DisabledInMultiplayer` | MP restriction flag | `false` |
| `Cost` | Character points (negative = grants points) | `4`, `-4`, `10` |
| `UIName` / `UIDescription` | i18n keys (`UI_trait_*`) | `UI_trait_Athletic` |
| `XPBoosts` | `Skill=Multiplier` list (`;`-separated) | `Fitness=4`, `Blacksmith=2;Maintenance=1` |
| `GrantedRecipes` | Recipes learned at character creation | `MakeGlassJar;MakeGlassBottle;…` |
| `MutuallyExclusiveTraits` | Can't be taken with these | `base:overweight;base:fit;…` |

### Recipe-granting example — `base:blacksmith` (verified)

```txt
character_trait_definition base:blacksmith
{
    IsProfessionTrait = false,
    CharacterTrait = base:blacksmith,
    Cost = 6,
    UIName = UI_trait_Blacksmith,
    XPBoosts = Blacksmith=2;Maintenance=1,
    MutuallyExclusiveTraits = base:blacksmith2,
    GrantedRecipes = Advanced_Forge;Blast_Furnace;Charcoal_Burner;Construct_Charcoal_Pit;
        Construct_Dome_Kiln;Forge;…;Forge_Wrench,   -- ~90 forge recipes
}
```

---

## 4. Trait Catalog

97 traits total; 16 are profession-only (`IsProfessionTrait = true`). Representative costs (verified):

| Trait | Cost | Trait | Cost |
|-------|:----:|-------|:----:|
| athletic | 10 | agoraphobic | −4 |
| brawler | 6 | allthumbs | −2 |
| blacksmith | 6 | asthmatic | −5 |
| adrenalinejunkie | 4 | claustrophobic | −4 |
| baseballplayer | 4 | clumsy | −2 |
| brave | 4 | conspicuous | −4 |
| artisan | 2 | cowardly | −2 |
| axeman | 0 (profession) | crafty | 3 |
| blacksmith2 | 0 (profession) | cook | 3 |

Full id list (first 40, verified): adrenalinejunkie, agoraphobic, allthumbs, artisan, asthmatic, athletic, axeman, baseballplayer, blacksmith, blacksmith2, brave, brawler, burglar, claustrophobic, clumsy, conspicuous, cook, cook2, cowardly, crafty, deaf, desensitized, dextrous, disorganized, eagleeyed, emaciated, fasthealer, fastlearner, fastreader, feeble, firstaid, fishing, fit, gardener, graceful, gymnast, handy, hardofhearing, heartyappetite, hemophobic, … (remaining ~57 in file).

---

## 5. Profession Definitions

### Block anatomy (verified, `character_professions.txt`)

```txt
character_profession_definition base:burglar
{
    CharacterProfession = base:burglar,
    Cost = -6,
    UIName = UI_prof_Burglar,
    IconPathName = profession_burglar2,
    GrantedTraits = base:burglar,
    XPBoosts = Nimble=2;Sneak=2;Lightfoot=2,
    GrantedRecipes = MakeForearmMagazineArmor;…;MakeImprovisedLighter,
}
```

### Field reference

| Field | Meaning |
|-------|---------|
| `CharacterProfession` | Profession id (matches block id) |
| `Cost` | Character points (negative = grants points) |
| `UIName` / `UIDescription` | i18n keys (`UI_prof_*`, `UI_profdesc_*`) |
| `IconPathName` | UI portrait (e.g. `profession_burglar2`) |
| `GrantedTraits` | Traits bundled with the profession (e.g. `base:cook2`) |
| `XPBoosts` | `Skill=Multiplier` list |
| `GrantedRecipes` | Recipes learned at start |

### Full profession table (25, verified costs)

| Profession | Cost | | Profession | Cost |
|------------|:----:|-|------------|:----:|
| burglar | −6 | | nurse | 0 |
| burgerflipper | 2 | | parkranger | −4 |
| carpenter | −2 | | policeofficer | −4 |
| chef | −2 | | rancher | 0 |
| constructionworker | −2 | | repairman | −2 |
| doctor | 0 | | securityguard | −2 |
| electrician | −2 | | smither | −6 |
| engineer | −4 | | tailor | 2 |
| farmer | 0 | | unemployed | 8 |
| fireofficer | 0 | | veteran | −8 |
| fisherman | −2 | | | |
| fitnessinstructor | −6 | | | |
| lumberjack | 0 | | | |
| mechanics | −4 | | | |
| metalworker | −4 | | | |

---

## 6. Profession Perks

Verified `XPBoosts` and `GrantedRecipes` highlights:

| Profession | XPBoosts | Notable granted recipes |
|------------|----------|------------------------|
| carpenter | Woodwork=4;Carving=1;SmallBlunt=1;Masonry=1;Maintenance=1 | Reinforced/railspike/sawblade weapon chain (`CanReinforceLongWeapon`, `MakeGardenForkHeadWeapon`, …) |
| chef | Cooking=4;Butchering=2;Maintenance=1;SmallBlade=1 | Doughs, cookies, sushi/maki, `MakeJar` |
| electrician | Electricity=5 | `Generator`, remote triggers/timers, improvised radios/flashlights |
| engineer | Electricity=1;Woodwork=1;Masonry=1 | Bombs (`MakePipeBomb`, `MakeAerosolBomb`), gas masks, `Generator` |
| farmer | Farming=4;Husbandry=1;Strength=1 | Cures + ~60 `base:<crop> growing season` recipes |
| burglar | Nimble=2;Sneak=2;Lightfoot=2 | Shivs, magazine armor, `CopyBuildingKey`, `MakeBlankID` |
| doctor | Doctor=6;SmallBlade=1 | — |
| metalworker | (MetalWelding etc.) | welding recipes |
| smither | Blacksmith=4 | forge tree |

---

## 7. NPC Professions & Distribution

`media/lua/server/Professions/Professions.lua` is a **flat table of NPC/zombie professions with rarity weights** (the player professions in §5 are a subset; this table also includes civilian jobs with no player equivalent):

```lua
Professions =
{
    PoliceOfficer = { rare = 1, },
    ParkRanger = { rare = 2, },
    ConstructionWorker = { },
    MilitarySoldier = { rare = 2, },
    MilitaryOfficer = { rare = 3, },
    SecurityGuard = { },
    FireOfficer = { rare = 1, },
    Salesperson = { },
    ITWorker = { },
    OfficeWorker = { },
    Unemployed = { },
    TruckDriver = { },
    Farmer = { },
    Cashier = { },
    ShopClerk = { },
    FastFoodCook = { },
    Cook = { rare = 2, },
    Chef = { rare = 3, },
    Burglar = { rare = 1, },
    Drugdealer = { rare = 1, },
    Nurse = { rare = 1, },
    Doctor = { rare = 2, },
    Waiter = { }, CustomerService = { }, Janitor = { },
    Secretary = { }, Bookkeeper = { }, Accountant = { },
    Teacher = { },
}
```

`rare = 1..3` marks uncommon professions (higher = rarer); professions with no `rare` entry are the common baseline. This table drives zombie-outfit/occupation distribution.

---

## 8. Skill Boosts Overview

Skill ids used in `XPBoosts` across professions (verified): Aiming, Axe, Blacksmith, Blunt, Butchering, Carving, Cooking, Doctor, Electricity, Farming, Fishing, Fitness, FlintKnapping, Husbandry, Lightfoot, Maintenance, Masonry, Mechanics, MetalWelding, Nimble, PlantScavenging, Reloading, SmallBlade, SmallBlunt, Sneak, Strength, Tailoring, Trapping, Woodwork.

Trait `XPBoosts` add: Glassmaking, Pottery, Sprinting, Tracking (and Woodwork, Fishing, FirstAid-via-`Doctor`, etc.).

---

## 9. Modding Opportunities

1. **New trait.** Add a `character_trait_definition` with a cost, `UIName`/`UIDescription` keys (localize in `Translate/EN/UI.json`), optional `XPBoosts`/`GrantedRecipes`, and `MutuallyExclusiveTraits` for balance.
2. **Profession-tied traits.** Set `IsProfessionTrait = true` so a trait can only come from a profession (the `blacksmith2`/`cook2` pattern).
3. **New profession.** Add a `character_profession_definition` with `GrantedTraits`, `XPBoosts`, and a `GrantedRecipes` list — instant starting-knowledge professions like `electrician`'s `Generator` grant.
4. **Recipe-gating through traits.** `GrantedRecipes` is the standard hook for "knows how to X from the start" content — pair with `ResearchSkillLevel` recipes for progression gating.
5. **NPC distribution.** Extend the `Professions` table in Lua with your own professions and `rare` weights to control zombie-occupation loot/outfits.
6. **Multiplayer rules.** `DisabledInMultiplayer` lets you create MP-specific traits.

---
