---
title: zombie.core.skinnedmodel.population.ClothingDecals
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: class
package: zombie.core.skinnedmodel.population
---

# zombie.core.skinnedmodel.population.ClothingDecals

`public class ClothingDecals extends Object`

**Kind:** class · **Package:** zombie.core.skinnedmodel.population

## Inheritance
- java.lang.Object
- zombie.core.skinnedmodel.population.ClothingDecals

## Fields

### public final ArrayList<ClothingDecalGroup> groups

### public static ClothingDecals instance

## Constructors

### public ClothingDecals()

## Methods

### public static void init()

**Returns:** `void`

### public static void Reset()

**Returns:** `void`

### public static ClothingDecals Parse(String filename)

**Parameters:**
- `String` `filename`

**Returns:** `ClothingDecals`

### public static ClothingDecals parse(String filename)
throws javax.xml.bind.JAXBException,
IOException

**Parameters:**
- `String` `filename`

**Returns:** `ClothingDecals`

### public ClothingDecal getDecal(String name)

**Parameters:**
- `String` `name`

**Returns:** `ClothingDecal`

### public ClothingDecalGroup FindGroup(String name)

**Parameters:**
- `String` `name`

**Returns:** `ClothingDecalGroup`

### public String getRandomDecal(String groupName)

**Parameters:**
- `String` `groupName`

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\core\skinnedmodel\population\ClothingDecals.html`*
