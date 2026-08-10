---
title: zombie.characterTextures.CharacterSmartTexture
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characterTextures
---

# zombie.characterTextures.CharacterSmartTexture

`public final class CharacterSmartTexture extends SmartTexture`

**Kind:** class · **Package:** zombie.characterTextures

## Inheritance
- java.lang.Object
- zombie.asset.Asset
- zombie.core.textures.Texture
- zombie.core.textures.SmartTexture
- zombie.characterTextures.CharacterSmartTexture

## Description

Created by LEMMY on 6/30/2016.

## Fields

### public static final int BODY_CATEGORY

### public static final int CLOTHING_BOTTOM_CATEGORY

### public static final int CLOTHING_TOP_CATEGORY

### public static final int CLOTHING_ITEM_CATEGORY

### public static final int DECAL_OVERLAY_CATEGORY

### public static final int DIRT_OVERLAY_CATEGORY

### public static final String[] MaskFiles

### public static final String[] BasicPatchesMaskFiles

### public static final String[] DenimPatchesMaskFiles

### public static final String[] LeatherPatchesMaskFiles

## Constructors

### public CharacterSmartTexture()

## Methods

### public void setBlood(BloodBodyPartType bodyPart,
float intensity)

**Parameters:**
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`

**Returns:** `void`

### public void setDirt(BloodBodyPartType bodyPart,
float intensity)

**Parameters:**
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`

**Returns:** `void`

### public void removeBlood()

**Returns:** `void`

### public void removeBlood(BloodBodyPartType bodyPart)

**Parameters:**
- `BloodBodyPartType` `bodyPart`

**Returns:** `void`

### public float addBlood(BloodBodyPartType bodyPart,
float intensity,
IsoGameCharacter chr)

**Parameters:**
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public float addDirt(BloodBodyPartType bodyPart,
float intensity,
IsoGameCharacter chr)

**Parameters:**
- `BloodBodyPartType` `bodyPart`
- `float` `intensity`
- `IsoGameCharacter` `chr`

**Returns:** `float`

### public void addShirtDecal(String dec)

**Parameters:**
- `String` `dec`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characterTextures\CharacterSmartTexture.html`*
