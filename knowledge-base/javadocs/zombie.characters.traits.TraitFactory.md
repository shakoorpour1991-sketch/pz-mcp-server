---
title: zombie.characters.traits.TraitFactory
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: class
package: zombie.characters.traits
---

# zombie.characters.traits.TraitFactory

`public final class TraitFactory extends Object`

**Kind:** class · **Package:** zombie.characters.traits

## Inheritance
- java.lang.Object
- zombie.characters.traits.TraitFactory

## Fields

### public static LinkedHashMap<String,TraitFactory.Trait> TraitMap

## Constructors

### public TraitFactory()

## Methods

### public static void init()

**Returns:** `void`

### public static void setMutualExclusive(String a,
String b)

**Parameters:**
- `String` `a`
- `String` `b`

**Returns:** `void`

### public static void sortList()

**Returns:** `void`

### public static TraitFactory.Trait addTrait(String type,
String name,
int cost,
String desc,
boolean profession)

**Parameters:**
- `String` `type`
- `String` `name`
- `int` `cost`
- `String` `desc`
- `boolean` `profession`

**Returns:** `TraitFactory.Trait`

### public static TraitFactory.Trait addTrait(String type,
String name,
int cost,
String desc,
boolean profession,
boolean removeInMP)

**Parameters:**
- `String` `type`
- `String` `name`
- `int` `cost`
- `String` `desc`
- `boolean` `profession`
- `boolean` `removeInMP`

**Returns:** `TraitFactory.Trait`

### public static ArrayList<TraitFactory.Trait> getTraits()

**Returns:** `ArrayList<TraitFactory.Trait>`

### public static TraitFactory.Trait getTrait(String name)

**Parameters:**
- `String` `name`

**Returns:** `TraitFactory.Trait`

### public static void Reset()

**Returns:** `void`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\characters\traits\TraitFactory.html`*
