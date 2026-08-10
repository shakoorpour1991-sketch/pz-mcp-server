---
title: zombie.iso.worldgen.enums.TileLookupRetValue
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.enums
---

# zombie.iso.worldgen.enums.TileLookupRetValue

`public record TileLookupRetValue(TileLookup tileLookup, String tile) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.enums

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.enums.TileLookupRetValue

## Constructors

### public TileLookupRetValue(TileLookup tileLookup,
String tile)

Creates an instance of a TileLookupRetValue record class.

**Parameters:**
- `TileLookup` `tileLookup` — the value for the tileLookup record component
- `String` `tile` — the value for the tile record component

## Methods

### public final String toString()

Returns a string representation of this record class. The representation contains the name of the class, followed by the name and value of each of the record components.

**Returns:** `String`

### public final int hashCode()

Returns a hash code value for this object. The value is derived from the hash code of each of the record components.

**Returns:** `int`

### public final boolean equals(Object o)

Indicates whether some other object is "equal to" this one. The objects are equal if the other object is of the same class and if all the record components are equal. All components in this record class are compared with Objects::equals(Object,Object).

**Parameters:**
- `Object` `o` — the object with which to compare

**Returns:** `boolean`

### public TileLookup tileLookup()

Returns the value of the tileLookup record component.

**Returns:** `TileLookup`

### public String tile()

Returns the value of the tile record component.

**Returns:** `String`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\enums\TileLookupRetValue.html`*
