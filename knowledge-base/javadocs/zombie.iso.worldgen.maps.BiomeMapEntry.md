---
title: zombie.iso.worldgen.maps.BiomeMapEntry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.maps
---

# zombie.iso.worldgen.maps.BiomeMapEntry

`public record BiomeMapEntry(int pixel, String biome, String ore, String zone) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.maps

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.maps.BiomeMapEntry

## Constructors

### public BiomeMapEntry(int pixel,
String biome,
String ore,
String zone)

Creates an instance of a BiomeMapEntry record class.

**Parameters:**
- `int` `pixel` — the value for the pixel record component
- `String` `biome` — the value for the biome record component
- `String` `ore` — the value for the ore record component
- `String` `zone` — the value for the zone record component

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

### public int pixel()

Returns the value of the pixel record component.

**Returns:** `int`

### public String biome()

Returns the value of the biome record component.

**Returns:** `String`

### public String ore()

Returns the value of the ore record component.

**Returns:** `String`

### public String zone()

Returns the value of the zone record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\maps\BiomeMapEntry.html`*
