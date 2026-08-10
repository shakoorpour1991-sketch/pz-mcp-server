---
title: zombie.randomizedWorld.RandomizedWorldBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld
---

# zombie.randomizedWorld.RandomizedWorldBase

`public class RandomizedWorldBase extends Object`

**Kind:** class · **Package:** zombie.randomizedWorld

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase

## Constructors

### public RandomizedWorldBase()

## Methods

### public BaseVehicle addVehicle(Zone zone,
IsoGridSquare sq,
IsoChunk chunk,
String zoneName,
String scriptName,
IsoDirections dir)

**Parameters:**
- `Zone` `zone`
- `IsoGridSquare` `sq`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `IsoDirections` `dir`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicleFlipped(Zone zone,
IsoGridSquare sq,
IsoChunk chunk,
String zoneName,
String scriptName,
Integer skinIndex,
IsoDirections dir,
String specificContainer)

**Parameters:**
- `Zone` `zone`
- `IsoGridSquare` `sq`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `IsoDirections` `dir`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicleFlipped(Zone zone,
float vehicleX,
float vehicleY,
float vehicleZ,
float direction,
String zoneName,
String scriptName,
Integer skinIndex,
String specificContainer)

**Parameters:**
- `Zone` `zone`
- `float` `vehicleX`
- `float` `vehicleY`
- `float` `vehicleZ`
- `float` `direction`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(Zone zone,
IsoGridSquare sq,
IsoChunk chunk,
String zoneName,
String scriptName,
Integer skinIndex,
IsoDirections dir,
String specificContainer)

**Parameters:**
- `Zone` `zone`
- `IsoGridSquare` `sq`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `IsoDirections` `dir`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(Zone zone,
IsoGridSquare sq,
IsoChunk chunk,
String zoneName,
String scriptName,
Integer skinIndex,
IsoDirections dir,
String specificContainer,
boolean crashed)

**Parameters:**
- `Zone` `zone`
- `IsoGridSquare` `sq`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `IsoDirections` `dir`
- `String` `specificContainer`
- `boolean` `crashed`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(IsoGridSquare sq,
IsoChunk chunk,
String zoneName,
String scriptName,
Integer skinIndex,
IsoDirections dir,
String specificContainer)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `IsoDirections` `dir`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(Zone zone,
float vehicleX,
float vehicleY,
float vehicleZ,
float direction,
String zoneName,
String scriptName,
Integer skinIndex,
String specificContainer)

**Parameters:**
- `Zone` `zone`
- `float` `vehicleX`
- `float` `vehicleY`
- `float` `vehicleZ`
- `float` `direction`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(Zone zone,
float vehicleX,
float vehicleY,
float vehicleZ,
float direction,
String zoneName,
String scriptName,
Integer skinIndex,
String specificContainer,
boolean crashed)

**Parameters:**
- `Zone` `zone`
- `float` `vehicleX`
- `float` `vehicleY`
- `float` `vehicleZ`
- `float` `direction`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `String` `specificContainer`
- `boolean` `crashed`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(float vehicleX,
float vehicleY,
float vehicleZ,
float direction,
String zoneName,
String scriptName,
Integer skinIndex,
String specificContainer)

**Parameters:**
- `float` `vehicleX`
- `float` `vehicleY`
- `float` `vehicleZ`
- `float` `direction`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `String` `specificContainer`

**Returns:** `BaseVehicle`

### public BaseVehicle addVehicle(float vehicleX,
float vehicleY,
float vehicleZ,
float direction,
String zoneName,
String scriptName,
Integer skinIndex,
String specificContainer,
boolean crashed)

**Parameters:**
- `float` `vehicleX`
- `float` `vehicleY`
- `float` `vehicleZ`
- `float` `direction`
- `String` `zoneName`
- `String` `scriptName`
- `Integer` `skinIndex`
- `String` `specificContainer`
- `boolean` `crashed`

