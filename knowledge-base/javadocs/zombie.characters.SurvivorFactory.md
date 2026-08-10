---
title: zombie.characters.SurvivorFactory
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.characters
---

# zombie.characters.SurvivorFactory

`public final class SurvivorFactory extends Object`

**Kind:** class · **Package:** zombie.characters

## Inheritance
- java.lang.Object
- zombie.characters.SurvivorFactory

## Fields

### public static final ArrayList<String> FemaleForenames

### public static final ArrayList<String> MaleForenames

### public static final ArrayList<String> Surnames

## Constructors

### public SurvivorFactory()

## Methods

### public static void Reset()

**Returns:** `void`

### public static SurvivorDesc[] CreateFamily(int nCount)

**Parameters:**
- `int` `nCount`

**Returns:** `SurvivorDesc[]`

### public static SurvivorDesc CreateSurvivor()

**Returns:** `SurvivorDesc`

### public static SurvivorDesc CreateSurvivor(SurvivorFactory.SurvivorType survivorType,
boolean bFemale)

**Parameters:**
- `SurvivorFactory.SurvivorType` `survivorType`
- `boolean` `bFemale`

**Returns:** `SurvivorDesc`

### public static void setTorso(SurvivorDesc survivor)

**Parameters:**
- `SurvivorDesc` `survivor`

**Returns:** `void`

### public static SurvivorDesc CreateSurvivor(SurvivorFactory.SurvivorType survivorType)

**Parameters:**
- `SurvivorFactory.SurvivorType` `survivorType`

**Returns:** `SurvivorDesc`

### public static SurvivorDesc[] CreateSurvivorGroup(int nCount)

**Parameters:**
- `int` `nCount`

**Returns:** `SurvivorDesc[]`

### public static IsoSurvivor InstansiateInCell(SurvivorDesc desc,
IsoCell cell,
int x,
int y,
int z)

**Parameters:**
- `SurvivorDesc` `desc`
- `IsoCell` `cell`
- `int` `x`
- `int` `y`
- `int` `z`

**Returns:** `IsoSurvivor`

### public static void randomName(SurvivorDesc desc)

**Parameters:**
- `SurvivorDesc` `desc`

**Returns:** `void`

### public static void addSurname(String surName)

**Parameters:**
- `String` `surName`

**Returns:** `void`

### public static void addFemaleForename(String forename)

**Parameters:**
- `String` `forename`

**Returns:** `void`

### public static void addMaleForename(String forename)

**Parameters:**
- `String` `forename`

**Returns:** `void`

### public static String getRandomSurname()

**Returns:** `String`

### public static String getRandomForename(boolean bFemale)

**Parameters:**
- `boolean` `bFemale`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\SurvivorFactory.html`*
