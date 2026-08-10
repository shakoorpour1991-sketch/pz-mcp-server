---
title: zombie.iso.CorpseCount
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.CorpseCount

`public final class CorpseCount extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.CorpseCount

## Fields

### public static final CorpseCount instance

### public static int maxCorpseCount

## Constructors

### public CorpseCount()

## Methods

### public void chunkLoaded(IsoChunk chunk)

**Parameters:**
- `IsoChunk` `chunk`

**Returns:** `void`

### public void corpseAdded(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public void corpseRemoved(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `void`

### public int getCorpseCount(IsoGameCharacter chr)

**Parameters:**
- `IsoGameCharacter` `chr`

**Returns:** `int`

### public int getCorpseCount(int wx,
int wy,
int z,
IsoBuilding building)

**Parameters:**
- `int` `wx`
- `int` `wy`
- `int` `z`
- `IsoBuilding` `building`

**Returns:** `int`

### public boolean hasBuildingCorpseCount(IsoChunk chunk,
int z,
IsoBuilding building)

**Parameters:**
- `IsoChunk` `chunk`
- `int` `z`
- `IsoBuilding` `building`

**Returns:** `boolean`

### public void reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\CorpseCount.html`*