**Returns:** `BaseVehicle`

### public static void removeAllVehiclesOnZone(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public ArrayList<IsoZombie> addZombiesOnVehicle(int totalZombies,
String outfit,
Integer femaleChance,
BaseVehicle vehicle)

Add zombies near the vehicles, around a 4x4 square around it, avoiding being
ON the vehicle invalid input: '&' randomizing square for each zombies

**Parameters:**
- `int` `totalZombies`
- `String` `outfit`
- `Integer` `femaleChance`
- `BaseVehicle` `vehicle`

**Returns:** `ArrayList<IsoZombie>`

### public static IsoDeadBody createRandomDeadBody(RoomDef room,
int blood)

**Parameters:**
- `RoomDef` `room`
- `int` `blood`

**Returns:** `IsoDeadBody`

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

### public static IsoDeadBody createRandomDeadBody(int x,
int y,
int z,
IsoDirections dir,
int blood)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoDirections` `dir`
- `int` `blood`

**Returns:** `IsoDeadBody`

### public static IsoDeadBody createRandomDeadBody(int x,
int y,
int z,
IsoDirections dir,
int blood,
int crawlerChance)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoDirections` `dir`
- `int` `blood`
- `int` `crawlerChance`

**Returns:** `IsoDeadBody`

### public static IsoDeadBody createRandomDeadBody(IsoGridSquare sq,
IsoDirections dir,
int blood,
int crawlerChance,
String outfit)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoDirections` `dir`
- `int` `blood`
- `int` `crawlerChance`
- `String` `outfit`

**Returns:** `IsoDeadBody`

### public static IsoDeadBody createRandomDeadBody(float x,
float y,
float z,
float direction,
boolean alignToSquare,
int blood,
int crawlerChance,
String outfit)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `direction`
- `boolean` `alignToSquare`
- `int` `blood`
- `int` `crawlerChance`
- `String` `outfit`

**Returns:** `IsoDeadBody`

### public static IsoDeadBody createRandomDeadBody(IsoGridSquare sq,
IsoDirections dir2,
boolean alignToSquare,
int blood,
int crawlerChance,
String outfit,
Integer femaleChance)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoDirections` `dir2`
- `boolean` `alignToSquare`
- `int` `blood`
- `int` `crawlerChance`
- `String` `outfit`
- `Integer` `femaleChance`

**Returns:** `IsoDeadBody`

### public void addTraitOfBlood(IsoDirections dir,
int time,
int x,
int y,
int z)

**Parameters:**
- `IsoDirections` `dir`
- `int` `time`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addTrailOfBlood(float x,
float y,
float z,
float direction,
int count)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`
- `float` `direction`
- `int` `count`

**Returns:** `void`

### public void addBloodSplat(IsoGridSquare sq,
int nbr)

**Parameters:**
- `IsoGridSquare` `sq`
- `int` `nbr`

**Returns:** `void`

### public void setAttachedItem(IsoZombie zombie,
String location,
String item,
String ensureItem)

**Parameters:**
- `IsoZombie` `zombie`
- `String` `location`
- `String` `item`
- `String` `ensureItem`

**Returns:** `void`

### public static IsoGameCharacter createRandomZombie(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `IsoGameCharacter`

### public static IsoGameCharacter createRandomZombieForCorpse(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `IsoGameCharacter`

### public static IsoDeadBody createBodyFromZombie(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `IsoDeadBody`

### public static IsoGameCharacter createRandomZombie(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGameCharacter`

### public static boolean is1x1AreaClear(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static boolean is1x2AreaClear(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static boolean is2x1AreaClear(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static boolean is2x1or1x2AreaClear(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static boolean is2x2AreaClear(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static void alignCorpseToSquare(IsoGameCharacter chr,
IsoGridSquare square)

**Parameters:**
- `IsoGameCharacter` `chr`
- `IsoGridSquare` `square`

**Returns:** `void`

