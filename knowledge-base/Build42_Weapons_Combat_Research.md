---
title: "Project Zomboid Build 42 Weapons & Combat Research"
build: "42.20"
tags: [pz, modding, build42, weapons, combat]
---

# Project Zomboid Build 42 — Weapons & Combat Research

> **Scope:** Build 42.20 (stable). Melee weapons, firearms, ammunition, weapon models, and weapon crafting. All claims verified against the game files; paths are relative to the install root (`D:\Games\ProjectZomboid`).

## Table of Contents

1. [Overview](#1-overview)
2. [Core Files](#2-core-files)
3. [Weapon Item Anatomy](#3-weapon-item-anatomy)
4. [Melee Weapon Properties](#4-melee-weapon-properties)
5. [Firearms](#5-firearms)
6. [Ammunition & Reloading](#6-ammunition--reloading)
7. [Weapon Models](#7-weapon-models)
8. [Explosives](#8-explosives)
9. [Weapon Crafting](#9-weapon-crafting)
10. [Modding Opportunities](#10-modding-opportunities)

---

## 1. Overview

- All weapons (melee, firearm, thrown, crafted) are `base:weapon` items defined in `media/scripts/generated/items/weapon.txt` — **409 item blocks** in one file.
- Weapon behavior is data-driven: damage, range, speed, crit, knockback, hit sounds, and degradation are all plain item properties (no Lua per weapon).
- Firearms add a second property cluster: `AmmoType`, `AmmoBox`, `ClipSize`/`MaxAmmo`, `MagazineType`, `JamGunChance`, aiming perks and sight ranges.
- Ammunition lives in `recipes/recipes_ammunition.txt` (boxing/unboxing via `recipeGroup = OpenBox` + item mappers) and ammo types are tag-based (`AmmoType = base:bullets_9mm`).
- Weapon 3D appearance is defined in `media/scripts/generated/models_weapons.txt` (400 models) with per-bone attachments.
- Crafting lives mainly in `recipes_improvised_weapons.txt` (30 recipes) and the `Weaponry` category (42 recipes) across the recipe files.

---

## 2. Core Files

| File | Purpose |
|------|---------|
| `media/scripts/generated/items/weapon.txt` | 409 weapon item definitions (melee + firearms + explosives) |
| `media/scripts/generated/weapons/firearm/fx/` | Firearm visual effects assets (fx subfolder) |
| `media/scripts/generated/models_weapons.txt` | 400 weapon models with attachment points |
| `media/scripts/generated/recipes/recipes_ammunition.txt` | Ammo box/unbox + gunpowder recovery recipes (5) |
| `media/scripts/generated/recipes/recipes_improvised_weapons.txt` | Crafted weapons (30 recipes) |
| `media/scripts/generated/recipes/recipes_spears.txt`, `recipes_bone.txt` | Spear & bone weapon crafting |

---

## 3. Weapon Item Anatomy

### Display categories (verified counts in `weapon.txt`)

| DisplayCategory | Count | | DisplayCategory | Count |
|----------------|:-----:|-|----------------|:-----:|
| WeaponCrafted | 115 | | InstrumentWeapon | 10 |
| ToolWeapon | 53 | | AnimalPartWeapon | 7 |
| Weapon | 44 | | Memento | 6 |
| Explosives | 33 | | BrokenWeapon | 6 |
| CookingWeapon | 32 | | FishingWeapon | 4 |
| MaterialWeapon | 22 | | WeaponImprovised | 1 |
| HouseholdWeapon | 19 | | VehicleMaintenanceWeapon | 1 |
| JunkWeapon | 18 | | Hidden | 1 |
| SportsWeapon | 17 | | | |
| GardeningWeapon | 17 | | | |

### Sub-categories (combat role)

| SubCategory | Count | Meaning |
|-------------|:-----:|---------|
| Swinging | 262 | Blunt/axe style swings |
| Stab | 69 | Knives/thrusting |
| Spear | 22 | Spear-family weapons |
| Firearm | 22 | Guns (see §5) |

`DamageCategory = Slash` is the only value set in `weapon.txt` (163 weapons) — blunt weapons omit it.

---

## 4. Melee Weapon Properties

Most frequent melee properties in `weapon.txt` (verified counts, 409 items):

| Property | Count | Meaning |
|----------|:-----:|---------|
| `Weight`, `Swingtime`, `MinDamage`, `MaxRange`, `MaxHitcount`, `MaxDamage` | 409 | Core combat stats |
| `SwingSound`, `ConditionMax` | 408 | Audio + durability |
| `SwingAnim`, `MinimumSwingtime`, `SwingAmountBeforeImpact` | 405/405/400 | Swing animation/timing |
| `WeaponSprite` | 384 | In-world/3D sprite |
| `KnockdownMod`, `PushBackMod`, `MinAngle`, `DoorDamage` | 381/376/376/376 | Hit physics |
| `SubCategory`, `MinRange`, `HitSound`, `ConditionLowerChanceOneIn`, `BreakSound` | 375 | Role, range, durability |
| `CriticalChance`, `KnockBackOnNoDeath` | 367/362 | Crits & knockdown |
| `TreeDamage`, `HitFloorSound`, `DoorHitSound`, `Categories` | 354 | Environment damage |
| `CritDmgMultiplier` | 352 | Crit multiplier |
| `SplatNumber`, `SplatBloodOnNoDeath`, `DropSound` | 339/338/330 | Gore/audio |
| `AttachmentType` | 322 | Where it attaches (e.g. `Shovel`, `Holster`) |
| `BaseSpeed`, `WeaponLength`, `TwoHandWeapon`, `DamageCategory` | 264/262/165/163 | Misc combat |
| `OnBreak`, `DamageMakeHole` | 193/193 | Break behavior + hole punching |

### Example — `BaseballBat` (verified block, `weapon.txt`)

```txt
item BaseballBat
{
    DisplayCategory = SportsWeapon,
    ItemType = base:weapon,
    Weight = 2,
    Icon = BaseballBat,
    AttachmentType = Shovel,
    BaseSpeed = 1,
    BreakSound = BaseballBatBreak,
    Categories = base:blunt,
    ConditionLowerChanceOneIn = 20,
    ConditionMax = 15,
    CriticalChance = 40,
    CritDmgMultiplier = 2,
    DoorDamage = 5,
    HitAngleMod = "-30.0",
    KnockBackOnNoDeath = true,
    KnockdownMod = 2,
    MaxDamage = 1.1,
    MaxHitcount = 2,
    MaxRange = 1.25,
    MinAngle = 0.75,
    MinDamage = 0.8,
    MinRange = 0.61,
    MinimumSwingtime = 3,
    PushBackMod = 0.5,
    SubCategory = Swinging,
    SwingAnim = Bat,
    SwingSound = BaseballBatSwing,
    Swingtime = 3,
    TwoHandWeapon = true,
    WeaponLength = 0.5,
    WeaponSprite = BaseballBat,
    OnBreak = OnBreak.BaseballBat,
    Tags = base:isfirefuel;base:repairwithglue;base:repairwithtape,
    Researchablerecipes = CanReinforceLongWeapon;MakeRakeHeadWeapon;CarveBat;CarveShortBat,
}
```

Also present: `FireStartingEnergy` (fire-start tools, values 0/20/30/40) — see the Energy System doc.

---

## 5. Firearms

22 firearms (`SubCategory = Firearm`). Firearm-specific properties (verified on the `Pistol` block, `weapon.txt:10996`):

| Property | Example value (Pistol) | Meaning |
|----------|------------------------|---------|
| `AmmoBox` | `Base.Bullets9mmBox` | Box item used for reloading |
| `AmmoType` | `base:bullets_9mm` | Tag of the ammo it consumes |
| `ClipSize` / `MaxAmmo` | 15 / 15 | Magazine capacity |
| `MagazineType` | `Base.9mmClip` | Detachable magazine item |
| `JamGunChance` | 1 | Jam probability |
| `IsAimedFirearm` | true | Uses aim mode |
| `HitChance` | 50 | Base hit chance |
| `Aimingtime` | 25 | Aim duration (ticks) |
| `AimingPerkHitChanceModifier` | 4 | Aiming skill → hit chance |
| `AimingPerkCritModifier` | 6 | Aiming skill → crit |
| `AimingPerkMinAngleModifier` | 0.05 | Aiming skill → angle |
| `AimingPerkRangeModifier` | 0 | Aiming skill → range |
| `MinSightRange` / `MaxSightRange` | 2 / 6.0 | Zoom levels |
| `MetalValue` | 30.0 | Scrap value |
| Sounds | `M9AimRelease`, `M9Break`, `M9Jam`, `M9Equip`, `M9InsertAmmo*`, `M9EjectAmmo*`, `BulletImpact` | Per-gun audio |

```txt
item Pistol
{
    DisplayCategory = Weapon,
    ItemType = base:weapon,
    Weight = 1.5,
    Icon = HandGun3,
    AimingPerkCritModifier = 6,
    AimingPerkHitChanceModifier = 4,
    AimingPerkMinAngleModifier = 0.05,
    AimingPerkRangeModifier = 0,
    Aimingtime = 25,
    AmmoBox = Base.Bullets9mmBox,
    AmmoType = base:bullets_9mm,
    AttachmentType = Holster,
    ClipSize = 15,
    JamGunChance = 1,
    MagazineType = Base.9mmClip,
    MaxAmmo = 15,
    MaxDamage = 1.0,
    MaxRange = 15.0,
    MinSightRange = 2,
    MaxSightRange = 6.0,
    ...
}
```

---

## 6. Ammunition & Reloading

### Ammo item families (verified in `recipes_ammunition.txt` mappers)

- Handgun: `Bullets9mm`, `Bullets45`, `Bullets38`, `Bullets357`, `Bullets44`
- Rifle: `308Bullets`, `556Bullets`, `3030Bullets`
- Shotgun: `ShotgunShells`
- Components: `GunPowder` (from `GatherGunpowder`)

### Ammo recipes (`recipes_ammunition.txt`, 5 recipes)

| Recipe | Timed action | Time | Notes |
|--------|--------------|:----:|-------|
| `GatherGunpowder` | `Making` | 30 | `tags[base:pliers;base:visegrips]` + `tags[base:ammo]` (destroy) → `Base.GunPowder flags[HasOneUse]` |
| `OpenBoxOfBullets50` | `OpenAmmoBox` | 15 | 9mm/45/38/357 box → 50 rounds via `itemMapper ammoTypes` |
| `OpenBoxOfBullets20` | `OpenAmmoBox` | 15 | 44/308/556/3030 box → 20 rounds |
| `OpenBoxOfShotgunShells` | `OpenShellsBox` | 15 | `Base.ShotgunShellsBox` → 25 shells |
| `place_ammo_in_box` | `PlaceAmmoInBox` | 15 | Any ammo (count-prefixed entries, e.g. `50:Base.Bullets9mm`) → box via `ammoType` mapper |

```txt
craftRecipe OpenBoxOfBullets50
{
    timedAction = OpenAmmoBox,
    time = 15,
    category = Packing,
    recipeGroup = OpenBox,
    Tags = InHandCraft;CanBeDoneInDark,
    inputs
    {
        item 1 [Base.Bullets9mmBox;Base.Bullets45Box;Base.Bullets38Box;Base.Bullets357Box] mappers[ammoTypes] flags[Prop2;AllowFavorite;InheritFavorite],
    }
    outputs
    {
        item 50 mapper:ammoTypes,
    }
    itemMapper ammoTypes
    {
        Base.Bullets9mm = Base.Bullets9mmBox,
        Base.Bullets45 = Base.Bullets45Box,
        Base.Bullets38 = Base.Bullets38Box,
        Base.Bullets357 = Base.Bullets357Box,
    }
}
```

Notes:

- `recipeGroup = OpenBox` groups the recipes in the UI.
- `GatherGunpowder` recovers powder from any `base:ammo` item — the ammo-to-powder recycling loop.
- `place_ammo_in_box` uses per-entry counts (`25:Base.ShotgunShells`) and `IsExclusive` flag.

---

## 7. Weapon Models

`media/scripts/generated/models_weapons.txt` — 400 `model` blocks. Anatomy:

```txt
model SaucePan
{
    mesh = weapons/1handed/SaucePan,
    attachment world
    {
        offset = -0.049 0.137 -0.049,
        rotate = 0.0 -45.0 0.0,
    }
    attachment Bip01_Prop2
    {
        offset = -0.0131 0.0078 0.0007,
        rotate = 180.0 -11.9336 180.0,
    }
}
```

- `mesh` = model mesh path under `media/models/` (e.g. `weapons/1handed/`, `weapons/2handed/`).
- `attachment` blocks define per-bone placement: `world` (dropped/on ground) and `Bip01_Prop2` (right-hand grip) with `offset` (x y z) and `rotate` (x y z degrees).
- The item's `WeaponSprite` property references these model names for 3D rendering.

---

## 8. Explosives

33 items in `DisplayCategory = Explosives` within `weapon.txt`. This includes throwables and explosives; crafting recipes in the `Weaponry` category and `recipes_improvised_weapons.txt` (e.g. improvised bombs, pipe bombs — `Tags = base:...`). (Not exhaustively cataloged here; see the recipe files for the exact craft tree.)

---

## 9. Weapon Crafting

- `Weaponry` recipe category: 42 recipes across `recipes/*.txt` (verified category count).
- `recipes_improvised_weapons.txt`: 30 recipes — the improvised weapon tree.
- `recipes_spears.txt` (6) and `recipes_bone.txt` (35) provide spear and bone-weapon crafting.
- Weapons list `Researchablerecipes` (228 weapons) so crafted variants are discoverable through skill magazines/research — e.g. `BaseballBat` → `CanReinforceLongWeapon;MakeRakeHeadWeapon;CarveBat;CarveShortBat`.

---

## 10. Modding Opportunities

1. **New melee weapon.** Copy a `weapon.txt` block; set `DisplayCategory`, `SubCategory`, `DamageCategory`, damage/range/speed stats, `WeaponSprite`, sounds, and `Tags` (e.g. `base:blunt` for skill compatibility). No code required.
2. **New firearm.** Clone `Pistol`: set `AmmoType` (create a matching `base:bullets_x` tag family), `AmmoBox`, `ClipSize`/`MaxAmmo`, `MagazineType`, `JamGunChance`, and per-gun sounds; register ammo in a `recipes_ammunition.txt`-style recipe with an `itemMapper`.
3. **Ammo recycling.** Follow `GatherGunpowder` to add new recovery recipes from any `base:ammo`-tagged item; use `recipeGroup` to group box-opening recipes.
4. **Weapon models.** Add a `model` block (mesh + `world`/`Bip01_Prop2` attachments) and reference it from `WeaponSprite` for full 3D placement in hands and on the ground.
5. **Crafted weapon trees.** Add `Researchablerecipes` + `Weaponry`-category recipes to gate upgrades (the BaseballBat → Spiked/GardenFork/Sawblade chain pattern).
6. **Balance hooks.** `ConditionLowerChanceOneIn` + `ConditionMax` control degradation; `JamGunChance`, `HitChance`, and `AimingPerk*` modifiers tune firearms; `DamageMakeHole`/`DamageCategory` control damage-to-zombie type.

---
