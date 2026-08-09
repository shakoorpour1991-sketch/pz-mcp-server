---
title: "PZ Build 42 File Map"
build: "42.18"
tags: [pz, modding, build42, reference]
---

# Project Zomboid Build 42 — File Map

| System | Location | Purpose | Mod Usage |
|--------|----------|---------|-----------|
| **Game Engine** | `projectzomboid.jar` (63MB) | Java game engine (IsoGenerator, IsoThumpable, SadisticAIDirector, etc.) | Cannot modify; hook via Lua events |
| **Native DLLs** | `ProjectZomboid64.exe`, `PZBullet64.dll`, `PZClipper64.dll`, `PZPathFind64.dll`, `RakNet64.dll`, `fmodintegration64.dll` | Physics, pathfinding, networking, sound | Not moddable |
| **Item Scripts** | `media/scripts/generated/items/*.txt` | Item definitions (16 files, ~96K lines total) | Add new items via mod scripts folder |
| **Weapon Scripts** | `media/scripts/generated/weapons/` | Weapon definition files | Add new weapons |
| **Entity Scripts** | `media/scripts/generated/entities/*/entity_*.txt` | Build 42 entity/CraftRecipe definitions (barricades, walls, furniture, etc.) | Add new buildable objects |
| **Entity XUI Skins** | `media/scripts/entities/*/entity_*_xuiSkin.txt` | UI display names/icons for entities | Wire up display names |
| **Recipe Scripts** | `media/scripts/generated/recipes/recipes_*.txt` (43 files, ~15K lines) | Old-style craft recipes (electrical, carpentry, cooking, etc.) | Add new craft recipes |
| **Vehicle Scripts** | `media/scripts/generated/vehicles/` | Vehicle part templates, model definitions, collision meshes | Add vehicle variants |
| **Vehicle Templates** | `media/scripts/generated/vehicles/template_*.txt` | Reusable vehicle part templates (engine, battery, door, seat, etc.) | Compose new vehicles |
| **Vehicle Distributions** | `media/lua/server/Vehicles/VehicleDistributions.lua` + junk tables | Per-part loot tables | Customize vehicle loot |
| **Profession Vehicles** | `media/lua/server/Vehicles/ProfessionVehicles.lua` | Per-town unique vehicle spawning | Customize vehicle spawns |
| **Lua Client** | `media/lua/client/` | Client-side Lua (UI, context menus, timed actions) | UI mods, new actions |
| **Lua Server** | `media/lua/server/` | Server-side Lua (world gen, items, distributions, map objects) | Mechanics mods |
| **Lua Shared** | `media/lua/shared/` | Shared code (timed actions, definitions, sandbox configs) | Cross-platform mods |
| **Lua Timed Actions** | `media/lua/{client,shared}/TimedActions/` | All timed action files (IS prefix convention) | New player actions |
| **Lua Definitions** | `media/lua/shared/Definitions/` | Data definitions (damage models, clothing recipes, attached weapons, etc.) | Data-driven modding |
| **Lua Sandbox** | `media/lua/shared/Sandbox/*.lua` | Sandbox preset configs (Apocalypse, Survivor, etc.) | Custom sandbox presets |
| **Lua UI** | `media/lua/client/ISUI/` | In-game UI windows | Custom interfaces |
| **Lua Building Objects** | `media/lua/{client,server}/BuildingObjects/` | Construction/placement system | Custom building logic |
| **Lua CraftRecipe Code** | `media/lua/server/CraftRecipeCode/` + `BuildRecipeCode/` | Lua callbacks for entity/CraftRecipe system | OnCreate, OnIsValid hooks |
| **Lua World Gen** | `media/lua/server/WorldGen/` | Terrain/feature generation (biomes, trees, ores, roads) | Custom terrain features |
| **Lua Items** | `media/lua/server/Items/` | Distributions, WorldFiller, overlays | Loot tables |
| **Lua Map Objects** | `media/lua/server/Map/MapObjects/` | Sprite→functional object conversion | MOGenerator, MOBarricade patterns |
| **Lua Metazones** | `media/lua/server/metazones/` | Zone handler, biome map config | Zone-based spawning |
| **Lua Zombies** | `media/lua/server/Zombies/` | Voronoi noise config for population | Zombie density tuning |
| **Lua Radio** | `media/lua/server/radio/` | Dynamic radio/weather channels | Custom radio broadcasts |
| **Lua Xp System** | `media/lua/server/XpSystem/` | Skill book definitions, XP config | Custom skill books |
| **Lua Professions** | `media/lua/server/Professions/Professions.lua` | Profession rarity table | Custom profession rarity |
| **Lua NPCs** | `media/lua/server/NPCs/SadisticAIDirector/` | Music director only | Zombie behavior NOT exposed |
| **Map Data** | `media/maps/<Town Name, KY>/` | Per-town map data (lotheader, zones, regions) | Custom map zones |
| **Sound Effects** | `media/sound/*.ogg/*.wav` | Audio assets | Custom sound files |
| **Sound Definitions** | `media/scripts/generated/sounds/` | Sound event definitions (category, clip, distanceMax) | New sound events |
| **Music** | `media/music/` | Background music tracks | Custom music |
| **Textures** | `media/textures/*.png` | Game textures (items, UI, world) | Custom textures |
| **3D Models** | `media/models/` + `media/models_X/` | 3D model files | Custom models |
| **Animations** | `media/AnimSets/` | Animation XML files per entity | Custom animations |
| **Animation Script** | `media/animscript/combat.xml` | Combat animation scripts | Custom combat anims |
| **UI Layout** | `media/ui/` | UI texture atlases | Custom UI elements |
| **Clothing** | `media/clothing/` | Clothing texture definitions | Custom clothing |
| **Radio** | `media/radio/` | Radio station data | Custom radio stations |
| **Effects** | `media/effects/` | Particle/visual effect definitions | Custom effects |
| **XUI Skins** | `media/scripts/xui/` + `media/scripts/xui/defaultskin/` | UI skin definitions | Custom UI theming |
| **Fonts** | `media/font/` + `media/fonts/` | Game fonts | Custom fonts |
| **Shaders** | `media/shaders/` | GLSL shader files | Custom rendering effects |
| **Physics** | `media/scripts/generated/physics/` | Physics material definitions | Custom physics props |
| **Profanity Filter** | `media/profanity/` | Profanity word lists | Custom filters |
| **Hair Styles** | `media/hairStyles/` | Character hair definitions | Custom hairstyles |
| **Voice Styles** | `media/voiceStyles/` | Player voice definitions | Custom voices |
| **Mods Folder** | `mods/` | Installed mods directory | Mod install location |
| **JRE** | `jre64/` | Bundled Java runtime | Not moddable |
| **Serialize** | `serialize.lua` | Lua serialization config | Not moddable |
| **Launcher** | `launcher/` + `media/launcher/` | Game launcher files | Not moddable |
| **Profanity Filter** | `media/profanity/` | Profanity word lists | Custom filters |

