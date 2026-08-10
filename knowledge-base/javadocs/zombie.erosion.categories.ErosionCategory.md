---
title: zombie.erosion.categories.ErosionCategory
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion.categories
---

# zombie.erosion.categories.ErosionCategory

`public abstract class ErosionCategory extends Object`

**Kind:** class · **Package:** zombie.erosion.categories

## Inheritance
- java.lang.Object
- zombie.erosion.categories.ErosionCategory

## Fields

### public int id

### public ErosionRegions.Region region

## Constructors

### public ErosionCategory()

## Methods

### public void updateObj(ErosionData.Square sqErosionData,
ErosionCategory.Data sqCategoryData,
IsoGridSquare square,
ErosionObj gameObj,
boolean tree,
int stage,
int dispSeason,
boolean bloom)

**Parameters:**
- `ErosionData.Square` `sqErosionData`
- `ErosionCategory.Data` `sqCategoryData`
- `IsoGridSquare` `square`
- `ErosionObj` `gameObj`
- `boolean` `tree`
- `int` `stage`
- `int` `dispSeason`
- `boolean` `bloom`

**Returns:** `void`

### public abstract void init()

**Returns:** `void`

### public abstract boolean replaceExistingObject(IsoGridSquare var1,
ErosionData.Square var2,
ErosionData.Chunk var3,
boolean var4,
boolean var5)

**Parameters:**
- `IsoGridSquare` `var1`
- `ErosionData.Square` `var2`
- `ErosionData.Chunk` `var3`
- `boolean` `var4`
- `boolean` `var5`

**Returns:** `boolean`

### public abstract boolean validateSpawn(IsoGridSquare var1,
ErosionData.Square var2,
ErosionData.Chunk var3,
boolean var4,
boolean var5,
boolean var6)

**Parameters:**
- `IsoGridSquare` `var1`
- `ErosionData.Square` `var2`
- `ErosionData.Chunk` `var3`
- `boolean` `var4`
- `boolean` `var5`
- `boolean` `var6`

**Returns:** `boolean`

### public abstract void update(IsoGridSquare var1,
ErosionData.Square var2,
ErosionCategory.Data var3,
ErosionData.Chunk var4,
int var5)

**Parameters:**
- `IsoGridSquare` `var1`
- `ErosionData.Square` `var2`
- `ErosionCategory.Data` `var3`
- `ErosionData.Chunk` `var4`
- `int` `var5`

**Returns:** `void`

### public static ErosionCategory.Data loadCategoryData(ByteBuffer input,
int worldVersion)

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `ErosionCategory.Data`

### public abstract void getObjectNames(ArrayList<String> var1)

**Parameters:**
- `ArrayList<String>` `var1`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\categories\ErosionCategory.html`*
