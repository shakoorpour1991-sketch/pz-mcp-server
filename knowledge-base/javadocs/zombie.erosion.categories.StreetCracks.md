---
title: zombie.erosion.categories.StreetCracks
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion.categories
---

# zombie.erosion.categories.StreetCracks

`public final class StreetCracks extends ErosionCategory`

**Kind:** class · **Package:** zombie.erosion.categories

## Inheritance
- java.lang.Object
- zombie.erosion.categories.ErosionCategory
- zombie.erosion.categories.StreetCracks

## Constructors

### public StreetCracks()

## Methods

### public boolean replaceExistingObject(IsoGridSquare square,
ErosionData.Square sqErosionData,
ErosionData.Chunk chunkData,
boolean isExterior,
boolean hasWall)

**Parameters:**
- `IsoGridSquare` `square`
- `ErosionData.Square` `sqErosionData`
- `ErosionData.Chunk` `chunkData`
- `boolean` `isExterior`
- `boolean` `hasWall`

**Returns:** `boolean`

### public boolean validateSpawn(IsoGridSquare square,
ErosionData.Square sqErosionData,
ErosionData.Chunk chunkData,
boolean isExterior,
boolean hasWall,
boolean isRespawn)

**Parameters:**
- `IsoGridSquare` `square`
- `ErosionData.Square` `sqErosionData`
- `ErosionData.Chunk` `chunkData`
- `boolean` `isExterior`
- `boolean` `hasWall`
- `boolean` `isRespawn`

**Returns:** `boolean`

### public void update(IsoGridSquare square,
ErosionData.Square sqErosionData,
ErosionCategory.Data data,
ErosionData.Chunk chunkData,
int eTick)

**Parameters:**
- `IsoGridSquare` `square`
- `ErosionData.Square` `sqErosionData`
- `ErosionCategory.Data` `data`
- `ErosionData.Chunk` `chunkData`
- `int` `eTick`

**Returns:** `void`

### public void init()

**Returns:** `void`

### public void getObjectNames(ArrayList<String> list)

**Parameters:**
- `ArrayList<String>` `list`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\categories\StreetCracks.html`*
