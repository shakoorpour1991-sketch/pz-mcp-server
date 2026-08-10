---
title: zombie.MapCollisionData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie
---

# zombie.MapCollisionData

`public final class MapCollisionData extends Object`

**Kind:** class · **Package:** zombie

## Inheritance
- java.lang.Object
- zombie.MapCollisionData

## Fields

### public static final MapCollisionData instance

### public static final byte BIT_SOLID

### public static final byte BIT_WALLN

### public static final byte BIT_WALLW

### public static final byte BIT_WATER

### public static final byte BIT_ROOM

### public final Object renderLock

## Constructors

### public MapCollisionData()

## Methods

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public void start()

**Returns:** `void`

### public void startGame()

**Returns:** `void`

### public void updateMain()

**Returns:** `void`

### public boolean hasDataForThread()

**Returns:** `boolean`

### public void updateGameState()

**Returns:** `void`

### public void notifyThread()

**Returns:** `void`

### public void addChunkToWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void removeChunkFromWorld(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void squareChanged(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public void save()

**Returns:** `void`

### public void stop()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\MapCollisionData.html`*
