---
title: zombie.characters.HairOutfitDefinitions
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.HairOutfitDefinitions

`public final class HairOutfitDefinitions extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.HairOutfitDefinitions

## Fields

### public static final HairOutfitDefinitions instance

### public boolean dirty

### public String hairStyle

### public int minWorldAge

### public final ArrayList<HairOutfitDefinitions.HaircutDefinition> haircutDefinition

### public final ArrayList<HairOutfitDefinitions.HaircutOutfitDefinition> outfitDefinition

## Constructors

### public HairOutfitDefinitions()

## Methods

### public void checkDirty()

**Returns:** `void`

### public boolean isHaircutValid(String outfit,
String haircut)

**Parameters:**
- `String` `outfit`
- `String` `haircut`

**Returns:** `boolean`

### public void getValidHairStylesForOutfit(String outfit,
ArrayList<HairStyle> hairStyles,
ArrayList<HairStyle> result)

**Parameters:**
- `String` `outfit`
- `ArrayList<HairStyle>` `hairStyles`
- `ArrayList<HairStyle>` `result`

**Returns:** `void`

### public String getRandomHaircut(String outfit,
ArrayList<HairStyle> hairList)

**Parameters:**
- `String` `outfit`
- `ArrayList<HairStyle>` `hairList`

**Returns:** `String`

### public String getRandomHaircutFromOutfitDef(HairOutfitDefinitions.HaircutOutfitDefinition outfitDef,
String haircut,
ArrayList<HairStyle> validStyles)

**Parameters:**
- `HairOutfitDefinitions.HaircutOutfitDefinition` `outfitDef`
- `String` `haircut`
- `ArrayList<HairStyle>` `validStyles`

**Returns:** `String`

### public String getRandomFemaleHaircut(String outfit,
ArrayList<HairStyle> hairList)

**Parameters:**
- `String` `outfit`
- `ArrayList<HairStyle>` `hairList`

**Returns:** `String`

### public String getRandomMaleHaircut(String outfit,
ArrayList<HairStyle> hairList)

**Parameters:**
- `String` `outfit`
- `ArrayList<HairStyle>` `hairList`

**Returns:** `String`

### public ImmutableColor getRandomHaircutColor(String outfit)

**Parameters:**
- `String` `outfit`

**Returns:** `ImmutableColor`

### public String getRandomBeard(String outfit,
ArrayList<BeardStyle> beardList)

**Parameters:**
- `String` `outfit`
- `ArrayList<BeardStyle>` `beardList`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\HairOutfitDefinitions.html`*
