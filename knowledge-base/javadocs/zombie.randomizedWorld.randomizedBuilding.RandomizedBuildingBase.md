---
title: zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedBuilding
---

# zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase

`public class RandomizedBuildingBase extends RandomizedWorldBase`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedBuilding

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase
- zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase

## Fields

### public static int maximumRoomCount

## Constructors

### public RandomizedBuildingBase()

## Methods

### public void randomizeBuilding(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `void`

### public void init()

**Returns:** `void`

### public static void initAllRBMapChance()

**Returns:** `void`

### public boolean isValid(BuildingDef def,
boolean force)

Don't do any building change in a player's building Also check if the
building have a bathroom, a kitchen and a bedroom
This is ignored for the alwaysDo building (so i can do stuff in spiffo, pizzawhirled, etc..)

**Parameters:**
- `BuildingDef` `def`
- `boolean` `force`

**Returns:** `boolean`

### public int getMinimumDays()

**Returns:** `int`

### public void setMinimumDays(int minimumDays)

**Parameters:**
- `int` `minimumDays`

**Returns:** `void`

### public int getMinimumRooms()

**Returns:** `int`

### public void setMinimumRooms(int minimumRooms)

**Parameters:**
- `int` `minimumRooms`

**Returns:** `void`

### public static void ChunkLoaded(IsoBuilding building)

**Parameters:**
- `IsoBuilding` `building`

**Returns:** `void`

### public int getChance()

**Returns:** `int`

### public int getChance(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `int`

### public void setChance(int chance)

**Parameters:**
- `int` `chance`

**Returns:** `void`

### public boolean isAlwaysDo()

**Returns:** `boolean`

### public void setAlwaysDo(boolean alwaysDo)

**Parameters:**
- `boolean` `alwaysDo`

**Returns:** `void`

### public ArrayList<IsoZombie> addZombiesOnSquare(int totalZombies,
String outfit,
Integer femaleChance,
IsoGridSquare square)

**Parameters:**
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `IsoGridSquare` `square`

**Returns:** `ArrayList<IsoZombie>`

### public ArrayList<IsoZombie> addZombies(BuildingDef def,
int totalZombies,
String outfit,
Integer femaleChance,
RoomDef room)

If you specify a outfit, make sure it works for both gender! (or force
femaleChance to 0 or 1 if it's gender-specific)

**Parameters:**
- `BuildingDef` `def` — buildingDef
- `int` `totalZombies` — zombies to spawn (if 0 we gonna randomize it)
- `String` `outfit` — force zombies spanwed in a specific outfit (not mandatory)
- `Integer` `femaleChance` — force female zombies (if not set it'll be 50% chance, you can set
it to 0 to exclude female from spawning, or 100 to force only
female)
- `RoomDef` `room` — force spawn zombies inside a certain room (not mandatory)

**Returns:** `ArrayList<IsoZombie>`

### public HandWeapon addRandomRangedWeapon(ItemContainer container,
boolean addBulletsInGun,
boolean addBoxInContainer,
boolean attachPart)

**Parameters:**
- `ItemContainer` `container`
- `boolean` `addBulletsInGun`
- `boolean` `addBoxInContainer`
- `boolean` `attachPart`

**Returns:** `HandWeapon`

### public void spawnItemsInContainers(BuildingDef def,
String distribName,
int chance)

**Parameters:**
- `BuildingDef` `def`
- `String` `distribName`
- `int` `chance`

**Returns:** `void`

### public IsoWindow getWindow(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `IsoWindow`

### public IsoDoor getDoor(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `IsoDoor`

### public void addBarricade(IsoGridSquare sq,
int numPlanks)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `numPlanks`

**Returns:** `void`

### public InventoryItem addWorldItem(String item,
IsoGridSquare sq,
float xoffset,
float yoffset,
float zoffset)

**Parameters:**
- `String` `item`
- `IsoGridSquare` `sq`
- `float` `xoffset`
- `float` `yoffset`
- `float` `zoffset`

**Returns:** `InventoryItem`

### public InventoryItem addWorldItem(String item,
IsoGridSquare sq,
float xoffset,
float yoffset,
float zoffset,
boolean randomRotation)

**Parameters:**
- `String` `item`
- `IsoGridSquare` `sq`
- `float` `xoffset`
- `float` `yoffset`
- `float` `zoffset`
- `boolean` `randomRotation`

**Returns:** `InventoryItem`

### public InventoryItem addWorldItem(String item,
IsoGridSquare sq,
float xoffset,
float yoffset,
float zoffset,
int worldZ)

**Parameters:**
- `String` `item`
- `IsoGridSquare` `sq`
- `float` `xoffset`
- `float` `yoffset`
- `float` `zoffset`
- `int` `worldZ`

**Returns:** `InventoryItem`

### public InventoryItem addWorldItem(String item,
IsoGridSquare sq,
IsoObject obj)

**Parameters:**
- `String` `item`
- `IsoGridSquare` `sq`
- `IsoObject` `obj`

**Returns:** `InventoryItem`

### public InventoryItem addWorldItem(String item,
IsoGridSquare sq,
IsoObject obj,
boolean randomRotation)

**Parameters:**
- `String` `item`
- `IsoGridSquare` `sq`
- `IsoObject` `obj`
- `boolean` `randomRotation`

