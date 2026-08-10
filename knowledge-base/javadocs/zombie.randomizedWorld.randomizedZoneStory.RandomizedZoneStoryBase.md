---
title: zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedZoneStory
---

# zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase

`public class RandomizedZoneStoryBase extends RandomizedWorldBase`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedZoneStory

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase
- zombie.randomizedWorld.randomizedZoneStory.RandomizedZoneStoryBase

## Fields

### public boolean alwaysDo

### public static final int baseChance

### public static int totalChance

### public static final String zoneStory

### public int chance

### public final ArrayList<String> zoneType

## Constructors

### public RandomizedZoneStoryBase()

## Methods

### public static boolean isValidForStory(Zone zone,
boolean force)

**Parameters:**
- `Zone` `zone`
- `boolean` `force`

**Returns:** `boolean`

### public static void initAllRZSMapChance(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public boolean isValid(Zone zone,
boolean force)

**Parameters:**
- `Zone` `zone`
- `boolean` `force`

**Returns:** `boolean`

### public IsoGridSquare getRandomFreeSquare(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomFreeSquare(RandomizedZoneStoryBase rzs,
Zone zone,
IsoGridSquare notSquare)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`
- `IsoGridSquare` `notSquare`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomExtraFreeSquare(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `IsoGridSquare`

### public static IsoGridSquare getRandomFreeUnoccupiedSquare(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `IsoGridSquare`

### public static IsoGridSquare getRandomExtraFreeUnoccupiedSquare(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `IsoGridSquare`

### public IsoGridSquare getRandomFreeSquareFullZone(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `IsoGridSquare`

### public void randomizeZoneStory(Zone zone)

**Parameters:**
- `Zone` `zone`

**Returns:** `void`

### public boolean isValid()

**Returns:** `boolean`

### public void cleanAreaForStory(RandomizedZoneStoryBase rzs,
Zone zone)

**Parameters:**
- `RandomizedZoneStoryBase` `rzs`
- `Zone` `zone`

**Returns:** `void`

### public static void cleanSquareForStory(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public int getMinimumWidth()

**Returns:** `int`

### public int getMinimumHeight()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedZoneStory\RandomizedZoneStoryBase.html`*
