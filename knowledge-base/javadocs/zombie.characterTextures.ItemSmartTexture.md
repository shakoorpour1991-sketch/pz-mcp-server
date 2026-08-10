---
title: zombie.characterTextures.ItemSmartTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characterTextures
---

# zombie.characterTextures.ItemSmartTexture

`public final class ItemSmartTexture extends SmartTexture`

**Kind:** class · **Package:** zombie.characterTextures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.Texture
- zombie.core.textures.SmartTexture
- zombie.characterTextures.ItemSmartTexture

## Fields

### public static final int DecalOverlayCategory

### public static final int FluidOverlayCategory

## Constructors

### public ItemSmartTexture(String tex)

**Parameters:**
- `String` `tex`

### public ItemSmartTexture(String tex,
float hue)

**Parameters:**
- `String` `tex`
- `float` `hue`

## Methods

### public void setDenimPatches(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public void setLeatherPatches(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public void setBasicPatches(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public void setFluid(String tex,
String mask,
float intensity,
int category,
Color tint)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`
- `Color` `tint`

**Returns:** `void`

### public void setTintMask(String tex,
String mask,
int category,
Color tint)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `int` `category`
- `Color` `tint`

**Returns:** `void`

### public void setBlood(String tex,
BloodBodyPartType bodyPart,
float intensity)

**Parameters:**
- `String` `tex`
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`

**Returns:** `void`

### public void setBlood(String tex,
String mask,
float intensity,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`

**Returns:** `void`

### public float addBlood(String tex,
BloodBodyPartType bodyPart,
float intensity)

**Parameters:**
- `String` `tex`
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`

**Returns:** `float`

### public float addDirt(String tex,
BloodBodyPartType bodyPart,
float intensity)

**Parameters:**
- `String` `tex`
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`

**Returns:** `float`

### public float addBlood(String tex,
String mask,
float intensity,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`

**Returns:** `float`

### public float addDirt(String tex,
String mask,
float intensity,
int category)

**Parameters:**
- `String` `tex`
- `String` `mask`
- `float` `intensity`
- `int` `category`

**Returns:** `float`

### public void removeBlood()

**Returns:** `void`

### public void removeDirt()

**Returns:** `void`

### public void removeBlood(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public void removeDirt(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public String getTexName()

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characterTextures\ItemSmartTexture.html`*