### public RoomDef getRandomRoom(BuildingDef bDef,
int minArea)

Get a random room in the building

**Parameters:**
- `BuildingDef` `bDef`
- `int` `minArea`

**Returns:** `RoomDef`

### public RoomDef getRandomRoomNoKids(BuildingDef bDef,
int minArea)

**Parameters:**
- `BuildingDef` `bDef`
- `int` `minArea`

**Returns:** `RoomDef`

### public RoomDef getRoom(BuildingDef bDef,
String roomName)

Return the wanted room

**Parameters:**
- `BuildingDef` `bDef`
- `String` `roomName`

**Returns:** `RoomDef`

### public RoomDef getRoomNoKids(BuildingDef bDef,
String roomName)

**Parameters:**
- `BuildingDef` `bDef`
- `String` `roomName`

**Returns:** `RoomDef`

### public RoomDef getLivingRoomOrKitchen(BuildingDef bDef)

Get either the living room or kitchen (in this order)

**Parameters:**
- `BuildingDef` `bDef`

**Returns:** `RoomDef`

### public static IsoGridSquare getRandomSpawnSquare(RoomDef roomDef)

**Parameters:**
- `RoomDef` `roomDef`

**Returns:** `IsoGridSquare`

### public static IsoGridSquare getRandomSquareForCorpse(RoomDef roomDef)

**Parameters:**
- `RoomDef` `roomDef`

**Returns:** `IsoGridSquare`

### public BaseVehicle spawnCarOnNearestNav(String carName,
BuildingDef def)

**Parameters:**
- `String` `carName`
- `BuildingDef` `def`

**Returns:** `BaseVehicle`

### public BaseVehicle spawnCarOnNearestNav(String carName,
BuildingDef def,
String distribution)

**Parameters:**
- `String` `carName`
- `BuildingDef` `def`
- `String` `distribution`

**Returns:** `BaseVehicle`

### public boolean checkAreaForCarsSpawn(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean checkRadiusForCarSpawn(IsoGridSquare square,
int radius)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `radius`

**Returns:** `boolean`

### public InventoryItem addItemOnGround(IsoGridSquare square,
String type)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem addItemOnGroundNoLoot(IsoGridSquare square,
String type)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `type`

**Returns:** `InventoryItem`

### public static InventoryItem addItemOnGroundStatic(IsoGridSquare square,
String type)

**Parameters:**
- `IsoGridSquare` `square`
- `String` `type`

**Returns:** `InventoryItem`

### public InventoryItem addItemOnGround(IsoGridSquare square,
InventoryItem item)

**Parameters:**
- `IsoGridSquare` `square`
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public InventoryItem addItemOnGround(IsoGridSquare square,
InventoryItem item,
boolean fill)

**Parameters:**
- `IsoGridSquare` `square`
- `InventoryItem` `item`
- `boolean` `fill`

**Returns:** `InventoryItem`

### public InventoryItem addItemOnGroundNoLoot(IsoGridSquare square,
InventoryItem item)

**Parameters:**
- `IsoGridSquare` `square`
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public static InventoryItem addItemOnGroundStatic(IsoGridSquare square,
InventoryItem item)

**Parameters:**
- `IsoGridSquare` `square`
- `InventoryItem` `item`

**Returns:** `InventoryItem`

### public void addRandomItemsOnGround(RoomDef room,
String type,
int count)

**Parameters:**
- `RoomDef` `room`
- `String` `type`
- `int` `count`

**Returns:** `void`

### public void addRandomItemsOnGround(RoomDef room,
ArrayList<String> types,
int count)

**Parameters:**
- `RoomDef` `room`
- `ArrayList<String>` `types`
- `int` `count`

**Returns:** `void`

### public InventoryItem addRandomItemOnGround(IsoGridSquare square,
ArrayList<String> types)

**Parameters:**
- `IsoGridSquare` `square`
- `ArrayList<String>` `types`

**Returns:** `InventoryItem`

