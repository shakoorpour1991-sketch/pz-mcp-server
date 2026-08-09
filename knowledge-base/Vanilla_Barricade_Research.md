---
title: "PZ Build 42 Barricade Research"
build: "42.18"
tags: [pz, modding, build42, barricades]
---

# Vanilla Barricade Research — Project Zomboid Build 42

## 1. Vanilla Barricade Overview

### Mechanical Summary

Barricades in Build 42 are placed on **BarricadeAble** objects — IsoWindow, IsoDoor, IsoWindowFrame, and IsoThumpable objects flagged with `canBarricade`. They are built using the **CraftRecipe** system (entity-based build UI, not the old recipe system).

Three barricade types exist:

| Type | Max Planks/Stacks | Skill | Tool |
|------|------------------|-------|------|
| Wooden Plank Barricade | 4 planks (4 layers) | Woodwork (no skill requirement for 1st plank) | Hammer (any item with `ItemType.HAMMER` tag) |
| Metal Sheet Barricade | 1 sheet | MetalWelding 3 | BlowTorch |
| Metal Bar Barricade | 1 stack (consumes 3 metal bars) | MetalWelding 3 | BlowTorch |

**Placement**: Barricades attach to a window/door from one side of the object. A window can be barricaded from the inside (same square) or outside (opposite square), but cannot be barricaded from both sides simultaneously.

**Upgrades**: Wooden plank barricades are the only type that supports upgrading — you can add planks up to 4 total, each plank adds health. Metal sheet and metal bar barricades are single-application.

**Removal**: Wooden barricades are removed with a tool tagged `REMOVE_BARRICADE` (crowbar/pry bar works faster). Metal barricades require a BlowTorch to remove.

**Damage**: Barricade health is determined by the number of planks (wooden) or type (metal). Zombies thump barricaded windows/doors. Damage is handled by the Java class `IsoBarricade` internally.

### XP Awarded

| Action | Perk | XP |
|--------|------|----|
| Add wooden plank | Woodwork | 3 (no multiplier) |
| Remove wooden plank | Woodwork | 2 |
| Add metal sheet | MetalWelding | 6 |
| Add metal bar | MetalWelding | 6 |

### Timing

| Action | Base Time | Perk Scaling |
|--------|-----------|-------------|
| Wooden barricade | 100 - (Woodwork lvl * 5) | Handy trait: -20 |
| Metal barricade | 170 - (MetalWelding lvl * 5) | Handy trait: -20 |
| Remove barricade | 200 - (Woodwork lvl * 5) | Handy trait: -20 |

---

## 2. Items Involved

### Wooden Plank Barricade

| Item | Module | Purpose | Full Reference |
|------|--------|---------|----------------|
| Plank | Base | Core building material, each plank adds 1 layer | weapon.txt:8855, Weight 3, Icon Plank |
| Nails | Base | Consumed 2 per plank added | normal.txt:3535, Weight 0.05, count=5 |
| Hammer (any) | Base | Required tool (tagged `ItemType.HAMMER`) | Multiple items (BallPeenHammer, ClubHammer, WoodenMallet, etc.) |

### Metal Sheet Barricade

| Item | Module | Purpose | Full Reference |
|------|--------|---------|----------------|
| SheetMetal | Base | One sheet consumed per barricade | normal.txt:8589, Weight 2, MetalValue 80 |
| BlowTorch | Base | Required tool, fuel-based (drainable) | drainable.txt:1562, UseDelta 0.1 |
| WeldingRods | Base | Consumed (flagged DontRecordInput) | Found in entity recipe inputs |

### Metal Bar Barricade

