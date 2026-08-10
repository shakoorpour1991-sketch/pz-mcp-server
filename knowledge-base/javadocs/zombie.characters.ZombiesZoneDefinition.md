---
title: zombie.characters.ZombiesZoneDefinition
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.ZombiesZoneDefinition

`public final class ZombiesZoneDefinition extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.ZombiesZoneDefinition

## Fields

### public static boolean dirty

## Constructors

### public ZombiesZoneDefinition()

## Methods

### public static void dressInRandomOutfit(IsoZombie chr)

**Parameters:**
- `IsoZombie` `chr`

**Returns:** `void`

### public static Zone getDefinitionZoneAt(int x,
int y,
int z)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `Zone`

### public static ZombiesZoneDefinition.PickDefinition pickDefinition(int x,
int y,
int z,
boolean bFemale,
boolean isOnSpawn)

**Parameters:**
- `int` `x`
- `int` `y`
- `int` `z`
- `boolean` `bFemale`
- `boolean` `isOnSpawn`

**Returns:** `ZombiesZoneDefinition.PickDefinition`

### public static void applyDefinition(IsoZombie chr,
Zone zombieZone,
zombie.characters.ZombiesZoneDefinition.ZZDOutfit zombieToSpawn,
boolean bFemale)

**Parameters:**
- `IsoZombie` `chr`
- `Zone` `zombieZone`
- `zombie.characters.ZombiesZoneDefinition.ZZDOutfit` `zombieToSpawn`
- `boolean` `bFemale`

**Returns:** `void`

### public static Outfit getRandomDefaultOutfit(boolean bFemale,
String roomName)

**Parameters:**
- `boolean` `bFemale`
- `String` `roomName`

**Returns:** `Outfit`

### public static zombie.characters.ZombiesZoneDefinition.ZZDOutfit getRandomOutfitInSetList(ArrayList<zombie.characters.ZombiesZoneDefinition.ZZDOutfit> list,
boolean doTotalChance100)

**Parameters:**
- `ArrayList<zombie.characters.ZombiesZoneDefinition.ZZDOutfit>` `list`
- `boolean` `doTotalChance100`

**Returns:** `zombie.characters.ZombiesZoneDefinition.ZZDOutfit`

### public static void registerCustomOutfits()

**Returns:** `void`

### public static int pickPersistentOutfit(IsoGridSquare square)

**Parameters:**
- `IsoGridSquare` `square`

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\ZombiesZoneDefinition.html`*
