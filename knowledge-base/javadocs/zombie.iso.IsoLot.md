---
title: zombie.iso.IsoLot
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoLot

`public class IsoLot extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoLot

## Fields

### public static final HashMap<String, LotHeader> InfoHeaders

### public static final ArrayList<String> InfoHeaderNames

### public static final HashMap<String,String> InfoFileNames

### public static final HashMap<String, ChunkGenerationStatus> InfoFileModded

### public static final ArrayList<MapFiles> MapFiles

### public static final ObjectPool<IsoLot> pool

### public int maxLevel

### public int minLevel

### public int wx

### public int wy

### public final int[] offsetInData

### public final gnu.trove.list.array.TIntArrayList data

### public LotHeader info

## Constructors

### public IsoLot()

## Methods

### public static void Dispose()

**Returns:** `void`

### public static String readString(BufferedRandomAccessFile in)
throws EOFException,
IOException

**Parameters:**
- `BufferedRandomAccessFile` `in`

**Returns:** `String`

### public static int readInt(RandomAccessFile in)
throws EOFException,
IOException

**Parameters:**
- `RandomAccessFile` `in`

**Returns:** `int`

### public static int readShort(RandomAccessFile in)
throws EOFException,
IOException

**Parameters:**
- `RandomAccessFile` `in`

**Returns:** `int`

### public static void put(IsoLot lot)

**Parameters:**
- `IsoLot` `lot`

**Returns:** `void`

### public static IsoLot get(MapFiles mapFiles,
int cX,
int cY,
int wX,
int wY,
IsoChunk ch)

**Parameters:**
- `MapFiles` `mapFiles`
- `int` `cX`
- `int` `cY`
- `int` `wX`
- `int` `wY`
- `IsoChunk` `ch`

**Returns:** `IsoLot`

### public static IsoLot get(MapFiles mapFiles,
Integer cX,
Integer cY,
Integer wX,
Integer wY,
IsoChunk ch)

**Parameters:**
- `MapFiles` `mapFiles`
- `Integer` `cX`
- `Integer` `cY`
- `Integer` `wX`
- `Integer` `wY`
- `IsoChunk` `ch`

**Returns:** `IsoLot`

### public void loadNew(int cX,
int cY,
int wX,
int wY,
IsoChunk ch)

**Parameters:**
- `int` `cX`
- `int` `cY`
- `int` `wX`
- `int` `wY`
- `IsoChunk` `ch`

**Returns:** `void`

### public void load(MapFiles mapFiles,
Integer cX,
Integer cY,
Integer wX,
Integer wY,
IsoChunk ch)

**Parameters:**
- `MapFiles` `mapFiles`
- `Integer` `cX`
- `Integer` `cY`
- `Integer` `wX`
- `Integer` `wY`
- `IsoChunk` `ch`

**Returns:** `void`

### public static LotHeader getHeader(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

**Returns:** `LotHeader`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoLot.html`*