## Cache Folder: Mod Directories

The cache folder at `%UserProfile%/Zomboid/` contains two distinct mod locations:

| Folder | Path | Purpose |
|--------|------|---------|
| **Mods (manual)** | `Zomboid/mods/` | Manual install, NOT for development |
| **Workshop (development)** | `Zomboid/workshop/` | Development + Steam upload target |
| **Steam Workshop** | `steamapps/workshop/content/108600/` | Downloaded mods (App ID 108600) |

**Never** subscribe to your own mod while developing — local copies clash with downloaded copies.

## Build 42 Mod Structure Overview

```
~/Zomboid/Workshop/MyMod/
├── workshop.txt                    ← Auto-generated on Steam upload
├── preview.png                     ← 256x256 Steam image
├── Contents/
│   └── mods/
│       └── MyMod/
│           ├── mod.info            ← Core mod definition file
│           ├── poster.png
│           ├── icon.png
│           ├── common/             ← MANDATORY (even if empty)
│           │   └── media/         ← Large assets (models, textures, sounds)
│           └── 42/                ← Version folder
│               ├── mod.info
│               └── media/         ← Version-specific assets (Lua, scripts)
├── .git/                           ← NOT uploaded (same level as Contents/)
├── images/                         ← NOT uploaded
└── .vscode/                        ← NOT uploaded
```

## File Counts by Category

| Category | File Count | Total Lines |
|----------|-----------|-------------|
| Lua files (*.lua) | 1,351 | ~700,000+ |
| Script items (*.txt) | 1,004 | ~500,000+ |
| Of which: Item definitions | 16 files | ~96,000 |
| Of which: Recipes | 43 files | ~15,000 |
| Of which: Vehicle scripts | 90+ files | ~200,000+ |
| Of which: Entity definitions | 50+ files | ~5,000 |
| Sound files | ~500+ | — |
| Texture files | ~5,000+ | — |
| Animation XMLs | ~200+ | — |
| Map folders | 13 towns + challenges | — |
