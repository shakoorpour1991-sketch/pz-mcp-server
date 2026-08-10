---
title: "item"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, scripts]
---

# item

Soft Override  
True

The item block is used to create items in the game, from weapons to food
and clothing. The parameters available in this block mostly depend on
the type of item you are creating, set with
[ItemType](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype).

To get started, create a simple item structure by setting that parameter
up correctly, then add more parameters as you need. For example, for a
normal item:

``` cpp
module yourModule
{
  item yourID
  {
    ItemType = base:normal,
    ...
  }
}
```

To add a name to display for your item, you need to add the item full
type, that is its `module.id`, inside the
[ItemName](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#itemname)
translation file. Taking the example from above, your translation file
would be:

``` json
{
  "yourModule.yourID": "Your Item Name"
}
```

## Hierarchy

This block can be a child of the following blocks:

- [module](./module.md)

This block can have the following child blocks:

- [component FluidContainer](./component/component-fluidcontainer.md)
- [component Durability](./component/component-durability.md)
- [component](./component.md)
- [component ContextMenuConfig](./component/component-contextmenuconfig.md)

## ID

This block can have an ID.

Optional  
False

Can have spaces  
False

## ItemType parameters

Specific parameters are only available for certain
[ItemType](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#ItemType).
The following lists for each ItemType will show what parameter is only
saved for that specific ItemType script class (sub classes to
[Item](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/scripting/objects/Item.html)),
which means using them for other classes doesn't make any sense as they
will simply not be loaded in by the game.

### base:drainable

- cantBeConsolided
- ConsolidateOption
- Spice
- UseDelta

### base:food

- BadInMicrowave
- Calories
- CannedFood
- Carbohydrates
- DangerousUncooked
- DaysFresh
- DaysTotallyRotten
- Lipids
- Packaged
- Proteins
- RemoveNegativeEffectOnCooked
- ReplaceOnRotten
- Spice

### base:literature

- LearnedRecipes
- LvlSkillTrained

### base:normal

- AmmoType

### base:radio

- UseDelta

### base:weapon

- AimingPerkMinAngleModifier
- AimingPerkRangeModifier
- Aimingtime
- AmmoBox
- AmmoType
- ClickSound
- CriticalChance
- CyclicRateMultiplier
- EnduranceMod
- ExplosionDuration
- ExplosionPower
- ExplosionRange
- FireMode
- FireModePossibilities
- FireRange
- FireStartingChance
- FireStartingEnergy
- HitChance
- HitFloorSound
- HitSound
- ImpactSound
- IsAimedFirearm
- IsAimedHandWeapon
- JamGunChance
- MagazineType
- MaxHitcount
- MaxSightRange
- MinAngle
- MinSightRange
- PhysicsObject
- PiercingBullets
- Projectilecount
- PushBackMod
- Ranged
- RangeFalloff
- RecoilDelay
- ShellFallSound
- StopPower
- SwingSound
- TwoHandWeapon
- UseDelta
- UseEndurance
- WeaponReloadType

### base:weaponpart

- AimingTimeModifier
- HitChanceModifier
- MaxRangeModifier
- MaxSightRange
- MinSightRange
- RecoilDelayModifier

## Parameters

#### AcceptItemFunction

Type  
callback

No description provided.

#### AcceptMediaType

Type  
integer

Default  
`-1`

No description provided.

#### ActivatedItem

Type  
Unknown

No description provided.

#### AimingMod

Type  
Unknown

No description provided.

#### AimingPerkCritModifier

Type  
integer

See parameter CriticalChance.

#### AimingPerkHitChanceModifier

Type  
float

See parameter HitChance.

#### AimingPerkMinAngleModifier

Type  
float

See parameter MinAngle.

#### AimingPerkRangeModifier

Type  
float

See parameter MaxRange.

#### Aimingtime

Type  
integer

[Aimingtime](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingtime)
is a stat which is directly applied to a
[HandWeapon](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/HandWeapon.html)
while
[AimingTimeModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingtimemodifier)
is applied to [weapon
parts](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/WeaponPart.html).
The attachments directly add or subtract their
[AimingTimeModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingtimemodifier)
to the aiming delay.

It controls the aim-settling delay, the aiming delay counter that must
tick down to 0 before the weapon is "settled". Lower values means faster
target reacquisition after each shots. The primary "how snappy does this
gun feel" lever for semi-automatic guns. It tick down the aiming via the
following formula:

``` java
rate = 0.625 x gameSpeed x (1 + 0.05 x AimingLevel + (Marksman ? 0.1 : 0))
```

The [marksman](https://pzwiki.net/wiki/Marksman) trait being no longer
accessible in the recent versions of the game, the condition involving
it will never be reached.

> Note: This formula might not be fully accurate as [time
> deltas](https://github.com/demiurgeQuantified/PZModdingGuides/blob/main/guides/GameTime.md)
> don't appear in the formula.

While `aimingDelay > 0`, both [hit
chance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-hitchance)
and [critical
chance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-criticalchance)
take an aim-delay penalty proportional to the remaining delay. The
countdown only starts after `recoilDelay` has recovered, so high
[RecoilDelay](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelay)
directly delays when `AimingTime` begins ticking.

On each shots or equip, the aiming delay will be increased or reduced,
being impacted by aiming while in a
[vehicle](https://pzwiki.net/wiki/Vehicle), being reduced by the trait
[Dextrous](https://pzwiki.net/wiki/Dextrous) or increased by [All
Thumbs](https://pzwiki.net/wiki/All_Thumbs). The following formula is
used:

``` java
aimingDelay = AimingTime
        * (Dextrous ? 0.8 : AllThumbs ? 1.2 : 1.0)
        * (in vehicle ? 1.5 : 1.0)
```

#### AimingTimeModifier

Type  
integer

See parameter AimingTime.

#### AimReleaseSound

Type  
Unknown

No description provided.

#### AlarmSound

Type  
Unknown

No description provided.

#### Alcoholic

Type  
Unknown

No description provided.

#### AlcoholPower

Type  
Unknown

No description provided.

#### AlwaysKnockdown

Type  
Unknown

No description provided.

#### AlwaysWelcomeGift

Type  
boolean

Is useless  
True

No description provided.

#### AmmoBox

Type  
block (block: [item](./item.md), with `scripts-module`)

No description provided.

#### AmmoType

Type  
string

[AmmoType](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-ammotype)
indicates what ammo is consumed when shooting, but it also determines
tracer and hit-reaction sound lookups. The value needs to reference the
[registries](https://pzwiki.net/wiki/Registries) entry of the ammo you
want to use. The vanilla ammunition types which are available by default
are:

- `base:bullets_3030`
- `base:bullets_308`
- `base:bullets_357`
- `base:bullets_38`
- `base:bullets_44`
- `base:bullets_45`
- `base:bullets_556`
- `base:bullets_9mm`
- `base:cap_gun_cap`
- `base:shotgun_shells`

[AmmoBox](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-ammobox)
is used to indicate the type of ammo box associated to the weapon. This
is mostly used to spawn this type of ammo box alongside the gun.

[MagazineType](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-magazinetype)
is used to set the magazine item the gun uses. If not provided, then the
gun doesn't use a magazine item and loads rounds individually.
[MaxAmmo](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxammo)
is used to set the capacity of either the magazine item or the gun.

[WeaponReloadType](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weaponreloadtype)
is used to select the reload workflow of the gun. Notably affects
rack-after-shot, insertion style and animations. The provided value
references the [variable
condition](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/animNode.html#m-conditions)
`WeaponReloadType` in [AnimNodes](https://pzwiki.net/wiki/AnimNodes).
The game has the following values available by default:

- `handgun`
- `shotgun`
- `boltactionnomag`
- `boltaction`
- `revolver`
- `doublebarrelshotgun`
- `doublebarrelshotgunsawn`

A custom `WeaponReloadType` can be used if the relevant animations and
condition logic are properly set up in a custom
[AnimNode](https://pzwiki.net/wiki/AnimNodes).

#### AngleFalloff

Type  
Unknown

No description provided.

#### AnimalFeedType

Type  
Unknown

No description provided.

#### AttachmentReplacement

Type  
Unknown

No description provided.

#### AttachmentsProvided

Type  
Unknown

No description provided.

#### AttachmentType

Type  
Unknown

No description provided.

#### BadCold

Type  
boolean

#### BadInMicrowave

Type  
boolean

No description provided.

#### BandagePower

Type  
Unknown

No description provided.

#### BaseSpeed

Type  
float

Default  
`1.0`

No description provided.

#### BaseVolumeRange

Type  
Unknown

No description provided.

#### BiteDefense

Type  
Unknown

No description provided.

#### BloodLocation

Type  
array (array of string, separator: ';')

Allowed values  
`Apron` \| `Bag` \| `Foot_L` \| `Foot_R` \| `ForeArm_L` \| `ForeArm_R`
\| `FullHelmet` \| `Groin` \| `Hand_L` \| `Hand_R` \| `Hands` \| `Head`
\| `Jacket` \| `JumperNoSleeves` \| `Jumper` \| `LongJacket` \|
`LowerArms` \| `LowerBody` \| `LowerLeg_L` \| `LowerLeg_R` \|
`LowerLegs` \| `Neck` \| `ShirtLongSleeves` \| `ShirtNoSleeves` \|
`Shirt` \| `Shoes` \| `ShortsShort` \| `Trousers` \| `UpperArm_L` \|
`UpperArm_R` \| `UpperArms` \| `UpperBody` \| `UpperLeg_L` \|
`UpperLeg_R` \| `UpperLegs`

No description provided.

#### BodyLocation

Type  
Unknown

Used to define which location on the human character this clothing item
can be worn. Needs to be a valid
[BodyLocation](https://pz-wiki-modding.github.io/PZ-API-Docs/java/item_body_locations.html)
value. You can also create new ones via
[registries](https://pzwiki.net/wiki/Registries).

#### book_subject

Type  
array (array of string, separator: ';')

Add a subject to the litterature item. The value needs to be an array of
[BookSubject](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/scripting/objects/BookSubject.html)
values.

[book_subject](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-book-subject)
is for books while
[magazine_subject](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-magazine-subject)
is for magazines.

This is notably used to pick a random book or magazine when spawning a
book.

#### BoredomChange

Type  
integer

See parameter HungerChange.

#### brakeForce

Type  
Unknown

No description provided.

#### BreakSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### BringToBearSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### BulletDefense

Type  
Unknown

No description provided.

#### BulletHitArmourSound

Type  
Unknown

No description provided.

#### Calories

Type  
float

The following stats are directly linked to the player's
[nutrition](https://pzwiki.net/wiki/Nutrition), which are hidden stats
that will impact the player's weight gains and more (positive values
will increase the stat when eaten):

- [Calories](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-calories)
- [Carbohydrates](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-carbohydrates)
- [Lipids](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-lipids)
- [Proteins](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-proteins)

#### CanAttach

Type  
callback

[CanAttach](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-canattach)
and
[CanDetach](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-candetach)
are used to define whenever a
[WeaponPart](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype)
can be respectively attached or detached to and from a
[HandWeapon](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype).

[OnAttach](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-onattach)
and
[OnDetach](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-ondetach)
are used to define a callback function which will be called when the
weapon part is attached or detached from the weapon.

#### CanBandage

Type  
Unknown

No description provided.

#### CanBarricade

Type  
Unknown

No description provided.

#### CanBeEquipped

Type  
Unknown

Needs to reference a valid
[BodyLocation](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-bodylocation)
value which will serve as the equipment location.

#### CanBePlaced

Type  
Unknown

No description provided.

#### CanBeRemote

Type  
Unknown

No description provided.

#### CanBeReused

Type  
Unknown

No description provided.

#### CanBeWrite

Type  
Unknown

No description provided.

#### CanDetach

Type  
callback

See parameter CanAttach.

#### CanHaveHoles

Type  
boolean

Default  
`True`

Used to define whenever this item can get holes in it.

#### CannedFood

Type  
boolean

[CannedFood](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-cannedfood)
will mark the item as a canned food which will impact how it is spawned
in the world. It will also impact the type of item where instead of
being "Food" it will be "CannedFood".

#### CanStack

Type  
Unknown

No description provided.

#### CanStoreWater

Type  
Unknown

No description provided.

#### CantAttackWithLowestEndurance

Type  
Unknown

No description provided.

#### cantBeConsolided

Type  
boolean

See parameter ConsolidateOption.

#### CantBeFrozen

Type  
Unknown

No description provided.

#### CantEat

Type  
Unknown

No description provided.

#### Capacity

Type  
integer

Default  
`-1`

Maximum  
`50`

Sets the capacity of the container. This value is limited to a maximum
of 50 minus its own
[weight](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weight).
The weight of the bag will follow the formula
`equippedWeight = weight * EquippedOrWornEncumbranceMultiplier + contentWeight * (1.0 - weightReduction / 100)`.

#### Carbohydrates

Type  
float

See parameter Calories.

#### Categories

Type  
Unknown

No description provided.

#### ChanceToFall

Type  
Unknown

No description provided.

#### ChanceToSpawnDamaged

Type  
Unknown

No description provided.

#### ClickSound

Type  
block (block: [sound](./sound.md))

Default  
`Stormy9mmClick`

No description provided.

#### ClipSize

Type  
integer

Is useless  
True

No description provided.

#### ClipSizeModifier

Type  
integer

Is useless  
True

No description provided.

#### CloseKillMove

Type  
Unknown

Used to whenever this weapon can be used to do a close kill move, like
knives to assassinate in the back.

#### CloseSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### ClothingExtraSubmenu

Type  
Unknown

See parameter ClothingItem.

#### ClothingItem

Type  
Unknown

`ClothingItem` references the clothing defined inside the
[clothing.xml](https://pzwiki.net/wiki/Clothing.xml) file.
`ClothingExtraSubmenu` will define the name of the context menu option
to equip the clothing item.

`ClothingItemExtra` and `ClothingItemExtraOption` are used to define
additional clothing equip options, they reference another item script
block.

#### ClothingItemExtra

Type  
Unknown

See parameter ClothingItem.

#### ClothingItemExtraOption

Type  
Unknown

See parameter ClothingItem.

#### ColorBlue

Type  
integer

Default  
`255`

No description provided.

#### ColorGreen

Type  
integer

Default  
`255`

No description provided.

#### ColorRed

Type  
integer

Default  
`255`

No description provided.

#### CombatSpeedModifier

Type  
float

Default  
`1.0`

No description provided.

#### ConditionAffectsCapacity

Type  
Unknown

Set whenever condition of the item can impact the capacity value of the
container.

#### ConditionLowerChanceOneIn

Type  
integer

Default  
`10`

[ConditionLowerChanceOneIn](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-conditionlowerchanceonein)
impacts the durability of the item, reducing the value used to calculate
the chance by doing `chance = 1/ConditionLowerChanceOneIn`, which means
increasing this parameter value will reduce the chance to damage the
item.

[ConditionMax](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-conditionmax)
sets the total durability pool, starting condition and repair ceiling.
Make these two parameters high for robust military rifles, and low for a
cheap civilian gun.

#### ConditionLowerOffroad

Type  
Unknown

No description provided.

#### ConditionLowerStandard

Type  
Unknown

No description provided.

#### ConditionMax

Type  
integer

Default  
`10`

See parameter
ConditionLowerChanceOneIn.

#### ConsolidateOption

Type  
Unknown

By setting
[cantBeConsolided](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-cantbeconsolided)
to `false` and providing a
[ConsolidateOption](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-consolidateoption)
value, the item can be marked to merge its uses with other items of the
same type in the inventory. This requires the item to be [Drainable
type](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype).

The ConsolidateOption value needs to be a translation key which will be
passed through
[getText](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/core/Translator.html#getText(java.lang.String))
to retrieve the translation value. The vanilla drainables (duct tape,
wires, matches...) use the translation key `ContextMenu_Merge` which
outputs a text 'Add to'.

#### CookingSound

Type  
block (block: [sound](./sound.md))

Custom sound to play when cooking this item.

#### CorpseSicknessDefense

Type  
Unknown

No description provided.

#### Cosmetic

Type  
Unknown

No description provided.

#### Count

Type  
integer

Default  
`1`

The parameter is unused in the game scripts, unclear what it is used
for.

#### CritDmgMultiplier

Type  
float

Default  
`2.0`

Multiplier applied to the damage of a hit if it is a critical hit,
applied inside
[IsoGameCharacter.Hit()](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/characters/IsoGameCharacter.html#Hit(zombie.inventory.types.HandWeapon,zombie.characters.IsoGameCharacter,float,boolean,float,boolean)).
Two types of crits can trigger:

- A normal crit: `damage *= max(2.0, CritDmgMultiplier)`
- Aim-at-floor stomp (melee only):
  `damage *= max(5.0, CritDmgMultiplier)`

The default value of the `HandWeapon` class is `2.0`. Values of `3.0` to
`5.0` visibly spike crit damage while values above `5.0` also start
boosting stomps.

#### CriticalChance

Type  
float

Default  
`20.0`

[CriticalChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-criticalchance)
sets the base critical hit chance of the weapon. The final
`CriticalChance` value after all applied bonuses and penalties have been
applied is compared on a 0-100 roll.

Below is a table listing the different elements which can influence the
critical hit chance of a weapon:

| Element | Type | Description | Formula |
|----|----|----|----|
| [AimingPerkCritModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingperkcritmodifier) and [aiming skill](https://pzwiki.net/wiki/Aiming) of the character | Weapon parameter | The aiming level of the character impacts the player's critical hit chance by adding the following to the `CriticalChance` value. | `CriticalChance += AimingPerkCritModifier * Aiming level` |
| Sight bonus / penalty | Weapon parameter | In the formula, `sightWindowBonus` refers to the bonus from [MinSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minsightrange) and [MaxSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxsightrange). `sightlessBonus` on the other hand is a simpler parameter which uses a distance falloff when there is not active sight. The best path is used for the better result. The aim delay penalty depends on [Aimingtime](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingtime) | `CriticalChance += max(sightlessBonus - sightlessAimDelayPenalty, sightWindowBonus - sightWindowAimDelayPenalty)` |
| Moodles penalty | Player condition | Being panicked, stressed, tired, drunk or lacking endurance will all negatively impact the `CriticalChance`. | `CriticalChance -= moodlesPenalty` |
| Weather penalty | Environment | Wind, rain, fog, low-light will all negatively impact the `CriticalChance`. | `CriticalChance -= weatherPenalty` |
| Movement penalty | Player condition | The shooter speed and the distance will negatively impact the `CriticalChance`. | `CriticalChance -= movementPenalty` |
| [Marksman trait](https://pzwiki.net/wiki/Marksman) | Player condition | This condition can never be reached as the Marksman trait no longer exists. | `CriticalChance += 10` |

For PvP targets, the entire formula is bypassed and
[StopPower](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-stoppower)
is used instead. `StopPower` is never used against non-player targets.

``` 
CriticalChance = StopPower * ( 1 + Aiming level / 15)
```

`CriticalChance` sets the floor for unskilled players while
`AimingPerkCritModifier` rewards more or less the character ability to
aim. High modified and low base chance means the weapon is a skill-gated
crit machine, making the weapon a sort of "experts" weapon.

#### CustomContextMenu

Type  
Unknown

No description provided.

#### CustomEatSound

Type  
block (block: [sound](./sound.md))

Can be empty  
True

Custom sound to play when eating or drinking this item. Set to an empty
string to disable any sound from playing.

#### CyclicRateMultiplier

Type  
float

Default  
`1.0`

Minimum  
`0.0`

Only in `Auto` [fire
mode](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firemode).
Drives the full-auto animation cycle rate via the `autoShootSpeed`
[animation variable](https://pzwiki.net/wiki/Conditions).

A higher value means more shots per second. In `Single` mode this field
is ignored and shot speed comes from
[RecoilDelay](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelay)
and
[Aimingtime](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingtime)
instead.

Increase for SMG feel and decrease for heavy LMG feel.

#### DamageCategory

Type  
Unknown

No description provided.

#### DamageMakeHole

Type  
Unknown

No description provided.

#### DamageModifier

Type  
float

See parameter MaxDamage.

#### DangerousUncooked

Type  
boolean

If true, the item will cause food poisoning when eaten raw. Used for
example for raw meat. The [iron gut](https://pzwiki.net/wiki/Iron_Gut)
trait will stop you from getting sick from eating a raw food with the
[tag](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-tags)
`Egg`. The severity of the food poisoning is not impacted by traits or
other criteria, only by the quantity of food you eat.

#### DaysFresh

Type  
integer

Default  
`1000000000`

[DaysFresh](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-daysfresh)
sets how many days this food item will stay fresh with default sandbox
settings.
[DaysTotallyRotten](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-daystotallyrotten)
sets how many days this food item will take to rot.

[Icon](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-icon)
provides the ability to set a different icon for the rotten and stale
version of the food.

#### DaysTotallyRotten

Type  
integer

Default  
`1000000000`

See parameter DaysFresh.

#### DigitalPadlock

Type  
boolean

Looks unused by the game.

#### DigType

Type  
Unknown

No description provided.

#### DisappearOnUse

Type  
boolean

Default  
`True`

No description provided.

#### DiscomfortModifier

Type  
Unknown

No description provided.

#### DisplayCategory

Type  
Unknown

No description provided.

#### DisplayName

Type  
Unknown

Deprecated  
{'description': 'Naming an item should be done with a translation entry.
See the \[wiki\](<https://pzwiki.net/wiki/DisplayName>) page for more
information.', 'version': '42.13.0'}

Sets the name of the item which will be displayed in-game. It's
recommended to use a translation entry for this parameter to allow
localization of the item name.

#### DoorDamage

Type  
integer

Default  
`1`

Minimum  
`1`

Damage dealt to doors, windows, barricades and some vehicle/object hits.
The damage to doors cannot go lower than 1, even in the formulas it is
clamped to a minimum of 1. The formula used to retrieve the damage to
doors is:

``` 
damage = max(1, DoorDamage * sharpness multiplier)
```

More parameters will impact the door damage based on where it is used.

#### DoorHitSound

Type  
string

Default  
`BaseballBatHit`

No description provided.

#### DoubleClickRecipe

Type  
block (block: [craftRecipe](./craftrecipe.md), with
`scripts-module`)

No description provided.

#### DropSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### Eattime

Type  
Unknown

No description provided.

#### EatType

Type  
string

Used mostly on the Lua side and in
[AnimNodes](https://pzwiki.net/wiki/AnimNode) as a
[condition](https://pz-wiki-modding.github.io/PZ-API-Docs/xml/animNode.html#m-conditions)
to mark what animation to use when eating this item. Based on the type
of item, this is directly applied to the `FoodType` animation condition.

Here's a small summary of some special conditions:

- `Pot` and `PotForged` are applied directly, and will force the item to
  be held in the right hand and removing other items from the left hand,
  meant for a pot held with two hands.
- `popcan` forces drinking [timed
  action](https://pzwiki.net/wiki/Timed_Action_(Lua)) `maxTime` to a
  flat `160`.
- `Candrink` will make the player uses an item with the spoon or
  [fork](https://pzwiki.net/wiki/Fork#Eating) tag in their inventory. A
  "scraping" sound will also be played when using an utensil and 70% of
  the eating action is passed.
- `Plate` can also use a fork or spoon.
- `2handbowl` will use only spoons in the player inventory.

There also exists more generic ones:

- `2hand`
- `plate` (different than `Plate`)
- `EatSmall`
- `EatBox`

You can use any custom value which will be passed to the `FoodType`
condition.

#### EjectAmmoSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### EjectAmmoStartSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### EjectAmmoStopSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### enduranceChange

Type  
float

No description provided.

#### EnduranceMod

Type  
float

Default  
`1.0`

See parameter UseEndurance.

#### engineLoudness

Type  
Unknown

No description provided.

#### EquippedNoSprint

Type  
Unknown

No description provided.

#### EquipSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### EvolvedRecipe

Type  
object (object: block-\>\>string, kv: ':', pairs: ';')

[EvolvedRecipe](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-evolvedrecipe)
is used to list the [evolved
recipes](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/evolvedrecipe.html)
this item can be used in as an ingredient. The syntax needs to be as
follows:

``` cpp
EvolvedRecipe = recipeName1:quantity1;recipeName2:quantity2;recipeName3:quantity3,
```

A custom flag `cooked` can also be added for specific recipes, for
example:

``` cpp
EvolvedRecipe = recipeName1:quantity1|cooked;recipeName2:quantity2;recipeName3:quantity3,
```

Here the `recipeName1` will require the item to be cooked first before
being used in the recipe.

A simpler syntax is also technically supported where the quantity can be
omitted:

``` cpp
EvolvedRecipe = recipeName1;recipeName2:quantity2;recipeName3,
```

[EvolvedRecipeName](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-evolvedrecipename)
can be used to set the name of the item that will be displayed in the
result item. That parameter gets ignored if the game language is not
english, and due to a bug it won't even use the translation of the item
so it will use the fullType.

#### EvolvedRecipeName

Type  
Unknown

See parameter EvolvedRecipe.

#### ExplosionDuration

Type  
integer

See parameter ExplosionRange.

#### ExplosionPower

Type  
integer

See parameter ExplosionRange.

#### ExplosionRange

Type  
integer

[FireStartingChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firestartingchance)
out of 100 is a chance of the explosion to set on fire tiles and burn
characters in the
[ExplosionRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-explosionrange).
A value above 100 means the explosion will always set on fire tiles and
burn characters, while a value of 0 means it will never set on fire
tiles nor burn characters. Each tiles in the explosion range will run
the
[FireStartingChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firestartingchance)
check independently, so a value of 50 means that on average half of the
tiles in the explosion range will be set on fire.

If
[ExplosionPower](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-explosionpower)
is set above 0, the explosion will burn tiles and set fire to them based
on the provided
[fireStartingChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firestartingchance).

[extraDamage](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-extradamage)
is used to add a net bonus damage dealt by the trap.

The damage the trap deals is calculated as follows:

``` 
damage = random(explosionPower/20, explosionPower/20 * 2) + extraDamage
```

[SmokeRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-smokerange)
sets the range of the smoke effect. Squares in this range also can be
set on fire individually based on
[FireStartingChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firestartingchance).

[FireRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firerange)
will set every tiles in the provided range on fire.

[FireStartingEnergy](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firestartingenergy)
is an extra check added on top of all of these whenever a fire is
attempted to be started. Will set the energy of the fire which impacts
how strong is is. A value of 0 means no fire is started. Vegetation
tiles provide a net bonus of 50 in energy to the fire being created. The
created fire will have a life expectency between 300 and 600 (unclear on
the units).

[ExplosionSound](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-explosionsound)
can be used to set the sound played when the explosion happens, while
[ExplosionDuration](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-explosionduration)
can be used to set the duration of the explosion effect, which is
especially useful for smoke bombs.

#### ExplosionSound

Type  
block (block: [sound](./sound.md))

See parameter ExplosionRange.

#### ExplosionTimer

Type  
Unknown

No description provided.

#### extraDamage

Type  
float

See parameter ExplosionRange.

#### FabricType

Type  
Unknown

No description provided.

#### fatigueChange

Type  
Unknown

No description provided.

#### FillFromDispenserSound

Type  
Unknown

No description provided.

#### FillFromLakeSound

Type  
Unknown

No description provided.

#### FillFromTapSound

Type  
Unknown

No description provided.

#### FillFromToiletSound

Type  
Unknown

No description provided.

#### FireFuelRatio

Type  
Unknown

Is useless  
True

No description provided.

#### FireMode

Type  
string

[FireModePossibilities](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firemodepossibilities)
lists the available fire modes of the weapon, and the player can
automatically switch between them with the relevant keybind.
[FireMode](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-firemode)
sets the default fire mode of the weapon, which is the one it will spawn
with.

The vanilla fire modes are:

- `Single`
- `Auto`

Other values are not supported by the game and will be considered as
`Single`.

#### FireModePossibilities

Type  
array (array of string, separator: '/')

See parameter FireMode.

#### FireRange

Type  
Unknown

See parameter ExplosionRange.

#### FireStartingChance

Type  
integer

See parameter ExplosionRange.

#### FireStartingEnergy

Type  
integer

No description provided.

#### FishingLure

Type  
Unknown

No description provided.

#### fluReduction

Type  
integer

When eating this food item, the player cold or pain will be reduced by
the percentage of the food being eaten times respectively the values of
[fluReduction](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-flureduction)
and
[painReduction](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-painreduction).

#### FoodSicknessChange

Type  
integer

Set the base food sickness change.

The amount of food sickness you get varies based on this parameter and
other factors:

- burnt food will divide by 3 the amount of food sickness you get
- stale food will divide by 1.3
- rotten food will divide by 2.2
- cooked food will multiply by 1.3
- raw food provides this base value

#### FoodType

Type  
string

Sets the food type of the item. A translation entry needs to be made for
custom types which has the key `ContextMenu_FoodType_<type>`.

To be a valid food item to feed to animals, the item needs to be of type
`Fruits` or `Vegetables`.

#### GoodHot

Type  
Unknown

[GoodHot](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-goodhot)
reduces by a flat 2 the happiness change when eating this food hot. On
the other hand,
[BadCold](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-badcold)
increases by a flat 2 the unhappiness change when eating this food cold.

#### GunType

Type  
Unknown

No description provided.

#### HaveChamber

Type  
boolean

Default  
`True`

Whether the weapon has a chamber that can hold a round in addition to
its magazine.

#### HeadCondition

Type  
Unknown

No description provided.

#### HeadConditionLowerChanceMultiplier

Type  
float

Default  
`1.0`

No description provided.

#### HeadConditionMax

Type  
Unknown

No description provided.

#### HearingModifier

Type  
float

Default  
`1.0`

No description provided.

#### HerbalistType

Type  
Unknown

No description provided.

#### Hidden

Type  
Unknown

No description provided.

#### HitAngleMod

Type  
Unknown

No description provided.

#### HitChance

Type  
integer

[HitChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-hitchance)
is a stat which is directly applied to a
[HandWeapon](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/HandWeapon.html)
while
[HitChanceModified](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-hitchancemodifier)
is applied to [weapon
parts](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/WeaponPart.html).

The initial hitchance is determined by the following configuration:

``` 
HitChance = min(HitChance, CombatConfigKey.MAXIMUM_START_TO_HIT_CHANCE)
```

[MAXIMUM_START_TO_HIT_CHANCE](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/combat/CombatConfigKey.html#MAXIMUM_START_TO_HIT_CHANCE)
is a configuration of the combat system of Project Zomboid. In this
case, the default value is `95.0`, which means the initial HitChance
cannot be above `95.0`.

Below is a table listing the different elements which can influence the
hit chance of a weapon:

| Element | Type | Description | Formula |
|----|----|----|----|
| [AimingPerkHitChanceModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingperkhitchancemodifier) and [aiming skill](https://pzwiki.net/wiki/Aiming) of the character | Weapon parameter | The aiming level of the character impacts the player's hit chance. | `HitChance += AimingPerkHitChanceModifier * Aiming level` |
| Sight bonus / penalty | Weapon parameter | In the formula, `sightWindowBonus` refers to the bonus from [MinSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minsightrange) and [MaxSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxsightrange). `sightlessBonus` on the other hand is a simpler parameter which uses a distance falloff when there is not active sight. The best path is used for the better result. | `HitChance += max(sightlessBonus - sightlessAimDelayPenalty, sightWindowBonus - sightWindowAimDelayPenalty)` |
| Moodles penalty | Player condition | Being panicked, stressed, tired, drunk or lacking endurance will all negatively impact the `HitChance`. | `HitChance -= moodlesPenalty` |
| Weather penalty | Environment | Wind, rain, fog, low-light will all negatively impact the `HitChance`. | `HitChance -= weatherPenalty` |
| Movement penalty | Player condition | The shooter speed and the distance will negatively impact the `HitChance`. | `HitChance -= movementPenalty` |
| Arm pain penalty | Player condition | The character's level of [pain](https://pzwiki.net/wiki/Pain) will impact its aiming. | `HitChance -= armPainPenalty` |
| Headgear vision penalty | Player condition | Headgear will impact aiming, if the relevant sandbox option is enabled. | `HitChance -= headgearVisionPenalty` |

The final obtained value of `HitChance` is clamped against the
[MINIMUM_TO_HIT_CHANCE](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/combat/CombatConfigKey.html#MINIMUM_TO_HIT_CHANCE)
and
[MAXIMUM_TO_HIT_CHANCE](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/combat/CombatConfigKey.html#MAXIMUM_TO_HIT_CHANCE),
both respectively equal to `5.0` and `100.0` by default.

At point-blank range, all combined penalties are scaled toward zero, so
close shots are always more forgiving. The
[HitChance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-hitchance)
parameter will set the floor for all players while
[AimingPerkHitChanceModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingperkhitchancemodifier)
will increase accuracy with the level of aiming of the player. Low base
and high modifier makes the gun terrible while unskilled but excellent
with investment in aiming.

#### HitChanceModifier

Type  
integer

See parameter HitChance.

#### HitFloorSound

Type  
block (block: [sound](./sound.md))

Default  
`BatOnFloor`

No description provided.

#### HitSound

Type  
block (block: [sound](./sound.md))

Default  
`BaseballBatHit`

No description provided.

#### HungerChange

Type  
float

Different stats are available for food items which will impact the
player's hunger, thirst, boredom etc.

- [HungerChange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-hungerchange)
  when negative will reduce the hunger of the player, with `100` the
  maximum amount of hunger of a player
- [ThirstChange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-thirstchange)
  when negative will reduce the thirst of the player, with `100` the
  maximum amount of thirst of a player
- [UnhappyChange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-unhappychange)
  when positive will decrease the player's unhappiness, with `100` the
  maximum amount of unhappiness of a player
- [StressChange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-stresschange)
  when negative will reduce the stress of the player, with `100` the
  maximum amount of stress of a player
- [BoredomChange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-boredomchange)
  when negative will reduce the boredom of the player, with `100` the
  maximum amount of boredom of a player

#### Icon

Type  
string

Default  
`None`

Used to specify the icon of the item, usually used in the inventory and
crafting menus to easily recognize the item. The icon file needs to be
located inside the `media/textures/` folder and the file name must start
with `Item_`, and be of the extension `.png`.

``` 
📁 media
  📁 textures
    📄 Item_iconName.png
```

When referencing the icon in the item script, you should not include the
`Item_` prefix and the `.png` extension. For example, to reference the
icon file above in the item script:

``` 
Icon = iconName,
```

#### Subfolders

Subfolders are not directly supported, but you can use some tricks to
have them working. Here's a simple example:

``` 
Icon = subFolder/iconName,
```

Means your folder structure should be:

``` 
📁 media
  📁 textures
    📁 Item_subFolder
      📄 iconName.png
```

Notice how the `Item_` prefix is not on the file but on the folder in
this case.

#### Food icons

Icons can be specified for rotten, cooked and burned food
(`ItemType = base:food,`) by adding the following suffix to the icon
files:

- `Rotten` or `Spoiled` for food that has rotten, meaning has passed the
  [DaysTotallyRotten](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-daystotallyrotten)
  value.
- `Cooked` for food that has been cooked, meaning has passed the
  [MinutesToCook](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minutestocook)
  value.
- `Overdone` or `Burnt` for food that has been cooked to the point of
  burning, meaning has passed the
  [MinutesToBurn](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minutestoburn)
  value.

For example, take a food item with the icon file defined as such:

``` 
Icon = iconName,
```

To add variants based on food condition, you would have the following
file structure:

``` 
📁 media
  📁 textures
    📄 Item_iconName.png
    📄 Item_iconNameCooked.png
    📄 Item_iconNameRotten.png
    📄 Item_iconNameBurnt.png
```

[IconsForTexture](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-iconsfortexture)
can be used alongside
[WorldStaticModelsByIndex](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-worldstaticmodelsbyindex)
and
[StaticModelsByIndex](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-staticmodelsbyindex)
to have variant icons for different models, and all for the same item
definition. See those parameters definitions for more information.

#### IconColorMask

Type  
Unknown

No description provided.

#### IconFluidMask

Type  
Unknown

No description provided.

#### IconsForTexture

Type  
array (array of string, separator: ';')

See parameter Icon.

#### IdleAnim

Type  
string

Default  
`Idle`

No description provided.

#### ImpactSound

Type  
block (block: [sound](./sound.md))

Default  
`BaseballBatHit`

No description provided.

#### InsertAllBulletsReload

Type  
Unknown

No description provided.

#### InsertAmmoSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### InsertAmmoStartSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### InsertAmmoStopSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### Insulation

Type  
Unknown

No description provided.

#### InverseCoughProbability

Type  
Unknown

No description provided.

#### InverseCoughProbabilitySmoker

Type  
Unknown

No description provided.

#### IsAimedFirearm

Type  
boolean

[IsAimedFirearm](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-isaimedfirearm)
enables the entire aimed-firearm subsystem: ballistics controller,
reticle, muzzle flash, firearm-specific condition handling and
ballistics-base target detection. Without it the weapon falls back to
melee sweep logic.

Set to `true` for any normal gun. Distinct from
[Ranged](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-ranged)
which marks the item as a ranged weapon for the animations
[conditions](https://pzwiki.net/wiki/Conditions).

#### IsAimedHandWeapon

Type  
boolean

No description provided.

#### IsCookable

Type  
boolean

[IsCookable](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-iscookable)
marks as the item as cookable.

[MinutesToCook](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minutestocook)
controls how many in-game minutes it takes for the food to be fully
cooked.

[MinutesToBurn](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minutestoburn)
controls how many in-game minutes it takes for the food to burn. This
value must be higher than
[MinutesToCook](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minutestocook)
or your item will be instantly burnt before being fully cooked.

[RemoveNegativeEffectOnCooked](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-removenegativeeffectoncooked)
will remove any negative changes in thirst, unhappiness and boredom when
the food is cooked.

[BadInMicrowave](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-badinmicrowave)
will set the unhappiness and boredom changes to `5.0` when cooked in a
microwave.

#### IsDung

Type  
boolean

No description provided.

#### IsHighTier

Type  
Unknown

No description provided.

#### IsPortable

Type  
Unknown

No description provided.

#### IsTelevision

Type  
Unknown

No description provided.

#### IsWaterSource

Type  
Unknown

No description provided.

#### ItemAfterCleaning

Type  
Unknown

No description provided.

#### ItemType

Type  
string

Required  
True

Allowed values  
`base:alarmclock` \| `base:alarmclockclothing` \| `base:animal` \|
`base:clothing` \| `base:container` \| `base:drainable` \| `base:food`
\| `base:key` \| `base:literature` \| `base:map` \| `base:moveable` \|
`base:normal` \| `base:radio` \| `base:weapon` \| `base:weaponpart`

Defines the class of the item which will impact which parameters the
item can take and its properties as well as how it is used by the
player. Clothing for instance will handle differently their texture and
model in comparison to the other type of items, containers can hold
items and weapons can be used by the player to attack and deal damage.
You cannot use a custom class of item and only the ones accepted by the
game.

#### ItemWhenDry

Type  
block (block: [item](./item.md), with `scripts-module`)

See parameter Wet.

#### JamGunChance

Type  
float

Default  
`1.0`

Base probability of a jam on each trigger pull. Final jam roml also
scales with the sandbox jam multiplier, current gun condition (lower
condition = higher jam chance), and low Aiming/Strength.

`JamGunChance = 1` is already low. Setting it to `0` basically disables
jams from this weapon. Higher values makes the gun unreliable and
punishes neglecting the gun or unskilled use.

#### KeepOnDeplete

Type  
Unknown

No description provided.

#### KnockBackOnNoDeath

Type  
Unknown

No description provided.

#### KnockdownMod

Type  
float

Default  
`1.0`

No description provided.

#### LearnedRecipes

Type  
array (array of block, separator: ';')

List of
[craftRecipe](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html)
this item will teach the player when read.

#### LightDistance

Type  
integer

See parameter LightStrength.

#### LightStrength

Type  
float

[LightDistance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-lightdistance)
is used to determine the radius of the light emitted by the item. It is
compared to the [Manhattan
distance](https://en.wikipedia.org/wiki/Taxicab_geometry) of the item to
the square. The higher the value, the higher is the radius of the light.

[LightStrength](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-lightstrength)
will boost the light emitted.

``` 
new_light_level = current_light_level + 3 * LightStrength * (1 - clamp(dist / LightDistance, 0.0, 1.0))
```

The `new_light_level` is limited to a maximum of `2.5`.

#### Lipids

Type  
float

See parameter Calories.

#### LowLightBonus

Type  
float

Is useless  
True

No description provided.

#### LvlSkillTrained

Type  
integer

Default  
`-1`

See parameter SkillTrained.

#### magazine_subject

Type  
array (array of string, separator: ';')

You can find a list of subjects in the
[MagazineSubject](https://pz-wiki-modding.github.io/PZ-API-Docs/java/magazine_subject.html).

#### MagazineType

Type  
block (block: [item](./item.md), with `scripts-module`)

See parameter AmmoType.

#### MakeUpType

Type  
Unknown

No description provided.

#### ManuallyRemoveSpentRounds

Type  
Unknown

No description provided.

#### Map

Type  
Unknown

No description provided.

#### MaxAmmo

Type  
integer

No description provided.

#### MaxCapacity

Type  
integer

Default  
`-1`

No description provided.

#### MaxChannel

Type  
integer

Default  
`108000`

No description provided.

#### MaxDamage

Type  
float

Default  
`1.5`

Rolls the hit damage of the weapon between `MinDamage` and `MaxDamage`.

[WeaponParts](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype)
can modify the damage of the weapon with the
[DamageModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-damagemodifier)
parameter. When equipped, a
[WeaponPart](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype)
will increase the minimum and maximum damage of the weapon by the
provided value. You are not limited to positive values, you can also add
damage debuffs to the weapon by providing negative values.

#### MaxHitcount

Type  
integer

Default  
`1000`

[MaxHitcount](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxhitcount)
sets the maximum number of targets the weapon can hit with one attack.
For ranged weapons, it will determine how many targets a single shot can
hit. For melee weapons, a single swing can hit multiple targets if the
relevant sandbox option allows it (Weapon Multi-Hit).

When
[PiercingBullets](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-piercingbullets)
is `true`, a shot continues past the first target and registers on
collinear targets behind it. Each subsequent pierced target receives
reduced damage (`damage / PIERCING_BULLET_DAMAGE_REDUCTION`). Targets
must be within approximatively 1 degree of each other in angle to
qualify.

Keep `MaxHitcount` to 1 for a standard rifle, and set it to 2 with
[PiercingBullets](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-piercingbullets)
to have AP rounds behavior (M16A2 for example).

#### MaxItemSize

Type  
Unknown

No description provided.

#### MaxRange

Type  
float

Default  
`1.0`

[MaxRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxrange)
is a stat which is directly applied to a
[HandWeapon](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/HandWeapon.html)
while
[MaxRangeModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxrangemodifier)
is applied to [weapon
parts](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/WeaponPart.html).

The
[MaxRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxrange)
of a weapon is used to determine the maximum distance the weapon can
shoot. Targets beyond `effectiveMaxRange` calculated with the formula
below simply can't be reached, the parameter is a hard cutoff, not a
penalty in damage or anything like that.

``` 
effectiveMaxRange = MaxRange + AimingPerkRangeModifier x (AimingLevel / 2.0)
```

All rifles from the base game have a `AimingPerkRangeModifier` of 0, so
[aiming level](https://pzwiki.net/wiki/Aiming) has no effect on the
range of guns. Set it above 0 to give skilled players extra reach.

#### MaxRangeModifier

Type  
float

See parameter MaxRange.

#### MaxSightRange

Type  
float

[MinSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minsightrange)
and
[MaxSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxsightrange)
define the optimal sight window, to be more specific, the distance band
where hits and critical hits bonuses peak.

The [aiming skill](https://pzwiki.net/wiki/Aiming) and [eagle
eyed](https://pzwiki.net/wiki/Eagle_Eyed) will impact these values:

``` 
effectiveMin = MinSightRange x (1 - AimingLevel / 30)
effectiveMax = MaxSightRange x (1 + AimingLevel / 30) x (EagleEyed ? 1.2 : 1.0)
```

At aiming 10, the minimum shrinks by 33% and the max grows by 33%, which
widens the window significantly. When the trait [Short
Sighted](https://pzwiki.net/wiki/Short_Sighted) is present and the
character doesn't wear glasses, the `effectiveMax` equals
`effectiveMin`, making the entire bonus window disappear.

Inside the the `effectiveMin` and `effectiveMax` window, the bonus
follows a [Gaussian](https://en.wikipedia.org/wiki/Bell-shaped_function)
with the bonus peaking at the midpoint. Aim-delay penalty is also
reduced inside the window.

Below `effectiveMin`, a small linear penalty is applied as the gun is
not suited for point-blank. Above `effectiveMax`, a growing quadratic
penalty is applied, the bonus degrades rapidly past the edge.

A CQC gun should have a low
[MaxSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-maxsightrange)
while a marksman riffle should have a high
[MinSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minsightrange)
with a wide window.

#### MechanicsItem

Type  
Unknown

No description provided.

#### MediaCategory

Type  
Unknown

No description provided.

#### Medical

Type  
Unknown

No description provided.

#### MetalValue

Type  
Unknown

No description provided.

#### MicRange

Type  
Unknown

No description provided.

#### MinAngle

Type  
float

Default  
`1.0`

For
[IsAimedFirearm](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-isaimedfirearm)
set to `true`, the ballistics controller handles target detection and
does not use
[MinAngle](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minangle)
in the ranged hit-chance formula. These serve one narrow purpose: the
`isMeleeTargetTooCloseToShoot()` check, detecting if a target is so
close it should trigger a melee strike instead of a shot.

`MinAngle` is a dot-product threshold (-1 to 1). Values near 1.0 mean
the target must be almost directly in front to trigger the melee-swap
check, while lower values widen the angle.

[AimingPerkMinAngleModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-aimingperkminanglemodifier)
is parsed and stored and impacts the minimum angle with the following
formula:

``` java
effectiveMinAngle = MinAngle - AimingPerkMinAngleModifier * Aiming level
```

#### MinChannel

Type  
integer

Default  
`88000`

No description provided.

#### MinDamage

Type  
float

See parameter MaxDamage.

#### MinimumSwingtime

Type  
Unknown

No description provided.

#### MinRange

Type  
float

Hard minimum attack distance. If the target is closer than `MinRange`,
the ballistics controller does not register the shot and the game may
force a melee swap. This is a binary threshold, not a penalty band.
Separate from
[MinSightRange](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-minsightrange).

Long rifles should be hard to use in tight spaces. `0.2` to `0.35` is a
small gap but `0.61` is noticeably limiting indoors.

#### MinSightRange

Type  
float

See parameter MaxSightRange.

#### MinutesToBurn

Type  
float

Default  
`120.0`

See parameter IsCookable.

#### MinutesToCook

Type  
float

Default  
`60.0`

See parameter IsCookable.

#### ModelWeaponPart

Type  
array (array of string, separator: ' ')

No description provided.

#### MountOn

Type  
array (array of string, separator: ';')

No description provided.

#### MultipleHitConditionAffected

Type  
boolean

Default  
`True`

No description provided.

#### MuzzleFlashModelKey

Type  
block (block: [model](./model.md))

No description provided.

#### NeckProtectionModifier

Type  
float

Default  
`1.0`

No description provided.

#### needtobeclosedoncereload

Type  
Unknown

No description provided.

#### NoiseDuration

Type  
Unknown

No description provided.

#### NoiseRange

Type  
Unknown

No description provided.

#### NoTransmit

Type  
Unknown

No description provided.

#### NPCSoundBoost

Type  
float

Default  
`1.0`

No description provided.

#### NumberOfPages

Type  
integer

Default  
`-1`

See parameter SkillTrained.

#### NumLevelsTrained

Type  
integer

Default  
`1`

See parameter SkillTrained.

#### OnAttach

Type  
callback

See parameter CanAttach.

#### OnBreak

Type  
callback

Triggered when the item condition drops below 0.

#### OnCooked

Type  
callback

No description provided.

#### OnCreate

Type  
callback

Triggered when the item is instantiated.

#### OnDetach

Type  
callback

See parameter CanAttach.

#### OnEat

Type  
Unknown

No description provided.

#### OnlyAcceptCategory

Type  
string

Makes sure only items with the specified
[ItemCategory](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/itemcategory.html)
corresponding to the provided value of this parameter can be inserted
into the container.

#### OpeningRecipe

Type  
Unknown

No description provided.

#### OpenSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### OriginX

Type  
integer

Seems to indicate the coordinates this item is associate to, mostly used
for keys.

#### OriginY

Type  
integer

See parameter OriginX.

#### originZ

Type  
integer

See parameter OriginX.

#### OtherHandRequire

Type  
Unknown

No description provided.

#### OtherHandUse

Type  
Unknown

No description provided.

#### Packaged

Type  
boolean

Setting this to `true` will add readable content on the food item, which
will display the [nutrional
information](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-calories)
of the food item.

#### Padlock

Type  
Unknown

No description provided.

#### PageToWrite

Type  
Unknown

No description provided.

#### painReduction

Type  
integer

See parameter fluReduction.

#### PartType

Type  
string

Marks the
[WeaponPart](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype)
as a specific type of part. For proper tooltip of your weapon part, you
need to either use one of the existing parts or use a custom part type
but provide a translation entry inside
[Tooltip.json](https://pz-wiki-modding.github.io/PZ-API-Docs/translations/translation_files.html#tooltip)
as `Tooltip_weapon_` followed by that part type value. For example, if
you set `PartType = customPart`, you need to provide a translation entry
as `Tooltip_weapon_customPart` with the name of your part.

Here are the available part types in the base game:

- RecoilPad
- Clip
- Canon
- Scope
- Sling
- Stock

There are also some indirect part types. If the item has the
[TorchCone](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-torchcone)
parameter, that part will be valid as a torch attachment. If it has the
[tag](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtag)
`base:optics`, it will be valid as an optics attachment.

Technically, there are other `Tooltip_weapon_` combination than the ones
listed above, but they are not used as part types, but due to them
sharing the same translation entry format, they can technically be used
as a part type. It means these should not be used as part types, as
you'd have to overwrite their translation entries which could brake the
translation of the base game:

- Condition
- HandleCondition
- HeadCondition
- Sharpness
- Repaired
- Damage
- Unusable_at_max_exertion
- Ammo
- AmmoCount
- Range
- Type
- CanBeMountOn
- Jammed
- NoRoundChambered
- SpentRoundChambered
- SpentRounds
- ContainsClip
- NoClip
- NoMaintenanceXp

#### PhysicsObject

Type  
block (block: [item](./item.md), with `scripts-module`)

Provides another item (or itself) as a throwable object. When used, the
item will be thrown instead of used as an actual in hands weapon.

#### PiercingBullets

Type  
boolean

See parameter MaxHitcount.

#### PlacedSprite

Type  
Unknown

No description provided.

#### PlaceMultipleSound

Type  
Unknown

No description provided.

#### PlaceOneSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### Poison

Type  
boolean

Is useless  
True

Default  
`False`

See parameter PoisonPower.

#### PoisonDetectionLevel

Type  
integer

See parameter PoisonPower.

#### PoisonPower

Type  
integer

[PoisonPower](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-poisonpower)
defines the strength of the poison, where a positive value will make the
food poisonous.

[PoisonDetectionLevel](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-poisondetectionlevel)
doesn't seem to be useful, where a positive value will make it pass all
the checks anyway, so increasing that value doesn't do anything.\]

You can also mark an item to be shown as poisonous to the player by
adding the
[ItemTag](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtag)
`base:showpoison`.

The parameters
[Poison](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-poison)
and
[UseForPoison](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-useforpoison)
look unused.

#### PourType

Type  
string

Sets an identifier for the pouring type. This will set the `PourType`
[condition](https://pzwiki.net/wiki/Conditions) of
[AnimNode](https://pzwiki.net/wiki/AnimNode) to the provided value when
doing different actions:

- pouring, dumping, adding liquid etc
- fertilizing
- curing a plant

Specific values have different effects:

- `Bucket` will cause the item to play the sound
  `Base.PourLiquidOnGroundMetal` with the
  [tag](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-tags)
  `base:hasmetal` when pouring liquid.
- `Pot` will also play `Base.PourLiquidOnGroundMetal` but without the
  need for the tag.
- Other values will play `Base.PourLiquidOnGround` when pouring liquid.

#### primaryAnimMask

Type  
Unknown

No description provided.

#### Projectilecount

Type  
integer

Default  
`1`

Only active when the weapon is ranged and has
[RangeFalloff](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-rangefalloff)
set to `true`. In that mode, the ballistics controller generates
multiple spread projectiles. The field is never read when
[RangeFalloff](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-rangefalloff)
is `false`.

Inert for standard rifles. Required only for shotgun-style spread.

#### ProjectileSpread

Type  
float

Projectile spread seems to be mostly a visual effect and doesn't affect
the actual hit chance of the weapon. The spread will be calculated
following a formula close to the following:

``` 
spread = ProjectileSpread * 10 degrees +/- 2 degrees
```

With the `spread` value being the total cone angle of the projectiles.

#### ProjectileSpreadModifier

Type  
float

No description provided.

#### ProjectileWeightCenter

Type  
float

Default  
`1.0`

No description provided.

#### ProtectFromRainWhenEquipped

Type  
Unknown

No description provided.

#### Proteins

Type  
float

See parameter Calories.

#### PushBackMod

Type  
float

Default  
`1.0`

Scales the magnitude of the hit-reaction push applied to the target
character. A higher value will increase the time the target is
staggered. It will also impact the spread of blood.

Higher gives a more weighty, impactful feel.

#### PutInSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### RackAfterShoot

Type  
Unknown

No description provided.

#### RackSound

Type  
Unknown

No description provided.

#### RainFactor

Type  
Unknown

No description provided.

#### Ranged

Type  
boolean

See parameter IsAimedFirearm.

#### RangeFalloff

Type  
boolean

No description provided.

#### ReadType

Type  
Unknown

No description provided.

#### RecoilDelay

Type  
Unknown

[RecoilDelay](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelay)
is a stat which is directly applied to a
[HandWeapon](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/HandWeapon.html)
while
[AimingTimeModifier](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelaymodifier)
is applied to [weapon
parts](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/WeaponPart.html).
Weapon attachments will add or subtract from
[RecoilDelay](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelay)
directly.

Controls how long post-shot recovery takes before aim settling can
begin. High values means the gun has a huge kick and forces a pause.
Lower values is a flat, fast and snappy gun.
[Strength](https://pzwiki.net/wiki/Strength) and
[aiming](https://pzwiki.net/wiki/Aiming) will both reduce the recoil
delay. Holding the gun one-handed will negatively impact the recoil
handling. The following formula is used:

``` java
effectiveDelay = RecoilDelay
              * (1 - AimingLevel / 40)
              * (1 - (StrengthLevel * 2 - 10) / 40)
              * (one-handed penalty: * 1.3 if primary hand only, secondary empty)
```

Aim countdown starts when the recoil delay counter is less than
`effectiveDelay * AimingLevel / 30`. Higher aiming also lets aim
recovery start earlier in the recoil window.

#### RecoilDelayModifier

Type  
Unknown

See parameter RecoilDelay.

#### ReduceInfectionPower

Type  
Unknown

No description provided.

#### Reloadtime

Type  
Unknown

No description provided.

#### ReloadTimeModifier

Type  
integer

No description provided.

#### RemoteController

Type  
Unknown

No description provided.

#### RemoteRange

Type  
Unknown

No description provided.

#### RemoveNegativeEffectOnCooked

Type  
boolean

See parameter IsCookable.

#### RemoveOnBroken

Type  
boolean

Default  
`True`

No description provided.

#### RemoveUnhappinessWhenCooked

Type  
Unknown

No description provided.

#### ReplaceInPrimaryHand

Type  
Unknown

No description provided.

#### ReplaceInSecondHand

Type  
Unknown

No description provided.

#### ReplaceOnCooked

Type  
array (array of string, separator: ';')

A list of
[items](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html)
that will replace the cooked item by adding them to the player's
inventory.

#### ReplaceOnDeplete

Type  
block (block: [item](./item.md), with `scripts-module`)

When providing a
[ReplaceOnDeplete](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-replaceondeplete),
the moment the item is depleted (e.g. a drainable item has no uses left
anymore), it will be replaced by the item defined in this parameter. If
this is empty, the item will be deleted without any replacement. This
can notably be used to replace towels with a
[wet](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-wet)
towel.

[ReplaceOnExtinguish](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-replaceonextinguish)
on the other hand is used for [light sources
items](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-lightstrength)
to swap between the lit and unlit version of the item when it is fully
drained.

[ReplaceOnRotten](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-replaceonrotten)
is used for food items to swap to a different rotten version of items
when they are fully rotten. This is actually not used to make an item
rotten, which is natively handled by the game when providing
[DaysFresh](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-daysfresh)
and
[DaysTotallyRotten](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-daystotallyrotten)
but instead when the item isn't necessary bad to eat after the days
rotten duration, like ice cream becoming melted for example.

[ReplaceOnUse](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-replaceonuse)
is used whenever an item is used, to replace it with another item. Used
for containers containing food items to provide the container back after
the food is eaten, or for dirty items getting cleaned.

#### ReplaceOnExtinguish

Type  
block (block: [item](./item.md), with `scripts-module`)

No description provided.

#### ReplaceOnRotten

Type  
block (block: [item](./item.md), with `scripts-module`)

No description provided.

#### ReplaceOnUse

Type  
block (block: [item](./item.md), with `scripts-module`)

No description provided.

#### ReplaceOnUseOn

Type  
array (array of string, separator: '-')

Unclear what this does exactly.

#### RequireInHandOrInventory

Type  
Unknown

No description provided.

#### RequiresEquippedBothHands

Type  
boolean

No description provided.

#### Researchablerecipes

Type  
array (array of block, separator: ';')

No description provided.

#### RunAnim

Type  
string

Default  
`Run`

No description provided.

#### RunSpeedModifier

Type  
float

Default  
`1.0`

No description provided.

#### ScaleWorldIcon

Type  
float

Default  
`1.0`

No description provided.

#### ScratchDefense

Type  
Unknown

No description provided.

#### secondaryAnimMask

Type  
Unknown

No description provided.

#### SensorRange

Type  
Unknown

No description provided.

#### Sharpness

Type  
Unknown

No description provided.

#### ShellFallSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### ShoutMultiplier

Type  
float

Default  
`1.0`

No description provided.

#### ShoutType

Type  
Unknown

No description provided.

#### SkillTrained

Type  
string

Default  
(empty)

[SkillTrained](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-skilltrained)
is used to determine which skill the player will start training when
reading this literature.

[LvlSkillTrained](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-lvlskilltrained)
indicates at what level this literature can be used to start training
the skill.
[NumLevelsTrained](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-numlevelstrained)
marks how many level can be trained thanks to this literature.

#### SmokeRange

Type  
Unknown

No description provided.

#### SoundGain

Type  
float

Default  
`1.0`

No description provided.

#### SoundMap

Type  
object (object: string-\>\>block, kv: ' ', pairs: ';')

No description provided.

#### SoundParameter

Type  
Unknown

No description provided.

#### SoundRadius

Type  
Unknown

No description provided.

#### SoundVolume

Type  
Unknown

No description provided.

#### SpawnWith

Type  
Unknown

No description provided.

#### Spice

Type  
boolean

Marks this item as a spice, which can be used in the [evolved
recipes](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/evolvedrecipe.html)
system.

#### SplatBloodOnNoDeath

Type  
Unknown

No description provided.

#### SplatNumber

Type  
integer

Default  
`2`

No description provided.

#### SplatSize

Type  
float

Default  
`1.0`

No description provided.

#### StaticModel

Type  
block (block: [model](./model.md), with `scripts-module`)

[StaticModel](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-staticmodel)
is used to define the model of the item being held in hands. On the
other hand,
[WorldStaticModel](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-worldstaticmodel)
is used to define the model of the item being placed in the world. The
two models can be different, for example a bucket can have a handle that
is up when held in hands, but down when placed in the world.

Alternatively,
[StaticModelsByIndex](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-staticmodelsbyindex)
and
[WorldStaticModelsByIndex](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-worldstaticmodelsbyindex)
can be used to define multiple models for the same item definition,
which is useful for variants of the same item (e.g. a weapon with
different skins). You can use
[IconsForTexture](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-iconsfortexture)
alongside those to define different
[icons](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-icon)
for each variant. Here's an example usage with three variants of the
same item:

``` cpp
StaticModelsByIndex = AK47;AK47_Desert;AK47_Woodland,
WorldStaticModelsByIndex = AK47;AK47_Desert;AK47_Woodland,
IconsForTexture = AK47;AK47_Desert;AK47_Woodland,
```

#### StaticModelsByIndex

Type  
array (array of string, separator: ';')

See parameter StaticModel.

#### StompPower

Type  
float

Default  
`1.0`

No description provided.

#### StopPower

Type  
float

Default  
`5.0`

See parameter CriticalChance.

#### StressChange

Type  
Unknown

No description provided.

#### SubCategory

Type  
string

Default  
(empty)

No description provided.

#### SurvivalGear

Type  
Unknown

No description provided.

#### suspensionCompression

Type  
Unknown

No description provided.

#### suspensionDamping

Type  
Unknown

No description provided.

#### SwingAmountBeforeImpact

Type  
Unknown

No description provided.

#### SwingAnim

Type  
string

Default  
`Rifle`

No description provided.

#### SwingSound

Type  
block (block: [sound](./sound.md))

Default  
`BaseballBatSwing`

No description provided.

#### Swingtime

Type  
float

Default  
`1.0`

No description provided.

#### Tags

Type  
array (array of string, separator: ';')

A list of tags to assign to the item. Tags are used by the game to
easily identify properties of the items from the Lua or Java. This can
notably be used in
[craftRecipes](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/craftrecipe.html).

For example:

``` cpp
Tags = base:egg;base:hasmetal,
```

You can find a list of all tags on the [PZ API
Doc](https://pz-wiki-modding.github.io/PZ-API-Docs/java/item_tags.html).
The pzwiki also provides a list of every items (per full type)
associated to tags [here](https://pzwiki.net/wiki/Item_tag).

To create a custom tag, you have to first create its definition in your
mod's [registries](https://pzwiki.net/wiki/Registries). In the
`registries.lua` file, define the following by renaming the various
elements to fit your mod name, id etc:

``` lua
YourModRegistry = {}
YourModRegistry.YOUR_TAG_NAME = ItemTag.register("yourmodid:yourtagname")
```

You can then use that tag `yourmodid:yourtagname` in your item
definition. And you can use the stored ItemTag reference
`YourModRegistry.YOUR_TAG_NAME` in your Lua code.

#### ThirstChange

Type  
float

No description provided.

#### ticksPerEquipUse

Type  
integer

Default  
`30`

No description provided.

#### ToHitModifier

Type  
float

Default  
`1.0`

No description provided.

#### Tooltip

Type  
Unknown

No description provided.

#### TorchCone

Type  
Unknown

No description provided.

#### TorchDot

Type  
float

Default  
`0.96`

No description provided.

#### TransmitRange

Type  
Unknown

No description provided.

#### Trap

Type  
boolean

Default  
`False`

No description provided.

#### TreeDamage

Type  
Unknown

No description provided.

#### triggerExplosionTimer

Type  
Unknown

No description provided.

#### TwoHandWeapon

Type  
boolean

[TwoHandWeapon](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-twohandweapon)
marks the weapon as a two-handed weapon.
[RecoilDelay](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-recoildelay)
gets a x1.3 penalty when the weapon is held one-handed instead of two
handed.
[RequiresEquippedBothHands](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-requiresequippedbothhands)
enforces the equip restriction in the context menu.

#### TwoWay

Type  
Unknown

No description provided.

#### Type

Type  
Unknown

Deprecated  
{'replacedBy': 'ItemType', 'version': '42.13.0'}

Used to set the class of the item, which will influence parameters
available.

#### UnequipSound

Type  
block (block: [sound](./sound.md))

No description provided.

#### UnhappyChange

Type  
Unknown

No description provided.

#### UseDelta

Type  
float

Default  
`0.03125`

Used to set the number of
[uses](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/InventoryItem.html#getCurrentUses())
for the item where its durability has a value of `1` when full and `0`
when empty. For example, a
[base:drainable](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype)
item with a `UseDelta` of `0.03125` (the default value) will have 32
uses (\$1/0.03125\$) before it is depleted.

When used for [Clothing
items](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemtype),
the `UseDelta` is used to indicate the amount of durability lost for
[oxygen tanks](https://pzwiki.net/wiki/Oxygen_Tank) for items with the
[ItemTags](https://pz-wiki-modding.github.io/PZ-API-Docs/java/item_tags.html)
`base:scba` or [gas mask
filters](https://pzwiki.net/wiki/Gas_Mask_Filter) for items with the
ItemTags `base:gasmask`, `base:respirator` or `base:improvisedgasmask`.

Some food items seem to be using that parameter but it doesn't seem to
be used for those anywhere. There's uses for it in the Java for
Drainable, Weapon and Radio items, but it doesn't seem to be limited to
those.

#### UseEndurance

Type  
boolean

Default  
`True`

If `true`, the weapon will consume stamina on use based on the weapon
[weight](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weight),
[EnduranceMod](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-endurancemod),
fatigue modifiers and traits.

For guns, it is preferable to keep this as `False`.

#### UseForPoison

Type  
integer

Default  
`0`

No description provided.

#### UsesBattery

Type  
Unknown

No description provided.

#### UseSelf

Type  
Unknown

No description provided.

#### UseWhileEquipped

Type  
boolean

Default  
`True`

No description provided.

#### UseWhileUnequipped

Type  
Unknown

No description provided.

#### UseWorldItem

Type  
Unknown

No description provided.

#### VehiclePartModel

Type  
Unknown

No description provided.

#### VehicleType

Type  
Unknown

No description provided.

#### VisionModifier

Type  
float

Default  
`1.0`

No description provided.

#### VisualAid

Type  
Unknown

No description provided.

#### WaterResistance

Type  
float

[WaterResistance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-waterresistance)
is used to define how much the clothing item will resist water. The
higher the value, the more resistant the clothing item will be to water.
A value of `1.0` means the clothing item is fully waterproof, while a
value of `0.0` means it is not waterproof at all.

This is the exact same process for
[WindResistance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-windresistance)
but for wind instead of water.

#### WeaponHitArmourSound

Type  
Unknown

No description provided.

#### WeaponLength

Type  
float

Default  
`0.4`

No description provided.

#### WeaponReloadType

Type  
string

Default  
`handgun`

See parameter AmmoType.

#### WeaponSprite

Type  
Unknown

No description provided.

#### WeaponSpritesByIndex

Type  
Unknown

No description provided.

#### WeaponWeight

Type  
float

Default  
`1.0`

No description provided.

#### Weight

Type  
float

Default  
`1.0`

Minimum  
`0.0`

[Weight](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weight)
sets the weight of the item, or more commonly refered to as a
[encumbrance](https://pzwiki.net/wiki/Heavy_load). [Weapon
parts](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/types/WeaponPart.html)
will impact the weight of the weapon when attached. Will also impact
stamina drain when
[UseEndurance](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-useendurance)
is `true`. You need to make sure to add a
[translation](https://pzwiki.net/wiki/Item_(scripts)\#Display_name) to
the item or the weight will not work in-game.

[WeightEmpty](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weightempty)
is used to set the weight of a drainable when it is empty.

[WeightWet](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-weightwet)
is used to set the weight of a clothing item when it is wet. The weight
of the clothing item will be interpolated between `Weight` and
`WeightWet` based on the
[wetness](https://demiurgequantified.github.io/ProjectZomboidJavaDocs/zombie/inventory/InventoryItem.html#getWetness())
of the clothing item.

#### WeightEmpty

Type  
Unknown

See parameter Weight.

#### WeightModifier

Type  
float

No description provided.

#### WeightReduction

Type  
integer

Minimum  
`0`

Maximum  
`100`

Percentage of the total contained weight in the bag that will be
reduced. If the bag's content weights 10 and the reduction is 65, the
bag content will only weight

#### WeightWet

Type  
Unknown

See parameter Weight.

#### Wet

Type  
boolean

[Wet](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-wet)
marks the item as being wet. This is notably used for towels alongside
the
[WetCooldown](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-wetcooldown)
which indicates how long the item will stay wet before drying out.

When the item is dry, it is another item marked with the parameter
[ItemWhenDry](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#scripts-items-itemwhendry).

#### WetCooldown

Type  
float

Default  
`-1.0`

See parameter Wet.

#### wheelFriction

Type  
Unknown

No description provided.

#### WindResistance

Type  
Unknown

See parameter WaterResistance.

#### WithDrainable

Type  
Unknown

No description provided.

#### WithoutDrainable

Type  
Unknown

No description provided.

#### WorldObjectSprite

Type  
Unknown

No description provided.

#### WorldRender

Type  
Unknown

No description provided.

#### WorldStaticModel

Type  
block (block: [model](./model.md), with `scripts-module`)

See parameter StaticModel.

#### WorldStaticModelsByIndex

Type  
array (array of string, separator: ';')

See parameter StaticModel.