| Item | Module | Purpose | Full Reference |
|------|--------|---------|----------------|
| MetalBar | Base | Consumed 3 per barricade | weapon.txt:3759, Weight 1.5, DisplayCategory MaterialWeapon |
| IronBar | Base | Alternative to MetalBar in recipe | weapon.txt:8186, Weight 2, MetalValue 150 |
| SteelBar | Base | Alternative to MetalBar in recipe | weapon.txt:9439, Weight 2, MetalValue 150 |
| BlowTorch | Base | Required tool | drainable.txt:1562 |
| WeldingRods | Base | Consumed (flagged DontRecordInput) | Found in entity recipe inputs |

### Related Items

| Item | Module | Purpose |
|------|--------|---------|
| BarricadeCube_Folded | Base | HESCO bastion item (folded), Weight 20, icon HESCOBastion_Folded |

### Sprites/Icons

| Barricade Type | UIIcon | Faces (Sprite Rows) |
|---------------|--------|---------------------|
| Planks | Build_BarricadeWindow_Plank | carpentry_01_8(W), 9(N), 0(E), 1(S) — each face has 4 variants for 1-4 planks |
| Metal Sheet | Build_BarricadeWindow_Sheet | constructedobjects_01_24(W), 25(N), 28(E), 29(S) — damaged/undamaged variants |
| Metal Bar | Build_BarricadeWindow_Bars | constructedobjects_01_55(W), 53(N), 52(E), 54(S) |

### Sounds

| Sound | Event |
|-------|-------|
| AddBarricadeMetal | Object/BarricadeMetal/Place |
| RemoveBarricadeMetal | Object/BarricadeMetal/Remove |
| BreakBarricadeMetal | Object/BarricadeMetal/Break |
| HitBarricadeMetal | Object/BarricadeMetal/Hit |
| BreakBarricadePlank | Object/BarricadeWood/Break |
| BeginRemoveBarricadePlank | Object/BarricadeWood/BeginRemove |
| BeginRemoveBarricadePlankCrowbar | Object/BarricadeWood/BeginRemoveCrowbar |
| HitBarricadePlank | Object/BarricadeWood/Hit |
| RemoveBarricadePlank | Object/BarricadeWood/Remove |

---

## 3. Recipes

### Wooden Plank Barricade

Entity: `BarricadePlanks` (entity_barricade_planks.txt)

```
CraftRecipe {
    timedAction = BuildWallHammer,
    time = 200,
    category = Barricades,
    Tags = AutoRotate,
    xpAward = Woodwork:10,
    Tooltip = Tooltip_craft_BigMetalFenceDesc,
    inputs {
        item 1 tags[base:hammer] mode:keep flags[Prop1;MayDegradeVeryLight;DontRecordInput],
        item 1 [Base.Plank],
        item 1 [Base.Nails] flags[DontRecordInput],
    }
}
```

**Required per layer**: 1 Plank, 2 Nails (consumed from stack), 1 Hammer (kept/tool).
**Skill**: None required to place first plank. Duration scales with Woodwork level.
**Category**: Barricades (build menu).

### Metal Sheet Barricade

Entity: `BarricadeMetalSheet` (entity_barricade_metalsheet.txt)

```
CraftRecipe {
    timedAction = BuildPoleFence,
    time = 200,
    category = Barricades,
    Tags = AutoRotate,
    SkillRequired = MetalWelding:3,
    xpAward = MetalWelding:30,
    Tooltip = Tooltip_craft_BigMetalFenceDesc,
    inputs {
        item 1 [Base.BlowTorch] flags[DontRecordInput],
        item 1 [Base.SheetMetal],
        item 1 [Base.WeldingRods] flags[DontRecordInput],
    }
}
```

**Required**: 1 SheetMetal, 1 BlowTorch (with fuel), WeldingRods (consumed).
**Skill**: MetalWelding 3 minimum.

### Metal Bar Barricade

Entity: `BarricadeMetalBar` (entity_barricade_metalbar.txt)

