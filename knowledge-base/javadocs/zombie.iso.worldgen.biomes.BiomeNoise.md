---
title: zombie.iso.worldgen.biomes.BiomeNoise
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.BiomeNoise

`public record BiomeNoise(double landscape, double plant, double bush, double temperature, double hygrometry, double ore) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.biomes.BiomeNoise

## Constructors

### public BiomeNoise(double landscape,
double plant,
double bush,
double temperature,
double hygrometry,
double ore)

Creates an instance of a BiomeNoise record class.

**Parameters:**
- `double` `landscape` — the value for the landscape record component
- `double` `plant` — the value for the plant record component
- `double` `bush` — the value for the bush record component
- `double` `temperature` — the value for the temperature record component
- `double` `hygrometry` — the value for the hygrometry record component
- `double` `ore` — the value for the ore record component

## Methods

### public final String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with the compare method from their corresponding wrapper classes.

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public double landscape()

Returns the value of the landscape record component.

**Returns:** `double`

### public double plant()

Returns the value of the plant record component.

**Returns:** `double`

### public double bush()

Returns the value of the bush record component.

**Returns:** `double`

### public double temperature()

Returns the value of the temperature record component.

**Returns:** `double`

### public double hygrometry()

Returns the value of the hygrometry record component.

**Returns:** `double`

### public double ore()

Returns the value of the ore record component.

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\BiomeNoise.html`*
