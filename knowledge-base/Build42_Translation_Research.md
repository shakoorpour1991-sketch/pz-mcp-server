---
title: "Project Zomboid Build 42 Translation System Research"
build: "42.20"
tags: [pz, modding, build42, translation, i18n]
---

# Project Zomboid Build 42 — Translation System Research

> **Scope:** Build 42.20 (stable). This document covers the localization system: the `media/lua/shared/Translate/` directory layout, the JSON key-value format, language folders, town/map text, the Java `Translator`/`Languages` API surface, the Lua `getText()` bridge, and how mods add translations. Every claim was verified against the game files on disk or the shipped Java classes (`projectzomboid.jar`). All paths are relative to the Project Zomboid install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [File Structure & Format](#3-file-structure--format)
4. [Language Folders](#4-language-folders)
5. [Keys & Strings](#5-keys--strings)
6. [Town & Map Text](#6-town--map-text)
7. [The Translation API](#7-the-translation-api)
8. [How Mods Add Translations](#8-how-mods-add-translations)
9. [Pitfalls](#9-pitfalls)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

Project Zomboid localizes nearly every string (item names, UI, tooltips, recipes, radio content, moodles, map labels) through a **per-language JSON file set** under `media/lua/shared/Translate/`. Key facts (all verified):

- **28 language folders** ship in B42.20: `AR CA CH CN CS DA DE EN ES ES_CL ES_MX FI FR HU ID IT JP KO NL NO PL PT PTBR RO RU STREW TH TR UA`.
- **English (EN) is the reference set**: 43 JSON files, one file per feature domain, plus a `glossary.tbx` (a TBX glossary file for translation tooling — not a JSON text table).
- **Every language mirrors the EN file set.** `FR/` contains the same feature files (`ItemName.json`, `UI.json`, `Farming.json`, `Fluids.json`, …) plus one JSON per town.
- **Keys are strings with conventions**, not indexes — item names are keyed by full type (`Base.3030Box`), UI strings by `UI_*`, fluids by `Fluid_Name_<Id>`.
- **The engine-side API is Java** (`zombie.core.Translator`, `zombie.core.Languages`, `zombie.core.Language` in `projectzomboid.jar`); Lua code accesses it through the global `getText("Key")` function, which is **not defined anywhere in `media/lua`** (verified by search) — it is a Java-exposed binding.
- **`getTextManager()` is unrelated** — it is the font-metrics/rendering manager (used in `media/lua/client/Chat/ISChat.lua` etc.), *not* the translation API.

## 2. Core Files

### Translation data (`media/lua/shared/Translate/`)

| Path | Purpose |
|------|---------|
| `<LANG>/` | One folder per language code (28 folders, see §4) |
| `<LANG>/ItemName.json` | Item display names, keyed by full type (`"Base.3030Box": "Box of .30-30 Rounds"`) |
| `<LANG>/UI.json` | Main-menu and interface strings (`UI_mainscreen_option`, `UI_mainscreen_debug`, …) |
| `<LANG>/IG_UI.json` | In-game UI strings (`IGUI_*`) |
| `<LANG>/Recipes.json`, `RecipeGroups.json` | Recipe names / grouped recipe names |
| `<LANG>/Fluids.json` | Fluid display names (`Fluid_Name_*`) |
| `<LANG>/Moodles.json`, `Moveables.json`, `Tooltip.json`, `Entity.json`, `GameSound.json`, `MapLabel.json`, `MakeUp.json`, `BodyParts.json`, `Attributes.json`, `Farming.json`, `Stash.json`, `Sandbox.json`, `SurvivalGuide.json`, `EvolvedRecipeName.json`, `MultiStageBuild.json`, `RadioData.json`, `DynamicRadio.json`, `Print_Media.json`, `Print_Text.json`, `Recorded_Media.json`, `SurvivorNames.json`, `Credits.json`, `Credits_Translator.json`, `Challenge.json`, `ContextMenu.json` | Feature-domain text tables |
| `<LANG>/<Town>, KY.json` | Per-town title/description text (11 towns, see §6) |
| `<LANG>/language.json` | `{"version": "1", "language_name": "English"}` — language metadata |
| `<LANG>/glossary.tbx` | TBX glossary (editor/tooling asset; EN only) |

### Engine classes (`projectzomboid.jar`)

| Class | Role |
|-------|------|
| `zombie/core/Translator` | Central lookup API: `getInstance()`, `get(key)`, `getOrDefault(key, def)`, plus typed getters (`getItem`, `getDisplayName`, `getEntityText`, `getFluidText`, …) |
| `zombie/core/Languages` | Language list management: `getByIndex`, `getByName`, `getDefaultLanguage`, `getMediaPath`, `getCommonDir`, `getVersionDir`, `getModIDs`, `getAvailableModDetails` |
| `zombie/core/Language` | A single language's descriptor/paths (`getFileName`, `getIndexByName`, …) |

## 3. File Structure & Format

Files are **strict JSON**: a flat object of `"key": "value"` pairs. Real example from `EN/ItemName.json`:

```json
{
    "Base.3030Box": "Box of .30-30 Rounds",
    "Base.3030Bullets": ".30-30 Round",
    "Base.3030Carton": "Carton of .30-30 Rounds",
    "Base.44Clip": "B-F Magazine",
    "Base.45Clip": "M1911 Auto Magazine",
    "Base.556Box": "Box of 5.56x45mm Rounds",
    "Base.Acorn": "Acorn",
    "Base.AdhesiveBandageBox": "Box of Adhesive Bandages"
}
```

Notes:

- Values are plain strings; the translator supports `%s` placeholders (the string literal `%s` is present in `Translator.class`) for formatted text.
- Files are named by feature domain (`UI.json`, `ItemName.json`, …) — there is no strict per-domain rule for which file a key lives in, but vanilla keeps a clean split.
- `language.json` (per language) is a two-field descriptor:

```json
{
    "version": "1",
    "language_name": "English"
}
```

## 4. Language Folders

The 28 folders (verified listing of `media/lua/shared/Translate/`):

`AR CA CH CN CS DA DE EN ES ES_CL ES_MX FI FR HU ID IT JP KO NL NO PL PT PTBR RO RU STREW TH TR UA`

- `EN` is the canonical reference; the others are community/official localizations. Regional variants exist (`ES`, `ES_CL`, `ES_MX`; `PT`, `PTBR`).
- Each folder mirrors the EN file set — `FR/ItemName.json` contains the same keys with translated values, e.g. `"Base.3030Box": "Boîte de munitions de .30-30"`.
- French ships one town JSON per town (e.g. `Brandenburg, KY.json`, `Echo Creek, KY.json`, `Ekron, KY.json`, `Fallas Lake, KY.json`), matching EN.

## 5. Keys & Strings

Key conventions (all verified in EN files):

- **Item names** — `"<Module>.<FullType>"`: `Base.3030Box`, `Base.AdhesiveTapeBox`. The module prefix (`Base.`) is mandatory for resolution.
- **UI** — `UI_*` (`UI_mainscreen_option`, `UI_mainscreen_debug`, `UI_mainscreen_challenges`, `UI_mainscreen_sandbox`, `UI_mainscreen_survival`, `UI_mainscreen_mods`, `UI_mainscreen_online`, `UI_mainscreen_multiplayer`, `UI_mainscreen_exit`).
- **In-game UI** — `IGUI_*` (e.g. `IGUI_DesignationZone_Type_IncorrectSize`, `IGUI_PvpZone_ZoneAlreadyExistTitle`, used by the designation UI in Lua).
- **Fluids** — `Fluid_Name_<Id>` (e.g. `Fluid_Name_Petrol`, `Fluid_Name_Water`, `Fluid_Name_TaintedWater`).
- **Recipes** — recipe display names under `Recipes.json`; grouped under `RecipeGroups.json`.

Lookup happens by exact key string. Lua usage example (`media/lua/client/ISUI/Animal/ISAddDesignationAnimalZoneUI.lua`):

```lua
local modal = ISModalDialog:new(..., getText("IGUI_DesignationZone_Type_IncorrectSize"), ...);
...
local modal = ISModalDialog:new(0,0, 350, 150, getText("IGUI_PvpZone_ZoneAlreadyExistTitle"), false, ...);
```

`getText()` is used across shared Lua (`media/lua/shared/BodyDragging/corpseStorageCheck.lua`, `BuildingObjects/TimedActions/ISShovelGround.lua`, `Camping/ISCampingMenu.lua`, `Definitions/animal/ButcheringUtil.lua`, `Definitions/ContainerButtonIcons.lua`, …).

## 6. Town & Map Text

Each town has a JSON named exactly `"<Town>, KY.json"` (comma + space included). Real example (`EN/Muldraugh, KY.json`):

```json
{
    "title": "Muldraugh, KY",
    "description": "<CENTRE> <SIZE:medium> MULDRAUGH - NEW AND IMPROVED <LINE> <LINE><LEFT> <SIZE:small> Muldraugh grew as an Army town, but now welcomes folks from all walks of life: commuters to bigger towns like West Point and Rosewood, military families, and some living below the poverty line. <LINE> <LINE>Despite its small size Muldraugh boasts a sizable motel, a recently expanded primary school, a huge lumberyard, and the finest Spiffo burgers this side of Kentucky! ..."
}
```

The `description` uses **rich-text tags**: `<CENTRE>`, `<LEFT>`, `<SIZE:medium>`, `<SIZE:small>`, `<LINE>` (line break). 11 town JSONs exist in EN (and are mirrored per language): `Brandenburg, Echo Creek, Ekron, Fallas Lake, Irvington, March Ridge, Muldraugh, Riverside, Rosewood, Valley Station, West Point`.

## 7. The Translation API

The engine API is Java; method names below were extracted from the shipped class files (not decompiled, so parameter details are not quoted).

**`zombie.core.Translator`** (accessed via `getInstance()`):

- `get(key)`, `getOrDefault(key, default)` — core lookups (the `%s` format-string path and `getOrDefault` presence were verified in the class).
- Item/text getters: `getItem`, `getItemNameFromFullType`, `getDisplayName`, `getDisplayItemName`, `getMoveableDisplayName`, `getMoveableDisplayNameOrNull`, `getAttributeText`, `getAttributeTextOrNull`, `getEntityText`, `getFluidText`, `getMapLabelText`, `getItemEvolvedRecipeName`.
- Language management: `getLanguage`, `getLanguages`, `getAvailableLanguage`, `getDefaultLanguage`, `getOptionLanguageName`.
- Mod integration: `getModIDs`, `getAvailableModDetails`.

**`zombie.core.Languages`**:

- `getByIndex`, `getByName`, `getIndexByName`, `getDefaultLanguage`, `getMediaPath`, `getCommonDir`, `getVersionDir`, `getModIDs`, `getAvailableModDetails`, `getFileName` — this class resolves the per-language directories (media/common/version paths) and exposes mod language support via the `getModIDs`/`getAvailableModDetails` surface.

**Lua side:** the global `getText("Key")` is the standard accessor. A search across `media/lua` finds **no Lua definition** of `getText` — it is a Java-exposed global routed to the Translator. `getTextManager()` is the font manager and is *not* the translation API.

**Fallback behavior:** the API exposes a default-language concept (`Languages.getDefaultLanguage()`) and explicit defaults (`Translator.getOrDefault(...)`), and EN is the reference file set. The exact resolution order (EN fallback vs. echoing the raw key) is implemented in the Java binary and was **not** decompiled for this doc — treat the precise chain as unverified.

## 8. How Mods Add Translations

Verified extension points:

1. **Add JSON files under `media/lua/shared/Translate/<LANG>/`** in your mod with the same flat key-value format — the engine enumerates the Translate directories at startup (the `Languages` class resolves `getMediaPath`/`getVersionDir` and exposes `getModIDs`/`getAvailableModDetails`, confirming mod languages are integrated at the engine level).
2. **Item names:** add `"<YourModule>.<FullType>": "Display Name"` to your own file (or mirror `ItemName.json` conventions); Lua retrieves it with `getText("YourModule.FullType")`.
3. **UI/feature strings:** use namespaced keys (`YourMod_SomeKey`) and call `getText("YourMod_SomeKey")` from Lua.
4. **Town text:** ship `"<YourTown>, KY.json"` with `title` + `description` (rich-text tags supported) to localize a custom map's intro text.
5. **Robustness:** guard against missing keys at runtime with `getOrDefault`-style fallbacks in code, since translation tables are optional in mods.

## 9. Pitfalls

- **`getTextManager()` ≠ `getText()`** — one is fonts (returns a font manager with `getFontHeight`, `MeasureStringX`, …), the other is translations. Mixing them up is the most common localization bug.
- **Strict JSON** — trailing commas, comments, or duplicate keys in a translation file break that file's loading.
- **Item keys must be fully module-qualified** (`"Base.3030Box"`, not `"3030Box"`).
- **Keys are case-sensitive and exact** — `UI_mainscreen_option` vs `UI_MainScreen_option` are different strings.
- **The `<Town>, KY.json` filename must include the comma** (`"Muldraugh, KY.json"`), and its `description` relies on rich-text tags (`<LINE>`, `<SIZE:*>`, `<CENTRE>`, `<LEFT>`) for layout.
- **Don't add plain text to `glossary.tbx`** — it is a TBX glossary for translation tooling, not a runtime text table.
- **`%s` placeholders** in translated strings must match the number/order of arguments passed by the caller.
- **Language folders must mirror the EN file set** to avoid gaps; a language missing a whole file (e.g. no `Fluids.json`) will fail to resolve those keys.

## 10. Modding Opportunities

1. **Localize new content end-to-end** — add item/recipe/fluid/moodle strings following the EN key conventions and pull them with `getText()` in Lua.
2. **Custom item display names** — a `"<Module>.<FullType>"` entry makes any new item show a proper name in inventories, tooltips and containers.
3. **Custom map flavor text** — a `"<Town>, KY.json"` with `title` + rich-text `description` for your map's intro/lore.
4. **Localize UI from mod code** — use namespaced keys (`MyMod_*`) and `getText()` so your mod's UI is translatable without code changes.
5. **Multi-language support** — ship translations for as many of the 28 folders as you can; the engine picks the active language automatically, and EN is the fallback reference.
6. **Map labels** — `MapLabel.json` conventions can be extended for custom map-marker text.
7. **Radio content** — `RadioData.json` / `DynamicRadio.json` conventions cover radio-station text and dynamic broadcast lines.

---