```
CraftRecipe {
    timedAction = BuildPoleFence,
    time = 200,
    category = Barricades,
    Tags = AutoRotate,
    SkillRequired = MetalWelding:3,
    xpAward = MetalWelding:30,
    Tooltip = Tooltip_craft_BigMetalFenceDesc,
    inputs {
        item 3 [Base.BlowTorch] flags[DontRecordInput],
        item 3 [Base.IronBar;Base.MetalBar;Base.SteelBar],
        item 3 [Base.WeldingRods] flags[DontRecordInput],
    }
}
```

**Required**: 3 MetalBars (or IronBars or SteelBars), 1 BlowTorch, WeldingRods.
**Skill**: MetalWelding 3 minimum.
Note: All 3 bars must be the same type.

---

## 4. Lua/Script Implementation

### Core Lua Files

| File | Purpose |
|------|---------|
| `media/lua/shared/TimedActions/ISBarricadeAction.lua` | Main barricade placement action. Handles all 3 barricade types, parameterized by `isMetal` / `isMetalBar` flags. Validates inventory, consumes materials, awards XP, calls `IsoBarricade.AddBarricadeToObject()`. |
| `media/lua/shared/TimedActions/ISUnbarricadeAction.lua` | Barricade removal action. Handles plank removal (crowbar/fast or barehanded/slow) and metal removal (requires BlowTorch). Returns materials to inventory. |
| `media/lua/server/BuildRecipeCode/buildRecipeCode.lua` | BuildRecipe callback code for the CraftRecipe entity system. Contains `BuildRecipeCode.barricade.OnIsValid`, `OnIsValidPlanks`, `TimedActionOnIsValid`, and `OnCreate`. |
| `media/lua/server/Map/MapObjects/MOBarricade.lua` | Map-object replacement system. Converts pre-placed barricade sprites into functional `IsoBarricade` Java objects on world load. Handles all 4 directions × 4 plank counts, plus metal sheet and metal bar variants. |

### Animation XMLs

| File | Purpose |
|------|---------|
| `media/AnimSets/player/actions/RemoveBarricade.xml` | Removal animation (uses `Bob_IdleLooting_High` with a `PerformingAction` = `RemoveBarricade` condition) |
| `media/AnimSets/player/actions/RemoveBarricadeCrowbar.xml` | Crowbar removal variant |
| `media/AnimSets/player/actions/RemoveBarricadeCrowbarHigh.xml` | Crowbar removal for high plank counts (2 or 4 planks) |

### Entity Script Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/entities/barricades/entity_barricade_planks.txt` | Entity definition: SpriteConfig (4 faces), CraftRecipe (materials), UiConfig |
| `media/scripts/generated/entities/barricades/entity_barricade_metalsheet.txt` | Entity definition for metal sheet barricade |
| `media/scripts/generated/entities/barricades/entity_barricade_metalbar.txt` | Entity definition for metal bar barricade |
| `media/scripts/entities/barricades/entity_barricade_planks_xuiSkin.txt` | XUI skin: DisplayName = "Planks Barricade", Icon = Build_BarricadeWindow_Plank |
| `media/scripts/entities/barricades/entity_barricade_metalsheet_xuiSkin.txt` | XUI skin: DisplayName = "Metal Sheet Barricade", Icon = Build_BarricadeWindow_Sheet |
| `media/scripts/entities/barricades/entity_barricade_metalbar_xuiSkin.txt` | XUI skin: DisplayName = "Metal Bar Barricade", Icon = Build_BarricadeWindow_Bars |
| `media/scripts/generated/sounds/objects/sounds_object_barricade.txt` | Sound definitions (AddBarricadeMetal, BreakBarricadePlank, etc.) |

### Key Java Classes (referenced in Lua)

| Class | Methods Used |
|-------|-------------|
| `IsoBarricade` | `AddBarricadeToObject()`, `addPlank()`, `addMetal()`, `addMetalBar()`, `removePlank()`, `removeMetal()`, `removeMetalBar()`, `getNumPlanks()`, `canAddPlank()`, `isMetal()`, `isMetalBar()`, `transmitCompleteItemToClients()`, `sendObjectChange()` |
| `BarricadeAble` | Interface for windows, doors, thumpables that can hold barricades |
| `IsoWindow` / `IsoDoor` / `IsoWindowFrame` | Objects that accept barricades (check `isBarricadeAllowed()`) |
| `IsoThumpable` | Objects with `getCanBarricade()` flag |

