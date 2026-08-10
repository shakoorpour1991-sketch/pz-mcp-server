---
title: zombie.iso.areas.isoregion.IsoRegions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion
---

# zombie.iso.areas.isoregion.IsoRegions

`public final class IsoRegions extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.IsoRegions

## Description

TurboTuTone.

## Fields

### public static final int SINGLE_CHUNK_PACKET_SIZE

### public static final int CHUNKS_DATA_PACKET_SIZE

### public static boolean printD

### public static final int CELL_DIM

### public static final int CELL_CHUNK_DIM

### public static final int CHUNK_DIM

### public static final int CHUNK_MAX_Z

### public static final byte BIT_EMPTY

### public static final byte BIT_WALL_N

### public static final byte BIT_WALL_W

### public static final byte BIT_PATH_WALL_N

### public static final byte BIT_PATH_WALL_W

### public static final byte BIT_HAS_FLOOR

### public static final byte BIT_STAIRCASE

### public static final byte BIT_HAS_ROOF

### public static final byte DIR_NONE

### public static final byte DIR_N

### public static final byte DIR_W

### public static final byte DIR_2D_NW

### public static final byte DIR_S

### public static final byte DIR_E

### public static final byte DIR_2D_MAX

### public static final byte DIR_TOP

### public static final byte DIR_BOT

### public static final byte DIR_MAX

### public static final String FILE_PRE

### public static final String FILE_SEP

### public static final String FILE_EXT

### public static final String FILE_DIR

## Constructors

### public IsoRegions()

## Methods

### public static File getHeaderFile()

**Returns:** `File`

### public static File getDirectory()

**Returns:** `File`

### public static File getChunkFile(int chunkX,
int chunkY)

**Parameters:**
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `File`

### public static byte GetOppositeDir(byte dir)

**Parameters:**
- `byte` `dir`

**Returns:** `byte`

### public static void setDebugLoadAllChunks(boolean b)

**Parameters:**
- `boolean` `b`

**Returns:** `void`

### public static boolean isDebugLoadAllChunks()

**Returns:** `boolean`

### public static int hash(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `int`

### public static void init()

**Returns:** `void`

### public static IsoRegionsLogger getLogger()

**Returns:** `IsoRegionsLogger`

### public static void log(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public static void log(String str,
Color col)

**Parameters:**
- `String` `str`
- `Color` `col`

**Returns:** `void`

### public static void warn(String str)

**Parameters:**
- `String` `str`

**Returns:** `void`

### public static void reset()

**Returns:** `void`

### public static void receiveServerUpdatePacket(ByteBufferReader input)

**Parameters:**
- `ByteBufferReader` `input`

**Returns:** `void`

### public static void receiveClientRequestFullDataChunks(ByteBufferReader input,
UdpConnection conn)

**Parameters:**
- `ByteBufferReader` `input`
- `UdpConnection` `conn`

**Returns:** `void`

### public static void update()

**Returns:** `void`

### public static byte getSquareFlags(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `byte`

### public static IWorldRegion getIsoWorldRegion(int x,
int y,
int z)

Returns a IWorldRegion for the square.
Note: Returned objects from this function should not be retained as the DataRoot may get swapped.
Note: The IWorldRegion does get cached in IsoGridSquare for optimizing purposes but this gets handled in 'clientResetCachedRegionReferences()'

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IWorldRegion`

### public static List<IsoWorldRegion> getIsoWorldRegionsInCell(int cellX,
int cellY,
ArrayList<IsoWorldRegion> worldRegions)

**Parameters:**
- `int` `cellX`
- `int` `cellY`
- `ArrayList<IsoWorldRegion>` `worldRegions`

**Returns:** `List<IsoWorldRegion>`

### public static DataChunk getDataChunk(int chunkx,
int chunky)

Returns a DataChunk for the square.
Note: Returned objects from this function should not be retained as the DataRoot may get swapped.

**Parameters:**
- `int` `chunkx`
- `int` `chunky`

**Returns:** `DataChunk`

### public static IChunkRegion getChunkRegion(int x,
int y,
int z)

Returns a IChunkRegion for the square.
Note: Returned objects from this function should not be retained as the DataRoot may get swapped.

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IChunkRegion`

### public static void ResetAllDataDebug()

**Returns:** `void`

### public static void setPreviousFlags(IsoGridSquare gs)

Needs to be called before a player manipulates the grid.
Records bitFlags for the state of the square that are compared to bitFlags for the state of the square after manipulation to detect relevant changes.

**Parameters:**
- `IsoGridSquare` `gs`

**Returns:** `void`

### public static void squareChanged(IsoGridSquare gs)

Called after the grid has been manipulated by a player.
NOTE: setPreviousFlags needs to be called prior to the grid being manipulated by a player.

**Parameters:**
- `IsoGridSquare` `gs`

**Returns:** `void`

### public static void squareChanged(IsoGridSquare gs,
boolean isRemoval)

Called after the grid has been manipulated by a player.
NOTE: setPreviousFlags needs to be called prior to the grid being manipulated by a player.

**Parameters:**
- `IsoGridSquare` `gs`
- `boolean` `isRemoval`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\IsoRegions.html`*
