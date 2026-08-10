---
title: zombie.audio.FMODAmbientWallLevelData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.audio
---

# zombie.audio.FMODAmbientWallLevelData

`public final class FMODAmbientWallLevelData extends PooledObject`

**Kind:** class · **Package:** zombie.audio

## Inheritance
- java.lang.Object
- zombie.util.PooledObject
- zombie.audio.FMODAmbientWallLevelData

## Fields

### public IsoChunkLevel chunkLevel

### public final ArrayList<FMODAmbientWallLevelData.FMODAmbientWall> walls

### public boolean dirty

## Constructors

### public FMODAmbientWallLevelData()

## Methods

### public FMODAmbientWallLevelData init(IsoChunkLevel chunkLevel)

**Parameters:**
- `IsoChunkLevel` `chunkLevel`

**Returns:** `FMODAmbientWallLevelData`

### public void checkDirty()

**Returns:** `void`

### public static boolean passesSoundNorth(IsoGridSquare square,
boolean bDoorAndWindowRattlesWhenClosed)

**Parameters:**
- `IsoGridSquare` `square`
- `boolean` `bDoorAndWindowRattlesWhenClosed`

**Returns:** `boolean`

### public static boolean passesSoundWest(IsoGridSquare square,
boolean bDoorAndWindowRattlesWhenClosed)

**Parameters:**
- `IsoGridSquare` `square`
- `boolean` `bDoorAndWindowRattlesWhenClosed`

**Returns:** `boolean`

### public static boolean isOutside(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `boolean`

### public static FMODAmbientWallLevelData alloc()

**Returns:** `FMODAmbientWallLevelData`

### public void onReleased()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\audio\FMODAmbientWallLevelData.html`*