**Returns:** `InventoryItem`

### public boolean isTableFor3DItems(IsoObject obj,
IsoGridSquare sq)

**Parameters:**
- `IsoObject` `obj`
- `IsoGridSquare` `sq`

**Returns:** `boolean`

### public InventoryItem trySpawnStoryItem(String itemType,
IsoGridSquare square,
IsoObject obj)

**Parameters:**
- `String` `itemType`
- `IsoGridSquare` `square`
- `IsoObject` `obj`

**Returns:** `InventoryItem`

### public static ArrayList<IsoObject> getBuildingObjectsSimple(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `ArrayList<IsoObject>`

### public static ArrayList<IsoObject> getBuildingObjects(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `ArrayList<IsoObject>`

### public static ArrayList<IsoGridSquare> getBuildingSquares(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `ArrayList<IsoGridSquare>`

### public static ArrayList<IsoGridSquare> getRectSquares(RoomDef.RoomRect rect,
RoomDef room)

**Parameters:**
- `RoomDef.RoomRect` `rect`
- `RoomDef` `room`

**Returns:** `ArrayList<IsoGridSquare>`

### public static void setWorldRotation(InventoryItem item,
float xRotation,
float yRotation,
float zRotation)

**Parameters:**
- `InventoryItem` `item`
- `float` `xRotation`
- `float` `yRotation`
- `float` `zRotation`

**Returns:** `void`

### public static void addClip(HandWeapon gun)

**Parameters:**
- `HandWeapon` `gun`

**Returns:** `void`

### public static HandWeapon spawnPistol(ItemKey gunType)

**Parameters:**
- `ItemKey` `gunType`

**Returns:** `HandWeapon`

### public static HandWeapon spawnRifle(ItemKey gunType)

**Parameters:**
- `ItemKey` `gunType`

**Returns:** `HandWeapon`

### public static void doGunShelfRifles(boolean facingE,
IsoGridSquare sq,
WeightedList<ItemKey> rifleTypes,
int spawnChance)

**Parameters:**
- `boolean` `facingE`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `rifleTypes`
- `int` `spawnChance`

**Returns:** `void`

### public static void doGunShelfHandguns(boolean facingE,
IsoGridSquare sq,
WeightedList<ItemKey> pistolTypes,
WeightedList<ItemKey> rifleTypes,
int spawnChancePistol,
int spawnChanceRifle)

**Parameters:**
- `boolean` `facingE`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `pistolTypes`
- `WeightedList<ItemKey>` `rifleTypes`
- `int` `spawnChancePistol`
- `int` `spawnChanceRifle`

**Returns:** `void`

### public static void doAmmoCans(PropertyContainer props,
boolean facingE,
boolean facingW,
boolean facingN,
IsoGridSquare sq,
WeightedList<ItemKey> ammoCans)

**Parameters:**
- `PropertyContainer` `props`
- `boolean` `facingE`
- `boolean` `facingW`
- `boolean` `facingN`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `ammoCans`

**Returns:** `void`

### public static void doHandgunCounterDisplay(boolean facingE,
boolean facingW,
boolean facingN,
IsoGridSquare sq,
WeightedList<ItemKey> pistolTypes)

**Parameters:**
- `boolean` `facingE`
- `boolean` `facingW`
- `boolean` `facingN`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `pistolTypes`

**Returns:** `void`

### public static void doRifleCounterDisplay(boolean facingE,
boolean facingW,
boolean facingN,
IsoGridSquare sq,
WeightedList<ItemKey> rifleTypes)

**Parameters:**
- `boolean` `facingE`
- `boolean` `facingW`
- `boolean` `facingN`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `rifleTypes`

**Returns:** `void`

### public static void doCounterAmmoDisplay(boolean facingE,
boolean facingW,
boolean facingN,
IsoGridSquare sq,
WeightedList<ItemKey> ammoBoxes)

**Parameters:**
- `boolean` `facingE`
- `boolean` `facingW`
- `boolean` `facingN`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `ammoBoxes`

**Returns:** `void`

### public static void doCornerAmmoCans(boolean facingE,
boolean facingW,
boolean facingN,
IsoGridSquare sq,
WeightedList<ItemKey> ammoCases,
WeightedList<ItemKey> ammoCans)

**Parameters:**
- `boolean` `facingE`
- `boolean` `facingW`
- `boolean` `facingN`
- `IsoGridSquare` `sq`
- `WeightedList<ItemKey>` `ammoCases`
- `WeightedList<ItemKey>` `ammoCans`

**Returns:** `void`

### public static void doBodyArmor(boolean facingE,
IsoGridSquare sq,
ItemKey vestType,
int spawnChance)

**Parameters:**
- `boolean` `facingE`
- `IsoGridSquare` `sq`
- `ItemKey` `vestType`
- `int` `spawnChance`

**Returns:** `void`

### public static void spawnBodyArmor(InventoryItem vest,
IsoGridSquare sq,
float xOffset,
float yOffset,
float zOffset,
int spawnChance)

**Parameters:**
- `InventoryItem` `vest`
- `IsoGridSquare` `sq`
- `float` `xOffset`
- `float` `yOffset`
- `float` `zOffset`
- `int` `spawnChance`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedBuilding\RandomizedBuildingBase.html`*
