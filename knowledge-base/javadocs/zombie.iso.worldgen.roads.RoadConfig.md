---
title: zombie.iso.worldgen.roads.RoadConfig
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen.roads
---

# zombie.iso.worldgen.roads.RoadConfig

`public record RoadConfig(List<TileGroup> tiles, double probaRoads, double probability, double filter) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen.roads

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.roads.RoadConfig

## Constructors

### public RoadConfig(List<TileGroup> tiles,
double probaRoads,
double probability,
double filter)

Creates an instance of a RoadConfig record class.

**Parameters:**
- `List<TileGroup>` `tiles` — the value for the tiles record component
- `double` `probaRoads` — the value for the probaRoads record component
- `double` `probability` — the value for the probability record component
- `double` `filter` — the value for the filter record component

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

### public List<TileGroup> tiles()

Returns the value of the tiles record component.

**Returns:** `List<TileGroup>`

### public double probaRoads()

Returns the value of the probaRoads record component.

**Returns:** `double`

### public double probability()

Returns the value of the probability record component.

**Returns:** `double`

### public double filter()

Returns the value of the filter record component.

**Returns:** `double`

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\roads\RoadConfig.html`*
