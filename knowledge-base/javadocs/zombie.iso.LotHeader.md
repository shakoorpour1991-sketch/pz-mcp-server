---
title: zombie.iso.LotHeader
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.LotHeader

`public final class LotHeader extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.LotHeader

## Fields

### public static final int VERSION0

### public static final int VERSION1

### public static final int VERSION_LATEST

### public static final byte[] LOTHEADER_MAGIC

### public static final byte[] LOTPACK_MAGIC

### public final int cellX

### public final int cellY

### public int width

### public int height

### public int minLevel

### public int maxLevel

### public int version

### public boolean fixed2x

### public final ArrayList<String> tilesUsed

### public MapFiles mapFiles

### public String fileName

### public String absoluteFilePath

### public final boolean[] adjacentCells

## Constructors

### public LotHeader(int cellX,
int cellY)

**Parameters:**
- `int` `cellX`
- `int` `cellY`

## Methods

### public int getHeight()

**Returns:** `int`

### public int getWidth()

**Returns:** `int`

### public int getMinLevel()

**Returns:** `int`

### public int getMaxLevel()

**Returns:** `int`

### public int getNumLevels()

**Returns:** `int`

### public byte[] getZombieIntensity()

**Returns:** `byte[]`

### public byte getZombieIntensity(int i)

**Parameters:**
- `int` `i`

**Returns:** `byte`

### public void setZombieIntensity(int i,
byte zombieIntensity)

**Parameters:**
- `int` `i`
- `byte` `zombieIntensity`

**Returns:** `void`

### public static int getZombieIntensityForChunk(LotHeader lotHeader,
int chunkX,
int chunkY)

**Parameters:**
- `LotHeader` `lotHeader`
- `int` `chunkX`
- `int` `chunkY`

**Returns:** `int`

### public void Dispose()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\LotHeader.html`*