### public HandWeapon addWeapon(String type,
boolean addRandomBullets)

Create and return a weapon, if it's ranged you can ask for some bullets in it

**Parameters:**
- `String` `type`
- `boolean` `addRandomBullets`

**Returns:** `HandWeapon`

### public IsoDeadBody createSkeletonCorpse(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createSkeletonCorpse(IsoGridSquare freeSQ)

**Parameters:**
- `IsoGridSquare` `freeSQ`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(RoomDef room)

**Parameters:**
- `RoomDef` `room`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(RoomDef room,
boolean skeleton)

**Parameters:**
- `RoomDef` `room`
- `boolean` `skeleton`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(IsoGridSquare freeSQ,
boolean skeleton)

**Parameters:**
- `IsoGridSquare` `freeSQ`
- `boolean` `skeleton`

**Returns:** `IsoDeadBody`

### public IsoDeadBody createCorpse(IsoGridSquare freeSQ,
IsoZombie zombie)

**Parameters:**
- `IsoGridSquare` `freeSQ`
- `IsoZombie` `zombie`

**Returns:** `IsoDeadBody`

### public boolean isTimeValid(boolean force)

Check if the world age is correct for our definition

**Parameters:**
- `boolean` `force`

**Returns:** `boolean`

### public String getName()

**Returns:** `String`

### public String getDebugLine()

**Returns:** `String`

### public void setDebugLine(String debugLine)

**Parameters:**
- `String` `debugLine`

**Returns:** `void`

### public int getMaximumDays()

**Returns:** `int`

### public void setMaximumDays(int maximumDays)

**Parameters:**
- `int` `maximumDays`

**Returns:** `void`

### public boolean isUnique()

**Returns:** `boolean`

### public boolean isRat()

**Returns:** `boolean`

### public void setUnique(boolean unique)

**Parameters:**
- `boolean` `unique`

**Returns:** `void`

### public static IsoGridSquare getSq(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### public IsoObject addTileObject(int x,
int y,
int z,
String spriteName)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `spriteName`

**Returns:** `IsoObject`

### public IsoObject addTileObject(int x,
int y,
int z,
String spriteName,
boolean dirt)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `String` `spriteName`
- `boolean` `dirt`

**Returns:** `IsoObject`

### public IsoObject addTileObject(IsoGridSquare sq,
String spriteName)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `spriteName`

**Returns:** `IsoObject`

### public IsoObject addTileObject(IsoGridSquare sq,
String spriteName,
boolean dirt)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `spriteName`
- `boolean` `dirt`

**Returns:** `IsoObject`

### public IsoObject addTileObject(IsoGridSquare sq,
IsoObject obj)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoObject` `obj`

**Returns:** `IsoObject`

### public IsoObject addTileObject(IsoGridSquare sq,
IsoObject obj,
boolean dirt)

**Parameters:**
- `IsoGridSquare` `sq`
- `IsoObject` `obj`
- `boolean` `dirt`

**Returns:** `IsoObject`

### public void addSleepingBagOrTentNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addSleepingBagOrTentWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addRandomTentNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addRandomTentWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addRandomShelterNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addRandomShelterWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addTentNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addTentWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addMattressNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addMattressWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addSleepingBagNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addSleepingBagWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addShelterNorthSouth(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addShelterWestEast(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addTentNorthSouthNew(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void addTentWestEastNew(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public BaseVehicle addTrailer(BaseVehicle v,
Zone zone,
IsoChunk chunk,
String zoneName,
String vehicleDistrib,
String trailerName)

**Parameters:**
- `BaseVehicle` `v`
- `Zone` `zone`
- `IsoChunk` `chunk`
- `String` `zoneName`
- `String` `vehicleDistrib`
- `String` `trailerName`

**Returns:** `BaseVehicle`

### public void addCampfire(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addSimpleCookingPit(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addCookingPit(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addBrazier(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addSimpleFire(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addRandomFirepit(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addCampfireOrPit(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void dirtBomb(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void cleanSquareAndNeighbors(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addCharcoalBurner(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void addWorkstationEntity(IsoGridSquare sq,
GameEntityScript script,
String sprite)

**Parameters:**
- `IsoGridSquare` `sq`
- `GameEntityScript` `script`
- `String` `sprite`

**Returns:** `void`

### public void addWorkstationEntity(IsoThumpable thumpable,
IsoGridSquare sq,
GameEntityScript script,
String sprite)

**Parameters:**
- `IsoThumpable` `thumpable`
- `IsoGridSquare` `sq`
- `GameEntityScript` `script`
- `String` `sprite`

**Returns:** `void`

### public InventoryItem addItemToObjectSurface(String item,
IsoObject object)

**Parameters:**
- `String` `item`
- `IsoObject` `object`

**Returns:** `InventoryItem`

### public boolean isValidGraffSquare(IsoGridSquare sq,
boolean north,
boolean recursive)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`
- `boolean` `recursive`

