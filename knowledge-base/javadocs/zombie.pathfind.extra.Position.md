---
title: zombie.pathfind.extra.Position
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.pathfind.extra
---

# zombie.pathfind.extra.Position

`public record Position(SquareCoord coords, Direction direction, int distance, int tick, EnumMap<Direction, BorderStatus> walls) extends Record`

**Kind:** record · **Package:** zombie.pathfind.extra

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.pathfind.extra.Position

## Constructors

### public Position(SquareCoord coords,
Direction direction,
int distance,
int tick,
EnumMap<Direction, BorderStatus> walls)

Creates an instance of a Position record class.

**Parameters:**
- `SquareCoord` `coords` — the value for the coords record component
- `Direction` `direction` — the value for the direction record component
- `int` `distance` — the value for the distance record component
- `int` `tick` — the value for the tick record component
- `EnumMap<Direction, BorderStatus>` `walls` — the value for the walls record component

## Methods

### public int x()

**Returns:** `int`

### public int y()

**Returns:** `int`

### public int z()

**Returns:** `int`

### public int manhattan(SquareCoord coords)

**Parameters:**
- `SquareCoord` `coords`

**Returns:** `int`

### public BorderStatus isWall(Direction direction)

**Parameters:**
- `Direction` `direction`

**Returns:** `BorderStatus`

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

### public SquareCoord coords()

Returns the value of the coords record component.

**Returns:** `SquareCoord`

### public Direction direction()

Returns the value of the direction record component.

**Returns:** `Direction`

### public int distance()

Returns the value of the distance record component.

**Returns:** `int`

### public int tick()

Returns the value of the tick record component.

**Returns:** `int`

### public EnumMap<Direction, BorderStatus> walls()

Returns the value of the walls record component.

**Returns:** `EnumMap<Direction, BorderStatus>`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\pathfind\extra\Position.html`*
