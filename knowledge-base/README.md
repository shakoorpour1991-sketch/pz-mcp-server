# PZ Build 42 Modding Knowledge Base

Project Zomboid Build 42 modding research, organized from analysis of the game files at `D:\Games\ProjectZomboid-42.18`.

## Research Docs (13 files, ~280 KB total)

| File | Lines | Size | What It Covers |
|------|:-----:|:----:|----------------|
| `Build42_Modders_Reference.md` | 2,226 | 77 KB | **Main reference**: systems analysis, event registry, MapObjects, timed actions, entities, recipes, items, vehicles, MP, workflow, mod structure, startup params |
| `Build42_World_Generation_Research.md` | 806 | 37 KB | Biomes, terrain features, map zones, StoryClutter, loot distributions, vehicles, zombie population |
| `Build42_Electrical_Generator_Research.md` | 784 | 34 KB | Generator items, lifecycle, timed actions, power grid, fuel, sounds, sandbox, modding |
| `Build42_Farming_Research.md` | 355 | 19 KB | 56 crop types, SFarmingSystem, tools, XP, professions, companion planting, 7 timed actions |
| `Build42_Fishing_Research.md` | ~600 | 25 KB | 3 rod types, 21 fish species, 5 hooks, 6 baits, 2 magazines, 5 skill books, environmental factors |
| `Build42_Animals_Research.md` | 564 | 24 KB | 3 farm animals + 7 wild types, genome/breed system, models, AnimSets, tools, products, 30+ timed actions |
| `Build42_Cooking_Research.md` | 524 | 19 KB | Cooking/baking recipes, nutrition system, appliances, food decay, skill thresholds, evolved recipes, canning |
| `Build42_Foraging_Research.md` | 240 | 8.5 KB | 23 categories, 13 zones, forageSystem engine, events, skill books, occupation bonuses, search mode |
| `Build42_Weather_Research.md` | ~550 | 23 KB | Climate manager, 12 weather period stages, season props, temperature, weather effects on farming/fishing |
| `Build42_NPC_Story_Research.md` | 486 | 17 KB | StoryClutter (48 tables), OnCreateSurvivor, 171 ZoneStory zones, music director, corpse generation |
| `Build42_Radio_TV_Research.md` | NEW | TBD | Radio/TV devices, broadcast system, frequencies, AEBS, sounds, magazines |
| `Build42_Vehicle_Mechanics_Research.md` | NEW | TBD | Part templates, repair timed actions, mechanics skill, distributions, fuel |
| `Build42_File_Map.md` | 112 | 8 KB | Directory structure map with mod usage notes per directory |
| `Vanilla_Barricade_Research.md` | 280 | 14 KB | 3 barricade types, entity recipes, sprites, skills, XP |
| `Barricade_Mod_Notes.md` | 143 | 5.6 KB | Mod ideas: reinforced, barbed wire, HESCO, composite |

## Wiki References (Cleaned)

| File | What It Covers |
|------|----------------|
| `wiki/Mod-structure.md` | Build 42 versioning, common/mandatory folder, media subfolders, workshop vs mods folder |
| `wiki/Mod-optimization.md` | Lua performance: local vars, caching, load balancing, newrandom(), benchmarking |
| `wiki/Startup-parameters.md` | Debug flags, JVM args (Xmx, Xms), modfolders, server args, launcher config |

## Proof-of-Concept Mod

| Directory | What It Shows |
|-----------|---------------|
| `AdvancedGenerators/` | Full mod structure: item defs, recipes, sounds, distributions, MapObjects, TimedAction, README |

## Related Tools

- **pz-mcp-server** at `C:\Users\Administrator\Desktop\mcp\pz-mcp-server` — MCP tools for searching vanilla content, validating & generating scripts, analyzing mods
- **PZ installation** at `D:\Games\ProjectZomboid-42.18`

## Hermes Usage

All docs have YAML frontmatter (`title`, `build`, `tags`) for fast metadata search. Cross-references from the main reference doc point to `wiki/` files for full versions. The README is the primary navigation index.

*Research conducted against Project Zomboid Build 42.18. No APIs were invented.*