**Returns:** `boolean`

### public void graffSquare(IsoGridSquare sq,
boolean north)

**Parameters:**
- `IsoGridSquare` `sq`
- `boolean` `north`

**Returns:** `void`

### public void graffSquare(IsoGridSquare sq,
String sprite,
boolean north)

**Parameters:**
- `IsoGridSquare` `sq`
- `String` `sprite`
- `boolean` `north`

**Returns:** `void`

### public void trashSquare(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public String getBBQClutterItem()

**Returns:** `String`

### public ArrayList<String> getBBQClutter()

**Returns:** `ArrayList<String>`

### public static String getBarnClutterItem()

**Returns:** `String`

### public ArrayList<String> getBarnClutter()

**Returns:** `ArrayList<String>`

### public String getBathroomSinkClutterItem()

**Returns:** `String`

### public ArrayList<String> getBathroomSinkClutter()

**Returns:** `ArrayList<String>`

### public String getBeachPartyClutterItem()

**Returns:** `String`

### public ArrayList<String> getBeachPartyClutter()

**Returns:** `ArrayList<String>`

### public String getBedClutterItem()

**Returns:** `String`

### public ArrayList<String> getBedClutter()

**Returns:** `ArrayList<String>`

### public String getCarpentryToolClutterItem()

**Returns:** `String`

### public ArrayList<String> getCarpentryToolClutter()

**Returns:** `ArrayList<String>`

### public static String getCafeClutterItem()

**Returns:** `String`

### public ArrayList<String> getCafeClutter()

**Returns:** `ArrayList<String>`

### public static String getDeadEndClutterItem()

**Returns:** `String`

### public ArrayList<String> getDeadEndClutter()

**Returns:** `ArrayList<String>`

### public static String getDormClutterItem()

**Returns:** `String`

### public ArrayList<String> getDormClutter()

**Returns:** `ArrayList<String>`

### public static String getFarmStorageClutterItem()

**Returns:** `String`

### public ArrayList<String> getFarmStorageClutter()

**Returns:** `ArrayList<String>`

### public static String getFootballNightDrinkItem()

**Returns:** `String`

### public ArrayList<String> getFootballNightDrinks()

**Returns:** `ArrayList<String>`

### public static String getFootballNightSnackItem()

**Returns:** `String`

### public ArrayList<String> getFootballNightSnacks()

**Returns:** `ArrayList<String>`

### public static String getGarageStorageClutterItem()

**Returns:** `String`

### public ArrayList<String> getGarageStorageClutter()

**Returns:** `ArrayList<String>`

### public static String getGigamartClutterItem()

**Returns:** `String`

### public ArrayList<String> getGigamartClutter()

**Returns:** `ArrayList<String>`

### public static String getGroceryClutterItem()

**Returns:** `String`

### public ArrayList<String> getGroceryClutter()

**Returns:** `ArrayList<String>`

