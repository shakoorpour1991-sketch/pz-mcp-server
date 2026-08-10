---
title: zombie.iso.worldgen.zombie.ZombieVoronoiEntry
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.zombie
---

# zombie.iso.worldgen.zombie.ZombieVoronoiEntry

`public record ZombieVoronoiEntry(int numberPoints, ClosestSelection closestPoint, double scale, double cutoff) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.zombie

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.zombie.ZombieVoronoiEntry

## Constructors

### public ZombieVoronoiEntry(int numberPoints,
String closestPoint,
double scale,
double cutoff)

**Parameters:**
- `int` `numberPoints`
- `String` `closestPoint`
- `double` `scale`
- `double` `cutoff`

### public ZombieVoronoiEntry(int numberPoints,
ClosestSelection closestPoint,
double scale,
double cutoff)

Creates an instance of a ZombieVoronoiEntry record class.

**Parameters:**
- `int` `numberPoints` — the value for the numberPoints record component
- `ClosestSelection` `closestPoint` — the value for the closestPoint record component
- `double` `scale` — the value for the scale record component
- `double` `cutoff` — the value for the cutoff record component

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

### public int numberPoints()

Returns the value of the numberPoints record component.

**Returns:** `int`

### public ClosestSelection closestPoint()

Returns the value of the closestPoint record component.

**Returns:** `ClosestSelection`

### public double scale()

Returns the value of the scale record component.

**Returns:** `double`

### public double cutoff()

Returns the value of the cutoff record component.

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\zombie\ZombieVoronoiEntry.html`*
