---
title: zombie.iso.worldgen.biomes.Grass
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.Grass

`public record Grass(float fernChance, float noGrassDiv, List<Double> noGrassStages, List<Double> grassStages) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.biomes.Grass

## Fields

### public static final Grass DEFAULT

## Constructors

### public Grass(float fernChance,
float noGrassDiv,
List<Double> noGrassStages,
List<Double> grassStages)

Creates an instance of a Grass record class.

**Parameters:**
- `float` `fernChance` — the value for the fernChance record component
- `float` `noGrassDiv` — the value for the noGrassDiv record component
- `List<Double>` `noGrassStages` — the value for the noGrassStages record component
- `List<Double>` `grassStages` — the value for the grassStages record component

## Methods

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

### public float fernChance()

Returns the value of the fernChance record component.

**Returns:** `float`

### public float noGrassDiv()

Returns the value of the noGrassDiv record component.

**Returns:** `float`

### public List<Double> noGrassStages()

Returns the value of the noGrassStages record component.

**Returns:** `List<Double>`

### public List<Double> grassStages()

Returns the value of the grassStages record component.

**Returns:** `List<Double>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\Grass.html`*
