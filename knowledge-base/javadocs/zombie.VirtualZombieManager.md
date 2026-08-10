---
title: zombie.VirtualZombieManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.VirtualZombieManager

`public final class VirtualZombieManager extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.VirtualZombieManager

## Fields

### public static VirtualZombieManager instance

### public int maxRealZombies

### public final ArrayList<IsoGridSquare> choices

## Constructors

### public VirtualZombieManager()

## Methods

### public float getKeySpawnChanceD100()

**Returns:** `float`

### public boolean removeZombieFromWorld(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `boolean`

### public void addToReusable(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `void`

### public boolean isReused(IsoZombie z)

**Parameters:**
- `IsoZombie` `z`

**Returns:** `boolean`

### public void init()

**Returns:** `void`

### public void Reset()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public IsoZombie createRealZombieAlways(IsoDirections dir,
boolean bDead)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `bDead`

**Returns:** `IsoZombie`

### public IsoZombie createRealZombieAlways(int descriptorId,
IsoDirections dir,
boolean bDead)

**Parameters:**
- `int` `descriptorId`
- `IsoDirections` `dir`
- `boolean` `bDead`

**Returns:** `IsoZombie`

### public IsoZombie createRealZombieAlways(IsoDirections dir,
boolean bDead,
int outfitID)

**Parameters:**
- `IsoDirections` `dir`
- `boolean` `bDead`
- `int` `outfitID`

**Returns:** `IsoZombie`

### public void createEatingZombies(IsoDeadBody target,
int nb)

**Parameters:**
- `IsoDeadBody` `target`
- `int` `nb`

**Returns:** `void`

### public void AddBloodToMap(int nSize,
IsoChunk chk)

**Parameters:**
- `int` `nSize`
- `IsoChunk` `chk`

**Returns:** `void`

### public boolean shouldSpawnZombiesOnLevel(int level)

**Parameters:**
- `int` `level`

**Returns:** `boolean`

### public ArrayList<IsoZombie> addZombiesToMap(int nSize,
RoomDef room)

**Parameters:**
- `int` `nSize`
- `RoomDef` `room`

**Returns:** `ArrayList<IsoZombie>`

### public ArrayList<IsoZombie> addZombiesToMap(int nSize,
RoomDef room,
boolean bAllowDead)

**Parameters:**
- `int` `nSize`
- `RoomDef` `room`
- `boolean` `bAllowDead`

**Returns:** `ArrayList<IsoZombie>`

### public void tryAddIndoorZombies(RoomDef room,
boolean bAllowDead)

**Parameters:**
- `RoomDef` `room`
- `boolean` `bAllowDead`

**Returns:** `void`

### public void addIndoorZombiesToChunk(IsoChunk chunk,
IsoRoom room,
int zombieCountForRoom,
ArrayList<IsoZombie> zombies)

**Parameters:**
- `IsoChunk` `chunk`
- `IsoRoom` `room`
- `int` `zombieCountForRoom`
- `ArrayList<IsoZombie>` `zombies`

**Returns:** `void`

### public void addIndoorZombiesToChunk(IsoChunk chunk,
IsoRoom room)

**Parameters:**
- `IsoChunk` `chunk`
- `IsoRoom` `room`

**Returns:** `void`

### public void addDeadZombiesToMap(int nSize,
RoomDef room)

**Parameters:**
- `int` `nSize`
- `RoomDef` `room`

**Returns:** `void`

### public void RemoveZombie(IsoZombie obj)

**Parameters:**
- `IsoZombie` `obj`

**Returns:** `void`

### public void createHordeFromTo(float spawnX,
float spawnY,
float targetX,
float targetY,
int count)

**Parameters:**
- `float` `spawnX`
- `float` `spawnY`
- `float` `targetX`
- `float` `targetY`
- `int` `count`

**Returns:** `void`

### public IsoZombie createRealZombie(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `IsoZombie`

### public IsoZombie createRealZombieNow(float x,
float y,
float z)

**Parameters:**
- `float` `x`
- `float` `y`
- `float` `z`

**Returns:** `IsoZombie`

### public void roomSpotted(IsoRoom room)

**Parameters:**
- `IsoRoom` `room`

**Returns:** `void`

### public boolean canSpawnAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `boolean`

### public int reusableZombiesSize()

**Returns:** `int`

### public boolean checkZombieKeyForBuilding(String outfitName,
IsoGridSquare square)

**Parameters:**
- `String` `outfitName`
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public boolean spawnBuildingKeyOnZombie(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `boolean`

### public boolean spawnBuildingKeyOnZombie(IsoZombie zombie,
BuildingDef def)

**Parameters:**
- `IsoZombie` `zombie`
- `BuildingDef` `def`

**Returns:** `boolean`

### public boolean checkAndSpawnZombieForBuildingKey(IsoZombie zombie)

**Parameters:**
- `IsoZombie` `zombie`

**Returns:** `boolean`

### public boolean checkAndSpawnZombieForBuildingKey(IsoZombie zombie,
boolean bandits)

**Parameters:**
- `IsoZombie` `zombie`
- `boolean` `bandits`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\VirtualZombieManager.html`*
