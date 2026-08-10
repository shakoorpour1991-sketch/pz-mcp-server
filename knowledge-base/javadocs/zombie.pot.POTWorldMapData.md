---
title: zombie.pot.POTWorldMapData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.pot
---

# zombie.pot.POTWorldMapData

`public final class POTWorldMapData extends Object`

**Kind:** class · **Package:** zombie.pot

## Inheritance
- java.lang.Object
- zombie.pot.POTWorldMapData

## Fields

### public final ArrayList<WorldMapCell> cells

### public final HashMap<Integer, WorldMapCell> cellLookup

### public int minX

### public int minY

### public int maxX

### public int maxY

## Constructors

### public POTWorldMapData()

## Methods

### public WorldMapCell getCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `WorldMapCell`

### public void addFeature(WorldMapFeature oldFeature)

**Parameters:**
- `WorldMapFeature` `oldFeature`

**Returns:** `void`

### public void saveBIN(String fileName,
boolean b256)
throws IOException

**Parameters:**
- `String` `fileName`
- `boolean` `b256`

**Returns:** `void`

### public int getWidthInCells()

**Returns:** `int`

### public int getHeightInCells()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pot\POTWorldMapData.html`*
