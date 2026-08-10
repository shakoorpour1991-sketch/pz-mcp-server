---
title: zombie.iso.worldgen.utils.ChunkCoord
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.utils
---

# zombie.iso.worldgen.utils.ChunkCoord

`public record ChunkCoord(int x, int y) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.utils

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.utils.ChunkCoord

## Constructors

### public ChunkCoord(int x,
int y)

Creates an instance of a ChunkCoord record class.

**Parameters:**
- `int` `x` — the value for the x record component
- `int` `y` — the value for the y record component

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

### public int x()

Returns the value of the x record component.

**Returns:** `int`

### public int y()

Returns the value of the y record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\utils\ChunkCoord.html`*
