---
title: zombie.erosion.obj.ErosionObjSprites
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.erosion.obj
---

# zombie.erosion.obj.ErosionObjSprites

`public final class ErosionObjSprites extends Object`

**Kind:** class · **Package:** zombie.erosion.obj

## Inheritance
- java.lang.Object
- zombie.erosion.obj.ErosionObjSprites

## Fields

### public static final int SECTION_BASE

### public static final int SECTION_SNOW

### public static final int SECTION_FLOWER

### public static final int SECTION_CHILD

### public static final int NUM_SECTIONS

### public String name

### public int stages

### public boolean hasSnow

### public boolean hasFlower

### public boolean hasChildSprite

### public boolean noSeasonBase

### public int cycleTime

## Constructors

### public ErosionObjSprites(int stages,
String name,
boolean hasSnow,
boolean hasFlower,
boolean hasChildsprite)

**Parameters:**
- `int` `stages`
- `String` `name`
- `boolean` `hasSnow`
- `boolean` `hasFlower`
- `boolean` `hasChildsprite`

## Methods

### public String getBase(int stage,
int season)

**Parameters:**
- `int` `stage`
- `int` `season`

**Returns:** `String`

### public String getFlower(int stage)

**Parameters:**
- `int` `stage`

**Returns:** `String`

### public String getChildSprite(int stage,
int season)

**Parameters:**
- `int` `stage`
- `int` `season`

**Returns:** `String`

### public ErosionObjSprites.Entry getEntry(String sprite)

**Parameters:**
- `String` `sprite`

**Returns:** `ErosionObjSprites.Entry`

### public void setBase(int stage,
String sprite,
int season)

**Parameters:**
- `int` `stage`
- `String` `sprite`
- `int` `season`

**Returns:** `void`

### public void setBase(int stage,
ArrayList<String> sprites,
int season)

**Parameters:**
- `int` `stage`
- `ArrayList<String>` `sprites`
- `int` `season`

**Returns:** `void`

### public void setFlower(int stage,
String sprite)

**Parameters:**
- `int` `stage`
- `String` `sprite`

**Returns:** `void`

### public void setFlower(int stage,
ArrayList<String> sprites)

**Parameters:**
- `int` `stage`
- `ArrayList<String>` `sprites`

**Returns:** `void`

### public void setChildSprite(int stage,
String sprite,
int season)

**Parameters:**
- `int` `stage`
- `String` `sprite`
- `int` `season`

**Returns:** `void`

### public void setChildSprite(int stage,
ArrayList<String> sprites,
int season)

**Parameters:**
- `int` `stage`
- `ArrayList<String>` `sprites`
- `int` `season`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\erosion\obj\ErosionObjSprites.html`*
