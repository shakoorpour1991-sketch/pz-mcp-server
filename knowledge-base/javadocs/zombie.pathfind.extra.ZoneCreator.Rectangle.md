---
title: zombie.pathfind.extra.ZoneCreator.Rectangle
source: Unofficial PZ JavaDocs 42.12.0
version: 42.12.0
kind: record
package: zombie.pathfind.extra
---

# zombie.pathfind.extra.ZoneCreator.Rectangle

`public static record ZoneCreator.Rectangle(int xmin, int xmax, int ymin, int ymax, int z) extends Record`

**Kind:** record · **Package:** zombie.pathfind.extra

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.pathfind.extra.ZoneCreator.Rectangle

## Constructors

### public Rectangle(int xmin,
int xmax,
int ymin,
int ymax,
int z)

Creates an instance of a Rectangle record class.

**Parameters:**
- `int` `xmin` — the value for the xmin record component
- `int` `xmax` — the value for the xmax record component
- `int` `ymin` — the value for the ymin record component
- `int` `ymax` — the value for the ymax record component
- `int` `z` — the value for the z record component

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

### public int xmin()

Returns the value of the xmin record component.

**Returns:** `int`

### public int xmax()

Returns the value of the xmax record component.

**Returns:** `int`

### public int ymin()

Returns the value of the ymin record component.

**Returns:** `int`

### public int ymax()

Returns the value of the ymax record component.

**Returns:** `int`

### public int z()

Returns the value of the z record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.12.0 (42.12.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\extra\ZoneCreator.Rectangle.html`*
