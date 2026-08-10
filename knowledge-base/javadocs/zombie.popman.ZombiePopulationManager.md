---
title: zombie.popman.ZombiePopulationManager
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.popman
---

# zombie.popman.ZombiePopulationManager

`public final class ZombiePopulationManager extends Object`

**Kind:** class · **Package:** zombie.popman

## Inheritance
- java.lang.Object
- zombie.popman.ZombiePopulationManager

## Fields

### public static final ZombiePopulationManager instance

### public static final int INVALID_PATH_XY

### public static boolean debugLoggingEnabled

### public static final ReentrantLock saveLock

### public float[] radarXy

### public int radarCount

### public boolean radarRenderFlag

### public boolean radarRequestFlag

## Methods

### public static void init()

**Returns:** `void`

### public void requestSaveCell(int popmanCellX,
int popmanCellY)

**Parameters:**
- `int` `popmanCellX`
- `int` `popmanCellY`

**Returns:** `void`

### public void processPendingSaveCells()

**Returns:** `void`

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public void onConfigReloaded()

**Returns:** `void`

### public void registerSpawnOrigin(int x,
int y,
int width,
int height,
se.krka.kahlua.vm.KahluaTable properties)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `width`
- `int` `height`
- `se.krka.kahlua.vm.KahluaTable` `properties`

**Returns:** `void`

### public void playerSpawnedAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void setZombiesMinPerChunk(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void setZombiesMaxPerChunk(float f)

**Parameters:**
- `float` `f`

**Returns:** `void`

### public void addChunkToWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void removeChunkFromWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void virtualizeZombie(IsoZombie realZombie)

**Parameters:**
- `IsoZombie` `realZombie`

**Returns:** `void`

### public void setAggroTarget(int id,
int x,
int y)

**Parameters:**
- `int` `id`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void createHordeFromTo(int spawnX,
int spawnY,
int targetX,
int targetY,
int count)

**Parameters:**
- `int` `spawnX`
- `int` `spawnY`
- `int` `targetX`
- `int` `targetY`
- `int` `count`

**Returns:** `void`

### public void createHordeInAreaTo(int spawnX,
int spawnY,
int spawnW,
int spawnH,
int targetX,
int targetY,
int count)

**Parameters:**
- `int` `spawnX`
- `int` `spawnY`
- `int` `spawnW`
- `int` `spawnH`
- `int` `targetX`
- `int` `targetY`
- `int` `count`

**Returns:** `void`

### public boolean readyToPause()

**Returns:** `boolean`

### public void addWorldSound(WorldSoundManager.WorldSound sound,
boolean doSend)

**Parameters:**
- `WorldSoundManager.WorldSound` `sound`
- `boolean` `doSend`

**Returns:** `void`

### public void updateMain()

**Returns:** `void`

### public void sitAgainstWall(IsoZombie zombie,
IsoGridSquare square)

**Parameters:**
- `IsoZombie` `zombie`
- `IsoGridSquare` `square`

**Returns:** `void`

### public void updateThread()

**Returns:** `void`

### public boolean shouldWait()

**Returns:** `boolean`

### public void updateLoadedAreas()

**Returns:** `void`

### public void dbgSpawnTimeToZero(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void dbgClearZombies(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void dbgSpawnNow(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `void`

### public void beginSaveRealZombies()

**Returns:** `void`

### public void endSaveRealZombies()

**Returns:** `void`

### public void save()

**Returns:** `void`

### public void stop()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\popman\ZombiePopulationManager.html`*
