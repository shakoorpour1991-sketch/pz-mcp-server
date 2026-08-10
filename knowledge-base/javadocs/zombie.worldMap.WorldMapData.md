---
title: zombie.worldMap.WorldMapData
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.worldMap
---

# zombie.worldMap.WorldMapData

`public final class WorldMapData extends Asset`

**Kind:** class · **Package:** zombie.worldMap

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.worldMap.WorldMapData

## Fields

### public static final HashMap<String, WorldMapData> s_fileNameToData

### public String relativeFileName

### public final ArrayList<WorldMapCell> cells

### public final gnu.trove.map.hash.TLongObjectHashMap<WorldMapCell> cellLookup

### public int minX

### public int minY

### public int maxX

### public int maxY

### public static final AssetType ASSET_TYPE

## Constructors

### public WorldMapData(AssetPath path,
AssetManager manager)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`

### public WorldMapData(AssetPath path,
AssetManager manager,
AssetManager.AssetParams params)

**Parameters:**
- `AssetPath` `path`
- `AssetManager` `manager`
- `AssetManager.AssetParams` `params`

## Methods

### public static WorldMapData getOrCreateData(String fileName)

**Parameters:**
- `String` `fileName`

**Returns:** `WorldMapData`

### public void clearTriangles()

**Returns:** `void`

### public void clear()

**Returns:** `void`

### public int getWidthInCells()

**Returns:** `int`

### public int getHeightInCells()

**Returns:** `int`

### public int getWidthInSquares()

**Returns:** `int`

### public int getHeightInSquares()

**Returns:** `int`

### public void onLoaded()

**Returns:** `void`

### public WorldMapCell getCell(int x,
int y)

**Parameters:**
- `int` `x`
- `int` `y`

**Returns:** `WorldMapCell`

### public void hitTest(float x,
float y,
ArrayList<WorldMapFeature> features)

**Parameters:**
- `float` `x`
- `float` `y`
- `ArrayList<WorldMapFeature>` `features`

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public AssetType getType()

**Returns:** `AssetType`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\worldMap\WorldMapData.html`*
