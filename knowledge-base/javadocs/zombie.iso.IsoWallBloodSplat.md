---
title: zombie.iso.IsoWallBloodSplat
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.iso
---

# zombie.iso.IsoWallBloodSplat

`public final class IsoWallBloodSplat extends Object`

**Kind:** class · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- zombie.iso.IsoWallBloodSplat

## Fields

### public float worldAge

### public IsoSprite sprite

## Constructors

### public IsoWallBloodSplat()

### public IsoWallBloodSplat(float worldAge,
IsoSprite sprite)

**Parameters:**
- `float` `worldAge`
- `IsoSprite` `sprite`

## Methods

### public void render(IsoObject obj,
IsoDirections dir,
float x,
float y,
float z,
ColorInfo objectColor,
Consumer<TextureDraw> texdModifier)

**Parameters:**
- `IsoObject` `obj`
- `IsoDirections` `dir`
- `float` `x`
- `float` `y`
- `float` `z`
- `ColorInfo` `objectColor`
- `Consumer<TextureDraw>` `texdModifier`

**Returns:** `void`

### public void save(ByteBuffer output)

**Parameters:**
- `ByteBuffer` `output`

**Returns:** `void`

### public void load(ByteBuffer input,
int worldVersion)
throws IOException

**Parameters:**
- `ByteBuffer` `input`
- `int` `worldVersion`

**Returns:** `void`

### public boolean isNorthSprite()

**Returns:** `boolean`

### public boolean isWestSprite()

**Returns:** `boolean`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoWallBloodSplat.html`*
