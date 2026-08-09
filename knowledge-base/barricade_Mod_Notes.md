---
title: "PZ Build 42 Barricade Mod Notes"
build: "42.20"
tags: [pz, modding, build42, barricades, reference]
---

# Barricade Mod Notes — Build 42

> **Reference mod**: `D:\PZ-Modding\AdvancedBarricades\` — a working implementation of types 1 & 2 below.
> All files are present and structured for the Build 42 entity system.

## Custom Barricade Ideas

### 1. Reinforced Plank Barricade (Tier 2 Wooden)  ✅ [Implemented]
- **Concept**: Upgraded plank barricade using scrap metal for extra durability
- **Materials**: 1 Plank + 1 ScrapMetal + 2 Nails per layer (up to 4 layers)
- **Mechanics**: Same as vanilla planks mechanically but costs ScrapMetal per layer; reuses vanilla `BuildRecipeCode.barricade.OnCreate`
- **Skill**: Woodwork 2+
- **Tool**: Hammer
- **Sprite**: `carpentry_01_48` (placeholder, NOT a barricade sprite)
- **Reference**: `AdvancedBarricades/common/media/scripts/AdvancedBarricades/entity_barricade_reinforced.txt`

### 2. Barbed Wire Barricade  ✅ [Implemented]
- **Concept**: Barbed wire strung across windows/doors
- **Materials**: 1 Wire + 2 Nails + Hammer (single layer)
- **Mechanics**: Single-layer barricade created via custom `OnCreate` that calls `IsoBarricade.AddBarricadeToObject()` + `addPlank()`. Marked with `modData.barbedWire = true` for future expansion (e.g., zombie-damage hook).
- **Skill**: Woodwork 1
- **Tool**: Hammer
- **Sprite**: `carpentry_01_49` (placeholder)

### 3. Furniture/Heavy Barricade
- **Concept**: Pushing furniture against windows/doors (existing B42 mechanic, extendable)
- **Materials**: Heavy furniture items or crafted barricade blocks
- **Skill**: Strength-based
- **Note**: B42 already has furniture-pushing mechanics — mod could add craftable heavy barricades

### 4. HESCO Bastion / Barricade Cube
- **Concept**: Deployable barrier units (vanilla has `BarricadeCube_Folded` item but no entity recipe)
- **Materials**: BarricadeCube_Folded + Shovel + Sandbags/Gravelbags
- **Mechanics**: External wall reinforcement, not window-specific
- **Skill**: Carpentry 5 or Carpentry 3
- **Note**: The item exists in vanilla with `WorldStaticModel: BarricadeCube_Folded` — could add a build recipe

### 5. Composite Barricade (Wood + Metal Hybrid)
- **Concept**: Plank barricade with a metal sheet inner layer
- **Materials**: Planks + Nails + SheetMetal + WeldingRods
- **Mechanics**: Requires both Woodwork and MetalWelding skills. Higher damage resistance than either alone
- **Skill**: Woodwork 5 + MetalWelding 3
- **Tools**: Hammer + BlowTorch

---

## Reusable Vanilla References

### Sprite Atlas References
- **carpentry_01_*** — Plank barricade sprites (4 directions × 4 densities per direction = 16 sprites)
- **constructedobjects_01_24 through 31** — Metal sheet barricade sprites (4 directions, damaged/undamaged)
- **constructedobjects_01_52 through 55** — Metal bar barricade sprites (4 directions)

### Sound Events
```
Object/BarricadeWood/Break
Object/BarricadeWood/Hit
Object/BarricadeWood/BeginRemove
Object/BarricadeWood/BeginRemoveCrowbar
Object/BarricadeWood/Remove
Object/BarricadeMetal/Break
Object/BarricadeMetal/Hit
Object/BarricadeMetal/Place
Object/BarricadeMetal/Remove
```

### Item Tags
- `base:hammer` — All hammer-type items
- `base:nomaintenancexp` — Items that don't give maintenance XP
- `base:isfirefuel` — Burnable items
- `base:hasmetal` — Recyclable metal items
- `ItemTag.CROWBAR` — Crowbar items (faster unbarricading)
- `ItemTag.PRY_BAR` — Pry bar items (faster unbarricading)
- `ItemTag.REMOVE_BARRICADE` — Items that can remove barricades

### Perk References
- `Perks.Woodwork` — Carpentry skill
- `Perks.MetalWelding` — Metalworking skill
- `CharacterTrait.HANDY` — Handy trait (-20 to barricade/unbarricade time)

---

## Naming Conventions

### Entity Names
`Barricade<Material><Variant>` — PascalCase, no underscores
- Vanilla: `BarricadePlanks`, `BarricadeMetalSheet`, `BarricadeMetalBar`
- Custom: `BarricadeReinforcedPlanks`, `BarricadeBarbedWire`, `BarricadeComposite`

### Item Names
`<DescriptiveName>` — PascalCase
- Vanilla: `Plank`, `Nails`, `SheetMetal`, `MetalBar`, `BlowTorch`
- Custom: `MetalBracket`, `BarbedWireFrame`, `ReinforcedPlank`

### UI Icons
`Build_BarricadeWindow_<Descriptor>` — PascalCase with underscores
- Vanilla: `Build_BarricadeWindow_Plank`, `Build_BarricadeWindow_Sheet`, `Build_BarricadeWindow_Bars`
- Custom: `Build_BarricadeWindow_Reinforced`, `Build_BarricadeWindow_Barbed`

### Display Names (in xuiSkin)
- Vanilla: "Planks Barricade", "Metal Sheet Barricade", "Metal Bar Barricade"
- Custom: "Reinforced Planks Barricade", "Barbed Wire Barricade"

### Module
- Always use your mod's module name (e.g., `module MyMod`)
- Reference vanilla items with `Base.ItemName`
- All vanilla barricades use `module Base`

---

## Recommended Implementation Strategy

### Phase 1 — Replicate Existing Pattern
1. Create entity script (copy entity_barricade_planks.txt as template)
2. Create xuiSkin entry
3. Create item definitions for any new materials
4. Test in-game that the build menu shows your barricade
5. Test placement on windows/doors

### Phase 2 — Custom Behavior
1. Write Lua callbacks for custom validation (OnIsValid)
2. Write custom TimedAction if placement differs from vanilla
3. Register callbacks in BuildRecipeCode or your own table
4. Add custom sound definitions if needed

### Phase 3 — Polish
1. Add MapObjects registration if you need pre-placed map barricades
2. Test with different facing directions and on different BarricadeAble types
3. Test removal/recovery of materials
4. Test multiplayer sync (transmitCompleteItemToClients)

### Compatibility Checklist
- [ ] Uses own module name (not `Base`)
- [ ] CraftRecipe category set to `Barricades` (or custom category)
- [ ] AutoRotate tag applied
- [ ] OnIsValid handles all 4 facing directions
- [ ] OnCreate handles same-square vs opposite-square placement
- [ ] isThumpable = false in entity SpriteConfig
- [ ] DontRecordInput flags on consumable materials
- [ ] XP awards appropriate for the complexity
- [ ] Proper material refund on cancel (handled by DontRecordInput or explicit logic)
