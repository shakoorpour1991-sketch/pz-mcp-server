---
title: zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedVehicleStory
---

# zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase

`public class RandomizedVehicleStoryBase extends RandomizedWorldBase`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedVehicleStory

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase
- zombie.randomizedWorld.randomizedVehicleStory.RandomizedVehicleStoryBase

## Fields

### public static int baseChance

## Constructors

### public RandomizedVehicleStoryBase()

## Methods

### public static void initAllRVSMapChance(Zone zone,
IsoChunk chunk)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`

**Returns:** `void`

### public static boolean doRandomStory(Zone zone,
IsoChunk chunk,
boolean force)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `boolean` `force`

**Returns:** `boolean`

### public int getMinZoneWidth()

**Returns:** `int`

### public int getMinZoneHeight()

**Returns:** `int`

### public void randomizeVehicleStory(Zone zone,
IsoChunk chunk)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`

**Returns:** `void`

### public IsoGridSquare getCenterOfChunk(Zone zone,
IsoChunk chunk)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`

**Returns:** `IsoGridSquare`

### public boolean isValid(Zone zone,
IsoChunk chunk,
boolean force)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `boolean` `force`

**Returns:** `boolean`

### public VehicleStorySpawnData initSpawnDataForChunk(Zone zone,
IsoChunk chunk)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`

**Returns:** `VehicleStorySpawnData`

### public boolean getSpawnPoint(Zone zone,
IsoChunk chunk,
float[] result)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `float[]` `result`

**Returns:** `boolean`

### public boolean getRectangleSpawnPoint(Zone zone,
IsoChunk chunk,
float[] result)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `float[]` `result`

**Returns:** `boolean`

### public boolean getPolylineSpawnPoint(Zone zone,
IsoChunk chunk,
float[] result)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `float[]` `result`

**Returns:** `boolean`

### public boolean isFullyStreamedIn(int x1,
int y1,
int x2,
int y2)

**Parameters:**
- `int` `x1`
- `int` `y1`
- `int` `x2`
- `int` `y2`

**Returns:** `boolean`

### public boolean isChunkLoaded(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `boolean`

### public boolean initVehicleStorySpawner(Zone zone,
IsoChunk chunk,
boolean debug)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `boolean` `debug`

**Returns:** `boolean`

### public boolean callVehicleStorySpawner(Zone zone,
IsoChunk chunk,
float additionalRotationRadians)

**Parameters:**
- `Zone` `zone`
- `IsoChunk` `chunk`
- `float` `additionalRotationRadians`

**Returns:** `boolean`

### public void spawnElement(VehicleStorySpawner spawner,
VehicleStorySpawner.Element element)

**Parameters:**
- `VehicleStorySpawner` `spawner`
- `VehicleStorySpawner.Element` `element`

**Returns:** `void`

### public BaseVehicle[] addSmashedOverlay(BaseVehicle v1,
BaseVehicle v2,
int xOffset,
int yOffset,
boolean horizontalZone,
boolean addBlood)

**Parameters:**
- `BaseVehicle` `v1`
- `BaseVehicle` `v2`
- `int` `xOffset`
- `int` `yOffset`
- `boolean` `horizontalZone`
- `boolean` `addBlood`

**Returns:** `BaseVehicle[]`

### public int getChance()

**Returns:** `int`

### public void setChance(int chance)

**Parameters:**
- `int` `chance`

**Returns:** `void`

### public int getMinimumDays()

**Returns:** `int`

### public void setMinimumDays(int minimumDays)

**Parameters:**
- `int` `minimumDays`

**Returns:** `void`

### public void registerCustomOutfits()

**Returns:** `void`

### public static IsoGridSquare getRandomFreeUnoccupiedSquare(RandomizedVehicleStoryBase rvs,
Zone zone,
IsoGridSquare sq1)

**Parameters:**
- `RandomizedVehicleStoryBase` `rvs`
- `Zone` `zone`
- `IsoGridSquare` `sq1`

**Returns:** `IsoGridSquare`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedVehicleStory\RandomizedVehicleStoryBase.html`*
