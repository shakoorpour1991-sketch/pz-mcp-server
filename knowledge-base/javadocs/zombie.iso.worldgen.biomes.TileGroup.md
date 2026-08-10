---
title: zombie.iso.worldgen.biomes.TileGroup
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.biomes
---

# zombie.iso.worldgen.biomes.TileGroup

`public record TileGroup(int sx, int sy, List<String> tiles) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.biomes

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.biomes.TileGroup

## Constructors

### public TileGroup(int sx,
int sy,
List<String> tiles)

Creates an instance of a TileGroup record class.

**Parameters:**
- `int` `sx` — the value for the sx record component
- `int` `sy` — the value for the sy record component
- `List<String>` `tiles` — the value for the tiles record component

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

### public int sx()

Returns the value of the sx record component.

**Returns:** `int`

### public int sy()

Returns the value of the sy record component.

**Returns:** `int`

### public List<String> tiles()

Returns the value of the tiles record component.

**Returns:** `List<String>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\biomes\TileGroup.html`*
