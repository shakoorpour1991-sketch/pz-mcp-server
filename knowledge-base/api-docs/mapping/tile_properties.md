---
title: "Tile Properties"
source: "PZ-API-Docs (pz-wiki-modding.github.io)"
build: "42.20"
tags: [pz, modding, build42, api-docs, mapping]
---

# Tile Properties

Reference documentation for tile properties that define the
characteristics and behavior of tiles in the game world. The field is
the identifier used in the Java and Lua code for this tile property, if
you ever need to refer to it in [Lua](https://pzwiki.net/wiki/Lua_(API))
code.

## alwaysDraw

Field  
`TilePropertyKey.ALWAYS_DRAW`

## AmbientSound

Field  
`TilePropertyKey.AMBIENT_SOUND`

## attachedCeiling

Field  
`TilePropertyKey.ATTACHED_CEILING`

## attachedE

Field  
`TilePropertyKey.ATTACHED_E`

## AttachedFloor

Field  
`TilePropertyKey.ATTACHED_FLOOR`

## attachedN

Field  
`TilePropertyKey.ATTACHED_N`

## attachedNW

Field  
`TilePropertyKey.ATTACHED_NW`

## attachedS

Field  
`TilePropertyKey.ATTACHED_S`

## attachedSE

Field  
`TilePropertyKey.ATTACHED_SE`

## attachedSurface

Field  
`TilePropertyKey.ATTACHED_SURFACE`

## AttachedToGlass

Field  
`TilePropertyKey.ATTACHED_TO_GLASS`

## attachedW

Field  
`TilePropertyKey.ATTACHED_W`

## attachtostairs

Field  
`TilePropertyKey.ATTACH_TO_STAIRS`

## bed

Field  
`TilePropertyKey.BED`

## BedType

Field  
`TilePropertyKey.BED_TYPE`

## BlockRain

Field  
`TilePropertyKey.BLOCK_RAIN`

## blocksight

Field  
`TilePropertyKey.BLOCK_SIGHT`

## BlocksPlacement

Field  
`TilePropertyKey.BLOCKS_PLACEMENT`

Type  
`boolean`

If set to `true`, other tiles cannot occupy the same square as this
tile.

## blueprint

Field  
`TilePropertyKey.BLUEPRINT`

## burning

Field  
`TilePropertyKey.BURNING`

## burntOut

Field  
`TilePropertyKey.BURNT_OUT`

## BurntTile

Field  
`TilePropertyKey.BURNT_TILE`

## Bush

Field  
`TilePropertyKey.BUSH`

## CanAttachAnimal

Field  
`TilePropertyKey.CAN_ATTACH_ANIMAL`

## canBeCut

Field  
`TilePropertyKey.CAN_BE_CUT`

## canBeRemoved

Field  
`TilePropertyKey.CAN_BE_REMOVED`

## CanBreak

Field  
`TilePropertyKey.CAN_BREAK`

Type  
`boolean`

See the description of the PickUpTool
property.

## canPathN

Field  
`TilePropertyKey.CAN_PATH_N`

## canPathW

Field  
`TilePropertyKey.CAN_PATH_W`

## CanScrap

Field  
`TilePropertyKey.CAN_SCRAP`

## CantClimb

Field  
`TilePropertyKey.CANT_CLIMB`

## CarSlowFactor

Field  
`TilePropertyKey.CAR_SLOW_FACTOR`

## chairE

Field  
`TilePropertyKey.CHAIR_E`

## chairN

Field  
`TilePropertyKey.CHAIR_N`

## chairS

Field  
`TilePropertyKey.CHAIR_S`

## chairW

Field  
`TilePropertyKey.CHAIR_W`

## climbSheetE

Field  
`TilePropertyKey.CLIMB_SHEET_E`

## climbSheetN

Field  
`TilePropertyKey.CLIMB_SHEET_N`

## climbSheetS

Field  
`TilePropertyKey.CLIMB_SHEET_S`

## climbSheetTopE

Field  
`TilePropertyKey.CLIMB_SHEET_TOP_E`

## climbSheetTopN

Field  
`TilePropertyKey.CLIMB_SHEET_TOP_N`

## climbSheetTopS

Field  
`TilePropertyKey.CLIMB_SHEET_TOP_S`

## climbSheetTopW

Field  
`TilePropertyKey.CLIMB_SHEET_TOP_W`

## climbSheetW

Field  
`TilePropertyKey.CLIMB_SHEET_W`

## CloseSneakBonus

Field  
`TilePropertyKey.CLOSE_SNEAK_BONUS`

## collideN

Field  
`TilePropertyKey.COLLIDE_N`

## collideW

Field  
`TilePropertyKey.COLLIDE_W`

## connectX

Field  
`TilePropertyKey.CONNECT_X`

## connectY

Field  
`TilePropertyKey.CONNECT_Y`

## container

Field  
`TilePropertyKey.CONTAINER`

## ContainerCapacity

Field  
`TilePropertyKey.CONTAINER_CAPACITY`

## ContainerCloseSound

Field  
`TilePropertyKey.CONTAINER_CLOSE_SOUND`

## ContainerOpenSound

Field  
`TilePropertyKey.CONTAINER_OPEN_SOUND`

## ContainerPosition

Field  
`TilePropertyKey.CONTAINER_POSITION`

## ContainerPutSound

Field  
`TilePropertyKey.CONTAINER_PUT_SOUND`

## ContainerTakeSound

Field  
`TilePropertyKey.CONTAINER_TAKE_SOUND`

## CornerNorthWall

Field  
`TilePropertyKey.CORNER_NORTH_WALL`

## CornerWestWall

Field  
`TilePropertyKey.CORNER_WEST_WALL`

## curtainE

Field  
`TilePropertyKey.CURTAIN_E`

## curtainN

Field  
`TilePropertyKey.CURTAIN_N`

## CurtainOffset

Field  
`TilePropertyKey.CURTAIN_OFFSET`

## curtainS

Field  
`TilePropertyKey.CURTAIN_S`

## CurtainSound

Field  
`TilePropertyKey.CURTAIN_SOUND`

## curtainW

Field  
`TilePropertyKey.CURTAIN_W`

## CustomItem

Field  
`TilePropertyKey.CUSTOM_ITEM`

## CustomName

Field  
`TilePropertyKey.CUSTOM_NAME`

Type  
`string`

Used to define the item name, which will show as
[GroupName](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#groupname) +
[CustomName](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#customname).
For example if CustomName is set to `Bed` and GroupName is set to
`Fancy`, it will show as `Fancy Bed` in the game. `GroupName` is used as
a sub-category description of the object, such as its color, shape, name
or quality.

Those properties need to be the same for multi-tile objects.

## CutawayHint

Field  
`TilePropertyKey.CUTAWAY_HINT`

## cutN

Field  
`TilePropertyKey.CUT_N`

## cutW

Field  
`TilePropertyKey.CUT_W`

## DamagedSprite

Field  
`TilePropertyKey.DAMAGED_SPRITE`

## diamondFloor

Field  
`TilePropertyKey.DIAMOND_FLOOR`

## doorFrN

Field  
`TilePropertyKey.DOOR_FR_N`

## doorFrW

Field  
`TilePropertyKey.DOOR_FR_W`

## doorN

Field  
`TilePropertyKey.DOOR_N`

## DoorSound

Field  
`TilePropertyKey.DOOR_SOUND`

## doorTrans

Field  
`TilePropertyKey.DOOR_TRANS`

## doorW

Field  
`TilePropertyKey.DOOR_W`

## DoorWallN

Field  
`TilePropertyKey.DOOR_WALL_N`

## DoorWallNTrans

Field  
`TilePropertyKey.DOOR_WALL_N_TRANS`

## DoorWallNW

Field  
`TilePropertyKey.DOOR_WALL_NW`

## DoorWallNWTrans

Field  
`TilePropertyKey.DOOR_WALL_NW_TRANS`

## DoorWallW

Field  
`TilePropertyKey.DOOR_WALL_W`

## DoorWallWTrans

Field  
`TilePropertyKey.DOOR_WALL_W_TRANS`

## DoubleDoor

Field  
`TilePropertyKey.DOUBLE_DOOR`

## DoubleDoor1

Field  
`TilePropertyKey.DOUBLE_DOOR_1`

## DoubleDoor2

Field  
`TilePropertyKey.DOUBLE_DOOR_2`

## EntityScript

Field  
`TilePropertyKey.ENTITY_SCRIPT`

## EntityScriptName

Field  
`TilePropertyKey.ENTITY_SCRIPT_NAME`

## Eoffset

Field  
`TilePropertyKey.E_OFFSET`

## exterior

Field  
`TilePropertyKey.EXTERIOR`

## Facing

Field  
`TilePropertyKey.FACING`

The direction the object is facing. This is not the orientation, but the
direction the objects front looks towards. If the value is `South`, it
means the tile has a north orientation and thus would be facing south.

You can find an image which shows the directions of the game
[here](https://pzwiki.net/wiki/Tile_properties#Directions).

Allowed values:

> - `North`
> - `East`
> - `South`
> - `West`

## FasciaEdge

Field  
`TilePropertyKey.FASCIA_EDGE`

## FasciaEdgeReversible

Field  
`TilePropertyKey.FASCIA_EDGE_REVERSIBLE`

## FenceTypeHigh

Field  
`TilePropertyKey.FENCE_TYPE_HIGH`

## FenceTypeLow

Field  
`TilePropertyKey.FENCE_TYPE_LOW`

## firerequirement

Field  
`TilePropertyKey.FIRE_REQUIREMENT`

## FloorAttachmentE

Field  
`TilePropertyKey.FLOOR_ATTACHMENT_E`

## FloorAttachmentN

Field  
`TilePropertyKey.FLOOR_ATTACHMENT_N`

## FloorAttachmentS

Field  
`TilePropertyKey.FLOOR_ATTACHMENT_S`

## FloorAttachmentW

Field  
`TilePropertyKey.FLOOR_ATTACHMENT_W`

## FloorHeight

Field  
`TilePropertyKey.FLOOR_HEIGHT`

## FloorHeightOneThird

Field  
`TilePropertyKey.FLOOR_HEIGHT_ONE_THIRD`

## FloorHeightTwoThirds

Field  
`TilePropertyKey.FLOOR_HEIGHT_TWO_THIRDS`

## FloorMaterial

Field  
`TilePropertyKey.FLOOR_MATERIAL`

## FloorOverlay

Field  
`TilePropertyKey.FLOOR_OVERLAY`

## FootstepMaterial

Field  
`TilePropertyKey.FOOTSTEP_MATERIAL`

## ForceAmbient

Field  
`TilePropertyKey.FORCE_AMBIENT`

## forcedLocked

Field  
`TilePropertyKey.FORCED_LOCKED`

## forceFade

Field  
`TilePropertyKey.FORCE_FADE`

## forceLocked

Field  
`TilePropertyKey.FORCE_LOCKED`

## forceRender

Field  
`TilePropertyKey.FORCE_RENDER`

## ForceSingleItem

Field  
`TilePropertyKey.FORCE_SINGLE_ITEM`

Forces the object to be a single item in inventory even when it is made
up of multiple tiles.

## Freezer

Field  
`TilePropertyKey.FREEZER`

## FreezerCapacity

Field  
`TilePropertyKey.FREEZER_CAPACITY`

## FreezerPosition

Field  
`TilePropertyKey.FREEZER_POSITION`

## fuelAmount

Field  
`TilePropertyKey.FUEL_AMOUNT`

## GarageDoor

Field  
`TilePropertyKey.GARAGE_DOOR`

## GeneratorSound

Field  
`TilePropertyKey.GENERATOR_SOUND`

## GenericCraftingSurface

Field  
`TilePropertyKey.GENERIC_CRAFTING_SURFACE`

## GlassRemovedOffset

Field  
`TilePropertyKey.GLASS_REMOVED_OFFSET`

## grassFloor

Field  
`TilePropertyKey.GRASS_FLOOR`

## GrimeType

Field  
`TilePropertyKey.GRIME_TYPE`

## GroupName

Field  
`TilePropertyKey.GROUP_NAME`

Type  
`string`

See the description of the CustomName
property.

## halfheight

Field  
`TilePropertyKey.HALF_HEIGHT`

## HasLightOnSprite

Field  
`TilePropertyKey.HAS_LIGHT_ON_SPRITE`

## HasRaindrop

Field  
`TilePropertyKey.HAS_RAINDROP`

## HasRainSplashes

Field  
`TilePropertyKey.HAS_RAIN_SPLASHES`

## hidewalls

Field  
`TilePropertyKey.HIDE_WALLS`

## HitByCar

Field  
`TilePropertyKey.HIT_BY_CAR`

## HoppableN

Field  
`TilePropertyKey.HOPPABLE_N`

## HoppableW

Field  
`TilePropertyKey.HOPPABLE_W`

## IgnoreSurfaceSnap

Field  
`TilePropertyKey.IGNORE_SURFACE_SNAP`

## interior

Field  
`TilePropertyKey.INTERIOR`

## InteriorSide

Field  
`TilePropertyKey.INTERIOR_SIDE`

## invisible

Field  
`TilePropertyKey.INVISIBLE`

## IsClosedState

Field  
`TilePropertyKey.IS_CLOSED_STATE`

## isEave

Field  
`TilePropertyKey.IS_EAVE`

## IsFloorAttached

Field  
`TilePropertyKey.IS_FLOOR_ATTACHED`

## IsFridge

Field  
`TilePropertyKey.IS_FRIDGE`

## IsGridExtensionTile

Field  
`TilePropertyKey.IS_GRID_EXTENSION_TILE`

## IsHigh

Field  
`TilePropertyKey.IS_HIGH`

Type  
`boolean`

Indicates the tile is high, which means the tile only oocupies the upper
half of the height, like a painting or wall shelf.

## IsLow

Field  
`TilePropertyKey.IS_LOW`

Type  
`boolean`

Indicates the tile is low, which means the tile only oocupies the lower
half of the height, like a bed or counter.

## IsMirror

Field  
`TilePropertyKey.IS_MIRROR`

## IsMoveAble

Field  
`TilePropertyKey.IS_MOVE_ABLE`

Type  
`boolean`

Indicates the tile can be moved by the player. This will notably provide
a [moveable
item](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#item-itemtype).
[MoveType](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#movetype)
allows you to set the type of moveable the tile is.

## isMoveAbleObject

Field  
`TilePropertyKey.IS_MOVE_ABLE_OBJECT`

## IsoType

Field  
`TilePropertyKey.ISO_TYPE`

Type  
`string`

Used to select the class the tile will be. IsoObject is the default but
based on your choice there will different behaviors and interactions
with the tile.

Allowed values:

> - `IsoObject`
> - `IsoBarbecue`
> - `IsoBrokenGlass`
> - `IsoClothingDryer`
> - `IsoClothingWasher`
> - `IsoCombinationWasherDryer`
> - `IsoFireplace`
> - `IsoMannequin`
> - `IsoRadio`
> - `IsoJukebox`
> - `IsoStove`
> - `IsoTelevision`
> - `IsoMultiMedia`

## IsPaintable

Field  
`TilePropertyKey.IS_PAINTABLE`

## IsStackable

Field  
`TilePropertyKey.IS_STACKABLE`

## IsSurfaceOffset

Field  
`TilePropertyKey.IS_SURFACE_OFFSET`

Type  
`boolean`

See the description of the Surface property.

## IsTable

Field  
`TilePropertyKey.IS_TABLE`

Will treat the tile as a table surface.

## IsTableTop

Field  
`TilePropertyKey.IS_TABLE_TOP`

Will allow you to place tiles on top of this tile.

## IsTrashCan

Field  
`TilePropertyKey.IS_TRASH_CAN`

## IsWaterCollector

Field  
`TilePropertyKey.IS_WATER_COLLECTOR`

## ItemHeight

Field  
`TilePropertyKey.ITEM_HEIGHT`

Type  
`integer`

Default  
`0`

See the description of the Surface property.

## jukebox

Field  
`TilePropertyKey.JUKEBOX`

## lightB

Field  
`TilePropertyKey.LIGHT_B`

## LightFilterB

Field  
`TilePropertyKey.LIGHT_FILTER_B`

## LightFilterG

Field  
`TilePropertyKey.LIGHT_FILTER_G`

## LightFilterIntensity

Field  
`TilePropertyKey.LIGHT_FILTER_INTENSITY`

## LightFilterMix

Field  
`TilePropertyKey.LIGHT_FILTER_MIX`

## LightFilterR

Field  
`TilePropertyKey.LIGHT_FILTER_R`

## lightG

Field  
`TilePropertyKey.LIGHT_G`

## lightR

Field  
`TilePropertyKey.LIGHT_R`

## LightRadius

Field  
`TilePropertyKey.LIGHT_RADIUS`

## lightswitch

Field  
`TilePropertyKey.LIGHTSWITCH`

## LinkedLocIs

Field  
`TilePropertyKey.LINKED_LOC_IS`

## LinkedOffset

Field  
`TilePropertyKey.LINKED_OFFSET`

## livingRoom

Field  
`TilePropertyKey.LIVING_ROOM`

## makeWindowInvincible

Field  
`TilePropertyKey.MAKE_WINDOW_INVINCIBLE`

## Material

Field  
`TilePropertyKey.MATERIAL`

## Material2

Field  
`TilePropertyKey.MATERIAL_2`

## Material3

Field  
`TilePropertyKey.MATERIAL_3`

## MaterialType

Field  
`TilePropertyKey.MATERIAL_TYPE`

## Microwave

Field  
`TilePropertyKey.MICROWAVE`

## MinimumCarSpeedDmg

Field  
`TilePropertyKey.MINIMUM_CAR_SPEED_DMG`

## Movement

Field  
`TilePropertyKey.MOVEMENT`

## MoveType

Field  
`TilePropertyKey.MOVE_TYPE`

Type  
`string`

Sets the type of moveable the tile will be. This seems to be only
related to the icon of item. There are also signs in the game code that
when set to WallObject it will slightly impact the shape of the tile for
physic interactions.

Allowed values:

> - `Normal`
> - `WallObject`
> - `WindowObject`
> - `Window`
> - `FloorTile`
> - `FloorRug`
> - `Vegitation`

## MoveWithWind

Field  
`TilePropertyKey.MOVE_WITH_WIND`

## name

Field  
`TilePropertyKey.NAME`

## natureFloor

Field  
`TilePropertyKey.NATURE_FLOOR`

## NeverCutaway

Field  
`TilePropertyKey.NEVER_CUTAWAY`

## Noffset

Field  
`TilePropertyKey.N_OFFSET`

## NoFreezer

Field  
`TilePropertyKey.NO_FREEZER`

## noStart

Field  
`TilePropertyKey.NO_START`

## NoWallLighting

Field  
`TilePropertyKey.NO_WALL_LIGHTING`

## OpaquePixelsOnly

Field  
`TilePropertyKey.OPAQUE_PIXELS_ONLY`

Type  
`boolean`

## open

Field  
`TilePropertyKey.OPEN`

## OpenTileOffset

Field  
`TilePropertyKey.OPEN_TILE_OFFSET`

## PaintingType

Field  
`TilePropertyKey.PAINTING_TYPE`

## PhysicsMesh

Field  
`TilePropertyKey.PHYSICS_MESH`

## PhysicsShape

Field  
`TilePropertyKey.PHYSICS_SHAPE`

## PickUpLevel

Field  
`TilePropertyKey.PICK_UP_LEVEL`

Type  
`integer`

See the description of the PickUpTool
property.

## PickUpTool

Field  
`TilePropertyKey.PICK_UP_TOOL`

Type  
`string`

[PickUpTool](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#item-pickuptool)
will indicate what tool the player needs to use to pick up the tile,
while
[PlaceTool](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#item-placetool)
will indicate what tool the player needs to use to place the tile.

If you want to add new tools, you can usually use the
[ItemTags](https://pz-wiki-modding.github.io/PZ-API-Docs/java/item_tags.html)
that you add to your [item
tools](https://pz-wiki-modding.github.io/PZ-API-Docs/scripts/item.html#tags),
or you can also look into the lua file
`media/Moveables/ISMoveableDefinitions.lua` to see how they add each new
tools.

The
[PickUpLevel](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#pickuplevel)
is used to determine what level in the relevant skill you need to be
able to pickup the tile. For example `Hammer` with a PickUpLevel of 2
will require a carpentry level of 2 to pickup the tile.

The
[PickUpWeight](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#pickupweight)
will determine how much the tile weights in the inventory. This value is
divded by 10, so for example a weight of 200 will mean an in-game
encumbrance of 20. If
[ForceSingleItem](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#forcesingleitem)
is set to `true`, this is the total weight, otherwise this is the weight
of each tile as a separate item.

[CanBreak](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#canbreak)
can be used to indicate that the tile has a chance to break when being
picked up. The chance gets smaller based on the
[PickUpLevel](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#pickuplevel).

Allowed values:

> - `None`
> - `Hammer`
> - `Crowbar`
> - `Electrician`
> - `Cutter`
> - `Shovel`
> - `Wrench`

## PickUpWeight

Field  
`TilePropertyKey.PICK_UP_WEIGHT`

Type  
`integer`

See the description of the PickUpTool
property.

## PlaceTool

Field  
`TilePropertyKey.PLACE_TOOL`

Type  
`string`

See the description of the PickUpTool
property.

## propaneTank

Field  
`TilePropertyKey.PROPANE_TANK`

## radio

Field  
`TilePropertyKey.RADIO`

## RenderLayer

Field  
`TilePropertyKey.RENDER_LAYER`

## RoofGroup

Field  
`TilePropertyKey.ROOF_GROUP`

## RoofWallStart

Field  
`TilePropertyKey.UNUSROOF_WALL_STARTD`

## ScrapSize

Field  
`TilePropertyKey.SCRAP_SIZE`

## ScrapToolUseOverride

Field  
`TilePropertyKey.SCRAP_TOOL_USE_OVERRIDE`

## ScrapUseSkill

Field  
`TilePropertyKey.SCRAP_USE_SKILL`

## ScrapUseTool

Field  
`TilePropertyKey.SCRAP_USE_TOOL`

## SeatMaterial

Field  
`TilePropertyKey.SEAT_MATERIAL`

## signal

Field  
`TilePropertyKey.SIGNAL`

## SinkType

Field  
`TilePropertyKey.SINK_TYPE`

## SlopedSurfaceDirection

Field  
`TilePropertyKey.SLOPED_SURFACE_DIRECTION`

Type  
`string`

Allowed values:

> - `N`
> - `E`
> - `S`
> - `W`
> - `NE`
> - `NW`
> - `SE`
> - `SW`

## SlopedSurfaceHeightMax

Field  
`TilePropertyKey.SLOPED_SURFACE_HEIGHT_MAX`

Type  
`integer`

Range  
Min: 0, Max: 100

Default  
`0`

## SlopedSurfaceHeightMin

Field  
`TilePropertyKey.SLOPED_SURFACE_HEIGHT_MIN`

Type  
`integer`

Range  
Min: 0, Max: 100

Default  
`0`

## SmashedTileOffset

Field  
`TilePropertyKey.SMASHED_TILE_OFFSET`

## smoke

Field  
`TilePropertyKey.SMOKE`

## SnowTile

Field  
`TilePropertyKey.SNOW_TILE`

## Soffset

Field  
`TilePropertyKey.S_OFFSET`

## solid

Field  
`TilePropertyKey.SOLID`

## solidfloor

Field  
`TilePropertyKey.SOLID_FLOOR`

## solidtrans

Field  
`TilePropertyKey.SOLID_TRANS`

## SpearOnlyAttackThrough

Field  
`TilePropertyKey.SPEAR_ONLY_ATTACK_THROUGH`

## SpriteGridLevel

Field  
`TilePropertyKey.SPRITE_GRID_LEVEL`

## SpriteGridPos

Field  
`TilePropertyKey.SPRITE_GRID_POS`

Used to specify the position the tile occupies when it is part of
multi-tile objects. The first coordinates is in the direction X while
the second is in the direction Y. The positive X direction is pointing
towards the bottom right, while the positive Y direction is pointing
towards the bottom left.

You can find an image which demonstrates the coordinates based on the
positions [here](https://pzwiki.net/wiki/Tile_properties#Directions).

## StackReplaceTileOffset

Field  
`TilePropertyKey.STACK_REPLACE_TILE_OFFSET`

Type  
`integer`

Default  
`0`

## stairsBN

Field  
`TilePropertyKey.STAIRS_BN`

## stairsBW

Field  
`TilePropertyKey.STAIRS_BW`

## stairsMN

Field  
`TilePropertyKey.STAIRS_MN`

## stairsMW

Field  
`TilePropertyKey.STAIRS_MW`

## stairsTN

Field  
`TilePropertyKey.STAIRS_TN`

## stairsTW

Field  
`TilePropertyKey.STAIRS_TW`

## StopCar

Field  
`TilePropertyKey.STOP_CAR`

## streetlight

Field  
`TilePropertyKey.STREETLIGHT`

## Surface

Field  
`TilePropertyKey.SURFACE`

Type  
`integer`

Default  
`0`

[Surface](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#surface)
is used to indicate the height in pixel on the tile of the flat surface
of the tile, which is notably used for tables to indicated at which
height items will be placed.

A second effect of this parameter can be triggered by setting
[IsSurfaceOffset](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#issurfaceoffset)
to `true`, which will instead make the Surface parameter indicate the
bottom height of the tile, which is useful for object tiles which are
placed on top of other tiles, such as flower pots or lamps.

When the tile can be placed on another tile surface but also has a
surface itself, the
[ItemHeight](https://pz-wiki-modding.github.io/PZ-API-Docs/mapping/tile_properties.html#itemheight)
parameter can be used to indicate the height of the surface of the tile
itself, and the Surface and IsSurfaceOffset parameters will then be used
for the height of the bottom surface of the tile.

You can find a demonstration of these properties on the wiki
[here](https://pzwiki.net/wiki/Tile_properties#Surface_and_ItemHeight)

## tableN

Field  
`TilePropertyKey.TABLE_N`

## taintedWater

Field  
`TilePropertyKey.TAINTED_WATER`

## TallHoppableN

Field  
`TilePropertyKey.TALL_HOPPABLE_N`

## TallHoppableW

Field  
`TilePropertyKey.TALL_HOPPABLE_W`

## ThumpSound

Field  
`TilePropertyKey.THUMP_SOUND`

## TieSheetRope

Field  
`TilePropertyKey.TIE_SHEET_ROPE`

## TileOverlay

Field  
`TilePropertyKey.TILE_OVERLAY`

## trans

Field  
`TilePropertyKey.TRANS`

## Translucent

Field  
`TilePropertyKey.TRANSLUCENT`

## transparentFloor

Field  
`TilePropertyKey.TRANSPARENT_FLOOR`

## transparentN

Field  
`TilePropertyKey.TRANSPARENT_N`

## transparentW

Field  
`TilePropertyKey.TRANSPARENT_W`

## TreatAsWallOrder

Field  
`TilePropertyKey.TREAT_AS_WALL_ORDER`

## tree

Field  
`TilePropertyKey.TREE`

## TV

Field  
`TilePropertyKey.TV`

## UnbreakableWindowN

Field  
`TilePropertyKey.UNBREAKABLE_WINDOW_N`

## UnbreakableWindowNW

Field  
`TilePropertyKey.UNBREAKABLE_WINDOW_NW`

## UnbreakableWindowW

Field  
`TilePropertyKey.UNBREAKABLE_WINDOW_W`

## unflammable

Field  
`TilePropertyKey.UNFLAMMABLE`

## unlit

Field  
`TilePropertyKey.UNLIT`

## UseObjectDepthTexture

Field  
`TilePropertyKey.USE_OBJECT_DEPTH_TEXTURE`

Type  
`boolean`

Makes the tile use the tile depth of the tile it overlays. For example
an overlay adding items on a shelf will use the shelf tile depth.

## vegitation

Field  
`TilePropertyKey.VEGITATION`

## wall

Field  
`TilePropertyKey.WALL`

## WallN

Field  
`TilePropertyKey.WALL_N`

## WallNTrans

Field  
`TilePropertyKey.WALL_N_TRANS`

## WallNW

Field  
`TilePropertyKey.WALL_NW`

## WallNWTrans

Field  
`TilePropertyKey.WALL_NW_TRANS`

## WallObjectAllowDoorframe

Field  
`TilePropertyKey.WALL_OBJECT_ALLOW_DOORFRAME`

## WallOverlay

Field  
`TilePropertyKey.WALL_OVERLAY`

## WallSE

Field  
`TilePropertyKey.WALL_SE`

## WallType

Field  
`TilePropertyKey.WALL_TYPE`

## WallW

Field  
`TilePropertyKey.WALL_W`

## WallWTrans

Field  
`TilePropertyKey.WALL_W_TRANS`

## water

Field  
`TilePropertyKey.WATER`

## waterAmount

Field  
`TilePropertyKey.WATER_AMOUNT`

## waterMaxAmount

Field  
`TilePropertyKey.WATER_MAX_AMOUNT`

## waterPiped

Field  
`TilePropertyKey.WATER_PIPED`

## WestRoofB

Field  
`TilePropertyKey.WEST_ROOF_B`

## WestRoofM

Field  
`TilePropertyKey.WEST_ROOF_M`

## WestRoofT

Field  
`TilePropertyKey.WEST_ROOF_T`

## WheelieBin

Field  
`TilePropertyKey.WHEELIE_BIN`

## windowFN

Field  
`TilePropertyKey.WINDOW_FN`

## windowFW

Field  
`TilePropertyKey.WINDOW_FW`

## WindowLocked

Field  
`TilePropertyKey.WINDOW_LOCKED`

## WindowN

Field  
`TilePropertyKey.WINDOW_N`

## WindowW

Field  
`TilePropertyKey.WINDOW_W`

## WindType

Field  
`TilePropertyKey.WIND_TYPE`

## Woffset

Field  
`TilePropertyKey.W_OFFSET`
