---
title: zombie.iso.IsoChunkLevel
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoChunkLevel

`public final class IsoChunkLevel extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoChunkLevel

## Fields

### public static final byte CLDSF_NONE

### public static final byte CLDSF_SHOULD_RENDER

### public static final byte CLDSF_RAIN_RANDOM_XY

### public IsoChunk chunk

### public int level

### public final IsoGridSquare[] squares

### public final boolean[] lightCheck

### public boolean physicsCheck

### public final byte[] rainFlags

### public final float[] rainSplashFrame

### public boolean raining

### public int rainSplashFrameNum

### public CorpseCount.ChunkLevelData corpseCount

### public FMODAmbientWallLevelData fmodAmbientWallLevelData

### public NearestWalls.ChunkLevelData nearestWalls

### public NearestWalls.ChunkLevelData nearestExteriorWalls

## Constructors

### public IsoChunkLevel()

## Methods

### public IsoChunkLevel init(IsoChunk chunk,
int level)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `level`

**Returns:** `IsoChunkLevel`

### public IsoChunk getChunk()

**Returns:** `IsoChunk`

### public int getLevel()

**Returns:** `int`

### public void updateRainSplashes()

**Returns:** `void`

### public void renderRainSplashes(int playerIndex)

**Parameters:**
- `int` `playerIndex`

**Returns:** `void`

### public void addObjectPoweredByGenerator(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public void removeObjectPoweredByGenerator(IsoObject object)

**Parameters:**
- `IsoObject` `object`

**Returns:** `void`

### public int countObjectsPoweredByGenerator(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public void appendObjectsPoweredByGenerator(List<IsoObject> objects)

**Parameters:**
- `List<IsoObject>` `objects`

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public static IsoChunkLevel alloc()

**Returns:** `IsoChunkLevel`

### public void release()

**Returns:** `void`

### public void checkPhysicsLaterForActiveRagdoll()

**Returns:** `void`

### public boolean containsIsoGridSquare(IsoGridSquare isoGridSquare)

**Parameters:**
- `IsoGridSquare` `isoGridSquare`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoChunkLevel.html`*