### public static String getHairSalonClutterItem()

**Returns:** `String`

### public ArrayList<String> getHairSalonClutter()

**Returns:** `ArrayList<String>`

### public static String getHallClutterItem()

**Returns:** `String`

### public ArrayList<String> getHallClutter()

**Returns:** `ArrayList<String>`

### public static String getHenDoDrinkItem()

**Returns:** `String`

### public ArrayList<String> getHenDoDrinks()

**Returns:** `ArrayList<String>`

### public static String getHenDoSnackItem()

**Returns:** `String`

### public ArrayList<String> getHenDoSnacks()

**Returns:** `ArrayList<String>`

### public String getHoedownClutterItem()

**Returns:** `String`

### public ArrayList<String> getHoedownClutter()

**Returns:** `ArrayList<String>`

### public String getHousePartyClutterItem()

**Returns:** `String`

### public ArrayList<String> getHousePartyClutter()

**Returns:** `ArrayList<String>`

### public static String getJudgeClutterItem()

**Returns:** `String`

### public ArrayList<String> getJudgeClutter()

**Returns:** `ArrayList<String>`

### public String getKidClutterItem()

**Returns:** `String`

### public ArrayList<String> getKidClutter()

**Returns:** `ArrayList<String>`

### public String getKitchenCounterClutterItem()

**Returns:** `String`

### public ArrayList<String> getKitchenCounterClutter()

**Returns:** `ArrayList<String>`

### public String getKitchenSinkClutterItem()

**Returns:** `String`

### public ArrayList<String> getKitchenSinkClutter()

**Returns:** `ArrayList<String>`

### public String getKitchenStoveClutterItem()

**Returns:** `String`

### public ArrayList<String> getKitchenStoveClutter()

**Returns:** `ArrayList<String>`

### public String getLaundryRoomClutterItem()

**Returns:** `String`

### public ArrayList<String> getLaundryRoomClutter()

**Returns:** `ArrayList<String>`

### public String getLivingroomClutterItem()

**Returns:** `String`

### public ArrayList<String> getLivingroomClutter()

**Returns:** `ArrayList<String>`

### public static String getMedicallutterItem()

**Returns:** `String`

### public ArrayList<String> getMedicalClutter()

**Returns:** `ArrayList<String>`

### public static String getMurderSceneClutterItem()

**Returns:** `String`

### public ArrayList<String> getMurderSceneClutter()

**Returns:** `ArrayList<String>`

### public static String getNastyMattressClutterItem()

**Returns:** `String`

### public ArrayList<String> getNastyMattressClutter()

**Returns:** `ArrayList<String>`

### public static String getOldShelterClutterItem()

**Returns:** `String`

### public ArrayList<String> getOldShelterClutter()

**Returns:** `ArrayList<String>`

### public static String getOfficeCarDealerClutterItem()

**Returns:** `String`

### public ArrayList<String> getOfficeCarDealerClutter()

**Returns:** `ArrayList<String>`

### public static String getOfficePaperworkClutterItem()

**Returns:** `String`

### public ArrayList<String> getOfficePaperworkClutter()

**Returns:** `ArrayList<String>`

### public static String getOfficePenClutterItem()

**Returns:** `String`

### public ArrayList<String> getOfficePenClutter()

**Returns:** `ArrayList<String>`

### public static String getOfficeOtherClutterItem()

**Returns:** `String`

### public ArrayList<String> getOfficeOtherClutter()

**Returns:** `ArrayList<String>`

### public static String getOfficeTreatClutterItem()

**Returns:** `String`

### public ArrayList<String> getOfficeTreatClutter()

**Returns:** `ArrayList<String>`

### public String getOvenFoodClutterItem()

**Returns:** `String`

### public ArrayList<String> getOvenFoodClutter()

**Returns:** `ArrayList<String>`

### public String getPillowClutterItem()

**Returns:** `String`

### public ArrayList<String> getPillowClutter()

