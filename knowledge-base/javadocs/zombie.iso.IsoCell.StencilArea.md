---
title: zombie.iso.IsoCell.StencilArea
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso
---

# zombie.iso.IsoCell.StencilArea

`public static record IsoCell.StencilArea(int stencilX1, int stencilY1, int stencilX2, int stencilY2, int x, int y, int texWidth, int texHeight, int offX, int offY) extends Record`

**Kind:** record · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.IsoCell.StencilArea

## Constructors

### public StencilArea(int stencilX1,
int stencilY1,
int stencilX2,
int stencilY2,
int x,
int y,
int texWidth,
int texHeight,
int offX,
int offY)

Creates an instance of a StencilArea record class.

**Parameters:**
- `int` `stencilX1` — the value for the stencilX1 record component
- `int` `stencilY1` — the value for the stencilY1 record component
- `int` `stencilX2` — the value for the stencilX2 record component
- `int` `stencilY2` — the value for the stencilY2 record component
- `int` `x` — the value for the x record component
- `int` `y` — the value for the y record component
- `int` `texWidth` — the value for the texWidth record component
- `int` `texHeight` — the value for the texHeight record component
- `int` `offX` — the value for the offX record component
- `int` `offY` — the value for the offY record component

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

### public int stencilX1()

Returns the value of the stencilX1 record component.

**Returns:** `int`

### public int stencilY1()

Returns the value of the stencilY1 record component.

**Returns:** `int`

### public int stencilX2()

Returns the value of the stencilX2 record component.

**Returns:** `int`

### public int stencilY2()

Returns the value of the stencilY2 record component.

**Returns:** `int`

### public int x()

Returns the value of the x record component.

**Returns:** `int`

### public int y()

Returns the value of the y record component.

**Returns:** `int`

### public int texWidth()

Returns the value of the texWidth record component.

**Returns:** `int`

### public int texHeight()

Returns the value of the texHeight record component.

**Returns:** `int`

### public int offX()

Returns the value of the offX record component.

**Returns:** `int`

### public int offY()

Returns the value of the offY record component.

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoCell.StencilArea.html`*
