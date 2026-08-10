---
title: zombie.pathfind.extra.Direction
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: enum
package: zombie.pathfind.extra
---

# zombie.pathfind.extra.Direction

`public enum Direction extends Enum<Direction>`

**Kind:** enum · **Package:** zombie.pathfind.extra

## Inheritance
- java.lang.Object
- java.lang.Enum<Direction>
- zombie.pathfind.extra.Direction

## Fields

### public static final Direction NORTH

### public static final Direction SOUTH

### public static final Direction WEST

### public static final Direction EAST

### public static final Direction NORTH_WEST

### public static final Direction NORTH_EAST

### public static final Direction SOUTH_WEST

### public static final Direction SOUTH_EAST

## Methods

### public static Direction[] values()

Returns an array containing the constants of this enum class, in
the order they are declared.

**Returns:** `Direction[]`

### public static Direction valueOf(String name)

Returns the enum constant of this class with the specified name.
The string must match exactly an identifier used to declare an
enum constant in this class. (Extraneous whitespace characters are
not permitted.)

**Parameters:**
- `String` `name` — the name of the enum constant to be returned.

**Returns:** `Direction`

### public static SquareCoord move(SquareCoord coords,
Direction direction)

**Parameters:**
- `SquareCoord` `coords`
- `Direction` `direction`

**Returns:** `SquareCoord`

### public SquareCoord move(SquareCoord coords)

**Parameters:**
- `SquareCoord` `coords`

**Returns:** `SquareCoord`

### public int x()

**Returns:** `int`

### public int y()

**Returns:** `int`

### public int z()

**Returns:** `int`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\extra\Direction.html`*
