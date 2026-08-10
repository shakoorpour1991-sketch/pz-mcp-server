---
title: zombie.iso.areas.isoregion.data.DataChunk
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso.areas.isoregion.data
---

# zombie.iso.areas.isoregion.data.DataChunk

`public final class DataChunk extends Object`

**Kind:** class · **Package:** zombie.iso.areas.isoregion.data

## Inheritance
- java.lang.Object
- zombie.iso.areas.isoregion.data.DataChunk

## Description

TurboTuTone.

## Methods

### public int getChunkX()

**Returns:** `int`

### public int getChunkY()

**Returns:** `int`

### public int getCellX()

**Returns:** `int`

### public int getCellY()

**Returns:** `int`

### public long getLastUpdateStamp()

**Returns:** `long`

### public void setLastUpdateStamp(long lastUpdateStamp)

**Parameters:**
- `long` `lastUpdateStamp`

**Returns:** `void`

### public void setDirtyAllActive()

**Returns:** `void`

### public byte getSquare(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `byte`

### public byte getSquare(int x,
int y,
int z,
boolean ignoreCoordCheck)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `ignoreCoordCheck`

**Returns:** `byte`

### public void save(ByteBuffer bb)

SAVE/LOAD

**Parameters:**
- `ByteBuffer` `bb`

**Returns:** `void`

### public void load(ByteBuffer bb,
int worldVersion,
boolean readLength)

**Parameters:**
- `ByteBuffer` `bb`
- `int` `worldVersion`
- `boolean` `readLength`

**Returns:** `void`

### public void setSelectedFlags(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public boolean selectedHasFlags(byte flags)

**Parameters:**
- `byte` `flags`

**Returns:** `boolean`

### public byte squareGetFlags(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `byte`

### public IsoChunkRegion getIsoChunkRegion(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoChunkRegion`

### public void setRegion(int x,
int y,
int z,
byte regionIndex)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `byte` `regionIndex`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\areas\isoregion\data\DataChunk.html`*
