---
title: zombie.iso.IsoDirections
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.iso
---

# zombie.iso.IsoDirections

`public enum IsoDirections extends Enum<IsoDirections>`

**Kind:** enum · **Package:** zombie.iso

## Inheritance
- java.lang.Object
- java.lang.Enum<IsoDirections>
- zombie.iso.IsoDirections

## Fields

### public static final IsoDirections N

### public static final IsoDirections NW

### public static final IsoDirections W

### public static final IsoDirections SW

### public static final IsoDirections S

### public static final IsoDirections SE

### public static final IsoDirections E

### public static final IsoDirections NE

## Methods

### public static IsoDirections[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `IsoDirections[]`

### public static IsoDirections valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `IsoDirections`

### public static IsoDirections fromString(String str)

**Parameters:**
- `String` `str`

**Returns:** `IsoDirections`

### public static IsoDirections fromIndex(int index)

**Parameters:**
- `int` `index`

**Returns:** `IsoDirections`

### public IsoDirections RotLeft()

**Returns:** `IsoDirections`

### public IsoDirections RotLeft(int times)

**Parameters:**
- `int` `times`

**Returns:** `IsoDirections`

### public IsoDirections RotRight()

**Returns:** `IsoDirections`

### public IsoDirections RotRight(int times)

**Parameters:**
- `int` `times`

**Returns:** `IsoDirections`

### public IsoDirections Rot180()

**Returns:** `IsoDirections`

### public static IsoDirections fromAngle(Vector2 v)

**Parameters:**
- `Vector2` `v`

**Returns:** `IsoDirections`

### public static IsoDirections fromAngle(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `IsoDirections`

### public static IsoDirections fromAngle(float angleRadians)

**Parameters:**
- `float` `angleRadians`

**Returns:** `IsoDirections`

### public static IsoDirections cardinalFromAngle(Vector2 v)

**Parameters:**
- `Vector2` `v`

**Returns:** `IsoDirections`

### public static IsoDirections cardinalFromAngle(float dx,
float dy)

**Parameters:**
- `float` `dx`
- `float` `dy`

**Returns:** `IsoDirections`

### public static IsoDirections cardinalFromAngle(float angleRadians)

**Parameters:**
- `float` `angleRadians`

**Returns:** `IsoDirections`

### public int dx()

**Returns:** `int`

### public int dy()

**Returns:** `int`

### public boolean isCardinal()

**Returns:** `boolean`

### public boolean isDiagonal()

**Returns:** `boolean`

### public Vector2 ToVector()

**Returns:** `Vector2`

### public Vector2 ToVector(Vector2 result)

**Parameters:**
- `Vector2` `result`

**Returns:** `Vector2`

### public Vector2 addToVector(Vector2 addTo,
Vector2 result)

**Parameters:**
- `Vector2` `addTo`
- `Vector2` `result`

**Returns:** `Vector2`

### public float toAngle()

**Returns:** `float`

### public float toAngleDegrees()

**Returns:** `float`

### public static IsoDirections getRandom()

**Returns:** `IsoDirections`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\IsoDirections.html`*
