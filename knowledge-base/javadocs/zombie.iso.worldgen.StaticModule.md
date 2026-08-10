---
title: zombie.iso.worldgen.StaticModule
source: Unofficial PZ JavaDocs 42.20.0
version: 42.20.0
kind: record
package: zombie.iso.worldgen
---

# zombie.iso.worldgen.StaticModule

`public record StaticModule(Biome biome, PrefabStructure prefab, int xmin, int xmax, int ymin, int ymax) extends Record`

**Kind:** record · **Package:** zombie.iso.worldgen

## Inheritance
- java.lang.Object
- java.lang.Record
- zombie.iso.worldgen.StaticModule

## Constructors

### public StaticModule(Biome biome,
PrefabStructure prefab,
int xmin,
int xmax,
int ymin,
int ymax)

Creates an instance of a StaticModule record class.

**Parameters:**
- `Biome` `biome` — the value for the biome record component
- `PrefabStructure` `prefab` — the value for the prefab record component
- `int` `xmin` — the value for the xmin record component
- `int` `xmax` — the value for the xmax record component
- `int` `ymin` — the value for the ymin record component
- `int` `ymax` — the value for the ymax record component

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

### public Biome biome()

Returns the value of the biome record component.

**Returns:** `Biome`

### public PrefabStructure prefab()

Returns the value of the prefab record component.

**Returns:** `PrefabStructure`

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

---
*Source: Unofficial PZ JavaDocs 42.20.0 (42.20.0) · parsed from `C:\Users\Administrator\Desktop\New folder\gpt_research\ProjectZomboidJavaDocs\zombie\iso\worldgen\StaticModule.html`*
