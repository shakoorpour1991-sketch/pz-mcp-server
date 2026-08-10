---
title: zombie.iso.IsoChunkMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoChunkMap

`public final class IsoChunkMap extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoChunkMap

## Fields

### public static final int LEVELS

### public static final int GROUND_LEVEL

### public static final int TOP_LEVEL

### public static final int BOTTOM_LEVEL

### public static final int OLD_CHUNKS_PER_WIDTH

### public static final int CHUNKS_PER_WIDTH

### public static final int CHUNK_SIZE_IN_SQUARES

### public static final HashMap<Integer,IsoChunk> SharedChunks

### public static int mpWorldXa

### public static int mpWorldYa

### public static int mpWorldZa

### public static int worldXa

### public static int worldYa

### public static int worldZa

### public static final int[] SWorldX

### public static final int[] SWorldY

### public static final ConcurrentLinkedQueue<IsoChunk> chunkStore

### public static final ReentrantLock bSettingChunk

### public static int chunkGridWidth

### public static int chunkWidthInTiles

### public int playerId

### public boolean ignore

### public int worldX

### public int worldY

### public final ArrayList<String> filenameServerRequests

### public int maxHeight

### public int minHeight

### public static final PerformanceProfileProbe ppp_update

## Constructors

### public IsoChunkMap(IsoCell cell)

**Parameters:**
- `IsoCell` `cell`

## Methods

### public static void CalcChunkWidth()

**Returns:** `void`

### public static void setWorldStartPos(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void Dispose()

**Returns:** `void`

### public void setInitialPos(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `void`

### public void processAllLoadGridSquare()

**Returns:** `void`

### public void update()

**Returns:** `void`

### public void checkIntegrity()

**Returns:** `void`

### public void checkIntegrityThread()

**Returns:** `void`

### public void LoadChunk(int wx,
int wy,
int x,
int y)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `x`
- `int` `y`

**Returns:** `void`

### public IsoChunk LoadChunkForLater(int wx,
int wy,
int x,
int y)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `x`
- `int` `y`

**Returns:** `IsoChunk`

### public IsoChunk getChunkForGridSquare(int worldSquareX,
int worldSquareY)

**Parameters:**
- `int` `worldSquareX`
- `int` `worldSquareY`

**Returns:** `IsoChunk`

### public IsoChunk getChunkCurrent(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `IsoChunk`

### public void setGridSquare(IsoGridSquare square,
int worldSquareX,
int worldSquareY,
int worldSquareZ)

**Parameters:**
- `IsoGridSquare` `square`
- `int` `worldSquareX`
- `int` `worldSquareY`
- `int` `worldSquareZ`

**Returns:** `void`

### public IsoGridSquare getGridSquare(int worldSquareX,
int worldSquareY,
int worldSquareZ)

**Parameters:**
- `int` `worldSquareX`
- `int` `worldSquareY`
- `int` `worldSquareZ`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getGridSquareDirect(int chunkMapSquareX,
int chunkMapSquareY,
int worldSquareZ)

**Parameters:**
- `int` `chunkMapSquareX`
- `int` `chunkMapSquareY`
- `int` `worldSquareZ`

**Returns:** `IsoGridSquare`

### public IsoChunk getChunk(int chunkMapChunkX,
int chunkMapChunkY)

**Parameters:**
- `int` `chunkMapChunkX`
- `int` `chunkMapChunkY`

**Returns:** `IsoChunk`

### public IsoChunk[] getChunks()

**Returns:** `IsoChunk[]`

### public boolean setChunkDirect(IsoChunk c,
boolean bRequireLock)

**Parameters:**
- `IsoChunk` `c`
- `boolean` `bRequireLock`

**Returns:** `boolean`

### public void drawDebugChunkMap()

**Returns:** `void`

### public void SwapChunkBuffers()

**Returns:** `void`

### public int getWorldXMin()

**Returns:** `int`

### public int getWorldYMin()

**Returns:** `int`

### public void ProcessChunkPos(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `void`

### public void calculateZExtentsForChunkMap()

**Returns:** `void`

### public IsoRoom getRoom(int iD)

**Parameters:**
- `int` `iD`

**Returns:** `IsoRoom`

### public int getWidthInTiles()

**Returns:** `int`

### public int getWorldXMinTiles()

**Returns:** `int`

### public int getWorldYMinTiles()

**Returns:** `int`

### public int getWorldXMaxTiles()

**Returns:** `int`

### public int getWorldYMaxTiles()

**Returns:** `int`

### public void Save()

**Returns:** `void`

### public void renderBloodForChunks(int zza)

**Parameters:**
- `int` `zza`

**Returns:** `void`

### public void copy(IsoChunkMap from)

**Parameters:**
- `IsoChunkMap` `from`

**Returns:** `void`

### public void Unload()

**Returns:** `void`

### public static boolean isGridSquareOutOfRangeZ(int tileZ)

**Parameters:**
- `int` `tileZ`

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoChunkMap.html`*