### Build Recipe Callback Flow

1. **OnIsValid** (metal bar/sheet) — Checks that the target square has a valid BarricadeAble object (door closed, window, window frame) in the correct facing direction and no existing barricade on that side.
2. **OnIsValidPlanks** (wooden only) — Same but allows adding to an existing barricade if `canAddPlank()` returns true (partial upgrades).
3. **TimedActionOnIsValid** — Re-checks validity when the timed action executes (door might have been opened).
4. **OnCreate** — Handles the actual construction: finds the target object, determines if it's an opposite-same square placement, calls the appropriate `IsoBarricade` method, consumes items, handles logistics.

---

## 5. Modding Approach — Custom Barricades

### Files Needed

For a new custom barricade in Build 42, you need:

1. **Entity definition** — `media/scripts/yourmod/entities/entity_yourbarricade.txt`
   - Define the entity with a `SpriteConfig` (set facing sprites)
   - Define a `CraftRecipe` (set materials, tools, skill requirements)
   - Define a `UiConfig` (reference a XUI skin)

2. **XUI skin** — `media/scripts/yourmod/entities/entity_yourbarricade_xuiSkin.txt`
   - Map entity style to display name and icon

3. **Lua callbacks** (optional) — If you need custom validation/creation logic
   - Register in the `BuildRecipeCode` table or provide your own
   - Reference in `OnIsValid`, `OnCreate`, `TimedActionOnIsValid` entity fields

4. **Timed action Lua** (optional) — If placement logic differs from existing patterns
   - Create a new IS*Action.lua inheriting from `ISBaseTimedAction`
   - Override `isValid()`, `start()`, `complete()`, `getDuration()`

5. **Item definitions** — If your barricade uses custom materials
   - Add item scripts under `media/scripts/yourmod/items/`

6. **Sound definitions** — `media/scripts/yourmod/sounds/` (optional)
   - Reference existing sounds or add new ones

7. **Sprites** — `media/textures/` and sprite definitions

### Compatibility Considerations

- **Module**: All vanilla barricades use `module Base`. Custom mods should use their own module to avoid conflicts.
- **AutoRotate**: Use the `AutoRotate` tag in CraftRecipe to auto-face the barricade toward the target object.
- **isThumpable = false**: Barricade entities set `isThumpable = false` because they're overlay-type objects.
- **MapObjects**: If you want pre-placed barricades on the map, register sprite-to-function mappings via `MapObjects.OnNewWithSprite()` (see MOBarricade.lua).
- **BarricadeAble check**: Ensure your target object implements the `BarricadeAble` interface or your OnIsValid callback handles the check.
- **DontRecordInput flag**: Materials like Nails and WeldingRods use `flags[DontRecordInput]` — they're consumed but not tracked for refund on cancel.

### Vanilla Conventions

- **Naming**: Entity names are PascalCase (`BarricadePlanks`). Item names use PascalCase (`Plank`, `SheetMetal`). UI Icons use `Build_BarricadeWindow_*` prefix.
- **Recipe category**: All barricade recipes use `category = Barricades`.
- **Timed action names**: Wooden = `BuildWallHammer`, Metal = `BuildPoleFence`.
- **Facing sprites**: Each entity defines 4 faces (N, S, E, W) with appropriate sprite rows. Plank barricades have 4 sprite variants per face (1-4 planks).
- **XP awards**: `xpAward` in the CraftRecipe applies on completion; the Lua code also awards `addXpNoMultiplier` per action.
- **Metabolic cost**: Barricade actions set `Metabolics.LightWork`.