**Returns:** `ArrayList<String>`

### public String getPokerNightClutterItem()

**Returns:** `String`

### public ArrayList<String> getPokerNightClutter()

**Returns:** `ArrayList<String>`

### public String getRichJerkClutterItem()

**Returns:** `String`

### public ArrayList<String> getRichJerkClutter()

**Returns:** `ArrayList<String>`

### public String getSadCampsiteClutterItem()

**Returns:** `String`

### public ArrayList<String> getSadCampsiteClutter()

**Returns:** `ArrayList<String>`

### public String getSidetableClutterItem()

**Returns:** `String`

### public ArrayList<String> getSidetableClutter()

**Returns:** `ArrayList<String>`

### public String getSurvivalistCampsiteClutterItem()

**Returns:** `String`

### public ArrayList<String> getSurvivalistCampsiteClutter()

**Returns:** `ArrayList<String>`

### public static String getTwiggyClutterItem()

**Returns:** `String`

### public ArrayList<String> getTwiggyClutter()

**Returns:** `ArrayList<String>`

### public String getUtilityToolClutterItem()

**Returns:** `String`

### public ArrayList<String> getUtilityToolClutter()

**Returns:** `ArrayList<String>`

### public String getVanCampClutterItem()

**Returns:** `String`

### public ArrayList<String> getVanCampClutter()

**Returns:** `ArrayList<String>`

### public String getWatchClutterItem()

**Returns:** `String`

### public ArrayList<String> getWatchClutter()

**Returns:** `ArrayList<String>`

### public static String getWoodcraftClutterItem()

**Returns:** `String`

### public ArrayList<String> getWoodcraftClutter()

**Returns:** `ArrayList<String>`

### public static String getClutterItem(ArrayList<String> clutterArray)

**Parameters:**
- `ArrayList<String>` `clutterArray`

**Returns:** `String`

### public gnu.trove.map.hash.TIntObjectHashMap<String> getClutterCopy(ArrayList<String> clutter)

**Parameters:**
- `ArrayList<String>` `clutter`

**Returns:** `gnu.trove.map.hash.TIntObjectHashMap<String>`

### public gnu.trove.map.hash.TIntObjectHashMap<String> getClutterCopy(ArrayList<String> clutter,
gnu.trove.map.hash.TIntObjectHashMap<String> copy)

**Parameters:**
- `ArrayList<String>` `clutter`
- `gnu.trove.map.hash.TIntObjectHashMap<String>` `copy`

**Returns:** `gnu.trove.map.hash.TIntObjectHashMap<String>`

### public InventoryItem trySpawnStoryItem(String itemType,
IsoGridSquare square,
float x,
float y,
float z,
boolean fill)

**Parameters:**
- `String` `itemType`
- `IsoGridSquare` `square`
- `float` `x`
- `float` `y`
- `float` `z`
- `boolean` `fill`

**Returns:** `InventoryItem`

### public static InventoryItem trySpawnStoryItem(String itemType,
IsoGridSquare square,
float x,
float y,
float z)

**Parameters:**
- `String` `itemType`
- `IsoGridSquare` `square`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `InventoryItem`

### public static InventoryItem trySpawnStoryItem(InventoryItem item,
IsoGridSquare square,
float x,
float y,
float z)

**Parameters:**
- `InventoryItem` `item`
- `IsoGridSquare` `square`
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `InventoryItem`

### public InventoryItem trySpawnStoryItem(InventoryItem item,
ItemContainer container)

**Parameters:**
- `InventoryItem` `item`
- `ItemContainer` `container`

**Returns:** `InventoryItem`

### public static InventoryItem trySpawnStoryItem(String itemType,
IsoObject obj,
Boolean randomRotation)

**Parameters:**
- `String` `itemType`
- `IsoObject` `obj`
- `Boolean` `randomRotation`

**Returns:** `InventoryItem`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\RandomizedWorldBase.html`*
