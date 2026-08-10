---
title: zombie.iso.worldgen.enums.TileReplacementRetValue
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.enums
---

# zombie.iso.worldgen.enums.TileReplacementRetValue

`public record TileReplacementRetValue(TileReplacement retval, IsoSprite placed) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.enums

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.enums.TileReplacementRetValue

## Constructors

### public TileReplacementRetValue(TileReplacement retval,
IsoSprite placed)

Creates an instance of a TileReplacementRetValue record class.

**Parameters:**
- `TileReplacement` `retval` — the value for the retval record component
- `IsoSprite` `placed` — the value for the placed record component

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

### public TileReplacement retval()

Returns the value of the retval record component.

**Returns:** `TileReplacement`

### public IsoSprite placed()

Returns the value of the placed record component.

**Returns:** `IsoSprite`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\enums\TileReplacementRetValue.html`*
