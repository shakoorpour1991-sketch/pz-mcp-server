---
title: zombie.randomizedWorld.randomizedBuilding.RBBasic
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.randomizedWorld.randomizedBuilding
---

# zombie.randomizedWorld.randomizedBuilding.RBBasic

`public final class RBBasic extends RandomizedBuildingBase`

**Kind:** class · **Package:** zombie.randomizedWorld.randomizedBuilding

## Inheritance
- java.lang.Object
- zombie.randomizedWorld.RandomizedWorldBase
- zombie.randomizedWorld.randomizedBuilding.RandomizedBuildingBase
- zombie.randomizedWorld.randomizedBuilding.RBBasic

## Description

This is a basic randomized building, some inside door will be opened, can
have profession specific loots and cold cooked food in stove Also this type
of house can have speicfic dead survivor/zombies/story inside them

## Constructors

### public RBBasic()

## Methods

### public void randomizeBuilding(BuildingDef def)

**Parameters:**
- `BuildingDef` `def`

**Returns:** `void`

### public void forceVehicleDistribution(BaseVehicle vehicle,
String distribution)

**Parameters:**
- `BaseVehicle` `vehicle`
- `String` `distribution`

**Returns:** `void`

### public void doProfessionStory(BuildingDef def,
String professionChoosed)

**Parameters:**
- `BuildingDef` `def`
- `String` `professionChoosed`

**Returns:** `void`

### public void doRandomDeadSurvivorStory(BuildingDef buildingDef,
RandomizedDeadSurvivorBase dsDef)

**Parameters:**
- `BuildingDef` `buildingDef`
- `RandomizedDeadSurvivorBase` `dsDef`

**Returns:** `void`

### public ArrayList<RandomizedDeadSurvivorBase> getSurvivorStories()

**Returns:** `ArrayList<RandomizedDeadSurvivorBase>`

### public ArrayList<String> getSurvivorProfession()

**Returns:** `ArrayList<String>`

### public static ArrayList<String> getUniqueRDSSpawned()

**Returns:** `ArrayList<String>`

### public void doProfessionBuilding(BuildingDef def,
String professionChoosed,
ItemPickerJava.ItemPickerRoom prof)

**Parameters:**
- `BuildingDef` `def`
- `String` `professionChoosed`
- `ItemPickerJava.ItemPickerRoom` `prof`

**Returns:** `void`

### public static void doOfficeStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doNolansOfficeStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doCafeStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doGigamartStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doGroceryStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doGeneralRoom(IsoGridSquare sq,
ArrayList<String> clutter)

**Parameters:**
- `IsoGridSquare` `sq`
- `ArrayList<String>` `clutter`

**Returns:** `void`

### public static void doJudgeStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doTwiggyStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

### public static void doWoodcraftStuff(IsoGridSquare sq)

**Parameters:**
- `IsoGridSquare` `sq`

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\randomizedWorld\randomizedBuilding\RBBasic.html`*
