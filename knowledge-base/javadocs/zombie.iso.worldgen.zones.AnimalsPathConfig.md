---
title: zombie.iso.worldgen.zones.AnimalsPathConfig
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.zones
---

# zombie.iso.worldgen.zones.AnimalsPathConfig

`public record AnimalsPathConfig(String animalType, int count, float chance, int[] points, int[] radius, int[] extension, float extensionChance) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.zones

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.zones.AnimalsPathConfig

## Constructors

### public AnimalsPathConfig(String animalType,
int count,
float chance,
int[] points,
int[] radius,
int[] extension,
float extensionChance)

Creates an instance of a AnimalsPathConfig record class.

**Parameters:**
- `String` `animalType` — the value for the animalType record component
- `int` `count` — the value for the count record component
- `float` `chance` — the value for the chance record component
- `int[]` `points` — the value for the points record component
- `int[]` `radius` — the value for the radius record component
- `int[]` `extension` — the value for the extension record component
- `float` `extensionChance` — the value for the extensionChance record component

## Methods

### public int getNameHash()

**Returns:** `int`

### public final String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. Reference components are compared with Objects::equals(Object,Object); primitive components are compared with the compare method from their corresponding wrapper classes.

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public String animalType()

Returns the value of the animalType record component.

**Returns:** `String`

### public int count()

Returns the value of the count record component.

**Returns:** `int`

### public float chance()

Returns the value of the chance record component.

**Returns:** `float`

### public int[] points()

Returns the value of the points record component.

**Returns:** `int[]`

### public int[] radius()

Returns the value of the radius record component.

**Returns:** `int[]`

### public int[] extension()

Returns the value of the extension record component.

**Returns:** `int[]`

### public float extensionChance()

Returns the value of the extensionChance record component.

**Returns:** `float`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\zones\AnimalsPathConfig.html`*
