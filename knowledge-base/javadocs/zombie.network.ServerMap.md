---
title: zombie.network.ServerMap
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.network
---

# zombie.network.ServerMap

`public class ServerMap extends Object`

**Kind:** class · **Package:** zombie.network

## Inheritance
- java.lang.Object
- zombie.network.ServerMap

## Fields

### public boolean updateLosThisFrame

### public static final OnceEvery LOS_TICK

### public static final OnceEvery TIME_TICK

### public static final int CellSize

### public static final int ChunksPerCellWidth

### public long lastSaved

### public final IsoObjectID<IsoZombie> zombieMap

### public boolean queuedSaveAll

### public boolean queuedQuit

### public static ServerMap instance

### public ServerMap.ServerCell[] cellMap

### public ArrayList<ServerMap.ServerCell> loadedCells

### public ArrayList<ServerMap.ServerCell> releventNow

## Constructors

### public ServerMap()

## Methods

### public short getUniqueZombieId()

**Returns:** `short`

### public void SaveAll()

**Returns:** `void`

### public void QueueSaveAll()

**Returns:** `void`

### public void QueueQuit()

**Returns:** `void`

### public int toServerCellX(int x)

**Parameters:**
- `int` `x`

**Returns:** `int`

### public int toServerCellY(int y)

**Parameters:**
- `int` `y`

**Returns:** `int`

### public int toWorldCellX(int x)

**Parameters:**
- `int` `x`

**Returns:** `int`

### public int toWorldCellY(int y)

**Parameters:**
- `int` `y`

**Returns:** `int`

### public int getMaxX()

**Returns:** `int`

### public int getMaxY()

**Returns:** `int`

### public int getMinX()

**Returns:** `int`

### public int getMinY()

**Returns:** `int`

### public void init(IsoMetaGrid metaGrid)

**Parameters:**
- `IsoMetaGrid` `metaGrid`

**Returns:** `void`

### public ServerMap.ServerCell getCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `ServerMap.ServerCell`

### public boolean isInvalidCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `boolean`

### public void loadOrKeepRelevent(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public void characterIn(IsoPlayer p)

**Parameters:**
- `IsoPlayer` `p`

**Returns:** `void`

### public void characterIn(int wx,
int wy,
int chunkGridWidth)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `chunkGridWidth`

**Returns:** `void`

### public void importantAreaIn(int sx,
int sy)

**Parameters:**
- `int` `sx`
- `int` `sy`

**Returns:** `void`

### public void QueuedQuit()

**Returns:** `void`

### public void QueuedSaveAll(boolean quit)

**Parameters:**
- `boolean` `quit`

**Returns:** `void`

### public void preupdate()

**Returns:** `void`

### public void postupdate()

**Returns:** `void`

### public void physicsCheck(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `void`

### public int worldSquareToServerCellXY(int worldSquareXY)

**Parameters:**
- `int` `worldSquareXY`

**Returns:** `int`

### public int worldChunkToServerCellXY(int worldChunkXY)

**Parameters:**
- `int` `worldChunkXY`

**Returns:** `int`

### public static IsoGridSquare getGridSquare(Vector3 v)

**Parameters:**
- `Vector3` `v`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getGridSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoGridSquare`

### public void setGridSquare(int x,
int y,
int z,
IsoGridSquare sq)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `IsoGridSquare` `sq`

**Returns:** `void`

### public IsoChunk getChunk(int wx,
int wy)

**Parameters:**
- `int` `wx`
- `int` `wy`

**Returns:** `IsoChunk`

### public void setSoftResetChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void clearSoftResetChunk(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\network\ServerMap.html`*
